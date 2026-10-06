import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import type { OrderSummary } from "@/lib/order";

/**
 * Paiement par carte via Stripe Checkout (API REST, sans SDK).
 *
 * Variables d'environnement (serveur uniquement) :
 *   STRIPE_SECRET_KEY       clé secrète (sk_test_... pour tester, sk_live_... en production)
 *   STRIPE_WEBHOOK_SECRET   secret du webhook (whsec_...) pour confirmer les paiements
 *
 * Le paiement en ligne n'est proposé que si STRIPE_SECRET_KEY est défini
 * ET que le total de la commande est entièrement connu (aucun « sur devis »).
 */

export function stripeEnabled() {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

export async function createCheckoutSession(opts: {
  summary: OrderSummary;
  orderRef: string;
  customerEmail: string;
  baseUrl: string;
}): Promise<string> {
  const { summary, orderRef, customerEmail, baseUrl } = opts;
  if (summary.total === null || summary.shipping.kind !== "prix") {
    throw new Error("Paiement en ligne impossible : total incomplet");
  }

  const p = new URLSearchParams();
  p.set("mode", "payment");
  p.set("locale", "fr");
  p.set("customer_email", customerEmail);
  p.set("client_reference_id", orderRef);
  p.set("metadata[order_ref]", orderRef);
  p.set("success_url", `${baseUrl}/merci?ref=${encodeURIComponent(orderRef)}&paiement=ok`);
  p.set("cancel_url", `${baseUrl}/commande?paiement=annule`);

  const items = [
    // Une ligne = un montant total (forfait de la grille ou quantité × prix), donc quantité Stripe = 1.
    // Le paiement n'est proposé que si tous les prix sont connus (summary.total !== null).
    ...summary.lines.map((l) => ({
      name: `${l.productName} — ${l.variantLabel} — ${l.quantityLabel}`,
      amount: l.lineTotal ?? 0,
      quantity: 1,
    })),
    { name: "Livraison", amount: summary.shipping.amount, quantity: 1 },
  ];
  items.forEach((it, i) => {
    p.set(`line_items[${i}][quantity]`, String(it.quantity));
    p.set(`line_items[${i}][price_data][currency]`, "eur");
    p.set(`line_items[${i}][price_data][unit_amount]`, String(Math.round(it.amount * 100)));
    p.set(`line_items[${i}][price_data][product_data][name]`, it.name);
  });

  const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: p,
  });
  const data = (await res.json()) as { url?: string; error?: { message?: string } };
  if (!res.ok || !data.url) throw new Error(`Stripe : ${data.error?.message ?? res.status}`);
  return data.url;
}

/** Vérifie la signature d'un webhook Stripe (en-tête `Stripe-Signature`). */
export function verifyStripeSignature(payload: string, header: string | null, toleranceSec = 300) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret || !header) return false;
  const parts = Object.fromEntries(header.split(",").map((kv) => kv.split("=") as [string, string]));
  const timestamp = Number(parts.t);
  const signatures = header
    .split(",")
    .filter((kv) => kv.startsWith("v1="))
    .map((kv) => kv.slice(3));
  if (!timestamp || !signatures.length) return false;
  if (Math.abs(Date.now() / 1000 - timestamp) > toleranceSec) return false;
  const expected = createHmac("sha256", secret).update(`${timestamp}.${payload}`).digest("hex");
  return signatures.some((sig) => {
    const a = Buffer.from(sig, "hex");
    const b = Buffer.from(expected, "hex");
    return a.length === b.length && timingSafeEqual(a, b);
  });
}
