import { getCountry } from "@/lib/shipping";
import { readContact, readQuote, validateContact } from "@/lib/validation";
import { emailConfigured, sellerEmail, sendEmail, textToHtml } from "@/server/email";
import { clientIp, rateLimited } from "@/server/rate-limit";

/** Formulaire de contact et demande de devis (champ `type` : "contact" | "devis"). */
export async function POST(req: Request) {
  if (rateLimited(clientIp(req))) {
    return Response.json({ error: "Trop de messages envoyés. Réessayez dans quelques minutes." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Requête invalide." }, { status: 400 });
  }
  if (typeof body.website === "string" && body.website) return Response.json({ ok: true });

  const isQuote = body.type === "devis";
  const contact = readContact(body);
  const errors = validateContact(contact);
  if (Object.keys(errors).length) return Response.json({ errors }, { status: 400 });

  const quote = isQuote ? readQuote(body) : null;
  const country = getCountry(contact.countryCode)?.name ?? contact.countryCode;

  const text = [
    isQuote ? "DEMANDE DE DEVIS" : "MESSAGE DE CONTACT",
    "",
    `Nom : ${contact.name}`,
    `Email : ${contact.email}`,
    `Téléphone : ${contact.phone || "—"}`,
    `Pays : ${country}`,
    ...(quote
      ? [
          `Type de client : ${quote.customerType || "—"}`,
          `Produit : ${quote.essence || "—"}`,
          `Longueur : ${quote.length || "—"}`,
          `Quantité : ${quote.quantity || "—"}`,
          `Lieu de livraison : ${[quote.postalCode, quote.city].filter(Boolean).join(" ") || "—"}`,
          `Délai souhaité : ${quote.deadline || "—"}`,
        ]
      : []),
    "",
    "Message :",
    contact.message,
  ].join("\n");

  if (!emailConfigured()) {
    return Response.json({ error: "non_configure", text }, { status: 503 });
  }

  try {
    await sendEmail({
      to: sellerEmail(),
      replyTo: contact.email,
      subject: `${isQuote ? "Demande de devis" : "Contact"} — ${contact.name}`,
      text,
      html: textToHtml(text),
    });
  } catch (err) {
    console.error(`[contact] ${(err as Error).message}`);
    return Response.json({ error: "non_configure", text }, { status: 503 });
  }

  return Response.json({ ok: true });
}
