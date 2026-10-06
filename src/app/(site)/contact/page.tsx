import { emailLink, phoneLink, siteConfig, whatsappLink } from "@/config/siteConfig";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon, TruckIcon, WhatsAppIcon } from "@/components/icons";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact — bois de chauffage",
  description: "Contactez-nous par téléphone, WhatsApp, email ou via le formulaire pour toute question sur votre bois de chauffage ou sa livraison.",
  path: "/contact",
});

export default function ContactPage() {
  const tel = phoneLink();
  const wa = whatsappLink("Bonjour, je souhaite des informations sur votre bois de chauffage.");

  return (
    <>
      <PageHeader
        title="Contactez-nous"
        crumbs={[{ href: "/contact", label: "Contact" }]}
        intro="Une question sur nos bois, la livraison ou une demande particulière ? Écrivez-nous ou appelez-nous."
      />
      <div className="container-page grid gap-10 py-10 sm:py-14 lg:grid-cols-[360px_1fr] lg:gap-14">
        <aside className="space-y-4">
          {wa && (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn w-full bg-[#1f9d55] text-lg text-white hover:bg-[#178246]">
              <WhatsAppIcon width={24} height={24} /> Écrire sur WhatsApp
            </a>
          )}

          <ul className="divide-y divide-cream-300 rounded-xl border border-cream-300 bg-white">
            <li className="flex items-start gap-3 p-5">
              <PhoneIcon className="mt-0.5 shrink-0 text-ember-600" />
              <div>
                <p className="text-sm text-bark-600">Téléphone</p>
                {tel ? (
                  <a href={tel} className="text-lg font-semibold text-bark-900 hover:text-ember-700">
                    {siteConfig.contact.telephone}
                  </a>
                ) : (
                  <p className="text-bark-700">Via le formulaire ci-contre</p>
                )}
              </div>
            </li>
            <li className="flex items-start gap-3 p-5">
              <MailIcon className="mt-0.5 shrink-0 text-ember-600" />
              <div className="min-w-0">
                <p className="text-sm text-bark-600">Email</p>
                {siteConfig.contact.email ? (
                  <a href={emailLink()!} className="break-all font-semibold text-bark-900 hover:text-ember-700">
                    {siteConfig.contact.email}
                  </a>
                ) : (
                  <p className="text-bark-700">Via le formulaire ci-contre</p>
                )}
              </div>
            </li>
            {siteConfig.entreprise.localisation && (
              <li className="flex items-start gap-3 p-5">
                <MapPinIcon className="mt-0.5 shrink-0 text-ember-600" />
                <div>
                  <p className="text-sm text-bark-600">Localisation</p>
                  <p className="font-semibold text-bark-900">{siteConfig.entreprise.localisation}</p>
                </div>
              </li>
            )}
            {siteConfig.entreprise.zoneLivraison && (
              <li className="flex items-start gap-3 p-5">
                <TruckIcon className="mt-0.5 shrink-0 text-ember-600" />
                <div>
                  <p className="text-sm text-bark-600">Zone de livraison</p>
                  <p className="font-semibold text-bark-900">{siteConfig.entreprise.zoneLivraison}</p>
                </div>
              </li>
            )}
            {siteConfig.contact.horaires && (
              <li className="flex items-start gap-3 p-5">
                <ClockIcon className="mt-0.5 shrink-0 text-ember-600" />
                <div>
                  <p className="text-sm text-bark-600">Disponibilités</p>
                  <p className="font-semibold text-bark-900">{siteConfig.contact.horaires}</p>
                </div>
              </li>
            )}
          </ul>
          <SocialLinks className="text-bark-800" />
        </aside>

        <section className="rounded-xl border border-cream-300 bg-white p-5 sm:p-8" aria-labelledby="form-titre">
          <h2 id="form-titre" className="font-serif text-2xl font-semibold text-bark-900">
            Formulaire de contact
          </h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
}
