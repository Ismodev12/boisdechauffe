"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Statut } from "@/config/products";
import { statutLabels } from "@/lib/status";

export type StatusRow = { slug: string; name: string; marque: string | null; statut: Statut; note: string | null };
type Group = { category: string; products: StatusRow[] };
type Filter = "tous" | Statut;

const BADGE: Record<Statut, string> = {
  publie: "bg-forest-700 text-white",
  "a-verifier": "bg-amber-200 text-amber-950",
  brouillon: "bg-cream-300 text-bark-800",
};

export function StatusEditor({ groups }: { groups: Group[] }) {
  const router = useRouter();
  const all = groups.flatMap((g) => g.products);
  const [values, setValues] = useState<Record<string, Statut>>(() => Object.fromEntries(all.map((p) => [p.slug, p.statut])));
  const [filter, setFilter] = useState<Filter>("tous");
  const [status, setStatus] = useState<{ kind: "ok" | "error"; text: string } | null>(null);
  const [saving, setSaving] = useState(false);

  const dirty = all.some((p) => values[p.slug] !== p.statut);
  const count = (s: Statut) => all.filter((p) => p.statut === s).length;
  // Le filtre se base sur le statut ENREGISTRÉ : une fiche modifiée reste visible jusqu'à l'enregistrement
  const visible = (p: StatusRow) => filter === "tous" || p.statut === filter;

  async function save() {
    setSaving(true);
    const res = await fetch("/api/admin/statuts", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ statuses: values }),
    }).catch(() => null);
    setSaving(false);
    const data = res ? await res.json().catch(() => ({})) : {};
    if (res?.ok) {
      setStatus({ kind: "ok", text: "Statuts enregistrés ✓ — déjà appliqués sur le site." });
      router.refresh();
    } else setStatus({ kind: "error", text: data.error ?? "Enregistrement impossible." });
  }

  const FILTERS: [Filter, string][] = [
    ["tous", `Toutes (${all.length})`],
    ["publie", `Publiées (${count("publie")})`],
    ["a-verifier", `À vérifier (${count("a-verifier")})`],
    ["brouillon", `Brouillons (${count("brouillon")})`],
  ];

  return (
    <div className="pb-24">
      <p className="text-sm text-bark-600" data-testid="stat-statuts">
        {count("publie")} fiches publiées · {count("a-verifier")} à vérifier · {count("brouillon")} en brouillon
      </p>
      <nav aria-label="Filtrer les fiches" className="mt-3 flex flex-wrap gap-2 text-sm">
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
          const prods = g.products.filter(visible);
          if (!prods.length) return null;
          return (
            <section key={g.category} aria-label={g.category}>
              <h2 className="font-serif text-2xl font-semibold text-bark-900">{g.category}</h2>
              <ul className="mt-4 divide-y divide-cream-200 rounded-xl border border-cream-300 bg-white">
                {prods.map((p) => {
                  const id = `statut-${p.slug}`;
                  return (
                    <li key={p.slug} className="grid gap-2 p-4 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-4" data-testid={id}>
                      <div className="min-w-0">
                        <label htmlFor={id} className="block text-sm font-medium text-bark-900">
                          {p.name}{" "}
                          <a href={`/produit/${p.slug}`} target="_blank" className="text-xs font-normal text-ember-700 underline">
                            voir la fiche ↗
                          </a>
                        </label>
                        <p className="mt-0.5 flex flex-wrap items-center gap-2 text-xs">
                          <span className={`rounded-full px-2 py-0.5 font-semibold ${BADGE[p.statut]}`}>{statutLabels[p.statut]}</span>
                          {p.marque && <span className="text-bark-500">Marque : {p.marque}</span>}
                        </p>
                        {p.note && <p className="mt-1 text-xs leading-relaxed text-amber-900">{p.note}</p>}
                      </div>
                      <select
                        id={id}
                        className="field !w-44"
                        value={values[p.slug]}
                        onChange={(e) => {
                          setValues((s) => ({ ...s, [p.slug]: e.target.value as Statut }));
                          setStatus(null);
                        }}
                      >
                        {(Object.keys(statutLabels) as Statut[]).map((s) => (
                          <option key={s} value={s}>
                            {statutLabels[s]}
                          </option>
                        ))}
                      </select>
                    </li>
                  );
                })}
              </ul>
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
            {saving ? "Enregistrement…" : "Enregistrer les statuts"}
          </button>
        </div>
      </div>
    </div>
  );
}
