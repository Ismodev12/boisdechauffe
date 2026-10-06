import { emailConfigured } from "@/server/email";
import { storageConfigured } from "@/server/storage";

/** Avertissements de configuration affichés en haut du panel admin. */
export function AdminNotices() {
  const notices: string[] = [];
  if (!storageConfigured())
    notices.push(
      "Base de données non connectée : les commandes ne peuvent pas être enregistrées ici. Connectez Upstash Redis dans Vercel → Storage, puis redéployez.",
    );
  if (!emailConfigured())
    notices.push("Notifications email non configurées (Resend) : consultez les nouvelles commandes ici régulièrement.");
  if (!notices.length) return null;
  return (
    <ul className="mb-6 space-y-2">
      {notices.map((n) => (
        <li key={n} className="rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-950">
          {n}
        </li>
      ))}
    </ul>
  );
}
