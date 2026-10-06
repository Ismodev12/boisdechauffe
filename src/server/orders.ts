import "server-only";
import type { OrderSummary } from "@/lib/order";
import { del, getJSON, listPush, listRange, listRemove, setJSON } from "@/server/storage";

import { ORDER_STATUSES, statusLabels, type OrderStatus } from "@/lib/order-status";

export { ORDER_STATUSES, statusLabels, type OrderStatus };

/** Une commande telle qu'enregistrée pour le panel admin. */
export type StoredOrder = {
  ref: string;
  createdAt: string;
  status: OrderStatus;
  source: "panier" | "direct";
  /** Réponses au formulaire, figées avec le libellé du champ au moment de l'envoi. */
  answers: { id: string; label: string; value: string }[];
  /** Raccourcis utiles pour la liste. */
  customerName: string;
  phone: string;
  email: string;
  city: string;
  country: string;
  summary: Pick<OrderSummary, "lines" | "subtotal" | "totalQuantity" | "shipping" | "total"> &
    Partial<Pick<OrderSummary, "hasUnpricedLines" | "totalSteres">>; // absents des commandes antérieures au catalogue
  paymentLabel: string;
  adminNote?: string;
};

const INDEX = "commandes:index";
const key = (ref: string) => `commande:${ref}`;

export async function saveOrder(order: StoredOrder) {
  await setJSON(key(order.ref), order);
  await listPush(INDEX, order.ref);
}

export async function getOrder(ref: string) {
  return getJSON<StoredOrder>(key(ref));
}

export async function listOrders(limit = 200): Promise<StoredOrder[]> {
  const refs = await listRange(INDEX, 0, limit - 1);
  const orders = await Promise.all(refs.map((r) => getOrder(r)));
  return orders.filter((o): o is StoredOrder => Boolean(o));
}

export async function updateOrder(ref: string, patch: Partial<Pick<StoredOrder, "status" | "adminNote">>) {
  const o = await getOrder(ref);
  if (!o) return null;
  const next = { ...o, ...patch };
  await setJSON(key(ref), next);
  return next;
}

export async function deleteOrder(ref: string) {
  await del(key(ref));
  await listRemove(INDEX, ref);
}
