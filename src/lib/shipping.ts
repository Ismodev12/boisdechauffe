import { countries, franceGrid, messageLivraisonSurDevis, type Country } from "@/config/shipping";

export type ShippingRequest = {
  countryCode: string;
  postalCode?: string;
  city?: string;
  /** Quantité totale commandée, en stères. */
  quantity: number;
};

export type ShippingQuote =
  | { kind: "prix"; amount: number; label: string; leadTime: string | null }
  | { kind: "devis"; reason: string; leadTime: string | null }
  | { kind: "incomplet"; reason: string };

export function getCountry(code: string): Country | undefined {
  return countries.find((c) => c.code === code);
}

/** Département français à partir du code postal (gère la Corse et l'Outre-mer). */
export function departmentFromPostalCode(postalCode: string): string | null {
  const cp = postalCode.trim();
  if (!/^\d{5}$/.test(cp)) return null;
  if (cp.startsWith("97") || cp.startsWith("98")) return cp.slice(0, 3);
  if (cp.startsWith("20")) return Number(cp) < 20200 ? "2A" : "2B";
  return cp.slice(0, 2);
}

/**
 * Estimation des frais de livraison — TOUJOURS séparée du prix du bois.
 *
 * Critères pris en compte : pays, code postal (zone/département), quantité de stères.
 * Point d'extension : pour ajouter un calcul selon la ville ou la distance réelle
 * (API de géolocalisation, transporteur...), c'est cette fonction qu'il faut
 * enrichir — `city` est déjà transmis. Le reste du site n'utilise que son résultat.
 */
export function estimateShipping(req: ShippingRequest): ShippingQuote {
  const country = getCountry(req.countryCode);
  if (!country) return { kind: "incomplet", reason: "Choisissez un pays de livraison." };

  const devis: ShippingQuote = { kind: "devis", reason: messageLivraisonSurDevis, leadTime: country.leadTime };

  if (country.mode === "devis") return devis;

  // Mode "grille" (France)
  if (!req.postalCode) return { kind: "incomplet", reason: "Indiquez votre code postal pour estimer la livraison." };
  const dept = departmentFromPostalCode(req.postalCode);
  if (!dept) return { kind: "incomplet", reason: "Code postal invalide (5 chiffres attendus)." };
  if (franceGrid.excludedDepartments.includes(dept)) return devis;

  const zone =
    franceGrid.zones.find((z) => z.departments.includes(dept)) ??
    franceGrid.zones.find((z) => z.departments.length === 0);
  if (!zone) return devis;

  const qty = Math.max(1, req.quantity);
  const tier = zone.tiers.find((t) => t.maxQuantity === null || qty <= t.maxQuantity);
  if (!tier || tier.price === null) return devis;

  return { kind: "prix", amount: tier.price, label: zone.label, leadTime: country.leadTime };
}

/** Lignes de la grille France pour l'affichage, ex. « 1 à 5 stères » → 75. Prix null = sur devis. */
export function franceTariffRows() {
  const zone = franceGrid.zones.find((z) => z.departments.length === 0) ?? franceGrid.zones[0];
  if (!zone) return [];
  let from = 1;
  return zone.tiers.map((t) => {
    const label = t.maxQuantity === null ? `${from} stères et plus` : `${from} à ${t.maxQuantity} stères`;
    if (t.maxQuantity !== null) from = t.maxQuantity + 1;
    return { label, price: t.price };
  });
}

/** Grille France en une phrase, ex. « 75 € de 1 à 5 stères, 90 € de 6 à 20 stères et 105 € à partir de 21 stères ». */
export function franceTariffSentence() {
  const parts = franceTariffRows().map((r) => {
    const price = r.price === null ? "sur devis" : `${r.price.toLocaleString("fr-FR")} €`;
    const qty = r.label.endsWith("et plus") ? `à partir de ${r.label.replace(" et plus", "")}` : `de ${r.label}`;
    return `${price} ${qty}`;
  });
  return parts.length > 1 ? `${parts.slice(0, -1).join(", ")} et ${parts[parts.length - 1]}` : (parts[0] ?? "");
}
