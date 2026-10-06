import Image from "next/image";
import Link from "next/link";
import { getCategory } from "@/config/categories";
import { availabilityLabels, getLengths, type Product } from "@/config/products";
import { formatPrice } from "@/lib/format";
import { startingPrice, type PriceMap } from "@/lib/prices";
import { AvailabilityBadge } from "@/components/product/AvailabilityBadge";
import { NoPhoto } from "@/components/product/NoPhoto";

type Props = { product: Product; prices: PriceMap; priority?: boolean; wide?: boolean };

export function ProductCard({ product, prices, priority = false, wide = false }: Props) {
  const lengths = getLengths(product);
  const image = product.images[0];
  const from = startingPrice(prices, product);
  const eyebrow = product.essences.length ? product.essences.join(" · ") : (getCategory(product.category)?.name ?? "");
  const href = `/produit/${product.slug}`;

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-xl border border-cream-300 bg-white shadow-sm transition-shadow hover:shadow-md ${
        wide ? "sm:flex-row" : ""
      }`}
      data-testid="carte-produit"
    >
      <Link
        href={href}
        className={`relative block aspect-[4/3] overflow-hidden bg-cream-200 ${wide ? "sm:aspect-auto sm:min-h-80 sm:w-1/2" : ""}`}
        tabIndex={-1}
        aria-hidden="true"
      >
        {image ? (
          <Image
            src={image.src}
            alt=""
            fill
            sizes={wide ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading={priority ? "eager" : "lazy"}
          />
        ) : (
          <NoPhoto label={product.name} />
        )}
        <span className="absolute left-3 top-3">
          <AvailabilityBadge availability={product.availability} />
        </span>
      </Link>
      <div className={`flex flex-1 flex-col ${wide ? "p-5 sm:p-7" : "p-5"}`}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h3 className={`mt-2 font-serif font-semibold text-bark-900 ${wide ? "text-2xl" : "text-xl"}`}>
          <Link href={href} className="hover:text-ember-700">
            {product.name}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-bark-600 sm:text-base">{product.shortDescription}</p>
        {lengths.length > 0 && (
          <p className="mt-3 text-sm text-bark-700">
            Bûches de <strong>{lengths.join(", ").replace(/, ([^,]*)$/, " ou $1")} cm</strong>
          </p>
        )}
        <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-6">
          <p className="text-bark-900" data-testid="prix-carte">
            {from ? (
              <>
                <span className="block text-xs text-bark-500">à partir de</span>
                <span className="text-2xl font-semibold">{formatPrice(from.amount)}</span>
                <span className="text-sm text-bark-600"> / {from.unit}</span>
              </>
            ) : (
              <span className="font-semibold">Prix sur demande</span>
            )}
          </p>
          <Link href={href} className="btn btn-primary" aria-label={`Voir le produit — ${product.name}`}>
            {product.availability === "epuise" ? availabilityLabels.epuise : wide ? "Commander" : "Voir le produit"}
          </Link>
        </div>
      </div>
    </article>
  );
}
