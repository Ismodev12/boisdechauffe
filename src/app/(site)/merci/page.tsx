import Link from "next/link";
import { phoneLink, siteConfig, whatsappLink } from "@/config/siteConfig";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { getFormConfig } from "@/server/form-store";

export const metadata = { title: "Merci pour votre commande", robots: { index: false } };

/** Page de remerciements après commande — titre et message modifiables depuis le panel admin. */
export default async function ThankYouPage({ searchParams }: PageProps<"/merci">) {
  const sp = await searchParams;
  const ref = typeof sp.ref === "string" ? sp.ref.replace(/[^A-Z0-9-]/gi, "").slice(0, 40) : null;
  const paid = sp.paiement === "ok";
  const paymentIssue = sp.info === "paiement";
  const { thankYou } = await getFormConfig();
  const tel = phoneLink();
  const wa = whatsappLink(ref ? `Bonjour, je vous contacte au sujet de ma commande ${ref}.` : undefined);

  return (
    <div className="container-page max-w-2xl py-16 text-center sm:py-24">
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest-700 text-white">
        <CheckIcon width={32} height={32} />
      </span>
      <h1 className="mt-6 font-serif text-3xl font-semibold text-bark-900 sm:text-4xl">
        {paid ? "Merci, votre paiement a été effectué" : thankYou.title}
      </h1>
      {ref && (
        <p className="mt-4 text-bark-700">
          Référence de commande : <strong className="font-mono">{ref}</strong>
        </p>
      )}
      {thankYou.message && <p className="mt-4 whitespace-pre-line leading-relaxed text-bark-700">{thankYou.message}</p>}
      {paymentIssue && (
        <p className="mt-4 rounded-lg bg-amber-50 p-4 text-sm text-amber-900">
          Le paiement en ligne n’a pas pu être lancé. Votre commande est bien enregistrée : nous vous recontactons pour le
          règlement.
        </p>
      )}
      {(tel || wa) && (
        <div className="mt-8 rounded-xl border border-cream-300 bg-white p-5">
          <p className="text-sm text-bark-700">Une question sur votre commande ?</p>
          <div className="mt-3 flex flex-col justify-center gap-3 sm:flex-row">
            {tel && (
              <a href={tel} className="btn btn-dark">
                <PhoneIcon width={20} height={20} /> {siteConfig.contact.telephone}
              </a>
            )}
            {wa && (
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn bg-[#1f9d55] text-white">
                <WhatsAppIcon width={20} height={20} /> WhatsApp
              </a>
            )}
          </div>
        </div>
      )}
      <Link href="/" className="btn btn-outline mt-8">
        Retour à l’accueil
      </Link>
    </div>
  );
}
