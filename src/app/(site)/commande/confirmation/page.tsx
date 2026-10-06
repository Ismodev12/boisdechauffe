import { redirect } from "next/navigation";

/** Ancienne adresse de confirmation : redirige vers la page de remerciements. */
export default async function LegacyConfirmation({ searchParams }: PageProps<"/commande/confirmation">) {
  const sp = await searchParams;
  const params = new URLSearchParams();
  for (const [k, v] of Object.entries(sp)) if (typeof v === "string") params.set(k, v);
  redirect(`/merci?${params}`);
}
