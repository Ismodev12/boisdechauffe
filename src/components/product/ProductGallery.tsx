"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "@/config/products";
import { NoPhoto } from "@/components/product/NoPhoto";

export function ProductGallery({ images, name }: { images: ProductImage[]; name: string }) {
  const [active, setActive] = useState(0);
  const current = images[active];

  if (!current) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl" role="img" aria-label={`Photo à venir — ${name}`}>
        <NoPhoto label={name} />
      </div>
    );
  }

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-cream-200">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {current.illustration && (
          <span className="absolute bottom-3 left-3 rounded bg-black/60 px-2 py-1 text-xs text-white">
            Photo d’illustration
          </span>
        )}
      </div>
      {images.length > 1 && (
        <ul className="mt-3 grid grid-cols-4 gap-2 sm:gap-3" aria-label="Autres photos">
          {images.map((img, i) => (
            <li key={img.src + i}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className={`relative block aspect-square w-full overflow-hidden rounded-lg border-2 ${
                  i === active ? "border-ember-600" : "border-transparent opacity-80 hover:opacity-100"
                }`}
                aria-label={`Afficher la photo ${i + 1}`}
                aria-pressed={i === active}
              >
                <Image src={img.src} alt="" fill sizes="120px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
