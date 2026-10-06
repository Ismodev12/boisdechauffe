import { libelleQuantite, tarifsPour } from "@/config/pricing";
import { formatPrice } from "@/lib/format";

/** Liste déroulante des quantités de la grille tarifaire (1, 2, 3, 5, 10… stères). */
export function QuantitySelect({
  id,
  value,
  onChange,
  showPrice = true,
  label,
  lengthCm,
}: {
  id?: string;
  value: number;
  onChange: (q: number) => void;
  showPrice?: boolean;
  label?: string;
  /** Longueur des bûches : les prix affichés suivent sa grille. */
  lengthCm?: number | null;
}) {
  return (
    <select
      id={id}
      className="field !w-auto min-w-44 font-semibold"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      aria-label={label}
    >
      {tarifsPour(lengthCm).map((t) => (
        <option key={t.quantite} value={t.quantite}>
          {libelleQuantite(t.quantite)}
          {showPrice ? ` — ${formatPrice(t.prix)}` : ""}
        </option>
      ))}
    </select>
  );
}
