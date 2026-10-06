"use client";

import { useState } from "react";
import { getLengths, mainProduct, products, productsInCategory } from "@/config/products";
import { categories } from "@/config/categories";
import { useCart } from "@/components/cart/CartProvider";
import { isPublished } from "@/lib/status";
import { CountrySelect } from "@/components/cart/CountrySelect";
import { Field } from "@/components/forms/Field";
import { SendFallback } from "@/components/forms/SendFallback";
import { CheckIcon } from "@/components/icons";
import { emailLink, phoneLink, siteConfig } from "@/config/siteConfig";
import { validateContact, type ContactField, type Errors } from "@/lib/validation";

type Mode = "contact" | "devis";

const initial = {
  name: "",
  email: "",
  phone: "",
  countryCode: "FR",
  message: "",
  customerType: "Particulier",
  essence: mainProduct.name,
  length: "",
  quantity: "",
  postalCode: "",
  city: "",
  deadline: "",
};

const lengths = [...new Set(products.flatMap((p) => getLengths(p)))].sort((a, b) => a - b);

export function ContactForm({ mode = "contact" }: { mode?: Mode }) {
  const { statuses } = useCart();
  const [v, setV] = useState(initial);
  const [errors, setErrors] = useState<Errors<ContactField>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [fallbackText, setFallbackText] = useState<string | null>(null);

  const set = (k: keyof typeof initial) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setV((s) => ({ ...s, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError(null);
    setFallbackText(null);
    const errs = validateContact(v);
    setErrors(errs);
    if (Object.keys(errs).length) {
      requestAnimationFrame(() => document.querySelector<HTMLElement>("[aria-invalid='true']")?.focus());
      return;
    }
    setStatus("sending");
    try {
      const website = new FormData(e.currentTarget).get("website");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...v, type: mode, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("sent");
        return;
      }
      if (data.errors) setErrors(data.errors);
      if (data.error === "non_configure" && data.text) setFallbackText(data.text);
      else setServerError(data.error ?? "Une erreur est survenue. Veuillez réessayer.");
      setStatus("error");
    } catch {
      setServerError("Connexion impossible. Vérifiez votre réseau et réessayez.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-xl border border-forest-600/30 bg-forest-50 p-6 text-forest-800">
        <p className="flex items-center gap-2 text-lg font-semibold">
          <CheckIcon /> {mode === "devis" ? "Demande de devis envoyée" : "Message envoyé"}
        </p>
        <p className="mt-2">Merci ! Nous vous répondons dans les meilleurs délais.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
      <Field label="Nom" error={errors.name}>
        {(p) => <input {...p} className="field" autoComplete="name" value={v.name} onChange={set("name")} />}
      </Field>
      <Field label="Email" error={errors.email}>
        {(p) => <input {...p} type="text" className="field" autoComplete="email" value={v.email} onChange={set("email")} />}
      </Field>
      <Field label="Téléphone" error={errors.phone} optional={mode === "contact"}>
        {(p) => <input {...p} type="text" className="field" autoComplete="tel" value={v.phone} onChange={set("phone")} />}
      </Field>
      <Field label="Pays" error={errors.countryCode}>
        {(p) => <CountrySelect id={p.id} value={v.countryCode} onChange={(countryCode) => setV((s) => ({ ...s, countryCode }))} />}
      </Field>

      {mode === "devis" && (
        <>
          <Field label="Vous êtes" className="sm:col-span-2">
            {(p) => (
              <select {...p} className="field" value={v.customerType} onChange={set("customerType")}>
                <option>Particulier</option>
                <option>Professionnel</option>
                <option>Collectivité / association</option>
              </select>
            )}
          </Field>
          <Field label="Produit" optional>
            {(p) => (
              <select {...p} className="field" value={v.essence} onChange={set("essence")}>
                {categories.map((c) => {
                  // Seules les fiches publiées sont proposées
                  const list = productsInCategory(c.slug).filter((pr) => isPublished(statuses, pr));
                  return list.length ? (
                    <optgroup key={c.slug} label={c.name}>
                      {list.map((pr) => (
                        <option key={pr.slug} value={pr.name}>
                          {pr.name}
                        </option>
                      ))}
                    </optgroup>
                  ) : null;
                })}
                <option value="Autre">Autre demande</option>
              </select>
            )}
          </Field>
          <Field label="Longueur des bûches" optional>
            {(p) => (
              <select {...p} className="field" value={v.length} onChange={set("length")}>
                <option value="">Je ne sais pas encore</option>
                {lengths.map((l) => (
                  <option key={l}>{l} cm</option>
                ))}
                <option>Autre longueur</option>
              </select>
            )}
          </Field>
          <Field label="Quantité souhaitée" optional>
            {(p) => (
              <input {...p} className="field" placeholder="ex. 20 stères, 3 palettes de granulés…" value={v.quantity} onChange={set("quantity")} />
            )}
          </Field>
          <Field label="Délai souhaité" optional>
            {(p) => <input {...p} className="field" placeholder="ex. avant fin octobre" value={v.deadline} onChange={set("deadline")} />}
          </Field>
          <Field label="Code postal de livraison" optional>
            {(p) => <input {...p} className="field" autoComplete="postal-code" value={v.postalCode} onChange={set("postalCode")} />}
          </Field>
          <Field label="Ville de livraison" optional>
            {(p) => <input {...p} className="field" autoComplete="address-level2" value={v.city} onChange={set("city")} />}
          </Field>
        </>
      )}

      <Field label={mode === "devis" ? "Précisions sur votre besoin" : "Message"} error={errors.message} className="sm:col-span-2">
        {(p) => <textarea {...p} className="field min-h-36" value={v.message} onChange={set("message")} />}
      </Field>

      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="sm:col-span-2">
        {(siteConfig.contact.telephone || siteConfig.contact.email) && (
          <p className="mb-3 text-sm text-bark-700">
            Vous préférez nous joindre directement ?
            {siteConfig.contact.telephone && (
              <>
                {" "}Appelez le <a href={phoneLink()!} className="font-semibold text-ember-700 underline underline-offset-2">{siteConfig.contact.telephone}</a>
              </>
            )}
            {siteConfig.contact.telephone && siteConfig.contact.email && " ou écrivez à "}
            {!siteConfig.contact.telephone && siteConfig.contact.email && " Écrivez à "}
            {siteConfig.contact.email && (
              <a href={emailLink()!} className="font-semibold text-ember-700 underline underline-offset-2 break-all">{siteConfig.contact.email}</a>
            )}
            .
          </p>
        )}
        <p className="mb-4 text-xs text-bark-500">
          Vos informations servent uniquement à répondre à votre demande. Voir notre politique de confidentialité.
        </p>
        <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={status === "sending"}>
          {status === "sending" ? "Envoi en cours…" : mode === "devis" ? "Envoyer ma demande de devis" : "Envoyer le message"}
        </button>
        {serverError && (
          <p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-800">
            {serverError}
          </p>
        )}
        {fallbackText && (
          <div className="mt-4">
            <SendFallback text={fallbackText} subject={mode === "devis" ? "Demande de devis" : "Demande d'information"} />
          </div>
        )}
      </div>
    </form>
  );
}
