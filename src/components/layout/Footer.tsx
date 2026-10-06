import Link from "next/link";
import { footerNav, legalNav } from "@/config/navigation";
import { adresseSiegeTexte, emailLink, getDisplayName, phoneLink, siteConfig } from "@/config/siteConfig";
import { FlameIcon, FrenchFlag, MailIcon, MapPinIcon, PhoneIcon, TruckIcon } from "@/components/icons";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  const tel = phoneLink();
  const adresse = adresseSiegeTexte();
  // Informations de l'établissement : uniquement des données vérifiées (siteConfig.ts)
  const entreprise = (
    [
      ["Nom commercial", getDisplayName()],
      ["SIRET", siteConfig.legal.siret],
      ["Adresse", adresse],
    ] as [string, string | null][]
  ).filter(([, v]) => v);

  return (
    <footer className="mt-auto bg-bark-950 pb-24 text-cream-200 md:pb-0" data-testid="pied-de-page">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1.3fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5 text-cream-50">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-50/10 text-ember-500">
              <FlameIcon width={20} height={20} />
            </span>
            <span className="font-serif text-xl font-semibold">{getDisplayName()}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream-300">
            Vente de bois de chauffage en ligne, livraison selon votre destination : en France, et dans d’autres pays
            européens sur devis.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-cream-300">
            <FrenchFlag className="h-3.5 w-5 rounded-[2px]" />{" "}
            {siteConfig.entreprise.localisation ? `Basée à ${siteConfig.entreprise.localisation}` : "Entreprise basée en France"}
          </p>
          <SocialLinks className="mt-6 text-cream-100" />
        </div>

        <nav aria-label="Pied de page">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-cream-50">Navigation</h2>
          <ul className="mt-4 space-y-1 text-sm">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-9 items-center hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-cream-50">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {tel && (
              <li className="flex items-center gap-2">
                <PhoneIcon width={18} height={18} className="shrink-0 text-ember-500" />
                <a href={tel} className="hover:text-white">
                  {siteConfig.contact.telephone}
                </a>
              </li>
            )}
            {siteConfig.contact.email && (
              <li className="flex items-center gap-2">
                <MailIcon width={18} height={18} className="shrink-0 text-ember-500" />
                <a href={emailLink()!} className="break-all hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </li>
            )}
            {siteConfig.entreprise.zoneLivraison && (
              <li className="flex items-start gap-2">
                <TruckIcon width={18} height={18} className="mt-0.5 shrink-0 text-ember-500" />
                <span>Livraison : {siteConfig.entreprise.zoneLivraison}</span>
              </li>
            )}
          </ul>
          <Link href="/contact" className="mt-5 inline-block text-sm font-semibold text-ember-500 hover:text-white">
            Formulaire de contact →
          </Link>
        </div>

        <section aria-labelledby="pied-entreprise" data-testid="infos-entreprise">
          <h2 id="pied-entreprise" className="text-sm font-semibold uppercase tracking-wider text-cream-50">
            Informations sur l’entreprise
          </h2>
          <dl className="mt-4 space-y-3 text-sm">
            {entreprise.map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs uppercase tracking-wider text-cream-400">{k}</dt>
                <dd className="mt-0.5 flex items-start gap-2 text-cream-100">
                  {k === "Adresse" && <MapPinIcon width={16} height={16} className="mt-0.5 shrink-0 text-ember-500" />}
                  <span>{v}</span>
                </dd>
              </div>
            ))}
          </dl>
          <Link href="/mentions-legales" className="mt-5 inline-block text-sm font-semibold text-ember-500 hover:text-white">
            Mentions légales complètes →
          </Link>
        </section>
      </div>

      <div className="border-t border-cream-50/10">
        {/* md:pr-48 : laisse la place au bouton WhatsApp flottant (bas à droite) */}
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-cream-400 md:flex-row md:items-center md:justify-between md:pr-48">
          <p>
            © {new Date().getFullYear()} {getDisplayName()}
          </p>
          <nav aria-label="Informations légales">
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-8 items-center hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
