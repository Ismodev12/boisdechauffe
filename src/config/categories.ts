/**
 * ============================================================
 *  CATÉGORIES DU CATALOGUE
 * ============================================================
 * L'ordre de cette liste est l'ordre d'affichage sur le site. Une catégorie sans
 * fiche publiée n'apparaît pas aux clients.
 * `slug` sert dans l'adresse de la page : /bois/<slug>.
 */

export type Category = {
  slug: string;
  name: string;
  /** Une phrase affichée sous le titre de la catégorie. */
  description: string;
  /** Photo de la carte catégorie (page d'accueil, catalogue). null = visuel neutre. */
  image: string | null;
  seo: { title: string; description: string };
};

export const categories: Category[] = [
  {
    slug: "buches",
    name: "Bûches au stère",
    description: "Bois de chauffage en bûches : au stère, en sac, en filet ou en palette, toutes essences et longueurs.",
    image: "/images/produits/melange-chene-frene-hetre-charme-1.jpg",
    seo: {
      title: "Bois de chauffage au stère — chêne, hêtre, charme, frêne",
      description:
        "Bûches de bois de chauffage au stère, en sac, en filet ou en palette : chêne, hêtre, charme, frêne, bouleau, aulne, mélanges de feuillus, de 25 cm à 1 m.",
    },
  },
  {
    slug: "granules",
    name: "Granulés",
    description: "Granulés de bois (pellets) pour poêles et chaudières, au sac ou à la palette.",
    image: "/images/catalogue/granules-sac-ouvert.jpg",
    seo: {
      title: "Granulés de bois (pellets) — sac, demi-palette, palette",
      description: "Granulés de bois 6 mm de nombreuses marques pour poêle et chaudière : sac de 15 kg, demi-palette, palette, lots et camion complet.",
    },
  },
  {
    slug: "briquettes",
    name: "Briquettes et bois densifié",
    description: "Briquettes de bois, bûches compressées, bois densifié et briquettes d’écorce.",
    image: "/images/catalogue/briquettes-octogonales-botte.jpg",
    seo: {
      title: "Briquettes de bois et bois densifié — bûches compressées",
      description: "Briquettes de bois, bûches compressées, bûches de nuit et briquettes d'écorce, en demi-palette ou palette.",
    },
  },
  {
    slug: "allumage",
    name: "Allumage",
    description: "Petit bois d'allumage et allume-feux pour démarrer votre feu facilement.",
    image: "/images/catalogue/petit-bois-feu.jpg",
    seo: {
      title: "Bois d'allumage et allume-feux",
      description: "Petit bois d'allumage en filet, big bag ou palette, et allume-feux en laine de bois ou en cubes.",
    },
  },
  {
    // Combustibles qui ne sont pas du bois (lignite). Catégorie masquée tant qu'aucune fiche n'y est publiée.
    slug: "autres-combustibles",
    name: "Autres combustibles (lignite)",
    description: "Combustibles minéraux, distincts du bois de chauffage : uniquement pour les appareils prévus pour ces combustibles.",
    image: "/images/catalogue/lignite-ballots.jpg",
    seo: {
      title: "Autres combustibles — briquettes de lignite",
      description: "Briquettes de lignite (charbon) pour les appareils prévus pour ce combustible. Ce ne sont pas des produits en bois.",
    },
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
