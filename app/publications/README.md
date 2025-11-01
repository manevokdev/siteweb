# Page Publications - Guide d'utilisation

## 📝 Comment ajouter du contenu

La page Publications est conçue pour être facilement modifiable. Toutes les variables de configuration se trouvent **au début du fichier** `page.tsx`.

---

## 🎥 Ajouter un Webinar / Vidéo

Dans la variable `webinars` (ligne ~10), ajoutez un nouvel objet :

```typescript
{
  id: 2, // Incrémentez l'ID
  title: "Titre de votre webinar",
  organization: "Nom de l'organisation",
  date: "JJ Mois AAAA",
  description: "Description du webinar...",
  videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
  thumbnail: "/webinar-image.jpg", // Optionnel
}
```

---

## 📄 Ajouter une Publication Française

Dans la variable `publicationsFR` (ligne ~27), ajoutez :

```typescript
{
  id: 8, // Incrémentez l'ID
  title: "TITRE COURT", // Affiché sur le bouton en majuscules
  subtitle: "Description plus détaillée",
  date: "MM/AAAA",
  pdfUrl: "/publications/nom-du-fichier.pdf",
}
```

**📁 Placez vos PDF** dans le dossier `public/publications/`

---

## 📄 Ajouter une Publication Anglaise

Dans la variable `publicationsEN` (ligne ~60), même structure que les publications françaises.

**📁 Placez vos PDF** dans le dossier `public/publications/en/`

---

## 📚 Ajouter un Programme de Formation

Dans la variable `programmesFormation` (ligne ~116), ajoutez :

```typescript
{
  id: 3, // Incrémentez l'ID
  title: "Nom du programme",
  description: "Description du contenu de la formation",
  pdfUrl: "/formations/programme-nom.pdf",
  duration: "X jours",
  level: "Débutant / Intermédiaire / Avancé",
}
```

**📁 Placez vos PDF** dans le dossier `public/formations/`

---

## 📱 Modifier le Speech TikTok

Dans la variable `tikTokSpeech` (ligne ~131), vous pouvez modifier :

- `title` : Titre de la section
- `author` : Nom de l'auteur
- `content` : Tableau de paragraphes (chaque élément = un paragraphe)
- `socialLinks` : Liens vers TikTok et LinkedIn

---

## 🎨 Structure des Dossiers Publics

Organisez vos fichiers dans `public/` :

```
public/
├── publications/
│   ├── nom-publication.pdf
│   ├── en/
│   │   └── english-publication.pdf
│   └── thumbs/
│       ├── image-preview.jpg
│       └── en/
│           └── english-preview.jpg
├── formations/
│   └── programme-formation.pdf
└── webinar-image.jpg
```

---

## ✅ Checklist pour ajouter du contenu

1. ✏️ Ouvrir `app/publications/page.tsx`
2. 📝 Modifier les variables en haut du fichier
3. 📁 Ajouter les fichiers PDF/images dans `public/`
4. 💾 Sauvegarder
5. 🔄 Rafraîchir la page

---

## 🎯 Conseils

- **Images** : Format JPG ou PNG, max 500 Ko
- **PDF** : Nommez les fichiers sans espaces (utilisez des tirets)
- **Ordre** : Les éléments s'affichent dans l'ordre du tableau
- **ID** : Assurez-vous que chaque ID est unique dans son tableau

---

## 🆘 Besoin d'aide ?

Contactez votre développeur si vous avez besoin d'aide pour :
- Modifier le design
- Ajouter de nouvelles sections
- Intégrer des fonctionnalités avancées
