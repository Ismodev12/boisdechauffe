import { emailConfigured, sellerEmail, sendEmail, textToHtml } from "@/server/email";
import { verifyStripeSignature } from "@/server/stripe";

/**
 * Webhook Stripe : confirme les paiements réussis.
 * À déclarer dans le tableau de bord Stripe → Développeurs → Webhooks :
 *   URL : https://VOTRE-DOMAINE/api/paiement/stripe/webhook
 *   Événement : checkout.session.completed
 */
export async function POST(req: Request) {
  const payload = await req.text();
  if (!verifyStripeSignature(payload, req.headers.get("stripe-signature"))) {
    return new Response("Signature invalide", { status: 400 });
  }

  const event = JSON.parse(payload) as {
    type: string;
    data: { object: { metadata?: { order_ref?: string }; amount_total?: number; payment_status?: string } };
  };

  if (event.type === "checkout.session.completed" && event.data.object.payment_status === "paid") {
    const ref = event.data.object.metadata?.order_ref ?? "(référence inconnue)";
    const amount = ((event.data.object.amount_total ?? 0) / 100).toFixed(2).replace(".", ",");
    if (emailConfigured()) {
      const text = `Paiement reçu pour la commande ${ref} : ${amount} €.`;
      await sendEmail({ to: sellerEmail(), subject: `Paiement reçu — ${ref}`, text, html: textToHtml(text) }).catch((e) =>
        console.error(`[webhook] ${(e as Error).message}`),
      );
    }
  }

  return Response.json({ received: true });
}
