# 🎉 Page Publications - Installation Complète

## ✅ Ce qui a été créé

### 1. **Page Publications** (`app/publications/page.tsx`)
- Design moderne reprenant le style du site
- Section Webinars avec vidéos YouTube intégrables
- Section Publications (FR/EN) avec système d'onglets
- Section Programmes de Formation
- Section TikTok/Réseaux sociaux avec le speech d'Olivier
- Variables configurables en haut du fichier pour faciliter les modifications

### 2. **Navigation mise à jour**
- Lien "Publications" ajouté dans le Header
- Lien "Publications" ajouté dans le Footer

### 3. **Structure de dossiers créée**
```
public/
├── publications/          ← Publications françaises (PDF)
│   ├── en/               ← Publications anglaises (PDF)
│   └── thumbs/           ← Miniatures (images optionnelles)
│       └── en/           ← Miniatures anglaises
└── formations/           ← Programmes de formation (PDF)
```

### 4. **Documentation**
- `README.md` : Guide d'utilisation complet
- `FILES-TO-ADD.md` : Liste des fichiers à ajouter
- `.gitkeep` dans chaque dossier

---

## 🚀 Prochaines étapes

### Étape 1 : Ajouter vos fichiers PDF
Placez vos fichiers dans les dossiers correspondants :
- Publications FR → `public/publications/`
- Publications EN → `public/publications/en/`
- Formations → `public/formations/`

### Étape 2 : Ajouter des images (optionnel mais recommandé)
- Miniatures des publications → `public/publications/thumbs/`
- Image du webinar ALTIOR → `public/webinar-altior.jpg`

### Étape 3 : Configurer les URLs de vidéos
Dans `app/publications/page.tsx` :
1. Trouvez la section `webinars` (ligne ~10)
2. Remplacez `"https://www.youtube.com/embed/VOTRE_VIDEO_ID"` par l'URL YouTube réelle
3. Remplacez les liens TikTok si besoin (ligne ~131)

### Étape 4 : Personnaliser le contenu
Modifiez les variables en haut de `page.tsx` :
- Ajoutez/supprimez des webinars
- Ajoutez/supprimez des publications
- Ajoutez/supprimez des programmes
- Modifiez le speech TikTok

---

## 📋 Liste des fichiers PDF mentionnés dans le code

### Publications Françaises (7 fichiers)
1. `pic-pdp-exo.pdf` - Mettre en place un PIC-PDP
2. `securisation.pdf` - Sécuriser ses approvisionnements
3. `veille.pdf` - Organiser une veille stratégique
4. `negociation.pdf` - Préparer une négociation
5. `cdc.pdf` - La rédaction de cahier des charges
6. `continuite.pdf` - La continuité d'activité
7. `quizz.pdf` - Quizz Achat

### Publications Anglaises (6 fichiers)
1. `sop-mps-exo.pdf` - S&OP-MPS on trade items
2. `supplies.pdf` - Secure your supplies
3. `intelligence.pdf` - Business intelligence
4. `negociation.pdf` - Prepare negociation
5. `specifications.pdf` - Build specifications
6. `continuity.pdf` - Business continuity

### Programmes de Formation (2 fichiers)
1. `programme-achats.pdf`
2. `programme-supply-chain.pdf`

---

## 🎨 Fonctionnalités de la page

✅ Design responsive (mobile, tablette, desktop)
✅ Animations au scroll (Framer Motion)
✅ Système d'onglets FR/EN pour les publications
✅ Boutons de téléchargement pour les PDF
✅ Intégration vidéos YouTube/TikTok
✅ Cards avec effet hover élégant
✅ Gradient colorés cohérents avec le site
✅ Section CTA en bas de page
✅ Facilement modifiable via variables

---

## 🛠️ Comment modifier le contenu

### Pour ajouter un nouveau webinar :
```typescript
// Dans la variable webinars (ligne ~10)
{
  id: 2,
  title: "Mon nouveau webinar",
  organization: "Organisation",
  date: "JJ Mois AAAA",
  description: "Description...",
  videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
  thumbnail: "/mon-image.jpg",
}
```

### Pour ajouter une nouvelle publication FR :
```typescript
// Dans la variable publicationsFR (ligne ~27)
{
  id: 8,
  title: "Nouveau titre",
  subtitle: "Description",
  date: "MM/AAAA",
  pdfUrl: "/publications/mon-fichier.pdf",
  thumbnail: "/publications/thumbs/mon-image.jpg",
}
```

### Pour ajouter une formation :
```typescript
// Dans la variable programmesFormation (ligne ~116)
{
  id: 3,
  title: "Nouvelle formation",
  description: "Description de la formation",
  pdfUrl: "/formations/programme.pdf",
  duration: "2 jours",
  level: "Tous niveaux",
}
```

---

## 🎯 Points importants

1. **Les miniatures sont OPTIONNELLES** - Si vous ne mettez pas d'image, une icône générique s'affichera
2. **Vérifiez les URLs** - Assurez-vous que les chemins vers vos PDF sont corrects
3. **ID uniques** - Chaque élément doit avoir un ID unique dans son tableau
4. **Noms de fichiers** - Pas d'espaces, utilisez des tirets (-)
5. **YouTube embeds** - Utilisez le format `/embed/VIDEO_ID` et non `/watch?v=`

---

## 📞 Support

Pour toute modification du design ou ajout de fonctionnalités :
- Contactez votre développeur
- Consultez le README.md dans `app/publications/`

---

## ✨ Résumé visuel

**Page Publications inclut :**
1. 🎥 **Hero** - Titre et introduction
2. 📹 **Webinars** - Vidéos avec liens YouTube
3. 📄 **Publications** - FR/EN avec onglets + téléchargements
4. 📚 **Formations** - Programmes PDF à télécharger
5. 💬 **TikTok Speech** - Présentation d'Olivier + liens sociaux
6. 🚀 **CTA** - Appel à l'action pour contact

**Design cohérent avec :**
- Animations Framer Motion
- Couleurs MANévok (bleu, vert, orange)
- Cards flottantes avec effets hover
- Gradients élégants
- Responsive design

---

Bon courage pour l'ajout de vos contenus ! 🚀
