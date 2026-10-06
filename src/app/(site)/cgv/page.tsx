import { adresseSiegeTexte, siteConfig } from "@/config/siteConfig";
import { mentionTaxes } from "@/config/pricing";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Conditions générales de vente",
  description: "Conditions générales de vente : commande, prix, livraison, paiement, rétractation et réclamations.",
  path: "/cgv",
});

export default function CgvPage() {
  return (
    <LegalPage title="Conditions générales de vente" path="/cgv">
      <h2>1. Vendeur</h2>
      <p>
        {[
          siteConfig.entreprise.nom && `${siteConfig.entreprise.nom}`,
          siteConfig.legal.raisonSociale && `raison sociale ${siteConfig.legal.raisonSociale}`,
          siteConfig.legal.formeJuridique,
          siteConfig.legal.capitalSocial && `au capital de ${siteConfig.legal.capitalSocial}`,
          siteConfig.legal.siren && `SIREN ${siteConfig.legal.siren}`,
          siteConfig.legal.rcs,
          adresseSiegeTexte() && `siège : ${adresseSiegeTexte()}`,
          siteConfig.legal.numeroTVA && `TVA intracommunautaire ${siteConfig.legal.numeroTVA}`,
        ]
          .filter(Boolean)
          .join(", ")}
        .
      </p>

      <h2>2. Objet</h2>
      <p>
        Les présentes conditions régissent les ventes conclues sur ce site (bois de chauffage et autres combustibles
        bois présentés au catalogue) avec des clients particuliers et professionnels.
      </p>

      <h2>3. Commande</h2>
      <p>
        Le client sélectionne ses produits, renseigne ses coordonnées et son adresse de livraison, puis envoie sa
        commande. Le vendeur recontacte ensuite le client pour confirmer la disponibilité des produits, le prix total
        (produits et livraison), la date de livraison et les modalités de règlement. Lorsque la commande comporte un
        prix provisoire ou une livraison « sur devis », la vente n’est conclue qu’après acceptation par le client du
        prix total confirmé par le vendeur.
      </p>

      <h2>4. Prix</h2>
      <p>
        Les prix sont indiqués en euros{mentionTaxes ? `, ${mentionTaxes}` : ""}. Ils concernent les produits uniquement.
        Les frais de livraison sont calculés séparément, selon la destination et la quantité commandée, et sont indiqués
        avant la validation de la commande ou communiqués sur devis. Certains prix du catalogue sont indiqués comme
        provisoires : ils sont confirmés au client avant la validation définitive de sa commande.
      </p>

      <h2>5. Livraison</h2>
      <p>
        Les livraisons sont proposées en France. Les livraisons vers d’autres pays européens sont étudiées au cas par
        cas : le vendeur confirme la faisabilité et le prix avant toute validation. Le délai, la date et les conditions
        de livraison (accès du véhicule, déchargement) sont précisés au client lors de la confirmation de sa commande.
      </p>

      <h2>6. Paiement</h2>
      <p>
        Les moyens de paiement disponibles sont indiqués lors de la commande. En l’absence de paiement en ligne, aucun
        règlement n’est demandé à l’envoi de la commande : les modalités de paiement sont convenues avec le client lors
        de la confirmation. Le paiement par carte en ligne, lorsqu’il est proposé, est traité par le prestataire Stripe ;
        le vendeur n’a pas accès aux données bancaires.
      </p>

      <h2>7. Droit de rétractation</h2>
      <p>
        Le client consommateur dispose d’un délai de quatorze jours pour exercer son droit de rétractation, dans les
        conditions prévues par le Code de la consommation (articles L221-18 et suivants). Il l’exerce en adressant une
        déclaration dénuée d’ambiguïté par email{siteConfig.contact.email ? ` à ${siteConfig.contact.email}` : ""}. Les
        sommes versées sont remboursées dans les conditions et délais prévus par la loi.
      </p>

      <h2>8. Réclamations et médiation</h2>
      <p>
        Pour toute réclamation{siteConfig.contact.email ? `, écrivez à ${siteConfig.contact.email}` : ", contactez-nous"}
        {siteConfig.contact.telephone ? ` ou appelez le ${siteConfig.contact.telephone}` : ""}.
        {siteConfig.legal.mediateur && ` Médiateur de la consommation : ${siteConfig.legal.mediateur}.`}
      </p>

      <h2>9. Droit applicable</h2>
      <p>Les présentes conditions sont soumises au droit français.</p>
    </LegalPage>
  );
}
