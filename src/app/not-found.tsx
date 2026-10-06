import Link from "next/link";
import { SiteChrome } from "@/components/layout/SiteChrome";

export const metadata = { title: "Page introuvable" };

export default function NotFound() {
  return (
    <SiteChrome>
    <div className="container-page max-w-xl py-24 text-center">
      <p className="eyebrow">Erreur 404</p>
      <h1 className="mt-3 font-serif text-3xl font-semibold text-bark-900 sm:text-4xl">Cette page est introuvable</h1>
      <p className="mt-4 text-bark-700">La page que vous cherchez n’existe pas ou a été déplacée.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/" className="btn btn-dark">
          Accueil
        </Link>
        <Link href="/bois" className="btn btn-primary">
          Voir nos bois
        </Link>
      </div>
    </div>
    </SiteChrome>
  );
}
