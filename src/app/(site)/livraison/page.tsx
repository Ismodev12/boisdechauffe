import Link from "next/link";
import { countries, messageLivraisonSurDevis, shippingIntro } from "@/config/shipping";
import { formatPrice } from "@/lib/format";
import { franceTariffRows } from "@/lib/shipping";
import { phoneLink, siteConfig, whatsappLink } from "@/config/siteConfig";
import { MapPinIcon, PhoneIcon, TruckIcon, WhatsAppIcon } from "@/components/icons";
import { PageHeader } from "@/components/PageHeader";
import { ShippingEstimator } from "@/components/shipping/ShippingEstimator";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Livraison de bois de chauffage — France et Europe",
  description:
    "Livraison de bois de chauffage à domicile en France. Belgique, Luxembourg, Suisse, Allemagne, Pays-Bas, Espagne, Italie : livraison étudiée sur devis.",
  path: "/livraison",
});


export default function DeliveryPage() {
  const france = countries.find((c) => c.code === "FR");
  const tarifsFrance = franceTariffRows();
  const europe = countries.filter((c) => c.code !== "FR" && c.code !== "AUTRE");

  return (
    <>
      <PageHeader title="Livraison" eyebrow="France & Europe" crumbs={[{ href: "/livraison", label: "Livraison" }]} intro={shippingIntro} />

      <div className="container-page grid gap-10 py-10 sm:py-14 lg:grid-cols-[1fr_440px] lg:gap-14">
        <div className="prose-page order-2 lg:order-1">
          {(siteConfig.entreprise.localisation || siteConfig.entreprise.zoneLivraison) && (
            <ul className="!mt-0 !list-none !pl-0 grid gap-3 rounded-xl border border-cream-300 bg-white p-5 sm:grid-cols-2">
              {siteConfig.entreprise.localisation && (
                <li className="flex items-start gap-3">
                  <MapPinIcon className="mt-1 shrink-0 text-ember-600" />
                  <span>
                    <span className="block text-sm">Expédition depuis</span>
                    <strong className="text-bark-900">{siteConfig.entreprise.localisation}</strong>
                  </span>
                </li>
              )}
              {siteConfig.entreprise.zoneLivraison && (
                <li className="flex items-start gap-3">
                  <TruckIcon className="mt-1 shrink-0 text-ember-600" />
                  <span>
                    <span className="block text-sm">Zone de livraison</span>
                    <strong className="text-bark-900">{siteConfig.entreprise.zoneLivraison}</strong>
                  </span>
                </li>
              )}
            </ul>
          )}
          <h2>Comment est calculé le prix de la livraison ?</h2>
          <p>
            Les prix affichés sur le site concernent <strong>le bois uniquement</strong>. La livraison est toujours
            calculée séparément, selon :
          </p>
          <ul>
            <li>en France métropolitaine : uniquement le nombre de stères commandés, quel que soit le département ;</li>
            <li>en Corse, en Outre-mer et dans les autres pays : sur devis.</li>
          </ul>
          <p>
            Lorsque le prix peut être calculé automatiquement, il est affiché dans votre panier. Sinon, la livraison est
            indiquée <strong>« sur devis »</strong> : nous vous communiquons le tarif avant toute validation, et vous restez
            libre de ne pas donner suite.
          </p>

          <h2>Livraison de bois de chauffage en France</h2>
          {france?.mode === "grille" && tarifsFrance.length > 0 ? (
            <>
              <p>En France métropolitaine, le prix de la livraison dépend uniquement du nombre de stères commandés :</p>
              <table className="not-prose w-full max-w-md text-left text-sm" data-testid="tarifs-livraison">
                <caption className="sr-only">Tarifs de livraison en France métropolitaine</caption>
                <thead>
                  <tr className="text-xs uppercase tracking-wider text-bark-600">
                    <th scope="col" className="pb-2 font-semibold">Quantité commandée</th>
                    <th scope="col" className="pb-2 text-right font-semibold">Livraison</th>
                  </tr>
                </thead>
                <tbody>
                  {tarifsFrance.map((t) => (
                    <tr key={t.label} className="border-t border-cream-300">
                      <th scope="row" className="py-2.5 font-medium text-bark-800">{t.label}</th>
                      <td className="py-2.5 text-right font-semibold tabular-nums text-bark-900">{t.price === null ? "Sur devis" : formatPrice(t.price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>
                Le montant s’ajoute automatiquement dans votre panier. La Corse et l’Outre-mer sont livrées sur devis.
                Pour les produits dont le volume n’est pas exprimé en stères (granulés, briquettes…), la livraison est
                également sur devis.
              </p>
            </>
          ) : (
            <p>Pour la France, la livraison est actuellement proposée sur devis.</p>
          )}
          {france?.leadTime && <p>Délai indicatif : {france.leadTime}.</p>}

          <h2>Livraison en Europe</h2>
          <p>
            Nous étudions les livraisons vers plusieurs pays européens. Pour ces destinations, la faisabilité et le prix
            du transport sont confirmés au cas par cas, sur devis.
          </p>
          <ul>
            {europe.map((c) => (
              <li key={c.code}>
                <strong>{c.name}</strong> — {c.mode === "devis" ? "livraison sur devis" : "tarif calculé en ligne"}
                {c.code === "CH" && " (hors Union européenne : formalités et frais de douane possibles)"}
              </li>
            ))}
          </ul>
          <p>
            {messageLivraisonSurDevis} Votre pays n’est pas dans la liste ? Choisissez « Autre pays européen » ou{" "}
            <Link href="/contact">contactez-nous</Link> : nous vérifions si la livraison est possible.
          </p>
          {(phoneLink() || whatsappLink()) && (
            <div className="not-prose mt-5 flex flex-col gap-3 sm:flex-row">
              {phoneLink() && (
                <a href={phoneLink()!} className="btn btn-dark !no-underline !text-cream-50">
                  <PhoneIcon width={20} height={20} /> {siteConfig.contact.telephone}
                </a>
              )}
              {whatsappLink() && (
                <a
                  href={whatsappLink("Bonjour, je souhaite un tarif de livraison pour du bois de chauffage.")!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[#1f9d55] !text-white !no-underline"
                >
                  <WhatsAppIcon width={20} height={20} /> Demander mon tarif sur WhatsApp
                </a>
              )}
            </div>
          )}

          <h2>Grosses quantités</h2>
          <p>
            Pour une commande importante ou une livraison particulière, utilisez notre{" "}
            <Link href="/devis">formulaire de demande de devis</Link>.
          </p>
        </div>

        <div className="order-1 lg:sticky lg:top-28 lg:order-2 lg:self-start">
          <ShippingEstimator />
        </div>
      </div>
    </>
  );
}
