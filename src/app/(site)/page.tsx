import { franceTariffSentence } from "@/lib/shipping";
import Image from "next/image";
import Link from "next/link";
import { getLengths, mainProduct } from "@/config/products";
import { prixDeBaseParStere, unite } from "@/config/pricing";
import { countries } from "@/config/shipping";
import { getDisplayName } from "@/config/siteConfig";
import { PriceTable } from "@/components/pricing/PriceTable";
import { Highlights } from "@/components/sections/Highlights";
import { WhyUs } from "@/components/sections/WhyUs";
import { SocialProof } from "@/components/sections/SocialProof";
import { CtaQuote } from "@/components/sections/CtaQuote";
import { formatPrice } from "@/lib/format";
import { pageMetadata } from "@/lib/seo";
import { CategoryGrid } from "@/components/sections/CategoryGrid";

const TITLE = "Bois de chauffage très sec — idéal pour cet hiver";

export const metadata = {
  ...pageMetadata({
    title: TITLE,
    description: `Bois de chauffage très sec : mélange chêne, frêne, hêtre et charme en 33 ou 50 cm. À partir de ${formatPrice(prixDeBaseParStere)} le stère, tarifs dégressifs. Livraison en France et en Europe selon destination.`,
    path: "/",
  }),
  title: { absolute: `${TITLE} | ${getDisplayName()}` },
};

export default function HomePage() {
  const productUrl = `/produit/${mainProduct.slug}`;
  const deliveryCountries = countries.filter((c) => c.code !== "AUTRE");
  const lengths = getLengths(mainProduct);

  return (
    <>
      {/* Bannière principale */}
      <section className="relative isolate overflow-hidden bg-bark-950">
        <Image
          src="/images/site/hero-bois-empile.jpg"
          alt="Bûches de bois de chauffage empilées"
          fill
          preload
          sizes="100vw"
          className="-z-10 object-cover opacity-60"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bark-950 via-bark-950/60 to-bark-950/30 lg:bg-gradient-to-r lg:from-bark-950/95 lg:via-bark-950/65 lg:to-transparent" />
        <div className="container-page flex min-h-[600px] flex-col justify-end pb-12 pt-24 sm:min-h-[640px] lg:min-h-[700px] lg:justify-center lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow !text-ember-500">{getDisplayName()}</p>
            <h1 className="mt-4 font-serif text-[2.4rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Bois de chauffage très sec <span className="text-cream-300">—</span>{" "}
              <span className="text-cream-200">idéal pour cet hiver</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream-100">
              Mélange de {mainProduct.essences.map((e) => e.toLowerCase()).join(", ").replace(/, ([^,]*)$/, " et $1")} —
              disponible en {lengths.join(" cm et ")} cm.
            </p>
            <p className="mt-6 inline-flex items-baseline gap-2 rounded-lg bg-white/10 px-4 py-3 text-cream-100 ring-1 ring-white/20 backdrop-blur">
              À partir de
              <strong className="font-serif text-3xl font-semibold text-white">{formatPrice(prixDeBaseParStere)}</strong>
              le {unite.singulier}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={productUrl} className="btn btn-primary">
                Commander mon bois
              </Link>
              <Link href="/devis" className="btn btn-light">
                Demander un devis livraison
              </Link>
            </div>
            <p className="mt-5 text-sm text-cream-200">
              Aussi : granulés, briquettes et bois densifié, allumage —{" "}
              <Link href="/bois" className="font-semibold text-white underline underline-offset-2">
                voir tous les produits
              </Link>
            </p>
          </div>
        </div>
      </section>

      <CategoryGrid />

      <Highlights />

      <section className="bg-bark-900 text-cream-100" aria-labelledby="tarifs-titre">
        <div className="container-page grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow !text-ember-500">Bois de chauffage au stère — tarifs dégressifs</p>
            <h2 id="tarifs-titre" className="mt-2 font-serif text-3xl font-semibold text-white sm:text-4xl">
              Plus vous commandez, moins le stère vous coûte
            </h2>
            <p className="mt-5 leading-relaxed text-cream-200">
              Le prix moyen par stère baisse avec la quantité. Les prix indiqués concernent le bois uniquement : la
              livraison est calculée séparément selon votre destination et la quantité commandée.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={productUrl} className="btn btn-primary">
                Commander mon bois
              </Link>
              <Link href="/devis" className="btn btn-light">
                Demander un devis
              </Link>
            </div>
          </div>
          <div className="rounded-2xl bg-bark-950/60 p-5 ring-1 ring-cream-50/10 sm:p-7">
            <PriceTable dark />
          </div>
        </div>
      </section>

      {/* Livraison */}
      <section className="py-16 sm:py-20" aria-labelledby="livraison-titre">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/site/feu-de-cheminee.jpg"
              alt="Feu de bois dans une cheminée"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Livraison</p>
            <h2 id="livraison-titre" className="mt-2 font-serif text-3xl font-semibold text-bark-900 sm:text-4xl">
              Livraison en France et étude des livraisons en Europe
            </h2>
            <p className="mt-5 leading-relaxed text-bark-700">
              En France métropolitaine, la livraison dépend uniquement du nombre de stères : {franceTariffSentence()}.
              Pour les autres pays, la Corse et l’Outre-mer : sur devis.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Pays de livraison">
              {deliveryCountries.map((c) => (
                <li key={c.code} className="rounded-full border border-cream-400 bg-white px-3 py-1.5 text-sm text-bark-800">
                  {c.name}
                </li>
              ))}
              <li className="rounded-full border border-cream-400 bg-white px-3 py-1.5 text-sm text-bark-800">
                Autres pays européens
              </li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/livraison" className="btn btn-dark">
                Estimer ma livraison
              </Link>
              <Link href="/devis" className="btn btn-outline">
                Demander un devis livraison
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaQuote />
      <WhyUs />
      <SocialProof />
    </>
  );
}
