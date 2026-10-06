"use client";

import { useState } from "react";
import {
  DEFAULT_FORM_CONFIG,
  FIELD_TYPES,
  LOCKED_SYSTEM,
  type FieldType,
  type FormConfig,
  type FormField,
} from "@/lib/form-config";

const TYPE_LABELS: Record<FieldType, string> = {
  text: "Texte court",
  email: "Email",
  tel: "Téléphone",
  textarea: "Texte long",
  select: "Liste de choix",
  number: "Nombre",
  country: "Pays",
};

/** Éditeur du formulaire de commande : libellés, placeholders, champs, page de remerciements. */
export function FormEditor({ initial }: { initial: FormConfig }) {
  const [config, setConfig] = useState<FormConfig>(initial);
  const [status, setStatus] = useState<{ kind: "ok" | "error"; text: string } | null>(null);
  const [saving, setSaving] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  const set = (patch: Partial<FormConfig>) => {
    setConfig((c) => ({ ...c, ...patch }));
    setStatus(null);
  };
  const setField = (id: string, patch: Partial<FormField>) =>
    set({ fields: config.fields.map((f) => (f.id === id ? { ...f, ...patch } : f)) });
  const move = (i: number, dir: -1 | 1) => {
    const fields = [...config.fields];
    const j = i + dir;
    if (j < 0 || j >= fields.length) return;
    [fields[i], fields[j]] = [fields[j], fields[i]];
    set({ fields });
  };
  const addField = () =>
    set({
      fields: [
        ...config.fields,
        {
          id: `perso-${Math.random().toString(36).slice(2, 8)}`,
          label: "Nouveau champ",
          placeholder: "",
          type: "text",
          required: false,
          enabled: true,
          width: "full",
        },
      ],
    });

  async function save() {
    setSaving(true);
    setStatus(null);
    const res = await fetch("/api/admin/formulaire", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    }).catch(() => null);
    const data = res ? await res.json().catch(() => ({})) : {};
    setSaving(false);
    if (res?.ok) {
      setConfig(data.config);
      setStatus({ kind: "ok", text: "Formulaire enregistré ✓ — il est déjà visible par vos clients." });
    } else setStatus({ kind: "error", text: data.error ?? "Enregistrement impossible." });
  }

  return (
    <div className="space-y-6 pb-28">
      <section className="rounded-xl border border-cream-300 bg-white p-5">
        <h2 className="font-serif text-xl font-semibold text-bark-900">En-tête du formulaire</h2>
        <div className="mt-4 grid gap-4">
          <TextInput label="Titre" value={config.title} onChange={(title) => set({ title })} />
          <TextInput label="Texte d’introduction" value={config.intro} onChange={(intro) => set({ intro })} multiline />
          <TextInput label="Texte du bouton d’envoi" value={config.submitLabel} onChange={(submitLabel) => set({ submitLabel })} />
        </div>
      </section>

      <section className="rounded-xl border border-cream-300 bg-white p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-serif text-xl font-semibold text-bark-900">Champs du formulaire</h2>
          <button type="button" className="btn btn-dark !min-h-10 text-sm" onClick={addField}>
            + Ajouter un champ
          </button>
        </div>
        <p className="mt-1 text-sm text-bark-600">
          Renommez chaque champ et son texte d’exemple (placeholder). Les champs marqués 🔒 sont nécessaires à la
          livraison : ils restent visibles et obligatoires, mais vous pouvez les renommer.
        </p>

        <ol className="mt-5 space-y-3" data-testid="champs">
          {config.fields.map((f, i) => {
            const locked = Boolean(f.system && LOCKED_SYSTEM.includes(f.system));
            return (
              <li key={f.id} className={`rounded-lg border p-4 ${f.enabled ? "border-cream-300 bg-cream-50" : "border-dashed border-cream-400 bg-white opacity-70"}`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-bark-500">
                    {locked && "🔒 "}
                    {f.system ? "Champ du site" : "Champ personnalisé"} · {TYPE_LABELS[f.type]}
                  </p>
                  <div className="flex items-center gap-1">
                    <IconBtn label="Monter" onClick={() => move(i, -1)} disabled={i === 0}>
                      ↑
                    </IconBtn>
                    <IconBtn label="Descendre" onClick={() => move(i, 1)} disabled={i === config.fields.length - 1}>
                      ↓
                    </IconBtn>
                    {!f.system && (
                      <IconBtn label="Supprimer ce champ" onClick={() => set({ fields: config.fields.filter((x) => x.id !== f.id) })}>
                        ✕
                      </IconBtn>
                    )}
                  </div>
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <TextInput label="Nom du champ" value={f.label} onChange={(label) => setField(f.id, { label })} />
                  <TextInput label="Placeholder (texte d’exemple)" value={f.placeholder} onChange={(placeholder) => setField(f.id, { placeholder })} />
                  {!f.system && (
                    <label className="block">
                      <span className="field-label">Type de champ</span>
                      <select className="field" value={f.type} onChange={(e) => setField(f.id, { type: e.target.value as FieldType })}>
                        {FIELD_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {TYPE_LABELS[t]}
                          </option>
                        ))}
                      </select>
                    </label>
                  )}
                  {f.type === "select" && (
                    <TextInput
                      label="Choix proposés (un par ligne)"
                      multiline
                      value={(f.options ?? []).join("\n")}
                      onChange={(v) => setField(f.id, { options: v.split("\n") })}
                    />
                  )}
                </div>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <Toggle label="Visible" checked={f.enabled} disabled={locked} onChange={(enabled) => setField(f.id, { enabled })} />
                  <Toggle label="Obligatoire" checked={f.required} disabled={locked} onChange={(required) => setField(f.id, { required })} />
                  <Toggle
                    label="Demi-largeur (sur ordinateur)"
                    checked={f.width === "half"}
                    onChange={(half) => setField(f.id, { width: half ? "half" : "full" })}
                  />
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="rounded-xl border border-cream-300 bg-white p-5">
        <h2 className="font-serif text-xl font-semibold text-bark-900">Page de remerciements</h2>
        <p className="mt-1 text-sm text-bark-600">Affichée au client juste après l’envoi de sa commande.</p>
        <div className="mt-4 grid gap-4">
          <TextInput label="Titre" value={config.thankYou.title} onChange={(title) => set({ thankYou: { ...config.thankYou, title } })} />
          <TextInput
            label="Message"
            multiline
            value={config.thankYou.message}
            onChange={(message) => set({ thankYou: { ...config.thankYou, message } })}
          />
        </div>
      </section>

      <section className="rounded-xl border border-cream-300 bg-white p-5 text-sm">
        {confirmReset ? (
          <div className="flex flex-wrap items-center gap-3">
            <span>Remettre le formulaire d’origine ? (pensez ensuite à enregistrer)</span>
            <button
              type="button"
              className="btn btn-outline !min-h-10 text-sm"
              onClick={() => {
                set(DEFAULT_FORM_CONFIG);
                setConfirmReset(false);
              }}
            >
              Oui, rétablir
            </button>
            <button type="button" className="underline" onClick={() => setConfirmReset(false)}>
              Annuler
            </button>
          </div>
        ) : (
          <button type="button" className="text-bark-600 underline" onClick={() => setConfirmReset(true)}>
            Rétablir le formulaire par défaut
          </button>
        )}
      </section>

      {/* Barre d'enregistrement fixe */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-cream-300 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur">
        <div className="container-page flex flex-wrap items-center justify-between gap-3 py-3">
          <p role="status" className={`text-sm ${status?.kind === "error" ? "text-red-700" : "text-forest-700"}`}>
            {status?.text ?? ""}
          </p>
          <button type="button" className="btn btn-primary" onClick={save} disabled={saving}>
            {saving ? "Enregistrement…" : "Enregistrer le formulaire"}
          </button>
        </div>
      </div>
    </div>
  );
}

function TextInput({ label, value, onChange, multiline }: { label: string; value: string; onChange: (v: string) => void; multiline?: boolean }) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      {multiline ? (
        <textarea className="field min-h-24" value={value} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input className="field" value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </label>
  );
}

function Toggle({ label, checked, onChange, disabled }: { label: string; checked: boolean; onChange: (v: boolean) => void; disabled?: boolean }) {
  return (
    <label className={`flex items-center gap-2 ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}>
      <input type="checkbox" className="h-5 w-5 accent-ember-600" checked={checked} disabled={disabled} onChange={(e) => onChange(e.target.checked)} />
      {label}
    </label>
  );
}

function IconBtn({ label, onClick, disabled, children }: { label: string; onClick: () => void; disabled?: boolean; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      className="flex h-10 w-10 items-center justify-center rounded-md border border-cream-300 bg-white text-bark-800 hover:bg-cream-100 disabled:opacity-30"
    >
      {children}
    </button>
  );
}
