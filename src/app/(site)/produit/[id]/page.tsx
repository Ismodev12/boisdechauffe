import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory } from "@/config/categories";
import { getLengths, getProduct, optionAxes, products, productsInCategory, variantLabel } from "@/config/products";
import { mentionTaxes, tarifs, tousLesPrixStere, unite } from "@/config/pricing";
import { PageHeader } from "@/components/PageHeader";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductCard } from "@/components/product/ProductCard";
import { AddToCart } from "@/components/product/AddToCart";
import { AvailabilityBadge } from "@/components/product/AvailabilityBadge";
import { PriceTable } from "@/components/pricing/PriceTable";
import { TruckIcon } from "@/components/icons";
import { formatPrice } from "@/lib/format";
import { isProvisional, startingPrice, unitPrice } from "@/lib/prices";
import { absoluteUrl, jsonLd, pageMetadata } from "@/lib/seo";
import { isPublished, statutLabels } from "@/lib/status";
import { isAdmin } from "@/server/admin-auth";
import { getPrices, getValidated } from "@/server/prices-store";
import { getStatuses } from "@/server/status-store";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ id: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/produit/[id]">): Promise<Metadata> {
  const product = getProduct((await params).id);
  if (!product || !isPublished(await getStatuses(), product)) return { robots: { index: false } };
  const from = startingPrice(await getPrices(), product);
  const base = product.seo?.description ?? `${product.shortDescription} Commande en ligne, livraison selon destination.`;
  return pageMetadata({
    title: product.seo?.title ?? product.name,
    description: from ? `${base} À partir de ${formatPrice(from.amount)} / ${from.unit}.` : base,
    path: `/produit/${product.slug}`,
    image: product.images[0]?.src,
  });
}

export default async function ProductPage({ params }: PageProps<"/produit/[id]">) {
  const product = getProduct((await params).id);
  if (!product) notFound();

  const [prices, validated, statuses] = await Promise.all([getPrices(), getValidated(), getStatuses()]);
  // Fiche non publiée (brouillon / à vérifier) : introuvable pour les clients, aperçu pour l'administrateur
  const published = isPublished(statuses, product);
  if (!published && !(await isAdmin())) notFound();
  const anyProvisional = product.variants.some((v) => isProvisional(validated, product, v));
  const category = getCategory(product.category);
  const lengths = getLengths(product);
  const from = startingPrice(prices, product);
  const isStere = product.pricing === "grille-stere";
  const known = isStere
    ? tousLesPrixStere
    : product.variants.map((v) => unitPrice(prices, product, v)).filter((p): p is number => p !== null);

  // Données structurées : les offres ne sont publiées que pour des prix réellement définis
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description.join(" "),
    ...(product.images.length && { image: product.images.map((i) => absoluteUrl(i.src)) }),
    category: category?.name ?? "Bois de chauffage",
    ...(known.length && {
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: Math.min(...known),
        highPrice: Math.max(...known),
        offerCount: known.length,
        availability:
          product.availability === "en-stock"
            ? "https://schema.org/InStock"
            : product.availability === "epuise"
              ? "https://schema.org/OutOfStock"
              : "https://schema.org/PreOrder",
      },
    }),
  };

  const axes = optionAxes(product).filter((a) => a !== "Longueur");
  const optionValues = (axis: string) => [...new Set(product.variants.map((v) => v.options[axis]).filter(Boolean))];
  const specs: [string, React.ReactNode][] = [
    ["Catégorie", category?.name ?? "—"],
    ...(product.essences.length ? [["Essence(s)", product.essences.join(", ")] as [string, React.ReactNode]] : []),
    ...(lengths.length ? [["Longueur des bûches", lengths.map((l) => `${l} cm`).join(", ")] as [string, React.ReactNode]] : []),
    ...(isStere
      ? [["Vente", `Au ${unite.singulier}, de ${tarifs[0].quantite} à ${tarifs[tarifs.length - 1].quantite} ${unite.pluriel}`] as [string, React.ReactNode]]
      : axes.map((a) => [a, optionValues(a).join(" · ")] as [string, React.ReactNode])),
    ...(product.humidity ? [["Taux d’humidité", product.humidity] as [string, React.ReactNode]] : []),
    ...(product.details ?? []),
    ["Disponibilité", <AvailabilityBadge key="a" availability={product.availability} />],
  ];
  const related = productsInCategory(product.category)
    .filter((p) => p.slug !== product.slug && isPublished(statuses, p))
    .slice(0, 3);

  return (
    <>
      {published ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(productLd)} />
      ) : (
        <p className="bg-amber-100 px-4 py-3 text-center text-sm font-semibold text-amber-900" data-testid="apercu-admin">
          Aperçu administrateur — fiche « {statutLabels[statuses[product.slug]]} », invisible pour les clients.
          {product.noteStatut && <span className="block font-normal">{product.noteStatut}</span>}
        </p>
      )}
      <PageHeader
        title={product.name}
        crumbs={[
          { href: "/bois", label: "Tous les produits" },
          ...(category ? [{ href: `/bois/${category.slug}`, label: category.name }] : []),
          { href: `/produit/${product.slug}`, label: product.name },
        ]}
      />

      <div className="container-page grid gap-8 py-8 sm:py-12 lg:grid-cols-2 lg:gap-12">
        <ProductGallery images={product.images} name={product.name} />

        <div>
          <p className="text-lg leading-relaxed text-bark-700">{product.shortDescription}</p>
          <p className="mt-2 text-bark-800">
            {from ? (
              <>
                À partir de <strong className="text-xl">{formatPrice(from.amount)}</strong> / {from.unit}
              </>
            ) : (
              <strong>Prix sur demande</strong>
            )}
          </p>
          <div className="mt-6">
            {published ? (
              <AddToCart product={product} />
            ) : (
              <p className="rounded-lg border border-dashed border-cream-400 p-4 text-sm text-bark-600">Commande désactivée tant que la fiche n’est pas publiée.</p>
            )}
          </div>
          {product.marque && (
            <p className="mt-4 text-sm text-bark-600" data-testid="mention-marque">
              Produit de marque proposé sur commande : la disponibilité de la marque {product.marque} auprès de nos
              fournisseurs vous est confirmée avant la validation définitive de votre commande.
            </p>
          )}
          <p className="mt-4 flex items-start gap-2 text-sm text-bark-600">
            <TruckIcon width={20} height={20} className="mt-0.5 shrink-0 text-ember-600" />
            <span>
              La livraison est calculée à part, selon votre destination et la quantité commandée.{" "}
              <Link href="/livraison" className="font-semibold text-ember-700 underline underline-offset-2">
                Estimer ma livraison
              </Link>
            </span>
          </p>
        </div>
      </div>

      <div className="container-page grid gap-10 pb-16 lg:grid-cols-2 lg:gap-12">
        <section aria-labelledby="tarifs-titre" className="rounded-xl border border-cream-300 bg-white p-5 sm:p-6">
          <h2 id="tarifs-titre" className="font-serif text-2xl font-semibold text-bark-900">
            {isStere ? "Tarifs dégressifs" : "Tarifs"}
          </h2>
          {isStere ? (
            <>
              <p className="mt-1 mb-5 text-sm text-bark-600">Plus la quantité est importante, plus le prix moyen par stère baisse.</p>
              <PriceTable />
            </>
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm" data-testid="tarifs-variantes">
                <caption className="sr-only">Prix de chaque variante</caption>
                <thead>
                  <tr className="text-xs uppercase tracking-wider text-bark-600">
                    <th scope="col" className="pb-3 font-semibold">
                      Produit
                    </th>
                    <th scope="col" className="pb-3 text-right font-semibold">
                      Prix
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.variants.map((v) => {
                    const p = unitPrice(prices, product, v);
                    return (
                      <tr key={v.id} className="border-t border-cream-200">
                        <th scope="row" className="py-2.5 pr-3 font-medium text-bark-800">
                          {variantLabel(v)}
                        </th>
                        <td className="py-2.5 text-right tabular-nums">
                          {p !== null ? (
                            <>
                              <strong>{formatPrice(p)}</strong> <span className="text-bark-500">/ {v.unite.singulier}</span>
                            </>
                          ) : (
                            <span className="text-bark-600">Sur demande</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="mt-3 text-xs text-bark-600">
                Prix des produits uniquement, livraison non comprise{mentionTaxes ? ` — ${mentionTaxes}` : ""}.
                {anyProvisional && " Tarifs indicatifs : ils vous sont confirmés avant la validation définitive de votre commande."}
              </p>
            </div>
          )}
        </section>
        <div className="space-y-10">
          <section aria-labelledby="desc-titre">
            <h2 id="desc-titre" className="font-serif text-2xl font-semibold text-bark-900">
              Description
            </h2>
            <div className="mt-4 space-y-3 leading-relaxed text-bark-700">
              {product.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            {product.aCompleter && product.aCompleter.length > 0 && (
              <p className="mt-4 rounded-lg bg-cream-200 p-4 text-sm text-bark-700" data-testid="mention-caracteristiques">
                Les caractéristiques précises du produit livré (origine, taux d’humidité, dimensions) vous sont
                confirmées avant la validation définitive de votre commande.
              </p>
            )}
          </section>
          <section aria-labelledby="carac-titre">
            <h2 id="carac-titre" className="font-serif text-2xl font-semibold text-bark-900">
              Caractéristiques
            </h2>
            <dl className="mt-4 divide-y divide-cream-300 rounded-xl border border-cream-300 bg-white">
              {specs.map(([k, v]) => (
                <div key={k} className="flex items-center justify-between gap-4 px-5 py-3.5 text-sm">
                  <dt className="shrink-0 text-bark-600">{k}</dt>
                  <dd className="text-right font-medium text-bark-900">{v}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-cream-300 bg-cream-100 py-14" aria-labelledby="autres-titre">
          <div className="container-page">
            <h2 id="autres-titre" className="font-serif text-2xl font-semibold text-bark-900">
              Dans la même catégorie
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} prices={prices} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
