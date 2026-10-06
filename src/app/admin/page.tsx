import { redirect } from "next/navigation";
import { LoginForm } from "@/components/admin/LoginForm";
import { adminConfigured, isAdmin, usingLocalDefaultPassword } from "@/server/admin-auth";

export const metadata = { title: "Connexion" };

/** Présence (jamais la valeur) des variables nécessaires au panel admin. */
function diagnostic(): [string, boolean][] {
  return [
    ["ADMIN_PASSWORD (mot de passe admin)", Boolean(process.env.ADMIN_PASSWORD)],
    [
      "Base de données Upstash",
      Boolean((process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL) && (process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN)),
    ],
  ];
}

export default async function AdminHome() {
  if (await isAdmin()) redirect("/admin/commandes");

  if (!adminConfigured()) {
    return (
      <div className="container-page max-w-lg py-16">
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-6 text-amber-950">
          <h1 className="font-serif text-2xl font-semibold">Panel admin non activé</h1>
          <p className="mt-3 text-sm leading-relaxed">
            Pour activer l’administration, ajoutez la variable d’environnement <code className="font-mono">ADMIN_PASSWORD</code>{" "}
            (votre mot de passe) dans Vercel → Settings → Environment Variables, en cochant <strong>Production</strong>,
            puis redéployez le site (Deployments → ⋯ → Redeploy).
          </p>
          <h2 className="mt-5 text-sm font-semibold">Diagnostic (ce que le site détecte actuellement)</h2>
          <ul className="mt-2 space-y-1 text-sm">
            {diagnostic().map(([label, found]) => (
              <li key={label}>
                {found ? "✅" : "❌"} {label} : {found ? "trouvé" : "absent"}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-amber-800">
            Environnement : {process.env.VERCEL_ENV ?? "local"}. Si une variable apparaît absente alors que vous l’avez
            ajoutée, vérifiez son nom exact et la case « Production », puis redéployez.
          </p>
        </div>
      </div>
    );
  }

  return (
    <LoginForm
      hint={usingLocalDefaultPassword() ? "Mode développement : mot de passe « admin-local »." : undefined}
    />
  );
}
