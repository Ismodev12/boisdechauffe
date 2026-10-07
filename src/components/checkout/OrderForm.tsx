"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { OfflinePaymentMethod } from "@/config/payments";
import { useCart } from "@/components/cart/CartProvider";
import { OrderTotals } from "@/components/cart/OrderTotals";
import { PaymentMethods, type CardErrors, type CardValue, type PaymentOption } from "@/components/checkout/PaymentMethods";
import { ShippingResult } from "@/components/cart/ShippingResult";
import { SendFallback } from "@/components/forms/SendFallback";
import { activeFields, validateAnswers, type Answers, type FormConfig, type FormField } from "@/lib/form-config";
import { formatPrice } from "@/lib/format";
import { lineTotalText, summarizeOrder, type CartLine } from "@/lib/order";
import type { Errors } from "@/lib/validation";

type Props = {
  config: FormConfig;
  lines: CartLine[];
  source: "panier" | "direct";
  offlineMethods?: OfflinePaymentMethod[];
  layout?: "page" | "modal";
};

const AUTOCOMPLETE: Record<string, string> = {
  firstName: "given-name",
  lastName: "family-name",
  phone: "tel",
  email: "email",
  address: "street-address",
  postalCode: "postal-code",
  city: "address-level2",
  countryCode: "country",
};

/** Clés du formulaire partagées avec l'adresse mémorisée du panier. */
const DESTINATION_KEYS = { countryCode: "countryCode", postalCode: "postalCode", city: "city", address: "address" } as const;

export function OrderForm({ config, lines, offlineMethods = [], layout = "page" }: Props) {
  const { destination, setDestination, prices, validated, statuses } = useCart();
  const fields = activeFields(config);

  // Réponses : l'adresse est préremplie depuis le panier / simulateur de livraison
  const [own, setOwn] = useState<Answers>({});
  const answers: Answers = useMemo(() => {
    const a: Answers = { ...own };
    for (const [k, d] of Object.entries(DESTINATION_KEYS)) if (a[k] === undefined) a[k] = destination[d];
    if (!a.countryCode) a.countryCode = "FR";
    return a;
  }, [own, destination]);

  const setAnswer = (id: string, value: string) => {
    setOwn((s) => ({ ...s, [id]: value }));
    if (id in DESTINATION_KEYS) setDestination({ [id]: value } as Partial<typeof destination>);
  };

  const summary = useMemo(
    () => summarizeOrder(lines, { countryCode: answers.countryCode, postalCode: answers.postalCode, city: answers.city }, prices, validated, statuses),
    [lines, answers.countryCode, answers.postalCode, answers.city, prices, validated, statuses],
  );

  const [errors, setErrors] = useState<Errors>({});
  const [acceptCgv, setAcceptCgv] = useState(false);
  const [cgvError, setCgvError] = useState(false);
  const [status] = useState<"idle" | "sending" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [fallbackText, setFallbackText] = useState<string | null>(null);

  const paymentOptions: PaymentOption[] = [
    { id: "carte-netlify", label: "Carte bancaire", description: "Informations saisies librement et envoyées avec le formulaire Netlify." },
    ...offlineMethods,
  ];
  const selectable = paymentOptions.filter((p) => !p.disabled);
  const [payment, setPayment] = useState("");
  const selectedPayment = selectable.some((p) => p.id === payment) ? payment : selectable[0].id;
  const [card, setCard] = useState<CardValue>({ number: "", expiry: "", cvc: "", name: "" });
  const [cardErrors, setCardErrors] = useState<CardErrors>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    setServerError(null);
    setFallbackText(null);
    const errs = validateAnswers(config, answers);
    setErrors(errs);
    setCgvError(!acceptCgv);
    setCardErrors({});
    if (Object.keys(errs).length || !acceptCgv) {
      e.preventDefault();
      requestAnimationFrame(() => form.querySelector<HTMLElement>("[aria-invalid='true']")?.focus());
      return;
    }
    e.currentTarget.submit();
  }

  const modal = layout === "modal";

  const fieldsBlock = (
    <section className={modal ? "" : "rounded-xl border border-cream-300 bg-white p-5 sm:p-6"} aria-labelledby="form-titre">
      <h2 id="form-titre" className="font-serif text-xl font-semibold text-bark-900">
        {config.title}
      </h2>
      {config.intro && <p className="mt-1 text-sm leading-relaxed text-bark-600">{config.intro}</p>}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {fields.map((f) => (
          <DynamicField key={f.id} field={f} value={answers[f.id] ?? ""} error={errors[f.id]} onChange={(v) => setAnswer(f.id, v)} />
        ))}
      </div>
      <div className="mt-5">
        <ShippingResult quote={summary.shipping} />
      </div>
    </section>
  );

  const paymentBlock = (
    <PaymentMethods
      options={paymentOptions}
      selected={selectedPayment}
      onSelect={setPayment}
      cardForm={{
        value: card,
        errors: cardErrors,
        disabled: status === "sending",
        onChange: (v) => {
          setCard(v);
          setCardErrors({});
        },
      }}
    />
  );

  const summaryBlock = (
    <div className={modal ? "rounded-xl bg-cream-100 p-4" : "rounded-xl border border-cream-300 bg-white p-5 sm:p-6"}>
      <h2 className="font-serif text-xl font-semibold text-bark-900">Récapitulatif</h2>
      <ul className="mt-3 divide-y divide-cream-200" data-testid="recap-commande">
        {summary.lines.map((l) => (
          <li key={l.key} className="flex gap-3 py-3">
            {!modal && (
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-cream-200">
                {l.image && <Image src={l.image} alt="" fill sizes="56px" className="object-cover" />}
              </div>
            )}
            <div className="min-w-0 flex-1 text-sm">
              <p className="font-medium text-bark-900">{l.productName}</p>
              <p className="text-bark-600">
                {l.quantityLabel} · {l.variantLabel}
              </p>
            </div>
            <p className="text-sm font-semibold text-bark-900">{lineTotalText(l.lineTotal, formatPrice)}</p>
          </li>
        ))}
      </ul>
      <div className="mt-3 border-t border-cream-300 pt-3">
        <OrderTotals summary={summary} />
      </div>
    </div>
  );

  const submitBlock = (
    <div>
      <label className="flex items-start gap-3 text-sm text-bark-700">
        <input
          type="checkbox"
          name="acceptCgv"
          checked={acceptCgv}
          onChange={(e) => {
            setAcceptCgv(e.target.checked);
            if (e.target.checked) setCgvError(false);
          }}
          className="mt-0.5 h-5 w-5 shrink-0 accent-ember-600"
          aria-invalid={cgvError || undefined}
        />
        <span>
          J’ai lu et j’accepte les{" "}
          <Link href="/cgv" target="_blank" className="font-semibold text-ember-700 underline">
            conditions générales de vente
          </Link>{" "}
          et la{" "}
          <Link href="/politique-confidentialite" target="_blank" className="font-semibold text-ember-700 underline">
            politique de confidentialité
          </Link>
          .
        </span>
      </label>
      {cgvError && <p className="mt-1.5 text-sm text-red-700">Veuillez accepter les conditions pour continuer.</p>}

      {/* Champ piège anti-robots, invisible */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <input type="hidden" name="carte-number" value={card.number} />
      <input type="hidden" name="carte-expiry" value={card.expiry} />
      <input type="hidden" name="carte-cvc" value={card.cvc} />
      <input type="hidden" name="carte-name" value={card.name} />

      <button type="submit" className="btn btn-primary mt-5 w-full" disabled={status === "sending"}>
        {status === "sending" ? "Envoi en cours…" : config.submitLabel}
      </button>
      <p className="mt-3 text-center text-xs text-bark-500">Aucun paiement n’est prélevé à cette étape.</p>
      {serverError && (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-800">
          {serverError}
        </p>
      )}
      {(Object.keys(errors).length > 0 || Object.keys(cardErrors).length > 0) && status !== "sending" && (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-800">
          Certains champs sont à corriger.
        </p>
      )}
      {fallbackText && (
        <div className="mt-4">
          <SendFallback text={fallbackText} subject="Commande de bois de chauffage" />
        </div>
      )}
    </div>
  );

  if (modal) {
    return (
      <form
        onSubmit={onSubmit}
        method="POST"
        action="/merci"
        name="commande"
        data-netlify="true"
        data-netlify-honeypot="website"
        noValidate
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="commande" />
        {summaryBlock}
        {fieldsBlock}
        {paymentBlock}
        {submitBlock}
      </form>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      method="POST"
      name="commande"
      data-netlify="true"
      data-netlify-honeypot="website"
      noValidate
      className="container-page grid gap-8 py-8 sm:py-12 lg:grid-cols-[1fr_400px] lg:gap-12"
    >
      <input type="hidden" name="form-name" value="commande" />
      <div className="space-y-8">
        {fieldsBlock}
        {paymentBlock}
      </div>
      <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start" aria-label="Récapitulatif de la commande">
        {summaryBlock}
        <div className="rounded-xl border border-cream-300 bg-white p-5 sm:p-6">{submitBlock}</div>
      </aside>
    </form>
  );
}

/** Un champ du formulaire, rendu selon son type. */
function DynamicField({
  field: f,
  value,
  error,
  onChange,
}: {
  field: FormField;
  value: string;
  error?: string;
  onChange: (v: string) => void;
}) {
  const id = `champ-${f.id}`;
  const errId = `${id}-err`;
  const common = {
    id,
    name: f.id,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errId : undefined,
    "aria-required": f.required || undefined,
  } as const;

  let control: React.ReactNode;
  if (f.type === "country") {
    control = (
      <input
        {...common}
        type="text"
        autoComplete={AUTOCOMPLETE.countryCode}
        className="field"
        placeholder={f.placeholder || "FR"}
        value={value || "FR"}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  } else if (f.type === "textarea") {
    control = (
      <input
        {...common}
        type="text"
        className="field"
        placeholder={f.placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  } else if (f.type === "select") {
    control = (
      <input
        {...common}
        type="text"
        className="field"
        placeholder={f.placeholder || "Choisir…"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  } else {
    control = (
      <input
        {...common}
        type="text"
        inputMode={f.type === "number" || (f.system === "postalCode" && value.length <= 5) ? "numeric" : undefined}
        autoComplete={f.system ? AUTOCOMPLETE[f.system] : undefined}
        className="field"
        placeholder={f.placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }

  return (
    <div className={f.width === "full" || f.type === "textarea" ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="field-label">
        {f.label}
        {!f.required && <span className="font-normal text-bark-500"> (facultatif)</span>}
      </label>
      {control}
      {error && (
        <p id={errId} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
