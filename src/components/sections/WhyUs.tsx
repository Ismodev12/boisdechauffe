import { DocumentIcon, FlameIcon, FrenchFlag, PhoneIcon, ShieldIcon, TruckIcon } from "@/components/icons";

const reasons = [
  { Icon: FlameIcon, title: "Bois très sec", text: "Un mélange de chêne, frêne, hêtre et charme, idéal pour cet hiver." },
  { Icon: TruckIcon, title: "Livraison organisée", text: "Livraison en France et étude des livraisons en Europe, calculée selon votre destination." },
  { Icon: PhoneIcon, title: "Service client disponible", text: "Par téléphone, WhatsApp ou formulaire, pour vous conseiller avant et après commande." },
  { Icon: ShieldIcon, title: "Commande simple", text: "Choisissez la longueur et le nombre de stères : le prix du bois s’affiche immédiatement." },
  { Icon: DocumentIcon, title: "Tarifs dégressifs et devis", text: "Grosses quantités ou professionnels : le prix par stère baisse, et le devis est personnalisé." },
  { Icon: null, title: "Expédition depuis la France", text: "Entreprise basée en France, interlocuteur direct et francophone." },
];

export function WhyUs() {
  return (
    <section className="bg-cream-100 py-16 sm:py-20" aria-labelledby="pourquoi-titre">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Confiance</p>
          <h2 id="pourquoi-titre" className="mt-2 font-serif text-3xl font-semibold text-bark-900 sm:text-4xl">
            Pourquoi commander chez nous ?
          </h2>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ Icon, title, text }) => (
            <li key={title} className="rounded-xl border border-cream-300 bg-white p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-bark-900 text-ember-500">
                {Icon ? <Icon /> : <FrenchFlag className="h-4 w-6 rounded-[2px]" />}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-bark-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bark-600">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
