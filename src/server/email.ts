import "server-only";

/**
 * Envoi d'emails via l'API Resend (https://resend.com), sans dépendance.
 *
 * Variables d'environnement (serveur uniquement, jamais dans le code) :
 *   RESEND_API_KEY          clé API Resend
 *   EMAIL_FROM              expéditeur vérifié, ex. "Commandes <commandes@votre-domaine.fr>"
 *   ORDER_NOTIFICATION_EMAIL  adresse qui reçoit les commandes et messages
 *
 * Pour utiliser un autre prestataire (Brevo, Postmark, SMTP...), remplacez
 * uniquement la fonction `sendEmail`.
 */

export function emailConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.EMAIL_FROM && process.env.ORDER_NOTIFICATION_EMAIL);
}

export function sellerEmail() {
  return process.env.ORDER_NOTIFICATION_EMAIL ?? "";
}

export async function sendEmail(msg: { to: string; subject: string; text: string; html: string; replyTo?: string }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM,
      to: [msg.to],
      subject: msg.subject,
      text: msg.text,
      html: msg.html,
      ...(msg.replyTo && { reply_to: msg.replyTo }),
    }),
  });
  if (!res.ok) {
    // On ne journalise pas le contenu (données personnelles), seulement le statut.
    throw new Error(`Envoi email échoué (HTTP ${res.status})`);
  }
}

export function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

/** Transforme un texte brut en HTML simple et sûr. */
export function textToHtml(text: string) {
  return `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#2a1c13">${escapeHtml(text).replace(/\n/g, "<br>")}</div>`;
}
