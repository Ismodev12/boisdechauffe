import { PageHeader } from "@/components/PageHeader";

/** Valeur d'information légale : rien n'est affiché aux clients tant qu'elle n'est pas renseignée. */
export function Val({ value }: { value: string | null; label?: string }) {
  return value ? <>{value}</> : null;
}

// Les textes de ces pages doivent être relus et validés (juriste, chambre de commerce) : voir le compte rendu.
export function LegalPage({ title, path, children }: { title: string; path: string; children: React.ReactNode }) {
  return (
    <>
      <PageHeader title={title} crumbs={[{ href: path, label: title }]} />
      <div className="container-page max-w-3xl py-10 sm:py-14">
        <div className="prose-page">{children}</div>
      </div>
    </>
  );
}
