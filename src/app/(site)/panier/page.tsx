import { PageHeader } from "@/components/PageHeader";
import { CartView } from "@/components/cart/CartView";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Mon panier",
    description: "Votre panier de bois de chauffage : quantités, livraison et total.",
    path: "/panier",
  }),
  robots: { index: false },
};

export default function CartPage() {
  return (
    <>
      <PageHeader title="Mon panier" crumbs={[{ href: "/panier", label: "Panier" }]} />
      <CartView />
    </>
  );
}
