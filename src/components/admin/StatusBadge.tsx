import { statusLabels, type OrderStatus } from "@/lib/order-status";

const styles: Record<OrderStatus, string> = {
  nouvelle: "bg-ember-600 text-white",
  "en-cours": "bg-amber-200 text-amber-950",
  terminee: "bg-forest-700 text-white",
  annulee: "bg-cream-300 text-bark-700 line-through",
};

export function StatusBadge({ status }: { status: OrderStatus }) {
  return <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${styles[status]}`}>{statusLabels[status]}</span>;
}
