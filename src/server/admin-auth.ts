import "server-only";
import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

/**
 * Accès au panel admin, protégé par un mot de passe.
 *
 * Variable d'environnement (à définir sur Vercel, jamais dans le code) :
 *   ADMIN_PASSWORD   mot de passe du panel admin (12 caractères minimum conseillés)
 *
 * La session est un cookie signé (HMAC) valable 7 jours. Changer le mot de passe
 * déconnecte automatiquement toutes les sessions ouvertes.
 */

export const SESSION_COOKIE = "admin_session";
const SESSION_DAYS = 7;

const DEV_PASSWORD = "admin-local";

/** En mode développement (npm run dev) uniquement, un mot de passe par défaut permet de tester. */
function adminPassword() {
  if (process.env.ADMIN_PASSWORD) return process.env.ADMIN_PASSWORD;
  return process.env.NODE_ENV === "development" ? DEV_PASSWORD : null;
}

export function adminConfigured() {
  return Boolean(adminPassword());
}

export function usingLocalDefaultPassword() {
  return !process.env.ADMIN_PASSWORD && process.env.NODE_ENV === "development";
}

function secret() {
  return createHash("sha256").update(`session:${adminPassword()}`).digest();
}

function sign(payload: string) {
  return createHmac("sha256", secret()).update(payload).digest("hex");
}

function safeEqual(a: string, b: string) {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  return ba.length === bb.length && timingSafeEqual(ba, bb);
}

export function checkPassword(candidate: string) {
  const pwd = adminPassword();
  if (!pwd) return false;
  // Comparaison à durée constante (sur les empreintes, de même longueur)
  const h = (s: string) => createHash("sha256").update(s).digest("hex");
  return safeEqual(h(candidate), h(pwd));
}

export function createSessionToken() {
  const exp = Date.now() + SESSION_DAYS * 24 * 3600 * 1000;
  return `${exp}.${sign(String(exp))}`;
}

export function sessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    path: "/",
    maxAge: SESSION_DAYS * 24 * 3600,
  };
}

function validToken(token: string | undefined) {
  if (!token || !adminConfigured()) return false;
  const [exp, sig] = token.split(".");
  if (!exp || !sig || Number(exp) < Date.now()) return false;
  return safeEqual(sig, sign(exp));
}

/** true si la requête en cours provient d'un administrateur connecté. */
export async function isAdmin() {
  const store = await cookies();
  return validToken(store.get(SESSION_COOKIE)?.value);
}

/** À appeler en tête de chaque page admin : renvoie vers la connexion si besoin. */
export async function requireAdmin() {
  if (!(await isAdmin())) {
    const { redirect } = await import("next/navigation");
    redirect("/admin");
  }
}
