"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { formatPrice } from "@/lib/format";
import { fold, type ShopItem } from "@/lib/shop";
import { AvailabilityBadge } from "@/components/product/AvailabilityBadge";
import { NoPhoto } from "@/components/product/NoPhoto";

const PAGE = 24;

type Facet = "category" | "essence" | "length" | "pack" | "weight" | "marque";
type Sort = "pertinence" | "prix-asc" | "prix-desc" | "nom";
const PRICE_RANGES = [
  { id: "lt50", label: "Moins de 50 €", test: (p: number) => p < 50 },
  { id: "50-250", label: "50 à 250 €", test: (p: number) => p >= 50 && p < 250 },
  { id: "250-500", label: "250 à 500 €", test: (p: number) => p >= 250 && p < 500 },
  { id: "gt500", label: "500 € et plus", test: (p: number) => p >= 500 },
  { id: "demande", label: "Prix sur demande", test: () => false },
];

const valuesOf = (i: ShopItem, f: Facet): string[] =>
  f === "category"
    ? [i.categoryName]
    : f === "essence"
      ? i.essences
      : f === "length"
        ? i.lengths
        : f === "pack"
          ? i.packs
          : f === "weight"
            ? i.weights
            : i.marque
              ? [i.marque]
              : [];

const LABELS: Record<Facet, string> = {
  category: "Catégorie",
  essence: "Essence",
  length: "Longueur",
  pack: "Conditionnement",
  weight: "Poids",
  marque: "Marque",
};

const lengthOrder = (s: string) => parseInt(s, 10) || 999;

export function ShopBrowser({ items, showCategory = true }: { items: ShopItem[]; showCategory?: boolean }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState<Partial<Record<Facet, string[]>>>({});
  const [price, setPrice] = useState<string[]>([]);
  const [sort, setSort] = useState<Sort>("pertinence");
  const [shown, setShown] = useState(PAGE);
  const [panelOpen, setPanelOpen] = useState(false);

  const facets: Facet[] = [...(showCategory ? (["category"] as Facet[]) : []), "essence", "length", "pack", "weight", "marque"];

  const matchesFacets = (i: ShopItem, except?: Facet) =>
    facets.every((f) => f === except || !sel[f]?.length || valuesOf(i, f).some((v) => sel[f]!.includes(v)));
  const matchesPrice = (i: ShopItem) =>
    !price.length ||
    price.some((id) => (id === "demande" ? i.from === null : i.prices.some(PRICE_RANGES.find((r) => r.id === id)!.test)));
  const words = fold(q).split(/\s+/).filter(Boolean);
  const matchesQuery = (i: ShopItem) => words.every((w) => i.search.includes(w));

  const results = useMemo(() => {
    const r = items.filter((i) => matchesQuery(i) && matchesFacets(i) && matchesPrice(i));
    if (sort === "prix-asc") r.sort((a, b) => (a.from?.amount ?? Infinity) - (b.from?.amount ?? Infinity));
    if (sort === "prix-desc") r.sort((a, b) => (b.from?.amount ?? -1) - (a.from?.amount ?? -1));
    if (sort === "nom") r.sort((a, b) => a.name.localeCompare(b.name, "fr"));
    return r;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, q, sel, price, sort]);

  /** Valeurs proposées pour un filtre, avec le nombre de produits correspondants (selon les autres filtres). */
  const options = (f: Facet) => {
    const counts = new Map<string, number>();
    for (const i of items) {
      if (!matchesQuery(i) || !matchesPrice(i) || !matchesFacets(i, f)) continue;
      for (const v of new Set(valuesOf(i, f))) counts.set(v, (counts.get(v) ?? 0) + 1);
    }
    for (const v of sel[f] ?? []) if (!counts.has(v)) counts.set(v, 0);
    const list = [...counts.entries()];
    return f === "length" ? list.sort((a, b) => lengthOrder(a[0]) - lengthOrder(b[0])) : list.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "fr"));
  };

  const toggle = (f: Facet, v: string) => {
    setSel((s) => {
      const cur = s[f] ?? [];
      return { ...s, [f]: cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v] };
    });
    setShown(PAGE);
  };
  const activeCount = Object.values(sel).reduce((n, l) => n + (l?.length ?? 0), 0) + price.length;
  const reset = () => {
    setSel({});
    setPrice([]);
    setQ("");
    setShown(PAGE);
  };

  const filters = (
    <div className="space-y-6">
      {facets.map((f) => {
        const opts = options(f);
        if (opts.length < 2 && !(sel[f]?.length)) return null;
        return (
          <fieldset key={f}>
            <legend className="text-sm font-semibold text-bark-900">{LABELS[f]}</legend>
            <ul className="mt-2 max-h-56 space-y-1 overflow-y-auto pr-1">
              {opts.map(([v, n]) => (
                <li key={v}>
                  <label className="flex min-h-9 cursor-pointer items-center gap-2 text-sm text-bark-800">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-ember-600"
                      checked={sel[f]?.includes(v) ?? false}
                      onChange={() => toggle(f, v)}
                    />
                    <span className="flex-1">{v}</span>
                    <span className="text-xs text-bark-500">{n}</span>
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>
        );
      })}
      <fieldset>
        <legend className="text-sm font-semibold text-bark-900">Prix</legend>
        <ul className="mt-2 space-y-1">
          {PRICE_RANGES.filter((r) => r.id !== "demande" || items.some((i) => i.from === null)).map((r) => (
            <li key={r.id}>
              <label className="flex min-h-9 cursor-pointer items-center gap-2 text-sm text-bark-800">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-ember-600"
                  checked={price.includes(r.id)}
                  onChange={() => {
                    setPrice((p) => (p.includes(r.id) ? p.filter((x) => x !== r.id) : [...p, r.id]));
                    setShown(PAGE);
                  }}
                />
                {r.label}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
      {activeCount > 0 && (
        <button type="button" onClick={reset} className="text-sm font-semibold text-ember-700 underline">
          Effacer les filtres
        </button>
      )}
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[250px_1fr]">
      {/* Filtres : colonne sur ordinateur, panneau repliable sur mobile */}
      <aside className="hidden lg:block" aria-label="Filtres">
        {filters}
      </aside>

      <div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="relative flex-1">
            <span className="sr-only">Rechercher un produit</span>
            <input
              type="search"
              className="field !pl-10"
              placeholder="Rechercher : chêne, granulés, 33 cm, palette, RUF…"
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setShown(PAGE);
              }}
              data-testid="recherche"
            />
            <svg className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-bark-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </label>
          <div className="flex gap-2">
            <button type="button" className="btn btn-outline flex-1 lg:hidden" onClick={() => setPanelOpen((o) => !o)} aria-expanded={panelOpen}>
              Filtres{activeCount ? ` (${activeCount})` : ""}
            </button>
            <label className="flex-1 sm:flex-none">
              <span className="sr-only">Trier</span>
              <select className="field !min-h-12" value={sort} onChange={(e) => setSort(e.target.value as Sort)} data-testid="tri">
                <option value="pertinence">Tri : pertinence</option>
                <option value="prix-asc">Prix croissant</option>
                <option value="prix-desc">Prix décroissant</option>
                <option value="nom">Nom (A → Z)</option>
              </select>
            </label>
          </div>
        </div>

        {panelOpen && <div className="mt-4 rounded-xl border border-cream-300 bg-white p-5 lg:hidden">{filters}</div>}

        <p className="mt-4 text-sm text-bark-600" aria-live="polite" data-testid="nb-resultats">
          {results.length} produit{results.length > 1 ? "s" : ""}
          {results.length !== items.length && ` sur ${items.length}`}
        </p>

        {results.length === 0 ? (
          <div className="mt-6 rounded-xl border border-dashed border-cream-400 bg-white p-10 text-center text-bark-600">
            Aucun produit ne correspond à votre recherche.{" "}
            <button type="button" onClick={reset} className="font-semibold text-ember-700 underline">
              Tout afficher
            </button>
          </div>
        ) : (
          <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3" data-testid="grille-produits">
            {results.slice(0, shown).map((i) => (
              <li key={i.slug}>
                <ShopCard item={i} showCategory={showCategory} />
              </li>
            ))}
          </ul>
        )}

        {shown < results.length && (
          <div className="mt-8 text-center">
            <button type="button" className="btn btn-outline" onClick={() => setShown((s) => s + PAGE)}>
              Afficher plus de produits ({results.length - shown} restants)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ShopCard({ item: i, showCategory }: { item: ShopItem; showCategory: boolean }) {
  const href = `/produit/${i.slug}`;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-cream-300 bg-white shadow-sm transition-shadow hover:shadow-md" data-testid="carte-produit">
      <Link href={href} className="relative block aspect-[16/10] overflow-hidden bg-cream-200" tabIndex={-1} aria-hidden="true">
        {i.image ? (
          <Image src={i.image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 40vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <NoPhoto label="" />
        )}
        <span className="absolute left-3 top-3 flex gap-1.5">
          <AvailabilityBadge availability={i.availability} />
          {i.stere && <span className="rounded-full bg-ember-600 px-2.5 py-1 text-xs font-semibold text-white">Au stère</span>}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <p className="eyebrow !text-[0.68rem]">
          {[showCategory ? i.categoryName : null, i.marque].filter(Boolean).join(" · ") || i.essences.join(" · ")}
        </p>
        <h3 className="mt-1.5 font-serif text-lg font-semibold leading-snug text-bark-900">
          <Link href={href} className="hover:text-ember-700">
            {i.name}
          </Link>
        </h3>
        <p className="mt-2 text-xs text-bark-600">
          {[i.lengths.length ? i.lengths.slice(0, 4).join(", ") + (i.lengths.length > 4 ? "…" : "") : null, `${i.variantCount} choix`]
            .filter(Boolean)
            .join(" · ")}
        </p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <p className="text-bark-900" data-testid="prix-carte">
            {i.from ? (
              <>
                <span className="block text-[0.7rem] text-bark-500">à partir de</span>
                <span className="text-xl font-semibold">{formatPrice(i.from.amount)}</span>
                <span className="text-xs text-bark-600"> / {i.from.unit}</span>
              </>
            ) : (
              <span className="text-sm font-semibold">Prix sur demande</span>
            )}
          </p>
          <Link href={href} className="btn btn-primary !min-h-11 !px-4 text-sm" aria-label={`Voir le produit — ${i.name}`}>
            Voir
          </Link>
        </div>
      </div>
    </article>
  );
}
