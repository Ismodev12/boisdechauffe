import "server-only";
import { DEFAULT_FORM_CONFIG, sanitizeFormConfig, type FormConfig } from "@/lib/form-config";
import { getJSON, setJSON } from "@/server/storage";

const KEY = "formulaire:config";

/** Configuration du formulaire ; valeurs par défaut si rien n'est enregistré ou si le stockage est indisponible. */
export async function getFormConfig(): Promise<FormConfig> {
  try {
    const saved = await getJSON<FormConfig>(KEY);
    if (!saved) return DEFAULT_FORM_CONFIG;
    const clean = sanitizeFormConfig(saved);
    return "config" in clean ? { ...clean.config, updatedAt: saved.updatedAt } : DEFAULT_FORM_CONFIG;
  } catch {
    return DEFAULT_FORM_CONFIG;
  }
}

export async function saveFormConfig(config: FormConfig) {
  await setJSON(KEY, config);
}
