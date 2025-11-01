# 📝 Exemple de Configuration - Page Publications

## Configuration actuelle dans `page.tsx`

Voici ce qui est déjà configuré dans votre page. Pour modifier, ouvrez `app/publications/page.tsx` et trouvez ces variables au début du fichier.

---

## 🎥 WEBINARS (ligne ~10)

```typescript
const webinars = [
  {
    id: 1,
    title: "Comment la digitalisation permet-elle d'optimiser ses achats industriels !",
    organization: "ALTIOR",
    date: "17 Juin 2022",
    description: "MANévok a animé le Webinar organisé par ALTIOR...",
    videoUrl: "https://www.youtube.com/embed/VOTRE_VIDEO_ID", // ⚠️ À REMPLACER
    thumbnail: "/webinar-altior.jpg",
  },
]
```

### ✅ Pour obtenir l'URL YouTube embed :
1. Allez sur votre vidéo YouTube
2. Cliquez sur "Partager" → "Intégrer"
3. Copiez l'URL qui ressemble à : `https://www.youtube.com/embed/ABC123`

---

## 📄 PUBLICATIONS FRANÇAISES (ligne ~27)

7 publications sont déjà configurées :

| Titre | Date | Fichier attendu |
|-------|------|-----------------|
| PIC-PDP-EXO | 03/2023 | `/publications/pic-pdp-exo.pdf` |
| Sécurisation | 07/2021 | `/publications/securisation.pdf` |
| Veille | 05/2021 | `/publications/veille.pdf` |
| Négociation | 03/2021 | `/publications/negociation.pdf` |
| Le C.D.C. | 02/2021 | `/publications/cdc.pdf` |
| Continuité | 01/2021 | `/publications/continuite.pdf` |
| QUIZZ Achat | 12/2020 | `/publications/quizz.pdf` |

---

## 📄 PUBLICATIONS ANGLAISES (ligne ~77)

6 publications sont déjà configurées :

| Title | Date | Fichier attendu |
|-------|------|-----------------|
| S&OP-MPS-EXO | 03/2023 | `/publications/en/sop-mps-exo.pdf` |
| Supplies | 07/2021 | `/publications/en/supplies.pdf` |
| Intelligence | 01/2021 | `/publications/en/intelligence.pdf` |
| Negociation | 01/2021 | `/publications/en/negociation.pdf` |
| Specifications | 01/2021 | `/publications/en/specifications.pdf` |
| Continuity | 01/2021 | `/publications/en/continuity.pdf` |

---

## 📚 PROGRAMMES DE FORMATION (ligne ~116)

2 programmes sont déjà configurés :

```typescript
const programmesFormation = [
  {
    id: 1,
    title: "Programme Achats Stratégiques",
    description: "Formation complète sur les achats industriels et la négociation",
    pdfUrl: "/formations/programme-achats.pdf",
    duration: "3 jours",
    level: "Tous niveaux",
  },
  {
    id: 2,
    title: "Programme Supply-Chain Management",
    description: "Optimisation de la chaîne logistique et gestion des flux",
    pdfUrl: "/formations/programme-supply-chain.pdf",
    duration: "2 jours",
    level: "Intermédiaire",
  },
]
```

---

## 💬 TIKTOK SPEECH (ligne ~131)

Le speech d'Olivier KUNSTMANN est déjà configuré avec le texte complet.

### Liens sociaux configurés :
- **TikTok** : `https://www.tiktok.com/@manevok` ⚠️ À vérifier/modifier
- **LinkedIn** : `https://www.linkedin.com/in/olivierkunstmann`

---

## 🎯 Actions à faire MAINTENANT

### 1️⃣ Urgences (bloquant) :
- [ ] Remplacer `VOTRE_VIDEO_ID` dans l'URL du webinar ALTIOR
- [ ] Ajouter les 7 PDF des publications françaises dans `public/publications/`
- [ ] Ajouter les 6 PDF des publications anglaises dans `public/publications/en/`

### 2️⃣ Important :
- [ ] Ajouter les 2 programmes de formation dans `public/formations/`
- [ ] Vérifier/corriger l'URL TikTok dans le code

### 3️⃣ Optionnel (améliore l'apparence) :
- [ ] Ajouter une image pour le webinar ALTIOR → `public/webinar-altior.jpg`
- [ ] Ajouter des miniatures pour les publications → `public/publications/thumbs/`
- [ ] Ajouter des miniatures pour les publications EN → `public/publications/thumbs/en/`

---

## 📋 Checklist de mise en ligne

```
✅ FICHIERS OBLIGATOIRES :
□ 7 PDF publications FR (public/publications/)
□ 6 PDF publications EN (public/publications/en/)
□ 2 PDF formations (public/formations/)
□ URL YouTube webinar ALTIOR (modifié dans page.tsx)

⭐ FICHIERS OPTIONNELS (recommandés) :
□ Image webinar ALTIOR (public/webinar-altior.jpg)
□ Miniatures publications FR (public/publications/thumbs/)
□ Miniatures publications EN (public/publications/thumbs/en/)

🔧 VÉRIFICATIONS :
□ Tester tous les liens de téléchargement
□ Vérifier la vidéo YouTube s'affiche
□ Tester sur mobile, tablette et desktop
□ Vérifier les liens TikTok/LinkedIn
```

---

## 🚨 Problèmes fréquents

### ❌ "Le PDF ne se télécharge pas"
➡️ Vérifiez que le fichier existe bien dans `public/` et que le nom correspond exactement (respectez les majuscules/minuscules)

### ❌ "La vidéo YouTube ne s'affiche pas"
➡️ Assurez-vous d'utiliser l'URL `/embed/` et non `/watch?v=`

### ❌ "Les images ne s'affichent pas"
➡️ Les images sont optionnelles. Si absentes, une icône générique s'affiche automatiquement

### ❌ "Je veux modifier l'ordre des publications"
➡️ Changez simplement l'ordre des objets dans les tableaux `publicationsFR` ou `publicationsEN`

---

## 💡 Conseils pro

1. **Nommez vos fichiers correctement** : 
   - ✅ `pic-pdp-exo.pdf` 
   - ❌ `PIC PDP EXO.pdf`

2. **Optimisez vos images** :
   - Format : JPG ou PNG
   - Taille : max 500 Ko
   - Dimensions : 400x600px pour les miniatures

3. **Testez localement** :
   ```bash
   npm run dev
   ```
   Puis allez sur `http://localhost:3000/publications`

4. **Organisez vos fichiers** :
   ```
   public/
   ├── webinar-altior.jpg
   ├── publications/
   │   ├── pic-pdp-exo.pdf
   │   ├── securisation.pdf
   │   └── ...
   ```

---

## 📞 Besoin d'aide ?

Consultez :
- `README.md` dans `app/publications/` pour le guide complet
- `FILES-TO-ADD.md` pour la liste des fichiers
- `PUBLICATIONS-INSTALLATION.md` pour l'installation

Ou contactez votre développeur pour des modifications avancées.

---

**Bonne chance ! 🎉**
