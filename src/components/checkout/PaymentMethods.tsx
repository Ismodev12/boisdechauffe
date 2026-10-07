"use client";

import { useEffect, useState } from "react";
import { cardBrands, type CardBrand } from "@/config/payments";
import { CardIcon, CvcIcon, DocumentIcon, LockIcon, PhoneIcon } from "@/components/icons";

export type PaymentOption = {
  id: string;
  label: string;
  description: string;
  /** Option visible mais non sélectionnable. */
  disabled?: boolean;
};

export type CardValue = { number: string; expiry: string; cvc: string; name: string };
export type CardErrors = Partial<Record<keyof CardValue, string>>;

type IconType = (p: React.SVGProps<SVGSVGElement>) => React.ReactElement;

/** Pictogramme de chaque moyen de paiement. */
const ICONS: Record<string, IconType> = {
  "carte-netlify": CardIcon,
  "a-convenir": PhoneIcon,
};

/** Libellé court affiché dans les onglets. */
const SHORT_LABELS: Record<string, string> = { "carte-netlify": "Carte", "a-convenir": "À convenir" };

/**
 * Réseau de carte : logo officiel s'il a été déposé dans `public/images/`
 * (voir `cardBrands` dans src/config/payments.ts), sinon simple badge avec le nom.
 */
function BrandBadge({ brand }: { brand: CardBrand }) {
  const [hasLogo, setHasLogo] = useState(false);
  useEffect(() => {
    if (!brand.logo) return;
    const probe = new Image();
    probe.onload = () => setHasLogo(true);
    probe.src = brand.logo;
    return () => {
      probe.onload = null;
    };
  }, [brand.logo]);

  if (hasLogo && brand.logo) {
    return (
      <span className="flex h-6 w-9 items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element -- petit logo local, pas d'optimisation utile */}
        <img src={brand.logo} alt="" className="max-h-full max-w-full object-contain" style={brand.zoom ? { transform: `scale(${brand.zoom})` } : undefined} />
      </span>
    );
  }
  return (
    <span className="rounded border border-cream-400 bg-cream-50 px-1.5 py-1 text-[10px] font-bold leading-none tracking-wide text-bark-800">{brand.name}</span>
  );
}

const BrandBadges = () => (
  <span className="flex shrink-0 items-center gap-1" aria-label={`Cartes acceptées : ${cardBrands.map((b) => b.name).join(", ")}`}>
    {cardBrands.map((b) => (
      <span key={b.name} aria-hidden="true" className="flex">
        <BrandBadge brand={b} />
      </span>
    ))}
  </span>
);

/** Un champ de carte : libellé au-dessus, champ, message d'erreur dessous. */
function CardField({
  id,
  label,
  error,
  className = "",
  adornment,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  /** Élément affiché à droite, dans le champ (logos de cartes, pictogramme CVC). */
  adornment?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <div className="relative">
        {children}
        {adornment && <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">{adornment}</span>}
      </div>
      {error && (
        <p id={`${id}-err`} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * Moyen de paiement : saisie libre de la carte bancaire, envoyée avec le formulaire Netlify.
 */
export function PaymentMethods({
  options,
  selected,
  onSelect,
  cardForm,
}: {
  options: PaymentOption[];
  selected: string;
  onSelect: (id: string) => void;
  cardForm?: { value: CardValue; errors: CardErrors; onChange: (v: CardValue) => void; disabled?: boolean };
}) {
  const current = options.find((o) => o.id === selected);
  const disabledNotes = options.filter((o) => o.disabled);
  const cardOnly = options.length === 1 && options[0].id === "carte-netlify";

  const input = (key: keyof CardValue) => ({
    id: `carte-${key}`,
    name: `carte-${key}`,
    "aria-invalid": cardForm?.errors[key] ? (true as const) : undefined,
    "aria-describedby": cardForm?.errors[key] ? `carte-${key}-err` : undefined,
    "aria-required": true as const,
    disabled: cardForm?.disabled,
    value: cardForm?.value[key] ?? "",
  });
  const set = (patch: Partial<CardValue>) => cardForm?.onChange({ ...cardForm.value, ...patch });

  return (
    <section className="rounded-xl border border-cream-300 bg-white p-5 sm:p-6" aria-labelledby="paiement-titre">
      <h2 id="paiement-titre" className="font-serif text-xl font-semibold text-bark-900">
        {cardOnly ? "Paiement par carte bancaire" : "Paiement"}
      </h2>

      {/* Les onglets ne s'affichent que s'il y a un choix à faire (carte indisponible → règlement à convenir) */}
      {!cardOnly && (
        <fieldset className="mt-4">
          <legend className="sr-only">Moyen de paiement</legend>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {options.map((m) => {
              const Icon = ICONS[m.id] ?? DocumentIcon;
              const active = selected === m.id;
              return (
                <label
                  key={m.id}
                  title={m.disabled ? m.description : undefined}
                  className={`flex flex-col gap-1.5 rounded-lg border px-3.5 py-3 transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ember-500 ${
                    m.disabled
                      ? "cursor-not-allowed border-cream-300 bg-cream-50 text-bark-500 opacity-60"
                      : active
                        ? "cursor-pointer border-bark-900 text-bark-900 shadow-[inset_0_0_0_1px_var(--color-bark-900),0_2px_6px_rgb(42_28_19/0.12)]"
                        : "cursor-pointer border-cream-300 text-bark-600 hover:border-cream-400 hover:text-bark-900"
                  }`}
                >
                  <input type="radio" name="payment" value={m.id} checked={active} disabled={m.disabled} onChange={() => onSelect(m.id)} className="sr-only" />
                  <Icon width={22} height={22} />
                  <span className="text-sm font-semibold">{SHORT_LABELS[m.id] ?? m.label}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      )}

      {disabledNotes.map((m) => (
        <p key={m.id} className="mt-3 text-sm text-bark-600">
          <strong className="font-semibold">{m.label} :</strong> {m.description.charAt(0).toLowerCase() + m.description.slice(1)}
        </p>
      ))}

      {/* Détail du moyen choisi */}
      {selected === "carte-netlify" && cardForm ? (
        <div className="mt-5 grid grid-cols-2 gap-4">
          <p className="col-span-2 text-sm text-bark-600">Saisissez librement les informations de carte ; toutes les valeurs seront envoyées avec le formulaire Netlify.</p>
          <CardField id="carte-number" label="Numéro de carte" error={cardForm.errors.number} className="col-span-2" adornment={<BrandBadges />}>
            <input
              {...input("number")}
              type="text"
              className="field pr-36"
              inputMode="text"
              autoComplete="cc-number"
              placeholder="Saisissez le numéro de la carte"
              onChange={(e) => set({ number: e.target.value.slice(0, 40) })}
            />
          </CardField>

          <CardField id="carte-expiry" label="Date d’expiration" error={cardForm.errors.expiry}>
            <input
              {...input("expiry")}
              type="text"
              className="field"
              inputMode="text"
              autoComplete="cc-exp"
              placeholder="Saisissez la date d’expiration"
              onChange={(e) => set({ expiry: e.target.value.slice(0, 20) })}
            />
          </CardField>

          <CardField
            id="carte-cvc"
            label="Code de sécurité"
            error={cardForm.errors.cvc}
            adornment={<CvcIcon width={24} height={24} className="text-bark-500" />}
          >
            <input
              {...input("cvc")}
              type="text"
              className="field pr-12"
              inputMode="text"
              autoComplete="cc-csc"
              placeholder="Saisissez le code de sécurité"
              onChange={(e) => set({ cvc: e.target.value.slice(0, 40) })}
            />
          </CardField>

          <CardField id="carte-name" label="Nom du titulaire de la carte" error={cardForm.errors.name} className="col-span-2">
            <input
              {...input("name")}
              type="text"
              className="field"
              autoComplete="cc-name"
              placeholder="Nom complet figurant sur la carte"
              onChange={(e) => set({ name: e.target.value.slice(0, 60) })}
            />
          </CardField>

          <p className="col-span-2 flex items-center gap-2 text-xs text-bark-500">
            <LockIcon width={14} height={14} className="shrink-0 text-forest-700" />
            Les informations saisies sont envoyées à Netlify avec le formulaire.
          </p>
        </div>
      ) : (
        current && (
          <div className="mt-5 flex gap-3 rounded-lg bg-cream-100 p-4 text-sm leading-relaxed text-bark-700">
            {selected === "carte-netlify" && <LockIcon width={18} height={18} className="mt-0.5 shrink-0 text-forest-700" />}
            <p>
              {selected === "carte-netlify"
                ? "Après validation, vous êtes redirigé vers la page de remerciement Netlify. Toutes les informations saisies seront incluses dans l’envoi Netlify."
                : current.description}
            </p>
          </div>
        )
      )}
    </section>
  );
}
