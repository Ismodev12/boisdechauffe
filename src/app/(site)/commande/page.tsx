import { enabledOfflineMethods } from "@/config/payments";
import { PageHeader } from "@/components/PageHeader";
import { CheckoutView } from "@/components/checkout/CheckoutView";
import { pageMetadata } from "@/lib/seo";
import { getFormConfig } from "@/server/form-store";
import { stripeEnabled } from "@/server/stripe";

export const dynamic = "force-dynamic"; // le formulaire peut être modifié à tout moment depuis l'admin

export const metadata = {
  ...pageMetadata({
    title: "Commande",
    description: "Finalisez votre commande de bois de chauffage : coordonnées, adresse de livraison et récapitulatif.",
    path: "/commande",
  }),
  robots: { index: false },
};

export default async function CheckoutPage() {
  const config = await getFormConfig();
  return (
    <>
      <PageHeader title="Finaliser ma commande" crumbs={[{ href: "/panier", label: "Panier" }, { href: "/commande", label: "Commande" }]} />
      <CheckoutView config={config} stripeAvailable={stripeEnabled()} offlineMethods={enabledOfflineMethods()} />
    </>
  );
}
