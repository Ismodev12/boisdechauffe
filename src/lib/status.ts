import { products, type Product, type Statut } from "@/config/products";

/**
 * Statut de publication de chaque fiche : slug → statut.
 * Valeurs par défaut du catalogue, remplacées par celles enregistrées dans le panel admin (/admin/produits).
 */
export type StatusMap = Record<string, Statut>;

export const statutLabels: Record<Statut, string> = {
  publie: "Publié",
  "a-verifier": "À vérifier",
  brouillon: "Brouillon",
};

const STATUTS = Object.keys(statutLabels) as Statut[];

export function defaultStatuses(): StatusMap {
  return Object.fromEntries(products.map((p) => [p.slug, p.statut ?? "publie"]));
}

/** Fusionne les statuts enregistrés (admin) avec le catalogue ; ignore les clés et valeurs inconnues. */
export function mergeStatuses(saved: unknown): StatusMap {
  const map = defaultStatuses();
  if (saved && typeof saved === "object") {
    for (const [k, v] of Object.entries(saved as Record<string, unknown>)) {
      if (k in map && STATUTS.includes(v as Statut)) map[k] = v as Statut;
    }
  }
  return map;
}

/** true si la fiche est visible par les clients. Sans carte de statuts, on s'en tient au catalogue. */
export function isPublished(statuses: StatusMap | undefined, product: Pick<Product, "slug" | "statut">) {
  return (statuses?.[product.slug] ?? product.statut ?? "publie") === "publie";
}

export function publishedProducts(statuses: StatusMap, list: Product[] = products) {
  return list.filter((p) => isPublished(statuses, p));
}
