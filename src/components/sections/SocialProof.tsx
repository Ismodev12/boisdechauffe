import Image from "next/image";
import { deliveryPhotos, showEmptyPlaceholders, testimonials, woodPhotos, type Photo } from "@/config/content";

/**
 * Avis clients, témoignages et photos réelles.
 * Les données viennent de `src/config/content.ts`. Rien n'est inventé :
 * tant que les listes sont vides, un emplacement réservé s'affiche.
 */
export function SocialProof() {
  const hasAny = testimonials.length || deliveryPhotos.length || woodPhotos.length;
  if (!hasAny && !showEmptyPlaceholders) return null;

  return (
    <section className="py-16 sm:py-20" aria-labelledby="avis-titre">
      <div className="container-page">
        <p className="eyebrow">Ils nous font confiance</p>
        <h2 id="avis-titre" className="mt-2 font-serif text-3xl font-semibold text-bark-900 sm:text-4xl">
          Avis clients et réalisations
        </h2>

        {testimonials.length > 0 ? (
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <li key={i} className="rounded-xl border border-cream-300 bg-white p-6">
                {t.rating && (
                  <p className="text-ember-600" aria-label={`Note : ${t.rating} sur 5`}>
                    {"★".repeat(t.rating)}
                    <span className="text-cream-300">{"★".repeat(5 - t.rating)}</span>
                  </p>
                )}
                <blockquote className="mt-3 leading-relaxed text-bark-700">« {t.text} »</blockquote>
                <p className="mt-4 text-sm font-semibold text-bark-900">
                  {t.author}
                  {t.date && <span className="font-normal text-bark-500"> — {t.date}</span>}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          showEmptyPlaceholders && (
            <EmptySlot title="Avis clients et témoignages" hint="Ajoutez vos vrais avis dans src/config/content.ts (testimonials)." />
          )
        )}

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <PhotoBlock title="Nos livraisons" photos={deliveryPhotos} hint="Ajoutez vos photos de livraison (deliveryPhotos)." />
          <PhotoBlock title="Notre bois" photos={woodPhotos} hint="Ajoutez vos photos de bois (woodPhotos)." />
        </div>
      </div>
    </section>
  );
}

function PhotoBlock({ title, photos, hint }: { title: string; photos: Photo[]; hint: string }) {
  if (!photos.length && !showEmptyPlaceholders) return null;
  return (
    <div>
      <h3 className="text-lg font-semibold text-bark-900">{title}</h3>
      {photos.length ? (
        <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {photos.map((p) => (
            <li key={p.src} className="relative aspect-square overflow-hidden rounded-lg bg-cream-200">
              <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 50vw, 20vw" className="object-cover" />
            </li>
          ))}
        </ul>
      ) : (
        <EmptySlot title={`Photos — ${title.toLowerCase()}`} hint={hint} />
      )}
    </div>
  );
}

function EmptySlot({ title, hint }: { title: string; hint: string }) {
  return (
    <div className="mt-4 rounded-xl border-2 border-dashed border-amber-400 bg-amber-50/60 p-6 text-center">
      <p className="font-semibold text-amber-900">À compléter : {title}</p>
      <p className="mt-1 text-sm text-amber-800">{hint}</p>
    </div>
  );
}
