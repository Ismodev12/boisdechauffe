/**
 * ============================================================
 *  CONTENUS : FAQ, AVIS, PHOTOS
 * ============================================================
 *
 * Avis et témoignages : n'ajoutez que de VRAIS avis clients, avec leur accord.
 * Tant que les listes sont vides, les sections correspondantes ne s'affichent pas.
 */

import { quantiteMax, tarifs } from "@/config/pricing";
import { franceTariffSentence } from "@/lib/shipping";

// false : tant qu'il n'y a pas de vrais avis ou photos, ces sections sont masquées aux clients
export const showEmptyPlaceholders = false;

export type Testimonial = {
  author: string; // ex. "Marie, Nancy"
  text: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  date?: string; // ex. "Novembre 2026"
};

export const testimonials: Testimonial[] = [];

export type Photo = { src: string; alt: string };

/** Photos de vos livraisons (ex. { src: "/images/livraisons/livraison-1.jpg", alt: "Livraison à Metz" }). */
export const deliveryPhotos: Photo[] = [];

/** Photos de votre bois (stock, séchage, chantier...). */
export const woodPhotos: Photo[] = [];

export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "Quels types de bois proposez-vous ?",
    answer:
      "Notre bois phare est un bois de chauffage très sec, mélange de chêne, frêne, hêtre et charme. Le catalogue propose aussi des bûches d'essences seules en sac, filet ou palette, des granulés de nombreuses marques, des briquettes et du bois densifié, ainsi que du bois d'allumage.",
  },
  {
    question: "Quelles longueurs de bûches sont disponibles ?",
    answer:
      "Notre mélange chêne, frêne, hêtre et charme est proposé en 33 ou 50 cm. Dans le catalogue, les longueurs vont de 25 cm à 1 m selon les produits. Vous choisissez la longueur sur la fiche produit, avant l'ajout au panier.",
  },
  {
    question: "Comment fonctionnent vos tarifs ?",
    answer:
      `Notre mélange chêne, frêne, hêtre et charme est vendu au stère, de ${tarifs[0].quantite} à ${quantiteMax} stères. Le prix moyen par stère baisse avec les grosses quantités : la grille complète est affichée sur la fiche produit. Ces prix concernent le bois uniquement. Les autres produits du catalogue ont un prix par conditionnement (sac, palette…), indiqué sur chaque fiche.`,
  },
  {
    question: "La livraison est-elle comprise dans le prix ?",
    answer:
      `Non. Les prix affichés concernent le bois uniquement. En France métropolitaine, la livraison s'ajoute selon le nombre de stères commandés : ${franceTariffSentence()}. Pour les autres pays, la Corse et l'Outre-mer, la livraison est sur devis.`,
  },
  {
    question: "Livrez-vous en Belgique ?",
    answer:
      "Les commandes vers la Belgique sont possibles sur devis. Le transport dépend de l'adresse et de la quantité : nous vous confirmons la faisabilité et le prix avant toute validation.",
  },
  {
    question: "Livrez-vous en Suisse ?",
    answer:
      "Les commandes vers la Suisse sont étudiées sur devis. La Suisse n'étant pas dans l'Union européenne, des formalités et frais de douane peuvent s'appliquer ; nous vérifions la faisabilité avant de confirmer.",
  },
  {
    question: "Livrez-vous en Allemagne ?",
    answer:
      "Les commandes vers l'Allemagne sont possibles sur devis. Nous vous confirmons la faisabilité et le prix du transport avant validation.",
  },
  {
    question: "Quel est le délai de livraison ?",
    answer:
      "Le délai dépend de votre adresse, de la quantité commandée et de la période de l'année. Il vous est communiqué lors de la confirmation de votre commande.",
  },
  {
    question: "Comment sont calculés les frais de transport ?",
    answer:
      "En France métropolitaine, seul le nombre de stères compte, quel que soit le département : le montant s'affiche automatiquement dans votre panier. Pour les autres pays, la Corse, l'Outre-mer et les produits dont le volume n'est pas exprimé en stères (granulés, briquettes…), la livraison est indiquée « sur devis » et nous vous transmettons le tarif avant toute validation.",
  },
  {
    question: "Puis-je commander une quantité importante ?",
    answer:
      `Oui. Jusqu'à ${quantiteMax} stères, vous pouvez commander directement en ligne et profiter des tarifs dégressifs. Au-delà, ou pour une livraison particulière, utilisez la page « Demande de devis ».`,
  },
  {
    question: "Puis-je demander un devis personnalisé ?",
    answer:
      "Oui, la page « Demande de devis » vous permet de décrire votre besoin (longueur, quantité, adresse de livraison). Nous vous répondons avec une proposition adaptée.",
  },
];
