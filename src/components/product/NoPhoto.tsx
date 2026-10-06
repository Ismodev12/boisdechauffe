import { FlameIcon } from "@/components/icons";

/** Visuel neutre quand un produit n'a pas encore de photo. */
export function NoPhoto({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-bark-800 to-bark-950 p-4 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-ember-500">
        <FlameIcon width={28} height={28} />
      </span>
      {label && (
        <>
          <span className="font-serif text-lg font-semibold text-cream-100">{label}</span>
          <span className="text-xs text-cream-400">Photo à venir</span>
        </>
      )}
    </div>
  );
}
