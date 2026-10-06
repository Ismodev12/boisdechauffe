import type { MetadataRoute } from "next";
import { categories } from "@/config/categories";
import { absoluteUrl } from "@/lib/seo";
import { publishedProducts } from "@/lib/status";
import { getStatuses } from "@/server/status-store";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Seules les fiches publiées (et les catégories qui en contiennent) sont référencées
  const list = publishedProducts(await getStatuses());
  const pages: [string, number][] = [
    ["/", 1],
    ["/bois", 0.9],
    ["/livraison", 0.8],
    ["/devis", 0.7],
    ["/faq", 0.6],
    ["/contact", 0.6],
    ["/a-propos", 0.5],
    ["/mentions-legales", 0.2],
    ["/cgv", 0.2],
    ["/politique-confidentialite", 0.2],
  ];
  return [
    ...pages.map(([path, priority]) => ({ url: absoluteUrl(path), changeFrequency: "monthly" as const, priority })),
    ...categories
      .filter((c) => list.some((p) => p.category === c.slug))
      .map((c) => ({ url: absoluteUrl(`/bois/${c.slug}`), changeFrequency: "weekly" as const, priority: 0.8 })),
    ...list.map((p) => ({ url: absoluteUrl(`/produit/${p.slug}`), changeFrequency: "weekly" as const, priority: 0.8 })),
  ];
}
