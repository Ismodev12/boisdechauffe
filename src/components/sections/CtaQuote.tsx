import Image from "next/image";
import Link from "next/link";
import { FlameIcon } from "@/components/icons";

/** Section « Tarifs professionnels et grosses quantités ». */
export function CtaQuote() {
  return (
    <section className="relative isolate overflow-hidden bg-forest-800" aria-labelledby="cta-devis-titre">
      <Image src="/images/site/stockage-foret.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-25" />
      <div className="container-page py-16 text-center sm:py-20">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ember-600 text-white">
          <FlameIcon width={28} height={28} />
        </span>
        <h2 id="cta-devis-titre" className="mx-auto mt-5 max-w-2xl font-serif text-3xl font-semibold text-white sm:text-4xl">
          Tarifs professionnels et grosses quantités
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-cream-100">
          Vous avez besoin de 20, 30, 40 ou 60 stères ? Profitez de nos tarifs dégressifs. Contactez-nous pour connaître
          les possibilités de livraison jusqu’à votre adresse.
        </p>
        <div className="mt-8">
          <Link href="/devis" className="btn btn-primary">
            Demander un devis
          </Link>
        </div>
      </div>
    </section>
  );
}
