import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { getDisplayName, siteConfig } from "@/config/siteConfig";
import { CartProvider } from "@/components/cart/CartProvider";
import { getPrices, getValidated } from "@/server/prices-store";
import { getStatuses } from "@/server/status-store";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Bois de chauffage très sec — idéal pour cet hiver",
    template: `%s | ${getDisplayName()}`,
  },
  description:
    "Bois de chauffage très sec : mélange chêne, frêne, hêtre et charme en 33 ou 50 cm. Tarifs dégressifs au stère. Livraison en France et en Europe selon destination.",
  applicationName: getDisplayName(),
  formatDetection: { telephone: false },
  openGraph: { locale: "fr_FR", type: "website", siteName: getDisplayName() },
};

export const viewport: Viewport = {
  themeColor: "#2a1c13",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  // Prix et statuts modifiables depuis l’admin : lus à chaque affichage pour être toujours à jour
  const [prices, validated, statuses] = await Promise.all([getPrices(), getValidated(), getStatuses()]);
  return (
    <html lang="fr" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <CartProvider prices={prices} validated={validated} statuses={statuses}>{children}</CartProvider>
      </body>
    </html>
  );
}
