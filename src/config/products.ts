/**
 * ============================================================
 *  CATALOGUE — PRODUITS ET VARIANTES
 * ============================================================
 *
 * PRIX
 *  - Le produit principal (mélange chêne/frêne/hêtre/charme) est vendu au stère
 *    selon la grille de `src/config/pricing.ts` (vos tarifs).
 *  - Les autres produits ont un prix PAR VARIANTE. Par défaut il vaut `null`
 *    → le site affiche « Prix sur demande » et la commande devient une demande
 *    de devis pour cette ligne. Définissez vos prix depuis le panel admin
 *    (/admin/prix) ou ici, dans le champ `prix`.
 *  - `reference` = prix constaté sur kwattbois.fr le 02/10/2026 pour un produit
 *    comparable. C'est un REPÈRE, jamais affiché aux clients.
 *
 * AUTRES RÈGLES
 *  - N'indiquez un taux d'humidité, une certification ou une origine que s'ils
 *    sont réels (champs `humidity` et `details`).
 *  - Photos : `public/images/produits/`. Liste vide = visuel neutre « Photo à venir ».
 *  - Pour ajouter un produit : copiez un bloc complet et changez au minimum `slug`.
 */

import { produitsImportes } from "@/config/catalogue-importe";

export type Availability = "en-stock" | "sur-commande" | "epuise";

/**
 * Statut de publication d'une fiche :
 *  - "publie"     : visible par les clients ;
 *  - "a-verifier" : masquée, une information reste à vérifier (marque, référence…) ;
 *  - "brouillon"  : masquée volontairement (produit hors cœur de métier, approvisionnement non établi…).
 * Valeur par défaut ici ; modifiable ensuite dans le panel admin → Produits.
 */
export type Statut = "publie" | "a-verifier" | "brouillon";

export type Unit = { singulier: string; pluriel: string };

export type Variant = {
  /** Identifiant unique dans le produit (ne pas modifier une fois des commandes passées). */
  id: string;
  /** Choix affichés au client, ex. { Longueur: "33 cm", Conditionnement: "Palette" }. */
  options: Record<string, string>;
  /** Longueur des bûches en cm, si concerné. */
  lengthCm?: number;
  /** Ce que le client commande (ex. « palette », « sac »). */
  unite: Unit;
  /** Volume d'une unité en stères, si connu (sert à l'estimation de livraison). */
  steres?: number;
  /** Prix TTC d'une unité, en euros (null uniquement pour la vente au stère, tarifée par `pricing.ts`). */
  prix: number | null;
  /** Origine du prix provisoire : "indicatif" (≈ 2 à 4 % sous la référence) ou "estime" (hypothèse documentée). */
  basePrix?: "indicatif" | "estime";
  /** Hypothèse de calcul d'un prix estimé (affichée dans le panel admin). */
  hypothese?: string;
  /** Incohérence repérée avec le marché ou le reste du catalogue (affichée dans le panel admin). */
  alerte?: string;
  /** Prix de référence relevé sur kwattbois.fr (repère interne, non affiché aux clients). */
  reference?: { prix: number; libelle: string };
};

export type ProductImage = {
  src: string;
  alt: string;
  /** true tant que la photo n'est pas une vraie photo de VOTRE produit. */
  illustration?: boolean;
};

export type Product = {
  slug: string;
  name: string;
  /** Catégorie (voir `src/config/categories.ts`). */
  category: string;
  /** Essences de bois, si concerné. */
  essences: string[];
  /** Une phrase affichée sur les cartes du catalogue. */
  shortDescription: string;
  /** Paragraphes de la fiche produit. */
  description: string[];
  images: ProductImage[];
  /** Taux d'humidité mesuré (ex. "< 20 %"). null = non affiché. */
  humidity: string | null;
  /** Caractéristiques supplémentaires réelles, ex. [["Certification", "ENplus A1"]]. */
  details?: [string, string][];
  /** Informations que vous devez encore fournir. Côté client : mention neutre « caractéristiques confirmées avant validation ». */
  aCompleter?: string[];
  availability: Availability;
  /** "grille-stere" = grille de `pricing.ts` ; "unitaire" = prix par variante. */
  pricing: "grille-stere" | "unitaire";
  variants: Variant[];
  /** Marque du produit, si c'est un produit de marque. */
  marque?: string;
  /** Statut de publication par défaut (absent = "publie"). */
  statut?: Statut;
  /** Raison du statut et points à vérifier (affichés uniquement dans le panel admin). */
  noteStatut?: string;
  /** Mis en avant sur la page d'accueil. */
  featured?: boolean;
  seo?: { title?: string; description?: string };
};

/* ---------- Unités ---------- */

const U = {
  stere: { singulier: "stère", pluriel: "stères" },
  demiPalette: { singulier: "demi-palette", pluriel: "demi-palettes" },
  palette: { singulier: "palette", pluriel: "palettes" },
  filet: { singulier: "filet", pluriel: "filets" },
  lotFilets: { singulier: "lot", pluriel: "lots" },
  sac: { singulier: "sac", pluriel: "sacs" },
  bigBag: { singulier: "big bag", pluriel: "big bags" },
  caisse: { singulier: "caisse", pluriel: "caisses" },
  lot: { singulier: "lot", pluriel: "lots" },
  boite: { singulier: "boîte", pluriel: "boîtes" },
  flacon: { singulier: "flacon", pluriel: "flacons" },
  camion: { singulier: "camion", pluriel: "camions" },
} satisfies Record<string, Unit>;

const illus = (src: string, alt: string): ProductImage => ({ src, alt, illustration: true });
/** Produit vendu au stère selon VOTRE grille (`pricing.ts`) — inchangé. */
const venteAuStere: Product[] = [
  /* ═══════════════ BÛCHES ═══════════════ */
  {
    slug: "bois-de-chauffage-chene-frene-hetre-charme",
    name: "Bois de chauffage — Mélange Chêne, Frêne, Hêtre et Charme",
    category: "buches",
    essences: ["Chêne", "Frêne", "Hêtre", "Charme"],
    shortDescription: "Bois très sec, idéal pour cet hiver. Disponible en 33 cm et 50 cm.",
    description: ["Bois très sec, idéal pour cet hiver.", "Mélange de chêne, frêne, hêtre et charme, en bûches de 33 cm ou 50 cm."],
    images: [
      illus("/images/produits/melange-chene-frene-hetre-charme-1.jpg", "Bûches de bois de chauffage empilées"),
      illus("/images/produits/melange-chene-frene-hetre-charme-2.jpg", "Pile de bûches de bois de chauffage"),
      illus("/images/produits/melange-chene-frene-hetre-charme-3.jpg", "Réserve de bûches fendues"),
      illus("/images/produits/melange-chene-frene-hetre-charme-4.jpg", "Grande pile de bois de chauffage en forêt"),
    ],
    humidity: null,
    availability: "en-stock",
    pricing: "grille-stere",
    variants: [
      { id: "33cm", options: { Longueur: "33 cm" }, lengthCm: 33, unite: U.stere, steres: 1, prix: null },
      { id: "50cm", options: { Longueur: "50 cm" }, lengthCm: 50, unite: U.stere, steres: 1, prix: null },
    ],
    featured: true,
    seo: {
      title: "Bois de chauffage sec — chêne, frêne, hêtre, charme",
      description:
        "Bois de chauffage très sec, mélange chêne, frêne, hêtre et charme, en 33 cm ou 50 cm. Tarifs dégressifs, livraison selon destination.",
    },
  },
];

export const products: Product[] = [...venteAuStere, ...produitsImportes];

/* ---------- Fonctions utilitaires (pas besoin de les modifier) ---------- */

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getVariant(product: Product, variantId: string) {
  return product.variants.find((v) => v.id === variantId);
}

export function getLengths(product: Product) {
  return [...new Set(product.variants.map((v) => v.lengthCm).filter((l): l is number => typeof l === "number"))].sort((a, b) => a - b);
}

export function productsInCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}

/** Axes de choix d'un produit, dans l'ordre (ex. ["Longueur", "Conditionnement"]). */
export function optionAxes(product: Product) {
  const axes: string[] = [];
  for (const v of product.variants) for (const k of Object.keys(v.options)) if (!axes.includes(k)) axes.push(k);
  return axes;
}

/** Libellé court d'une variante, ex. « 33 cm · Palette ». */
export function variantLabel(v: Variant) {
  return Object.values(v.options).join(" · ");
}

/** Produit principal mis en avant (accueil, boutons « Commander »). */
export const mainProduct = products.find((p) => p.featured) ?? products[0];

export const availabilityLabels: Record<Availability, string> = {
  "en-stock": "Disponible",
  "sur-commande": "Sur commande",
  epuise: "Épuisé",
};
