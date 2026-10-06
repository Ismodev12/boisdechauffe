"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm({ hint }: { hint?: string }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError(null);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    }).catch(() => null);
    const data = res ? await res.json().catch(() => ({})) : { error: "Connexion impossible." };
    setSending(false);
    if (res?.ok) {
      router.replace("/admin/commandes");
      router.refresh();
    } else setError(data.error ?? "Erreur.");
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-16 max-w-sm rounded-xl border border-cream-300 bg-white p-6 shadow-sm">
      <h1 className="font-serif text-2xl font-semibold text-bark-900">Connexion</h1>
      <p className="mt-1 text-sm text-bark-600">Espace réservé à l’administrateur du site.</p>
      <label htmlFor="admin-password" className="field-label mt-6">
        Mot de passe
      </label>
      <input
        id="admin-password"
        type="password"
        autoComplete="current-password"
        className="field"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        autoFocus
      />
      {error && (
        <p role="alert" className="mt-3 text-sm text-red-700">
          {error}
        </p>
      )}
      <button type="submit" className="btn btn-primary mt-5 w-full" disabled={sending || !password}>
        {sending ? "Connexion…" : "Se connecter"}
      </button>
      {hint && <p className="mt-4 rounded-lg bg-amber-50 p-3 text-xs text-amber-900">{hint}</p>}
    </form>
  );
}
