import Link from "next/link";

export default function AdminNotFound() {
  return (
    <div className="container-page py-16 text-center">
      <h1 className="font-serif text-2xl font-semibold text-bark-900">Introuvable</h1>
      <p className="mt-2 text-bark-600">Cette commande n’existe pas ou a été supprimée.</p>
      <Link href="/admin/commandes" className="btn btn-dark mt-6">
        Retour aux commandes
      </Link>
    </div>
  );
}
