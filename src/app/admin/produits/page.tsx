import { categories } from "@/config/categories";
import { productsInCategory } from "@/config/products";
import { AdminNotices } from "@/components/admin/AdminNotices";
import { StatusEditor } from "@/components/admin/StatusEditor";
import { requireAdmin } from "@/server/admin-auth";
import { getStatuses } from "@/server/status-store";

export const metadata = { title: "Publication des produits" };

export default async function ProductsAdminPage() {
  await requireAdmin();
  const statuses = await getStatuses();
  const groups = categories.map((c) => ({
    category: c.name,
    products: productsInCategory(c.slug).map((p) => ({
      slug: p.slug,
      name: p.name,
      marque: p.marque ?? null,
      statut: statuses[p.slug],
      note: p.noteStatut ?? null,
    })),
  }));

  return (
    <div className="container-page max-w-5xl py-8">
      <AdminNotices />
      <h1 className="font-serif text-3xl font-semibold text-bark-900">Publication des produits</h1>
      <p className="mt-1 mb-6 text-bark-600">
        Seules les fiches <strong>publiées</strong> sont visibles et commandables. « À vérifier » et « Brouillon » sont
        masquées pour les clients (vous pouvez les prévisualiser via « voir la fiche » tant que vous êtes connecté).
        Publiez une fiche une fois l’approvisionnement de ce produit confirmé chez vos fournisseurs.
      </p>
      <StatusEditor groups={groups} />
    </div>
  );
}
