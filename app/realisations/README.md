# 📋 Page Réalisations - Guide de modification

## 🎯 Pour qui est ce guide ?

Ce guide vous explique comment **modifier le contenu de la page Réalisations** directement depuis GitHub, sans avoir besoin d'outils de développement sur votre ordinateur.

---

## � Où se trouve le fichier à modifier ?

Le fichier à modifier est : **`app/realisations/page.tsx`**

Chemin complet : `manevok/project/app/realisations/page.tsx`

---

## 🌐 Comment modifier sur GitHub ?

### Étape 1 : Accéder au fichier
1. Allez sur votre repository GitHub
2. Naviguez vers : `app` → `realisations` → `page.tsx`
3. Cliquez sur le fichier pour l'ouvrir

### Étape 2 : Éditer le fichier
1. Cliquez sur l'icône **crayon** (✏️) en haut à droite ("Edit this file")
2. Vous êtes maintenant en mode édition !

### Étape 3 : Modifier le contenu
- **Toutes les données à modifier se trouvent entre les lignes 14 et 120**
- Faites défiler jusqu'au début du fichier
- Vous verrez des sections clairement marquées :
  - `missionsDetaillees` : Vos missions/réalisations
  - `statistiques` : Les chiffres clés
  - `testimonial` : Le témoignage client

### Étape 4 : Sauvegarder
1. Descendez en bas de la page
2. Dans "Commit changes" :
   - Ajoutez un message décrivant vos modifications (ex: "Ajout nouvelle mission ENTREPRISE XYZ")
3. Cliquez sur **"Commit changes"**
4. Attendez quelques minutes que le site se mette à jour automatiquement

---

## 🏢 Ajouter une nouvelle mission

Trouvez la section `missionsDetaillees` et ajoutez un bloc comme celui-ci :

```typescript
{
  id: 7, // Incrémentez l'ID
  title: "NOM DE L'ENTREPRISE",
  location: "VILLE / RÉGION",
  badge: "Type de mission", // Ex: "International", "Naval", "Management"
  color: "blue", // Couleurs disponibles: blue, green, indigo, purple, teal, orange
  subtitle: "DESCRIPTION COURTE EN MAJUSCULES",
  missions: [ // Liste des missions (optionnel)
    'Mission 1',
    'Mission 2',
    'Mission 3',
  ],
  zones: ['Zone 1', 'Zone 2'], // Zones géographiques (optionnel)
  secteur: "Description du secteur d'activité",
  image: "/nom-image.jpg", // Image dans public/
  fullWidth: true, // true = pleine largeur, false/undefined = demi-largeur
  fullImage: false, // true = affiche seulement l'image (pas de liste)
  halfWidth: false, // true = affiche en demi-largeur (côte à côte)
}
```

### Options d'affichage :

1. **Mission complète (pleine largeur)** :
   ```typescript
   {
     fullWidth: true,
     missions: [...], // Liste des missions
     zones: [...], // Zones géographiques
   }
   ```

2. **Mission simple avec image uniquement** :
   ```typescript
   {
     fullImage: true,
     halfWidth: true, // Pour afficher 2 par ligne
   }
   ```

3. **Deux missions côte à côte** :
   - Ajoutez `halfWidth: true` à deux missions consécutives
   - Elles s'afficheront automatiquement côte à côte

---

## 📊 Modifier les Statistiques

Dans la variable `statistiques` :

```typescript
const statistiques = [
  { 
    number: "15+", // Chiffre à afficher
    label: "Entreprises", // Titre
    description: "Accompagnées avec succès" // Description
  },
  // Ajoutez d'autres statistiques...
]
```

---

## 💬 Modifier le Témoignage

Dans la variable `testimonial` :

```typescript
const testimonial = {
  text: "Texte complet du témoignage...",
  author: "Nom de l'auteur",
  position: "Poste - Entreprise",
  source: "Source du témoignage",
  initials: "AB" // Initiales pour l'avatar
}
```

---

## 🎨 Couleurs disponibles

- `blue` : Bleu
- `green` : Vert
- `indigo` : Indigo
- `purple` : Violet
- `teal` : Turquoise
- `orange` : Orange

---

## 📁 Images

Placez vos images dans le dossier `public/` :
- `/mon-image.jpg`
- `/logo-entreprise.png`

---

## 💡 Exemples

### Mission complète avec liste
```typescript
{
  id: 1,
  title: "ENTREPRISE ABC",
  location: "PARIS",
  badge: "Stratégique",
  color: "blue",
  subtitle: "RESTRUCTURATION DES ACHATS",
  missions: [
    'Audit complet',
    'Plan d\'action',
    'Déploiement'
  ],
  zones: ['France', 'Europe'],
  secteur: "Industrie",
  image: "/abc.jpg",
  fullWidth: true,
}
```

### Mission simple avec image
```typescript
{
  id: 2,
  title: "ENTREPRISE XYZ",
  location: "LYON",
  badge: "Consulting",
  color: "green",
  subtitle: "MISSION D'ACCOMPAGNEMENT",
  secteur: "Services",
  image: "/xyz.jpg",
  fullImage: true,
  halfWidth: true,
}
```

---

## 🖼️ Comment ajouter des images ?

### Méthode 1 : Via GitHub (recommandé pour les débutants)
1. Dans votre repository, allez dans le dossier `public/`
2. Cliquez sur **"Add file"** → **"Upload files"**
3. Glissez-déposez vos images
4. Nommez-les simplement (ex: `entreprise-abc.jpg`)
5. Cliquez sur **"Commit changes"**
6. Dans le fichier `page.tsx`, utilisez : `image: "/entreprise-abc.jpg"`

### Méthode 2 : Via votre développeur
- Envoyez les images à votre développeur
- Il les ajoutera dans le dossier `public/`

---

## ⚠️ Règles importantes

### ✅ À FAIRE :
- Copier/coller un bloc existant pour en créer un nouveau
- Incrémenter les ID (1, 2, 3, 4...)
- Tester sur le site après modification

### ❌ À NE PAS FAIRE :
- Ne supprimez pas les virgules `,` entre les éléments
- Ne supprimez pas les accolades `{ }` ou crochets `[ ]`
- N'oubliez pas les guillemets `" "` autour des textes

## 💡 Astuces

1. **Avant de modifier** : Faites une copie du texte original dans un fichier texte
2. **Testez petit** : Modifiez une seule chose à la fois
3. **Vérifiez** : Attendez 2-3 minutes après chaque modification et vérifiez le site
4. **Virgules** : Assurez-vous qu'il y a une virgule `,` entre chaque bloc `{ ... }`

---

## 📞 Questions ?

Un souci ? Envoyez simplement :
- Ce que vous vouliez faire
- Ce que vous avez modifié
- Une capture d'écran si possible

---

**Le fichier est conçu pour être simple à modifier. N'ayez pas peur d'essayer ! En cas d'erreur, vous pouvez toujours revenir en arrière. 🚀**

---

*Site développé par Firmin THIERY - thry.firmin@gmail.com*
