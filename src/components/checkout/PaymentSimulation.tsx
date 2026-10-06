"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { SIMULATION_STORAGE_KEY } from "@/config/payments";
import { CheckIcon } from "@/components/icons";
import { formatPrice } from "@/lib/format";

type SimulatedOrder = { ref: string; method: string; methodLabel: string; last4: string | null; total: number | null };

const noSubscribe = () => () => {};

function parseOrder(raw: string | null): SimulatedOrder | null {
  try {
    return raw ? (JSON.parse(raw) as SimulatedOrder) : null;
  } catch {
    return null;
  }
}

/** Confirmation d'un paiement simulé (développement local) : rien n'a été envoyé ni prélevé. */
export function PaymentSimulation() {
  const raw = useSyncExternalStore(
    noSubscribe,
    () => sessionStorage.getItem(SIMULATION_STORAGE_KEY),
    () => null,
  );
  const order = parseOrder(raw);

  if (!order) {
    return (
      <div className="container-page py-16 text-center">
        <h2 className="font-serif text-2xl font-semibold text-bark-900">Aucun paiement en cours</h2>
        <p className="mt-2 text-bark-600">Passez par la page Commande pour régler votre commande.</p>
        <Link href="/commande" className="btn btn-primary mt-8">
          Retour à la commande
        </Link>
      </div>
    );
  }

  const isCard = order.method === "carte-stripe";
  return (
    <div className="container-page max-w-2xl py-10 sm:py-14">
      <div className="rounded-xl border border-cream-300 bg-white p-6 text-center sm:p-10">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest-600 text-white">
          <CheckIcon width={32} height={32} strokeWidth={2.5} />
        </span>
        <h2 className="mt-5 font-serif text-2xl font-semibold text-bark-900">{isCard ? "Paiement accepté" : "Commande enregistrée"}</h2>
        <p className="mt-2 text-bark-600">
          {isCard
            ? `Votre paiement${order.total !== null ? ` de ${formatPrice(order.total)}` : ""} par carte a bien été validé.`
            : "Nous vous recontactons pour confirmer la livraison et le mode de règlement."}
        </p>
        <dl className="mx-auto mt-6 max-w-sm space-y-2 rounded-lg bg-cream-100 p-4 text-left text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-bark-600">Référence</dt>
            <dd className="font-semibold text-bark-900">{order.ref}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-bark-600">Moyen de paiement</dt>
            <dd className="font-semibold text-bark-900">{order.methodLabel}</dd>
          </div>
          {order.last4 && (
            <div className="flex justify-between gap-4">
              <dt className="text-bark-600">Carte</dt>
              <dd className="font-semibold text-bark-900">•••• {order.last4}</dd>
            </div>
          )}
          {order.total !== null && (
            <div className="flex justify-between gap-4">
              <dt className="text-bark-600">{isCard ? "Montant payé" : "Montant à régler"}</dt>
              <dd className="font-semibold text-bark-900">{formatPrice(order.total)}</dd>
            </div>
          )}
        </dl>
        <Link href="/" className="btn btn-primary mt-8">
          Retour à l’accueil
        </Link>
      </div>
    </div>
  );
}
