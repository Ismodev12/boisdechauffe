import { categories } from "@/config/categories";
import { productsInCategory } from "@/config/products";
import { AdminNotices } from "@/components/admin/AdminNotices";
import { PriceEditor, type PriceRow } from "@/components/admin/PriceEditor";
import { defaultPrices, priceKey } from "@/lib/prices";
import { requireAdmin } from "@/server/admin-auth";
import { getPrices, getValidated } from "@/server/prices-store";

export const metadata = { title: "Prix des produits" };

export default async function PricesAdminPage() {
  await requireAdmin();
  const [prices, validated] = await Promise.all([getPrices(), getValidated()]);
  const defaults = defaultPrices();
  const groups = categories.map((c) => ({
    category: c.name,
    products: productsInCategory(c.slug)
      .filter((p) => p.pricing === "unitaire")
      .map((p) => ({
        slug: p.slug,
        name: p.name,
        rows: p.variants.map((v): PriceRow => {
          const key = priceKey(p.slug, v.id);
          return {
            key,
            label: Object.values(v.options).join(" · "),
            unit: v.unite.singulier,
            price: prices[key] ?? null,
            defaultPrice: defaults[key] ?? null,
            validated: validated.includes(key),
            base: v.basePrix ?? "indicatif",
            hypothese: v.hypothese ?? null,
            alerte: v.alerte ?? null,
            reference: v.reference ?? null,
          };
        }),
      })),
  }));

  return (
    <div className="container-page max-w-5xl py-8">
      <AdminNotices />
      <h1 className="font-serif text-3xl font-semibold text-bark-900">Prix des produits</h1>
      <p className="mt-1 text-bark-600">
        Chaque produit affiche un prix. Les prix <strong>provisoires</strong> ont été calculés automatiquement :
        « indicatif » = environ 2 à 4 % sous kwattbois.fr, « estimé » = référence inexploitable, calculé à partir
        d’une hypothèse (affichée). Vérifiez-les avec vos coûts et votre marge, puis cochez « Validé ».
      </p>
      <p className="mt-2 mb-6 rounded-lg bg-cream-200 p-3 text-sm text-bark-700">
        Le mélange chêne / frêne / hêtre / charme garde sa grille au stère (1 stère = 40 € … 60 stères = 1 600 €), définie
        dans <code className="font-mono text-xs">src/config/pricing.ts</code> : ces prix sont validés.
      </p>
      <PriceEditor groups={groups} />
    </div>
  );
}
