import Link from "next/link";
import { whatsappLink } from "@/config/siteConfig";
import { WhatsAppIcon } from "@/components/icons";

/**
 * Bouton WhatsApp flottant (bas de l'écran).
 * Tant que le numéro WhatsApp n'est pas renseigné, il mène à la page Contact.
 */
export function WhatsAppButton() {
  const href = whatsappLink("Bonjour, je souhaite des informations sur votre bois de chauffage.");
  const className =
    "fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-30 flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-[#1f9d55] text-white shadow-lg shadow-black/25 transition-transform hover:scale-105 md:bottom-6 md:right-6 md:w-auto md:pl-4 md:pr-5";
  const content = (
    <>
      <WhatsAppIcon width={26} height={26} />
      <span className="hidden text-sm font-semibold md:inline">WhatsApp</span>
    </>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label="Nous écrire sur WhatsApp">
      {content}
    </a>
  ) : (
    <Link href="/contact" className={className} aria-label="Nous contacter">
      {content}
    </Link>
  );
}
