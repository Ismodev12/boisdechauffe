import { getDisplayName, siteConfig } from "@/config/siteConfig";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { jsonLd } from "@/lib/seo";

/** En-tête, pied de page et bouton WhatsApp du site public (hors administration). */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: getDisplayName(),
    ...(siteConfig.legal.raisonSociale && { legalName: siteConfig.legal.raisonSociale }),
    ...(siteConfig.legal.siret && { identifier: { "@type": "PropertyValue", propertyID: "SIRET", value: siteConfig.legal.siret.replace(/\s/g, "") } }),
    ...(siteConfig.legal.numeroTVA && { vatID: siteConfig.legal.numeroTVA }),
    url: siteConfig.url,
    ...(siteConfig.contact.email && { email: siteConfig.contact.email }),
    ...(siteConfig.contact.telephone && { telephone: siteConfig.contact.telephone }),
    sameAs: Object.values(siteConfig.reseaux).filter(Boolean),
    ...(siteConfig.legal.adresseSiege && {
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.legal.adresseSiege.rue,
        postalCode: siteConfig.legal.adresseSiege.codePostal,
        addressLocality: siteConfig.legal.adresseSiege.ville,
        addressCountry: "FR",
      },
    }),
    ...(siteConfig.entreprise.zoneLivraison && { areaServed: siteConfig.entreprise.zoneLivraison }),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organization)} />
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="contenu" className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
