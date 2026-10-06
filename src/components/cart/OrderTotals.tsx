import type { OrderSummary } from "@/lib/order";
import { libelleQuantite, mentionTaxes } from "@/config/pricing";
import { formatPrice } from "@/lib/format";
import { shippingLabel } from "@/components/cart/ShippingResult";

/** Prix des produits, livraison (toujours séparée) et total. */
export function OrderTotals({ summary }: { summary: OrderSummary }) {
  const allStere = summary.totalSteres !== null && summary.lines.every((l) => l.pricePerStere !== null);
  const label = allStere ? `Prix du bois (${libelleQuantite(summary.totalSteres!)})` : "Produits";
  const nothingPriced = summary.lines.every((l) => l.lineTotal === null);
  const pending = [summary.hasUnpricedLines && "produits sur demande", summary.shipping.kind !== "prix" && "livraison"].filter(Boolean);

  return (
    <dl className="space-y-3 text-sm">
      <div className="flex justify-between gap-4">
        <dt className="text-bark-600">{label}</dt>
        <dd className="text-right font-medium text-bark-900" data-testid="sous-total">
          {nothingPriced ? "Sur demande" : formatPrice(summary.subtotal)}
          {summary.hasUnpricedLines && !nothingPriced && (
            <span className="block text-xs font-normal text-bark-500">+ produits sur demande</span>
          )}
        </dd>
      </div>
      <div className="flex justify-between gap-4">
        <dt className="text-bark-600">Livraison</dt>
        <dd className="text-right font-medium text-bark-900" data-testid="livraison">
          {shippingLabel(summary.shipping)}
        </dd>
      </div>
      <div className="flex items-baseline justify-between gap-4 border-t border-cream-300 pt-3">
        <dt className="text-base font-semibold text-bark-900">Total</dt>
        <dd className="text-right font-serif text-2xl font-semibold text-bark-900" data-testid="total">
          {summary.total !== null ? (
            formatPrice(summary.total)
          ) : nothingPriced ? (
            <span className="font-sans text-base">Confirmé sur devis</span>
          ) : (
            <>
              {formatPrice(summary.subtotal)}
              <span className="block font-sans text-xs font-normal text-bark-500">+ {pending.join(" + ")} (sur devis)</span>
            </>
          )}
        </dd>
      </div>
      {mentionTaxes && <p className="text-right text-xs text-bark-500">{mentionTaxes}</p>}
      {summary.hasProvisionalPrices && (
        <p className="text-xs leading-relaxed text-bark-500" data-testid="mention-provisoire">
          Certains tarifs sont indicatifs : ils vous seront confirmés avant la validation définitive de votre commande.
        </p>
      )}
    </dl>
  );
}
