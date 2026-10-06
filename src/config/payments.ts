/**
 * ============================================================
 *  MOYENS DE PAIEMENT
 * ============================================================
 *
 * Un seul moyen est proposé sur la page Commande :
 *
 *  - "carte-stripe" : paiement par carte en ligne via Stripe.
 *       Il s'active AUTOMATIQUEMENT quand la variable d'environnement
 *       STRIPE_SECRET_KEY est définie sur le serveur (voir .env.example),
 *       et seulement si tous les prix de la commande et la livraison sont connus.
 *
 * Tant que la carte n'est pas disponible (Stripe non configuré, total « sur devis »),
 * la commande part en simple demande : « Règlement à convenir avec le vendeur ».
 *
 * Aucun moyen hors ligne (virement, chèque, espèces…) n'est proposé. Pour en
 * réactiver un, ajoutez un bloc { id, label, description, enabled } dans la liste.
 */

export type OfflinePaymentMethod = {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
};

export const offlinePaymentMethods: OfflinePaymentMethod[] = [];

export const enabledOfflineMethods = () => offlinePaymentMethods.filter((m) => m.enabled);

/**
 * Réseaux de cartes affichés dans le champ « Numéro de carte » de la page Commande.
 * N'indiquez que ceux réellement activés dans votre compte Stripe.
 *
 * LOGOS : `logo` est le chemin du fichier dans le dossier `public/` (les espaces
 * s'écrivent %20). Si le fichier est introuvable, le nom du réseau s'affiche dans un
 * simple badge. `zoom` agrandit un logo entouré de marges vides (1 = taille normale).
 */
export type CardBrand = { name: string; logo: string | null; zoom?: number };

export const cardBrands: CardBrand[] = [
  { name: "CB", logo: "/images/Carte-Bleue.png" },
  { name: "Visa", logo: "/images/1495815261-jd08_84586%20(1).webp", zoom: 2 },
  { name: "Mastercard", logo: "/images/Mastercard-logo.svg" },
];

/**
 * MODE SIMULATION / SITE DE DÉMONSTRATION (parcours de paiement sans Stripe).
 *
 * Tant que Stripe n'est pas configuré, le formulaire de carte s'affiche sur la page
 * Commande et valider ouvre une fausse page de confirmation : aucune commande n'est
 * envoyée, aucun argent n'est prélevé, aucune donnée de carte ne quitte le navigateur,
 * et tout numéro au bon format (16 chiffres, date non expirée, CVC à 3 chiffres) est accepté.
 * Un bandeau « Site de démonstration » prévient le visiteur : ne le retirez pas.
 *
 *  - `simulationEnLocal` : active la simulation en développement (`npm run dev`).
 *  - `demonstrationEnLigne` : l'active aussi sur le site en ligne (site fictif / vitrine).
 *       Mettez `false` le jour où le site vend réellement.
 */
const simulationEnLocal = true;
const demonstrationEnLigne = true;
export const paymentPreview = process.env.NODE_ENV === "production" ? demonstrationEnLigne : simulationEnLocal;

/** Clé de stockage (navigateur) du récapitulatif transmis à la page de simulation. */
export const SIMULATION_STORAGE_KEY = "simulation-paiement";
