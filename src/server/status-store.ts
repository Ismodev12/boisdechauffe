import "server-only";
import { connection } from "next/server";
import { mergeStatuses, type StatusMap } from "@/lib/status";
import { getJSON, setJSON } from "@/server/storage";

const KEY = "catalogue:statuts";

/** Statuts effectifs (catalogue + modifications de l'admin). Repli sur le catalogue si le stockage est indisponible. */
export async function getStatuses(): Promise<StatusMap> {
  await connection();
  try {
    return mergeStatuses(await getJSON<Record<string, unknown>>(KEY));
  } catch {
    return mergeStatuses(null);
  }
}

export async function saveStatuses(statuses: StatusMap) {
  await setJSON(KEY, statuses);
}
