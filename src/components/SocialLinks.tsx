import { siteConfig, whatsappLink } from "@/config/siteConfig";
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/components/icons";

/** Liens réseaux sociaux : seuls ceux renseignés dans `src/config/siteConfig.ts` s'affichent. */
export function SocialLinks({ className = "" }: { className?: string }) {
  const links = [
    { href: siteConfig.reseaux.facebook, label: "Facebook", Icon: FacebookIcon },
    { href: siteConfig.reseaux.tiktok, label: "TikTok", Icon: TikTokIcon },
    { href: siteConfig.reseaux.instagram, label: "Instagram", Icon: InstagramIcon },
    { href: whatsappLink(), label: "WhatsApp", Icon: WhatsAppIcon },
  ].filter((l): l is typeof l & { href: string } => Boolean(l.href));

  if (!links.length) return null;

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-current/20 transition-colors hover:bg-white/10"
          >
            <Icon width={20} height={20} />
          </a>
        </li>
      ))}
    </ul>
  );
}
