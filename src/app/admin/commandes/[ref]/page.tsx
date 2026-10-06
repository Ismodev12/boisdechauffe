import Link from "next/link";
import { notFound } from "next/navigation";
import { describeLine, lineTotalText } from "@/lib/order";
import { OrderAdminActions } from "@/components/admin/OrderAdminActions";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { formatPrice } from "@/lib/format";
import { requireAdmin } from "@/server/admin-auth";
import { getOrder } from "@/server/orders";

export const metadata = { title: "Détail de la commande" };

const dateFmt = new Intl.DateTimeFormat("fr-FR", { dateStyle: "full", timeStyle: "short", timeZone: "Europe/Paris" });

export default async function OrderDetailPage({ params }: PageProps<"/admin/commandes/[ref]">) {
  await requireAdmin();
  const { ref } = await params;
  const order = await getOrder(ref).catch(() => null);
  if (!order) notFound();
  const s = order.summary;
  const tel = order.phone ? `tel:${order.phone.replace(/[^\d+]/g, "")}` : null;
  const wa = order.phone ? `https://wa.me/${order.phone.replace(/\D/g, "").replace(/^0/, "33")}` : null;

  return (
    <div className="container-page max-w-4xl py-8">
      <Link href="/admin/commandes" className="text-sm text-bark-600 hover:underline">
        ← Toutes les commandes
      </Link>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <h1 className="font-mono text-2xl font-semibold text-bark-900">{order.ref}</h1>
        <StatusBadge status={order.status} />
      </div>
      <p className="mt-1 text-sm text-bark-600">
        Reçue le {dateFmt.format(new Date(order.createdAt))} · {order.source === "direct" ? "bouton « Commander »" : "panier"}
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <section className="rounded-xl border border-cream-300 bg-white p-5">
            <h2 className="font-serif text-xl font-semibold text-bark-900">Formulaire du client</h2>
            <dl className="mt-3 divide-y divide-cream-200" data-testid="reponses">
              {order.answers.map((a) => (
                <div key={a.id} className="grid gap-1 py-2.5 sm:grid-cols-[200px_1fr]">
                  <dt className="text-sm text-bark-600">{a.label}</dt>
                  <dd className="whitespace-pre-line break-words font-medium text-bark-900">{a.value || "—"}</dd>
                </div>
              ))}
            </dl>
            {(tel || wa || order.email) && (
              <div className="mt-4 flex flex-wrap gap-2">
                {tel && (
                  <a href={tel} className="btn btn-dark !min-h-10 text-sm">
                    Appeler
                  </a>
                )}
                {wa && (
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="btn !min-h-10 bg-[#1f9d55] text-sm text-white">
                    WhatsApp
                  </a>
                )}
                {order.email && (
                  <a href={`mailto:${order.email}?subject=${encodeURIComponent(`Votre commande ${order.ref}`)}`} className="btn btn-outline !min-h-10 text-sm">
                    Email
                  </a>
                )}
              </div>
            )}
          </section>

          <section className="rounded-xl border border-cream-300 bg-white p-5">
            <h2 className="font-serif text-xl font-semibold text-bark-900">Produits</h2>
            <ul className="mt-3 divide-y divide-cream-200">
              {s.lines.map((l) => {
                const d = describeLine(l);
                return (
                  <li key={l.key} className="flex justify-between gap-4 py-2.5 text-sm">
                    <span>
                      <strong>{d.quantity}</strong> — {l.productName}
                      {d.variant && <span className="text-bark-600"> — {d.variant}</span>}
                    </span>
                    <span className="text-right font-semibold">
                      {lineTotalText(l.lineTotal, formatPrice)}
                      {l.provisional && <span className="block text-xs font-normal text-amber-800">prix provisoire à confirmer</span>}
                    </span>
                  </li>
                );
              })}
            </ul>
            <dl className="mt-3 space-y-1.5 border-t border-cream-300 pt-3 text-sm">
              <div className="flex justify-between">
                <dt>Produits</dt>
                <dd className="font-semibold">{formatPrice(s.subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Livraison</dt>
                <dd>{s.shipping.kind === "prix" ? formatPrice(s.shipping.amount) : "Sur devis — à communiquer au client"}</dd>
              </div>
              <div className="flex justify-between text-base">
                <dt className="font-semibold">Total</dt>
                <dd className="font-semibold">{s.total !== null ? formatPrice(s.total) : `${formatPrice(s.subtotal)} + ${s.hasUnpricedLines ? "produits sur demande + " : ""}livraison`}</dd>
              </div>
              <div className="flex justify-between text-bark-600">
                <dt>Paiement souhaité</dt>
                <dd>{order.paymentLabel}</dd>
              </div>
            </dl>
          </section>
        </div>

        <OrderAdminActions refId={order.ref} status={order.status} note={order.adminNote ?? ""} />
      </div>
    </div>
  );
}
