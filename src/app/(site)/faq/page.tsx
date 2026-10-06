import Link from "next/link";
import { faq } from "@/config/content";
import { PageHeader } from "@/components/PageHeader";
import { ChevronIcon } from "@/components/icons";
import { jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ — questions sur le bois de chauffage et la livraison",
  description:
    "Essences, longueurs de bûches, livraison en France, Belgique, Suisse ou Allemagne, délais et frais de transport : réponses à vos questions.",
  path: "/faq",
});

export default function FaqPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqLd)} />
      <PageHeader title="Questions fréquentes" crumbs={[{ href: "/faq", label: "FAQ" }]} />
      <div className="container-page max-w-3xl py-10 sm:py-14">
        <div className="divide-y divide-cream-300 rounded-xl border border-cream-300 bg-white">
          {faq.map((f) => (
            <details key={f.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left font-semibold text-bark-900 hover:bg-cream-50 [&::-webkit-details-marker]:hidden">
                <h2 className="text-base sm:text-lg">{f.question}</h2>
                <ChevronIcon className="shrink-0 text-ember-600 transition-transform group-open:rotate-90" />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-bark-700">{f.answer}</p>
            </details>
          ))}
        </div>
        <p className="mt-10 text-center text-bark-700">
          Vous n’avez pas trouvé votre réponse ?{" "}
          <Link href="/contact" className="font-semibold text-ember-700 underline underline-offset-2">
            Contactez-nous
          </Link>
          .
        </p>
      </div>
    </>
  );
}
