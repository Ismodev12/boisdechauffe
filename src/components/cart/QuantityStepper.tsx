"use client";

import { useState } from "react";
import { MAX_UNIT_QUANTITY } from "@/lib/order";

/** Quantité libre avec boutons − / + (grandes zones tactiles). */
export function QuantityStepper({ value, onChange, label }: { value: number; onChange: (v: number) => void; label: string }) {
  const [draft, setDraft] = useState<string | null>(null);
  const commit = (raw: string) => {
    const n = Math.min(Math.max(1, parseInt(raw, 10) || 1), MAX_UNIT_QUANTITY);
    setDraft(null);
    if (n !== value) onChange(n);
  };
  const btn = "flex h-12 w-12 items-center justify-center text-xl font-medium text-bark-800 hover:bg-cream-100 disabled:opacity-40";
  return (
    <div className="inline-flex items-center overflow-hidden rounded-lg border border-cream-400 bg-white">
      <button type="button" className={btn} onClick={() => commit(String(value - 1))} disabled={value <= 1} aria-label="Diminuer la quantité">
        −
      </button>
      <input
        type="text"
        inputMode="numeric"
        className="h-12 w-14 border-x border-cream-300 text-center text-base font-semibold outline-none focus:bg-cream-50"
        value={draft ?? String(value)}
        onChange={(e) => setDraft(e.target.value.replace(/\D/g, "").slice(0, 3))}
        onBlur={(e) => commit(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && commit((e.target as HTMLInputElement).value)}
        aria-label={label}
      />
      <button type="button" className={btn} onClick={() => commit(String(value + 1))} disabled={value >= MAX_UNIT_QUANTITY} aria-label="Augmenter la quantité">
        +
      </button>
    </div>
  );
}
