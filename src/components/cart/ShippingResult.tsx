import type { ShippingQuote } from "@/lib/shipping";
import { formatPrice } from "@/lib/format";

/** Affichage du résultat d'estimation de livraison. */
export function ShippingResult({ quote }: { quote: ShippingQuote }) {
  if (quote.kind === "prix") {
    return (
      <div role="status" className="rounded-lg bg-forest-50 p-4 text-forest-800">
        <p className="font-semibold">Livraison estimée : {formatPrice(quote.amount)}</p>
        <p className="mt-1 text-sm">
          {quote.label}
          {quote.leadTime && ` · Délai indicatif : ${quote.leadTime}`}
        </p>
      </div>
    );
  }
  if (quote.kind === "devis") {
    return (
      <div role="status" className="rounded-lg border border-cream-300 bg-cream-100 p-4 text-bark-800">
        <p className="font-semibold">Livraison sur devis</p>
        <p className="mt-1 text-sm leading-relaxed">{quote.reason}</p>
      </div>
    );
  }
  return (
    <p role="status" className="text-sm text-bark-600">
      {quote.reason}
    </p>
  );
}

export function shippingLabel(quote: ShippingQuote) {
  if (quote.kind === "prix") return formatPrice(quote.amount);
  if (quote.kind === "devis") return "Sur devis";
  return "À calculer";
}
