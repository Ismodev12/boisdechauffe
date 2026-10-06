"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { CountrySelect } from "@/components/cart/CountrySelect";
import { ShippingResult } from "@/components/cart/ShippingResult";
import { estimateShipping } from "@/lib/shipping";
import { mainProduct } from "@/config/products";

/**
 * Simulateur de livraison (page Livraison).
 * L'adresse saisie est mémorisée et reprise automatiquement lors de la commande.
 */
export function ShippingEstimator() {
  const { ready, destination, setDestination, count } = useCart();
  // Par défaut : la quantité du panier ; modifiable librement ensuite
  const [quantityOverride, setQuantity] = useState<number | null>(null);
  const quantity = quantityOverride ?? (ready && count > 0 ? count : 1);

  const quote = estimateShipping({ ...destination, quantity });

  return (
    <div className="rounded-xl border border-cream-300 bg-white p-5 shadow-sm sm:p-7">
      <h2 className="font-serif text-2xl font-semibold text-bark-900">Estimer ma livraison</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="est-pays" className="field-label">
            Pays
          </label>
          <CountrySelect id="est-pays" value={destination.countryCode} onChange={(countryCode) => setDestination({ countryCode })} />
        </div>
        <div>
          <label htmlFor="est-cp" className="field-label">
            Code postal
          </label>
          <input
            id="est-cp"
            className="field"
            autoComplete="postal-code"
            inputMode={destination.countryCode === "FR" ? "numeric" : "text"}
            value={destination.postalCode}
            onChange={(e) => setDestination({ postalCode: e.target.value.slice(0, 12) })}
          />
        </div>
        <div>
          <label htmlFor="est-ville" className="field-label">
            Ville
          </label>
          <input
            id="est-ville"
            className="field"
            autoComplete="address-level2"
            value={destination.city}
            onChange={(e) => setDestination({ city: e.target.value })}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="est-adresse" className="field-label">
            Adresse
          </label>
          <input
            id="est-adresse"
            className="field"
            autoComplete="street-address"
            value={destination.address}
            onChange={(e) => setDestination({ address: e.target.value })}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="est-qte" className="field-label">
            Quantité commandée (stères)
          </label>
          <input
            id="est-qte"
            className="field !w-32"
            type="number"
            inputMode="numeric"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Math.floor(Number(e.target.value)) || 1))}
          />
        </div>
      </div>
      <div className="mt-6">
        <ShippingResult quote={quote} />
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href={`/produit/${mainProduct.slug}`} className="btn btn-primary">
          Choisir mon bois
        </Link>
        {quote.kind === "devis" && (
          <Link href="/devis" className="btn btn-outline">
            Demander un devis
          </Link>
        )}
      </div>
      <p className="mt-4 text-xs text-bark-500">Votre adresse est conservée sur cet appareil et reprise lors de la commande.</p>
    </div>
  );
}
