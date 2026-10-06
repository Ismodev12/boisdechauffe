import { products, type Product, type Variant } from "@/config/products";
import { prixDeBaseParStere } from "@/config/pricing";

/**
 * Prix effectifs des variantes « unitaires » : clé `produit::variante` → prix TTC.
 * Construits à partir du catalogue, puis remplacés par les prix enregistrés depuis
 * le panel admin (/admin/prix). Chaque produit a toujours un prix affiché.
 */
export type PriceMap = Record<string, number | null>;

export const priceKey = (productSlug: string, variantId: string) => `${productSlug}::${variantId}`;

export function defaultPrices(): PriceMap {
  const map: PriceMap = {};
  for (const p of products) if (p.pricing === "unitaire") for (const v of p.variants) map[priceKey(p.slug, v.id)] = v.prix;
  return map;
}

/** Fusionne les prix enregistrés (admin) avec le catalogue ; ignore les clés inconnues et les valeurs invalides. */
export function mergePrices(saved: unknown): PriceMap {
  const map = defaultPrices();
  if (saved && typeof saved === "object") {
    for (const [k, v] of Object.entries(saved as Record<string, unknown>)) {
      if (!(k in map)) continue;
      // Une valeur vide enregistrée ne retire jamais le prix : on garde le prix provisoire du catalogue
      if (typeof v === "number" && Number.isFinite(v) && v > 0 && v < 1_000_000) map[k] = Math.round(v * 100) / 100;
    }
  }
  return map;
}

/** Clés des prix validés par l'administrateur (les autres sont provisoires). */
export function mergeValidated(saved: unknown): string[] {
  const allowed = defaultPrices();
  return Array.isArray(saved) ? [...new Set(saved.filter((k): k is string => typeof k === "string" && k in allowed))] : [];
}

export function unitPrice(prices: PriceMap, product: Product, variant: Variant) {
  return prices[priceKey(product.slug, variant.id)] ?? null;
}

/** Statut d'un prix : la grille au stère est validée ; les autres le sont quand l'admin les a validés. */
export function isProvisional(validated: readonly string[], product: Product, variant: Variant) {
  return product.pricing === "unitaire" && !validated.includes(priceKey(product.slug, variant.id));
}

/** Plus petit prix connu d'un produit (« à partir de »), ou null si aucun prix n'est défini. */
export function startingPrice(prices: PriceMap, product: Product): { amount: number; unit: string } | null {
  if (product.pricing === "grille-stere") return { amount: prixDeBaseParStere, unit: "stère" };
  let best: { amount: number; unit: string } | null = null;
  for (const v of product.variants) {
    const p = unitPrice(prices, product, v);
    if (p !== null && (!best || p < best.amount)) best = { amount: p, unit: v.unite.singulier };
  }
  return best;
}
