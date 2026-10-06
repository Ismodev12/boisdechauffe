/**
 * ============================================================
 *  CATALOGUE IMPORTÉ — références relevées sur kwattbois.fr
 * ============================================================
 * Généré automatiquement le 02/10/2026 à partir des 254 références des
 * catégories Bûches (118), Granulés (79), Briquettes (42) et Allumage (15),
 * regroupées en produits avec variantes (18 vrais doublons fusionnés : même
 * produit, même conditionnement, listé deux fois). Mise à jour le 02/10/2026.
 *
 *  - `prix` : prix PROVISOIRE affiché aux clients, toujours renseigné.
 *        `basePrix: "indicatif"` → ≈ 2 à 4 % sous la référence kwattbois, arrondi ;
 *        `basePrix: "estime"`    → référence incohérente ou inexploitable : prix estimé,
 *                                   l'hypothèse de calcul est dans `hypothese`.
 *    Les prix se modifient et se VALIDENT dans le panel admin → Prix.
 *  - `alerte` : incohérence repérée avec le prix du marché (panel admin uniquement).
 *  - `statut` : "a-verifier" (marque non confirmée) ou "brouillon" (lignite) =
 *            fiche masquée aux clients ; modifiable dans le panel admin → Produits.
 *  - `reference` : prix et intitulé relevés sur kwattbois.fr (repère interne,
 *            jamais affiché aux clients).
 *  - Les descriptions sont rédigées pour ce site. Aucune photo du concurrent ni
 *    des fabricants : photos libres de droits (Wikimedia Commons, crédits dans
 *    `credits.ts`) + un visuel de conditionnement généré pour chaque fiche.
 */

import type { Product } from "@/config/products";

export const produitsImportes: Product[] = [
  {
    "slug": "buches-100-feuillus-wooday",
    "name": "Bûches 100 % feuillus — Wooday",
    "category": "buches",
    "essences": [
      "Feuillus"
    ],
    "shortDescription": "Bois de chauffage en bûches de feuillus, en 40, 50 cm, proposé en palette.",
    "description": [
      "Bois de chauffage en bûches de feuillus, en 40, 50 cm, proposé en palette.",
      "Marque : Wooday."
    ],
    "images": [
      {
        "src": "/images/catalogue/buches-palette.jpg",
        "alt": "Bûches rangées sur une palette",
        "illustration": true
      },
      {
        "src": "/images/catalogue/bois-pile-foret.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-100-feuillus-wooday.jpg",
        "alt": "Visuel du conditionnement — Bûches 100 % feuillus — Wooday",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Wooday"
      ]
    ],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Wooday",
    "variants": [
      {
        "id": "50-cm-palette",
        "options": {
          "Longueur": "50 cm",
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 202.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 207.86,
          "libelle": "207,86 € — « BoisExpress — Bois de chauffage 50 cm Wooday 100% feuillus Séchage Naturel »"
        },
        "lengthCm": 50
      },
      {
        "id": "40-cm-palette",
        "options": {
          "Longueur": "40 cm",
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 226.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 232.46,
          "libelle": "232,46 € — « BoisExpress — Bois de chauffage 40 cm Wooday 100% feuillus Séchage Naturel »"
        },
        "lengthCm": 40
      }
    ]
  },
  {
    "slug": "buches-de-bois-de-chauffage-essence-au-choix",
    "name": "Bûches de bois de chauffage — essence au choix",
    "category": "buches",
    "essences": [],
    "shortDescription": "Bois de chauffage en bûches, en 25, 30, 33, 40, 50 cm, proposé en big bag, big bag sur palette, caisse palette, demi-palette, filet, palette, vrac.",
    "description": [
      "Bois de chauffage en bûches, en 25, 30, 33, 40, 50 cm, proposé en big bag, big bag sur palette, caisse palette, demi-palette, filet, palette, vrac."
    ],
    "images": [
      {
        "src": "/images/catalogue/buches-filet.jpg",
        "alt": "Filet de bûches",
        "illustration": true
      },
      {
        "src": "/images/catalogue/buches-filets.jpg",
        "alt": "Filets de bûches",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-de-bois-de-chauffage-essence-au-choix.jpg",
        "alt": "Visuel du conditionnement — Bûches de bois de chauffage — essence au choix",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Humidité annoncée par le fournisseur",
        "< 15 % / < 20 %"
      ]
    ],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "non-precisee-filet",
        "options": {
          "Longueur": "Non précisée",
          "Conditionnement": "Filet"
        },
        "unite": {
          "singulier": "filet",
          "pluriel": "filets"
        },
        "prix": 3.09,
        "basePrix": "estime",
        "hypothese": "Volume du filet non précisé : comparaison impossible. Prix calqué sur l’offre identique de kwattbois.fr (3,25 €), ≈ 2 à 4 % en dessous ; contenu exact à confirmer.",
        "reference": {
          "prix": 3.25,
          "libelle": "3,25 € — « Filet de bois de chauffage »"
        }
      },
      {
        "id": "33-cm-filet",
        "options": {
          "Longueur": "33 cm",
          "Conditionnement": "Filet"
        },
        "unite": {
          "singulier": "filet",
          "pluriel": "filets"
        },
        "prix": 10.39,
        "basePrix": "indicatif",
        "reference": {
          "prix": 10.68,
          "libelle": "10,68 € — « filet 25dm3 - bois de chauffage 33cm »"
        },
        "lengthCm": 33
      },
      {
        "id": "40-cm-palette",
        "options": {
          "Longueur": "40 cm",
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 270.9,
        "basePrix": "estime",
        "hypothese": "Prix de référence affiché (60 €) jugé anormal pour une palette. Volume supposé ≈ 1,2 m³, comme l’offre équivalente « Bois de chauffage 40 cm - 1,2 m3 - 1,65 stères » à 277,20 € ; prix fixé ≈ 2 à 4 % en dessous.",
        "reference": {
          "prix": 60.0,
          "libelle": "60 € — « Palette Bûches 40cm »"
        },
        "lengthCm": 40
      },
      {
        "id": "50-cm-palette",
        "options": {
          "Longueur": "50 cm",
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 233.9,
        "basePrix": "estime",
        "hypothese": "Prix de référence affiché (60 €) jugé anormal pour une palette. Volume supposé ≈ 1,2 m³, comme l’offre équivalente « Bois de chauffage 50 cm - 1,2 m3 - 1,5 stères » à 238,80 € ; prix fixé ≈ 2 à 4 % en dessous.",
        "reference": {
          "prix": 60.0,
          "libelle": "60 € — « Palette Bûches 50cm »"
        },
        "lengthCm": 50
      },
      {
        "id": "non-precisee-big-bag-sur-palette",
        "options": {
          "Longueur": "Non précisée",
          "Conditionnement": "Big bag sur palette"
        },
        "unite": {
          "singulier": "big bag",
          "pluriel": "big bags"
        },
        "prix": 126.9,
        "basePrix": "estime",
        "hypothese": "Volume non précisé : comparaison impossible. Prix calqué sur l’offre identique de kwattbois.fr (129,49 €), ≈ 2 à 4 % en dessous ; contenu exact à confirmer.",
        "reference": {
          "prix": 129.49,
          "libelle": "129,49 € — « Big Bag sur palette »"
        }
      },
      {
        "id": "non-precisee-big-bag-de-2-m",
        "options": {
          "Longueur": "Non précisée",
          "Conditionnement": "Big bag de 2 m³"
        },
        "unite": {
          "singulier": "big bag",
          "pluriel": "big bags"
        },
        "prix": 180.9,
        "basePrix": "estime",
        "hypothese": "Volume non précisé : comparaison impossible. Prix calqué sur l’offre identique de kwattbois.fr (184,8 €), ≈ 2 à 4 % en dessous ; contenu exact à confirmer.",
        "reference": {
          "prix": 184.8,
          "libelle": "184,8 € — « Big Bag »"
        }
      },
      {
        "id": "non-precisee-caisse-palette-ibc",
        "options": {
          "Longueur": "Non précisée",
          "Conditionnement": "Caisse palette (IBC)"
        },
        "unite": {
          "singulier": "caisse",
          "pluriel": "caisses"
        },
        "prix": 199.9,
        "basePrix": "estime",
        "hypothese": "Volume non précisé : comparaison impossible. Prix calqué sur l’offre identique de kwattbois.fr (204,2 €), ≈ 2 à 4 % en dessous ; contenu exact à confirmer.",
        "reference": {
          "prix": 204.2,
          "libelle": "204,2 € — « Caisse IBC empilee »"
        }
      },
      {
        "id": "25-cm-demi-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Demi-palette"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 217.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 223.27,
          "libelle": "223,27 € — « Demi-palette de bois de chauffage 25cm au choix »"
        },
        "lengthCm": 25
      },
      {
        "id": "25-cm-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 356.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 364.37,
          "libelle": "364,37 € — « Palette de bois de chauffage 25cm au choix »"
        },
        "lengthCm": 25
      },
      {
        "id": "33-cm-palette",
        "options": {
          "Longueur": "33 cm",
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 380.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 389.27,
          "libelle": "389,27 € — « Palette de bois de chauffage 33cm au choix + paquet d'allumage gratuit »"
        },
        "lengthCm": 33
      },
      {
        "id": "33-cm-palette-de-48-filets-de-50-dm",
        "options": {
          "Longueur": "33 cm",
          "Conditionnement": "Palette de 48 filets de 50 dm³"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 574.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 586.8,
          "libelle": "586,8 € — « Palette de 48 filets de 50dm3 de bois de chauffage en 33cm »"
        },
        "lengthCm": 33
      },
      {
        "id": "33-cm-palette-de-70-filets-de-25-dm",
        "options": {
          "Longueur": "33 cm",
          "Conditionnement": "Palette de 70 filets de 25 dm³"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 585.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 598.8,
          "libelle": "598,8 € — « Palette de 70 filets de 25dm3 de bois de chauffage en 33cm »"
        },
        "lengthCm": 33
      },
      {
        "id": "50-cm-vrac-1-5-steres",
        "options": {
          "Longueur": "50 cm",
          "Conditionnement": "Vrac — 1,5 stères"
        },
        "unite": {
          "singulier": "lot de 1,5 stères",
          "pluriel": "lots de 1,5 stères"
        },
        "prix": 233.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 238.8,
          "libelle": "238,8 € — « Bois de chauffage 50 cm - 1,2 m3 - 1,5 stères »"
        },
        "lengthCm": 50,
        "steres": 1.5
      },
      {
        "id": "25-cm-palette-1-6-steres",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Palette (1,6 stères)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 312.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 319.8,
          "libelle": "319,8 € — « BoisExpress — Bois de chauffage 25 cm Palette 1,2 M3 1,6 stères Séchage Naturel »"
        },
        "lengthCm": 25,
        "steres": 1.6
      },
      {
        "id": "40-cm-vrac-1-65-steres",
        "options": {
          "Longueur": "40 cm",
          "Conditionnement": "Vrac — 1,65 stères"
        },
        "unite": {
          "singulier": "lot de 1,65 stères",
          "pluriel": "lots de 1,65 stères"
        },
        "prix": 270.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 277.2,
          "libelle": "277,2 € — « Bois de chauffage 40 cm - 1,2 m3 - 1,65 stères »"
        },
        "lengthCm": 40,
        "steres": 1.65
      },
      {
        "id": "33-cm-vrac-1-7-steres",
        "options": {
          "Longueur": "33 cm",
          "Conditionnement": "Vrac — 1,7 stères"
        },
        "unite": {
          "singulier": "lot de 1,7 stères",
          "pluriel": "lots de 1,7 stères"
        },
        "prix": 279.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 285.72,
          "libelle": "285,72 € — « Bois de chauffage 33 cm - 1,2 m3 - 1,7 stères »"
        },
        "lengthCm": 33,
        "steres": 1.7
      },
      {
        "id": "25-cm-vrac-2-steres",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Vrac — 2 stères"
        },
        "unite": {
          "singulier": "lot de 2 stères",
          "pluriel": "lots de 2 stères"
        },
        "prix": 338.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 346.8,
          "libelle": "346,8 € — « Bois de chauffage 25 cm - 1,2 m3 - 2 stères »"
        },
        "lengthCm": 25,
        "steres": 2.0
      },
      {
        "id": "50-cm-vrac-2-5-steres",
        "options": {
          "Longueur": "50 cm",
          "Conditionnement": "Vrac — 2,5 stères"
        },
        "unite": {
          "singulier": "lot de 2,5 stères",
          "pluriel": "lots de 2,5 stères"
        },
        "prix": 386.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 394.8,
          "libelle": "394,8 € — « Bois de chauffage sec 50 cm - 2 m3 - 2,5 stères »"
        },
        "lengthCm": 50,
        "steres": 2.5
      },
      {
        "id": "30-cm-vrac-3-steres",
        "options": {
          "Longueur": "30 cm",
          "Conditionnement": "Vrac — 3 stères"
        },
        "unite": {
          "singulier": "lot de 3 stères",
          "pluriel": "lots de 3 stères"
        },
        "prix": 468.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 478.8,
          "libelle": "478,8 € — « Bois de chauffage sec 30 cm - 2 m3 - 3 stères »"
        },
        "lengthCm": 30,
        "steres": 3.0
      }
    ]
  },
  {
    "slug": "buches-de-bouleau",
    "name": "Bûches de bouleau",
    "category": "buches",
    "essences": [
      "Bouleau"
    ],
    "shortDescription": "Bois de chauffage en bûches de bouleau, en 25, 28, 30 cm, proposé en palette, sac, vrac.",
    "description": [
      "Bois de chauffage en bûches de bouleau, en 25, 28, 30 cm, proposé en palette, sac, vrac.",
      "Le bouleau s’enflamme rapidement et donne une flamme vive."
    ],
    "images": [
      {
        "src": "/images/catalogue/bouleau-empile.jpg",
        "alt": "Bûches de bouleau empilées",
        "illustration": true
      },
      {
        "src": "/images/catalogue/buches-vrac-livraison.jpg",
        "alt": "Livraison de bûches en vrac",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-de-bouleau.jpg",
        "alt": "Visuel du conditionnement — Bûches de bouleau",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "28-cm-sac-rondins-non-fendus",
        "options": {
          "Longueur": "28 cm",
          "Conditionnement": "Sac — rondins (non fendus)"
        },
        "unite": {
          "singulier": "sac",
          "pluriel": "sacs"
        },
        "prix": 160.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 165.17,
          "libelle": "165,17 € — « Rondins de bouleau 28 cm en sac »"
        },
        "lengthCm": 28
      },
      {
        "id": "28-cm-sac",
        "options": {
          "Longueur": "28 cm",
          "Conditionnement": "Sac"
        },
        "unite": {
          "singulier": "sac",
          "pluriel": "sacs"
        },
        "prix": 242.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 248.17,
          "libelle": "248,17 € — « Bois de chauffage Bouleau 28 cm en sac »"
        },
        "lengthCm": 28
      },
      {
        "id": "25-cm-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 380.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 389.27,
          "libelle": "389,27 € — « Palette de bois de chauffage bouleau 25cm + 5 sacs de petit bois d'allumage gratuits »"
        },
        "lengthCm": 25
      },
      {
        "id": "25-cm-vrac-1-stere",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Vrac — 1 stère"
        },
        "unite": {
          "singulier": "stère",
          "pluriel": "stères"
        },
        "prix": 160.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 165.17,
          "libelle": "165,17 € — « Bois de chauffage Bouleau 25 cm 1 stère »"
        },
        "lengthCm": 25,
        "steres": 1.0
      },
      {
        "id": "30-33-cm-vrac-1-stere",
        "options": {
          "Longueur": "30–33 cm",
          "Conditionnement": "Vrac — 1 stère"
        },
        "unite": {
          "singulier": "stère",
          "pluriel": "stères"
        },
        "prix": 160.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 165.17,
          "libelle": "165,17 € — « Bois de chauffage bouleau 30-33 cm 1 stère »"
        },
        "lengthCm": 30,
        "steres": 1.0
      },
      {
        "id": "25-cm-vrac-2-steres",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Vrac — 2 stères"
        },
        "unite": {
          "singulier": "lot de 2 stères",
          "pluriel": "lots de 2 stères"
        },
        "prix": 242.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 248.17,
          "libelle": "248,17 € — « Bois de chauffage Bouleau 25 cm 2 stères »"
        },
        "lengthCm": 25,
        "steres": 2.0
      }
    ]
  },
  {
    "slug": "buches-de-bouleau-sechees-en-chambre",
    "name": "Bûches de bouleau séchées en chambre",
    "category": "buches",
    "essences": [
      "Bouleau"
    ],
    "shortDescription": "Bois de chauffage en bûches de bouleau, en 25 cm, proposé en demi-palette, palette.",
    "description": [
      "Bois de chauffage en bûches de bouleau, en 25 cm, proposé en demi-palette, palette.",
      "Le bouleau s’enflamme rapidement et donne une flamme vive.",
      "Bois séché en séchoir (four ou chambre de séchage).",
      "Bûches fendues, prêtes à l’emploi."
    ],
    "images": [
      {
        "src": "/images/catalogue/bois-empile-rouge.jpg",
        "alt": "Bûches empilées",
        "illustration": true
      },
      {
        "src": "/images/catalogue/bois-mur.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-de-bouleau-sechees-en-chambre.jpg",
        "alt": "Visuel du conditionnement — Bûches de bouleau séchées en chambre",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "25-cm-demi-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Demi-palette"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 226.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 231.78,
          "libelle": "231,78 € — « Bois de cheminée Bouleau Séché en chambre Demi Palette 25cm »"
        },
        "lengthCm": 25
      },
      {
        "id": "25-cm-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 380.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 389.27,
          "libelle": "389,27 € — « Palette bois de chauffage bouleau fendu séché en chambre 25cm »"
        },
        "lengthCm": 25
      }
    ]
  },
  {
    "slug": "buches-de-bouleau-sechees-en-chambre-gigant",
    "name": "Bûches de bouleau séchées en chambre — Gigant",
    "category": "buches",
    "essences": [
      "Bouleau"
    ],
    "shortDescription": "Bois de chauffage en bûches de bouleau, en 25 cm, proposé en palette.",
    "description": [
      "Bois de chauffage en bûches de bouleau, en 25 cm, proposé en palette.",
      "Le bouleau s’enflamme rapidement et donne une flamme vive.",
      "Bois séché en séchoir (four ou chambre de séchage).",
      "Marque : Gigant."
    ],
    "images": [
      {
        "src": "/images/catalogue/bois-pile-foret.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/bois-tas.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-de-bouleau-sechees-en-chambre-gigant.jpg",
        "alt": "Visuel du conditionnement — Bûches de bouleau séchées en chambre — Gigant",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Gigant"
      ]
    ],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Gigant",
    "variants": [
      {
        "id": "25-cm-palette-800-kg",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Palette (800 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 350.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 358.56,
          "libelle": "358,56 € — « Brennholz Gigant Bois de chauffage bouleau séché en chambre 25cm palette 800kg »"
        },
        "lengthCm": 25
      }
    ]
  },
  {
    "slug": "buches-de-charme",
    "name": "Bûches de charme",
    "category": "buches",
    "essences": [
      "Charme"
    ],
    "shortDescription": "Bois de chauffage en bûches de charme, en 25 cm, proposé en palette.",
    "description": [
      "Bois de chauffage en bûches de charme, en 25 cm, proposé en palette.",
      "Le charme est un bois dur et dense, au bon pouvoir calorifique."
    ],
    "images": [
      {
        "src": "/images/catalogue/bois-fendu-1.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/bois-fendu-tas.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-de-charme.jpg",
        "alt": "Visuel du conditionnement — Bûches de charme",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "25-cm-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 404.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 414.17,
          "libelle": "414,17 € — « Palette de bois de chauffage Charme 25cm + 5 sacs de bois d'allumage offerts »"
        },
        "lengthCm": 25
      }
    ]
  },
  {
    "slug": "buches-de-charme-sechees-au-four",
    "name": "Bûches de charme séchées au four",
    "category": "buches",
    "essences": [
      "Charme"
    ],
    "shortDescription": "Bois de chauffage en bûches de charme, en 25 cm, proposé en demi-palette.",
    "description": [
      "Bois de chauffage en bûches de charme, en 25 cm, proposé en demi-palette.",
      "Le charme est un bois dur et dense, au bon pouvoir calorifique.",
      "Bois séché en séchoir (four ou chambre de séchage).",
      "Bûches fendues, prêtes à l’emploi."
    ],
    "images": [
      {
        "src": "/images/catalogue/bois-fendu-2.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/bois-pile-2.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-de-charme-sechees-au-four.jpg",
        "alt": "Visuel du conditionnement — Bûches de charme séchées au four",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "25-cm-demi-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Demi-palette"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 242.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 248.17,
          "libelle": "248,17 € — « Demi-palette de bois de chauffage en charme fendu séché au four 25cm »"
        },
        "lengthCm": 25
      }
    ]
  },
  {
    "slug": "buches-de-charme-sechees-au-four-gigant",
    "name": "Bûches de charme séchées au four — Gigant",
    "category": "buches",
    "essences": [
      "Charme"
    ],
    "shortDescription": "Bois de chauffage en bûches de charme, en 25 cm, proposé en demi-palette.",
    "description": [
      "Bois de chauffage en bûches de charme, en 25 cm, proposé en demi-palette.",
      "Le charme est un bois dur et dense, au bon pouvoir calorifique.",
      "Bois séché en séchoir (four ou chambre de séchage).",
      "Marque : Gigant."
    ],
    "images": [
      {
        "src": "/images/catalogue/bois-mur.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/bois-pile-route.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-de-charme-sechees-au-four-gigant.jpg",
        "alt": "Visuel du conditionnement — Bûches de charme séchées au four — Gigant",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Gigant"
      ]
    ],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Gigant",
    "variants": [
      {
        "id": "25-cm-demi-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Demi-palette"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 232.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 238.21,
          "libelle": "238,21 € — « Bois de chauffage Gigant Charme séché au four 25cm Demi-palette »"
        },
        "lengthCm": 25
      }
    ]
  },
  {
    "slug": "buches-de-charme-sechees-en-chambre",
    "name": "Bûches de charme séchées en chambre",
    "category": "buches",
    "essences": [
      "Charme"
    ],
    "shortDescription": "Bois de chauffage en bûches de charme, en 25, 33 cm, proposé en palette.",
    "description": [
      "Bois de chauffage en bûches de charme, en 25, 33 cm, proposé en palette.",
      "Le charme est un bois dur et dense, au bon pouvoir calorifique.",
      "Bois séché en séchoir (four ou chambre de séchage).",
      "Bûches fendues, prêtes à l’emploi."
    ],
    "images": [
      {
        "src": "/images/catalogue/bois-tas.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/bois-tas-foret.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-de-charme-sechees-en-chambre.jpg",
        "alt": "Visuel du conditionnement — Bûches de charme séchées en chambre",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "33-cm-palette",
        "options": {
          "Longueur": "33 cm",
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 396.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 405.87,
          "libelle": "405,87 € — « Palette de bois de chauffage charme fendu séché en chambre 33cm »"
        },
        "lengthCm": 33
      },
      {
        "id": "25-cm-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 404.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 414.17,
          "libelle": "414,17 € — « Palette de bois de chauffage charme fendu séché en chambre 25cm »"
        },
        "lengthCm": 25
      }
    ]
  },
  {
    "slug": "buches-de-cheminee-compressees-giant-flames-fsc",
    "name": "Bûches de cheminée compressées Giant Flames (FSC)",
    "category": "buches",
    "essences": [],
    "shortDescription": "Bois de chauffage en bûches, proposé en carton.",
    "description": [
      "Bois de chauffage en bûches, proposé en carton.",
      "Marque : Giant Flames."
    ],
    "images": [
      {
        "src": "/images/catalogue/bois-fendu-tas.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/bois-abri.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-de-cheminee-compressees-giant-flames-fsc.jpg",
        "alt": "Visuel du conditionnement — Bûches de cheminée compressées Giant Flames (FSC)",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Giant Flames"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "FSC"
      ]
    ],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Giant Flames",
    "variants": [
      {
        "id": "carton-de-12-buches-de-700-g",
        "options": {
          "Conditionnement": "Carton de 12 bûches de 700 g"
        },
        "unite": {
          "singulier": "carton",
          "pluriel": "cartons"
        },
        "prix": 31.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 33.16,
          "libelle": "33,16 € — « Giant Flames FSC Bûches de cheminée 12 unités x 700g (8,4 kg) »"
        }
      }
    ]
  },
  {
    "slug": "buches-de-chene",
    "name": "Bûches de chêne",
    "category": "buches",
    "essences": [
      "Chêne"
    ],
    "shortDescription": "Bois de chauffage en bûches de chêne, en 25, 30, 50 cm, proposé en palette, vrac.",
    "description": [
      "Bois de chauffage en bûches de chêne, en 25, 30, 50 cm, proposé en palette, vrac.",
      "Le chêne est un bois dur et dense, apprécié pour sa combustion longue."
    ],
    "images": [
      {
        "src": "/images/catalogue/chene-fendu.jpg",
        "alt": "Bûches de chêne fendues",
        "illustration": true
      },
      {
        "src": "/images/catalogue/bois-tas-fendeuse.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-de-chene.jpg",
        "alt": "Visuel du conditionnement — Bûches de chêne",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "25-cm-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 396.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 405.87,
          "libelle": "405,87 € — « Palette de bois de chauffage Chêne 25cm + 5 sacs d'allume-feu gratuits »"
        },
        "lengthCm": 25
      },
      {
        "id": "25-cm-vrac-2-steres",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Vrac — 2 stères"
        },
        "unite": {
          "singulier": "lot de 2 stères",
          "pluriel": "lots de 2 stères"
        },
        "prix": 282.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 289.67,
          "libelle": "289,67 € — « Bois de chauffage Chêne 25 cm 2 stères »"
        },
        "lengthCm": 25,
        "steres": 2.0
      },
      {
        "id": "50-cm-vrac-2-steres",
        "options": {
          "Longueur": "50 cm",
          "Conditionnement": "Vrac — 2 stères"
        },
        "unite": {
          "singulier": "lot de 2 stères",
          "pluriel": "lots de 2 stères"
        },
        "prix": 282.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 289.67,
          "libelle": "289,67 € — « Bois de chauffage Chêne 50 cm 2 stères »"
        },
        "lengthCm": 50,
        "steres": 2.0
      },
      {
        "id": "30-33-cm-vrac-2-steres",
        "options": {
          "Longueur": "30–33 cm",
          "Conditionnement": "Vrac — 2 stères"
        },
        "unite": {
          "singulier": "lot de 2 stères",
          "pluriel": "lots de 2 stères"
        },
        "prix": 282.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 289.67,
          "libelle": "289,67 € — « Bois de chauffage Chêne 30-33 cm 2 stères »"
        },
        "lengthCm": 30,
        "steres": 2.0
      },
      {
        "id": "25-cm-palette-3-3-steres",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Palette (3,3 stères)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 312.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 319.55,
          "libelle": "319,55 € — « Bois de Chauffage Chêne Palette 25 cm 2m3 3,3 Stères »"
        },
        "lengthCm": 25,
        "steres": 3.3
      }
    ]
  },
  {
    "slug": "buches-de-chene-sechees-au-four",
    "name": "Bûches de chêne séchées au four",
    "category": "buches",
    "essences": [
      "Chêne"
    ],
    "shortDescription": "Bois de chauffage en bûches de chêne, en 25, 33 cm, proposé en demi-palette, palette.",
    "description": [
      "Bois de chauffage en bûches de chêne, en 25, 33 cm, proposé en demi-palette, palette.",
      "Le chêne est un bois dur et dense, apprécié pour sa combustion longue.",
      "Bois séché en séchoir (four ou chambre de séchage).",
      "Bûches fendues, prêtes à l’emploi."
    ],
    "images": [
      {
        "src": "/images/catalogue/chene-rondins.jpg",
        "alt": "Rondins de chêne",
        "illustration": true
      },
      {
        "src": "/images/catalogue/buches-palette.jpg",
        "alt": "Bûches rangées sur une palette",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-de-chene-sechees-au-four.jpg",
        "alt": "Visuel du conditionnement — Bûches de chêne séchées au four",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "25-cm-demi-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Demi-palette"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 234.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 239.87,
          "libelle": "239,87 € — « Demi-palette de bois de chauffage chêne fendu séché au four 25cm »"
        },
        "lengthCm": 25
      },
      {
        "id": "33-cm-palette",
        "options": {
          "Longueur": "33 cm",
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 380.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 389.27,
          "libelle": "389,27 € — « Palette de bois de chauffage chêne fendu séché au four 33cm »"
        },
        "lengthCm": 33
      },
      {
        "id": "25-cm-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 396.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 405.87,
          "libelle": "405,87 € — « Palette de bois de chauffage chêne fendu séché au four 25cm »"
        },
        "lengthCm": 25
      }
    ]
  },
  {
    "slug": "buches-de-chene-sechees-au-four-gigant",
    "name": "Bûches de chêne séchées au four — Gigant",
    "category": "buches",
    "essences": [
      "Chêne"
    ],
    "shortDescription": "Bois de chauffage en bûches de chêne, en 25 cm, proposé en demi-palette, palette.",
    "description": [
      "Bois de chauffage en bûches de chêne, en 25 cm, proposé en demi-palette, palette.",
      "Le chêne est un bois dur et dense, apprécié pour sa combustion longue.",
      "Bois séché en séchoir (four ou chambre de séchage).",
      "Marque : Gigant."
    ],
    "images": [
      {
        "src": "/images/catalogue/chene-tas.jpg",
        "alt": "Tas de bûches de chêne",
        "illustration": true
      },
      {
        "src": "/images/catalogue/bois-pile-2.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-de-chene-sechees-au-four-gigant.jpg",
        "alt": "Visuel du conditionnement — Bûches de chêne séchées au four — Gigant",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Gigant"
      ]
    ],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Gigant",
    "variants": [
      {
        "id": "25-cm-demi-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Demi-palette"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 232.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 238.21,
          "libelle": "238,21 € — « Bois de chauffage géant Chêne séché au four 25cm Demi-palette »"
        },
        "lengthCm": 25
      },
      {
        "id": "25-cm-palette-850-kg",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Palette (850 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 348.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 356.9,
          "libelle": "356,9 € — « Bois de chauffage Chêne Géant Bois de cheminée séché au four 25cm Palette 850kg »"
        },
        "lengthCm": 25
      }
    ]
  },
  {
    "slug": "buches-de-chene-sechees-en-chambre",
    "name": "Bûches de chêne séchées en chambre",
    "category": "buches",
    "essences": [
      "Chêne"
    ],
    "shortDescription": "Bois de chauffage en bûches de chêne, en 25 cm, proposé en lot.",
    "description": [
      "Bois de chauffage en bûches de chêne, en 25 cm, proposé en lot.",
      "Le chêne est un bois dur et dense, apprécié pour sa combustion longue.",
      "Bois séché en séchoir (four ou chambre de séchage).",
      "Bûches fendues, prêtes à l’emploi."
    ],
    "images": [
      {
        "src": "/images/catalogue/buches-filets.jpg",
        "alt": "Filets de bûches",
        "illustration": true
      },
      {
        "src": "/images/catalogue/buches-palette-filets.jpg",
        "alt": "Palettes de bûches en filets",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-de-chene-sechees-en-chambre.jpg",
        "alt": "Visuel du conditionnement — Bûches de chêne séchées en chambre",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "25-cm-lot-de-88-filets",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Lot de 88 filets"
        },
        "unite": {
          "singulier": "lot",
          "pluriel": "lots"
        },
        "prix": 364.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 372.67,
          "libelle": "372,67 € — « 88 filets de bois de chauffage chêne fendu séché en chambre 25cm »"
        },
        "lengthCm": 25
      }
    ]
  },
  {
    "slug": "buches-de-feuillus-durs-melange",
    "name": "Bûches de feuillus durs (mélange)",
    "category": "buches",
    "essences": [
      "Feuillus durs",
      "Feuillus"
    ],
    "shortDescription": "Bois de chauffage en bûches de feuillus durs, feuillus, en 1, 25, 30, 33, 40, 45, 50 cm, proposé en lot, palette, vrac.",
    "description": [
      "Bois de chauffage en bûches de feuillus durs, feuillus, en 1, 25, 30, 33, 40, 45, 50 cm, proposé en lot, palette, vrac."
    ],
    "images": [
      {
        "src": "/images/catalogue/buches-palette-filets.jpg",
        "alt": "Palettes de bûches en filets",
        "illustration": true
      },
      {
        "src": "/images/catalogue/buches-palette-filets-2.jpg",
        "alt": "Palettes de filets de bûches",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-de-feuillus-durs-melange.jpg",
        "alt": "Visuel du conditionnement — Bûches de feuillus durs (mélange)",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Humidité annoncée par le fournisseur",
        "< 20 %"
      ]
    ],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "30-cm-lot-de-40-filets",
        "options": {
          "Longueur": "30 cm",
          "Conditionnement": "Lot de 40 filets"
        },
        "unite": {
          "singulier": "lot",
          "pluriel": "lots"
        },
        "prix": 445.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 455.26,
          "libelle": "455,26 € — « BoisExpress — 40 filets de bûches de 25kg Mélange Bois dur 30cm Forêt Française »"
        },
        "lengthCm": 30
      },
      {
        "id": "1-m-palette-2-steres",
        "options": {
          "Longueur": "1 m",
          "Conditionnement": "Palette (2 stères)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 130.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 134.06,
          "libelle": "134,06 € — « BoisExpress — Mélange de bois durs 1m Palette de 2 stères Séchage Naturel »"
        },
        "lengthCm": 1,
        "steres": 2.0
      },
      {
        "id": "50-cm-palette-2-5-steres",
        "options": {
          "Longueur": "50 cm",
          "Conditionnement": "Palette (2,5 stères)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 179.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 184.5,
          "libelle": "184,5 € — « BoisExpress — Mélange de bois durs 50cm Palette de 2,5 stères Séchage Naturel »"
        },
        "lengthCm": 50,
        "steres": 2.5
      },
      {
        "id": "45-cm-palette-2-6-steres",
        "options": {
          "Longueur": "45 cm",
          "Conditionnement": "Palette (2,6 stères)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 191.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 196.8,
          "libelle": "196,8 € — « BoisExpress — Mélange de bois durs 45cm Palette de 2,6 stères Séchage Naturel »"
        },
        "lengthCm": 45,
        "steres": 2.6
      },
      {
        "id": "40-cm-palette-2-7-steres",
        "options": {
          "Longueur": "40 cm",
          "Conditionnement": "Palette (2,7 stères)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 210.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 215.24,
          "libelle": "215,24 € — « BoisExpress — Mélange de bois durs 40cm Palette de 2,7 stères Séchage Naturel »"
        },
        "lengthCm": 40,
        "steres": 2.7
      },
      {
        "id": "33-cm-palette-2-9-steres",
        "options": {
          "Longueur": "33 cm",
          "Conditionnement": "Palette (2,9 stères)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 216.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 221.4,
          "libelle": "221,4 € — « BoisExpress — Mélange de bois durs 33cm Palette de 2,9 stères Artisan Français »"
        },
        "lengthCm": 33,
        "steres": 2.9
      },
      {
        "id": "30-cm-palette-3-steres",
        "options": {
          "Longueur": "30 cm",
          "Conditionnement": "Palette (3 stères)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 240.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 246.0,
          "libelle": "246 € — « BoisExpress — Mélange de bois durs 30cm Palette de 3 stères Bois Noble »"
        },
        "lengthCm": 30,
        "steres": 3.0
      },
      {
        "id": "25-cm-palette-3-3-steres",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Palette (3,3 stères)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 264.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 270.6,
          "libelle": "270,6 € — « BoisExpress — Mélange de bois durs 25cm Palette de 3,3 stères Forêt Française »"
        },
        "lengthCm": 25,
        "steres": 3.3
      },
      {
        "id": "50-cm-vrac-4-steres",
        "options": {
          "Longueur": "50 cm",
          "Conditionnement": "Vrac — 4 stères"
        },
        "unite": {
          "singulier": "lot de 4 stères",
          "pluriel": "lots de 4 stères"
        },
        "prix": 300.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 307.5,
          "libelle": "307,5 € — « BoisExpress — 4 stères de bûches 50cm En vrac 100% feuillus durs Séchage Naturel »"
        },
        "lengthCm": 50,
        "steres": 4.0
      }
    ]
  },
  {
    "slug": "buches-de-feuillus-durs-melange-sechees-en-chambre",
    "name": "Bûches de feuillus durs (mélange) séchées en chambre",
    "category": "buches",
    "essences": [
      "Feuillus durs"
    ],
    "shortDescription": "Bois de chauffage en bûches de feuillus durs, en 25 cm, proposé en lot.",
    "description": [
      "Bois de chauffage en bûches de feuillus durs, en 25 cm, proposé en lot.",
      "Bois séché en séchoir (four ou chambre de séchage)."
    ],
    "images": [
      {
        "src": "/images/catalogue/bois-pile-2.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/bois-pile-route.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-de-feuillus-durs-melange-sechees-en-chambre.jpg",
        "alt": "Visuel du conditionnement — Bûches de feuillus durs (mélange) séchées en chambre",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "25-cm-lot-de-2-palettes",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Lot de 2 palettes"
        },
        "unite": {
          "singulier": "lot de 2 palettes",
          "pluriel": "lots de 2 palettes"
        },
        "prix": 597.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 610.88,
          "libelle": "610,88 € — « Bois de chauffage bois dur Mix 25 cm – 2 Palettes (Séché en chambre) »"
        },
        "lengthCm": 25
      }
    ]
  },
  {
    "slug": "buches-de-frene",
    "name": "Bûches de frêne",
    "category": "buches",
    "essences": [
      "Frêne"
    ],
    "shortDescription": "Bois de chauffage en bûches de frêne, en 25 cm, proposé en palette.",
    "description": [
      "Bois de chauffage en bûches de frêne, en 25 cm, proposé en palette.",
      "Le frêne est un feuillu dur qui s’allume facilement et brûle régulièrement."
    ],
    "images": [
      {
        "src": "/images/catalogue/frene-fendu.jpg",
        "alt": "Bûches de frêne fendues",
        "illustration": true
      },
      {
        "src": "/images/catalogue/bois-tas-foret.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-de-frene.jpg",
        "alt": "Visuel du conditionnement — Bûches de frêne",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "25-cm-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 404.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 414.17,
          "libelle": "414,17 € — « Palette de bois de chauffage en frêne 25cm »"
        },
        "lengthCm": 25
      }
    ]
  },
  {
    "slug": "buches-de-frene-sechees-au-four",
    "name": "Bûches de frêne séchées au four",
    "category": "buches",
    "essences": [
      "Frêne"
    ],
    "shortDescription": "Bois de chauffage en bûches de frêne, en 25 cm, proposé en lot.",
    "description": [
      "Bois de chauffage en bûches de frêne, en 25 cm, proposé en lot.",
      "Le frêne est un feuillu dur qui s’allume facilement et brûle régulièrement.",
      "Bois séché en séchoir (four ou chambre de séchage).",
      "Bûches fendues, prêtes à l’emploi."
    ],
    "images": [
      {
        "src": "/images/catalogue/buches-palette-filets-2.jpg",
        "alt": "Palettes de filets de bûches",
        "illustration": true
      },
      {
        "src": "/images/catalogue/buches-filet.jpg",
        "alt": "Filet de bûches",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-de-frene-sechees-au-four.jpg",
        "alt": "Visuel du conditionnement — Bûches de frêne séchées au four",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "25-cm-lot-de-88-filets",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Lot de 88 filets"
        },
        "unite": {
          "singulier": "lot",
          "pluriel": "lots"
        },
        "prix": 372.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 380.97,
          "libelle": "380,97 € — « 88 filets de bois de chauffage en frêne fendu séché au four 25cm »"
        },
        "lengthCm": 25
      }
    ]
  },
  {
    "slug": "buches-de-frene-sechees-au-four-gigant",
    "name": "Bûches de frêne séchées au four — Gigant",
    "category": "buches",
    "essences": [
      "Frêne"
    ],
    "shortDescription": "Bois de chauffage en bûches de frêne, en 25 cm, proposé en demi-palette.",
    "description": [
      "Bois de chauffage en bûches de frêne, en 25 cm, proposé en demi-palette.",
      "Le frêne est un feuillu dur qui s’allume facilement et brûle régulièrement.",
      "Bois séché en séchoir (four ou chambre de séchage).",
      "Marque : Gigant."
    ],
    "images": [
      {
        "src": "/images/catalogue/bois-pile-route.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/bois-fendu-2.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-de-frene-sechees-au-four-gigant.jpg",
        "alt": "Visuel du conditionnement — Bûches de frêne séchées au four — Gigant",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Gigant"
      ]
    ],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Gigant",
    "variants": [
      {
        "id": "25-cm-demi-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Demi-palette"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 226.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 231.57,
          "libelle": "231,57 € — « Bois de Chauffage Gigant Frêne Séché au Four 25cm Demi-Palette »"
        },
        "lengthCm": 25
      }
    ]
  },
  {
    "slug": "buches-de-frene-sechees-en-chambre",
    "name": "Bûches de frêne séchées en chambre",
    "category": "buches",
    "essences": [
      "Frêne"
    ],
    "shortDescription": "Bois de chauffage en bûches de frêne, en 25, 30 cm, proposé en demi-palette, lot, palette.",
    "description": [
      "Bois de chauffage en bûches de frêne, en 25, 30 cm, proposé en demi-palette, lot, palette.",
      "Le frêne est un feuillu dur qui s’allume facilement et brûle régulièrement.",
      "Bois séché en séchoir (four ou chambre de séchage).",
      "Bûches fendues, prêtes à l’emploi."
    ],
    "images": [
      {
        "src": "/images/catalogue/bois-tas-foret.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/bois-fendu-1.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-de-frene-sechees-en-chambre.jpg",
        "alt": "Visuel du conditionnement — Bûches de frêne séchées en chambre",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "25-cm-demi-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Demi-palette"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 250.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 256.47,
          "libelle": "256,47 € — « Demi-palette de bois de chauffage frêne fendu séché en chambre 25cm »"
        },
        "lengthCm": 25
      },
      {
        "id": "30-33-cm-lot-de-88-filets",
        "options": {
          "Longueur": "30–33 cm",
          "Conditionnement": "Lot de 88 filets"
        },
        "unite": {
          "singulier": "lot",
          "pluriel": "lots"
        },
        "prix": 331.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 339.47,
          "libelle": "339,47 € — « 88 sacs en filet de bois de chauffage en frêne fendu, séché en chambre, 30-33 cm »"
        },
        "lengthCm": 30
      },
      {
        "id": "25-cm-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 404.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 414.17,
          "libelle": "414,17 € — « Palette de bois de chauffage en frêne fendu, séché en chambre, 25cm »"
        },
        "lengthCm": 25
      }
    ]
  },
  {
    "slug": "buches-de-hetre",
    "name": "Bûches de hêtre",
    "category": "buches",
    "essences": [
      "Hêtre"
    ],
    "shortDescription": "Bois de chauffage en bûches de hêtre, en 25, 28, 30, 33, 50 cm, proposé en palette, sac, vrac.",
    "description": [
      "Bois de chauffage en bûches de hêtre, en 25, 28, 30, 33, 50 cm, proposé en palette, sac, vrac.",
      "Le hêtre est un bois dur qui donne de belles flammes et une chaleur régulière."
    ],
    "images": [
      {
        "src": "/images/catalogue/hetre-fendu.jpg",
        "alt": "Bûches de hêtre fendues",
        "illustration": true
      },
      {
        "src": "/images/catalogue/buches-vrac-livraison.jpg",
        "alt": "Livraison de bûches en vrac",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-de-hetre.jpg",
        "alt": "Visuel du conditionnement — Bûches de hêtre",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "28-cm-sac",
        "options": {
          "Longueur": "28 cm",
          "Conditionnement": "Sac"
        },
        "unite": {
          "singulier": "sac",
          "pluriel": "sacs"
        },
        "prix": 160.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 165.17,
          "libelle": "165,17 € — « Bois de chauffage Hêtre 28 cm en sac »"
        },
        "lengthCm": 28
      },
      {
        "id": "25-cm-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 388.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 397.57,
          "libelle": "397,57 € — « Palette de bois de chauffage Hêtre 25cm + 5 sacs de petit bois d'allumage gratuits »"
        },
        "lengthCm": 25
      },
      {
        "id": "28-cm-vrac-1-stere",
        "options": {
          "Longueur": "28 cm",
          "Conditionnement": "Vrac — 1 stère"
        },
        "unite": {
          "singulier": "stère",
          "pluriel": "stères"
        },
        "prix": 160.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 165.17,
          "libelle": "165,17 € — « Bois de chauffage Hêtre 28 cm 1 stère »"
        },
        "lengthCm": 28,
        "steres": 1.0
      },
      {
        "id": "25-cm-vrac-1-stere",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Vrac — 1 stère"
        },
        "unite": {
          "singulier": "stère",
          "pluriel": "stères"
        },
        "prix": 201.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 206.67,
          "libelle": "206,67 € — « Bois de chauffage Hêtre 25 cm 1 stère »"
        },
        "lengthCm": 25,
        "steres": 1.0
      },
      {
        "id": "30-33-cm-vrac-1-stere",
        "options": {
          "Longueur": "30–33 cm",
          "Conditionnement": "Vrac — 1 stère"
        },
        "unite": {
          "singulier": "stère",
          "pluriel": "stères"
        },
        "prix": 201.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 206.67,
          "libelle": "206,67 € — « Bois de chauffage Hêtre 30-33 cm 1 stère »"
        },
        "lengthCm": 30,
        "steres": 1.0
      },
      {
        "id": "non-precisee-vrac-1-stere",
        "options": {
          "Longueur": "Non précisée",
          "Conditionnement": "Vrac — 1 stère"
        },
        "unite": {
          "singulier": "stère",
          "pluriel": "stères"
        },
        "prix": 201.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 206.67,
          "libelle": "206,67 € — « Bois de chauffage Hêtre, sections 1 stère réel (FM) »"
        },
        "steres": 1.0
      },
      {
        "id": "25-cm-palette-1-7-steres",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Palette (1,7 stères)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 288.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 295.7,
          "libelle": "295,7 € — « BoisExpress — Bois de chauffage 25cm Palette 1,7 stère 100% Hêtre Séchage Naturel »"
        },
        "lengthCm": 25,
        "steres": 1.7
      },
      {
        "id": "30-cm-palette-1-7-steres",
        "options": {
          "Longueur": "30 cm",
          "Conditionnement": "Palette (1,7 stères)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 290.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 297.14,
          "libelle": "297,14 € — « BoisExpress — Bois de chauffage 30cm Palette 1,7 stère 100% Hêtre Tradition Bois »"
        },
        "lengthCm": 30,
        "steres": 1.7
      },
      {
        "id": "33-cm-sac-1-9-steres",
        "options": {
          "Longueur": "33 cm",
          "Conditionnement": "Sac — 1,9 stères"
        },
        "unite": {
          "singulier": "sac",
          "pluriel": "sacs"
        },
        "prix": 298.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 305.28,
          "libelle": "305,28 € — « BoisExpress — Bois de chauffage 33cm Sac 1,9 stère Hêtre Séchage Naturel »"
        },
        "lengthCm": 33,
        "steres": 1.9
      },
      {
        "id": "30-cm-sac-1-9-steres",
        "options": {
          "Longueur": "30 cm",
          "Conditionnement": "Sac — 1,9 stères"
        },
        "unite": {
          "singulier": "sac",
          "pluriel": "sacs"
        },
        "prix": 324.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 331.88,
          "libelle": "331,88 € — « BoisExpress — Bois de chauffage 30cm Sac 1,9 Stère Hêtre Séchage Naturel »"
        },
        "lengthCm": 30,
        "steres": 1.9
      },
      {
        "id": "28-cm-vrac-2-steres",
        "options": {
          "Longueur": "28 cm",
          "Conditionnement": "Vrac — 2 stères"
        },
        "unite": {
          "singulier": "lot de 2 stères",
          "pluriel": "lots de 2 stères"
        },
        "prix": 282.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 289.67,
          "libelle": "289,67 € — « Bois de chauffage Hêtre 28 cm 2 stères »"
        },
        "lengthCm": 28,
        "steres": 2.0
      },
      {
        "id": "50-cm-vrac-2-steres",
        "options": {
          "Longueur": "50 cm",
          "Conditionnement": "Vrac — 2 stères"
        },
        "unite": {
          "singulier": "lot de 2 stères",
          "pluriel": "lots de 2 stères"
        },
        "prix": 282.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 289.67,
          "libelle": "289,67 € — « Bois de chauffage Hêtre 50 cm 2 stères »"
        },
        "lengthCm": 50,
        "steres": 2.0
      },
      {
        "id": "25-cm-vrac-2-steres",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Vrac — 2 stères"
        },
        "unite": {
          "singulier": "lot de 2 stères",
          "pluriel": "lots de 2 stères"
        },
        "prix": 323.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 331.17,
          "libelle": "331,17 € — « Bois de chauffage Hêtre 25 cm 2 stères »"
        },
        "lengthCm": 25,
        "steres": 2.0
      },
      {
        "id": "30-33-cm-vrac-2-steres",
        "options": {
          "Longueur": "30–33 cm",
          "Conditionnement": "Vrac — 2 stères"
        },
        "unite": {
          "singulier": "lot de 2 stères",
          "pluriel": "lots de 2 stères"
        },
        "prix": 323.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 331.17,
          "libelle": "331,17 € — « Bois de chauffage Hêtre 30-33 cm 2 stères »"
        },
        "lengthCm": 30,
        "steres": 2.0
      },
      {
        "id": "30-cm-palette-3-steres",
        "options": {
          "Longueur": "30 cm",
          "Conditionnement": "Palette (3 stères)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 433.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 443.57,
          "libelle": "443,57 € — « BoisExpress — Bois de chauffage 30cm Palette 3 stères 100% Hêtre Séchage Naturel »"
        },
        "lengthCm": 30,
        "steres": 3.0
      }
    ]
  },
  {
    "slug": "buches-de-hetre-sechees-au-four",
    "name": "Bûches de hêtre séchées au four",
    "category": "buches",
    "essences": [
      "Hêtre"
    ],
    "shortDescription": "Bois de chauffage en bûches de hêtre, en 25 cm, proposé en palette.",
    "description": [
      "Bois de chauffage en bûches de hêtre, en 25 cm, proposé en palette.",
      "Le hêtre est un bois dur qui donne de belles flammes et une chaleur régulière.",
      "Bois séché en séchoir (four ou chambre de séchage).",
      "Bûches fendues, prêtes à l’emploi."
    ],
    "images": [
      {
        "src": "/images/catalogue/hetre-coupe.jpg",
        "alt": "Hêtre coupé en bûches",
        "illustration": true
      },
      {
        "src": "/images/catalogue/bois-abri.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-de-hetre-sechees-au-four.jpg",
        "alt": "Visuel du conditionnement — Bûches de hêtre séchées au four",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "25-cm-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 388.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 397.57,
          "libelle": "397,57 € — « Palette de bois de chauffage hêtre fendu séché au four 25 cm »"
        },
        "lengthCm": 25
      }
    ]
  },
  {
    "slug": "buches-de-hetre-sechees-en-chambre",
    "name": "Bûches de hêtre séchées en chambre",
    "category": "buches",
    "essences": [
      "Hêtre"
    ],
    "shortDescription": "Bois de chauffage en bûches de hêtre, en 25, 33 cm, proposé en demi-palette, palette.",
    "description": [
      "Bois de chauffage en bûches de hêtre, en 25, 33 cm, proposé en demi-palette, palette.",
      "Le hêtre est un bois dur qui donne de belles flammes et une chaleur régulière.",
      "Bois séché en séchoir (four ou chambre de séchage).",
      "Bûches fendues, prêtes à l’emploi."
    ],
    "images": [
      {
        "src": "/images/catalogue/hetre-rond.jpg",
        "alt": "Rondin de hêtre",
        "illustration": true
      },
      {
        "src": "/images/catalogue/bois-tas-fendeuse.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-de-hetre-sechees-en-chambre.jpg",
        "alt": "Visuel du conditionnement — Bûches de hêtre séchées en chambre",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "25-cm-demi-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Demi-palette"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 242.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 248.17,
          "libelle": "248,17 € — « Demi-palette de bois de chauffage hêtre fendu, séché en chambre, 25 cm »"
        },
        "lengthCm": 25
      },
      {
        "id": "33-cm-palette",
        "options": {
          "Longueur": "33 cm",
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 396.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 405.87,
          "libelle": "405,87 € — « Palette de bois de chauffage hêtre fendu 33cm séché en chambre »"
        },
        "lengthCm": 33
      }
    ]
  },
  {
    "slug": "buches-d-aulne",
    "name": "Bûches d’aulne",
    "category": "buches",
    "essences": [
      "Aulne"
    ],
    "shortDescription": "Bois de chauffage en bûches de aulne, en 25 cm, proposé en palette.",
    "description": [
      "Bois de chauffage en bûches de aulne, en 25 cm, proposé en palette.",
      "L’aulne est un feuillu tendre, facile à allumer."
    ],
    "images": [
      {
        "src": "/images/catalogue/aulne-rondelle.jpg",
        "alt": "Rondelle d’aulne",
        "illustration": true
      },
      {
        "src": "/images/catalogue/buches-palette.jpg",
        "alt": "Bûches rangées sur une palette",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-d-aulne.jpg",
        "alt": "Visuel du conditionnement — Bûches d’aulne",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "25-cm-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 356.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 364.37,
          "libelle": "364,37 € — « Palette Bois de Chauffage Aulne 25cm »"
        },
        "lengthCm": 25
      }
    ]
  },
  {
    "slug": "buches-d-aulne-sechees-au-four",
    "name": "Bûches d’aulne séchées au four",
    "category": "buches",
    "essences": [
      "Aulne"
    ],
    "shortDescription": "Bois de chauffage en bûches de aulne, en 25 cm, proposé en lot, palette.",
    "description": [
      "Bois de chauffage en bûches de aulne, en 25 cm, proposé en lot, palette.",
      "L’aulne est un feuillu tendre, facile à allumer.",
      "Bois séché en séchoir (four ou chambre de séchage).",
      "Bûches fendues, prêtes à l’emploi."
    ],
    "images": [
      {
        "src": "/images/catalogue/bois-abri.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/buches-filet.jpg",
        "alt": "Filet de bûches",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-d-aulne-sechees-au-four.jpg",
        "alt": "Visuel du conditionnement — Bûches d’aulne séchées au four",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "25-cm-lot-de-88-filets",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Lot de 88 filets"
        },
        "unite": {
          "singulier": "lot",
          "pluriel": "lots"
        },
        "prix": 307.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 314.57,
          "libelle": "314,57 € — « 88 sacs en filet de bois de chauffage d'aulne fendu séché au four 25cm »"
        },
        "lengthCm": 25
      },
      {
        "id": "25-cm-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 356.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 364.37,
          "libelle": "364,37 € — « Palette de bois de chauffage aulne fendu séché au four 25cm »"
        },
        "lengthCm": 25
      }
    ]
  },
  {
    "slug": "buches-d-aulne-sechees-en-chambre",
    "name": "Bûches d’aulne séchées en chambre",
    "category": "buches",
    "essences": [
      "Aulne"
    ],
    "shortDescription": "Bois de chauffage en bûches de aulne, en 25 cm, proposé en demi-palette.",
    "description": [
      "Bois de chauffage en bûches de aulne, en 25 cm, proposé en demi-palette.",
      "L’aulne est un feuillu tendre, facile à allumer.",
      "Bois séché en séchoir (four ou chambre de séchage).",
      "Bûches fendues, prêtes à l’emploi."
    ],
    "images": [
      {
        "src": "/images/catalogue/bois-tas-fendeuse.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/bois-pile-foret.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-d-aulne-sechees-en-chambre.jpg",
        "alt": "Visuel du conditionnement — Bûches d’aulne séchées en chambre",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "25-cm-demi-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Demi-palette"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 217.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 223.27,
          "libelle": "223,27 € — « Demi-palette de bois de chauffage aulne fendu séché en chambre 25cm »"
        },
        "lengthCm": 25
      }
    ]
  },
  {
    "slug": "buches-mi-seches-essence-au-choix",
    "name": "Bûches mi-sèches — essence au choix",
    "category": "buches",
    "essences": [],
    "shortDescription": "Bois de chauffage en bûches, proposé en vrac.",
    "description": [
      "Bois de chauffage en bûches, proposé en vrac."
    ],
    "images": [
      {
        "src": "/images/catalogue/buches-vrac-livraison.jpg",
        "alt": "Livraison de bûches en vrac",
        "illustration": true
      },
      {
        "src": "/images/catalogue/bois-tas.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-mi-seches-essence-au-choix.jpg",
        "alt": "Visuel du conditionnement — Bûches mi-sèches — essence au choix",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "vrac",
        "options": {
          "Conditionnement": "Vrac"
        },
        "unite": {
          "singulier": "lot",
          "pluriel": "lots"
        },
        "prix": 81.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 84.48,
          "libelle": "84,48 € — « Bois buches en vrac mi-sec »"
        }
      }
    ]
  },
  {
    "slug": "buches-melange-chene-hetre-et-charme",
    "name": "Bûches mélange chêne, hêtre et charme",
    "category": "buches",
    "essences": [
      "Chêne",
      "Hêtre",
      "Charme"
    ],
    "shortDescription": "Bois de chauffage en bûches de chêne, hêtre, charme, en 25, 30, 33, 40, 50 cm, proposé en lot, vrac.",
    "description": [
      "Bois de chauffage en bûches de chêne, hêtre, charme, en 25, 30, 33, 40, 50 cm, proposé en lot, vrac.",
      "Le chêne est un bois dur et dense, apprécié pour sa combustion longue.",
      "Le hêtre est un bois dur qui donne de belles flammes et une chaleur régulière.",
      "Le charme est un bois dur et dense, au bon pouvoir calorifique."
    ],
    "images": [
      {
        "src": "/images/catalogue/chene-fendu.jpg",
        "alt": "Bûches de chêne fendues",
        "illustration": true
      },
      {
        "src": "/images/catalogue/bois-fendu-tas.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-melange-chene-hetre-et-charme.jpg",
        "alt": "Visuel du conditionnement — Bûches mélange chêne, hêtre et charme",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Humidité annoncée par le fournisseur",
        "< 20 %"
      ]
    ],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "50-cm-lot-de-2-palettes",
        "options": {
          "Longueur": "50 cm",
          "Conditionnement": "Lot de 2 palettes"
        },
        "unite": {
          "singulier": "lot de 2 palettes",
          "pluriel": "lots de 2 palettes"
        },
        "prix": 229.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 234.71,
          "libelle": "234,71 € — « BoisExpress — 2x Palettes (chêne blanc + Hêtre/Charme) Bûches de 50 cm Tradition Bois »"
        },
        "lengthCm": 50,
        "alerte": "Volume non précisé et prix incohérent : 114,95 € par palette, alors que les palettes simples de bûches du catalogue sont à ≈ 357 à 405 €. Confirmez le volume réel d’une palette de ce lot avant de valider."
      },
      {
        "id": "40-cm-lot-de-2-palettes",
        "options": {
          "Longueur": "40 cm",
          "Conditionnement": "Lot de 2 palettes"
        },
        "unite": {
          "singulier": "lot de 2 palettes",
          "pluriel": "lots de 2 palettes"
        },
        "prix": 336.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 343.81,
          "libelle": "343,81 € — « BoisExpress — 2x Palettes (chêne blanc + Hêtre/Charme) Bûches de 40 cm Bois Noble »"
        },
        "lengthCm": 40,
        "alerte": "Volume non précisé et prix incohérent : 168,45 € par palette, alors que les palettes simples de bûches du catalogue sont à ≈ 357 à 405 €. Confirmez le volume réel d’une palette de ce lot avant de valider."
      },
      {
        "id": "33-cm-lot-de-2-palettes",
        "options": {
          "Longueur": "33 cm",
          "Conditionnement": "Lot de 2 palettes"
        },
        "unite": {
          "singulier": "lot de 2 palettes",
          "pluriel": "lots de 2 palettes"
        },
        "prix": 337.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 344.8,
          "libelle": "344,8 € — « BoisExpress — 2x Palettes (chêne blanc + Hêtre/Charme) Bûches de 33 cm Artisan Français »"
        },
        "lengthCm": 33,
        "alerte": "Volume non précisé et prix incohérent : 168,95 € par palette, alors que les palettes simples de bûches du catalogue sont à ≈ 357 à 405 €. Confirmez le volume réel d’une palette de ce lot avant de valider."
      },
      {
        "id": "50-cm-lot-de-4-palettes",
        "options": {
          "Longueur": "50 cm",
          "Conditionnement": "Lot de 4 palettes"
        },
        "unite": {
          "singulier": "lot de 4 palettes",
          "pluriel": "lots de 4 palettes"
        },
        "prix": 348.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 356.7,
          "libelle": "356,7 € — « BoisExpress — 4x Palettes (2 chêne blanc + 2 Hêtre/Charme) Bûches de 50 cm Forêt Française »"
        },
        "lengthCm": 50,
        "alerte": "Volume non précisé et prix incohérent : 87,22 € par palette, alors que les palettes simples de bûches du catalogue sont à ≈ 357 à 405 €. Confirmez le volume réel d’une palette de ce lot avant de valider."
      },
      {
        "id": "40-cm-lot-de-4-palettes",
        "options": {
          "Longueur": "40 cm",
          "Conditionnement": "Lot de 4 palettes"
        },
        "unite": {
          "singulier": "lot de 4 palettes",
          "pluriel": "lots de 4 palettes"
        },
        "prix": 435.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 445.26,
          "libelle": "445,26 € — « BoisExpress — 4x Palettes (2 chêne blanc + 2 Hêtre/Charme) Bûches de 40 cm Tradition Bois »"
        },
        "lengthCm": 40,
        "alerte": "Volume non précisé et prix incohérent : 108,97 € par palette, alors que les palettes simples de bûches du catalogue sont à ≈ 357 à 405 €. Confirmez le volume réel d’une palette de ce lot avant de valider."
      },
      {
        "id": "50-cm-vrac-3-steres",
        "options": {
          "Longueur": "50 cm",
          "Conditionnement": "Vrac — 3 stères"
        },
        "unite": {
          "singulier": "lot de 3 stères",
          "pluriel": "lots de 3 stères"
        },
        "prix": 252.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 258.3,
          "libelle": "258,3 € — « BoisExpress — 3 stères de bûches 50cm En vrac Chêne/Hêtre/Charme Tradition Bois »"
        },
        "lengthCm": 50,
        "steres": 3.0
      },
      {
        "id": "30-cm-vrac-3-steres",
        "options": {
          "Longueur": "30 cm",
          "Conditionnement": "Vrac — 3 stères"
        },
        "unite": {
          "singulier": "lot de 3 stères",
          "pluriel": "lots de 3 stères"
        },
        "prix": 354.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 362.86,
          "libelle": "362,86 € — « BoisExpress — 3 stères de bûches 30cm En vrac Chêne/Hêtre/Charme Séchage Naturel »"
        },
        "lengthCm": 30,
        "steres": 3.0
      },
      {
        "id": "25-cm-vrac-3-steres",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Vrac — 3 stères"
        },
        "unite": {
          "singulier": "lot de 3 stères",
          "pluriel": "lots de 3 stères"
        },
        "prix": 384.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 393.6,
          "libelle": "393,6 € — « BoisExpress — 3 stères de bûches 25cm En vrac Chêne/Hêtre/Charme Tradition Bois »"
        },
        "lengthCm": 25,
        "steres": 3.0
      }
    ]
  },
  {
    "slug": "buches-melange-frene-et-bouleau-sechees-en-chambre",
    "name": "Bûches mélange frêne et bouleau séchées en chambre",
    "category": "buches",
    "essences": [
      "Frêne",
      "Bouleau"
    ],
    "shortDescription": "Bois de chauffage en bûches de frêne, bouleau, en 25 cm, proposé en demi-palette, palette.",
    "description": [
      "Bois de chauffage en bûches de frêne, bouleau, en 25 cm, proposé en demi-palette, palette.",
      "Le frêne est un feuillu dur qui s’allume facilement et brûle régulièrement.",
      "Le bouleau s’enflamme rapidement et donne une flamme vive.",
      "Bois séché en séchoir (four ou chambre de séchage).",
      "Bûches fendues, prêtes à l’emploi."
    ],
    "images": [
      {
        "src": "/images/catalogue/frene-fendu.jpg",
        "alt": "Bûches de frêne fendues",
        "illustration": true
      },
      {
        "src": "/images/catalogue/bois-mur.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/buches-melange-frene-et-bouleau-sechees-en-chambre.jpg",
        "alt": "Visuel du conditionnement — Bûches mélange frêne et bouleau séchées en chambre",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "25-cm-demi-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Demi-palette"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 242.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 248.17,
          "libelle": "248,17 € — « Demi-palette de bois de chauffage mélange bouleau/frêne, fendu et séché en chambre, 25cm »"
        },
        "lengthCm": 25
      },
      {
        "id": "25-cm-palette",
        "options": {
          "Longueur": "25 cm",
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 388.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 397.57,
          "libelle": "397,57 € — « Palette de bois de chauffage mixte bouleau/frêne fendu séché en chambre 25cm »"
        },
        "lengthCm": 25
      }
    ]
  },
  {
    "slug": "bois-en-grumes-chene",
    "name": "Bois en grumes — Chêne",
    "category": "buches",
    "essences": [
      "Chêne"
    ],
    "shortDescription": "Bois en grumes, livré non fendu : pour les personnes équipées pour couper et fendre elles-mêmes. Essence : chêne.",
    "description": [
      "Bois en grumes, livré non fendu : pour les personnes équipées pour couper et fendre elles-mêmes. Essence : chêne.",
      "Proposé en : lot."
    ],
    "images": [
      {
        "src": "/images/catalogue/grumes-1.jpg",
        "alt": "Grumes de bois empilées",
        "illustration": true
      },
      {
        "src": "/images/catalogue/grumes-2.jpg",
        "alt": "Grumes de bois empilées",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/bois-en-grumes-chene.jpg",
        "alt": "Visuel du conditionnement — Bois en grumes — Chêne",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "lot",
        "options": {
          "Conditionnement": "Lot"
        },
        "unite": {
          "singulier": "lot",
          "pluriel": "lots"
        },
        "prix": 1015,
        "basePrix": "estime",
        "hypothese": "Volume non précisé : comparaison impossible. Prix calqué sur l’offre identique de kwattbois.fr (1037,5 €), ≈ 2 à 4 % en dessous ; contenu exact à confirmer.",
        "reference": {
          "prix": 1037.5,
          "libelle": "1037,5 € — « Bois en grumes – Chêne »"
        }
      }
    ]
  },
  {
    "slug": "bois-en-grumes-frene",
    "name": "Bois en grumes — Frêne",
    "category": "buches",
    "essences": [
      "Frêne"
    ],
    "shortDescription": "Bois en grumes, livré non fendu : pour les personnes équipées pour couper et fendre elles-mêmes. Essence : frêne.",
    "description": [
      "Bois en grumes, livré non fendu : pour les personnes équipées pour couper et fendre elles-mêmes. Essence : frêne.",
      "Proposé en : lot."
    ],
    "images": [
      {
        "src": "/images/catalogue/grumes-3.jpg",
        "alt": "Grumes de bois empilées",
        "illustration": true
      },
      {
        "src": "/images/catalogue/grumes-4.jpg",
        "alt": "Grumes de bois empilées",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/bois-en-grumes-frene.jpg",
        "alt": "Visuel du conditionnement — Bois en grumes — Frêne",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "lot",
        "options": {
          "Conditionnement": "Lot"
        },
        "unite": {
          "singulier": "lot",
          "pluriel": "lots"
        },
        "prix": 980,
        "basePrix": "estime",
        "hypothese": "Volume non précisé : comparaison impossible. Prix calqué sur l’offre identique de kwattbois.fr (1000,15 €), ≈ 2 à 4 % en dessous ; contenu exact à confirmer.",
        "reference": {
          "prix": 1000.15,
          "libelle": "1000,15 € — « Bois en grumes – Frêne »"
        }
      }
    ]
  },
  {
    "slug": "bois-en-grumes-hetre",
    "name": "Bois en grumes — Hêtre",
    "category": "buches",
    "essences": [
      "Hêtre"
    ],
    "shortDescription": "Bois en grumes, livré non fendu : pour les personnes équipées pour couper et fendre elles-mêmes. Essence : hêtre.",
    "description": [
      "Bois en grumes, livré non fendu : pour les personnes équipées pour couper et fendre elles-mêmes. Essence : hêtre.",
      "Proposé en : lot."
    ],
    "images": [
      {
        "src": "/images/catalogue/grumes-8.jpg",
        "alt": "Grumes de bois empilées",
        "illustration": true
      },
      {
        "src": "/images/catalogue/grumes-5.jpg",
        "alt": "Grumes de bois empilées",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/bois-en-grumes-hetre.jpg",
        "alt": "Visuel du conditionnement — Bois en grumes — Hêtre",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "lot",
        "options": {
          "Conditionnement": "Lot"
        },
        "unite": {
          "singulier": "lot",
          "pluriel": "lots"
        },
        "prix": 926.9,
        "basePrix": "estime",
        "hypothese": "Volume non précisé : comparaison impossible. Prix calqué sur l’offre identique de kwattbois.fr (946,2 €), ≈ 2 à 4 % en dessous ; contenu exact à confirmer.",
        "reference": {
          "prix": 946.2,
          "libelle": "946,2 € — « Bois en grumes – Hêtre »"
        }
      }
    ]
  },
  {
    "slug": "bois-en-grumes-pin",
    "name": "Bois en grumes — Pin",
    "category": "buches",
    "essences": [
      "Pin"
    ],
    "shortDescription": "Bois en grumes, livré non fendu : pour les personnes équipées pour couper et fendre elles-mêmes. Essence : pin.",
    "description": [
      "Bois en grumes, livré non fendu : pour les personnes équipées pour couper et fendre elles-mêmes. Essence : pin.",
      "Proposé en : lot."
    ],
    "images": [
      {
        "src": "/images/catalogue/grumes-12.jpg",
        "alt": "Grumes de bois empilées",
        "illustration": true
      },
      {
        "src": "/images/catalogue/grumes-6.jpg",
        "alt": "Grumes de bois empilées",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/bois-en-grumes-pin.jpg",
        "alt": "Visuel du conditionnement — Bois en grumes — Pin",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "lot",
        "options": {
          "Conditionnement": "Lot"
        },
        "unite": {
          "singulier": "lot",
          "pluriel": "lots"
        },
        "prix": 609.9,
        "basePrix": "estime",
        "hypothese": "Volume non précisé : comparaison impossible. Prix calqué sur l’offre identique de kwattbois.fr (622,5 €), ≈ 2 à 4 % en dessous ; contenu exact à confirmer.",
        "reference": {
          "prix": 622.5,
          "libelle": "622,5 € — « Grumes - Pin »"
        }
      }
    ]
  },
  {
    "slug": "bois-en-grumes-resineux",
    "name": "Bois en grumes — Résineux",
    "category": "buches",
    "essences": [
      "Résineux"
    ],
    "shortDescription": "Bois en grumes, livré non fendu : pour les personnes équipées pour couper et fendre elles-mêmes. Essence : résineux.",
    "description": [
      "Bois en grumes, livré non fendu : pour les personnes équipées pour couper et fendre elles-mêmes. Essence : résineux.",
      "Proposé en : lot."
    ],
    "images": [
      {
        "src": "/images/catalogue/grumes-11.jpg",
        "alt": "Grumes de bois empilées",
        "illustration": true
      },
      {
        "src": "/images/catalogue/grumes-13.jpg",
        "alt": "Grumes de bois empilées",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/bois-en-grumes-resineux.jpg",
        "alt": "Visuel du conditionnement — Bois en grumes — Résineux",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "lot",
        "options": {
          "Conditionnement": "Lot"
        },
        "unite": {
          "singulier": "lot",
          "pluriel": "lots"
        },
        "prix": 678.9,
        "basePrix": "estime",
        "hypothese": "Volume non précisé : comparaison impossible. Prix calqué sur l’offre identique de kwattbois.fr (693,05 €), ≈ 2 à 4 % en dessous ; contenu exact à confirmer.",
        "reference": {
          "prix": 693.05,
          "libelle": "693,05 € — « Bois en grumes – Résineux »"
        }
      }
    ]
  },
  {
    "slug": "bois-en-grumes-epicea",
    "name": "Bois en grumes — Épicéa",
    "category": "buches",
    "essences": [
      "Épicéa"
    ],
    "shortDescription": "Bois en grumes, livré non fendu : pour les personnes équipées pour couper et fendre elles-mêmes. Essence : épicéa.",
    "description": [
      "Bois en grumes, livré non fendu : pour les personnes équipées pour couper et fendre elles-mêmes. Essence : épicéa.",
      "Proposé en : lot."
    ],
    "images": [
      {
        "src": "/images/catalogue/grumes-10.jpg",
        "alt": "Grumes de bois empilées",
        "illustration": true
      },
      {
        "src": "/images/catalogue/grumes-15.jpg",
        "alt": "Grumes de bois empilées",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/bois-en-grumes-epicea.jpg",
        "alt": "Visuel du conditionnement — Bois en grumes — Épicéa",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "lot",
        "options": {
          "Conditionnement": "Lot"
        },
        "unite": {
          "singulier": "lot",
          "pluriel": "lots"
        },
        "prix": 584.9,
        "basePrix": "estime",
        "hypothese": "Volume non précisé : comparaison impossible. Prix calqué sur l’offre identique de kwattbois.fr (597,6 €), ≈ 2 à 4 % en dessous ; contenu exact à confirmer.",
        "reference": {
          "prix": 597.6,
          "libelle": "597,6 € — « Bois en grumes – Épicéa »"
        }
      }
    ]
  },
  {
    "slug": "bois-sur-pied-bouleau",
    "name": "Bois sur pied — Bouleau",
    "category": "buches",
    "essences": [
      "Bouleau"
    ],
    "shortDescription": "Bois vendu sur pied : l’abattage et l’enlèvement sont à organiser avec nous. Essence : bouleau.",
    "description": [
      "Bois vendu sur pied : l’abattage et l’enlèvement sont à organiser avec nous. Essence : bouleau.",
      "Proposé en : lot."
    ],
    "images": [
      {
        "src": "/images/catalogue/foret-bouleau.jpg",
        "alt": "Forêt de feuillus",
        "illustration": true
      },
      {
        "src": "/images/catalogue/grumes-bouleau.jpg",
        "alt": "Grumes de bois empilées",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/bois-sur-pied-bouleau.jpg",
        "alt": "Visuel du conditionnement — Bois sur pied — Bouleau",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "lot",
        "options": {
          "Conditionnement": "Lot"
        },
        "unite": {
          "singulier": "lot",
          "pluriel": "lots"
        },
        "prix": 816.9,
        "basePrix": "estime",
        "hypothese": "Volume non précisé : comparaison impossible. Prix calqué sur l’offre identique de kwattbois.fr (834,15 €), ≈ 2 à 4 % en dessous ; contenu exact à confirmer.",
        "reference": {
          "prix": 834.15,
          "libelle": "834,15 € — « Bois sur pied – Bouleau »"
        }
      }
    ]
  },
  {
    "slug": "bois-sur-pied-feuillus-durs",
    "name": "Bois sur pied — Feuillus durs",
    "category": "buches",
    "essences": [
      "Feuillus durs"
    ],
    "shortDescription": "Bois vendu sur pied : l’abattage et l’enlèvement sont à organiser avec nous. Essence : feuillus durs.",
    "description": [
      "Bois vendu sur pied : l’abattage et l’enlèvement sont à organiser avec nous. Essence : feuillus durs.",
      "Proposé en : lot."
    ],
    "images": [
      {
        "src": "/images/catalogue/foret-feuillus.jpg",
        "alt": "Forêt de feuillus",
        "illustration": true
      },
      {
        "src": "/images/catalogue/foret-3.jpg",
        "alt": "Forêt de feuillus",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/bois-sur-pied-feuillus-durs.jpg",
        "alt": "Visuel du conditionnement — Bois sur pied — Feuillus durs",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "origine et taux d’humidité réels"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "lot",
        "options": {
          "Conditionnement": "Lot"
        },
        "unite": {
          "singulier": "lot",
          "pluriel": "lots"
        },
        "prix": 584.9,
        "basePrix": "estime",
        "hypothese": "Volume non précisé : comparaison impossible. Prix calqué sur l’offre identique de kwattbois.fr (597,6 €), ≈ 2 à 4 % en dessous ; contenu exact à confirmer.",
        "reference": {
          "prix": 597.6,
          "libelle": "597,6 € — « Bois sur pied – Mélange de bois durs »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-6-mm",
    "name": "Granulés de bois 6 mm",
    "category": "granules",
    "essences": [
      "Résineux"
    ],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés. Essence : résineux.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés. Essence : résineux.",
      "Proposé en : palette."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-6-mm.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois 6 mm",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-1.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sacs.jpg",
        "alt": "Sacs de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "palette-de-70-sacs-de-15-kg-1050-kg",
        "options": {
          "Conditionnement": "Palette de 70 sacs de 15 kg (1050 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 322.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 330.0,
          "libelle": "330 € — « BoisExpress — Pellet Confort Palette de 70 sacs de 15 kg 100% résineux Séchage Naturel »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-6-mm-enplus-a1",
    "name": "Granulés de bois 6 mm ENplus A1",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : demi-palette, lot, palette, sac."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-6-mm-enplus-a1.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois 6 mm ENplus A1",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-2.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sac-ouvert.jpg",
        "alt": "Sac de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Certification (indiquée par le fabricant)",
        "ENplus A1"
      ],
      [
        "Diamètre",
        "6 mm"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "sac-de-15-kg",
        "options": {
          "Conditionnement": "Sac de 15 kg"
        },
        "unite": {
          "singulier": "sac",
          "pluriel": "sacs"
        },
        "prix": 6.09,
        "basePrix": "indicatif",
        "reference": {
          "prix": 6.24,
          "libelle": "6,24 € — « Granulés de bois 15 kg — pellets 6 mm ENplus A1 pour poêle »"
        }
      },
      {
        "id": "demi-palette-495-kg",
        "options": {
          "Conditionnement": "Demi-palette (495 kg)"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 221.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 226.8,
          "libelle": "226,8 € — « Granulés de bois demi-palette 33 sacs — 495 kg de pellets 6 mm ENplus A1 »"
        }
      },
      {
        "id": "palette-990-kg",
        "options": {
          "Conditionnement": "Palette (990 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 409.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 418.8,
          "libelle": "418,8 € — « Granulés de bois palette 66 sacs — 990 kg de pellets 6 mm ENplus A1 »"
        }
      },
      {
        "id": "lot-de-2-palettes",
        "options": {
          "Conditionnement": "Lot de 2 palettes"
        },
        "unite": {
          "singulier": "lot de 2 palettes",
          "pluriel": "lots de 2 palettes"
        },
        "prix": 797.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 814.8,
          "libelle": "814,8 € — « Granulés de bois 2 palettes 132 sacs — 1,98 t de pellets 6 mm ENplus A1 »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-anvil",
    "name": "Granulés de bois ANVIL",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : ANVIL."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-anvil.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois ANVIL",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-3.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/palette-paquets-filmes.jpg",
        "alt": "Palette de paquets filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "ANVIL"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "ENplus A1"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "ANVIL",
    "variants": [
      {
        "id": "palette-de-70-sacs-de-15-kg-1050-kg",
        "options": {
          "Conditionnement": "Palette de 70 sacs de 15 kg (1050 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 351.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 360.0,
          "libelle": "360 € — « BoisExpress — Pellet ANVIL Palette de 70 sacs de 15Kg EN Plus A1 Bois Noble »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-alpes-energie-bois",
    "name": "Granulés de bois Alpes Energie Bois",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : Alpes Energie Bois."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-alpes-energie-bois.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Alpes Energie Bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-4.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sacs.jpg",
        "alt": "Sacs de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Alpes Energie Bois"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Alpes Energie Bois",
    "variants": [
      {
        "id": "palette-de-70-sacs-de-15-kg-1050-kg",
        "options": {
          "Conditionnement": "Palette de 70 sacs de 15 kg (1050 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 416.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 426.0,
          "libelle": "426 € — « BoisExpress — Pellets Alpes Energie Bois Palette de 70 sacs de 15 Kg Artisan Français »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-arapellet",
    "name": "Granulés de bois Arapellet",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : Arapellet."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-arapellet.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Arapellet",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-5.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sac-ouvert.jpg",
        "alt": "Sac de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Arapellet"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "ENplus A1, DINplus"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Arapellet",
    "variants": [
      {
        "id": "palette-de-77-sacs-de-15-kg-1155-kg",
        "options": {
          "Conditionnement": "Palette de 77 sacs de 15 kg (1155 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 369.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 378.0,
          "libelle": "378 € — « BoisExpress — Pellets Arapellet (En+ A1, Din+) Palette de 77 sacs de 15 Kg Bois Noble »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-ardenforest-100-resineux",
    "name": "Granulés de bois Ardenforest 100 % résineux",
    "category": "granules",
    "essences": [
      "Résineux"
    ],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés. Essence : résineux.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés. Essence : résineux.",
      "Proposé en : palette.",
      "Marque : Ardenforest."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-ardenforest-100-resineux.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Ardenforest 100 % résineux",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-6.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/palette-paquets-filmes.jpg",
        "alt": "Palette de paquets filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Ardenforest"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Ardenforest",
    "variants": [
      {
        "id": "palette-de-70-sacs-de-15-kg-1050-kg",
        "options": {
          "Conditionnement": "Palette de 70 sacs de 15 kg (1050 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 563.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 576.0,
          "libelle": "576 € — « BoisExpress — Pellet Ardenforest 100% résineux 70 sacs de 15 kg Tradition Bois »"
        },
        "alerte": "Prix élevé : 0,54 €/kg, au-dessus de la moyenne nationale des granulés en sacs ≈ 0,42 à 0,45 €/kg (relevés Selectra du 25/09/2026 et TotalEnergies du 01/10/2026), soit ≈ 441 à 472 € pour 1050 kg. Vérifiez avant de valider."
      }
    ],
    "statut": "a-verifier",
    "noteStatut": "Marque existante (Ardenforest), mais certaines sources décrivent un mélange résineux / feuillus : la mention « 100 % résineux » du nom est à vérifier auprès de votre fournisseur avant publication."
  },
  {
    "slug": "granules-de-bois-badger",
    "name": "Granulés de bois Badger",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : demi-palette, palette.",
      "Marque : Badger."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-badger.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Badger",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-main.jpg",
        "alt": "Granulés de bois dans la main",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sacs.jpg",
        "alt": "Sacs de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Badger"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Badger",
    "variants": [
      {
        "id": "demi-palette-de-36-sacs-de-15-kg-540-kg",
        "options": {
          "Conditionnement": "Demi-palette de 36 sacs de 15 kg (540 kg)"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 234.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 240.0,
          "libelle": "240 € — « BoisExpress — Granulés bois BADGER 1/2 Palette de 36 sacs de 15 kg Séchage Naturel »"
        }
      },
      {
        "id": "palette-de-65-sacs-de-15-kg-975-kg",
        "options": {
          "Conditionnement": "Palette de 65 sacs de 15 kg (975 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 298.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 306.0,
          "libelle": "306 € — « BoisExpress — Pellet Badger Palette de 65 sacs de 15 kg Séchage Naturel »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-crepito",
    "name": "Granulés de bois Crépito",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : Crépito."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-crepito.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Crépito",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-1.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sac-ouvert.jpg",
        "alt": "Sac de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Crépito"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Crépito",
    "variants": [
      {
        "id": "palette",
        "options": {
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 234.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 240.7,
          "libelle": "240,7 € — « 1 Palette de granulés CRÉPITO »"
        }
      },
      {
        "id": "palette-de-72-sacs-de-15-kg-1080-kg",
        "options": {
          "Conditionnement": "Palette de 72 sacs de 15 kg (1080 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 363.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 372.0,
          "libelle": "372 € — « BoisExpress — Granulés de bois Crépito Palette 72 sacs de 15 kg Tradition Bois »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-dragon",
    "name": "Granulés de bois Dragon",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : Dragon."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-dragon.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Dragon",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-2.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/palette-paquets-filmes.jpg",
        "alt": "Palette de paquets filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Dragon"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "ENplus A1"
      ],
      [
        "Diamètre",
        "6 mm"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Dragon",
    "variants": [
      {
        "id": "palette-de-65-sacs-de-15-kg-975-kg",
        "options": {
          "Conditionnement": "Palette de 65 sacs de 15 kg (975 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 242.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 248.17,
          "libelle": "248,17 € — « DRAGON Granulés de bois 6mm ENplusA1, palette de 65 x 15kg »"
        },
        "alerte": "Prix bas : 0,25 €/kg, nettement sous la moyenne nationale des granulés en sacs ≈ 0,42 à 0,45 €/kg (relevés Selectra du 25/09/2026 et TotalEnergies du 01/10/2026), soit ≈ 410 à 439 € pour 975 kg. Le prix de référence kwattbois est peut-être promotionnel ou irréaliste : vérifiez votre prix d’achat avant de valider (risque de vente à perte)."
      }
    ]
  },
  {
    "slug": "granules-de-bois-eo2-100-resineux",
    "name": "Granulés de bois EO2 100 % résineux",
    "category": "granules",
    "essences": [
      "Résineux"
    ],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés. Essence : résineux.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés. Essence : résineux.",
      "Proposé en : palette, sac.",
      "Marque : EO2."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-eo2-100-resineux.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois EO2 100 % résineux",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-3.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sacs.jpg",
        "alt": "Sacs de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "EO2"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "DINplus"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "EO2",
    "variants": [
      {
        "id": "sac-de-15-kg",
        "options": {
          "Conditionnement": "Sac de 15 kg"
        },
        "unite": {
          "singulier": "sac",
          "pluriel": "sacs"
        },
        "prix": 7.79,
        "basePrix": "estime",
        "hypothese": "La référence affiche 574,8 € pour un sac de 15 kg, soit le prix d’une palette de 72 sacs de la même marque. Prix d’un sac estimé à 7,98 € (palette ÷ 72), puis ≈ 2 à 4 % en dessous.",
        "reference": {
          "prix": 574.8,
          "libelle": "574,8 € — « Granulés de bois EO2 100% résineux - DINplus - Sac de 15kg »"
        },
        "alerte": "Prix élevé : 0,52 €/kg, au-dessus de la moyenne nationale des granulés en sacs ≈ 0,42 à 0,45 €/kg (relevés Selectra du 25/09/2026 et TotalEnergies du 01/10/2026), soit ≈ 6 à 7 € pour 15 kg. Exemple constaté : palette EO2 de 72 sacs à 439 € TTC chez un revendeur français (bois-de-chauffage-ecologique.fr). Vérifiez avant de valider."
      },
      {
        "id": "palette-de-72-sacs-de-15-kg-1080-kg",
        "options": {
          "Conditionnement": "Palette de 72 sacs de 15 kg (1080 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 562.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 574.8,
          "libelle": "574,8 € — « Granulés de bois 100% résineux - EO2 DINplus - Palette 1080 kg (72 sacs de 15 kg) »"
        },
        "alerte": "Prix élevé : 0,52 €/kg, au-dessus de la moyenne nationale des granulés en sacs ≈ 0,42 à 0,45 €/kg (relevés Selectra du 25/09/2026 et TotalEnergies du 01/10/2026), soit ≈ 454 à 486 € pour 1080 kg. Exemple constaté : palette EO2 de 72 sacs à 439 € TTC chez un revendeur français (bois-de-chauffage-ecologique.fr). Vérifiez avant de valider."
      }
    ]
  },
  {
    "slug": "granules-de-bois-eph",
    "name": "Granulés de bois EPH",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : EPH."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-eph.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois EPH",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-4.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sac-ouvert.jpg",
        "alt": "Sac de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "EPH"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "ENplus A1"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "EPH",
    "variants": [
      {
        "id": "palette-de-65-sacs-de-15-kg-975-kg",
        "options": {
          "Conditionnement": "Palette de 65 sacs de 15 kg (975 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 185.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 190.07,
          "libelle": "190,07 € — « Granulés de bois EPH en sac papier, ENplusA1, palette de 65 x 15kg »"
        },
        "alerte": "Prix bas : 0,19 €/kg, nettement sous la moyenne nationale des granulés en sacs ≈ 0,42 à 0,45 €/kg (relevés Selectra du 25/09/2026 et TotalEnergies du 01/10/2026), soit ≈ 410 à 439 € pour 975 kg. Le prix de référence kwattbois est peut-être promotionnel ou irréaliste : vérifiez votre prix d’achat avant de valider (risque de vente à perte)."
      }
    ],
    "statut": "a-verifier",
    "noteStatut": "Marque non confirmée par une recherche publique au 02/10/2026 (aucun fabricant ni revendeur établi trouvé sous ce nom). À publier seulement si votre fournisseur vous confirme la marque, la référence et l'approvisionnement."
  },
  {
    "slug": "granules-de-bois-excellent-pellets",
    "name": "Granulés de bois Excellent Pellets",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : Excellent Pellets."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-excellent-pellets.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Excellent Pellets",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-5.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/palette-paquets-filmes.jpg",
        "alt": "Palette de paquets filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Excellent Pellets"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Excellent Pellets",
    "variants": [
      {
        "id": "palette-de-65-sacs-de-15-kg-975-kg",
        "options": {
          "Conditionnement": "Palette de 65 sacs de 15 kg (975 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 310.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 318.0,
          "libelle": "318 € — « BoisExpress — Pellet Excellent Pellets Palette de 65 sacs de 15 kg Séchage Naturel »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-fireflies",
    "name": "Granulés de bois FIREFLIES",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : FIREFLIES."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-fireflies.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois FIREFLIES",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-6.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sacs.jpg",
        "alt": "Sacs de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "FIREFLIES"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "ENplus A1"
      ],
      [
        "Diamètre",
        "6 mm"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "FIREFLIES",
    "variants": [
      {
        "id": "palette-de-65-sacs-de-15-kg-975-kg",
        "options": {
          "Conditionnement": "Palette de 65 sacs de 15 kg (975 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 152.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 156.87,
          "libelle": "156,87 € — « FIREFLIES Granulés de bois 6mm ENplusA1, palette 65 x 15kg »"
        },
        "alerte": "Prix bas : 0,16 €/kg, nettement sous la moyenne nationale des granulés en sacs ≈ 0,42 à 0,45 €/kg (relevés Selectra du 25/09/2026 et TotalEnergies du 01/10/2026), soit ≈ 410 à 439 € pour 975 kg. Le prix de référence kwattbois est peut-être promotionnel ou irréaliste : vérifiez votre prix d’achat avant de valider (risque de vente à perte)."
      }
    ]
  },
  {
    "slug": "granules-de-bois-forest-pellets",
    "name": "Granulés de bois Forest Pellets",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : demi-palette, palette.",
      "Marque : Forest Pellets."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-forest-pellets.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Forest Pellets",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-main.jpg",
        "alt": "Granulés de bois dans la main",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sac-ouvert.jpg",
        "alt": "Sac de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Forest Pellets"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Forest Pellets",
    "variants": [
      {
        "id": "demi-palette-de-36-sacs-de-15-kg-540-kg",
        "options": {
          "Conditionnement": "Demi-palette de 36 sacs de 15 kg (540 kg)"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 246.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 252.0,
          "libelle": "252 € — « BoisExpress — Granulés Forest Pellets 1/2 Palette de 36 sacs de 15 kg Tradition Bois »"
        }
      },
      {
        "id": "palette-de-65-sacs-de-15-kg-975-kg",
        "options": {
          "Conditionnement": "Palette de 65 sacs de 15 kg (975 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 337.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 345.6,
          "libelle": "345,6 € — « BoisExpress — Granulés de bois Forest Pellets Palette de 65 sacs de 15 kg Forêt Française »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-gold-100-resineux",
    "name": "Granulés de bois GOLD 100 % résineux",
    "category": "granules",
    "essences": [
      "Résineux"
    ],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés. Essence : résineux.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés. Essence : résineux.",
      "Proposé en : palette.",
      "Marque : GOLD."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-gold-100-resineux.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois GOLD 100 % résineux",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-1.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/palette-paquets-filmes.jpg",
        "alt": "Palette de paquets filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "GOLD"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "GOLD",
    "variants": [
      {
        "id": "palette-de-65-sacs-de-15-kg-975-kg",
        "options": {
          "Conditionnement": "Palette de 65 sacs de 15 kg (975 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 354.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 362.4,
          "libelle": "362,4 € — « BoisExpress — Granulés GOLD 100% résineux Palette de 65 sacs de 15 kg Tradition Bois »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-german-flames",
    "name": "Granulés de bois German Flames",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : German Flames."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-german-flames.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois German Flames",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-2.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sacs.jpg",
        "alt": "Sacs de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "German Flames"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "ENplus A1"
      ],
      [
        "Diamètre",
        "6 mm"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "German Flames",
    "variants": [
      {
        "id": "palette-990-kg",
        "options": {
          "Conditionnement": "Palette (990 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 369.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 378.0,
          "libelle": "378 € — « BoisExpress — Granulés German Flames 6mm EN+ A1 Palette 990kg Tradition Bois »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-giant-flames",
    "name": "Granulés de bois Giant Flames",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : demi-palette, palette.",
      "Marque : Giant Flames."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-giant-flames.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Giant Flames",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-3.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sac-ouvert.jpg",
        "alt": "Sac de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Giant Flames"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Giant Flames",
    "variants": [
      {
        "id": "demi-palette-de-35-sacs-de-15-kg-525-kg",
        "options": {
          "Conditionnement": "Demi-palette de 35 sacs de 15 kg (525 kg)"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 250.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 256.47,
          "libelle": "256,47 € — « Demi-palette de granulés de bois Giant Flames 35 sacs x 15 kg (525kg) »"
        }
      },
      {
        "id": "palette-de-65-sacs-de-15-kg-975-kg",
        "options": {
          "Conditionnement": "Palette de 65 sacs de 15 kg (975 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 461.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 472.27,
          "libelle": "472,27 € — « Palette Giant Flames Granulés de bois 65 sacs x 15 kg (975 kg) »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-green-energy",
    "name": "Granulés de bois Green Energy",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : Green Energy."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-green-energy.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Green Energy",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-4.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/palette-paquets-filmes.jpg",
        "alt": "Palette de paquets filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Green Energy"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "DINplus"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Green Energy",
    "variants": [
      {
        "id": "palette-de-65-sacs-de-15-kg-975-kg",
        "options": {
          "Conditionnement": "Palette de 65 sacs de 15 kg (975 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 240.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 246.0,
          "libelle": "246 € — « BoisExpress — Pellets Green Energy DINplus 65 Sacs de 15 KG Tradition Bois »"
        },
        "alerte": "Prix bas : 0,25 €/kg, nettement sous la moyenne nationale des granulés en sacs ≈ 0,42 à 0,45 €/kg (relevés Selectra du 25/09/2026 et TotalEnergies du 01/10/2026), soit ≈ 410 à 439 € pour 975 kg. Le prix de référence kwattbois est peut-être promotionnel ou irréaliste : vérifiez votre prix d’achat avant de valider (risque de vente à perte)."
      }
    ]
  },
  {
    "slug": "granules-de-bois-heizfuxx-bleu",
    "name": "Granulés de bois HEIZFUXX Bleu",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : HEIZFUXX."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-heizfuxx-bleu.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois HEIZFUXX Bleu",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-5.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sacs.jpg",
        "alt": "Sacs de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "HEIZFUXX"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "ENplus A1"
      ],
      [
        "Diamètre",
        "6 mm"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "HEIZFUXX",
    "variants": [
      {
        "id": "palette-de-65-sacs-de-15-kg-975-kg",
        "options": {
          "Conditionnement": "Palette de 65 sacs de 15 kg (975 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 209.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 214.97,
          "libelle": "214,97 € — « HEIZFUXX Granulés de bois Blue 6mm ENplusA1, 65 x 15kg Palette »"
        },
        "alerte": "Prix bas : 0,22 €/kg, nettement sous la moyenne nationale des granulés en sacs ≈ 0,42 à 0,45 €/kg (relevés Selectra du 25/09/2026 et TotalEnergies du 01/10/2026), soit ≈ 410 à 439 € pour 975 kg. Le prix de référence kwattbois est peut-être promotionnel ou irréaliste : vérifiez votre prix d’achat avant de valider (risque de vente à perte)."
      }
    ]
  },
  {
    "slug": "granules-de-bois-heizfuxx-gris",
    "name": "Granulés de bois HEIZFUXX Gris",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : lot, palette.",
      "Marque : HEIZFUXX."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-heizfuxx-gris.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois HEIZFUXX Gris",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-6.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sac-ouvert.jpg",
        "alt": "Sac de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "HEIZFUXX"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "ENplus A1, ENplus A2"
      ],
      [
        "Diamètre",
        "6 mm"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "HEIZFUXX",
    "variants": [
      {
        "id": "palette-de-65-sacs-de-15-kg-975-kg",
        "options": {
          "Conditionnement": "Palette de 65 sacs de 15 kg (975 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 160.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 165.17,
          "libelle": "165,17 € — « HEIZFUXX Granulés de bois Grey 6mm ENplusA1, 65 x 15kg Palette »"
        },
        "alerte": "Prix bas : 0,17 €/kg, nettement sous la moyenne nationale des granulés en sacs ≈ 0,42 à 0,45 €/kg (relevés Selectra du 25/09/2026 et TotalEnergies du 01/10/2026), soit ≈ 410 à 439 € pour 975 kg. Le prix de référence kwattbois est peut-être promotionnel ou irréaliste : vérifiez votre prix d’achat avant de valider (risque de vente à perte)."
      },
      {
        "id": "lot-de-2-palettes-65-sacs-de-15-kg-par-palette",
        "options": {
          "Conditionnement": "Lot de 2 palettes (65 sacs de 15 kg par palette)"
        },
        "unite": {
          "singulier": "lot de 2 palettes",
          "pluriel": "lots de 2 palettes"
        },
        "prix": 454.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 464.4,
          "libelle": "464,4 € — « BoisExpress — Granulés HEIZFUXX gris EN+ A2 Palette 65 sacs x 15kg Artisan Français »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-heizfuxx-rouge",
    "name": "Granulés de bois HEIZFUXX Rouge",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : HEIZFUXX."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-heizfuxx-rouge.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois HEIZFUXX Rouge",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-main.jpg",
        "alt": "Granulés de bois dans la main",
        "illustration": true
      },
      {
        "src": "/images/catalogue/palette-paquets-filmes.jpg",
        "alt": "Palette de paquets filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "HEIZFUXX"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "ENplus A1"
      ],
      [
        "Diamètre",
        "6 mm"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "HEIZFUXX",
    "variants": [
      {
        "id": "palette-de-65-sacs-de-15-kg-975-kg",
        "options": {
          "Conditionnement": "Palette de 65 sacs de 15 kg (975 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 226.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 231.57,
          "libelle": "231,57 € — « HEIZFUXX Granulés de bois Red 6mm ENplusA1, 65 x 15kg Palette »"
        },
        "alerte": "Prix bas : 0,23 €/kg, nettement sous la moyenne nationale des granulés en sacs ≈ 0,42 à 0,45 €/kg (relevés Selectra du 25/09/2026 et TotalEnergies du 01/10/2026), soit ≈ 410 à 439 € pour 975 kg. Le prix de référence kwattbois est peut-être promotionnel ou irréaliste : vérifiez votre prix d’achat avant de valider (risque de vente à perte)."
      }
    ]
  },
  {
    "slug": "granules-de-bois-helios-100-resineux",
    "name": "Granulés de bois HELIOS 100 % résineux",
    "category": "granules",
    "essences": [
      "Résineux"
    ],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés. Essence : résineux.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés. Essence : résineux.",
      "Proposé en : palette.",
      "Marque : HELIOS."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-helios-100-resineux.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois HELIOS 100 % résineux",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-1.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sacs.jpg",
        "alt": "Sacs de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "HELIOS"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "HELIOS",
    "variants": [
      {
        "id": "palette-de-65-sacs-de-15-kg-975-kg",
        "options": {
          "Conditionnement": "Palette de 65 sacs de 15 kg (975 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 240.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 246.0,
          "libelle": "246 € — « BoisExpress — Pellet HELIOS Palette de 65 sacs de 15 kg 100% résineux Artisan Français »"
        },
        "alerte": "Prix bas : 0,25 €/kg, nettement sous la moyenne nationale des granulés en sacs ≈ 0,42 à 0,45 €/kg (relevés Selectra du 25/09/2026 et TotalEnergies du 01/10/2026), soit ≈ 410 à 439 € pour 975 kg. Le prix de référence kwattbois est peut-être promotionnel ou irréaliste : vérifiez votre prix d’achat avant de valider (risque de vente à perte)."
      }
    ]
  },
  {
    "slug": "granules-de-bois-hit",
    "name": "Granulés de bois HIT",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : HIT."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-hit.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois HIT",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-2.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sac-ouvert.jpg",
        "alt": "Sac de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "HIT"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "ENplus A1"
      ],
      [
        "Diamètre",
        "6 mm"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "HIT",
    "variants": [
      {
        "id": "palette-de-66-sacs-de-15-kg-990-kg",
        "options": {
          "Conditionnement": "Palette de 66 sacs de 15 kg (990 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 230.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 236.55,
          "libelle": "236,55 € — « HIT Granulés de bois en sac 6mm ENplusA1, 66 x 15kg Palette »"
        },
        "alerte": "Prix bas : 0,23 €/kg, nettement sous la moyenne nationale des granulés en sacs ≈ 0,42 à 0,45 €/kg (relevés Selectra du 25/09/2026 et TotalEnergies du 01/10/2026), soit ≈ 416 à 446 € pour 990 kg. Le prix de référence kwattbois est peut-être promotionnel ou irréaliste : vérifiez votre prix d’achat avant de valider (risque de vente à perte)."
      }
    ]
  },
  {
    "slug": "granules-de-bois-holz-harry",
    "name": "Granulés de bois HOLZ HARRY",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : lot, palette.",
      "Marque : HOLZ HARRY."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-holz-harry.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois HOLZ HARRY",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-3.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/palette-paquets-filmes.jpg",
        "alt": "Palette de paquets filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "HOLZ HARRY"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "HOLZ HARRY",
    "variants": [
      {
        "id": "palette",
        "options": {
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 267.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 273.9,
          "libelle": "273,9 € — « 1 Palette de granulés de HOLZ HARRY »"
        }
      },
      {
        "id": "lot-de-3-palettes",
        "options": {
          "Conditionnement": "Lot de 3 palettes"
        },
        "unite": {
          "singulier": "lot de 3 palettes",
          "pluriel": "lots de 3 palettes"
        },
        "prix": 995,
        "basePrix": "indicatif",
        "reference": {
          "prix": 1016.75,
          "libelle": "1016,75 € — « 3 Palettes de granulés HOLZ HARRY »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-hoyer",
    "name": "Granulés de bois HOYER",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : HOYER."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-hoyer.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois HOYER",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-4.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sacs.jpg",
        "alt": "Sacs de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "HOYER"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "ENplus A1"
      ],
      [
        "Diamètre",
        "6 mm"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "HOYER",
    "variants": [
      {
        "id": "palette-de-66-sacs-de-15-kg-990-kg",
        "options": {
          "Conditionnement": "Palette de 66 sacs de 15 kg (990 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 316.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 323.7,
          "libelle": "323,7 € — « HOYER Granulés de bois 6mm ENplusA1, 66 x 15kg Palette »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-hs-timber-100-resineux",
    "name": "Granulés de bois HS Timber 100 % résineux",
    "category": "granules",
    "essences": [
      "Résineux"
    ],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés. Essence : résineux.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés. Essence : résineux.",
      "Proposé en : palette.",
      "Marque : HS Timber."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-hs-timber-100-resineux.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois HS Timber 100 % résineux",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-5.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sac-ouvert.jpg",
        "alt": "Sac de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "HS Timber"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "HS Timber",
    "variants": [
      {
        "id": "palette-de-66-sacs-de-15-kg-990-kg",
        "options": {
          "Conditionnement": "Palette de 66 sacs de 15 kg (990 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 308.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 315.79,
          "libelle": "315,79 € — « BoisExpress — Pellets HS Timber Palette de 66 sacs de 15 kg 100% résineux Artisan Français »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-holz-westerwalder",
    "name": "Granulés de bois Holz Westerwalder",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : demi-palette, palette.",
      "Marque : Holz Westerwalder."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-holz-westerwalder.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Holz Westerwalder",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-6.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/palette-paquets-filmes.jpg",
        "alt": "Palette de paquets filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Holz Westerwalder"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Holz Westerwalder",
    "variants": [
      {
        "id": "demi-palette-de-36-sacs-de-15-kg-540-kg",
        "options": {
          "Conditionnement": "Demi-palette de 36 sacs de 15 kg (540 kg)"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 243.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 249.6,
          "libelle": "249,6 € — « BoisExpress — Granulés Holz Westerwalder 1/2 Palette 36 sacs de 15 kg Bois Noble »"
        }
      },
      {
        "id": "palette-de-66-sacs-de-15-kg-990-kg",
        "options": {
          "Conditionnement": "Palette de 66 sacs de 15 kg (990 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 340.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 348.0,
          "libelle": "348 € — « BoisExpress — Granulés de bois Holz Westerwalder Palette 66 sacs de 15 kg Séchage Naturel »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-lava-100-resineux",
    "name": "Granulés de bois LAVA 100 % résineux",
    "category": "granules",
    "essences": [
      "Résineux"
    ],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés. Essence : résineux.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés. Essence : résineux.",
      "Proposé en : palette.",
      "Marque : LAVA."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-lava-100-resineux.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois LAVA 100 % résineux",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-main.jpg",
        "alt": "Granulés de bois dans la main",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sacs.jpg",
        "alt": "Sacs de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "LAVA"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "LAVA",
    "variants": [
      {
        "id": "palette-de-65-sacs-de-15-kg-975-kg",
        "options": {
          "Conditionnement": "Palette de 65 sacs de 15 kg (975 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 357.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 366.0,
          "libelle": "366 € — « BoisExpress — Pellet LAVA 100% résineux Palette de 65 sacs de 15 kg Tradition Bois »"
        }
      }
    ],
    "statut": "a-verifier",
    "noteStatut": "Marque non confirmée par une recherche publique au 02/10/2026 (aucun fabricant ni revendeur établi trouvé sous ce nom). À publier seulement si votre fournisseur vous confirme la marque, la référence et l'approvisionnement."
  },
  {
    "slug": "granules-de-bois-le-petit-scieur-francais-100-resineux",
    "name": "Granulés de bois Le petit scieur français 100 % résineux",
    "category": "granules",
    "essences": [
      "Résineux"
    ],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés. Essence : résineux.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés. Essence : résineux.",
      "Proposé en : palette.",
      "Marque : Le petit scieur français."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-le-petit-scieur-francais-100-resineux.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Le petit scieur français 100 % résineux",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-1.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sac-ouvert.jpg",
        "alt": "Sac de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Le petit scieur français"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Le petit scieur français",
    "variants": [
      {
        "id": "palette-de-65-sacs-de-15-kg-975-kg",
        "options": {
          "Conditionnement": "Palette de 65 sacs de 15 kg (975 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 381.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 390.0,
          "libelle": "390 € — « BoisExpress — Pellet Le petit scieur français 65 sacs de 15 kg 100% résineux Forêt Françai »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-limouzi",
    "name": "Granulés de bois Limouzi",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : Limouzi."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-limouzi.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Limouzi",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-2.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/palette-paquets-filmes.jpg",
        "alt": "Palette de paquets filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Limouzi"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Limouzi",
    "variants": [
      {
        "id": "palette-de-66-sacs-de-15-kg-990-kg",
        "options": {
          "Conditionnement": "Palette de 66 sacs de 15 kg (990 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 269.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 276.0,
          "libelle": "276 € — « BoisExpress — Granulés de bois Limouzi 66 sacs de 15 Kg Artisan Français »"
        },
        "alerte": "Prix bas : 0,27 €/kg, nettement sous la moyenne nationale des granulés en sacs ≈ 0,42 à 0,45 €/kg (relevés Selectra du 25/09/2026 et TotalEnergies du 01/10/2026), soit ≈ 416 à 446 € pour 990 kg. Le prix de référence kwattbois est peut-être promotionnel ou irréaliste : vérifiez votre prix d’achat avant de valider (risque de vente à perte)."
      }
    ]
  },
  {
    "slug": "granules-de-bois-magic-polar",
    "name": "Granulés de bois MAGIC POLAR",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : MAGIC POLAR."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-magic-polar.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois MAGIC POLAR",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-3.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sacs.jpg",
        "alt": "Sacs de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "MAGIC POLAR"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "ENplus A1"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "MAGIC POLAR",
    "variants": [
      {
        "id": "palette-de-70-sacs-de-15-kg-1050-kg",
        "options": {
          "Conditionnement": "Palette de 70 sacs de 15 kg (1050 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 363.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 372.0,
          "libelle": "372 € — « BoisExpress — Pellet MAGIC POLAR Palette de 70 sacs de 15kg EN Plus A1 Forêt Française »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-moulin-bois-energie",
    "name": "Granulés de bois Moulin Bois Energie",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : Moulin Bois Energie."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-moulin-bois-energie.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Moulin Bois Energie",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-4.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sac-ouvert.jpg",
        "alt": "Sac de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Moulin Bois Energie"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Moulin Bois Energie",
    "variants": [
      {
        "id": "palette-de-65-sacs-de-15-kg-975-kg",
        "options": {
          "Conditionnement": "Palette de 65 sacs de 15 kg (975 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 239.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 244.8,
          "libelle": "244,8 € — « BoisExpress — Pellet Moulin Bois Energie 65 sacs de 15 kg Tradition Bois »"
        },
        "alerte": "Prix bas : 0,25 €/kg, nettement sous la moyenne nationale des granulés en sacs ≈ 0,42 à 0,45 €/kg (relevés Selectra du 25/09/2026 et TotalEnergies du 01/10/2026), soit ≈ 410 à 439 € pour 975 kg. Le prix de référence kwattbois est peut-être promotionnel ou irréaliste : vérifiez votre prix d’achat avant de valider (risque de vente à perte)."
      }
    ]
  },
  {
    "slug": "granules-de-bois-natural-energie",
    "name": "Granulés de bois Natural Energie",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : Natural Energie."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-natural-energie.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Natural Energie",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-5.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/palette-paquets-filmes.jpg",
        "alt": "Palette de paquets filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Natural Energie"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Natural Energie",
    "variants": [
      {
        "id": "palette-de-70-sacs-de-15-kg-1050-kg",
        "options": {
          "Conditionnement": "Palette de 70 sacs de 15 kg (1050 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 442.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 452.4,
          "libelle": "452,4 € — « BoisExpress — Pellets Natural Energie Palette de 70 sacs de 15 kg Artisan Français »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-naturkraft",
    "name": "Granulés de bois Naturkraft",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : Naturkraft."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-naturkraft.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Naturkraft",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-6.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sacs.jpg",
        "alt": "Sacs de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Naturkraft"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Naturkraft",
    "variants": [
      {
        "id": "palette",
        "options": {
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 334.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 342.0,
          "libelle": "342 € — « BoisExpress — Granulés de bois Naturkraft Palette de 66 sacs Tradition Bois »"
        }
      }
    ],
    "statut": "a-verifier",
    "noteStatut": "Marque non confirmée par une recherche publique au 02/10/2026 (aucun fabricant ni revendeur établi trouvé sous ce nom). À publier seulement si votre fournisseur vous confirme la marque, la référence et l'approvisionnement."
  },
  {
    "slug": "granules-de-bois-olimp",
    "name": "Granulés de bois OLIMP",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : OLIMP."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-olimp.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois OLIMP",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-main.jpg",
        "alt": "Granulés de bois dans la main",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sac-ouvert.jpg",
        "alt": "Sac de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "OLIMP"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "ENplus A1, DINplus"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "OLIMP",
    "variants": [
      {
        "id": "palette-contenu-a-confirmer",
        "options": {
          "Conditionnement": "Palette (contenu à confirmer)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 351.9,
        "basePrix": "estime",
        "hypothese": "L’intitulé de la référence indique 15 sacs (225 kg) pour 360 €, soit 1,60 €/kg, incohérent avec le marché (≈ 0,25 à 0,45 €/kg). Hypothèse : palette complète ; contenu exact à confirmer avant mise en vente.",
        "reference": {
          "prix": 360.0,
          "libelle": "360 € — « BoisExpress — Granulés OLIMP Din+, EN+A1 Palette de 15 sacs de 15kg Forêt Française »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-piks",
    "name": "Granulés de bois PIKS",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : PIKS."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-piks.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois PIKS",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-1.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/palette-paquets-filmes.jpg",
        "alt": "Palette de paquets filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "PIKS"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "DINplus"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "PIKS",
    "variants": [
      {
        "id": "palette-990-kg",
        "options": {
          "Conditionnement": "Palette (990 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 413.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 422.4,
          "libelle": "422,4 € — « BoisExpress — Granulés PIKS Palette de 66 sacs (990kg) certifié Din Plus Séchage Naturel »"
        }
      }
    ],
    "statut": "a-verifier",
    "noteStatut": "Marque non confirmée par une recherche publique au 02/10/2026 (aucun fabricant ni revendeur établi trouvé sous ce nom). À publier seulement si votre fournisseur vous confirme la marque, la référence et l'approvisionnement."
  },
  {
    "slug": "granules-de-bois-pellini",
    "name": "Granulés de bois Pellini",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : Pellini."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-pellini.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Pellini",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-2.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sacs.jpg",
        "alt": "Sacs de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Pellini"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "ENplus A1"
      ],
      [
        "Diamètre",
        "6 mm"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Pellini",
    "variants": [
      {
        "id": "palette-de-66-sacs-de-15-kg-990-kg",
        "options": {
          "Conditionnement": "Palette de 66 sacs de 15 kg (990 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 230.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 236.55,
          "libelle": "236,55 € — « PELLINI Granulés de bois 6mm ENplusA1, 66 x 15kg Palette »"
        },
        "alerte": "Prix bas : 0,23 €/kg, nettement sous la moyenne nationale des granulés en sacs ≈ 0,42 à 0,45 €/kg (relevés Selectra du 25/09/2026 et TotalEnergies du 01/10/2026), soit ≈ 416 à 446 € pour 990 kg. Le prix de référence kwattbois est peut-être promotionnel ou irréaliste : vérifiez votre prix d’achat avant de valider (risque de vente à perte)."
      },
      {
        "id": "palette-de-66-sacs-de-10-kg-660-kg",
        "options": {
          "Conditionnement": "Palette de 66 sacs de 10 kg (660 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 293.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 300.61,
          "libelle": "300,61 € — « BoisExpress — Pellets Pellini EN+ A1 Palette de 66 sacs de 10 kg Artisan Français »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-piveteau",
    "name": "Granulés de bois Piveteau",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : lot, palette.",
      "Marque : Piveteau."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-piveteau.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Piveteau",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-3.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sac-ouvert.jpg",
        "alt": "Sac de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Piveteau"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Piveteau",
    "variants": [
      {
        "id": "palette",
        "options": {
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 300.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 307.1,
          "libelle": "307,1 € — « 1 Palette de granulés PIVETEAU HP+ »"
        }
      },
      {
        "id": "palette-de-72-sacs-de-15-kg-1080-kg",
        "options": {
          "Conditionnement": "Palette de 72 sacs de 15 kg (1080 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 398.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 408.0,
          "libelle": "408 € — « BoisExpress — Granulés de bois Piveteau HP+ 72 Sacs de 15kg Tradition Bois »"
        }
      },
      {
        "id": "lot-de-3-palettes",
        "options": {
          "Conditionnement": "Lot de 3 palettes"
        },
        "unite": {
          "singulier": "lot de 3 palettes",
          "pluriel": "lots de 3 palettes"
        },
        "prix": 804.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 821.7,
          "libelle": "821,7 € — « 3 Palettes de granulés PIVETEAU HP+ »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-rekord",
    "name": "Granulés de bois REKORD",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : REKORD."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-rekord.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois REKORD",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-4.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/palette-paquets-filmes.jpg",
        "alt": "Palette de paquets filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "REKORD"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "ENplus A1"
      ],
      [
        "Diamètre",
        "6 mm"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "REKORD",
    "variants": [
      {
        "id": "palette-de-66-sacs-de-15-kg-990-kg",
        "options": {
          "Conditionnement": "Palette de 66 sacs de 15 kg (990 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 193.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 198.37,
          "libelle": "198,37 € — « REKORD Premium Granulés de Bois 6mm ENplusA1, 66 x 15kg Palette »"
        },
        "alerte": "Prix bas : 0,20 €/kg, nettement sous la moyenne nationale des granulés en sacs ≈ 0,42 à 0,45 €/kg (relevés Selectra du 25/09/2026 et TotalEnergies du 01/10/2026), soit ≈ 416 à 446 € pour 990 kg. Le prix de référence kwattbois est peut-être promotionnel ou irréaliste : vérifiez votre prix d’achat avant de valider (risque de vente à perte)."
      }
    ]
  },
  {
    "slug": "granules-de-bois-rezult",
    "name": "Granulés de bois REZULT",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : REZULT."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-rezult.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois REZULT",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-5.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sacs.jpg",
        "alt": "Sacs de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "REZULT"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "ENplus A1"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "REZULT",
    "variants": [
      {
        "id": "palette-de-70-sacs-de-15-kg-1050-kg",
        "options": {
          "Conditionnement": "Palette de 70 sacs de 15 kg (1050 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 404.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 414.17,
          "libelle": "414,17 € — « Granulés de bois Premium REZULT ENplusA1, Palette 70 x 15kg »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-rochefort-100-resineux",
    "name": "Granulés de bois Rochefort 100 % résineux",
    "category": "granules",
    "essences": [
      "Résineux"
    ],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés. Essence : résineux.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés. Essence : résineux.",
      "Proposé en : palette.",
      "Marque : Rochefort."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-rochefort-100-resineux.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Rochefort 100 % résineux",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-6.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sac-ouvert.jpg",
        "alt": "Sac de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Rochefort"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Rochefort",
    "variants": [
      {
        "id": "palette-de-65-sacs-de-15-kg-975-kg",
        "options": {
          "Conditionnement": "Palette de 65 sacs de 15 kg (975 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 363.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 372.0,
          "libelle": "372 € — « BoisExpress — Pellet Rochefort Palette de 65 sacs de 15kg 100% résineux Séchage Naturel »"
        }
      }
    ],
    "statut": "a-verifier",
    "noteStatut": "Marque non confirmée par une recherche publique au 02/10/2026 (aucun fabricant ni revendeur établi trouvé sous ce nom). À publier seulement si votre fournisseur vous confirme la marque, la référence et l'approvisionnement. « Rochefort » ne renvoie qu'à des noms de communes dans les résultats."
  },
  {
    "slug": "granules-de-bois-saxonia",
    "name": "Granulés de bois Saxonia",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : Saxonia."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-saxonia.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Saxonia",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-main.jpg",
        "alt": "Granulés de bois dans la main",
        "illustration": true
      },
      {
        "src": "/images/catalogue/palette-paquets-filmes.jpg",
        "alt": "Palette de paquets filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Saxonia"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "ENplus A1"
      ],
      [
        "Diamètre",
        "6 mm"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Saxonia",
    "variants": [
      {
        "id": "palette-de-66-sacs-de-15-kg-990-kg",
        "options": {
          "Conditionnement": "Palette de 66 sacs de 15 kg (990 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 282.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 289.67,
          "libelle": "289,67 € — « Pellets Saxonia 6mm ENplusA1, 66 x 15kg Palette »"
        },
        "alerte": "Prix bas : 0,29 €/kg, nettement sous la moyenne nationale des granulés en sacs ≈ 0,42 à 0,45 €/kg (relevés Selectra du 25/09/2026 et TotalEnergies du 01/10/2026), soit ≈ 416 à 446 € pour 990 kg. Le prix de référence kwattbois est peut-être promotionnel ou irréaliste : vérifiez votre prix d’achat avant de valider (risque de vente à perte)."
      }
    ]
  },
  {
    "slug": "granules-de-bois-starforest-100-resineux",
    "name": "Granulés de bois Starforest 100 % résineux",
    "category": "granules",
    "essences": [
      "Résineux"
    ],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés. Essence : résineux.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés. Essence : résineux.",
      "Proposé en : palette.",
      "Marque : Starforest."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-starforest-100-resineux.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Starforest 100 % résineux",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-1.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sacs.jpg",
        "alt": "Sacs de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Starforest"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Starforest",
    "variants": [
      {
        "id": "palette-de-70-sacs-de-15-kg-1050-kg",
        "options": {
          "Conditionnement": "Palette de 70 sacs de 15 kg (1050 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 253.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 259.51,
          "libelle": "259,51 € — « BoisExpress — Pellet Starforest 100% résineux 70 sacs de 15 kg Séchage Naturel »"
        },
        "alerte": "Prix bas : 0,24 €/kg, nettement sous la moyenne nationale des granulés en sacs ≈ 0,42 à 0,45 €/kg (relevés Selectra du 25/09/2026 et TotalEnergies du 01/10/2026), soit ≈ 441 à 472 € pour 1050 kg. Le prix de référence kwattbois est peut-être promotionnel ou irréaliste : vérifiez votre prix d’achat avant de valider (risque de vente à perte)."
      }
    ]
  },
  {
    "slug": "granules-de-bois-sunpower",
    "name": "Granulés de bois SunPower",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : SunPower."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-sunpower.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois SunPower",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-2.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sac-ouvert.jpg",
        "alt": "Sac de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "SunPower"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "SunPower",
    "variants": [
      {
        "id": "palette-de-70-sacs-de-15-kg-1050-kg",
        "options": {
          "Conditionnement": "Palette de 70 sacs de 15 kg (1050 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 395.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 404.65,
          "libelle": "404,65 € — « BoisExpress — Pellet SunPower Palette de 70 sacs de 15 kg Bois Noble »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-thuringer-hd",
    "name": "Granulés de bois THÜRINGER HD",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : THÜRINGER HD."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-thuringer-hd.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois THÜRINGER HD",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-3.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/palette-paquets-filmes.jpg",
        "alt": "Palette de paquets filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "THÜRINGER HD"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "ENplus A1"
      ],
      [
        "Diamètre",
        "6 mm"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "THÜRINGER HD",
    "variants": [
      {
        "id": "palette-de-65-sacs-de-15-kg-975-kg",
        "options": {
          "Conditionnement": "Palette de 65 sacs de 15 kg (975 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 242.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 248.17,
          "libelle": "248,17 € — « Granulés de bois THÜRINGER HD 6mm ENplus A1, palette de 65 sacs de 15 kg »"
        },
        "alerte": "Prix bas : 0,25 €/kg, nettement sous la moyenne nationale des granulés en sacs ≈ 0,42 à 0,45 €/kg (relevés Selectra du 25/09/2026 et TotalEnergies du 01/10/2026), soit ≈ 410 à 439 € pour 975 kg. Le prix de référence kwattbois est peut-être promotionnel ou irréaliste : vérifiez votre prix d’achat avant de valider (risque de vente à perte)."
      }
    ]
  },
  {
    "slug": "granules-de-bois-totalenergies",
    "name": "Granulés de bois TotalEnergies",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : lot, palette.",
      "Marque : TotalEnergies."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-totalenergies.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois TotalEnergies",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-4.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sacs.jpg",
        "alt": "Sacs de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "TotalEnergies"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "TotalEnergies",
    "variants": [
      {
        "id": "palette",
        "options": {
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 320.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 327.85,
          "libelle": "327,85 € — « 1 Palette de Pellets TOTALENERGIES »"
        }
      },
      {
        "id": "palette-de-66-sacs-de-15-kg-990-kg",
        "options": {
          "Conditionnement": "Palette de 66 sacs de 15 kg (990 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 334.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 342.0,
          "libelle": "342 € — « BoisExpress — Pellet Total Premium Palette de 66 sacs de 15 kg Artisan Français »"
        }
      },
      {
        "id": "lot-de-3-palettes",
        "options": {
          "Conditionnement": "Lot de 3 palettes"
        },
        "unite": {
          "singulier": "lot de 3 palettes",
          "pluriel": "lots de 3 palettes"
        },
        "prix": 1035,
        "basePrix": "indicatif",
        "reference": {
          "prix": 1058.25,
          "libelle": "1058,25 € — « 3 Palettes de granulés TOTALENERGIES »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-verba",
    "name": "Granulés de bois VERBA",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : camion complet, lot, palette.",
      "Marque : VERBA."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-verba.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois VERBA",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-5.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sac-ouvert.jpg",
        "alt": "Sac de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "VERBA"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "VERBA",
    "variants": [
      {
        "id": "palette",
        "options": {
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 226.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 232.4,
          "libelle": "232,4 € — « 1 Palette de Granulés VERBA »"
        }
      },
      {
        "id": "lot-de-3-palettes",
        "options": {
          "Conditionnement": "Lot de 3 palettes"
        },
        "unite": {
          "singulier": "lot de 3 palettes",
          "pluriel": "lots de 3 palettes"
        },
        "prix": 723.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 738.7,
          "libelle": "738,7 € — « 3 Palettes de Pellets VERBA »"
        }
      },
      {
        "id": "camion-complet",
        "options": {
          "Conditionnement": "Camion complet"
        },
        "unite": {
          "singulier": "camion",
          "pluriel": "camions"
        },
        "prix": 4650,
        "basePrix": "indicatif",
        "reference": {
          "prix": 4747.6,
          "libelle": "4747,6 € — « Pellets VERBA – Chargement complet de camion »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-valboval",
    "name": "Granulés de bois Valboval",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : Valboval."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-valboval.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Valboval",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-6.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/palette-paquets-filmes.jpg",
        "alt": "Palette de paquets filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Valboval"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Valboval",
    "variants": [
      {
        "id": "palette-de-65-sacs-de-15-kg-975-kg",
        "options": {
          "Conditionnement": "Palette de 65 sacs de 15 kg (975 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 370.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 379.2,
          "libelle": "379,2 € — « BoisExpress — Pellet Valboval Palette de 65 sacs de 15 kg Forêt Française »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-van-roje",
    "name": "Granulés de bois Van Roje",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : palette.",
      "Marque : Van Roje."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-van-roje.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Van Roje",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-main.jpg",
        "alt": "Granulés de bois dans la main",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sacs.jpg",
        "alt": "Sacs de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Van Roje"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Van Roje",
    "variants": [
      {
        "id": "palette-de-65-sacs-de-15-kg-975-kg",
        "options": {
          "Conditionnement": "Palette de 65 sacs de 15 kg (975 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 323.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 331.2,
          "libelle": "331,2 € — « BoisExpress — Pellet Van Roje Palette de 65 sacs de 15 kg Forêt Française »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-woodstock",
    "name": "Granulés de bois Woodstock",
    "category": "granules",
    "essences": [],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés.",
      "Proposé en : camion complet, lot, palette.",
      "Marque : Woodstock."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-woodstock.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois Woodstock",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-1.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-sac-ouvert.jpg",
        "alt": "Sac de granulés de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Woodstock"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Woodstock",
    "variants": [
      {
        "id": "palette-de-78-sacs-de-15-kg-1170-kg",
        "options": {
          "Conditionnement": "Palette de 78 sacs de 15 kg (1170 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 445.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 456.0,
          "libelle": "456 € — « BoisExpress — Granulés de bois Woodstock 78 sacs de 15 kg Artisan Français »"
        }
      },
      {
        "id": "lot-de-3-palettes",
        "options": {
          "Conditionnement": "Lot de 3 palettes"
        },
        "unite": {
          "singulier": "lot de 3 palettes",
          "pluriel": "lots de 3 palettes"
        },
        "prix": 816.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 834.15,
          "libelle": "834,15 € — « 3 Palettes de granulés WOODSTOCK »"
        }
      },
      {
        "id": "camion-complet",
        "options": {
          "Conditionnement": "Camion complet"
        },
        "unite": {
          "singulier": "camion",
          "pluriel": "camions"
        },
        "prix": 4875,
        "basePrix": "indicatif",
        "reference": {
          "prix": 4975.85,
          "libelle": "4975,85 € — « Pellets WOODSTOCK – Camion complet »"
        }
      }
    ]
  },
  {
    "slug": "granules-de-bois-de-chene-bois-dur-6-mm",
    "name": "Granulés de bois de chêne (bois dur) 6 mm",
    "category": "granules",
    "essences": [
      "Chêne",
      "Feuillus durs"
    ],
    "shortDescription": "Granulés de bois pour poêles et chaudières à granulés. Essence : chêne, feuillus durs.",
    "description": [
      "Granulés de bois pour poêles et chaudières à granulés. Essence : chêne, feuillus durs.",
      "Proposé en : palette."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/granules-de-bois-de-chene-bois-dur-6-mm.jpg",
        "alt": "Visuel du conditionnement — Granulés de bois de chêne (bois dur) 6 mm",
        "illustration": true
      },
      {
        "src": "/images/catalogue/granules-2.jpg",
        "alt": "Granulés de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/palette-paquets-filmes.jpg",
        "alt": "Palette de paquets filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Diamètre",
        "6 mm"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "palette-de-65-sacs-de-15-kg-975-kg",
        "options": {
          "Conditionnement": "Palette de 65 sacs de 15 kg (975 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 404.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 414.17,
          "libelle": "414,17 € — « Granulés de bois bois dur chêne 6mm, palette de 65 x 15kg »"
        }
      }
    ]
  },
  {
    "slug": "bloc-de-cheminee-giant-flames-fsc",
    "name": "Bloc de cheminée Giant Flames (FSC)",
    "category": "briquettes",
    "essences": [],
    "shortDescription": "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre.",
    "description": [
      "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre.",
      "Proposé en : bloc.",
      "Marque : Giant Flames."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/bloc-de-cheminee-giant-flames-fsc.jpg",
        "alt": "Visuel du conditionnement — Bloc de cheminée Giant Flames (FSC)",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-rondes.jpg",
        "alt": "Briquettes rondes percées",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-palette-filmee.jpg",
        "alt": "Palette de paquets de briquettes filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Giant Flames"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "FSC"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Giant Flames",
    "variants": [
      {
        "id": "bloc-de-700-g",
        "options": {
          "Conditionnement": "Bloc de 700 g"
        },
        "unite": {
          "singulier": "bloc",
          "pluriel": "blocs"
        },
        "prix": 3.99,
        "basePrix": "indicatif",
        "reference": {
          "prix": 4.15,
          "libelle": "4,15 € — « Giant Flames Bloc de cheminée FSC 700gr »"
        }
      }
    ]
  },
  {
    "slug": "bois-densifie-confort-feuillus-durs-et-resineux",
    "name": "Bois densifié Confort — feuillus durs et résineux",
    "category": "briquettes",
    "essences": [
      "Résineux",
      "Feuillus"
    ],
    "shortDescription": "Bois densifié : sciure compressée à combustion longue, pratique à stocker. Essence : résineux, feuillus.",
    "description": [
      "Bois densifié : sciure compressée à combustion longue, pratique à stocker. Essence : résineux, feuillus.",
      "Proposé en : palette."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/bois-densifie-confort-feuillus-durs-et-resineux.jpg",
        "alt": "Visuel du conditionnement — Bois densifié Confort — feuillus durs et résineux",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-octogonales-tas.jpg",
        "alt": "Briquettes octogonales",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-feu.jpg",
        "alt": "Briquettes en combustion",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "palette-960-kg",
        "options": {
          "Conditionnement": "Palette (960 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 381.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 390.0,
          "libelle": "390 € — « BoisExpress — Bois densifié Confort Palette de 960 Kg Feuillus durs et résineux Séchage Na »"
        }
      }
    ]
  },
  {
    "slug": "bois-densifie-buches-de-nuit",
    "name": "Bois densifié — bûches de nuit",
    "category": "briquettes",
    "essences": [],
    "shortDescription": "Bois densifié : sciure compressée à combustion longue, pratique à stocker.",
    "description": [
      "Bois densifié : sciure compressée à combustion longue, pratique à stocker.",
      "Proposé en : demi-palette, palette."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/bois-densifie-buches-de-nuit.jpg",
        "alt": "Visuel du conditionnement — Bois densifié — bûches de nuit",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-octogonales-tas.jpg",
        "alt": "Briquettes octogonales",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquette-octogonale.jpg",
        "alt": "Briquette de bois octogonale",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "demi-palette-480-kg",
        "options": {
          "Conditionnement": "Demi-palette (480 kg)"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 119.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 122.4,
          "libelle": "122,4 € — « BoisExpress — Bois densifié Bûches de nuit 1/2 palette de 480 kg Bois Noble »"
        }
      },
      {
        "id": "palette-960-kg",
        "options": {
          "Conditionnement": "Palette (960 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 274.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 280.8,
          "libelle": "280,8 € — « BoisExpress — Bois densifié Bûches de nuit Palette de 960 kg Bois Noble »"
        }
      }
    ]
  },
  {
    "slug": "bois-densifie-feuillus",
    "name": "Bois densifié — feuillus",
    "category": "briquettes",
    "essences": [
      "Feuillus"
    ],
    "shortDescription": "Bois densifié : sciure compressée à combustion longue, pratique à stocker. Essence : feuillus.",
    "description": [
      "Bois densifié : sciure compressée à combustion longue, pratique à stocker. Essence : feuillus.",
      "Proposé en : palette."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/bois-densifie-feuillus.jpg",
        "alt": "Visuel du conditionnement — Bois densifié — feuillus",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-palette-filmee.jpg",
        "alt": "Palette de paquets de briquettes filmés",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-feu.jpg",
        "alt": "Briquettes en combustion",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "palette",
        "options": {
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 393.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 402.0,
          "libelle": "402 € — « BoisExpress — Bois densifié Feuillus Palette de 1 tonne Tradition Bois »"
        }
      }
    ]
  },
  {
    "slug": "bois-densifie-resineux",
    "name": "Bois densifié — résineux",
    "category": "briquettes",
    "essences": [
      "Résineux"
    ],
    "shortDescription": "Bois densifié : sciure compressée à combustion longue, pratique à stocker. Essence : résineux.",
    "description": [
      "Bois densifié : sciure compressée à combustion longue, pratique à stocker. Essence : résineux.",
      "Proposé en : palette."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/bois-densifie-resineux.jpg",
        "alt": "Visuel du conditionnement — Bois densifié — résineux",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-octogonales-tas.jpg",
        "alt": "Briquettes octogonales",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquette-octogonale.jpg",
        "alt": "Briquette de bois octogonale",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "palette-960-kg",
        "options": {
          "Conditionnement": "Palette (960 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 381.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 390.0,
          "libelle": "390 € — « BoisExpress — Bois densifié 100% résineux Palette de 960 kg Tradition Bois »"
        }
      }
    ]
  },
  {
    "slug": "bois-densifie-resineux-et-feuillus",
    "name": "Bois densifié — résineux et feuillus",
    "category": "briquettes",
    "essences": [
      "Résineux",
      "Feuillus"
    ],
    "shortDescription": "Bois densifié : sciure compressée à combustion longue, pratique à stocker. Essence : résineux, feuillus.",
    "description": [
      "Bois densifié : sciure compressée à combustion longue, pratique à stocker. Essence : résineux, feuillus.",
      "Proposé en : demi-palette, palette."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/bois-densifie-resineux-et-feuillus.jpg",
        "alt": "Visuel du conditionnement — Bois densifié — résineux et feuillus",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-palette-filmee.jpg",
        "alt": "Palette de paquets de briquettes filmés",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-feu.jpg",
        "alt": "Briquettes en combustion",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "demi-palette-480-kg",
        "options": {
          "Conditionnement": "Demi-palette (480 kg)"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 174.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 178.8,
          "libelle": "178,8 € — « BoisExpress — Bois densifié Feuillus + résineux 1/2 palette de 480 kg Forêt Française »"
        }
      },
      {
        "id": "palette-960-kg",
        "options": {
          "Conditionnement": "Palette (960 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 246.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 252.0,
          "libelle": "252 € — « BoisExpress — Bois densifié Feuillus + résineux Palette de 960 kg Bois Noble »"
        }
      }
    ]
  },
  {
    "slug": "briquettes-de-bois",
    "name": "Briquettes de bois",
    "category": "briquettes",
    "essences": [],
    "shortDescription": "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre.",
    "description": [
      "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre.",
      "Proposé en : palette."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/briquettes-de-bois.jpg",
        "alt": "Visuel du conditionnement — Briquettes de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquette-octogonale.jpg",
        "alt": "Briquette de bois octogonale",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-octogonales-botte.jpg",
        "alt": "Briquettes octogonales percées en botte",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "palette",
        "options": {
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 380.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 389.27,
          "libelle": "389,27 € — « Palette de briquettes de bois + 5 sacs de petit bois d'allumage gratuits »"
        }
      }
    ]
  },
  {
    "slug": "briquettes-de-bois-giant-flames",
    "name": "Briquettes de bois Giant Flames",
    "category": "briquettes",
    "essences": [],
    "shortDescription": "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre.",
    "description": [
      "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre.",
      "Proposé en : demi-palette, palette.",
      "Marque : Giant Flames."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/briquettes-de-bois-giant-flames.jpg",
        "alt": "Visuel du conditionnement — Briquettes de bois Giant Flames",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-octogonales-tas.jpg",
        "alt": "Briquettes octogonales",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-octogonales-botte.jpg",
        "alt": "Briquettes octogonales percées en botte",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Giant Flames"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Giant Flames",
    "variants": [
      {
        "id": "demi-palette-de-95-paquets-de-4-8-kg-456-kg",
        "options": {
          "Conditionnement": "Demi-palette de 95 paquets de 4,8 kg (456 kg)"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 226.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 231.57,
          "libelle": "231,57 € — « Briquettes de bois Giant Flames 95 paquets x 4,8 kg (456 kg) »"
        }
      },
      {
        "id": "palette-de-190-paquets-de-4-8-kg-912-kg",
        "options": {
          "Conditionnement": "Palette de 190 paquets de 4,8 kg (912 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 380.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 389.27,
          "libelle": "389,27 € — « Briquettes de bois Giant Flames 190 paquets x 4,8 kg (912 kg) »"
        }
      }
    ]
  },
  {
    "slug": "briquettes-de-bois-pini-kay",
    "name": "Briquettes de bois Pini Kay",
    "category": "briquettes",
    "essences": [],
    "shortDescription": "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre.",
    "description": [
      "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre.",
      "Proposé en : demi-palette, palette.",
      "Marque : Pini Kay."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/briquettes-de-bois-pini-kay.jpg",
        "alt": "Visuel du conditionnement — Briquettes de bois Pini Kay",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-octogonales-botte.jpg",
        "alt": "Briquettes octogonales percées en botte",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquette-octogonale-detail.jpg",
        "alt": "Briquette de bois compressé",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Pini Kay"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Pini Kay",
    "variants": [
      {
        "id": "demi-palette-de-48-sacs-de-10-kg-480-kg-origine-pa",
        "options": {
          "Conditionnement": "Demi-palette de 48 sacs de 10 kg (480 kg) — origine Pays-Bas"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 250.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 256.47,
          "libelle": "256,47 € — « Briquettes Pini Kay (NL) demi-palette 48 sacs x 10 kg (480 kg) »"
        }
      },
      {
        "id": "demi-palette-de-48-sacs-de-10-kg-480-kg-import",
        "options": {
          "Conditionnement": "Demi-palette de 48 sacs de 10 kg (480 kg) — import"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 266.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 273.07,
          "libelle": "273,07 € — « Briquettes Pini Kay (Import) Sacs 48 x 10 kg (480 kg) »"
        }
      },
      {
        "id": "palette-de-96-sacs-de-10-kg-960-kg-origine-pays-ba",
        "options": {
          "Conditionnement": "Palette de 96 sacs de 10 kg (960 kg) — origine Pays-Bas"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 445.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 455.67,
          "libelle": "455,67 € — « Briquettes Pini Kay (NL) Palette 96 sacs x 10 kg (960 kg) »"
        }
      },
      {
        "id": "palette-de-96-sacs-de-10-kg-960-kg-import",
        "options": {
          "Conditionnement": "Palette de 96 sacs de 10 kg (960 kg) — import"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 478.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 488.87,
          "libelle": "488,87 € — « Briquettes Pini Kay (Import) Palette 96 sacs x 10 kg (960 kg) »"
        }
      }
    ]
  },
  {
    "slug": "briquettes-de-bois-ruf",
    "name": "Briquettes de bois RUF",
    "category": "briquettes",
    "essences": [],
    "shortDescription": "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre.",
    "description": [
      "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre.",
      "Proposé en : demi-palette, palette.",
      "Marque : RUF."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/briquettes-de-bois-ruf.jpg",
        "alt": "Visuel du conditionnement — Briquettes de bois RUF",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-palette-filmee.jpg",
        "alt": "Palette de paquets de briquettes filmés",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-feu.jpg",
        "alt": "Briquettes en combustion",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "RUF"
      ],
      [
        "Humidité annoncée par le fournisseur",
        "< 10 %"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "RUF",
    "variants": [
      {
        "id": "demi-palette-de-48-paquets-de-10-kg-480-kg",
        "options": {
          "Conditionnement": "Demi-palette de 48 paquets de 10 kg (480 kg)"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 242.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 248.17,
          "libelle": "248,17 € — « Briquettes RUF 48 paquets x 10 kg (480 kg) »"
        }
      },
      {
        "id": "palette-de-96-paquets-de-10-kg-960-kg",
        "options": {
          "Conditionnement": "Palette de 96 paquets de 10 kg (960 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 421.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 430.77,
          "libelle": "430,77 € — « Briquettes RUF Palette 96 paquets x 10 kg (960 kg) »"
        }
      }
    ]
  },
  {
    "slug": "briquettes-de-bois-dur-rondes-nestro",
    "name": "Briquettes de bois dur rondes NESTRO",
    "category": "briquettes",
    "essences": [
      "Feuillus durs"
    ],
    "shortDescription": "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre. Essence : feuillus durs.",
    "description": [
      "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre. Essence : feuillus durs.",
      "Proposé en : demi-palette.",
      "Marque : NESTRO."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/briquettes-de-bois-dur-rondes-nestro.jpg",
        "alt": "Visuel du conditionnement — Briquettes de bois dur rondes NESTRO",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquette-ronde.jpg",
        "alt": "Briquette ronde percée",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-palette-filmee.jpg",
        "alt": "Palette de paquets de briquettes filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "NESTRO"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "NESTRO",
    "variants": [
      {
        "id": "demi-palette-480-kg",
        "options": {
          "Conditionnement": "Demi-palette (480 kg)"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 323.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 331.17,
          "libelle": "331,17 € — « Briquettes de bois dur NESTRO rondes sans trou Premium 480kg »"
        }
      }
    ]
  },
  {
    "slug": "briquettes-de-bois-melange-ruf",
    "name": "Briquettes de bois mélangé RUF",
    "category": "briquettes",
    "essences": [],
    "shortDescription": "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre.",
    "description": [
      "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre.",
      "Proposé en : demi-palette.",
      "Marque : RUF."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/briquettes-de-bois-melange-ruf.jpg",
        "alt": "Visuel du conditionnement — Briquettes de bois mélangé RUF",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-palette-filmee.jpg",
        "alt": "Palette de paquets de briquettes filmés",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-feu.jpg",
        "alt": "Briquettes en combustion",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "RUF"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "RUF",
    "variants": [
      {
        "id": "demi-palette-480-kg",
        "options": {
          "Conditionnement": "Demi-palette (480 kg)"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 307.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 314.57,
          "libelle": "314,57 € — « Briquettes de bois mélangé RUF 480kg »"
        }
      }
    ]
  },
  {
    "slug": "briquettes-de-bois-tendre-rondes-nestro",
    "name": "Briquettes de bois tendre rondes NESTRO",
    "category": "briquettes",
    "essences": [
      "Bois tendre"
    ],
    "shortDescription": "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre. Essence : bois tendre.",
    "description": [
      "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre. Essence : bois tendre.",
      "Proposé en : palette.",
      "Marque : NESTRO."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/briquettes-de-bois-tendre-rondes-nestro.jpg",
        "alt": "Visuel du conditionnement — Briquettes de bois tendre rondes NESTRO",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-rondes.jpg",
        "alt": "Briquettes rondes percées",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-palette-filmee.jpg",
        "alt": "Palette de paquets de briquettes filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "NESTRO"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "NESTRO",
    "variants": [
      {
        "id": "palette-960-kg",
        "options": {
          "Conditionnement": "Palette (960 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 486.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 497.17,
          "libelle": "497,17 € — « Briquettes de bois tendre NESTRO rondes sans trou 960kg »"
        }
      }
    ]
  },
  {
    "slug": "briquettes-de-bois-modele-au-choix",
    "name": "Briquettes de bois — modèle au choix",
    "category": "briquettes",
    "essences": [],
    "shortDescription": "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre.",
    "description": [
      "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre.",
      "Proposé en : demi-palette, palette."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/briquettes-de-bois-modele-au-choix.jpg",
        "alt": "Visuel du conditionnement — Briquettes de bois — modèle au choix",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquette-octogonale.jpg",
        "alt": "Briquette de bois octogonale",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-octogonales-botte.jpg",
        "alt": "Briquettes octogonales percées en botte",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "demi-palette",
        "options": {
          "Conditionnement": "Demi-palette"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 226.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 231.57,
          "libelle": "231,57 € — « Demi-palette de briquettes de bois au choix »"
        }
      },
      {
        "id": "palette",
        "options": {
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 380.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 389.27,
          "libelle": "389,27 € — « Palette de briquettes de bois au choix + paquet gratuit »"
        }
      }
    ]
  },
  {
    "slug": "briquettes-de-hetre-pini-kay",
    "name": "Briquettes de hêtre Pini Kay",
    "category": "briquettes",
    "essences": [
      "Hêtre"
    ],
    "shortDescription": "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre. Essence : hêtre.",
    "description": [
      "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre. Essence : hêtre.",
      "Proposé en : demi-palette.",
      "Marque : Pini Kay."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/briquettes-de-hetre-pini-kay.jpg",
        "alt": "Visuel du conditionnement — Briquettes de hêtre Pini Kay",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-octogonales-botte.jpg",
        "alt": "Briquettes octogonales percées en botte",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquette-octogonale-detail.jpg",
        "alt": "Briquette de bois compressé",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Pini Kay"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Pini Kay",
    "variants": [
      {
        "id": "demi-palette-480-kg",
        "options": {
          "Conditionnement": "Demi-palette (480 kg)"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 388.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 397.57,
          "libelle": "397,57 € — « Briquettes de bois de hêtre PINI KAY Premium 480kg »"
        }
      }
    ]
  },
  {
    "slug": "briquettes-de-hetre-ruf",
    "name": "Briquettes de hêtre RUF",
    "category": "briquettes",
    "essences": [
      "Hêtre"
    ],
    "shortDescription": "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre. Essence : hêtre.",
    "description": [
      "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre. Essence : hêtre.",
      "Proposé en : demi-palette, palette.",
      "Marque : RUF."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/briquettes-de-hetre-ruf.jpg",
        "alt": "Visuel du conditionnement — Briquettes de hêtre RUF",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-palette-filmee.jpg",
        "alt": "Palette de paquets de briquettes filmés",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-octogonales-tas.jpg",
        "alt": "Briquettes octogonales",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "RUF"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "RUF",
    "variants": [
      {
        "id": "demi-palette-480-kg",
        "options": {
          "Conditionnement": "Demi-palette (480 kg)"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 282.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 289.67,
          "libelle": "289,67 € — « Briquettes de bois de hêtre RUF 480kg »"
        }
      },
      {
        "id": "palette-960-kg",
        "options": {
          "Conditionnement": "Palette (960 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 486.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 497.17,
          "libelle": "497,17 € — « Briquettes de hêtre RUF 960kg »"
        }
      }
    ]
  },
  {
    "slug": "briquettes-de-lignite-rekord-charbon",
    "name": "Briquettes de lignite REKORD (charbon)",
    "category": "autres-combustibles",
    "essences": [],
    "shortDescription": "Briquettes de lignite (charbon), à utiliser uniquement dans les appareils prévus pour ce combustible.",
    "description": [
      "Briquettes de lignite (charbon), à utiliser uniquement dans les appareils prévus pour ce combustible.",
      "Proposé en : lot, palette, paquet.",
      "Marque : REKORD."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/briquettes-de-lignite-rekord-charbon.jpg",
        "alt": "Visuel du conditionnement — Briquettes de lignite REKORD (charbon)",
        "illustration": true
      },
      {
        "src": "/images/catalogue/lignite-ballots.jpg",
        "alt": "Briquettes de lignite",
        "illustration": true
      },
      {
        "src": "/images/catalogue/lignite-ballot.jpg",
        "alt": "Briquettes de lignite",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "REKORD"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "REKORD",
    "variants": [
      {
        "id": "paquet-de-25-kg",
        "options": {
          "Conditionnement": "Paquet de 25 kg"
        },
        "unite": {
          "singulier": "paquet",
          "pluriel": "paquets"
        },
        "prix": 15.39,
        "basePrix": "indicatif",
        "reference": {
          "prix": 15.77,
          "libelle": "15,77 € — « Briquettes de lignite REKORD en paquet de 25 kg »"
        }
      },
      {
        "id": "palette-de-90-sacs-de-10-kg-900-kg-en-sachets",
        "options": {
          "Conditionnement": "Palette de 90 sacs de 10 kg (900 kg) — en sachets"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 201.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 206.67,
          "libelle": "206,67 € — « Briquettes de lignite REKORD sur palette en sachet (90 x 10 kg) »"
        }
      },
      {
        "id": "palette-de-40-sacs-de-25-kg-1000-kg",
        "options": {
          "Conditionnement": "Palette de 40 sacs de 25 kg (1000 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 242.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 248.17,
          "libelle": "248,17 € — « Briquettes de lignite REKORD en palette (40 x 25 kg) »"
        }
      },
      {
        "id": "palette-de-90-sacs-de-10-kg-900-kg-filmee",
        "options": {
          "Conditionnement": "Palette de 90 sacs de 10 kg (900 kg) — filmée"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 323.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 331.17,
          "libelle": "331,17 € — « Briquettes de lignite REKORD en palette filmée (90 x 10 kg) »"
        }
      },
      {
        "id": "lot-de-5-palettes-de-40-sacs-de-25-kg-5-t",
        "options": {
          "Conditionnement": "Lot de 5 palettes de 40 sacs de 25 kg (5 t)"
        },
        "unite": {
          "singulier": "lot de 5 palettes",
          "pluriel": "lots de 5 palettes"
        },
        "prix": 1215,
        "basePrix": "estime",
        "hypothese": "Le lot de 5 palettes était affiché moins cher par palette (182,43 €) que la palette seule (248,17 €). Prix estimé à 5 × 248,17 € = 1 240,85 €, puis ≈ 2 à 4 % en dessous.",
        "reference": {
          "prix": 912.17,
          "libelle": "912,17 € — « 5 Palettes de Briquettes de Lignite REKORD (40 × 25 kg) – Stock de réserve »"
        }
      },
      {
        "id": "lot-de-10-palettes-de-40-sacs-de-25-kg-10-t",
        "options": {
          "Conditionnement": "Lot de 10 palettes de 40 sacs de 25 kg (10 t)"
        },
        "unite": {
          "singulier": "lot de 10 palettes",
          "pluriel": "lots de 10 palettes"
        },
        "prix": 2430,
        "basePrix": "indicatif",
        "reference": {
          "prix": 2481.7,
          "libelle": "2481,7 € — « 10 Palettes de briquettes de lignite REKORD (40×25 kg) – Grande quantité 10 t »"
        }
      },
      {
        "id": "lot-de-15-palettes-de-40-sacs-de-25-kg-15-t",
        "options": {
          "Conditionnement": "Lot de 15 palettes de 40 sacs de 25 kg (15 t)"
        },
        "unite": {
          "singulier": "lot de 15 palettes",
          "pluriel": "lots de 15 palettes"
        },
        "prix": 4050,
        "basePrix": "indicatif",
        "reference": {
          "prix": 4137.55,
          "libelle": "4137,55 € — « 15 Palettes de briquettes de lignite REKORD (40×25 kg) – 15 t Grand stock »"
        }
      },
      {
        "id": "lot-de-20-palettes-de-40-sacs-de-25-kg-20-t",
        "options": {
          "Conditionnement": "Lot de 20 palettes de 40 sacs de 25 kg (20 t)"
        },
        "unite": {
          "singulier": "lot de 20 palettes",
          "pluriel": "lots de 20 palettes"
        },
        "prix": 4775,
        "basePrix": "indicatif",
        "reference": {
          "prix": 4876.25,
          "libelle": "4876,25 € — « 20 palettes de briquettes de lignite REKORD (40×25 kg) – 20 t de stock »"
        }
      },
      {
        "id": "lot-de-25-palettes-de-40-sacs-de-25-kg-25-t",
        "options": {
          "Conditionnement": "Lot de 25 palettes de 40 sacs de 25 kg (25 t)"
        },
        "unite": {
          "singulier": "lot de 25 palettes",
          "pluriel": "lots de 25 palettes"
        },
        "prix": 6415,
        "basePrix": "indicatif",
        "reference": {
          "prix": 6548.7,
          "libelle": "6548,7 € — « 25 Palettes de Briquettes de lignite REKORD (40×25 kg) – 25 t Grand Stock »"
        }
      },
      {
        "id": "lot-de-30-palettes-de-40-sacs-de-25-kg-30-t",
        "options": {
          "Conditionnement": "Lot de 30 palettes de 40 sacs de 25 kg (30 t)"
        },
        "unite": {
          "singulier": "lot de 30 palettes",
          "pluriel": "lots de 30 palettes"
        },
        "prix": 7295,
        "basePrix": "indicatif",
        "reference": {
          "prix": 7445.1,
          "libelle": "7445,1 € — « 30 palettes de briquettes de lignite REKORD (40 × 25 kg) – 30 t de stock en gros »"
        }
      }
    ],
    "statut": "brouillon",
    "noteStatut": "Brouillon : le lignite est un combustible fossile, pas du bois de chauffage. Points à vérifier avant toute publication : (1) l'objet social au registre (négoce de bois de chauffage, piquets, granulés, copeaux) ne mentionne ni charbon ni lignite ; (2) taux de TVA : le taux réduit du bois de chauffage ne s'applique a priori pas au lignite (taux normal probable) — à confirmer avec votre comptable ; (3) fiscalité des combustibles fossiles (accise sur les houilles, lignites et cokes) et obligations éventuelles du vendeur — à confirmer ; (4) restrictions locales (plans de protection de l'atmosphère, arrêtés préfectoraux) et compatibilité des appareils : usage uniquement dans les appareils prévus pour le charbon ; (5) approvisionnement REKORD réellement disponible chez votre fournisseur."
  },
  {
    "slug": "briquettes-de-meleze-ruf",
    "name": "Briquettes de mélèze RUF",
    "category": "briquettes",
    "essences": [
      "Mélèze"
    ],
    "shortDescription": "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre. Essence : mélèze.",
    "description": [
      "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre. Essence : mélèze.",
      "Proposé en : demi-palette.",
      "Marque : RUF."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/briquettes-de-meleze-ruf.jpg",
        "alt": "Visuel du conditionnement — Briquettes de mélèze RUF",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-palette-filmee.jpg",
        "alt": "Palette de paquets de briquettes filmés",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-feu.jpg",
        "alt": "Briquettes en combustion",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "RUF"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "RUF",
    "variants": [
      {
        "id": "demi-palette-480-kg",
        "options": {
          "Conditionnement": "Demi-palette (480 kg)"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 307.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 314.57,
          "libelle": "314,57 € — « Briquettes de mélèze RUF 480kg »"
        }
      }
    ]
  },
  {
    "slug": "briquettes-de-resineux-rondes-nestro",
    "name": "Briquettes de résineux rondes NESTRO",
    "category": "briquettes",
    "essences": [
      "Résineux"
    ],
    "shortDescription": "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre. Essence : résineux.",
    "description": [
      "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre. Essence : résineux.",
      "Proposé en : demi-palette.",
      "Marque : NESTRO."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/briquettes-de-resineux-rondes-nestro.jpg",
        "alt": "Visuel du conditionnement — Briquettes de résineux rondes NESTRO",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquette-ronde.jpg",
        "alt": "Briquette ronde percée",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-palette-filmee.jpg",
        "alt": "Palette de paquets de briquettes filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "NESTRO"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "NESTRO",
    "variants": [
      {
        "id": "demi-palette-480-kg",
        "options": {
          "Conditionnement": "Demi-palette (480 kg)"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 307.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 314.57,
          "libelle": "314,57 € — « Briquettes NESTRO en bois de résineux rondes sans trou 480kg »"
        }
      }
    ]
  },
  {
    "slug": "briquettes-d-ecorce-biomac",
    "name": "Briquettes d’écorce BIOMAC",
    "category": "briquettes",
    "essences": [],
    "shortDescription": "Briquettes d’écorce compressée, appréciées pour leur braise de longue durée.",
    "description": [
      "Briquettes d’écorce compressée, appréciées pour leur braise de longue durée.",
      "Proposé en : demi-palette, palette.",
      "Marque : BIOMAC."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/briquettes-d-ecorce-biomac.jpg",
        "alt": "Visuel du conditionnement — Briquettes d’écorce BIOMAC",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquette-octogonale-detail.jpg",
        "alt": "Briquette de bois compressé",
        "illustration": true
      },
      {
        "src": "/images/catalogue/palette-paquets-filmes.jpg",
        "alt": "Palette de paquets filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "BIOMAC"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "BIOMAC",
    "variants": [
      {
        "id": "demi-palette-450-kg",
        "options": {
          "Conditionnement": "Demi-palette (450 kg)"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 404.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 414.17,
          "libelle": "414,17 € — « Briquettes d'écorce rondes BIOMAC sans trou 450kg »"
        }
      },
      {
        "id": "palette-1000-kg",
        "options": {
          "Conditionnement": "Palette (1000 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 624.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 638.27,
          "libelle": "638,27 € — « BIOMAC Bûches compressées en écorce rondes sans trou 1000kg »"
        }
      }
    ]
  },
  {
    "slug": "briquettes-d-ecorce-ruf",
    "name": "Briquettes d’écorce RUF",
    "category": "briquettes",
    "essences": [],
    "shortDescription": "Briquettes d’écorce compressée, appréciées pour leur braise de longue durée.",
    "description": [
      "Briquettes d’écorce compressée, appréciées pour leur braise de longue durée.",
      "Proposé en : demi-palette, palette.",
      "Marque : RUF."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/briquettes-d-ecorce-ruf.jpg",
        "alt": "Visuel du conditionnement — Briquettes d’écorce RUF",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-palette-filmee.jpg",
        "alt": "Palette de paquets de briquettes filmés",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-octogonales-tas.jpg",
        "alt": "Briquettes octogonales",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "RUF"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "RUF",
    "variants": [
      {
        "id": "demi-palette-430-kg",
        "options": {
          "Conditionnement": "Demi-palette (430 kg)"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 323.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 331.17,
          "libelle": "331,17 € — « Briquettes d'écorce RUF 430kg »"
        }
      },
      {
        "id": "palette-1000-kg",
        "options": {
          "Conditionnement": "Palette (1000 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 567.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 580.17,
          "libelle": "580,17 € — « Briquettes d'écorce RUF 1000kg »"
        }
      }
    ]
  },
  {
    "slug": "buches-compressees-de-bois-pini-kay",
    "name": "Bûches compressées de bois Pini Kay",
    "category": "briquettes",
    "essences": [],
    "shortDescription": "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre.",
    "description": [
      "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre.",
      "Proposé en : palette.",
      "Marque : Pini Kay."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/buches-compressees-de-bois-pini-kay.jpg",
        "alt": "Visuel du conditionnement — Bûches compressées de bois Pini Kay",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-octogonales-botte.jpg",
        "alt": "Briquettes octogonales percées en botte",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquette-octogonale-detail.jpg",
        "alt": "Briquette de bois compressé",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Pini Kay"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Pini Kay",
    "variants": [
      {
        "id": "palette",
        "options": {
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 445.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 455.67,
          "libelle": "455,67 € — « Palette de Bûches compressées Pini Kay + 5 sacs de petit bois d'allumage gratuits »"
        }
      },
      {
        "id": "palette-import",
        "options": {
          "Conditionnement": "Palette — import"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 478.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 488.87,
          "libelle": "488,87 € — « Palette de Bûches compressées Pini Kay (Import) »"
        }
      }
    ]
  },
  {
    "slug": "buches-compressees-de-hetre-rondes",
    "name": "Bûches compressées de hêtre rondes",
    "category": "briquettes",
    "essences": [
      "Hêtre"
    ],
    "shortDescription": "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre. Essence : hêtre.",
    "description": [
      "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre. Essence : hêtre.",
      "Proposé en : demi-palette, palette."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/buches-compressees-de-hetre-rondes.jpg",
        "alt": "Visuel du conditionnement — Bûches compressées de hêtre rondes",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-rondes.jpg",
        "alt": "Briquettes rondes percées",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-palette-filmee.jpg",
        "alt": "Palette de paquets de briquettes filmés",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Humidité annoncée par le fournisseur",
        "< 5 %"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "demi-palette-de-48-paquets-de-10-kg-480-kg",
        "options": {
          "Conditionnement": "Demi-palette de 48 paquets de 10 kg (480 kg)"
        },
        "unite": {
          "singulier": "demi-palette",
          "pluriel": "demi-palettes"
        },
        "prix": 274.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 281.37,
          "libelle": "281,37 € — « Briquettes de hêtre rondes 48 paquets x 10 kg (480 kg) »"
        }
      },
      {
        "id": "palette-de-96-paquets-de-10-kg-960-kg",
        "options": {
          "Conditionnement": "Palette de 96 paquets de 10 kg (960 kg)"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 486.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 497.17,
          "libelle": "497,17 € — « Bûches de hêtre rondes, palette de 96 paquets x 10 kg (960 kg) »"
        }
      }
    ]
  },
  {
    "slug": "buchettes-de-bois-giant-flames",
    "name": "Bûchettes de bois Giant Flames",
    "category": "briquettes",
    "essences": [],
    "shortDescription": "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre.",
    "description": [
      "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre.",
      "Proposé en : palette.",
      "Marque : Giant Flames."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/buchettes-de-bois-giant-flames.jpg",
        "alt": "Visuel du conditionnement — Bûchettes de bois Giant Flames",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquette-octogonale.jpg",
        "alt": "Briquette de bois octogonale",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-octogonales-botte.jpg",
        "alt": "Briquettes octogonales percées en botte",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Giant Flames"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Giant Flames",
    "variants": [
      {
        "id": "palette",
        "options": {
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 380.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 389.27,
          "libelle": "389,27 € — « Palette de Bûchettes de bois Giant Flames + 5 sacs de petit bois d'allumage gratuits »"
        }
      }
    ]
  },
  {
    "slug": "pave-de-bois-compresse-100-chene",
    "name": "Pavé de bois compressé 100 % chêne",
    "category": "briquettes",
    "essences": [
      "Chêne"
    ],
    "shortDescription": "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre. Essence : chêne.",
    "description": [
      "Briquettes de bois compressé : peu encombrantes, faciles à stocker, sans bûches à fendre. Essence : chêne.",
      "Proposé en : pavé."
    ],
    "images": [
      {
        "src": "/images/catalogue/visuels/pave-de-bois-compresse-100-chene.jpg",
        "alt": "Visuel du conditionnement — Pavé de bois compressé 100 % chêne",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquette-octogonale.jpg",
        "alt": "Briquette de bois octogonale",
        "illustration": true
      },
      {
        "src": "/images/catalogue/briquettes-octogonales-botte.jpg",
        "alt": "Briquettes octogonales percées en botte",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "pave",
        "options": {
          "Conditionnement": "Pavé"
        },
        "unite": {
          "singulier": "pavé",
          "pluriel": "pavés"
        },
        "prix": 6.99,
        "basePrix": "indicatif",
        "reference": {
          "prix": 7.2,
          "libelle": "7,2 € — « Pavé de bois compressé 100 % chêne »"
        }
      }
    ]
  },
  {
    "slug": "allume-feux-giant-flames-boite",
    "name": "Allume-feux Giant Flames — boîte",
    "category": "allumage",
    "essences": [],
    "shortDescription": "Allume-feux à glisser sous le petit bois pour un démarrage rapide, sans papier journal.",
    "description": [
      "Allume-feux à glisser sous le petit bois pour un démarrage rapide, sans papier journal.",
      "Proposé en : boîte.",
      "Marque : Giant Flames."
    ],
    "images": [
      {
        "src": "/images/catalogue/allume-feux-feu.jpg",
        "alt": "Allume-feux en combustion",
        "illustration": true
      },
      {
        "src": "/images/catalogue/laine-de-bois-2.jpg",
        "alt": "Laine de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/allume-feux-giant-flames-boite.jpg",
        "alt": "Visuel du conditionnement — Allume-feux Giant Flames — boîte",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Giant Flames"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Giant Flames",
    "variants": [
      {
        "id": "boite-de-950-5-kg",
        "options": {
          "Conditionnement": "Boîte de 950 (5 kg)"
        },
        "unite": {
          "singulier": "boîte",
          "pluriel": "boîtes"
        },
        "prix": 27.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 29.05,
          "libelle": "29,05 € — « Giant Flames Boîte d'allume-feu 950 unités (5kg) »"
        }
      }
    ]
  },
  {
    "slug": "allume-feux-bio",
    "name": "Allume-feux bio",
    "category": "allumage",
    "essences": [],
    "shortDescription": "Allume-feux à glisser sous le petit bois pour un démarrage rapide, sans papier journal.",
    "description": [
      "Allume-feux à glisser sous le petit bois pour un démarrage rapide, sans papier journal.",
      "Proposé en : à l’unité."
    ],
    "images": [
      {
        "src": "/images/catalogue/laine-de-bois-3.jpg",
        "alt": "Laine de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/allume-feu-laine.jpg",
        "alt": "Allume-feu en laine de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/allume-feux-bio.jpg",
        "alt": "Visuel du conditionnement — Allume-feux bio",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "a-l-unite",
        "options": {
          "Conditionnement": "À l’unité"
        },
        "unite": {
          "singulier": "unité",
          "pluriel": "unités"
        },
        "prix": 9.39,
        "basePrix": "estime",
        "hypothese": "Contenu (volume ou nombre de pièces) non précisé : comparaison impossible. Prix calqué sur l’offre identique de kwattbois.fr (9,6 €), ≈ 2 à 4 % en dessous ; contenu exact à confirmer.",
        "reference": {
          "prix": 9.6,
          "libelle": "9,6 € — « Allume-feux bio »"
        }
      }
    ]
  },
  {
    "slug": "allume-feux-en-laine-de-bois",
    "name": "Allume-feux en laine de bois",
    "category": "allumage",
    "essences": [],
    "shortDescription": "Allume-feux à glisser sous le petit bois pour un démarrage rapide, sans papier journal.",
    "description": [
      "Allume-feux à glisser sous le petit bois pour un démarrage rapide, sans papier journal.",
      "Proposé en : sac."
    ],
    "images": [
      {
        "src": "/images/catalogue/laine-de-bois.jpg",
        "alt": "Laine de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/laine-de-bois-2.jpg",
        "alt": "Laine de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/allume-feux-en-laine-de-bois.jpg",
        "alt": "Visuel du conditionnement — Allume-feux en laine de bois",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "sac-de-50-pieces",
        "options": {
          "Conditionnement": "Sac de 50 pièces"
        },
        "unite": {
          "singulier": "sac",
          "pluriel": "sacs"
        },
        "prix": 11.89,
        "basePrix": "indicatif",
        "reference": {
          "prix": 12.18,
          "libelle": "12,18 € — « BoisExpress — Allume-feux en laine de bois Sac de 50 pièces Bois Noble »"
        }
      }
    ]
  },
  {
    "slug": "allume-feux-en-laine-de-bois-giant-flames",
    "name": "Allume-feux en laine de bois Giant Flames",
    "category": "allumage",
    "essences": [],
    "shortDescription": "Allume-feux à glisser sous le petit bois pour un démarrage rapide, sans papier journal.",
    "description": [
      "Allume-feux à glisser sous le petit bois pour un démarrage rapide, sans papier journal.",
      "Proposé en : boîte.",
      "Marque : Giant Flames."
    ],
    "images": [
      {
        "src": "/images/catalogue/allume-feu-laine.jpg",
        "alt": "Allume-feu en laine de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/laine-de-bois-3.jpg",
        "alt": "Laine de bois",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/allume-feux-en-laine-de-bois-giant-flames.jpg",
        "alt": "Visuel du conditionnement — Allume-feux en laine de bois Giant Flames",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Giant Flames"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Giant Flames",
    "variants": [
      {
        "id": "boite-de-415-5-kg",
        "options": {
          "Conditionnement": "Boîte de 415 (5 kg)"
        },
        "unite": {
          "singulier": "boîte",
          "pluriel": "boîtes"
        },
        "prix": 29.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 31.13,
          "libelle": "31,13 € — « Giant Flames Boîte de laine allume-feu environ 415 unités (5kg) »"
        }
      }
    ]
  },
  {
    "slug": "bois-d-allumage-petit-bois",
    "name": "Bois d’allumage (petit bois)",
    "category": "allumage",
    "essences": [
      "Bois tendre"
    ],
    "shortDescription": "Petit bois sec pour démarrer le feu facilement. Essence : bois tendre.",
    "description": [
      "Petit bois sec pour démarrer le feu facilement. Essence : bois tendre.",
      "Proposé en : filet, lot, palette."
    ],
    "images": [
      {
        "src": "/images/catalogue/petit-bois-feu.jpg",
        "alt": "Petit bois d’allumage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/bois-fendu-1.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/bois-d-allumage-petit-bois.jpg",
        "alt": "Visuel du conditionnement — Bois d’allumage (petit bois)",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "filet",
        "options": {
          "Conditionnement": "Filet"
        },
        "unite": {
          "singulier": "filet",
          "pluriel": "filets"
        },
        "prix": 3.09,
        "basePrix": "estime",
        "hypothese": "Contenu (volume ou nombre de pièces) non précisé : comparaison impossible. Prix calqué sur l’offre identique de kwattbois.fr (3,24 €), ≈ 2 à 4 % en dessous ; contenu exact à confirmer.",
        "reference": {
          "prix": 3.24,
          "libelle": "3,24 € — « Filet de bois d'allumage »"
        }
      },
      {
        "id": "lot-de-50-filets",
        "options": {
          "Conditionnement": "Lot de 50 filets"
        },
        "unite": {
          "singulier": "lot",
          "pluriel": "lots"
        },
        "prix": 341.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 348.89,
          "libelle": "348,89 € — « BoisExpress — 50 filets Bois d'allumage Bois tendre calibre 8cm Bois Noble »"
        }
      },
      {
        "id": "palette-de-80-filets-de-40-l",
        "options": {
          "Conditionnement": "Palette de 80 filets de 40 L"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 516.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 528.0,
          "libelle": "528 € — « Palette de 80 filets de 40L de bois allumage »"
        }
      },
      {
        "id": "palette-de-80-filets-de-25-dm",
        "options": {
          "Conditionnement": "Palette de 80 filets de 25 dm³"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 516.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 528.0,
          "libelle": "528 € — « Palette de 80 filets de 25dm3 de bois d'allumage »"
        }
      }
    ]
  },
  {
    "slug": "bois-d-allumage-petit-bois-giant-flames",
    "name": "Bois d’allumage (petit bois) Giant Flames",
    "category": "allumage",
    "essences": [],
    "shortDescription": "Petit bois sec pour démarrer le feu facilement.",
    "description": [
      "Petit bois sec pour démarrer le feu facilement.",
      "Proposé en : palette.",
      "Marque : Giant Flames."
    ],
    "images": [
      {
        "src": "/images/catalogue/petit-bois-feu.jpg",
        "alt": "Petit bois d’allumage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/buches-filet.jpg",
        "alt": "Filet de bûches",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/bois-d-allumage-petit-bois-giant-flames.jpg",
        "alt": "Visuel du conditionnement — Bois d’allumage (petit bois) Giant Flames",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Giant Flames"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Giant Flames",
    "variants": [
      {
        "id": "palette",
        "options": {
          "Conditionnement": "Palette"
        },
        "unite": {
          "singulier": "palette",
          "pluriel": "palettes"
        },
        "prix": 242.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 248.17,
          "libelle": "248,17 € — « Palette Giant Flames Bois d'allumage 96 sacs en filet x 12,5L (1200L) »"
        }
      }
    ]
  },
  {
    "slug": "bois-d-allumage-giant-flames-fsc",
    "name": "Bois d’allumage Giant Flames (FSC)",
    "category": "allumage",
    "essences": [],
    "shortDescription": "Petit bois sec pour démarrer le feu facilement.",
    "description": [
      "Petit bois sec pour démarrer le feu facilement.",
      "Proposé en : filet, lot.",
      "Marque : Giant Flames."
    ],
    "images": [
      {
        "src": "/images/catalogue/buches-filet.jpg",
        "alt": "Filet de bûches",
        "illustration": true
      },
      {
        "src": "/images/catalogue/petit-bois-feu.jpg",
        "alt": "Petit bois d’allumage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/bois-d-allumage-giant-flames-fsc.jpg",
        "alt": "Visuel du conditionnement — Bois d’allumage Giant Flames (FSC)",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [
      [
        "Marque",
        "Giant Flames"
      ],
      [
        "Humidité annoncée par le fournisseur",
        "< 10 %"
      ],
      [
        "Certification (indiquée par le fabricant)",
        "FSC"
      ]
    ],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "marque": "Giant Flames",
    "variants": [
      {
        "id": "filet-de-12-5-l",
        "options": {
          "Conditionnement": "Filet de 12,5 L"
        },
        "unite": {
          "singulier": "filet",
          "pluriel": "filets"
        },
        "prix": 3.99,
        "basePrix": "indicatif",
        "reference": {
          "prix": 4.15,
          "libelle": "4,15 € — « Giant Flames Bois d'allumage FSC Sacs en filet 12.5L »"
        }
      },
      {
        "id": "lot-de-5-filets-de-12-5-l",
        "options": {
          "Conditionnement": "Lot de 5 filets de 12,5 L"
        },
        "unite": {
          "singulier": "lot",
          "pluriel": "lots"
        },
        "prix": 16.19,
        "basePrix": "indicatif",
        "reference": {
          "prix": 16.6,
          "libelle": "16,6 € — « Giant Flames Bois d'allumage FSC 5 sacs en filet x 12,5L (62,5L) »"
        }
      }
    ]
  },
  {
    "slug": "bois-d-allumage-extra-sec",
    "name": "Bois d’allumage extra sec",
    "category": "allumage",
    "essences": [],
    "shortDescription": "Petit bois sec pour démarrer le feu facilement.",
    "description": [
      "Petit bois sec pour démarrer le feu facilement.",
      "Proposé en : à l’unité."
    ],
    "images": [
      {
        "src": "/images/catalogue/bois-fendu-1.jpg",
        "alt": "Bûches de bois de chauffage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/petit-bois-feu.jpg",
        "alt": "Petit bois d’allumage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/bois-d-allumage-extra-sec.jpg",
        "alt": "Visuel du conditionnement — Bois d’allumage extra sec",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "a-l-unite",
        "options": {
          "Conditionnement": "À l’unité"
        },
        "unite": {
          "singulier": "unité",
          "pluriel": "unités"
        },
        "prix": 9.39,
        "basePrix": "estime",
        "hypothese": "Contenu (volume ou nombre de pièces) non précisé : comparaison impossible. Prix calqué sur l’offre identique de kwattbois.fr (9,6 €), ≈ 2 à 4 % en dessous ; contenu exact à confirmer.",
        "reference": {
          "prix": 9.6,
          "libelle": "9,6 € — « Bois d'allumage extra sec »"
        }
      }
    ]
  },
  {
    "slug": "bois-d-allumage-big-bag",
    "name": "Bois d’allumage — big bag",
    "category": "allumage",
    "essences": [],
    "shortDescription": "Petit bois sec pour démarrer le feu facilement.",
    "description": [
      "Petit bois sec pour démarrer le feu facilement.",
      "Proposé en : big bag."
    ],
    "images": [
      {
        "src": "/images/catalogue/buches-caisse.jpg",
        "alt": "Caisse de bûches",
        "illustration": true
      },
      {
        "src": "/images/catalogue/petit-bois-feu.jpg",
        "alt": "Petit bois d’allumage",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/bois-d-allumage-big-bag.jpg",
        "alt": "Visuel du conditionnement — Bois d’allumage — big bag",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "big-bag",
        "options": {
          "Conditionnement": "Big bag"
        },
        "unite": {
          "singulier": "big bag",
          "pluriel": "big bags"
        },
        "prix": 168.9,
        "basePrix": "indicatif",
        "reference": {
          "prix": 172.57,
          "libelle": "172,57 € — « Big Bag d'allumage »"
        }
      }
    ]
  },
  {
    "slug": "cubes-allume-feux-ecologiques",
    "name": "Cubes allume-feux écologiques",
    "category": "allumage",
    "essences": [],
    "shortDescription": "Allume-feux à glisser sous le petit bois pour un démarrage rapide, sans papier journal.",
    "description": [
      "Allume-feux à glisser sous le petit bois pour un démarrage rapide, sans papier journal.",
      "Proposé en : boîte."
    ],
    "images": [
      {
        "src": "/images/catalogue/allume-feu-cube.jpg",
        "alt": "Cube allume-feu",
        "illustration": true
      },
      {
        "src": "/images/catalogue/allume-feux-feu.jpg",
        "alt": "Allume-feux en combustion",
        "illustration": true
      },
      {
        "src": "/images/catalogue/visuels/cubes-allume-feux-ecologiques.jpg",
        "alt": "Visuel du conditionnement — Cubes allume-feux écologiques",
        "illustration": true
      }
    ],
    "humidity": null,
    "details": [],
    "aCompleter": [
      "caractéristiques précises du produit livré"
    ],
    "availability": "sur-commande",
    "pricing": "unitaire",
    "variants": [
      {
        "id": "boite-de-100",
        "options": {
          "Conditionnement": "Boîte de 100"
        },
        "unite": {
          "singulier": "boîte",
          "pluriel": "boîtes"
        },
        "prix": 17.89,
        "basePrix": "indicatif",
        "reference": {
          "prix": 18.32,
          "libelle": "18,32 € — « BoisExpress — Cubes allume-feux écologiques Boîte de 100 Séchage Naturel »"
        }
      }
    ]
  }
];
