import type { Metadata } from "next";
import Link from "next/link";
import { getDisplayName } from "@/config/siteConfig";
import { LogoutButton } from "@/components/admin/LogoutButton";
import { isAdmin } from "@/server/admin-auth";

export const metadata: Metadata = {
  title: { default: "Administration", template: `%s — Admin ${getDisplayName()}` },
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const admin = await isAdmin();
  return (
    <div className="flex min-h-full flex-1 flex-col bg-cream-100">
      <header className="border-b border-bark-800 bg-bark-950 text-cream-100">
        <div className="container-page flex min-h-14 flex-wrap items-center justify-between gap-x-6 gap-y-2 py-2">
          <p className="font-serif text-lg font-semibold">
            {getDisplayName()} <span className="font-sans text-sm font-normal text-cream-400">· Admin</span>
          </p>
          {admin && (
            <nav aria-label="Administration" className="flex flex-wrap items-center gap-1 text-sm">
              <Link href="/admin/commandes" className="rounded-md px-3 py-2 hover:bg-white/10">
                Commandes
              </Link>
              <Link href="/admin/formulaire" className="rounded-md px-3 py-2 hover:bg-white/10">
                Formulaire
              </Link>
              <Link href="/admin/produits" className="rounded-md px-3 py-2 hover:bg-white/10">
                Produits
              </Link>
              <Link href="/admin/prix" className="rounded-md px-3 py-2 hover:bg-white/10">
                Prix
              </Link>
              <Link href="/" className="rounded-md px-3 py-2 hover:bg-white/10" target="_blank">
                Voir le site ↗
              </Link>
              <LogoutButton />
            </nav>
          )}
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
