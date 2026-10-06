const eur0 = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const eur2 = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", minimumFractionDigits: 2 });

/** 40 → « 40 € », 1000 → « 1 000 € », 33.333 → « 33,33 € ». */
export function formatPrice(amount: number) {
  return Number.isInteger(amount) ? eur0.format(amount) : eur2.format(amount);
}
