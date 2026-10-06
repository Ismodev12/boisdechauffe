import { isAdmin } from "@/server/admin-auth";
import { deleteOrder, ORDER_STATUSES, updateOrder, type OrderStatus } from "@/server/orders";
import { str } from "@/lib/validation";

/** Modifier le statut ou la note interne d'une commande. */
export async function PATCH(req: Request, ctx: RouteContext<"/api/admin/commandes/[ref]">) {
  if (!(await isAdmin())) return Response.json({ error: "Non autorisé." }, { status: 401 });
  const { ref } = await ctx.params;
  const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  const patch: { status?: OrderStatus; adminNote?: string } = {};
  if (ORDER_STATUSES.includes(body.status as OrderStatus)) patch.status = body.status as OrderStatus;
  if (typeof body.adminNote === "string") patch.adminNote = str(body.adminNote, 2000);
  const order = await updateOrder(ref, patch);
  if (!order) return Response.json({ error: "Commande introuvable." }, { status: 404 });
  return Response.json({ ok: true, order });
}

export async function DELETE(_req: Request, ctx: RouteContext<"/api/admin/commandes/[ref]">) {
  if (!(await isAdmin())) return Response.json({ error: "Non autorisé." }, { status: 401 });
  const { ref } = await ctx.params;
  await deleteOrder(ref);
  return Response.json({ ok: true });
}
