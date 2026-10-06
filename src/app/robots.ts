import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/panier", "/commande", "/merci", "/admin"] },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
