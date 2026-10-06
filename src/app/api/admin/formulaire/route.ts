import { sanitizeFormConfig } from "@/lib/form-config";
import { isAdmin } from "@/server/admin-auth";
import { saveFormConfig } from "@/server/form-store";

/** Enregistre la configuration du formulaire (libellés, placeholders, champs...). */
export async function PUT(req: Request) {
  if (!(await isAdmin())) return Response.json({ error: "Non autorisé." }, { status: 401 });
  const body = await req.json().catch(() => null);
  const result = sanitizeFormConfig(body);
  if ("error" in result) return Response.json({ error: result.error }, { status: 400 });
  try {
    await saveFormConfig(result.config);
  } catch (err) {
    return Response.json({ error: (err as Error).message }, { status: 503 });
  }
  return Response.json({ ok: true, config: result.config });
}
