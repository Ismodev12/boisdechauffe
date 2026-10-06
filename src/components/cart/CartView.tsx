"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import { QuantitySelect } from "@/components/pricing/QuantitySelect";
import { QuantityStepper } from "@/components/cart/QuantityStepper";
import { lineTotalText } from "@/lib/order";
import { CountrySelect } from "@/components/cart/CountrySelect";
import { ShippingResult } from "@/components/cart/ShippingResult";
import { OrderTotals } from "@/components/cart/OrderTotals";
import { CartIcon, TrashIcon } from "@/components/icons";
import { getCountry } from "@/lib/shipping";
import { formatPrice } from "@/lib/format";
import { getProduct } from "@/config/products";

export function CartView() {
  const { ready, summary, destination, setDestination, setQuantity, changeVariant, remove } = useCart();

  if (!ready) {
    return <div className="container-page py-16 text-bark-600">Chargement du panier…</div>;
  }

  if (summary.lines.length === 0) {
    return (
      <div className="container-page py-16 text-center sm:py-24">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cream-200 text-bark-700">
          <CartIcon width={30} height={30} />
        </span>
        <h2 className="mt-5 font-serif text-2xl font-semibold text-bark-900">Votre panier est vide</h2>
        <p className="mt-2 text-bark-600">Découvrez nos bois de chauffage et ajoutez-les à votre panier.</p>
        <Link href="/bois" className="btn btn-primary mt-8">
          Voir nos bois
        </Link>
      </div>
    );
  }

  const needsPostalCode = getCountry(destination.countryCode)?.mode === "grille";

  return (
    <div className="container-page grid gap-8 py-8 sm:py-12 lg:grid-cols-[1fr_380px] lg:gap-12">
      <section aria-label="Articles du panier">
        <ul className="divide-y divide-cream-300 rounded-xl border border-cream-300 bg-white">
          {summary.lines.map((line) => (
            <li key={line.key} className="flex gap-4 p-4 sm:p-5" data-testid="ligne-panier">
              <Link
                href={`/produit/${line.productSlug}`}
                className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-cream-200 sm:h-24 sm:w-24"
              >
                {line.image && <Image src={line.image} alt="" fill sizes="96px" className="object-cover" />}
              </Link>
              <div className="flex min-w-0 flex-1 flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <Link href={`/produit/${line.productSlug}`} className="font-semibold text-bark-900 hover:text-ember-700">
                      {line.productName}
                    </Link>
                    <p className="mt-0.5 text-sm text-bark-600">{line.variantLabel}</p>
                    <p className="mt-0.5 text-sm text-bark-600">
                      {line.pricePerStere !== null
                        ? `soit ${formatPrice(line.pricePerStere)} / stère`
                        : line.unitPrice !== null
                          ? `${formatPrice(line.unitPrice)} / ${line.unit}`
                          : "Prix sur demande"}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(line.productSlug, line.variantId)}
                    className="-mr-2 -mt-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-bark-500 hover:bg-cream-100 hover:text-red-700"
                    aria-label={`Supprimer ${line.productName} (${line.variantLabel}) du panier`}
                  >
                    <TrashIcon width={20} height={20} />
                  </button>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {line.pricePerStere !== null ? (
                    <div className="flex flex-wrap gap-2">
                      {/* Longueur : 33 cm et 50 cm ont chacun leur grille, le prix se recalcule au changement */}
                      {(getProduct(line.productSlug)?.variants.length ?? 0) > 1 && (
                        <select
                          className="field !w-auto font-semibold"
                          value={line.variantId}
                          onChange={(e) => changeVariant(line.productSlug, line.variantId, e.target.value)}
                          aria-label={`Longueur des bûches pour ${line.productName}`}
                          data-testid="longueur-panier"
                        >
                          {getProduct(line.productSlug)!.variants.map((v) => {
                            const taken = v.id !== line.variantId && summary.lines.some((o) => o.productSlug === line.productSlug && o.variantId === v.id);
                            return (
                              <option key={v.id} value={v.id} disabled={taken}>
                                {v.lengthCm ? `${v.lengthCm} cm` : Object.values(v.options).join(" · ")}
                                {taken ? " (déjà dans le panier)" : ""}
                              </option>
                            );
                          })}
                        </select>
                      )}
                      <QuantitySelect
                        value={line.quantity}
                        showPrice={false}
                        lengthCm={line.lengthCm}
                        onChange={(q) => setQuantity(line.productSlug, line.variantId, q)}
                        label={`Quantité (stères) pour ${line.productName}, ${line.variantLabel}`}
                      />
                    </div>
                  ) : (
                    <QuantityStepper
                      value={line.quantity}
                      onChange={(q) => setQuantity(line.productSlug, line.variantId, q)}
                      label={`Quantité pour ${line.productName}, ${line.variantLabel}`}
                    />
                  )}
                  <p className="font-semibold text-bark-900" data-testid="total-ligne">
                    {lineTotalText(line.lineTotal, formatPrice)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Link href="/bois" className="btn btn-outline mt-6 w-full sm:w-auto">
          ← Continuer mes achats
        </Link>
      </section>

      <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start" aria-label="Récapitulatif">
        <div className="rounded-xl border border-cream-300 bg-white p-5 sm:p-6">
          <h2 className="font-serif text-xl font-semibold text-bark-900">Livraison</h2>
          <div className="mt-4 grid gap-4">
            <div>
              <label htmlFor="cart-country" className="field-label">
                Pays de livraison
              </label>
              <CountrySelect id="cart-country" value={destination.countryCode} onChange={(countryCode) => setDestination({ countryCode })} />
            </div>
            {needsPostalCode && (
              <div>
                <label htmlFor="cart-cp" className="field-label">
                  Code postal
                </label>
                <input
                  id="cart-cp"
                  className="field"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  maxLength={5}
                  placeholder="ex. 75001"
                  value={destination.postalCode}
                  onChange={(e) => setDestination({ postalCode: e.target.value.replace(/\D/g, "").slice(0, 5) })}
                />
              </div>
            )}
            <ShippingResult quote={summary.shipping} />
          </div>
        </div>

        <div className="rounded-xl border border-cream-300 bg-white p-5 sm:p-6">
          <h2 className="font-serif text-xl font-semibold text-bark-900">Récapitulatif</h2>
          <div className="mt-4">
            <OrderTotals summary={summary} />
          </div>
          <Link href="/commande" className="btn btn-primary mt-6 w-full">
            Passer commande
          </Link>
          {summary.total === null && (
            <p className="mt-3 text-xs leading-relaxed text-bark-600">
              Le prix de la livraison vous est communiqué avant la validation définitive de votre commande.
            </p>
          )}
        </div>
      </aside>
    </div>
  );
}
