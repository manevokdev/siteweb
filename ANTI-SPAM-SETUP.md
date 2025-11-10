# 🔐 Protection Anti-Spam - Configuration Rapide

## ✅ Ce qui a été fait

### 📦 Packages installés
- `react-google-recaptcha-v3` : Intégration reCAPTCHA v3 pour React

### 🛠️ Fichiers créés/modifiés

1. **`components/ReCaptchaProvider.tsx`** (NOUVEAU)
   - Provider global pour reCAPTCHA
   - Charge le script Google automatiquement

2. **`app/layout.tsx`** (MODIFIÉ)
   - Ajout du ReCaptchaProvider autour de toute l'app
   - Permet d'utiliser reCAPTCHA sur toutes les pages

3. **`app/contact/page.tsx`** (MODIFIÉ)
   - Intégration du hook `useGoogleReCaptcha`
   - Génération du token avant l'envoi du formulaire
   - Message de mention légale reCAPTCHA ajouté

4. **`app/api/contact/route.ts`** (MODIFIÉ)
   - Fonction `verifyRecaptcha()` pour vérifier le token côté serveur
   - Validation du score (≥ 0.5 = humain, < 0.5 = spam/bot)
   - Blocage automatique des tentatives de spam

5. **`.env.local`** (MODIFIÉ)
   - Variables `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` et `RECAPTCHA_SECRET_KEY` ajoutées

6. **`.env.example`** (MODIFIÉ)
   - Template mis à jour avec les nouvelles variables

7. **`RECAPTCHA-SETUP.md`** (NOUVEAU)
   - Guide complet de configuration
   - Étapes détaillées pour obtenir les clés Google
   - Conseils de débogage et optimisation

8. **`README.md`** (MODIFIÉ)
   - Section anti-spam ajoutée
   - Variables d'environnement mises à jour

---

## 🚀 Prochaines étapes (OBLIGATOIRE)

### 1. Obtenir les clés reCAPTCHA

**Sans ces clés, le formulaire NE FONCTIONNERA PAS en production !**

1. Allez sur : [https://www.google.com/recaptcha/admin](https://www.google.com/recaptcha/admin)
2. Cliquez sur **"+"** pour créer un nouveau site
3. Remplissez :
   - **Libellé** : MANévok Contact Form
   - **Type** : Score reCAPTCHA (v3)
   - **Domaines** : 
     ```
     manevok.com
     www.manevok.com
     localhost
     ```
4. Cliquez sur **"Envoyer"**
5. Récupérez les **2 clés** :
   - **Site Key** (commence par `6L...`) → publique
   - **Secret Key** (commence par `6L...`) → privée

### 2. Configurer en local

Ajoutez dans `.env.local` :
```bash
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
RECAPTCHA_SECRET_KEY=6Lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Redémarrez le serveur :
```bash
npm run dev
```

### 3. Configurer en production

Sur **Vercel/Netlify**, ajoutez ces 2 variables d'environnement :
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- `RECAPTCHA_SECRET_KEY`

Puis **redéployez** le site.

---

## 🧪 Tester

1. Allez sur `/contact`
2. Remplissez le formulaire
3. Cliquez sur "Envoyer"
4. ✅ Si ça passe = tout fonctionne !
5. ❌ Si erreur "reCAPTCHA non chargé" = clés manquantes

---

## 🎯 Comment ça fonctionne ?

### Côté client (navigateur)
1. L'utilisateur remplit le formulaire
2. Quand il clique sur "Envoyer", reCAPTCHA génère un **token** basé sur son comportement
3. Le token est envoyé avec les données du formulaire

### Côté serveur (API)
1. Le serveur reçoit le token
2. Il l'envoie à Google pour vérification
3. Google retourne un **score de 0 à 1** :
   - **1.0** = Très probablement un humain
   - **0.5** = Limite (défaut actuel)
   - **0.0** = Très probablement un bot/spam
4. Si score < 0.5 → **Message bloqué** ❌
5. Si score ≥ 0.5 → **Message envoyé** ✅

---

## 🔍 Logs et monitoring

### Voir les tentatives de spam bloquées

Dans les logs serveur (Vercel/Netlify), vous verrez :
```
Tentative de spam détectée: { name: 'Bot Name', email: 'spam@example.com' }
```

### Dashboard Google reCAPTCHA

Sur [google.com/recaptcha/admin](https://www.google.com/recaptcha/admin), vous pouvez voir :
- Nombre de requêtes
- Score moyen des utilisateurs
- Statistiques par jour/semaine/mois

---

## ⚙️ Paramètres ajustables

### Modifier le seuil de détection

Dans `app/api/contact/route.ts`, ligne ~30 :

```typescript
return data.success && data.score >= 0.5  // Changez 0.5 si besoin
```

**Recommandations** :
- `0.3` : Permissif (laisse passer quelques bots)
- `0.5` : **Équilibré (recommandé)** ✅
- `0.7` : Strict (peut bloquer de vrais humains)

---

## 📊 Avantages de reCAPTCHA v3

✅ **Invisible** : Pas de case à cocher, pas d'interruption
✅ **Intelligent** : Analyse le comportement (mouvements souris, vitesse de frappe, etc.)
✅ **Efficace** : Bloque 99% des spams sans embêter les humains
✅ **Gratuit** : 1 million de requêtes/mois incluses
✅ **Facile** : Configuration en 5 minutes

---

## 🆘 Support

**Guide complet** : Voir [`RECAPTCHA-SETUP.md`](./RECAPTCHA-SETUP.md)

**Problème ?** Contact : Firmin THIERY - thry.firmin@gmail.com

---

## 📝 Notes importantes

⚠️ **ATTENTION** : Sans les clés reCAPTCHA configurées, le formulaire affichera l'erreur "reCAPTCHA non chargé" et ne pourra pas être envoyé.

🔒 **SÉCURITÉ** : Ne jamais commiter `.env.local` ou exposer la Secret Key publiquement.

🎯 **PRODUCTION** : Pensez bien à ajouter les variables sur Vercel/Netlify ET redéployer !

---

*Configuration effectuée par Firmin THIERY - thry.firmin@gmail.com*
