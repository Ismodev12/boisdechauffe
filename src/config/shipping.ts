/**
 * ============================================================
 *  LIVRAISON — PAYS ET TARIFS
 * ============================================================
 *
 * Chaque pays a un mode :
 *  - "grille" : le prix est calculé avec la grille tarifaire ci-dessous.
 *               Si la grille ne trouve pas de prix (valeur `null`), le site
 *               affiche automatiquement « Livraison sur devis ».
 *  - "devis"  : le site affiche toujours « Livraison sur devis ».
 *
 * Tarifs validés par le vendeur le 06/10/2026 : France métropolitaine selon
 * le nombre de stères uniquement ; tous les autres pays, la Corse et
 * l'Outre-mer restent « sur devis ».
 */

export type ShippingMode = "grille" | "devis";

export type Country = {
  code: string;
  name: string;
  mode: ShippingMode;
  /** Délai indicatif affiché au client (ex. "5 à 10 jours ouvrés"). `null` = non affiché. */
  leadTime: string | null;
};

export const countries: Country[] = [
  { code: "FR", name: "France", mode: "grille", leadTime: null },
  { code: "BE", name: "Belgique", mode: "devis", leadTime: null },
  { code: "LU", name: "Luxembourg", mode: "devis", leadTime: null },
  { code: "CH", name: "Suisse", mode: "devis", leadTime: null },
  { code: "DE", name: "Allemagne", mode: "devis", leadTime: null },
  { code: "NL", name: "Pays-Bas", mode: "devis", leadTime: null },
  { code: "ES", name: "Espagne", mode: "devis", leadTime: null },
  { code: "IT", name: "Italie", mode: "devis", leadTime: null },
  // Ajoutez d'autres pays ici, ex. :
  // { code: "AT", name: "Autriche", mode: "devis", leadTime: null },
  { code: "AUTRE", name: "Autre pays européen", mode: "devis", leadTime: null },
];

/**
 * GRILLE TARIFAIRE FRANCE
 *
 * La France est découpée en zones (par département). Pour chaque zone,
 * des paliers indiquent le prix de livraison selon la quantité totale
 * commandée (en STÈRES, tous produits confondus).
 *
 * Exemple de zone remplie :
 *   {
 *     id: "zone-1",
 *     label: "Zone 1 — départements proches",
 *     departments: ["88", "54", "57", "67"],
 *     tiers: [
 *       { maxQuantity: 5, price: 50 },   // de 1 à 5 stères : 50 € (exemple)
 *       { maxQuantity: 20, price: 90 },  // de 6 à 20 stères : 90 € (exemple)
 *       { maxQuantity: null, price: null } // au-delà : sur devis
 *     ],
 *   }
 *
 * `departments: []` sur la dernière zone = « tous les autres départements ».
 */

export type Tier = { maxQuantity: number | null; price: number | null };
export type Zone = { id: string; label: string; departments: string[]; tiers: Tier[] };

export const franceGrid: { zones: Zone[]; excludedDepartments: string[] } = {
  zones: [
    {
      id: "toute-la-france",
      label: "France métropolitaine",
      departments: [], // tous les départements : le tarif ne dépend que du nombre de stères
      tiers: [
        { maxQuantity: 5, price: 75 }, // 1 à 5 stères
        { maxQuantity: 20, price: 90 }, // 6 à 20 stères
        { maxQuantity: null, price: 105 }, // 21 stères et plus
      ],
    },
  ],
  /** Départements toujours sur devis (Corse, Outre-mer…). */
  excludedDepartments: ["2A", "2B", "971", "972", "973", "974", "976"],
};

/** Texte de présentation de la page Livraison (modifiable). */
export const shippingIntro =
  "Nous organisons la livraison de votre commande directement à votre domicile. En France métropolitaine, le tarif dépend uniquement du nombre de stères commandés ; pour les autres destinations, la livraison est sur devis.";

/** Message affiché quand la livraison n'a pas de tarif configuré. */
export const messageLivraisonSurDevis =
  "Les frais de livraison sont calculés selon la destination et la quantité commandée. Contactez-nous pour obtenir votre tarif de livraison.";
