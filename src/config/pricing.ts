/**
 * ============================================================
 *  GRILLE TARIFAIRE — SOURCE UNIQUE DES PRIX DU BOIS
 * ============================================================
 *
 * C'est le SEUL endroit où les prix sont écrits. La fiche produit, le panier,
 * la commande, les tableaux de tarifs et la page d'accueil lisent tous cette liste.
 *
 * Une grille PAR LONGUEUR de bûches (33 cm et 50 cm = deux variantes tarifaires distinctes).
 * Pour modifier un prix : changez `prix`.
 * Pour ajouter une quantité : ajoutez la même ligne { quantite: ..., prix: ... } dans CHAQUE grille
 * (les deux grilles doivent proposer les mêmes quantités).
 * Le prix par stère est calculé automatiquement (inutile de l'écrire).
 *
 * Ces prix concernent le BOIS UNIQUEMENT : la livraison est toujours calculée à part.
 */

export type PriceTier = {
  /** Nombre de stères. */
  quantite: number;
  /** Prix total du bois pour cette quantité, en euros. */
  prix: number;
};

export const grillesParLongueur: Record<number, PriceTier[]> = {
  // 50 cm : 40 € le stère de référence (grille d'origine, inchangée)
  50: [
    { quantite: 1, prix: 40 },
    { quantite: 2, prix: 70 },
    { quantite: 3, prix: 120 },
    { quantite: 5, prix: 200 },
    { quantite: 10, prix: 360 },
    { quantite: 20, prix: 700 },
    { quantite: 30, prix: 1000 },
    { quantite: 40, prix: 1250 },
    { quantite: 60, prix: 1600 },
  ],
  // 33 cm : 45 € le stère de référence — grille 50 cm + 5 € par stère à chaque palier
  33: [
    { quantite: 1, prix: 45 },
    { quantite: 2, prix: 80 },
    { quantite: 3, prix: 135 },
    { quantite: 5, prix: 225 },
    { quantite: 10, prix: 410 },
    { quantite: 20, prix: 800 },
    { quantite: 30, prix: 1150 },
    { quantite: 40, prix: 1450 },
    { quantite: 60, prix: 1900 },
  ],
};

/** Longueur dont la grille sert de référence (quantités proposées, « à partir de … le stère »). */
export const longueurReference = 50;

/** Grille de référence (50 cm). */
export const grilleStere: PriceTier[] = grillesParLongueur[longueurReference];

/**
 * Mention fiscale affichée à côté des prix, par exemple :
 *   "Prix TTC"   ou   "TVA non applicable, art. 293 B du CGI"
 * Laissez null tant que ce n'est pas défini (rien ne sera affiché).
 */
export const mentionTaxes: string | null = null;

/** Unité de vente. */
export const unite = { singulier: "stère", pluriel: "stères" };

/* ---------- Calculs dérivés (pas besoin de les modifier) ---------- */

export type Tarif = PriceTier & { prixParStere: number };

const trier = (g: PriceTier[]): Tarif[] =>
  [...g].sort((a, b) => a.quantite - b.quantite).map((t) => ({ ...t, prixParStere: t.prix / t.quantite }));

/** Grilles triées par longueur, avec le prix moyen par stère calculé. */
export const tarifsParLongueur: Record<number, Tarif[]> = Object.fromEntries(
  Object.entries(grillesParLongueur).map(([l, g]) => [Number(l), trier(g)]),
);

/** Longueurs disposant d'une grille, triées (ex. [33, 50]). */
export const longueursTarifees = Object.keys(tarifsParLongueur).map(Number).sort((a, b) => a - b);

/** Grille de référence (50 cm) : quantités proposées à la vente. */
export const tarifs: Tarif[] = tarifsParLongueur[longueurReference];

/** Grille d'une longueur ; grille de référence si la longueur n'a pas de grille propre. */
export function tarifsPour(lengthCm?: number | null): Tarif[] {
  return (lengthCm != null && tarifsParLongueur[lengthCm]) || tarifs;
}

/** Quantités proposées à la vente. */
export const quantitesDisponibles = tarifs.map((t) => t.quantite);

/** Tarif d'une quantité pour une longueur, ou undefined si cette quantité n'est pas dans la grille. */
export function tarifPour(quantite: number, lengthCm?: number | null) {
  return tarifsPour(lengthCm).find((t) => t.quantite === quantite);
}

/** Tous les prix de toutes les grilles (fourchette de prix, données pour Google). */
export const tousLesPrixStere = Object.values(tarifsParLongueur).flatMap((g) => g.map((t) => t.prix));

/** Plus petit prix de départ ramené au stère, toutes longueurs (ex. « à partir de 40 € le stère »). */
export const prixDeBaseParStere = Math.min(...Object.values(tarifsParLongueur).map((g) => g[0].prixParStere));

/** Plus grande quantité commandable en ligne (au-delà : devis). */
export const quantiteMax = tarifs[tarifs.length - 1].quantite;

export function libelleQuantite(q: number) {
  return `${q} ${q > 1 ? unite.pluriel : unite.singulier}`;
}
