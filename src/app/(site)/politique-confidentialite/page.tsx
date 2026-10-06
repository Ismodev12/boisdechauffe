import { adresseSiegeTexte, siteConfig } from "@/config/siteConfig";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Politique de confidentialité",
  description: "Comment nous collectons et utilisons vos données personnelles lors d'une commande ou d'une demande de contact.",
  path: "/politique-confidentialite",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Politique de confidentialité" path="/politique-confidentialite">
      <h2>Responsable du traitement</h2>
      <p>
        {[siteConfig.entreprise.nom, siteConfig.legal.raisonSociale && `(${siteConfig.legal.raisonSociale})`].filter(Boolean).join(" ")}
        {adresseSiegeTexte() && `, ${adresseSiegeTexte()}`}.{siteConfig.contact.email && ` Contact : ${siteConfig.contact.email}.`}
      </p>

      <h2>Données collectées</h2>
      <ul>
        <li>Lors d’une commande : nom, prénom, téléphone, email, adresse de livraison, contenu de la commande.</li>
        <li>Lors d’un contact ou d’une demande de devis : nom, email, téléphone (facultatif), pays et message.</li>
      </ul>
      <p>
        Votre panier et votre adresse de livraison sont conservés uniquement dans votre navigateur (stockage local) pour
        vous éviter de les ressaisir ; ils ne nous sont transmis que lorsque vous envoyez votre commande.
      </p>

      <h2>Finalités et base légale</h2>
      <ul>
        <li>Traiter et livrer votre commande (exécution du contrat).</li>
        <li>Répondre à vos demandes de contact et de devis (mesures précontractuelles).</li>
        <li>Respecter nos obligations comptables et fiscales (obligation légale).</li>
      </ul>

      <h2>Destinataires</h2>
      <p>
        Vos données sont destinées au vendeur et, si nécessaire, au transporteur chargé de la livraison. Elles transitent
        par nos prestataires techniques : hébergement du site, service d’envoi d’emails
        {" "}et, si vous payez en ligne, le prestataire de paiement (Stripe), qui traite vos données bancaires sans
        que nous y ayons accès. Elles ne sont jamais vendues.
      </p>

      <h2>Durée de conservation</h2>
      <p>
        Les données sont conservées pendant la durée nécessaire au traitement de votre commande ou de votre demande,
        puis pendant les durées imposées par la loi, notamment pour les pièces comptables.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité.
        Pour les exercer, écrivez-nous{siteConfig.contact.email ? ` à ${siteConfig.contact.email}` : ""}. Vous pouvez également introduire une
        réclamation auprès de la CNIL (www.cnil.fr).
      </p>

      <h2 id="cookies">Cookies et stockage local</h2>
      <p>
        Ce site n’utilise ni cookies publicitaires ni outil de mesure d’audience. Le stockage local de votre navigateur
        sert uniquement au fonctionnement du panier (produits choisis et adresse de livraison). Un cookie technique est
        déposé seulement lors de la connexion à l’espace d’administration réservé au vendeur. Ces éléments étant
        strictement nécessaires au fonctionnement du site, aucun consentement n’est demandé. Vous pouvez à tout moment
        vider le stockage local depuis les réglages de votre navigateur.
      </p>
    </LegalPage>
  );
}
