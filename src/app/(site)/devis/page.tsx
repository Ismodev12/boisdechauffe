import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { CheckIcon } from "@/components/icons";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Devis bois de chauffage — grosses quantités",
  description:
    "Demandez un devis personnalisé pour une grosse commande de bois de chauffage ou une livraison hors de France : essence, longueur, quantité et adresse.",
  path: "/devis",
});

export default function QuotePage() {
  return (
    <>
      <PageHeader
        title="Demande de devis"
        eyebrow="Grosses quantités"
        crumbs={[{ href: "/devis", label: "Demande de devis" }]}
        intro="Pour une commande importante, une longueur particulière ou une livraison hors de France, décrivez votre besoin : nous étudions votre demande et vous répondons avec une proposition adaptée."
      />
      <div className="container-page grid gap-10 py-10 sm:py-14 lg:grid-cols-[1fr_320px] lg:gap-14">
        <section className="rounded-xl border border-cream-300 bg-white p-5 sm:p-8" aria-label="Formulaire de devis">
          <ContactForm mode="devis" />
        </section>
        <aside className="space-y-4 text-sm text-bark-700">
          <h2 className="font-serif text-xl font-semibold text-bark-900">Ce devis est utile pour :</h2>
          <ul className="space-y-3">
            {[
              "les grosses quantités (particuliers ou professionnels) ;",
              "les livraisons en Belgique, Suisse, Allemagne et ailleurs en Europe ;",
              "les longueurs ou conditionnements non proposés en ligne ;",
              "les livraisons avec contraintes d’accès particulières.",
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <CheckIcon width={20} height={20} className="shrink-0 text-forest-700" />
                {t}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
}
