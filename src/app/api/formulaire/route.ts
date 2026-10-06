import { getFormConfig } from "@/server/form-store";

export const dynamic = "force-dynamic";

/** Configuration publique du formulaire de commande (champs, libellés, placeholders). */
export async function GET() {
  const config = await getFormConfig();
  return Response.json(config, { headers: { "Cache-Control": "no-store" } });
}
