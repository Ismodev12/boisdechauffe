import Link from "next/link";
import { libelleQuantite } from "@/config/pricing";
import { AdminNotices } from "@/components/admin/AdminNotices";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { formatPrice } from "@/lib/format";
import { requireAdmin } from "@/server/admin-auth";
import { listOrders, ORDER_STATUSES, statusLabels, type OrderStatus, type StoredOrder } from "@/server/orders";
import { storageConfigured } from "@/server/storage";

export const metadata = { title: "Commandes" };

/** « 10 stères » (anciennes commandes et commandes au stère) ou « 3 articles ». */
function quantitySummary(s: StoredOrder["summary"]) {
  if (s.totalSteres === undefined) return libelleQuantite(s.totalQuantity); // commande antérieure au catalogue
  if (s.totalSteres !== null && s.lines.every((l) => l.pricePerStere !== null)) return libelleQuantite(s.totalSteres);
  return `${s.totalQuantity} article${s.totalQuantity > 1 ? "s" : ""}`;
}

const dateFmt = new Intl.DateTimeFormat("fr-FR", { dateStyle: "short", timeStyle: "short", timeZone: "Europe/Paris" });

export default async function OrdersPage({ searchParams }: PageProps<"/admin/commandes">) {
  await requireAdmin();
  const sp = await searchParams;
  const filter = ORDER_STATUSES.includes(sp.statut as OrderStatus) ? (sp.statut as OrderStatus) : null;

  let orders: StoredOrder[] = [];
  let loadError: string | null = null;
  if (storageConfigured()) {
    try {
      orders = await listOrders();
    } catch (err) {
      loadError = (err as Error).message;
    }
  }
  const shown = filter ? orders.filter((o) => o.status === filter) : orders;
  const count = (s: OrderStatus) => orders.filter((o) => o.status === s).length;

  return (
    <div className="container-page py-8">
      <AdminNotices />
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h1 className="font-serif text-3xl font-semibold text-bark-900">Commandes</h1>
        <p className="text-sm text-bark-600">{orders.length} au total</p>
      </div>

      <nav aria-label="Filtrer par statut" className="mt-5 flex flex-wrap gap-2 text-sm">
        <FilterLink href="/admin/commandes" active={!filter} label={`Toutes (${orders.length})`} />
        {ORDER_STATUSES.map((s) => (
          <FilterLink key={s} href={`/admin/commandes?statut=${s}`} active={filter === s} label={`${statusLabels[s]} (${count(s)})`} />
        ))}
      </nav>

      {loadError && <p className="mt-6 rounded-lg bg-red-50 p-4 text-sm text-red-800">Erreur de lecture : {loadError}</p>}

      {shown.length === 0 ? (
        <p className="mt-10 rounded-xl border border-dashed border-cream-400 bg-white p-10 text-center text-bark-600">
          Aucune commande {filter ? `« ${statusLabels[filter].toLowerCase()} »` : "pour le moment"}.
        </p>
      ) : (
        <ul className="mt-6 grid gap-3" data-testid="liste-commandes">
          {shown.map((o) => (
            <li key={o.ref}>
              <Link
                href={`/admin/commandes/${o.ref}`}
                className="grid gap-2 rounded-xl border border-cream-300 bg-white p-4 transition-shadow hover:shadow-md sm:grid-cols-[1.2fr_1.5fr_1fr_auto] sm:items-center sm:gap-4"
              >
                <div>
                  <p className="font-mono text-sm font-semibold text-bark-900">{o.ref}</p>
                  <p className="text-xs text-bark-500">{dateFmt.format(new Date(o.createdAt))}</p>
                </div>
                <div className="min-w-0">
                  <p className="truncate font-semibold text-bark-900">{o.customerName || "—"}</p>
                  <p className="truncate text-sm text-bark-600">
                    {[o.phone, [o.city, o.country].filter(Boolean).join(", ")].filter(Boolean).join(" · ")}
                  </p>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-bark-900">
                    {formatPrice(o.summary.subtotal)}
                    {o.summary.hasUnpricedLines && <span className="font-normal text-bark-600"> + sur demande</span>}
                  </p>
                  <p className="text-bark-600">
                    {quantitySummary(o.summary)}
                    {o.summary.shipping.kind !== "prix" && " · livraison sur devis"}
                  </p>
                </div>
                <StatusBadge status={o.status} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FilterLink({ href, active, label }: { href: string; active: boolean; label: string }) {
  return (
    <Link
      href={href}
      className={`rounded-full border px-3 py-1.5 ${active ? "border-bark-900 bg-bark-900 text-cream-50" : "border-cream-400 bg-white text-bark-800 hover:border-bark-700"}`}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}
