"use client";

import Link from "next/link";
import { useState } from "react";
import { getLengths, type Product } from "@/config/products";
import { libelleQuantite, mentionTaxes, quantiteMax, tarifPour, tarifs, tarifsPour } from "@/config/pricing";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/components/cart/CartProvider";
import { CheckIcon } from "@/components/icons";
import { OrderDialog } from "@/components/checkout/OrderDialog";
import { UnitAddToCart } from "@/components/product/UnitAddToCart";

/** Produit vendu au stère selon la grille tarifaire (`pricing.ts`). */
function StereAddToCart({ product }: { product: Product }) {
  const { add, lines } = useCart();
  const lengths = getLengths(product);
  const [lengthCm, setLengthCm] = useState(lengths[0]);
  const [quantity, setQuantity] = useState(tarifs[0].quantite);
  const [added, setAdded] = useState<{ quantity: number; replaced: boolean } | null>(null);
  const [orderOpen, setOrderOpen] = useState(false);

  const variant = product.variants.find((v) => v.lengthCm === lengthCm);
  // Chaque longueur a sa propre grille : le prix suit la longueur sélectionnée
  const grille = tarifsPour(lengthCm);
  const tarif = tarifPour(quantity, lengthCm);
  const soldOut = product.availability === "epuise";

  function handleAdd() {
    if (!variant || !tarif || soldOut) return;
    const replaced = lines.some((l) => l.productSlug === product.slug && l.variantId === variant.id);
    add({ productSlug: product.slug, variantId: variant.id, quantity });
    setAdded({ quantity, replaced });
  }

  const pill = (selected: boolean) =>
    `min-h-12 rounded-lg border px-3 py-2 text-sm font-semibold transition-colors ${
      selected ? "border-bark-900 bg-bark-900 text-cream-50" : "border-cream-400 bg-white text-bark-800 hover:border-bark-700"
    }`;

  return (
    <div className="rounded-xl border border-cream-300 bg-white p-5 sm:p-6">
      <fieldset>
        <legend className="field-label">1. Longueur des bûches</legend>
        <div className="grid grid-cols-2 gap-2">
          {lengths.map((l) => (
            <button
              key={l}
              type="button"
              className={`${pill(l === lengthCm)} text-base`}
              aria-pressed={l === lengthCm}
              onClick={() => {
                setLengthCm(l);
                setAdded(null);
              }}
            >
              {l} cm
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="field-label">2. Quantité</legend>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
          {grille.map((t) => (
            <button
              key={t.quantite}
              type="button"
              className={pill(t.quantite === quantity)}
              aria-pressed={t.quantite === quantity}
              aria-label={`${libelleQuantite(t.quantite)} — ${formatPrice(t.prix)}`}
              onClick={() => {
                setQuantity(t.quantite);
                setAdded(null);
              }}
            >
              <span className="block text-base leading-tight">{t.quantite}</span>
              <span className="block text-[0.7rem] font-normal opacity-80">{t.quantite > 1 ? "stères" : "stère"}</span>
            </button>
          ))}
        </div>
      </fieldset>

      {tarif && (
        <dl className="mt-6 space-y-2 rounded-lg bg-cream-100 p-4 text-sm sm:text-base" aria-live="polite" data-testid="recap-produit">
          <div className="flex justify-between gap-4">
            <dt className="text-bark-700">Quantité</dt>
            <dd className="font-semibold text-bark-900">
              {libelleQuantite(tarif.quantite)} · {lengthCm} cm
            </dd>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-bark-700">Prix du bois</dt>
            <dd className="text-right">
              <span className="font-serif text-2xl font-semibold text-bark-900" data-testid="prix-bois">
                {formatPrice(tarif.prix)}
              </span>
              <span className="block text-xs text-bark-600">soit {formatPrice(tarif.prixParStere)} / stère</span>
            </dd>
          </div>
          <div className="flex justify-between gap-4 border-t border-cream-300 pt-2">
            <dt className="text-bark-700">Livraison</dt>
            <dd className="text-right text-bark-800">calculée selon la destination</dd>
          </div>
        </dl>
      )}
      {mentionTaxes && <p className="mt-2 text-xs text-bark-600">{mentionTaxes}</p>}

      <div className="mt-5 grid gap-3">
        <button
          type="button"
          className="btn btn-primary w-full text-base"
          onClick={() => setOrderOpen(true)}
          disabled={!variant || soldOut}
        >
          {soldOut ? "Indisponible" : "Commander"}
        </button>
        {!soldOut && (
          <button type="button" className="btn btn-outline w-full" onClick={handleAdd} disabled={!variant}>
            Ajouter au panier
          </button>
        )}
      </div>
      {variant && (
        <OrderDialog
          open={orderOpen}
          onClose={() => setOrderOpen(false)}
          lines={[{ productSlug: product.slug, variantId: variant.id, quantity }]}
        />
      )}

      <p className="mt-3 text-sm text-bark-600">
        Plus de {quantiteMax} stères ?{" "}
        <Link href="/devis" className="font-semibold text-ember-700 underline underline-offset-2">
          Demandez un devis
        </Link>
      </p>

      {added && (
        <div
          role="status"
          className="mt-4 flex flex-col gap-3 rounded-lg bg-forest-50 p-4 text-forest-800 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="flex items-center gap-2 text-sm font-medium">
            <CheckIcon width={20} height={20} className="shrink-0" />
            {added.replaced
              ? `Quantité mise à jour : ${libelleQuantite(added.quantity)}`
              : `${libelleQuantite(added.quantity)} ajouté${added.quantity > 1 ? "s" : ""} au panier`}
          </p>
          <Link href="/panier" className="btn btn-dark !min-h-11 text-sm">
            Voir le panier
          </Link>
        </div>
      )}
    </div>
  );
}

export function AddToCart({ product }: { product: Product }) {
  return product.pricing === "grille-stere" ? <StereAddToCart product={product} /> : <UnitAddToCart product={product} />;
}
