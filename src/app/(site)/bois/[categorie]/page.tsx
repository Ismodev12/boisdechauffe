import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/config/categories";
import { mainProduct, productsInCategory } from "@/config/products";
import { ShopBrowser } from "@/components/shop/ShopBrowser";
import { toShopItem } from "@/lib/shop";
import { PageHeader } from "@/components/PageHeader";
import { ProductCard } from "@/components/product/ProductCard";
import { CategoryNav } from "@/components/product/CategoryNav";
import { pageMetadata } from "@/lib/seo";
import { publishedProducts } from "@/lib/status";
import { getPrices } from "@/server/prices-store";
import { getStatuses } from "@/server/status-store";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ categorie: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/bois/[categorie]">): Promise<Metadata> {
  const cat = getCategory((await params).categorie);
  return cat ? pageMetadata({ title: cat.seo.title, description: cat.seo.description, path: `/bois/${cat.slug}` }) : {};
}

export default async function CategoryPage({ params }: PageProps<"/bois/[categorie]">) {
  const cat = getCategory((await params).categorie);
  if (!cat) notFound();
  const [prices, statuses] = await Promise.all([getPrices(), getStatuses()]);
  const items = publishedProducts(statuses, productsInCategory(cat.slug));
  // Catégorie sans aucune fiche publiée (ex. autres combustibles en brouillon) : introuvable
  if (!items.length) notFound();

  return (
    <>
      <PageHeader
        title={cat.name}
        eyebrow="Catalogue"
        crumbs={[
          { href: "/bois", label: "Tous les produits" },
          { href: `/bois/${cat.slug}`, label: cat.name },
        ]}
        intro={cat.description}
      />
      <div className="container-page py-8 sm:py-12">
        <CategoryNav current={cat.slug} />
        {cat.slug === "buches" && items.includes(mainProduct) && (
          <div className="mt-8">
            <ProductCard product={mainProduct} prices={prices} priority wide />
          </div>
        )}
        <div className="mt-8">
          <ShopBrowser items={items.filter((p) => p.slug !== (cat.slug === "buches" ? mainProduct.slug : "")).map((p) => toShopItem(p, prices))} showCategory={false} />
        </div>
        <p className="mt-12 rounded-xl border border-cream-300 bg-white p-6 text-bark-700">
          Besoin d’une grosse quantité ou d’un produit particulier ?{" "}
          <Link href="/devis" className="font-semibold text-ember-700 underline underline-offset-2">
            Demandez un devis
          </Link>
          .
        </p>
      </div>
    </>
  );
}
