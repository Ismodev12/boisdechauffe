import { isAdmin } from "@/server/admin-auth";
import { defaultPrices, type PriceMap } from "@/lib/prices";
import { savePrices } from "@/server/prices-store";

/**
 * Enregistre les prix et leur statut.
 * Corps : { prices: { "produit::variante": prix | null }, validated: ["produit::variante", ...] }
 * Un prix vide (null) revient au prix provisoire du catalogue : un produit a toujours un prix.
 */
export async function PUT(req: Request) {
  if (!(await isAdmin())) return Response.json({ error: "Non autorisé." }, { status: 401 });
  const body = (await req.json().catch(() => null)) as { prices?: Record<string, unknown>; validated?: unknown } | null;
  if (!body || typeof body.prices !== "object" || !body.prices) return Response.json({ error: "Données invalides." }, { status: 400 });

  const defaults = defaultPrices();
  const clean: PriceMap = {};
  const errors: string[] = [];
  for (const key of Object.keys(defaults)) {
    const v = body.prices[key];
    if (v === null || v === undefined || v === "") clean[key] = defaults[key];
    else if (typeof v === "number" && Number.isFinite(v) && v > 0 && v < 1_000_000) clean[key] = Math.round(v * 100) / 100;
    else errors.push(key);
  }
  if (errors.length) return Response.json({ error: "Certains prix sont invalides.", fields: errors }, { status: 400 });
  const validated = Array.isArray(body.validated) ? [...new Set(body.validated.filter((k): k is string => typeof k === "string" && k in defaults))] : [];

  try {
    await savePrices(clean, validated);
  } catch (err) {
    return Response.json({ error: (err as Error).message }, { status: 503 });
  }
  return Response.json({ ok: true, validated: validated.length });
}
