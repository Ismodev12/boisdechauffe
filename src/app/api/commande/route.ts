import { randomBytes } from "node:crypto";
import { enabledOfflineMethods } from "@/config/payments";
import { getDisplayName, siteConfig } from "@/config/siteConfig";
import { activeFields, displayAnswer, readAnswers, validateAnswers } from "@/lib/form-config";
import { summarizeOrder, type CartLine } from "@/lib/order";
import { getCountry } from "@/lib/shipping";
import { emailConfigured, sellerEmail, sendEmail, textToHtml } from "@/server/email";
import { getFormConfig } from "@/server/form-store";
import { orderText } from "@/server/order-email";
import { saveOrder } from "@/server/orders";
import { clientIp, rateLimited } from "@/server/rate-limit";
import { storageConfigured } from "@/server/storage";
import { getPrices, getValidated } from "@/server/prices-store";
import { getStatuses } from "@/server/status-store";
import { createCheckoutSession, stripeEnabled } from "@/server/stripe";

function newOrderRef() {
  const d = new Date();
  const date = `${d.getFullYear() % 100}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  return `CMD-${date}-${randomBytes(3).toString("hex").toUpperCase()}`;
}

function readLines(input: unknown): CartLine[] {
  if (!Array.isArray(input)) return [];
  return input.slice(0, 50).flatMap((l) => {
    const o = l as Record<string, unknown>;
    if (typeof o?.productSlug !== "string" || typeof o?.variantId !== "string") return [];
    const quantity = Number(o.quantity);
    if (!Number.isFinite(quantity) || quantity < 1) return [];
    return [{ productSlug: o.productSlug, variantId: o.variantId, quantity }];
  });
}

export async function POST(req: Request) {
  if (rateLimited(clientIp(req))) {
    return Response.json({ error: "Trop de tentatives. Réessayez dans quelques minutes." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Champ piège anti-robots : invisible pour les humains
  if (typeof body.website === "string" && body.website) return Response.json({ ok: true, ref: newOrderRef() });

  // Le formulaire est validé avec la configuration définie dans le panel admin
  const config = await getFormConfig();
  const answers = readAnswers(config, body.answers);
  const errors = validateAnswers(config, answers);
  if (Object.keys(errors).length) return Response.json({ errors }, { status: 400 });

  // Les prix sont TOUJOURS recalculés côté serveur (grille au stère + prix définis dans l’admin)
  const summary = summarizeOrder(
    readLines(body.lines),
    { countryCode: answers.countryCode, postalCode: answers.postalCode, city: answers.city },
    await getPrices(),
    await getValidated(),
    await getStatuses(),
  );
  if (!summary.lines.length) return Response.json({ error: "Aucun produit valide dans la commande." }, { status: 400 });

  const ref = newOrderRef();
  const wantsCard = body.paymentMethod === "carte-stripe";
  // Mode démonstration (site fictif / TP) : la carte saisie est factice.
  // Important : même ici, le serveur ne reçoit AUCUNE donnée de carte — le
  // front n'envoie que `lines` et `answers`. On se sert juste de ce drapeau
  // pour écrire un libellé clair et NE PAS déclencher le paiement Stripe.
  const isDemo = body.paymentMethod === "demonstration";
  const offline = enabledOfflineMethods().find((m) => m.id === body.paymentMethod);
  const paymentLabel = isDemo
    ? "Démonstration — carte fictive (aucun paiement réel)"
    : wantsCard
      ? "Carte bancaire en ligne (Stripe)"
      : (offline?.label ?? "À convenir avec le vendeur");
  if (wantsCard && !(stripeEnabled() && summary.total !== null)) {
    return Response.json({ error: "Le paiement en ligne n'est pas disponible pour cette commande." }, { status: 400 });
  }

  // On transforme les réponses brutes en paires { libellé, valeur } lisibles,
  // puis `orderText` en fait un récapitulatif texte structuré : PRODUITS,
  // sous-total / livraison / total, puis INFORMATIONS DU CLIENT (tous les
  // champs du formulaire). C'est ce texte qui part dans l'email.
  const labelled = activeFields(config).map((f) => ({ id: f.id, label: f.label, value: displayAnswer(f, answers[f.id] ?? "") }));
  const text = orderText(ref, labelled, summary, paymentLabel);
  const name = [answers.firstName, answers.lastName].filter(Boolean).join(" ");

  // 1. Enregistrement dans le panel admin
  let saved = false;
  if (storageConfigured()) {
    try {
      await saveOrder({
        ref,
        createdAt: new Date().toISOString(),
        status: "nouvelle",
        source: body.source === "direct" ? "direct" : "panier",
        answers: labelled,
        customerName: name,
        phone: answers.phone ?? "",
        email: answers.email ?? "",
        city: answers.city ?? "",
        country: getCountry(answers.countryCode)?.name ?? answers.countryCode ?? "",
        summary,
        paymentLabel,
      });
      saved = true;
    } catch (err) {
      console.error(`[commande] ${ref} non enregistrée : ${(err as Error).message}`);
    }
  }

  // 2. Notification email au vendeur (si Resend est configuré)
  let sellerNotified = false;
  if (emailConfigured()) {
    sellerNotified = await sendEmail({
      to: sellerEmail(),
      ...(answers.email && { replyTo: answers.email }),
      subject: `Nouvelle commande ${ref} — ${name}`,
      text,
      html: textToHtml(text),
    })
      .then(() => true)
      .catch((err) => {
        console.error(`[commande] ${ref} email vendeur : ${(err as Error).message}`);
        return false;
      });
  }

  // Ni enregistrée ni envoyée : le client doit nous la transmettre lui-même
  if (!saved && !sellerNotified) {
    return Response.json({ error: "non_configure", ref, text }, { status: 503 });
  }

  // 3. Accusé de réception au client : facultatif (nécessite un domaine vérifié chez Resend)
  let customerNotified = false;
  if (emailConfigured() && answers.email) {
    const contactLine = [
      siteConfig.contact.telephone && `Téléphone : ${siteConfig.contact.telephone}`,
      siteConfig.contact.email && `Email : ${siteConfig.contact.email}`,
    ]
      .filter(Boolean)
      .join("\n");
    const customerText = [
      `Bonjour ${answers.firstName || name},`,
      "",
      config.thankYou.message || `Nous avons bien reçu votre commande ${ref}.`,
      "",
      text,
      "",
      contactLine,
      "",
      getDisplayName(),
    ].join("\n");
    customerNotified = await sendEmail({
      to: answers.email,
      subject: `Votre commande ${ref} — ${getDisplayName()}`,
      text: customerText,
      html: textToHtml(customerText),
    })
      .then(() => true)
      .catch((err) => {
        console.warn(`[commande] ${ref} : accusé client non envoyé (${(err as Error).message})`);
        return false;
      });
  }

  if (wantsCard) {
    try {
      const origin = new URL(req.url).origin;
      const redirectUrl = await createCheckoutSession({
        summary,
        orderRef: ref,
        customerEmail: answers.email ?? "",
        baseUrl: origin,
      });
      return Response.json({ ok: true, ref, redirectUrl });
    } catch (err) {
      console.error(`[commande] ${ref} Stripe : ${(err as Error).message}`);
      return Response.json({
        ok: true,
        ref,
        warning: "Votre commande est enregistrée, mais le paiement en ligne n'a pas pu être lancé. Nous vous recontactons pour le règlement.",
      });
    }
  }

  return Response.json({ ok: true, ref, customerNotified });
}
