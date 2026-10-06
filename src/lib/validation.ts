import { countries } from "@/config/shipping";

/** Validation partagée entre le navigateur (retour immédiat) et le serveur (contrôle final). */

export type Errors<T extends string = string> = Partial<Record<T, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[\d\s.()-]{8,20}$/;

export const str = (v: unknown, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export function isEmail(v: string) {
  return EMAIL_RE.test(v);
}
export function isPhone(v: string) {
  return PHONE_RE.test(v) && v.replace(/\D/g, "").length >= 8;
}
export function isCountry(code: string) {
  return countries.some((c) => c.code === code);
}

/* ---------- Commande ---------- */

export const customerFields = [
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
export type CustomerField = (typeof customerFields)[number];
export type Customer = Record<CustomerField, string>;

export function readCustomer(input: unknown): Customer {
  const o = (input ?? {}) as Record<string, unknown>;
  return {
    firstName: str(o.firstName, 80),
    lastName: str(o.lastName, 80),
    phone: str(o.phone, 30),
    email: str(o.email, 160),
    address: str(o.address, 240),
    postalCode: str(o.postalCode, 12),
    city: str(o.city, 120),
    countryCode: str(o.countryCode, 8),
    notes: str(o.notes, 2000),
  };
}

export function validateCustomer(c: Customer): Errors<CustomerField> {
  const e: Errors<CustomerField> = {};
  if (!c.firstName) e.firstName = "Indiquez votre prénom.";
  if (!c.lastName) e.lastName = "Indiquez votre nom.";
  if (!isPhone(c.phone)) e.phone = "Numéro de téléphone invalide.";
  if (!isEmail(c.email)) e.email = "Adresse email invalide.";
  if (c.address.length < 5) e.address = "Indiquez votre adresse de livraison.";
  if (!isCountry(c.countryCode)) e.countryCode = "Choisissez un pays.";
  if (c.countryCode === "FR" && !/^\d{5}$/.test(c.postalCode)) e.postalCode = "Code postal français : 5 chiffres.";
  else if (c.postalCode.length < 3) e.postalCode = "Indiquez votre code postal.";
  if (!c.city) e.city = "Indiquez votre ville.";
  return e;
}

/* ---------- Contact & devis ---------- */

export const contactFields = ["name", "email", "phone", "countryCode", "message"] as const;
export type ContactField = (typeof contactFields)[number];

export function readContact(input: unknown) {
  const o = (input ?? {}) as Record<string, unknown>;
  return {
    name: str(o.name, 120),
    email: str(o.email, 160),
    phone: str(o.phone, 30),
    countryCode: str(o.countryCode, 8),
    message: str(o.message, 5000),
  };
}

export function validateContact(c: ReturnType<typeof readContact>): Errors<ContactField> {
  const e: Errors<ContactField> = {};
  if (!c.name) e.name = "Indiquez votre nom.";
  if (!isEmail(c.email)) e.email = "Adresse email invalide.";
  if (c.phone && !isPhone(c.phone)) e.phone = "Numéro de téléphone invalide.";
  if (!isCountry(c.countryCode)) e.countryCode = "Choisissez un pays.";
  if (c.message.length < 10) e.message = "Votre message est trop court (10 caractères minimum).";
  return e;
}

export const quoteFields = ["essence", "length", "quantity", "postalCode", "city"] as const;

export function readQuote(input: unknown) {
  const o = (input ?? {}) as Record<string, unknown>;
  return {
    customerType: str(o.customerType, 40),
    essence: str(o.essence, 120),
    length: str(o.length, 60),
    quantity: str(o.quantity, 120),
    postalCode: str(o.postalCode, 12),
    city: str(o.city, 120),
    deadline: str(o.deadline, 120),
  };
}
