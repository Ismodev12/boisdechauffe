import { photoCredits } from "@/config/credits";
import { adresseSiegeTexte, siteConfig } from "@/config/siteConfig";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site : éditeur, hébergeur, propriété intellectuelle et crédits photos.",
  path: "/mentions-legales",
});

export default function LegalNoticePage() {
  const l = siteConfig.legal;
  return (
    <LegalPage title="Mentions légales" path="/mentions-legales">
      <h2>Éditeur du site</h2>
      <ul>
        {(
          [
            ["Nom commercial", siteConfig.entreprise.nom],
            ["Raison sociale", l.raisonSociale],
            ["Forme juridique", l.formeJuridique],
            ["Capital social", l.capitalSocial],
            ["Adresse du siège", adresseSiegeTexte()],
            ["SIREN", l.siren],
            ["SIRET (siège)", l.siret],
            ["Immatriculation", l.rcs],
            ["Code APE", l.codeAPE],
            ["TVA intracommunautaire", l.numeroTVA],
            ["Téléphone", siteConfig.contact.telephone],
            ["Email", siteConfig.contact.email],
            ["Directeur de la publication", l.directeurPublication],
          ] as [string, string | null][]
        )
          // Une information non renseignée n'est pas affichée
          .filter(([, v]) => v)
          .map(([k, v]) => (
            <li key={k}>
              {k} : {v}
            </li>
          ))}
      </ul>

      <h2>Hébergement</h2>
      <p>{l.hebergeur}</p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Les textes, logos et photographies propres à ce site sont protégés. Toute reproduction sans autorisation est
        interdite, à l’exception des photographies sous licence libre listées ci-dessous, réutilisables selon leur
        licence.
      </p>

      <h2>Crédits photos</h2>
      <p>Certaines photos d’illustration proviennent de Wikimedia Commons :</p>
      <ul>
        {photoCredits.map((c) => (
          <li key={c.source}>
            <a href={c.source} target="_blank" rel="noopener noreferrer">
              Photo
            </a>{" "}
            : {c.author} —{" "}
            {c.licenseUrl ? (
              <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer">
                {c.license}
              </a>
            ) : (
              c.license
            )}
            {c.license.includes("SA") && " (recadrée et redimensionnée)"}
          </li>
        ))}
      </ul>

      <h2>Données personnelles</h2>
      <p>
        Voir notre <a href="/politique-confidentialite">politique de confidentialité</a>.
      </p>
    </LegalPage>
  );
}
