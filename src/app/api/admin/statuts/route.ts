import { isAdmin } from "@/server/admin-auth";
import { defaultStatuses, mergeStatuses } from "@/lib/status";
import { saveStatuses } from "@/server/status-store";

/**
 * Enregistre le statut de publication des fiches.
 * Corps : { statuses: { "slug": "publie" | "a-verifier" | "brouillon" } } — clés ou valeurs inconnues refusées.
 */
export async function PUT(req: Request) {
  if (!(await isAdmin())) return Response.json({ error: "Non autorisé." }, { status: 401 });
  const body = (await req.json().catch(() => null)) as { statuses?: Record<string, unknown> } | null;
  if (!body || typeof body.statuses !== "object" || !body.statuses) return Response.json({ error: "Données invalides." }, { status: 400 });

  const known = defaultStatuses();
  const clean = mergeStatuses(body.statuses);
  const rejected = Object.entries(body.statuses).filter(([k, v]) => !(k in known) || clean[k] !== v).map(([k]) => k);
  if (rejected.length) return Response.json({ error: "Certains statuts sont invalides.", fields: rejected }, { status: 400 });

  try {
    await saveStatuses(clean);
  } catch (err) {
    return Response.json({ error: (err as Error).message }, { status: 503 });
  }
  return Response.json({ ok: true, publies: Object.values(clean).filter((s) => s === "publie").length });
}
