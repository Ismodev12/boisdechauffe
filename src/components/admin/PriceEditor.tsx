"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { formatPrice } from "@/lib/format";

export type PriceRow = {
  key: string;
  label: string;
  unit: string;
  price: number | null;
  defaultPrice: number | null;
  validated: boolean;
  base: "indicatif" | "estime";
  hypothese: string | null;
  alerte: string | null;
  reference: { prix: number; libelle: string } | null;
};
type Group = { category: string; products: { slug: string; name: string; rows: PriceRow[] }[] };
type Filter = "tous" | "provisoires" | "estimes" | "alertes" | "valides";

const toText = (n: number | null) => (n === null ? "" : String(n).replace(".", ","));
const parse = (t: string): number | null | "invalide" => {
  const s = t.trim().replace(/\s/g, "").replace("€", "").replace(",", ".");
  if (!s) return null;
  const n = Number(s);
  return Number.isFinite(n) && n > 0 && n < 1_000_000 ? Math.round(n * 100) / 100 : "invalide";
};

export function PriceEditor({ groups }: { groups: Group[] }) {
  const router = useRouter();
  const allRows = useMemo(() => groups.flatMap((g) => g.products.flatMap((p) => p.rows)), [groups]);
  const [values, setValues] = useState<Record<string, string>>(() => Object.fromEntries(allRows.map((r) => [r.key, toText(r.price)])));
  const [valid, setValid] = useState<Set<string>>(() => new Set(allRows.filter((r) => r.validated).map((r) => r.key)));
  const [filter, setFilter] = useState<Filter>("provisoires");
  const [status, setStatus] = useState<{ kind: "ok" | "error"; text: string } | null>(null);
  const [saving, setSaving] = useState(false);

  const parsed = Object.fromEntries(Object.entries(values).map(([k, v]) => [k, parse(v)]));
  const invalid = Object.entries(parsed).filter(([, v]) => v === "invalide").map(([k]) => k);
  const effective = (r: PriceRow) => (parsed[r.key] === null ? r.defaultPrice : (parsed[r.key] as number));
  const dirty = allRows.some((r) => parsed[r.key] === "invalide" || effective(r) !== r.price || valid.has(r.key) !== r.validated);
  const counts = {
    tous: allRows.length,
    valides: allRows.filter((r) => valid.has(r.key)).length,
    provisoires: allRows.filter((r) => !valid.has(r.key)).length,
    estimes: allRows.filter((r) => !valid.has(r.key) && r.base === "estime").length,
    alertes: allRows.filter((r) => !valid.has(r.key) && r.alerte).length,
  };
  // Le filtre se base sur le statut ENREGISTRÉ : une ligne qu'on vient de cocher reste visible jusqu'à l'enregistrement
  const visible = (r: PriceRow) =>
    filter === "tous" ||
    (filter === "valides"
      ? r.validated
      : filter === "provisoires"
        ? !r.validated
        : filter === "alertes"
          ? !r.validated && Boolean(r.alerte)
          : !r.validated && r.base === "estime");

  const set = (key: string, v: string) => {
    setValues((s) => ({ ...s, [key]: v }));
    setStatus(null);
  };
  const toggle = (keys: string[], on: boolean) => {
    setValid((s) => {
      const n = new Set(s);
      keys.forEach((k) => (on ? n.add(k) : n.delete(k)));
      return n;
    });
    setStatus(null);
  };

  async function save() {
    if (invalid.length) return setStatus({ kind: "error", text: "Corrigez les prix en rouge (nombre positif, ex. 249,90)." });
    setSaving(true);
    const res = await fetch("/api/admin/prix", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prices: parsed, validated: [...valid] }),
    }).catch(() => null);
    setSaving(false);
    const data = res ? await res.json().catch(() => ({})) : {};
    if (res?.ok) {
      setStatus({ kind: "ok", text: "Prix enregistrés ✓ — ils sont déjà visibles sur le site." });
      router.refresh();
    } else setStatus({ kind: "error", text: data.error ?? "Enregistrement impossible." });
  }

  const FILTERS: [Filter, string][] = [
    ["provisoires", `Provisoires (${counts.provisoires})`],
    ["estimes", `Estimés à vérifier (${counts.estimes})`],
    ["alertes", `Alertes marché (${counts.alertes})`],
    ["valides", `Validés (${counts.valides})`],
    ["tous", `Tous (${counts.tous})`],
  ];

  return (
    <div className="pb-24">
      <p className="text-sm text-bark-600" data-testid="stat-prix">
        {counts.valides} prix validés · {counts.provisoires} provisoires (dont {counts.estimes} estimés, {counts.alertes} avec alerte) · {allRows.length} variantes au total
      </p>
      <nav aria-label="Filtrer les prix" className="mt-3 flex flex-wrap gap-2 text-sm">
        {FILTERS.map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setFilter(id)}
            aria-pressed={filter === id}
            className={`rounded-full border px-3 py-1.5 ${filter === id ? "border-bark-900 bg-bark-900 text-cream-50" : "border-cream-400 bg-white text-bark-800"}`}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="mt-6 space-y-10">
        {groups.map((g) => {
          const prods = g.products.filter((p) => p.rows.some(visible));
          if (!prods.length) return null;
          return (
            <section key={g.category} aria-label={g.category}>
              <h2 className="font-serif text-2xl font-semibold text-bark-900">{g.category}</h2>
              <div className="mt-4 space-y-5">
                {prods.map((p) => {
                  const rows = p.rows.filter(visible);
                  return (
                    <div key={p.slug} className="rounded-xl border border-cream-300 bg-white p-4 sm:p-5" data-testid={`prix-${p.slug}`}>
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <h3 className="font-semibold text-bark-900">
                          {p.name}{" "}
                          <a href={`/produit/${p.slug}`} target="_blank" className="text-xs font-normal text-ember-700 underline">
                            voir la fiche ↗
                          </a>
                        </h3>
                        {rows.some((r) => !valid.has(r.key)) && (
                          <button type="button" className="text-xs font-semibold text-forest-700 underline" onClick={() => toggle(rows.map((r) => r.key), true)}>
                            Valider tous les prix de ce produit
                          </button>
                        )}
                      </div>
                      <ul className="mt-3 divide-y divide-cream-200">
                        {rows.map((r) => {
                          const bad = parsed[r.key] === "invalide";
                          const id = `prix-${r.key}`;
                          const isValid = valid.has(r.key);
                          return (
                            <li key={r.key} className="grid gap-2 py-3 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-4">
                              <div className="min-w-0">
                                <label htmlFor={id} className="block text-sm font-medium text-bark-900">
                                  {r.label}
                                </label>
                                <p className="mt-0.5 flex flex-wrap items-center gap-2 text-xs">
                                  <span
                                    className={`rounded-full px-2 py-0.5 font-semibold ${
                                      isValid ? "bg-forest-700 text-white" : r.base === "estime" ? "bg-amber-200 text-amber-950" : "bg-cream-200 text-bark-800"
                                    }`}
                                  >
                                    {isValid ? "Validé" : r.base === "estime" ? "Provisoire — estimé" : "Provisoire — indicatif"}
                                  </span>
                                  {r.reference && <span className="text-bark-500">Réf. kwattbois : {formatPrice(r.reference.prix)}</span>}
                                </p>
                                {r.hypothese && !isValid && <p className="mt-1 text-xs leading-relaxed text-amber-900">Hypothèse : {r.hypothese}</p>}
                                {r.alerte && !isValid && (
                                  <p className="mt-1 text-xs leading-relaxed text-red-800" data-testid="alerte-prix">
                                    Alerte : {r.alerte}
                                  </p>
                                )}
                              </div>
                              <div className="flex flex-wrap items-center gap-3">
                                <div className="relative">
                                  <input
                                    id={id}
                                    inputMode="decimal"
                                    className={`field !w-32 pr-8 text-right ${bad ? "!border-red-600" : ""}`}
                                    placeholder={toText(r.defaultPrice)}
                                    value={values[r.key]}
                                    aria-invalid={bad || undefined}
                                    onChange={(e) => set(r.key, e.target.value)}
                                  />
                                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-bark-500">€</span>
                                </div>
                                <span className="w-20 text-xs text-bark-500">/ {r.unit}</span>
                                <label className="flex min-h-10 items-center gap-2 text-sm text-bark-800">
                                  <input type="checkbox" className="h-5 w-5 accent-forest-700" checked={isValid} onChange={(e) => toggle([r.key], e.target.checked)} />
                                  Validé
                                </label>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-cream-300 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur">
        <div className="container-page flex max-w-5xl flex-wrap items-center justify-between gap-3 py-3">
          <p role="status" className={`text-sm ${status?.kind === "error" ? "text-red-700" : "text-forest-700"}`}>
            {status?.text ?? (dirty ? "Modifications non enregistrées" : "")}
          </p>
          <button type="button" className="btn btn-primary" onClick={save} disabled={saving || !dirty}>
            {saving ? "Enregistrement…" : "Enregistrer les prix"}
          </button>
        </div>
      </div>
    </div>
  );
}
