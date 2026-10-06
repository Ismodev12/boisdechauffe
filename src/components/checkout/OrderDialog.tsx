"use client";

import { useEffect, useRef, useState } from "react";
import { OrderForm } from "@/components/checkout/OrderForm";
import { CloseIcon } from "@/components/icons";
import type { FormConfig } from "@/lib/form-config";
import type { CartLine } from "@/lib/order";

/**
 * Fenêtre « Commander » : affiche le formulaire configuré dans le panel admin
 * pour la sélection en cours (longueur + quantité), sans passer par le panier.
 */
export function OrderDialog({ open, onClose, lines }: { open: boolean; onClose: () => void; lines: CartLine[] }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [config, setConfig] = useState<FormConfig | null>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  // Charge la configuration du formulaire à chaque ouverture (elle peut changer depuis l'admin)
  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    fetch("/api/formulaire", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((c: FormConfig) => !cancelled && (setConfig(c), setLoadError(false)))
      .catch(() => !cancelled && setLoadError(true));
    return () => {
      cancelled = true;
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="dialog-commande-titre"
      className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-bark-950/60 sm:m-auto sm:h-auto sm:max-h-[92vh] sm:max-w-xl sm:rounded-2xl"
    >
      <div className="flex h-full flex-col bg-cream-50 sm:h-auto sm:max-h-[92vh] sm:rounded-2xl">
        <div className="flex items-center justify-between gap-4 border-b border-cream-300 px-5 py-3 pt-[calc(0.75rem+env(safe-area-inset-top))] sm:pt-3">
          <p id="dialog-commande-titre" className="font-serif text-xl font-semibold text-bark-900">
            Commander
          </p>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full text-bark-800 hover:bg-cream-200"
            aria-label="Fermer"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))]">
          {open &&
            (config ? (
              <OrderForm config={config} lines={lines} source="direct" layout="modal" />
            ) : loadError ? (
              <p role="alert" className="rounded-lg bg-red-50 p-4 text-sm text-red-800">
                Le formulaire n’a pas pu être chargé. Vérifiez votre connexion et réessayez.
              </p>
            ) : (
              <p className="py-10 text-center text-bark-600">Chargement du formulaire…</p>
            ))}
        </div>
      </div>
    </dialog>
  );
}
