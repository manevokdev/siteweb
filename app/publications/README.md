# 📋 Page Publications - Guide de modification

## 🎯 Pour qui est ce guide ?

Ce guide vous explique comment **modifier le contenu de la page Publications** directement depuis GitHub, sans avoir besoin d'outils de développement sur votre ordinateur.

---

## 📍 Où se trouve le fichier à modifier ?

Le fichier à modifier est : **`app/publications/page.tsx`**

Chemin complet : `manevok/project/app/publications/page.tsx`

---

## 🌐 Comment modifier sur GitHub ?

### Étape 1 : Accéder au fichier
1. Allez sur votre repository GitHub : `https://github.com/Firemain/manevok`
2. Naviguez vers : `app` → `publications` → `page.tsx`
3. Cliquez sur le fichier pour l'ouvrir

### Étape 2 : Éditer le fichier
1. Cliquez sur l'icône **crayon** (✏️) en haut à droite ("Edit this file")
2. Vous êtes maintenant en mode édition !

### Étape 3 : Modifier le contenu
- **Toutes les données à modifier se trouvent entre les lignes 7 et 100**
- Faites défiler jusqu'au début du fichier
- Vous verrez des sections clairement marquées :
  - `webinars` : Vos webinars/vidéos
  - `publicationsFR` : Publications en français
  - `publicationsEN` : Publications en anglais
  - `speechVideo` : Vidéo de présentation

### Étape 4 : Sauvegarder
1. Descendez en bas de la page
2. Dans "Commit changes" :
   - Ajoutez un message décrivant vos modifications (ex: "Ajout nouvelle publication Achats 2025")
3. Cliquez sur **"Commit changes"**
4. Attendez quelques minutes que le site se mette à jour automatiquement

---

## 🎥 Ajouter un Webinar / Vidéo

Trouvez la section `webinars` et ajoutez un bloc comme celui-ci :

```typescript
{
  id: 2, // Incrémentez l'ID
  title: "Titre de votre webinar",
  organization: "Nom de l'organisation",
  date: "JJ Mois AAAA",
  description: "Description du webinar...",
  videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
  thumbnail: "/nom-image.jpg",
}
```

**N'oubliez pas la virgule `,` à la fin !**

---

## 📄 Ajouter une Publication Française

Trouvez la section `publicationsFR` et ajoutez :

```typescript
{
  id: 8, // Incrémentez l'ID
  title: "TITRE COURT", // En majuscules, affiché sur le bouton
  subtitle: "Description plus détaillée",
  date: "MM/AAAA",
  pdfUrl: "/publications/nom-du-fichier.pdf",
}
```

**Placez votre PDF dans** `public/publications/`

---

## 📄 Ajouter une Publication Anglaise

Trouvez la section `publicationsEN`, même principe que les publications françaises :

```typescript
{
  id: 7,
  title: "TITLE",
  subtitle: "Detailed description",
  date: "MM/YYYY",
  pdfUrl: "/publications/en/filename.pdf",
}
```

**Placez votre PDF dans** `public/publications/en/`

---

## 🖼️ Comment ajouter des fichiers PDF ?

### Méthode 1 : Via GitHub (recommandé)
1. Dans votre repository, allez dans le dossier `public/publications/`
2. Pour les publications françaises : restez dans `publications/`
3. Pour les publications anglaises : allez dans `publications/en/`
4. Cliquez sur **"Add file"** → **"Upload files"**
5. Glissez-déposez vos fichiers PDF
6. Nommez-les simplement (ex: `nouvelle-etude.pdf`)
7. Cliquez sur **"Commit changes"**
8. Dans le fichier `page.tsx`, utilisez : `pdfUrl: "/publications/nouvelle-etude.pdf"`

### Méthode 2 : Via votre développeur
- Envoyez les PDF à votre développeur
- Il les ajoutera dans les bons dossiers

---

## ⚠️ Règles importantes

### ✅ À FAIRE :
- Modifier **uniquement** les lignes 7 à 100 (zone de configuration)
- Copier/coller un bloc existant pour en créer un nouveau
- Incrémenter les ID (1, 2, 3, 4...)
- Vérifier que vos PDF sont bien uploadés avant de modifier le code
- Tester sur le site après modification

### ❌ À NE PAS FAIRE :
- Ne modifiez **JAMAIS** le code après la ligne 100
- Ne supprimez pas les virgules `,` entre les éléments
- Ne supprimez pas les accolades `{ }` ou crochets `[ ]`
- N'oubliez pas les guillemets `" "` autour des textes
- Ne mettez pas d'espaces dans les noms de fichiers PDF

---

## 🆘 En cas de problème

### Le site ne s'affiche plus correctement ?
1. Retournez sur GitHub
2. Cliquez sur **"History"** (Historique) en haut à droite
3. Trouvez votre dernière modification
4. Cliquez sur les 3 points `...` puis **"Revert"** pour annuler

### Un PDF ne se télécharge pas ?
- Vérifiez que le fichier existe bien dans `public/publications/`
- Vérifiez que le nom dans le code correspond exactement au nom du fichier
- Respectez les majuscules/minuscules

### Besoin d'aide ?
- Pas de stress, envoyez un message
- Une capture d'écran aide toujours
- Dites simplement ce que vous vouliez faire

---

## 💡 Astuces

1. **Avant de modifier** : Notez ce que vous voulez changer dans un fichier texte
2. **Testez petit** : Ajoutez une seule publication à la fois
3. **Vérifiez** : Attendez 2-3 minutes après chaque modification et testez le téléchargement
4. **Virgules** : Chaque bloc `{ ... }` doit être séparé par une virgule `,`
5. **Noms de fichiers** : Utilisez des tirets `-` au lieu d'espaces (ex: `mon-fichier.pdf`)

---

## 📞 Questions ?

Un souci ? Envoyez simplement :
- Ce que vous vouliez faire
- Ce que vous avez modifié
- Une capture d'écran si possible

---

**Le fichier est conçu pour être simple à modifier. En cas d'erreur, vous pouvez toujours revenir en arrière avec l'historique GitHub. 🚀**

---

*Site développé par Firmin THIERY - thry.firmin@gmail.com*
