import Link from "next/link";
import { absoluteUrl, jsonLd } from "@/lib/seo";

type Crumb = { href: string; label: string };

/** En-tête de page (H1) avec fil d'Ariane et données structurées BreadcrumbList. */
export function PageHeader({
  title,
  intro,
  crumbs = [],
  eyebrow,
}: {
  title: string;
  intro?: React.ReactNode;
  crumbs?: Crumb[];
  eyebrow?: string;
}) {
  const all = [{ href: "/", label: "Accueil" }, ...crumbs];
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, item: absoluteUrl(c.href) })),
  };

  return (
    <div className="border-b border-cream-300 bg-cream-100">
      <div className="container-page py-8 sm:py-12">
        {crumbs.length > 0 && (
          <>
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbLd)} />
            <nav aria-label="Fil d'Ariane" className="mb-4 text-sm text-bark-600">
              <ol className="flex flex-wrap items-center gap-1.5">
                {all.map((c, i) => (
                  <li key={c.href} className="flex items-center gap-1.5">
                    {i > 0 && <span aria-hidden="true">/</span>}
                    {i < all.length - 1 ? (
                      <Link href={c.href} className="hover:text-ember-700 hover:underline">
                        {c.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-bark-800">
                        {c.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </>
        )}
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-bark-900 sm:text-4xl lg:text-5xl">{title}</h1>
        {intro && <div className="mt-4 max-w-3xl text-base leading-relaxed text-bark-700 sm:text-lg">{intro}</div>}
      </div>
    </div>
  );
}
