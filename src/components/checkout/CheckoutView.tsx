"use client";

import Link from "next/link";
import type { OfflinePaymentMethod } from "@/config/payments";
import { useCart } from "@/components/cart/CartProvider";
import { OrderForm } from "@/components/checkout/OrderForm";
import type { FormConfig } from "@/lib/form-config";

/** Page Commande : formulaire configurable + contenu du panier. */
export function CheckoutView(props: { config: FormConfig; offlineMethods: OfflinePaymentMethod[] }) {
  const { ready, lines, summary } = useCart();

  if (!ready) return <div className="container-page py-16 text-bark-600">Chargement…</div>;

  if (summary.lines.length === 0) {
    return (
      <div className="container-page py-16 text-center">
        <h2 className="font-serif text-2xl font-semibold text-bark-900">Votre panier est vide</h2>
        <p className="mt-2 text-bark-600">Ajoutez du bois à votre panier avant de passer commande.</p>
        <Link href="/bois" className="btn btn-primary mt-8">
          Voir nos bois
        </Link>
      </div>
    );
  }

  return <OrderForm {...props} lines={lines} source="panier" />;
}
