"use client";

import { emailLink, phoneLink, whatsappLink } from "@/config/siteConfig";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

/**
 * Affiché quand le serveur n'a pas pu transmettre le message (envoi d'email
 * non configuré) : le client peut l'envoyer lui-même, en un clic.
 */
export function SendFallback({ text, subject }: { text: string; subject: string }) {
  const wa = whatsappLink(text);
  const tel = phoneLink();
  const mail = emailLink(subject, text);

  return (
    <div role="alert" className="rounded-xl border border-amber-300 bg-amber-50 p-5 text-amber-950">
      <p className="font-semibold">Votre demande n’a pas pu être transmise automatiquement.</p>
      {wa || mail || tel ? (
        <>
          <p className="mt-1 text-sm">Envoyez-la-nous directement, le texte est déjà prêt :</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {wa && (
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn bg-[#1f9d55] text-white hover:bg-[#178246]">
                <WhatsAppIcon width={20} height={20} /> WhatsApp
              </a>
            )}
            {mail && (
              <a href={mail} className="btn btn-dark">
                <MailIcon width={20} height={20} /> Email
              </a>
            )}
            {tel && (
              <a href={tel} className="btn btn-outline">
                <PhoneIcon width={20} height={20} /> Appeler
              </a>
            )}
          </div>
        </>
      ) : (
        <p className="mt-1 text-sm">
          La transmission des commandes et les coordonnées du vendeur ne sont pas encore configurées sur ce site.
        </p>
      )}
      <details className="mt-4 text-sm">
        <summary className="cursor-pointer font-medium">Voir le récapitulatif à copier</summary>
        <pre className="mt-2 max-h-72 overflow-auto whitespace-pre-wrap rounded bg-white p-3 font-sans text-xs text-bark-800">{text}</pre>
      </details>
    </div>
  );
}
