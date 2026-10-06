"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";
import { getProduct } from "@/config/products";
import { isValidQuantity, lineKey, MAX_UNIT_QUANTITY, summarizeOrder, type CartLine, type OrderSummary } from "@/lib/order";
import type { PriceMap } from "@/lib/prices";
import type { StatusMap } from "@/lib/status";

export type Destination = {
  countryCode: string;
  postalCode: string;
  city: string;
  address: string;
};

type CartState = { lines: CartLine[]; destination: Destination };

type CartContextValue = {
  /** false tant que le panier n'a pas été relu depuis le navigateur. */
  ready: boolean;
  lines: CartLine[];
  destination: Destination;
  summary: OrderSummary;
  /** Prix effectifs des produits (catalogue + modifications de l’admin). */
  prices: PriceMap;
  /** Clés des prix validés (les autres sont provisoires). */
  validated: readonly string[];
  /** Statut de publication des fiches (seules les fiches publiées peuvent être commandées). */
  statuses: StatusMap;
  count: number;
  /** Ajoute une ligne. Grille au stère : la quantité est remplacée ; autres produits : elle s’additionne. */
  add: (line: CartLine) => void;
  setQuantity: (productSlug: string, variantId: string, quantity: number) => void;
  /** Change la variante d'une ligne (ex. 50 cm → 33 cm) en gardant la quantité ; le prix est recalculé. */
  changeVariant: (productSlug: string, fromVariantId: string, toVariantId: string) => void;
  remove: (productSlug: string, variantId: string) => void;
  clear: () => void;
  setDestination: (d: Partial<Destination>) => void;
};

/* ---------- Stockage du panier dans le navigateur (localStorage) ---------- */

const STORAGE_KEY = "panier-v2"; // lignes produit/variante/quantité (les lignes invalides sont ignorées)
const emptyDestination: Destination = { countryCode: "FR", postalCode: "", city: "", address: "" };
const SERVER_STATE: CartState = { lines: [], destination: emptyDestination };

let state: CartState | null = null;
const listeners = new Set<() => void>();

function load(): CartState {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
    return {
      lines: Array.isArray(data.lines) ? data.lines : [],
      destination: { ...emptyDestination, ...data.destination },
    };
  } catch {
    // stockage indisponible (navigation privée...) : panier en mémoire seulement
    return SERVER_STATE;
  }
}

const getSnapshot = () => (state ??= load());
const getServerSnapshot = () => SERVER_STATE;

function subscribe(listener: () => void) {
  listeners.add(listener);
  // Synchronise le panier entre plusieurs onglets
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      state = load();
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function update(fn: (s: CartState) => CartState) {
  state = fn(getSnapshot());
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
  listeners.forEach((l) => l());
}

/* ---------- Contexte React ---------- */

const CartContext = createContext<CartContextValue | null>(null);

const isValidQty = (slug: string, q: number) => {
  const product = getProduct(slug);
  return Boolean(product && isValidQuantity(product, q));
};

const noopSubscribe = () => () => {};

export function CartProvider({
  children,
  prices,
  validated,
  statuses,
}: {
  children: React.ReactNode;
  prices: PriceMap;
  validated: string[];
  statuses: StatusMap;
}) {
  const { lines, destination } = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const ready = useSyncExternalStore(noopSubscribe, () => true, () => false);

  const add = useCallback((line: CartLine) => {
    if (!isValidQty(line.productSlug, line.quantity)) return;
    const cumulative = getProduct(line.productSlug)?.pricing === "unitaire";
    update((s) => {
      const key = lineKey(line);
      const exists = s.lines.some((l) => lineKey(l) === key);
      const lines = exists
        ? s.lines.map((l) =>
            lineKey(l) === key
              ? { ...l, quantity: cumulative ? Math.min(l.quantity + line.quantity, MAX_UNIT_QUANTITY) : line.quantity }
              : l,
          )
        : [...s.lines, line];
      return { ...s, lines };
    });
  }, []);

  const setQuantity = useCallback((productSlug: string, variantId: string, quantity: number) => {
    if (!isValidQty(productSlug, quantity)) return;
    const key = lineKey({ productSlug, variantId });
    update((s) => ({ ...s, lines: s.lines.map((l) => (lineKey(l) === key ? { ...l, quantity } : l)) }));
  }, []);

  const changeVariant = useCallback((productSlug: string, fromVariantId: string, toVariantId: string) => {
    const product = getProduct(productSlug);
    if (!product?.variants.some((v) => v.id === toVariantId)) return;
    const from = lineKey({ productSlug, variantId: fromVariantId });
    const to = lineKey({ productSlug, variantId: toVariantId });
    update((s) =>
      // Variante déjà présente dans le panier : on ne crée pas de doublon
      s.lines.some((l) => lineKey(l) === to)
        ? s
        : { ...s, lines: s.lines.map((l) => (lineKey(l) === from ? { ...l, variantId: toVariantId } : l)) },
    );
  }, []);

  const remove = useCallback((productSlug: string, variantId: string) => {
    const key = lineKey({ productSlug, variantId });
    update((s) => ({ ...s, lines: s.lines.filter((l) => lineKey(l) !== key) }));
  }, []);

  const clear = useCallback(() => update((s) => ({ ...s, lines: [] })), []);

  const setDestination = useCallback(
    (d: Partial<Destination>) => update((s) => ({ ...s, destination: { ...s.destination, ...d } })),
    [],
  );

  const summary = useMemo(
    () => summarizeOrder(lines, destination, prices, validated, statuses),
    [lines, destination, prices, validated, statuses],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      ready,
      lines,
      destination,
      summary,
      prices,
      validated,
      statuses,
      count: summary.totalQuantity,
      add,
      setQuantity,
      changeVariant,
      remove,
      clear,
      setDestination,
    }),
    [ready, lines, destination, summary, prices, validated, statuses, add, setQuantity, changeVariant, remove, clear, setDestination],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart doit être utilisé dans <CartProvider>");
  return ctx;
}
