import { getProduct, getVariant, variantLabel, type Product } from "@/config/products";
import { libelleQuantite, tarifPour } from "@/config/pricing";
import { isProvisional, unitPrice, type PriceMap } from "@/lib/prices";
import { isPublished, type StatusMap } from "@/lib/status";
import { messageLivraisonSurDevis } from "@/config/shipping";
import { estimateShipping, getCountry, type ShippingQuote } from "@/lib/shipping";

/** Une ligne de panier : un produit, une variante, une quantité. */
export type CartLine = { productSlug: string; variantId: string; quantity: number };

export type PricedLine = {
  key: string;
  productSlug: string;
  variantId: string;
  productName: string;
  /** Variante choisie, ex. « 33 cm · Palette ». */
  variantLabel: string;
  /** Quantité lisible, ex. « 10 stères », « 3 palettes ». */
  quantityLabel: string;
  image: string | null;
  lengthCm: number | null;
  quantity: number;
  /** Prix d'une unité (null = sur demande). */
  unitPrice: number | null;
  /** Nom de l'unité de vente, ex. « palette ». */
  unit: string;
  /** Prix de la ligne (null = sur demande). */
  lineTotal: number | null;
  /** Prix moyen par stère (grille stère uniquement). */
  pricePerStere: number | null;
  /** Volume en stères de la ligne, si connu. */
  steres: number | null;
  /** true si le prix de la ligne est provisoire (non encore validé par le vendeur). */
  provisional?: boolean;
};

export type OrderSummary = {
  lines: PricedLine[];
  /** Total des lignes dont le prix est connu (hors livraison). */
  subtotal: number;
  /** true si au moins un produit est « prix sur demande ». */
  hasUnpricedLines: boolean;
  /** true si au moins une ligne a un prix provisoire. */
  hasProvisionalPrices?: boolean;
  /** Nombre total d'articles (unités) — badge du panier. */
  totalQuantity: number;
  /** Volume total en stères, quand il est connu pour toutes les lignes (sinon null). */
  totalSteres: number | null;
  shipping: ShippingQuote;
  /** Produits + livraison, ou null tant qu'un prix (produit ou livraison) reste à confirmer. */
  total: number | null;
};

export const MAX_UNIT_QUANTITY = 999;

export const lineKey = (l: Pick<CartLine, "productSlug" | "variantId">) => `${l.productSlug}::${l.variantId}`;

/** Quantité acceptée pour ce produit : grille (1, 2, 3, 5… stères) ou entier de 1 à 999. */
export function isValidQuantity(product: Product, q: number) {
  if (product.pricing === "grille-stere") return Boolean(tarifPour(q));
  return Number.isInteger(q) && q >= 1 && q <= MAX_UNIT_QUANTITY;
}

/** Associe chaque ligne au catalogue et aux prix ; lignes invalides ou fiches non publiées ignorées. */
export function priceLines(cart: CartLine[], prices: PriceMap, validated: readonly string[] = [], statuses?: StatusMap): PricedLine[] {
  const out: PricedLine[] = [];
  for (const item of cart) {
    const product = getProduct(item.productSlug);
    const variant = product && getVariant(product, item.variantId);
    if (!product || !variant || product.availability === "epuise" || !isPublished(statuses, product) || !isValidQuantity(product, item.quantity)) continue;
    const base = {
      key: lineKey(item),
      productSlug: product.slug,
      variantId: variant.id,
      productName: product.name,
      variantLabel: variantLabel(variant),
      image: product.images[0]?.src ?? null,
      lengthCm: variant.lengthCm ?? null,
      quantity: item.quantity,
    };
    if (product.pricing === "grille-stere") {
      const t = tarifPour(item.quantity, variant.lengthCm)!; // grille de la longueur choisie (33 cm ≠ 50 cm)
      out.push({
        ...base,
        quantityLabel: libelleQuantite(t.quantite),
        unit: "stère",
        unitPrice: t.prixParStere,
        lineTotal: t.prix,
        pricePerStere: t.prixParStere,
        steres: t.quantite,
      });
    } else {
      const p = unitPrice(prices, product, variant);
      const q = item.quantity;
      out.push({
        ...base,
        quantityLabel: `${q} ${q > 1 ? variant.unite.pluriel : variant.unite.singulier}`,
        unit: variant.unite.singulier,
        unitPrice: p,
        lineTotal: p === null ? null : Math.round(p * q * 100) / 100,
        pricePerStere: null,
        steres: variant.steres ? variant.steres * q : null,
        provisional: isProvisional(validated, product, variant),
      });
    }
  }
  return out;
}

export function summarizeOrder(
  cart: CartLine[],
  destination: { countryCode: string; postalCode?: string; city?: string } | null,
  prices: PriceMap,
  validated: readonly string[] = [],
  statuses?: StatusMap,
): OrderSummary {
  const lines = priceLines(cart, prices, validated, statuses);
  const subtotal = Math.round(lines.reduce((s, l) => s + (l.lineTotal ?? 0), 0) * 100) / 100;
  const hasUnpricedLines = lines.some((l) => l.lineTotal === null);
  const totalQuantity = lines.reduce((s, l) => s + l.quantity, 0);
  const totalSteres = lines.every((l) => l.steres !== null) ? lines.reduce((s, l) => s + (l.steres ?? 0), 0) : null;

  let shipping: ShippingQuote;
  if (!destination) shipping = { kind: "incomplet", reason: "Choisissez votre pays et votre code postal pour estimer la livraison." };
  else if (totalSteres === null) {
    // Volume inconnu (granulés, palettes…) : le transport est chiffré au cas par cas
    const country = getCountry(destination.countryCode);
    shipping = country
      ? { kind: "devis", reason: messageLivraisonSurDevis, leadTime: country.leadTime }
      : { kind: "incomplet", reason: "Choisissez un pays de livraison." };
  } else shipping = estimateShipping({ ...destination, quantity: totalSteres });

  const total = !hasUnpricedLines && shipping.kind === "prix" ? Math.round((subtotal + shipping.amount) * 100) / 100 : null;
  const hasProvisionalPrices = lines.some((l) => l.provisional);
  return { lines, subtotal, hasUnpricedLines, hasProvisionalPrices, totalQuantity, totalSteres, shipping, total };
}

/**
 * Texte d'une ligne, compatible avec les commandes enregistrées avant le catalogue
 * multi-produits (elles n'ont ni `quantityLabel` ni `variantLabel`).
 */
export function describeLine(l: { quantity: number; lengthCm?: number | null; quantityLabel?: string; variantLabel?: string }) {
  return {
    quantity: l.quantityLabel ?? libelleQuantite(l.quantity),
    variant: l.variantLabel ?? (l.lengthCm ? `${l.lengthCm} cm` : ""),
  };
}

/** Prix d'une ligne pour l'affichage. */
export function lineTotalText(lineTotal: number | null | undefined, format: (n: number) => string) {
  return typeof lineTotal === "number" ? format(lineTotal) : "Sur demande";
}
