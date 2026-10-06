import Link from "next/link";
import { categories } from "@/config/categories";
import { PageHeader } from "@/components/PageHeader";
import { CategoryNav } from "@/components/product/CategoryNav";
import { ShopBrowser } from "@/components/shop/ShopBrowser";
import { pageMetadata } from "@/lib/seo";
import { toShopItem } from "@/lib/shop";
import { publishedProducts } from "@/lib/status";
import { getPrices } from "@/server/prices-store";
import { getStatuses } from "@/server/status-store";

export const metadata = pageMetadata({
  title: "Tous les produits — bois au stère, granulés, briquettes, allumage",
  description:
    "Tout le catalogue : bois de chauffage au stère et en palette, granulés de bois, briquettes et bois densifié, bois d’allumage. Recherche et filtres par essence, longueur, conditionnement et prix.",
  path: "/bois",
});

export default async function AllProductsPage() {
  const [prices, statuses] = await Promise.all([getPrices(), getStatuses()]);
  const list = publishedProducts(statuses);
  const items = list.map((p) => toShopItem(p, prices));
  const nbCategories = categories.filter((c) => list.some((p) => p.category === c.slug)).length;
  return (
    <>
      <PageHeader
        title="Tous les produits"
        eyebrow="Catalogue"
        crumbs={[{ href: "/bois", label: "Tous les produits" }]}
        intro={`${list.length} produits dans ${nbCategories} catégories. Les prix concernent les produits uniquement : la livraison est calculée séparément, selon votre destination.`}
      />
      <div className="container-page py-8 sm:py-12">
        <CategoryNav />
        <div className="mt-8">
          <ShopBrowser items={items} />
        </div>
        <p className="mt-14 rounded-xl border border-cream-300 bg-white p-6 text-bark-700">
          Vous ne trouvez pas le produit, la longueur ou la quantité recherchés ?{" "}
          <Link href="/devis" className="font-semibold text-ember-700 underline underline-offset-2">
            Demandez un devis personnalisé
          </Link>
          .
        </p>
      </div>
    </>
  );
}

