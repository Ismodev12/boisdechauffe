import "server-only";

/**
 * Limitation simple du nombre d'envois par adresse IP (protection anti-spam basique).
 * En mémoire : suffisant pour un petit site ; à remplacer par un stockage partagé
 * (ex. Upstash Redis) si le trafic devient important.
 */
const hits = new Map<string, number[]>();

export function rateLimited(ip: string, max = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > max;
}

export function clientIp(req: Request) {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "inconnu";
}
