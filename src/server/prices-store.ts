import "server-only";
import { connection } from "next/server";
import { mergePrices, mergeValidated, type PriceMap } from "@/lib/prices";
import { getJSON, setJSON } from "@/server/storage";

const KEY = "catalogue:prix";
const KEY_VALIDATED = "catalogue:prix-valides";

/** Prix effectifs (catalogue + modifications de l'admin). Repli sur le catalogue si le stockage est indisponible. */
export async function getPrices(): Promise<PriceMap> {
  // Lecture à chaque visite : un prix modifié dans l'admin est visible immédiatement
  await connection();
  try {
    return mergePrices(await getJSON<Record<string, unknown>>(KEY));
  } catch {
    return mergePrices(null);
  }
}

/** Clés des prix validés par l'administrateur. */
export async function getValidated(): Promise<string[]> {
  await connection();
  try {
    return mergeValidated(await getJSON<unknown>(KEY_VALIDATED));
  } catch {
    return [];
  }
}

export async function savePrices(prices: PriceMap, validated: string[]) {
  await setJSON(KEY, prices);
  await setJSON(KEY_VALIDATED, validated);
}
