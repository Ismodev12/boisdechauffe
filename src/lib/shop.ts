import { getCategory } from "@/config/categories";
import { getLengths, type Product } from "@/config/products";
import { startingPrice, unitPrice, type PriceMap } from "@/lib/prices";
import { tarifs, tousLesPrixStere } from "@/config/pricing";

/** Résumé léger d'un produit pour la boutique (recherche, filtres, cartes). */
export type ShopItem = {
  slug: string;
  name: string;
  category: string;
  categoryName: string;
  essences: string[];
  marque: string | null;
  image: string | null;
  lengths: string[];
  packs: string[];
  weights: string[];
  from: { amount: number; unit: string } | null;
  /** Prix connus (pour le filtre de prix). */
  prices: number[];
  variantCount: number;
  availability: Product["availability"];
  stere: boolean;
  /** Texte de recherche (minuscules, sans accents). */
  search: string;
};

export const fold = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

/** Conditionnement de base d'une variante : « Palette », « Demi-palette », « Sac », « Vrac »… */
export function packOf(label: string) {
  const l = fold(label);
  if (l.startsWith("vrac") || l.includes("stere")) return l.startsWith("sac") ? "Sac" : "Vrac / au stère";
  if (l.startsWith("demi-palette")) return "Demi-palette";
  if (l.startsWith("lot de") && l.includes("palette")) return "Lot de palettes";
  if (l.startsWith("palette")) return "Palette";
  if (l.startsWith("camion")) return "Camion complet";
  if (l.startsWith("big bag")) return "Big bag";
  if (l.startsWith("caisse")) return "Caisse";
  if (l.includes("filet")) return "Filet / lot de filets";
  if (l.startsWith("sac")) return "Sac";
  if (l.startsWith("boite")) return "Boîte";
  if (l.startsWith("paquet")) return "Paquet";
  return "Autre";
}

/** Tranche de poids d'une variante d'après son libellé (« 990 kg », « Sac de 15 kg », « 5 t »). */
function weightOf(label: string): string | null {
  const t = label.match(/\((\d+(?:[  ]?\d{3})*)\s*t\)/);
  const kg = t ? Number(t[1].replace(/\s/g, "")) * 1000 : Number((label.match(/(\d+(?:[,.]\d+)?)\s*kg\)?$/) ?? label.match(/\((\d+)\s*kg\)/) ?? [])[1]?.replace(",", "."));
  if (!kg || Number.isNaN(kg)) return null;
  if (kg <= 30) return "Jusqu’à 30 kg";
  if (kg <= 600) return "30 à 600 kg";
  if (kg <= 1200) return "600 kg à 1,2 t";
  return "Plus de 1,2 t";
}

export function toShopItem(p: Product, prices: PriceMap): ShopItem {
  const stere = p.pricing === "grille-stere";
  const labels = p.variants.map((v) => v.options.Conditionnement ?? "");
  const known = stere ? tousLesPrixStere : p.variants.map((v) => unitPrice(prices, p, v)).filter((x): x is number => x !== null);
  const lengths = stere
    ? getLengths(p).map((l) => `${l} cm`)
    : [...new Set(p.variants.map((v) => v.options.Longueur).filter((x): x is string => Boolean(x) && x !== "Non précisée"))];
  const cat = getCategory(p.category);
  return {
    slug: p.slug,
    name: p.name,
    category: p.category,
    categoryName: cat?.name ?? "",
    essences: p.essences,
    marque: p.marque ?? null,
    image: p.images[0]?.src ?? null,
    lengths,
    packs: stere ? ["Vrac / au stère"] : [...new Set(labels.map(packOf))],
    weights: [...new Set(labels.map(weightOf).filter((x): x is string => Boolean(x)))],
    from: startingPrice(prices, p),
    prices: known,
    variantCount: stere ? tarifs.length * p.variants.length : p.variants.length,
    availability: p.availability,
    stere,
    search: fold([p.name, p.marque ?? "", cat?.name ?? "", ...p.essences, ...labels, ...lengths].join(" ")),
  };
}
