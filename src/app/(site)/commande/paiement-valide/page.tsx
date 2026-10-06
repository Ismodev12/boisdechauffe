import { notFound } from "next/navigation";
import { paymentPreview } from "@/config/payments";
import { PageHeader } from "@/components/PageHeader";
import { PaymentSimulation } from "@/components/checkout/PaymentSimulation";

export const metadata = { title: "Paiement validé", robots: { index: false } };

/** Confirmation du paiement de test : uniquement en développement local (voir src/config/payments.ts). */
export default function PaymentDonePage() {
  if (!paymentPreview) notFound();
  return (
    <>
      <PageHeader title="Paiement" crumbs={[{ href: "/panier", label: "Panier" }, { href: "/commande", label: "Commande" }, { href: "/commande/paiement-valide", label: "Paiement" }]} />
      <PaymentSimulation />
    </>
  );
}
