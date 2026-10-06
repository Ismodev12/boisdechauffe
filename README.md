# Site e-commerce — Bois de chauffage

Site de vente de bois de chauffage en ligne : catalogue, panier, estimation de livraison
(France + Europe sur devis), commande, contact, devis, FAQ, pages légales.

Next.js 16 · TypeScript · Tailwind CSS 4 · aucune base de données.

---

## Avant la mise en ligne : ce que VOUS devez compléter

Le site n'invente aucune information. Tout ce qui manque s'affiche sur le site dans un
encadré jaune **« À compléter »**. Pour tout retrouver dans le code, cherchez `null`
dans le dossier `src/config/`.

| À compléter | Fichier |
| --- | --- |
| **Nom, email, téléphone, WhatsApp, localisation, zone de livraison** | `src/config/siteConfig.ts` → `entreprise`, `contact` |
| Liens TikTok / Facebook / Instagram | `src/config/siteConfig.ts` → `reseaux` |
| Mentions légales (raison sociale, SIRET, adresse, médiateur…) | `src/config/siteConfig.ts` → `legal` |
| Texte « À propos » | `src/config/siteConfig.ts` → `aPropos` |
| **Prix du bois (grille au stère)** | `src/config/pricing.ts` |
| Catalogue : produits, variantes, photos, humidité | `src/config/products.ts` |
| Catégories du catalogue | `src/config/categories.ts` |
| **Prix des produits hors mélange** | panel admin → **Prix** (`/admin/prix`) |
| Pays livrés, grille de tarifs France, délais | `src/config/shipping.ts` |
| Moyens de paiement acceptés | `src/config/payments.ts` |
| FAQ, avis clients, photos de livraisons | `src/config/content.ts` |
| Clauses des CGV (livraison, paiement, rétractation) | `src/app/cgv/page.tsx` |

Les pages légales (mentions légales, CGV, confidentialité) sont des **modèles** : faites-les
valider par un professionnel avant d'ouvrir les ventes.

---

## Modifier le site

### Changer vos coordonnées
Tout est dans `src/config/siteConfig.ts` : nom, email, téléphone, WhatsApp, TikTok, Facebook,
localisation, zone de livraison. Une modification à cet endroit met à jour automatiquement
l'en-tête, le pied de page, la page Contact, le bouton WhatsApp, la page Livraison et les pages
légales. Pour masquer une information (ex. TikTok), mettez `null`.

### Changer un prix
Tous les prix sont dans `src/config/pricing.ts` (grille au stère). Modifiez `prix` sur la ligne
voulue ; le prix moyen par stère est recalculé automatiquement. La fiche produit, le panier, la
commande, les tableaux de tarifs et la page d'accueil se mettent à jour d'eux-mêmes.

### Ajouter un produit
Copiez un bloc `{ slug: ..., name: ..., ... }` complet dans la liste `products`, puis changez
au minimum `slug` (unique, sans accents ni espaces : il devient l'adresse de la page
`/produit/votre-slug`) et `name`.

### Remplacer les photos
Les photos actuelles sont des **photos d'illustration** libres de droits (Wikimedia Commons).
Mettez vos photos dans `public/images/produits/` (ou `public/images/site/` pour l'accueil),
puis :
- soit vous gardez le même nom de fichier (rien d'autre à changer) ;
- soit vous modifiez le chemin dans `src/config/products.ts`.

Quand c'est une vraie photo de votre bois, retirez `illustration: true`, et supprimez la ligne
correspondante dans `src/config/credits.ts`.

Format conseillé : JPEG, environ 1600 px de large. Le site génère automatiquement des versions
optimisées (AVIF/WebP) adaptées à chaque écran.

### Tarifs de livraison France
Dans `src/config/shipping.ts`, la grille `franceGrid` découpe la France en zones (par
département) et en paliers de quantité. Un exemple complet est en commentaire dans le fichier.
Tout prix laissé à `null` donne « Livraison sur devis ».

### Ajouter un pays
Ajoutez une ligne dans `countries` (`src/config/shipping.ts`). Par défaut, mettez
`mode: "devis"` : le site ne promettra jamais une livraison non vérifiée.

---

## Panel admin

Adresse : `/admin` (ex. https://erp-bois-de-chauffage.vercel.app/admin).

- **Commandes** : toutes les commandes reçues, leur détail, un statut (nouvelle, en cours, terminée,
  annulée) et une note interne.
- **Prix** : le prix de chaque variante de produit (vide = « Prix sur demande »), avec le prix de
  référence relevé sur kwattbois.fr en repère.
- **Formulaire** : vous nommez chaque champ, son texte d'exemple (placeholder), vous choisissez s'il est
  visible/obligatoire, son ordre, et vous pouvez ajouter vos propres champs. Vous modifiez aussi le titre,
  le bouton d'envoi et la page de remerciements.

Pour l'activer en ligne : variable `ADMIN_PASSWORD` + base Upstash Redis connectée au projet Vercel.

## Réception des commandes et paiement

Les secrets ne sont **jamais** écrits dans le code : ils se configurent en variables
d'environnement (modèle : `.env.example`).

1. **Recevoir les commandes par email** (indispensable) : créez un compte sur
   [resend.com](https://resend.com), vérifiez votre nom de domaine, puis renseignez
   `RESEND_API_KEY`, `EMAIL_FROM` et `ORDER_NOTIFICATION_EMAIL`.
   Le client reçoit aussi un accusé de réception.
   *Sans cette configuration*, le site ne fait pas semblant : il propose au client d'envoyer sa
   commande lui-même via WhatsApp, email ou téléphone (texte prêt à l'emploi).

2. **Paiement par carte (facultatif)** : créez un compte [Stripe](https://stripe.com),
   renseignez `STRIPE_SECRET_KEY` (commencez par une clé de test `sk_test_…`), puis déclarez le
   webhook `https://VOTRE-DOMAINE/api/paiement/stripe/webhook` (événement
   `checkout.session.completed`) et renseignez `STRIPE_WEBHOOK_SECRET`.
   Le paiement en ligne n'est proposé que si le total de la commande est entièrement connu.

3. **Paiements hors ligne** (virement, chèque…) : activez-les dans `src/config/payments.ts`.

---

## Développement

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # vérifie que tout compile avant de publier
npm run lint
```

Structure :

```
src/
  config/       ← TOUT ce que vous modifiez (produits, livraison, contact, textes)
  app/          pages du site (une dossier = une adresse) + api/ (commandes, contact, Stripe)
  components/   éléments d'interface réutilisables
  lib/          calculs partagés (prix, livraison, validation, SEO)
  server/       code exécuté uniquement sur le serveur (emails, Stripe, anti-spam)
public/images/  photos
```

## Hébergement

Le site a besoin d'un serveur Node.js (pour recevoir les commandes). Hébergeur conseillé :
[Vercel](https://vercel.com) (offre gratuite, connexion directe au dépôt GitHub). Pensez à
définir `NEXT_PUBLIC_SITE_URL` avec l'adresse finale du site (utilisée pour le sitemap et le
référencement).
