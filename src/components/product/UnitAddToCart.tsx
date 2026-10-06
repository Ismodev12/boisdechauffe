"use client";

import Link from "next/link";
import { useState } from "react";
import { optionAxes, type Product, type Variant } from "@/config/products";
import { mentionTaxes } from "@/config/pricing";
import { formatPrice } from "@/lib/format";
import { isProvisional, unitPrice } from "@/lib/prices";
import { useCart } from "@/components/cart/CartProvider";
import { QuantityStepper } from "@/components/cart/QuantityStepper";
import { CheckIcon } from "@/components/icons";
import { OrderDialog } from "@/components/checkout/OrderDialog";

/** Produit vendu à l'unité (sac, palette, filet…) avec un prix par variante. */
export function UnitAddToCart({ product }: { product: Product }) {
  const { add, prices, validated } = useCart();
  const axes = optionAxes(product);
  // Axes à afficher : ceux qui proposent un vrai choix (ou l'unique axe, pour montrer l'option)
  const shownAxes = axes.filter((a) => axes.length === 1 || new Set(product.variants.map((v) => v.options[a])).size > 1);
  const [selection, setSelection] = useState<Record<string, string>>(() => ({ ...product.variants[0].options }));
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState<number | null>(null);
  const [orderOpen, setOrderOpen] = useState(false);

  const matches = (v: Variant, sel: Record<string, string>) => axes.every((a) => v.options[a] === sel[a]);
  const variant = product.variants.find((v) => matches(v, selection));
  const price = variant ? unitPrice(prices, product, variant) : null;
  const soldOut = product.availability === "epuise";

  /** Choisit une option ; si la combinaison n'existe pas, prend la première variante compatible. */
  function choose(axis: string, value: string) {
    const next = { ...selection, [axis]: value };
    const exact = product.variants.find((v) => matches(v, next));
    const fallback = product.variants.find((v) => v.options[axis] === value);
    setSelection({ ...(exact ?? fallback)!.options });
    setAdded(null);
  }

  const pill = (selected: boolean, disabled: boolean) =>
    `min-h-12 rounded-lg border px-3 py-2 text-sm font-semibold text-left transition-colors ${
      selected
        ? "border-bark-900 bg-bark-900 text-cream-50"
        : disabled
          ? "border-dashed border-cream-400 bg-white text-bark-500"
          : "border-cream-400 bg-white text-bark-800 hover:border-bark-700"
    }`;

  return (
    <div className="rounded-xl border border-cream-300 bg-white p-5 sm:p-6">
      {shownAxes.map((axis, i) => {
        const values = [...new Set(product.variants.map((v) => v.options[axis]).filter(Boolean))];
        return (
          <fieldset key={axis} className={i > 0 ? "mt-6" : ""}>
            <legend className="field-label">
              {i + 1}. {axis}
            </legend>
            <div className={`grid gap-2 ${values.every((v) => v.length <= 8) ? "grid-cols-3" : "grid-cols-1 sm:grid-cols-2"}`}>
              {values.map((val) => {
                const selected = selection[axis] === val;
                const possible = product.variants.some((v) => v.options[axis] === val && matches(v, { ...selection, [axis]: val }));
                return (
                  <button
                    key={val}
                    type="button"
                    className={pill(selected, !possible)}
                    aria-pressed={selected}
                    onClick={() => choose(axis, val)}
                  >
                    {val}
                  </button>
                );
              })}
            </div>
          </fieldset>
        );
      })}

      <div className="mt-6">
        <span className="field-label" id="qte-label">
          {shownAxes.length + 1}. Quantité{variant ? ` (${variant.unite.pluriel})` : ""}
        </span>
        <QuantityStepper value={quantity} onChange={(q) => (setQuantity(q), setAdded(null))} label="Quantité" />
      </div>

      {variant && (
        <dl className="mt-6 space-y-2 rounded-lg bg-cream-100 p-4 text-sm sm:text-base" aria-live="polite" data-testid="recap-produit">
          <div className="flex justify-between gap-4">
            <dt className="text-bark-700">Sélection</dt>
            <dd className="text-right font-semibold text-bark-900">
              {quantity} × {Object.values(variant.options).join(" · ")}
            </dd>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-bark-700">Prix</dt>
            <dd className="text-right">
              {price !== null ? (
                <>
                  <span className="font-serif text-2xl font-semibold text-bark-900" data-testid="prix-produit">
                    {formatPrice(Math.round(price * quantity * 100) / 100)}
                  </span>
                  {quantity > 1 && (
                    <span className="block text-xs text-bark-600">
                      soit {formatPrice(price)} / {variant.unite.singulier}
                    </span>
                  )}
                </>
              ) : (
                <span className="font-semibold text-bark-900" data-testid="prix-produit">
                  Prix sur demande
                </span>
              )}
            </dd>
          </div>
          <div className="flex justify-between gap-4 border-t border-cream-300 pt-2">
            <dt className="text-bark-700">Livraison</dt>
            <dd className="text-right text-bark-800">calculée selon la destination</dd>
          </div>
        </dl>
      )}
      {variant && price !== null && isProvisional(validated, product, variant) && (
        <p className="mt-2 text-xs leading-relaxed text-bark-600" data-testid="prix-indicatif">
          Tarif indicatif : il vous est confirmé avant la validation définitive de votre commande.
        </p>
      )}
      {price === null && (
        <p className="mt-2 text-xs leading-relaxed text-bark-600">
          Vous pouvez quand même commander : nous vous communiquons le prix avant toute validation.
        </p>
      )}
      {mentionTaxes && price !== null && <p className="mt-2 text-xs text-bark-600">{mentionTaxes}</p>}

      <div className="mt-5 grid gap-3">
        <button type="button" className="btn btn-primary w-full text-base" onClick={() => setOrderOpen(true)} disabled={!variant || soldOut}>
          {soldOut ? "Indisponible" : price === null ? "Demander ce produit" : "Commander"}
        </button>
        {!soldOut && (
          <button
            type="button"
            className="btn btn-outline w-full"
            disabled={!variant}
            onClick={() => {
              if (!variant) return;
              add({ productSlug: product.slug, variantId: variant.id, quantity });
              setAdded(quantity);
            }}
          >
            Ajouter au panier
          </button>
        )}
      </div>
      {variant && (
        <OrderDialog open={orderOpen} onClose={() => setOrderOpen(false)} lines={[{ productSlug: product.slug, variantId: variant.id, quantity }]} />
      )}

      {added !== null && variant && (
        <div role="status" className="mt-4 flex flex-col gap-3 rounded-lg bg-forest-50 p-4 text-forest-800 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-sm font-medium">
            <CheckIcon width={20} height={20} className="shrink-0" />
            Ajouté au panier : {added} {added > 1 ? variant.unite.pluriel : variant.unite.singulier}
          </p>
          <Link href="/panier" className="btn btn-dark !min-h-11 text-sm">
            Voir le panier
          </Link>
        </div>
      )}
    </div>
  );
}
