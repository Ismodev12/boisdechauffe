import "server-only";
import type { OrderSummary } from "@/lib/order";
import { formatPrice } from "@/lib/format";
import { lineTotalText } from "@/lib/order";

/** Texte récapitulatif d'une commande (emails + message WhatsApp de secours). */
export function orderText(
  ref: string,
  answers: { label: string; value: string }[],
  summary: OrderSummary,
  paymentLabel: string,
) {
  const lines = summary.lines
    .map((l) => `- ${l.quantityLabel} — ${l.productName} — ${l.variantLabel} : ${lineTotalText(l.lineTotal, formatPrice)}`)
    .join("\n");
  const shipping =
    summary.shipping.kind === "prix" ? formatPrice(summary.shipping.amount) : "sur devis (à confirmer au client)";

  return [
    `Commande ${ref}`,
    "",
    "PRODUITS",
    lines,
    "",
    `Produits : ${formatPrice(summary.subtotal)}${summary.hasUnpricedLines ? " + produits sur demande (prix à communiquer au client)" : ""}`,
    `Livraison : ${shipping}`,
    `Total : ${summary.total !== null ? formatPrice(summary.total) : `${formatPrice(summary.subtotal)} + éléments à confirmer`}`,
    `Paiement souhaité : ${paymentLabel}`,
    "",
    "INFORMATIONS DU CLIENT",
    ...answers.filter((a) => a.value).map((a) => `${a.label} : ${a.value}`),
  ].join("\n");
}
