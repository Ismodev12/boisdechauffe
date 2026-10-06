import Link from "next/link";
import { categories } from "@/config/categories";
import { productsInCategory } from "@/config/products";
import { publishedProducts } from "@/lib/status";
import { getStatuses } from "@/server/status-store";

/** Onglets de catégories (défilement horizontal sur mobile). */
export async function CategoryNav({ current }: { current?: string }) {
  const statuses = await getStatuses();
  const counts = new Map(categories.map((c) => [c.slug, publishedProducts(statuses, productsInCategory(c.slug)).length]));
  const tabs = [{ slug: "", name: "Tous les produits" }, ...categories.filter((c) => counts.get(c.slug))];
  return (
    <nav aria-label="Catégories" className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <ul className="flex gap-2 whitespace-nowrap pb-1">
        {tabs.map((c) => {
          const active = (current ?? "") === c.slug;
          const count = c.slug ? (counts.get(c.slug) ?? 0) : null;
          return (
            <li key={c.slug || "tous"}>
              <Link
                href={c.slug ? `/bois/${c.slug}` : "/bois"}
                aria-current={active ? "page" : undefined}
                className={`inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-semibold ${
                  active ? "border-bark-900 bg-bark-900 text-cream-50" : "border-cream-400 bg-white text-bark-800 hover:border-bark-700"
                }`}
              >
                {c.name}
                {count !== null && <span className={`ml-1.5 text-xs ${active ? "text-cream-300" : "text-bark-500"}`}>{count}</span>}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
