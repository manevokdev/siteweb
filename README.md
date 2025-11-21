# Site MANévok

Site vitrine pour **MANévok** - Management de Transition & Conseil en Supply Chain.

---

## 🚀 Démarrage rapide

### Installation

```bash
npm install
```

### Lancement en local

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

---

## 📧 Configuration des emails

Le formulaire de contact envoie automatiquement des emails via **Resend**.

**Voir le guide complet** : [`EMAIL-SETUP.md`](./EMAIL-SETUP.md)

Configuration rapide :
1. Créez un compte sur [resend.com](https://resend.com)
2. Vérifiez le domaine `manevok.com`
3. Obtenez votre clé API
4. Ajoutez `RESEND_API_KEY=votre_cle` dans `.env.local`

---

## 🛡️ Protection anti-spam (reCAPTCHA)

Le formulaire de contact utilise **Google reCAPTCHA v3** pour bloquer automatiquement les spams.

**Voir le guide complet** : [`RECAPTCHA-SETUP.md`](./RECAPTCHA-SETUP.md)

Configuration rapide :
1. Créez un site sur [google.com/recaptcha/admin](https://www.google.com/recaptcha/admin)
2. Choisissez reCAPTCHA v3
3. Récupérez vos 2 clés (Site Key + Secret Key)
4. Ajoutez dans `.env.local` :
   ```bash
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=votre_site_key
   RECAPTCHA_SECRET_KEY=votre_secret_key
   ```

---

## ✏️ Modifier le contenu

### Pages principales

- **Accueil** : `app/page.tsx`
- **À propos** : `app/a-propos/page.tsx`
- **Réalisations** : `app/realisations/page.tsx` (voir `app/realisations/README.md`)
- **Formations** : `app/formations/page.tsx`
- **Publications** : `app/publications/page.tsx` (voir `app/publications/README.md`)
- **Contact** : `app/contact/page.tsx`

### Pages avec configuration simplifiée

Ces pages ont des **variables au début du fichier** pour faciliter les modifications :

#### 📊 Réalisations (`app/realisations/page.tsx`)
Guide complet : [`app/realisations/README.md`](./app/realisations/README.md)

Variables configurables (lignes 14-120) :
- `missionsDetaillees` : Liste des missions/projets
- `statistiques` : Chiffres clés
- `testimonial` : Témoignage client

#### 📚 Publications (`app/publications/page.tsx`)
Guide complet : [`app/publications/README.md`](./app/publications/README.md)

Variables configurables (lignes 7-100) :
- `webinars` : Webinars et vidéos
- `publicationsFR` : Publications françaises
- `publicationsEN` : Publications anglaises
- `speechVideo` : Vidéo de présentation

---

## 📁 Structure du projet

```
project/
├── app/                    # Pages Next.js
│   ├── api/               # API Routes (emails, etc.)
│   ├── a-propos/          # Page À propos
│   ├── contact/           # Page Contact + formulaire
│   ├── formations/        # Page Formations
│   ├── publications/      # Page Publications
│   ├── realisations/      # Page Réalisations
│   └── ...
├── components/            # Composants réutilisables
│   ├── Header.tsx        # Menu navigation
│   ├── Footer.tsx        # Pied de page
│   ├── Animated.tsx      # Animations Framer Motion
│   └── ui/               # Composants UI (shadcn/ui)
├── public/               # Fichiers statiques
│   ├── publications/     # PDFs des publications
│   └── ...
├── .env.local           # Variables d'environnement (non commité)
├── EMAIL-SETUP.md       # Guide configuration emails
└── package.json         # Dépendances npm
```

---

## 🛠️ Technologies utilisées

- **Framework** : [Next.js 14](https://nextjs.org/) (App Router)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Composants UI** : [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Emails** : [Resend](https://resend.com/)
- **Calendrier** : [Calendly](https://calendly.com/)
- **Icônes** : [Lucide](https://lucide.dev/)

---

## 📦 Déploiement

### Vercel (recommandé)

1. Push le code sur GitHub
2. Connectez le repo sur [vercel.com](https://vercel.com)
3. Ajoutez les variables d'environnement :
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   - `RECAPTCHA_SECRET_KEY`
4. Déployez !

---

## 🔒 Variables d'environnement

Créez un fichier `.env.local` :

```bash
# Emails (Resend)
RESEND_API_KEY=re_votre_cle_api_ici

# Anti-spam (reCAPTCHA v3)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lxxx...
RECAPTCHA_SECRET_KEY=6Lxxx...
```

**Ne committez jamais ce fichier !** Il est ignoré par Git.

---

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont définies dans `app/globals.css` :
- **Bleu** : `#1976D2`
- **Vert** : `#8BC34A`
- **Amber** : `#FFA726`

### Polices

Police système utilisée :
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...
```

---

## 📝 Commandes utiles

```bash
npm run dev          # Lancer en développement
npm run build        # Build pour production
npm run start        # Démarrer en production
npm run lint         # Vérifier le code
```

---

## 🐛 Dépannage

### Le formulaire ne s'envoie pas

- Vérifiez que `RESEND_API_KEY` est configuré
- Consultez [`EMAIL-SETUP.md`](./EMAIL-SETUP.md)
- Vérifiez les logs dans la console

### Images manquantes

- Les images doivent être dans `public/`
- Format : JPG, PNG, WebP
- Noms sans espaces (utilisez des tirets `-`)

### Erreurs de build

```bash
# Nettoyez et réinstallez
rm -rf node_modules .next
npm install
npm run build
```

---

## 📞 Support

**Développeur** : Firmin THIERY  
**Email** : thry.firmin@gmail.com

Pour les modifications de contenu : consultez les README dans chaque dossier.

---

## 📄 Licence

Propriété de MANévok - Tous droits réservés.

---

*Site développé par Firmin THIERY - thry.firmin@gmail.com*
