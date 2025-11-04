# 📧 Configuration des emails de contact

## 🎯 Fonctionnement

Quand quelqu'un remplit le formulaire de contact sur le site, **2 emails sont automatiquement envoyés** :

1. **Email de notification** → `olivier.kunstmann@outlook.fr` (avec tous les détails du message)
2. **Email de confirmation** → À la personne qui a rempli le formulaire (pour la rassurer)

---

## ⚙️ Configuration Resend

Le système utilise **Resend** pour envoyer les emails depuis `contact@manevok.com`.

### Étapes de configuration :

1. **Créer un compte Resend** : [https://resend.com/signup](https://resend.com/signup)

2. **Ajouter votre domaine** :
   - Allez dans "Domains" → "Add Domain"
   - Ajoutez `manevok.com`
   - Copiez les enregistrements DNS fournis par Resend

3. **Configurer les DNS** :
   Ajoutez ces enregistrements DNS chez votre hébergeur :
   ```
   Type: TXT
   Name: _resend (ou selon les instructions Resend)
   Value: [fourni par Resend]
   
   Type: MX
   Priority: 10
   Value: feedback-smtp.resend.com
   ```

4. **Vérifier le domaine** :
   - Attendez 5-10 minutes
   - Cliquez sur "Verify" dans Resend
   - Le statut doit passer à "Verified" ✅

5. **Obtenir la clé API** :
   - Allez dans "API Keys"
   - Cliquez sur "Create API Key"
   - Donnez un nom (ex: "Site MANévok Production")
   - Copiez la clé (commence par `re_...`)

6. **Configurer sur Vercel/Netlify** :
   - Allez dans les paramètres de votre site déployé
   - Ajoutez une variable d'environnement :
     ```
     Nom: RESEND_API_KEY
     Valeur: re_votre_cle_api_ici
     ```
   - Redéployez le site

---

## 📬 Emails configurés

### Email reçu par le client (Olivier)
- **De** : MANévok <contact@manevok.com>
- **À** : olivier.kunstmann@outlook.fr
- **Sujet** : "Nouveau message de [Nom de la personne]"
- **Contenu** : Tous les détails du formulaire (nom, email, téléphone, sujet, message)

### Email reçu par l'utilisateur
- **De** : MANévok <contact@manevok.com>
- **À** : [Email de l'utilisateur]
- **Sujet** : "Message bien reçu - MANévok"
- **Contenu** : Confirmation avec récapitulatif et informations de contact

---

## 🧪 Test en local

Pour tester en développement :

1. Copiez `.env.example` vers `.env.local`
2. Ajoutez votre clé API Resend dans `.env.local`
3. Lancez le serveur : `npm run dev`
4. Allez sur `http://localhost:3000/contact`
5. Remplissez le formulaire

**Note** : En développement, vous pouvez utiliser une clé API de test Resend.

---

## ✅ Vérification

Pour vérifier que tout fonctionne :

1. Allez sur la page Contact du site
2. Remplissez le formulaire
3. Cliquez sur "Envoyer"
4. Vérifiez :
   - ✅ Message de succès affiché
   - ✅ Email reçu sur olivier.kunstmann@outlook.fr
   - ✅ Email de confirmation reçu par l'utilisateur

---

## 🚨 En cas de problème

### L'email n'arrive pas

**Vérifiez dans l'ordre** :

1. **Domaine vérifié ?** → Allez sur Resend, vérifiez que le domaine est "Verified"
2. **Clé API correcte ?** → Vérifiez dans les variables d'environnement
3. **Logs Resend** → Consultez les logs sur [resend.com/logs](https://resend.com/logs) pour voir les erreurs
4. **Spam** → Vérifiez le dossier spam/courrier indésirable

### Erreur "Unauthorized" ou "Invalid API Key"

- La clé API n'est pas configurée ou est incorrecte
- Vérifiez que `RESEND_API_KEY` est bien définie dans les variables d'environnement
- Redéployez le site après avoir ajouté la variable

### Erreur "Domain not verified"

- Le domaine `manevok.com` n'est pas encore vérifié sur Resend
- Complétez les étapes de configuration DNS ci-dessus

---

## 📞 Modifier les emails

### Changer l'email du client

Modifiez dans `app/api/contact/route.ts` :
```typescript
to: 'nouvel.email@exemple.com', // Ligne 16
```

### Changer l'expéditeur

Vous devez d'abord vérifier le nouveau domaine sur Resend, puis modifiez :
```typescript
from: 'MANévok <nouveau@domaine.com>',
```

### Personnaliser les templates

Les templates HTML sont dans `app/api/contact/route.ts` :
- Ligne 20-100 : Email de notification (client)
- Ligne 105-180 : Email de confirmation (utilisateur)

---

## 💡 Astuces

- **Test** : Resend offre 100 emails/jour gratuits (largement suffisant pour débuter)
- **Monitoring** : Consultez régulièrement les logs Resend pour voir les emails envoyés
- **Spam** : Les emails avec domaine vérifié arrivent rarement en spam
- **Backup** : Si Resend ne marche pas, les données du formulaire sont quand même dans les logs serveur

---

## 📄 Fichiers concernés

- `app/api/contact/route.ts` - API qui envoie les emails
- `app/contact/page.tsx` - Formulaire de contact
- `.env.local` - Configuration locale (non commité)
- `.env.example` - Template de configuration

---

**Besoin d'aide ?** Contactez Firmin THIERY - thry.firmin@gmail.com
