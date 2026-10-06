import { availabilityLabels, type Availability } from "@/config/products";

const styles: Record<Availability, string> = {
  "en-stock": "bg-forest-700 text-white",
  "sur-commande": "bg-cream-100 text-bark-800 border border-cream-300",
  epuise: "bg-bark-800 text-cream-100",
};

export function AvailabilityBadge({ availability }: { availability: Availability }) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm ${styles[availability]}`}>
      {availabilityLabels[availability]}
    </span>
  );
}
