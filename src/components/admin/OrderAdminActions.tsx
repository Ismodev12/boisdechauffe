"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ORDER_STATUSES, statusLabels, type OrderStatus } from "@/lib/order-status";

export function OrderAdminActions({ refId, status, note }: { refId: string; status: OrderStatus; note: string }) {
  const router = useRouter();
  const [current, setCurrent] = useState(status);
  const [text, setText] = useState(note);
  const [msg, setMsg] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState(false);

  async function patch(body: Record<string, string>) {
    setMsg(null);
    const res = await fetch(`/api/admin/commandes/${refId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    setMsg(res.ok ? "Enregistré ✓" : "Erreur lors de l’enregistrement.");
    if (res.ok) router.refresh();
  }

  async function remove() {
    const res = await fetch(`/api/admin/commandes/${refId}`, { method: "DELETE" });
    if (res.ok) {
      router.replace("/admin/commandes");
      router.refresh();
    } else setMsg("Suppression impossible.");
  }

  return (
    <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
      <section className="rounded-xl border border-cream-300 bg-white p-5">
        <h2 className="font-semibold text-bark-900">Statut</h2>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {ORDER_STATUSES.map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={current === s}
              onClick={() => {
                setCurrent(s);
                patch({ status: s });
              }}
              className={`min-h-11 rounded-lg border px-3 text-sm font-semibold ${
                current === s ? "border-bark-900 bg-bark-900 text-cream-50" : "border-cream-400 bg-white text-bark-800 hover:border-bark-700"
              }`}
            >
              {statusLabels[s]}
            </button>
          ))}
        </div>
      </section>
      <section className="rounded-xl border border-cream-300 bg-white p-5">
        <label htmlFor="note" className="font-semibold text-bark-900">
          Note interne
        </label>
        <p className="text-xs text-bark-500">Visible uniquement par vous (prix livraison convenu, date…)</p>
        <textarea id="note" className="field mt-2 min-h-28 text-sm" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="button" className="btn btn-dark mt-3 w-full !min-h-10 text-sm" onClick={() => patch({ adminNote: text })}>
          Enregistrer la note
        </button>
      </section>
      {msg && (
        <p role="status" className="text-center text-sm text-forest-700">
          {msg}
        </p>
      )}
      <section className="rounded-xl border border-red-200 bg-white p-5">
        {confirmDelete ? (
          <div>
            <p className="text-sm text-red-800">Supprimer définitivement cette commande ?</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button type="button" className="btn !min-h-10 bg-red-700 text-sm text-white" onClick={remove}>
                Oui, supprimer
              </button>
              <button type="button" className="btn btn-outline !min-h-10 text-sm" onClick={() => setConfirmDelete(false)}>
                Annuler
              </button>
            </div>
          </div>
        ) : (
          <button type="button" className="w-full text-sm font-semibold text-red-700 hover:underline" onClick={() => setConfirmDelete(true)}>
            Supprimer la commande
          </button>
        )}
      </section>
    </aside>
  );
}
