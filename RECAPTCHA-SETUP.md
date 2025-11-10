# 🛡️ Configuration Google reCAPTCHA v3 (Anti-spam)

## 🎯 Pourquoi reCAPTCHA v3 ?

Le formulaire de contact utilise **Google reCAPTCHA v3** pour filtrer automatiquement les spams et bots.

**Avantages** :
- ✅ **Invisible** : Pas de case à cocher, pas d'interruption pour l'utilisateur
- ✅ **Intelligent** : Score de 0 à 1.0 basé sur le comportement (0 = bot, 1 = humain)
- ✅ **Efficace** : Bloque 99% des spams sans embêter les vrais utilisateurs
- ✅ **Gratuit** : 1 million de requêtes/mois incluses

---

## ⚙️ Configuration (étape par étape)

### 1. Créer un compte reCAPTCHA

1. Allez sur : [https://www.google.com/recaptcha/admin](https://www.google.com/recaptcha/admin)
2. Connectez-vous avec un compte Google
3. Cliquez sur **"+"** (Créer)

### 2. Configurer le site

Remplissez le formulaire :

**Libellé** : `MANévok Contact Form` (ou n'importe quel nom)

**Type de reCAPTCHA** : Sélectionnez **"Score reCAPTCHA (v3)"**

**Domaines** : Ajoutez vos domaines (un par ligne) :
```
manevok.com
www.manevok.com
localhost (pour les tests en local)
```

**Propriétaires** : Ajoutez les emails des admins (optionnel)

**Accepter les conditions** : ✅ Cochez la case

Cliquez sur **"Envoyer"**

### 3. Récupérer les clés

Après validation, vous obtiendrez **2 clés** :

#### 🔑 Clé du site (Site Key)
- Commence par `6L...`
- **Publique** : Utilisée dans le navigateur
- Variable : `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`

#### 🔒 Clé secrète (Secret Key)
- Commence par `6L...`
- **PRIVÉE** : Ne jamais l'exposer publiquement
- Variable : `RECAPTCHA_SECRET_KEY`

### 4. Configurer les variables d'environnement

#### En local (développement)

Ajoutez dans `.env.local` :
```bash
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
RECAPTCHA_SECRET_KEY=6Lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

#### En production (Vercel/Netlify)

1. Allez dans les paramètres de votre projet déployé
2. Section **"Environment Variables"**
3. Ajoutez :
   ```
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY = 6Lxxx... (votre Site Key)
   RECAPTCHA_SECRET_KEY = 6Lxxx... (votre Secret Key)
   ```
4. Redéployez le site

---

## 🧪 Test

### Vérifier que ça fonctionne

1. Allez sur la page Contact : `https://manevok.com/contact`
2. Ouvrez les **DevTools** (F12) → Console
3. Vous devriez voir : `Uncaught error in recaptcha` = OK (script chargé)
4. Remplissez le formulaire et envoyez
5. Si ça passe : ✅ Vous êtes considéré comme humain
6. Si ça bloque : ❌ Score trop faible (vérifiez les logs)

### Vérifier les logs Google

1. Retournez sur [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Cliquez sur votre site
3. Section **"Analytics"** : Vous verrez les statistiques (requêtes, score moyen, etc.)

---

## 🎚️ Ajuster le seuil de détection

Par défaut, le score minimum est **0.5** (50%) :
- **Score ≥ 0.5** = Accepté (humain probable)
- **Score < 0.5** = Rejeté (bot/spam probable)

Pour modifier le seuil, éditez `app/api/contact/route.ts` :

```typescript
// Ligne ~30
return data.success && data.score >= 0.5  // Changez 0.5 par 0.3 (plus permissif) ou 0.7 (plus strict)
```

**Recommandations** :
- `0.3` : Très permissif (laisse passer certains bots)
- `0.5` : **Équilibré (recommandé)**
- `0.7` : Strict (peut bloquer quelques vrais utilisateurs)

---

## 🔍 Débogage

### Le formulaire ne s'envoie pas

**Erreur : "reCAPTCHA non chargé"**
- Les clés ne sont pas configurées
- Vérifiez que `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` est bien définie
- Redémarrez le serveur : `npm run dev`

**Erreur : "Échec de la vérification anti-spam"**
- Le score reCAPTCHA est trop bas (< 0.5)
- Possible si vous testez trop rapidement (comportement de bot)
- Attendez quelques secondes et réessayez
- Vérifiez les logs côté serveur pour voir le score

**Badge reCAPTCHA visible dans le coin**
- C'est normal ! reCAPTCHA v3 affiche un petit badge en bas à droite
- Vous pouvez le masquer avec du CSS (mais c'est requis par Google de garder la mention)

### Consulter les logs

#### Côté client (navigateur)
- Ouvrez les DevTools (F12) → Console
- Cherchez les erreurs contenant "recaptcha"

#### Côté serveur
- Regardez les logs de Vercel/Netlify
- Ou en local : regardez le terminal où tourne `npm run dev`

---

## 🎨 Personnaliser le badge reCAPTCHA

Le badge "protected by reCAPTCHA" apparaît en bas à droite.

### Option 1 : Le déplacer

Ajoutez dans `app/globals.css` :
```css
.grecaptcha-badge {
  bottom: 80px !important; /* Pour éviter qu'il cache le Footer */
}
```

### Option 2 : Le masquer (Google autorise si vous mentionnez reCAPTCHA)

Ajoutez dans `app/globals.css` :
```css
.grecaptcha-badge {
  visibility: hidden;
}
```

**Mais vous DEVEZ alors** ajouter ce texte dans le formulaire :
```
Ce site est protégé par reCAPTCHA et les règles de confidentialité 
et conditions d'utilisation de Google s'appliquent.
```

---

## 📊 Statistiques et monitoring

### Dashboard Google

Sur [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin) :
- **Requests** : Nombre de vérifications
- **Average score** : Score moyen des utilisateurs
- **Challenge rate** : % de challenges affichés (devrait être 0% pour v3)

### Logs personnalisés

Dans `app/api/contact/route.ts`, vous pouvez logger les scores :
```typescript
console.log('Score reCAPTCHA:', data.score, 'pour', email)
```

---

## ⚠️ Limites et quotas

**Gratuit** :
- 1 million de requêtes/mois
- Largement suffisant pour un site de contact

**Si dépassement** :
- Google continue de fonctionner
- Vous serez contacté pour passer à un plan payant si nécessaire

---

## 🔒 Sécurité

### ✅ À FAIRE :
- Garder `RECAPTCHA_SECRET_KEY` secrète (jamais dans le code)
- Utiliser `.env.local` en développement
- Vérifier le token côté serveur (déjà fait)
- Utiliser HTTPS en production

### ❌ À NE PAS FAIRE :
- Exposer la Secret Key dans le code
- La commiter sur GitHub
- La partager publiquement
- Désactiver la vérification côté serveur

---

## 🆘 Support

### Problème avec reCAPTCHA ?

1. **Documentation officielle** : [Google reCAPTCHA v3 Docs](https://developers.google.com/recaptcha/docs/v3)
2. **FAQ Google** : [reCAPTCHA FAQ](https://developers.google.com/recaptcha/docs/faq)
3. **Support** : Contact Firmin THIERY - thry.firmin@gmail.com

---

## 📄 Fichiers concernés

- `components/ReCaptchaProvider.tsx` - Provider global
- `app/layout.tsx` - Intégration du provider
- `app/contact/page.tsx` - Formulaire avec reCAPTCHA
- `app/api/contact/route.ts` - Vérification côté serveur
- `.env.local` - Configuration locale (clés)

---

## 💡 Alternatives

Si reCAPTCHA ne convient pas, alternatives possibles :
- **hCaptcha** : Alternative privacy-friendly
- **Cloudflare Turnstile** : Gratuit et invisible
- **Honeypot** : Solution simple mais moins efficace

---

**Configuration effectuée par Firmin THIERY - thry.firmin@gmail.com**
