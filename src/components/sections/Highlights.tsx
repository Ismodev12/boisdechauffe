import { DocumentIcon, FlameIcon, LogIcon, RulerIcon, TagIcon, TruckIcon } from "@/components/icons";

const items = [
  { Icon: FlameIcon, title: "Bois très sec", text: "Idéal pour cet hiver." },
  { Icon: LogIcon, title: "Chêne / Frêne / Hêtre / Charme", text: "Un mélange de feuillus." },
  { Icon: RulerIcon, title: "33 cm et 50 cm", text: "Deux longueurs de bûches au choix." },
  { Icon: TruckIcon, title: "Livraison possible", text: "France et Europe, selon destination." },
  { Icon: TagIcon, title: "Tarifs dégressifs", text: "Plus vous commandez, moins le stère coûte." },
  { Icon: DocumentIcon, title: "Devis personnalisé", text: "Grosses quantités et livraison." },
];

/** Les points forts sous la bannière d'accueil. */
export function Highlights() {
  return (
    <section aria-label="Nos points forts" className="border-b border-cream-300 bg-white">
      <ul className="container-page grid grid-cols-1 gap-x-6 gap-y-5 py-8 min-[480px]:grid-cols-2 md:grid-cols-3 lg:py-10 xl:grid-cols-6">
        {items.map(({ Icon, title, text }) => (
          <li key={title} className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream-100 text-ember-600">
              <Icon width={22} height={22} />
            </span>
            <div>
              <h2 className="text-[0.95rem] font-semibold text-bark-900">{title}</h2>
              <p className="mt-0.5 text-sm leading-snug text-bark-600">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
