export const ORDER_STATUSES = ["nouvelle", "en-cours", "terminee", "annulee"] as const;
export type OrderStatus = (typeof ORDER_STATUSES)[number];

export const statusLabels: Record<OrderStatus, string> = {
  nouvelle: "Nouvelle",
  "en-cours": "En cours",
  terminee: "Terminée",
  annulee: "Annulée",
};
