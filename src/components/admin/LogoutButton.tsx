"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      className="rounded-md px-3 py-2 text-cream-300 hover:bg-white/10"
      onClick={async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.replace("/admin");
        router.refresh();
      }}
    >
      Déconnexion
    </button>
  );
}
