import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";

/**
 * Stockage clé/valeur des commandes et de la configuration du formulaire.
 *
 *  - En ligne : Upstash Redis (API REST, sans dépendance). Variables créées
 *    automatiquement quand on connecte Upstash à Vercel :
 *      KV_REST_API_URL + KV_REST_API_TOKEN  (ou UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN)
 *  - En local (npm run dev / start sur votre ordinateur) : fichier `.data/store.json`.
 */

const REST_URL = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const REST_TOKEN = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
const ON_VERCEL = Boolean(process.env.VERCEL);

export class StorageNotConfiguredError extends Error {
  constructor() {
    super("Stockage non configuré : connectez une base Upstash Redis au projet Vercel.");
  }
}

export function storageConfigured() {
  return Boolean(REST_URL && REST_TOKEN) || !ON_VERCEL;
}

/* ---------- Upstash Redis (REST) ---------- */

async function redis<T>(command: (string | number)[]): Promise<T> {
  const res = await fetch(REST_URL!, {
    method: "POST",
    headers: { Authorization: `Bearer ${REST_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  const data = (await res.json()) as { result?: T; error?: string };
  if (!res.ok || data.error) throw new Error(`Redis : ${data.error ?? res.status}`);
  return data.result as T;
}

/* ---------- Fichier local (développement) ---------- */

type FileData = { kv: Record<string, string>; lists: Record<string, string[]> };
const FILE = path.join(process.cwd(), ".data", "store.json");
let queue: Promise<unknown> = Promise.resolve();

async function readFile(): Promise<FileData> {
  try {
    return JSON.parse(await fs.readFile(FILE, "utf8"));
  } catch {
    return { kv: {}, lists: {} };
  }
}

/** Sérialise les accès au fichier pour éviter les écritures concurrentes. */
function withFile<T>(fn: (d: FileData) => T | Promise<T>, write = false): Promise<T> {
  const run = queue.then(async () => {
    const d = await readFile();
    const out = await fn(d);
    if (write) {
      await fs.mkdir(path.dirname(FILE), { recursive: true });
      await fs.writeFile(FILE, JSON.stringify(d, null, 2));
    }
    return out;
  });
  queue = run.catch(() => {});
  return run;
}

/* ---------- API commune ---------- */

function backend(): "redis" | "file" {
  if (REST_URL && REST_TOKEN) return "redis";
  if (!ON_VERCEL) return "file";
  throw new StorageNotConfiguredError();
}

export async function getJSON<T>(key: string): Promise<T | null> {
  if (backend() === "redis") {
    const raw = await redis<string | null>(["GET", key]);
    return raw ? (JSON.parse(raw) as T) : null;
  }
  return withFile((d) => (d.kv[key] ? (JSON.parse(d.kv[key]) as T) : null));
}

export async function setJSON(key: string, value: unknown): Promise<void> {
  const raw = JSON.stringify(value);
  if (backend() === "redis") {
    await redis(["SET", key, raw]);
    return;
  }
  await withFile((d) => {
    d.kv[key] = raw;
  }, true);
}

export async function del(key: string): Promise<void> {
  if (backend() === "redis") {
    await redis(["DEL", key]);
    return;
  }
  await withFile((d) => {
    delete d.kv[key];
  }, true);
}

/** Ajoute en tête de liste (les plus récents d'abord). */
export async function listPush(key: string, value: string): Promise<void> {
  if (backend() === "redis") {
    await redis(["LPUSH", key, value]);
    return;
  }
  await withFile((d) => {
    (d.lists[key] ??= []).unshift(value);
  }, true);
}

export async function listRange(key: string, start = 0, stop = -1): Promise<string[]> {
  if (backend() === "redis") return redis<string[]>(["LRANGE", key, start, stop]);
  return withFile((d) => {
    const l = d.lists[key] ?? [];
    return l.slice(start, stop === -1 ? undefined : stop + 1);
  });
}

export async function listRemove(key: string, value: string): Promise<void> {
  if (backend() === "redis") {
    await redis(["LREM", key, 0, value]);
    return;
  }
  await withFile((d) => {
    d.lists[key] = (d.lists[key] ?? []).filter((v) => v !== value);
  }, true);
}
