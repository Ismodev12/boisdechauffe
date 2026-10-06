/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  COORDONNÉES ET INFORMATIONS DE L'ENTREPRISE               ║
 * ║  → Fichier UNIQUE : modifiez ici, tout le site se met à jour ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Ces informations sont utilisées automatiquement dans :
 * l'en-tête, le pied de page, la page Contact, le bouton WhatsApp,
 * le formulaire de contact, la page Livraison, les pages légales,
 * les boutons TikTok / Facebook et les données lues par Google.
 *
 * Règles :
 *  - Écrivez les valeurs entre guillemets : "comme ceci".
 *  - Mettez `null` (sans guillemets) pour ne rien afficher.
 *    Une information laissée à `null` n'est simplement pas affichée aux clients.
 *  - Ce fichier est public : n'y mettez jamais de mot de passe ni de clé API
 *    (celles-ci vont dans les variables d'environnement, voir `.env.example`).
 */

export const siteConfig = {
  /* ─────────────── 1. ENTREPRISE ─────────────── */
  entreprise: {
    /** Nom affiché dans le logo, les titres et les emails. */
    nom: "ERP Bois de Chauffage" as string | null,

    /** Texte du logo si `nom` est vide. */
    nomParDefaut: "Bois de chauffage",

    /** Ville / localisation de l'activité (affichée en pied de page, Contact, Livraison). */
    localisation: "Thodure, France" as string | null,

    /** Zone de livraison (affichée en pied de page, Contact, Livraison). */
    zoneLivraison: "France + pays européens selon possibilité" as string | null,
  },

  /* ─────────────── 2. CONTACT ─────────────── */
  contact: {
    /** Email affiché sur le site (lien « écrire un email »). */
    email: "boisdechauffageerp@gmail.com" as string | null,

    /** Téléphone, tel qu'il doit s'afficher. Le lien d'appel est créé automatiquement. */
    telephone: "+33 7 56 83 44 15" as string | null,

    /**
     * Numéro WhatsApp, avec l'indicatif pays (ex. "+33 7 56 83 44 15").
     * Les espaces et le « + » sont retirés automatiquement pour créer le lien.
     */
    whatsapp: "+33 7 56 83 44 15" as string | null,

    /** Horaires de disponibilité (ex. "Du lundi au samedi, 8h–19h"). null = non affichés. */
    horaires: null as string | null,
  },

  /* ─────────────── 3. RÉSEAUX SOCIAUX ─────────────── */
  /** Collez l'adresse complète de votre page (https://...). null = bouton masqué. */
  reseaux: {
    tiktok: null as string | null, // ex. "https://www.tiktok.com/@votrecompte"
    facebook: null as string | null, // ex. "https://www.facebook.com/votrepage"
    instagram: null as string | null,
  },

  /* ─────────────── 4. INFORMATIONS LÉGALES ─────────────── */
  /** Obligatoires avant d'ouvrir les ventes (mentions légales, CGV). */
  legal: {
    // Données vérifiées le 02/10/2026 : registre national des entreprises (data.inpi.fr),
    // annuaire-entreprises.data.gouv.fr et service européen VIES (n° de TVA valide).
    raisonSociale: "ERP BOIS DE CHAUFFAGE" as string | null, // nom officiel de l'entreprise
    formeJuridique: "SASU (société par actions simplifiée unipersonnelle)" as string | null,
    siren: "819 902 180" as string | null,
    siret: "819 902 180 00028" as string | null, // SIRET du siège social
    codeAPE: "46.73A — Commerce de gros de bois et de matériaux de construction" as string | null,
    /** Adresse du siège social (utilisée dans les pages légales et les données lues par Google). */
    adresseSiege: {
      rue: "139 chemin du Vacher",
      codePostal: "38260",
      ville: "Thodure",
      pays: "France",
    } as { rue: string; codePostal: string; ville: string; pays: string } | null,
    capitalSocial: "3 000 €" as string | null, // registre national des entreprises (INPI)
    rcs: null as string | null, // ex. "RCS Vienne 819 902 180" — ville du greffe à confirmer (extrait Kbis)
    numeroTVA: "FR49819902180" as string | null, // vérifié valide sur VIES (Commission européenne) le 02/10/2026
    directeurPublication: null as string | null, // en général le président de la SAS — à compléter
    hebergeur: "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com",
    mediateur: null as string | null, // médiateur de la consommation (obligatoire pour vendre aux particuliers)
  },

  /* ─────────────── 5. PAGE « À PROPOS » ─────────────── */
  aPropos: {
    /**
     * Votre présentation, un paragraphe par ligne. Rédigée uniquement à partir d'informations vérifiées
     * (activité de négoce de bois de chauffage, siège à Thodure, fonctionnement du site). Ajoutez ici
     * l'origine du bois, votre expérience ou votre équipe quand vous souhaitez les présenter.
     */
    paragraphes: [
      "ERP Bois de Chauffage est une entreprise de négoce de bois de chauffage installée à Thodure, en Isère.",
      "Nous proposons en ligne un bois de chauffage très sec, mélange de chêne, frêne, hêtre et charme, vendu au stère avec des tarifs dégressifs, ainsi qu’un catalogue de bûches, granulés, briquettes et bois d’allumage proposés sur commande.",
      "Vous pouvez commander directement sur le site ou nous demander un devis. Les frais de livraison sont calculés selon votre adresse et la quantité commandée. Pour les destinations hors de France, chaque demande est étudiée : nous vous confirmons la faisabilité et le prix avant toute validation.",
      "Pour une question sur un produit, une quantité ou une livraison, vous pouvez nous joindre par téléphone, par WhatsApp, par email ou via le formulaire de contact.",
    ] as string[],
  },

  /* ─────────────── 6. TECHNIQUE ─────────────── */
  /**
   * Adresse du site en ligne. Ordre utilisé :
   *  1. NEXT_PUBLIC_SITE_URL (à définir sur Vercel quand vous aurez votre nom de domaine) ;
   *  2. sinon l'adresse principale fournie automatiquement par Vercel (…vercel.app) ;
   *  3. sinon l'adresse locale de développement.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
};

/* ══════════ Fonctions automatiques — inutile de les modifier ══════════ */

export function getDisplayName() {
  return siteConfig.entreprise.nom ?? siteConfig.entreprise.nomParDefaut;
}

/** Lien WhatsApp (wa.me) avec message pré-rempli facultatif. */
export function whatsappLink(message?: string) {
  const num = siteConfig.contact.whatsapp?.replace(/\D/g, "");
  if (!num) return null;
  const base = `https://wa.me/${num}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Adresse du siège sur une ligne (« 139 chemin du Vacher, 38260 Thodure, France »). */
export function adresseSiegeTexte() {
  const a = siteConfig.legal.adresseSiege;
  return a ? `${a.rue}, ${a.codePostal} ${a.ville}, ${a.pays}` : null;
}

/** Lien d'appel (tel:). */
export function phoneLink() {
  const tel = siteConfig.contact.telephone;
  return tel ? `tel:${tel.replace(/[^\d+]/g, "")}` : null;
}

/** Lien email (mailto:). */
export function emailLink(subject?: string, body?: string) {
  const email = siteConfig.contact.email;
  if (!email) return null;
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const q = params.toString().replace(/\+/g, "%20");
  return `mailto:${email}${q ? `?${q}` : ""}`;
}
