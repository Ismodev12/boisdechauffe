import { libelleQuantite, longueursTarifees, mentionTaxes, tarifs, tarifsParLongueur } from "@/config/pricing";
import { formatPrice } from "@/lib/format";

/**
 * Tableau des tarifs dégressifs, généré depuis `src/config/pricing.ts`.
 * Une colonne par longueur de bûches (33 cm et 50 cm ont des grilles distinctes).
 */
export function PriceTable({ dark = false }: { dark?: boolean }) {
  const head = dark ? "text-cream-300" : "text-bark-600";
  const row = dark ? "border-cream-50/10" : "border-cream-200";
  const sub = dark ? "text-cream-300" : "text-bark-500";

  return (
    <div>
      <table className="w-full text-left text-sm sm:text-base" data-testid="grille-stere">
        <caption className="sr-only">Tarifs du bois de chauffage selon la quantité et la longueur des bûches</caption>
        <thead>
          <tr className={`${head} text-xs uppercase tracking-wider`}>
            <th scope="col" className="pb-3 font-semibold">
              Quantité
            </th>
            {longueursTarifees.map((l) => (
              <th key={l} scope="col" className="pb-3 text-right font-semibold">
                {l} cm
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tarifs.map((ref) => (
            <tr key={ref.quantite} className={`border-t ${row}`}>
              <th scope="row" className="py-2.5 pl-1 font-medium">
                {libelleQuantite(ref.quantite)}
              </th>
              {longueursTarifees.map((l) => {
                const t = tarifsParLongueur[l].find((x) => x.quantite === ref.quantite);
                return (
                  <td key={l} className="py-2.5 pr-1 text-right tabular-nums" data-testid={`prix-${ref.quantite}-${l}`}>
                    {t ? (
                      <>
                        <span className="font-semibold">{formatPrice(t.prix)}</span>
                        <span className={`block text-xs ${sub}`}>soit {formatPrice(t.prixParStere)} / stère</span>
                      </>
                    ) : (
                      "—"
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p className={`mt-3 text-xs ${head}`}>
        Prix du bois uniquement, livraison non comprise{mentionTaxes ? ` — ${mentionTaxes}` : ""}.
      </p>
    </div>
  );
}
