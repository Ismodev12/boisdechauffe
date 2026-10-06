import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { PageHeader } from "@/components/PageHeader";
import { WhyUs } from "@/components/sections/WhyUs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "À propos — vendeur de bois de chauffage en France",
  description: "ERP Bois de Chauffage, négoce de bois de chauffage à Thodure (Isère) : vente en ligne et livraison selon votre destination.",
  path: "/a-propos",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader title="À propos" crumbs={[{ href: "/a-propos", label: "À propos" }]} />
      <div className="container-page grid items-start gap-10 py-10 sm:py-14 lg:grid-cols-2 lg:gap-14">
        <div className="prose-page">
          <h2 className="!mt-0">Un vendeur de bois de chauffage basé à Thodure</h2>
          {siteConfig.aPropos.paragraphes.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="mt-6">
            <Link href="/bois">Découvrir nos bois</Link> · <Link href="/contact">Nous contacter</Link>
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream-200">
          <Image
            src="/images/site/stockage-foret.jpg"
            alt="Réserve de bois de chauffage en lisière de forêt"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <span className="absolute bottom-3 left-3 rounded bg-black/60 px-2 py-1 text-xs text-white">Photo d’illustration</span>
        </div>
      </div>
      <WhyUs />
    </>
  );
}
