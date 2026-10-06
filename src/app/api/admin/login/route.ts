import { cookies } from "next/headers";
import { adminConfigured, checkPassword, createSessionToken, SESSION_COOKIE, sessionCookieOptions } from "@/server/admin-auth";
import { clientIp, rateLimited } from "@/server/rate-limit";

export async function POST(req: Request) {
  // 10 essais par tranche de 15 minutes et par adresse IP
  if (rateLimited(`login:${clientIp(req)}`, 10, 15 * 60 * 1000)) {
    return Response.json({ error: "Trop de tentatives. Réessayez dans 15 minutes." }, { status: 429 });
  }
  if (!adminConfigured()) {
    return Response.json({ error: "Mot de passe admin non configuré (variable ADMIN_PASSWORD)." }, { status: 503 });
  }
  const body = (await req.json().catch(() => ({}))) as { password?: unknown };
  if (typeof body.password !== "string" || !checkPassword(body.password)) {
    return Response.json({ error: "Mot de passe incorrect." }, { status: 401 });
  }
  (await cookies()).set(SESSION_COOKIE, createSessionToken(), sessionCookieOptions());
  return Response.json({ ok: true });
}
