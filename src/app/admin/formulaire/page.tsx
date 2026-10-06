import { AdminNotices } from "@/components/admin/AdminNotices";
import { FormEditor } from "@/components/admin/FormEditor";
import { requireAdmin } from "@/server/admin-auth";
import { getFormConfig } from "@/server/form-store";

export const metadata = { title: "Formulaire de commande" };

export default async function FormAdminPage() {
  await requireAdmin();
  const config = await getFormConfig();
  return (
    <div className="container-page max-w-4xl py-8">
      <AdminNotices />
      <h1 className="font-serif text-3xl font-semibold text-bark-900">Formulaire de commande</h1>
      <p className="mt-1 mb-6 text-bark-600">
        C’est le formulaire qui s’ouvre quand un client clique sur « Commander ». Les modifications sont visibles dès
        l’enregistrement.
      </p>
      <FormEditor initial={config} />
    </div>
  );
}
