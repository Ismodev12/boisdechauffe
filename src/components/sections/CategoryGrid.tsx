import Image from "next/image";
import Link from "next/link";
import { categories } from "@/config/categories";
import { productsInCategory } from "@/config/products";
import { NoPhoto } from "@/components/product/NoPhoto";
import { publishedProducts } from "@/lib/status";
import { getStatuses } from "@/server/status-store";

/** Les catégories du catalogue qui ont des fiches publiées, avec visuel et bouton (page d'accueil). */
export async function CategoryGrid() {
  const statuses = await getStatuses();
  const shown = categories
    .map((c) => ({ ...c, n: publishedProducts(statuses, productsInCategory(c.slug)).length }))
    .filter((c) => c.n > 0);
  return (
    <section className="bg-cream-100 py-14 sm:py-20" aria-labelledby="categories-titre">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Nos produits</p>
            <h2 id="categories-titre" className="mt-2 font-serif text-3xl font-semibold text-bark-900 sm:text-4xl">
              Choisissez votre combustible
            </h2>
          </div>
          <Link href="/bois" className="btn btn-outline">
            Tous les produits
          </Link>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map(({ n, ...c }) => {
            return (
              <li key={c.slug} className="flex flex-col overflow-hidden rounded-xl border border-cream-300 bg-white shadow-sm" data-testid="carte-categorie">
                <Link href={`/bois/${c.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-bark-900" tabIndex={-1} aria-hidden="true">
                  {c.image ? (
                    <Image src={c.image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-500 hover:scale-105" />
                  ) : (
                    <NoPhoto label="" />
                  )}
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-xl font-semibold text-bark-900">{c.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-bark-600">{c.description}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-bark-500">
                    {n} produit{n > 1 ? "s" : ""}
                  </p>
                  <Link href={`/bois/${c.slug}`} className="btn btn-primary mt-4 w-full">
                    Explorer
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
