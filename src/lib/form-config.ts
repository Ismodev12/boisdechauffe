import { countries } from "@/config/shipping";
import { isEmail, isPhone, str, type Errors } from "@/lib/validation";

/**
 * Formulaire de commande configurable depuis le panel admin.
 *
 * Champs « système » : reliés au calcul de livraison et au traitement de la commande.
 * Ils peuvent être renommés, mais certains (`locked`) restent toujours visibles et obligatoires.
 * Champs « personnalisés » : ajoutés librement par l'administrateur.
 */

export const SYSTEM_KEYS = [
  "firstName",
  "lastName",
  "phone",
  "email",
  "address",
  "postalCode",
  "city",
  "countryCode",
  "notes",
] as const;
export type SystemKey = (typeof SYSTEM_KEYS)[number];

export const FIELD_TYPES = ["text", "email", "tel", "textarea", "select", "number"] as const;
export type FieldType = (typeof FIELD_TYPES)[number] | "country";

export type FormField = {
  /** Identifiant stable (champ système = sa clé ; champ perso = "perso-xxxx"). */
  id: string;
  system?: SystemKey;
  label: string;
  placeholder: string;
  type: FieldType;
  required: boolean;
  enabled: boolean;
  /** Pour les listes déroulantes. */
  options?: string[];
  /** Largeur sur ordinateur. */
  width: "full" | "half";
};

export type FormConfig = {
  title: string;
  intro: string;
  submitLabel: string;
  fields: FormField[];
  thankYou: { title: string; message: string };
  updatedAt?: string;
};

/** Champs système qui doivent toujours être visibles et obligatoires (livraison). */
export const LOCKED_SYSTEM: SystemKey[] = ["lastName", "phone", "address", "postalCode", "city", "countryCode"];

const SYSTEM_TYPES: Record<SystemKey, FieldType> = {
  firstName: "text",
  lastName: "text",
  phone: "tel",
  email: "email",
  address: "text",
  postalCode: "text",
  city: "text",
  countryCode: "country",
  notes: "textarea",
};

const sys = (system: SystemKey, label: string, placeholder: string, width: "full" | "half", required = true): FormField => ({
  id: system,
  system,
  label,
  placeholder,
  type: SYSTEM_TYPES[system],
  required,
  enabled: true,
  width,
});

export const DEFAULT_FORM_CONFIG: FormConfig = {
  title: "Vos coordonnées",
  intro: "Remplissez ce formulaire : nous vous recontactons rapidement pour confirmer la livraison et le règlement.",
  submitLabel: "Envoyer ma commande",
  fields: [
    sys("firstName", "Prénom", "", "half"),
    sys("lastName", "Nom", "", "half"),
    sys("phone", "Téléphone", "06 12 34 56 78", "half"),
    sys("email", "Email", "vous@exemple.fr", "half"),
    sys("countryCode", "Pays", "", "full"),
    sys("address", "Adresse", "N° et nom de rue", "full"),
    sys("postalCode", "Code postal", "", "half"),
    sys("city", "Ville", "", "half"),
    sys("notes", "Informations complémentaires", "Accès, portail, créneaux de livraison…", "full", false),
  ],
  thankYou: {
    title: "Merci pour votre commande !",
    message:
      "Votre commande a bien été envoyée. Nous vous recontactons rapidement pour confirmer la date de livraison, le tarif de transport et les modalités de règlement.",
  },
};

/* ---------- Nettoyage d'une configuration envoyée par l'admin ---------- */

const MAX_FIELDS = 30;

export function sanitizeFormConfig(input: unknown): { config: FormConfig } | { error: string } {
  const o = (input ?? {}) as Record<string, unknown>;
  const rawFields = Array.isArray(o.fields) ? o.fields.slice(0, MAX_FIELDS) : [];
  const fields: FormField[] = [];
  const seen = new Set<string>();

  for (const f of rawFields as Record<string, unknown>[]) {
    const system = SYSTEM_KEYS.find((k) => k === f?.system);
    const id = system ?? str(f?.id, 40).replace(/[^a-z0-9-]/gi, "");
    if (!id || seen.has(id) || (!system && !id.startsWith("perso-"))) continue;
    seen.add(id);
    const locked = system && LOCKED_SYSTEM.includes(system);
    const type: FieldType = system
      ? SYSTEM_TYPES[system]
      : FIELD_TYPES.includes(f?.type as never)
        ? (f.type as FieldType)
        : "text";
    const options =
      type === "select" && Array.isArray(f?.options)
        ? (f.options as unknown[]).map((x) => str(x, 80)).filter(Boolean).slice(0, 30)
        : undefined;
    fields.push({
      id,
      ...(system && { system }),
      label: str(f?.label, 80) || (system ? DEFAULT_FORM_CONFIG.fields.find((d) => d.system === system)!.label : "Champ"),
      placeholder: str(f?.placeholder, 120),
      type,
      required: locked ? true : Boolean(f?.required),
      enabled: locked ? true : Boolean(f?.enabled),
      ...(options && { options }),
      width: f?.width === "half" ? "half" : "full",
    });
  }

  // Les champs système manquants sont réintégrés (on ne peut pas les supprimer)
  for (const d of DEFAULT_FORM_CONFIG.fields) {
    if (!fields.some((f) => f.system === d.system)) fields.push({ ...d, enabled: LOCKED_SYSTEM.includes(d.system!) || false });
  }
  if (fields.some((f) => f.type === "select" && f.enabled && !f.options?.length)) {
    return { error: "Une liste déroulante active doit avoir au moins un choix." };
  }

  const thank = (o.thankYou ?? {}) as Record<string, unknown>;
  return {
    config: {
      title: str(o.title, 120) || DEFAULT_FORM_CONFIG.title,
      intro: str(o.intro, 600),
      submitLabel: str(o.submitLabel, 60) || DEFAULT_FORM_CONFIG.submitLabel,
      fields,
      thankYou: {
        title: str(thank.title, 120) || DEFAULT_FORM_CONFIG.thankYou.title,
        message: str(thank.message, 1500),
      },
      updatedAt: new Date().toISOString(),
    },
  };
}

/* ---------- Validation des réponses d'un client ---------- */

export type Answers = Record<string, string>;

export function activeFields(config: FormConfig) {
  return config.fields.filter((f) => f.enabled);
}

export function readAnswers(config: FormConfig, input: unknown): Answers {
  const o = (input ?? {}) as Record<string, unknown>;
  const out: Answers = {};
  for (const f of activeFields(config)) out[f.id] = str(o[f.id], f.type === "textarea" ? 2000 : 200);
  return out;
}

export function validateAnswers(config: FormConfig, a: Answers): Errors {
  const e: Errors = {};
  for (const f of activeFields(config)) {
    const v = a[f.id] ?? "";
    if (!v) {
      if (f.required) e[f.id] = `Ce champ est obligatoire : ${f.label}.`;
      continue;
    }
    if (f.type === "email" && !isEmail(v)) e[f.id] = "Adresse email invalide.";
    else if (f.type === "tel" && !isPhone(v)) e[f.id] = "Numéro de téléphone invalide.";
    else if (f.type === "number" && !/^\d+([.,]\d+)?$/.test(v)) e[f.id] = "Nombre attendu.";
    else if (f.type === "country" && !countries.some((c) => c.code === v)) e[f.id] = "Choisissez un pays.";
    else if (f.type === "select" && !f.options?.includes(v)) e[f.id] = "Choix invalide.";
    else if (f.system === "postalCode" && a.countryCode === "FR" && !/^\d{5}$/.test(v)) e[f.id] = "Code postal français : 5 chiffres.";
  }
  return e;
}

/** Valeur lisible d'une réponse (ex. code pays → nom). */
export function displayAnswer(f: FormField, v: string) {
  if (f.type === "country") return countries.find((c) => c.code === v)?.name ?? v;
  return v;
}
