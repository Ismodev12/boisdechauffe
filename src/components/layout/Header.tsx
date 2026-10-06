"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, productsMenu } from "@/config/navigation";
import { getDisplayName, phoneLink, siteConfig, whatsappLink } from "@/config/siteConfig";
import { useCart } from "@/components/cart/CartProvider";
import { CartIcon, CloseIcon, FlameIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

export function Header() {
  const pathname = usePathname();
  // Page sur laquelle le menu mobile a été ouvert : il se ferme dès qu'on change de page
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (o: boolean) => setOpenOn(o ? pathname : null);
  const { count, ready } = useCart();
  const tel = phoneLink();
  const wa = whatsappLink();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  // Menu déroulant « Produits » (ordinateur) : se ferme au changement de page
  const [menuOn, setMenuOn] = useState<string | null>(null);
  const productsOpen = menuOn === pathname;
  useEffect(() => {
    if (!productsOpen) return;
    const close = (e: Event) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !(e.target as HTMLElement).closest("[data-menu-produits]")) setMenuOn(null);
    };
    document.addEventListener("click", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", close);
    };
  }, [productsOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-cream-300/70 bg-cream-50/95 backdrop-blur supports-[backdrop-filter]:bg-cream-50/85">
        <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-bark-900"
            aria-label={`${getDisplayName()} — accueil`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bark-900 text-ember-500">
              <FlameIcon width={20} height={20} />
            </span>
            <span className="whitespace-nowrap font-serif text-lg font-semibold leading-tight tracking-tight sm:text-xl">
              {getDisplayName()}
            </span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-0.5 xl:gap-1">
              {mainNav.map((item) =>
                item.href === "/bois" ? (
                  <li key={item.href} className="relative" data-menu-produits>
                    <button
                      type="button"
                      aria-expanded={productsOpen}
                      aria-controls="menu-produits"
                      onClick={() => setMenuOn(productsOpen ? null : pathname)}
                      className={`flex items-center gap-1 whitespace-nowrap rounded-md px-2 py-2 text-[0.95rem] font-medium transition-colors hover:bg-cream-200 xl:px-3 ${
                        isActive("/bois") || isActive("/produit") ? "text-ember-700" : "text-bark-800"
                      }`}
                    >
                      {item.label}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className={productsOpen ? "rotate-180" : ""}>
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    {productsOpen && (
                      <div id="menu-produits" className="absolute left-0 top-full z-50 mt-2 w-80 rounded-xl border border-cream-300 bg-white p-2 shadow-xl">
                        <ul>
                          {productsMenu.map((m) => (
                            <li key={m.href}>
                              <Link href={m.href} className="block rounded-lg px-3 py-2.5 hover:bg-cream-100" onClick={() => setMenuOn(null)}>
                                <span className="block font-semibold text-bark-900">{m.label}</span>
                                <span className="block text-xs text-bark-600">{m.hint}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`whitespace-nowrap rounded-md px-2 py-2 text-[0.95rem] font-medium transition-colors hover:bg-cream-200 xl:px-3 ${
                        isActive(item.href) ? "text-ember-700" : "text-bark-800"
                      }`}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            {tel && (
              <a
                href={tel}
                className="hidden h-12 items-center justify-center gap-2 rounded-full px-3 text-bark-900 hover:bg-cream-200 sm:flex"
                aria-label={`Appeler le ${siteConfig.contact.telephone}`}
              >
                <PhoneIcon width={20} height={20} className="text-ember-600" />
                <span className="hidden text-sm font-semibold whitespace-nowrap 2xl:inline">{siteConfig.contact.telephone}</span>
              </a>
            )}
            <Link href="/bois" className="btn btn-primary hidden !min-h-10 !px-4 !py-2 text-sm md:inline-flex lg:hidden xl:inline-flex">
              Commander
            </Link>
            <Link
              href="/panier"
              className="relative flex h-12 w-12 items-center justify-center rounded-full text-bark-900 hover:bg-cream-200"
              aria-label={`Panier${ready && count ? ` (${count} article${count > 1 ? "s" : ""})` : ""}`}
            >
              <CartIcon />
              {ready && count > 0 && (
                <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-ember-600 px-1 text-xs font-bold text-white">
                  {count > 99 ? "99+" : count}
                </span>
              )}
            </Link>
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full text-bark-900 hover:bg-cream-200 lg:hidden"
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setOpen(!open)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Hors du <header> : son flou d'arrière-plan empêcherait le menu de couvrir l'écran */}
      {open && (
        <div id="menu-mobile" className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-cream-50 lg:hidden">
          <nav
            aria-label="Menu mobile"
            className="container-page py-4"
            onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}
          >
            <p className="pt-2 text-xs font-semibold uppercase tracking-wider text-bark-500">Produits</p>
            <ul className="mt-2 grid gap-2" aria-label="Produits">
              {productsMenu.map((m) => (
                <li key={m.href}>
                  <Link
                    href={m.href}
                    className={`block rounded-lg border px-4 py-3 ${isActive(m.href) && m.href !== "/bois" ? "border-ember-600 bg-white" : "border-cream-300 bg-white"}`}
                  >
                    <span className="block font-semibold text-bark-900">
                      {m.label}
                      {m.href === "/panier" && ready && count > 0 ? ` (${count})` : ""}
                    </span>
                    <span className="block text-xs text-bark-600">{m.hint}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-4 divide-y divide-cream-300">
              {[{ href: "/", label: "Accueil" }, ...mainNav.filter((i) => i.href !== "/bois")].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between py-4 text-lg font-medium ${
                      (item.href === "/" ? pathname === "/" : isActive(item.href)) ? "text-ember-700" : "text-bark-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {(tel || wa) && (
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-cream-300 pt-6">
                {tel && (
                  <a href={tel} className="btn btn-dark">
                    <PhoneIcon width={20} height={20} /> Appeler
                  </a>
                )}
                {wa && (
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="btn bg-[#1f9d55] text-white">
                    <WhatsAppIcon width={20} height={20} /> WhatsApp
                  </a>
                )}
                {siteConfig.contact.telephone && (
                  <p className="col-span-2 text-center text-sm text-bark-600">{siteConfig.contact.telephone}</p>
                )}
              </div>
            )}
          </nav>
        </div>
      )}
    </>
  );
}
