import type { Metadata } from "next";
import { getDisplayName, siteConfig } from "@/config/siteConfig";

/** Métadonnées d'une page : titre, description, URL canonique, Open Graph. */
export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: "fr_FR",
      siteName: getDisplayName(),
      images: [{ url: image ?? "/images/site/hero-bois-empile.jpg" }],
    },
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

/** Sérialise des données structurées JSON-LD sans risque d'injection HTML. */
export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
