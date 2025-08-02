# 📧 Guide de Configuration EmailJS

Ce guide détaille la configuration complète d'EmailJS pour le formulaire de contact de votre portfolio.

## 🎯 Objectif

EmailJS permet d'envoyer des emails directement depuis le client (frontend) sans avoir besoin d'un serveur backend. C'est parfait pour un portfolio statique hébergé sur Vercel/Netlify.

---

## 📋 Étapes de configuration

### **1. Création du compte EmailJS**

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" (ou "Get Started")
3. Créez votre compte (gratuit jusqu'à 200 emails/mois)
4. Confirmez votre email

### **2. Configuration du service email**

#### **Option A : Gmail (Recommandée)**

1. Dans le dashboard EmailJS, cliquez sur "Email Services"
2. Cliquez sur "Add New Service"
3. Sélectionnez "Gmail"
4. Connectez votre compte Gmail
5. Autorisez les permissions
6. Notez le **Service ID** généré (ex: `service_abc123`)

#### **Option B : Outlook/Hotmail**

1. Sélectionnez "Outlook" dans les services
2. Saisissez vos identifiants Outlook
3. Configurez les paramètres SMTP
4. Testez la connexion

#### **Option C : Service SMTP personnalisé**

```javascript
// Configuration SMTP personnalisée
{
  "service_id": "votre_service_smtp",
  "template_params": {
    "smtp_server": "smtp.votre-domaine.com",
    "smtp_port": "587",
    "smtp_username": "votre-email@domaine.com",
    "smtp_password": "votre-mot-de-passe"
  }
}
```

### **3. Création du template d'email**

#### **Template principal (emails reçus)**

1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Configurez comme suit :

**Template Name :** `portfolio_contact`

**Subject :**
```
Nouveau message de {{from_name}} - {{subject}}
```

**Content :**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0B162C; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .footer { background: #1C2942; color: white; padding: 15px; border-radius: 0 0 8px 8px; }
        .info-row { margin: 10px 0; padding: 10px; background: white; border-left: 4px solid #5FC2BA; }
        .message-box { background: white; padding: 15px; border-radius: 5px; margin: 15px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>📧 Nouveau message depuis votre portfolio</h2>
            <p>Reçu le {{timestamp}}</p>
        </div>
        
        <div class="content">
            <div class="info-row">
                <strong>👤 Nom :</strong> {{from_name}}
            </div>
            <div class="info-row">
                <strong>📧 Email :</strong> <a href="mailto:{{from_email}}">{{from_email}}</a>
            </div>
            <div class="info-row">
                <strong>📝 Sujet :</strong> {{subject}}
            </div>
            
            <div class="message-box">
                <h3>💬 Message :</h3>
                <p>{{message}}</p>
            </div>
        </div>
        
        <div class="footer">
            <p>✅ Vous pouvez répondre directement à {{from_email}}</p>
            <p>🌐 Envoyé depuis : {{page_url}}</p>
        </div>
    </div>
</body>
</html>
```

4. Notez le **Template ID** généré (ex: `template_xyz789`)

#### **Template de réponse automatique (optionnel)**

**Template Name :** `portfolio_auto_reply`

**Subject :**
```
Merci pour votre message - Portfolio Kader
```

**Content :**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #5FC2BA; color: #0B162C; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .footer { background: #1C2942; color: white; padding: 15px; border-radius: 0 0 8px 8px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>🙏 Merci pour votre message !</h2>
        </div>
        
        <div class="content">
            <p>Bonjour <strong>{{from_name}}</strong>,</p>
            
            <p>Merci pour votre message concernant "<em>{{subject}}</em>".</p>
            
            <p>J'ai bien reçu votre demande et je vous répondrai dans les plus brefs délais, généralement sous 24h.</p>
            
            <p>En attendant, n'hésitez pas à consulter mes projets sur mon portfolio ou à me suivre sur mes réseaux sociaux.</p>
            
            <p>Cordialement,<br>
            <strong>Kader</strong><br>
            Développeur Junior</p>
        </div>
        
        <div class="footer">
            <p>🌐 Portfolio : https://portfolio-kader.vercel.app</p>
            <p>💼 LinkedIn : https://linkedin.com/in/kader</p>
            <p>🐙 GitHub : https://github.com/kader</p>
        </div>
    </div>
</body>
</html>
```

### **4. Configuration des variables d'environnement**

Dans votre fichier `.env` :

```bash
# ===== EMAILJS CONFIGURATION =====
VITE_EMAILJS_SERVICE_ID=service_abc123    # Service ID de l'étape 2
VITE_EMAILJS_TEMPLATE_ID=template_xyz789   # Template ID de l'étape 3
VITE_EMAILJS_USER_ID=user_def456          # User ID (voir Account → API Keys)

# ===== OPTIONNEL: TEMPLATE DE RÉPONSE AUTO =====
VITE_EMAILJS_AUTO_REPLY_TEMPLATE=template_auto_reply_123
```

### **5. Récupération de l'User ID**

1. Allez dans votre dashboard EmailJS
2. Cliquez sur "Account" → "API Keys"
3. Copiez votre "User ID" (ou "Public Key")
4. Ajoutez-le dans vos variables d'environnement

---

## 🧪 Test de la configuration

### **Test via interface EmailJS**

1. Dans le dashboard, allez dans "Test your service"
2. Sélectionnez votre service et template
3. Remplissez les paramètres de test
4. Cliquez sur "Send Test Email"
5. Vérifiez la réception dans votre boîte email

### **Test dans l'application**

```javascript
// Test rapide dans la console du navigateur
import emailjs from 'emailjs-com'

const testEmailJS = async () => {
  try {
    const result = await emailjs.send(
      'votre_service_id',
      'votre_template_id',
      {
        from_name: 'Test Portfolio',
        from_email: 'test@example.com',
        subject: 'Test de configuration',
        message: 'Ceci est un test de la configuration EmailJS.',
        to_name: 'Kader'
      },
      'votre_user_id'
    )
    console.log('✅ EmailJS configuré correctement:', result)
  } catch (error) {
    console.error('❌ Erreur EmailJS:', error)
  }
}

testEmailJS()
```

---

## 🔒 Sécurité et bonnes pratiques

### **1. Limitations du plan gratuit**

- ✅ **200 emails/mois** gratuits
- ✅ **2 services email** maximum
- ✅ **Templates illimités**
- ❌ Pas de support premium
- ❌ Branding EmailJS dans les emails

### **2. Protection anti-spam**

#### **Honeypot (déjà implémenté)**
```html
<!-- Champ invisible pour les bots -->
<div style="display: none;">
  <input type="text" name="honeypot" tabindex="-1" autocomplete="off" />
</div>
```

#### **Validation côté client**
- Validation des champs obligatoires
- Vérification du format email
- Limitation de la longueur des messages
- Détection de mots-clés spam

#### **Rate limiting**
```javascript
// Limitation d'envoi côté client
const RATE_LIMIT = {
  maxEmails: 3,
  timeWindow: 3600000 // 1 heure en millisecondes
}

const checkRateLimit = () => {
  const sentEmails = JSON.parse(localStorage.getItem('sentEmails') || '[]')
  const now = Date.now()
  
  // Nettoyer les anciens envois
  const recentEmails = sentEmails.filter(time => now - time < RATE_LIMIT.timeWindow)
  
  if (recentEmails.length >= RATE_LIMIT.maxEmails) {
    throw new Error('Limite d\'envoi atteinte. Veuillez attendre.')
  }
  
  // Enregistrer ce nouvel envoi
  recentEmails.push(now)
  localStorage.setItem('sentEmails', JSON.stringify(recentEmails))
}
```

### **3. Gestion des erreurs**

```javascript
const handleEmailJSError = (error) => {
  console.error('EmailJS Error:', error)
  
  // Messages d'erreur utilisateur-friendly
  switch (error.status) {
    case 400:
      return 'Données invalides. Vérifiez le formulaire.'
    case 401:
      return 'Problème d\'authentification.'
    case 402:
      return 'Limite d\'envoi atteinte.'
    case 403:
      return 'Service temporairement indisponible.'
    case 404:
      return 'Configuration manquante.'
    case 429:
      return 'Trop de tentatives. Attendez quelques minutes.'
    default:
      return 'Erreur inattendue. Contactez-moi directement.'
  }
}
```

---

## 🚀 Déploiement

### **Variables d'environnement par plateforme**

#### **Vercel**
1. Dashboard Vercel → Project Settings → Environment Variables
2. Ajoutez chaque variable :
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_USER_ID`

#### **Netlify**
1. Site Settings → Environment variables
2. Ajoutez les mêmes variables

#### **GitHub Pages**
1. Repository Settings → Secrets → Actions
2. Ajoutez comme secrets pour GitHub Actions

### **Test en production**

```bash
# 1. Build local avec les vraies variables
yarn build

# 2. Test du build
yarn preview

# 3. Test du formulaire sur le site local
# http://localhost:4173

# 4. Déploiement
vercel --prod
# ou
netlify deploy --prod
```

---

## 📊 Monitoring et analytics

### **Suivi des emails envoyés**

```javascript
// Ajouter dans le succès d'envoi
const trackEmailSent = (formData) => {
  // Google Analytics event
  if (typeof gtag !== 'undefined') {
    gtag('event', 'contact_form_submit', {
      event_category: 'engagement',
      event_label: formData.subject
    })
  }
  
  // Stockage local pour statistiques
  const stats = JSON.parse(localStorage.getItem('contactStats') || '{}')
  stats.totalSent = (stats.totalSent || 0) + 1
  stats.lastSent = new Date().toISOString()
  localStorage.setItem('contactStats', JSON.stringify(stats))
}
```

### **Dashboard EmailJS**

- 📊 Statistiques d'envoi mensuel
- 📈 Taux de succès/échec
- 🔍 Logs détaillés des envois
- 📧 Templates les plus utilisés

---

## 🆘 Troubleshooting

### **Problèmes courants**

#### **1. "User ID not found"**
```bash
# Vérifiez dans Account → API Keys
# Utilisez la "Public Key", pas la "Private Key"
VITE_EMAILJS_USER_ID=user_abc123  # Format correct
```

#### **2. "Service not found"**
```bash
# Vérifiez le Service ID dans Email Services
# Format : service_abc123
VITE_EMAILJS_SERVICE_ID=service_abc123
```

#### **3. "Template not found"**
```bash
# Vérifiez le Template ID dans Email Templates
# Assurez-vous que le template est "Published"
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
```

#### **4. Emails non reçus**
- ✅ Vérifiez vos spams/courriers indésirables
- ✅ Vérifiez la configuration SMTP du service
- ✅ Testez avec un autre service email
- ✅ Vérifiez les quotas EmailJS

#### **5. CORS Errors**
```javascript
// EmailJS gère automatiquement CORS
// Si problème, vérifiez les domaines autorisés dans EmailJS dashboard
```

---

## 💡 Conseils avancés

### **1. Templates multiples**

```javascript
// Différents templates selon le type de message
const getTemplateId = (subject) => {
  if (subject.toLowerCase().includes('collaboration')) {
    return import.meta.env.VITE_EMAILJS_TEMPLATE_COLLABORATION
  }
  if (subject.toLowerCase().includes('freelance')) {
    return import.meta.env.VITE_EMAILJS_TEMPLATE_FREELANCE
  }
  return import.meta.env.VITE_EMAILJS_TEMPLATE_ID // Default
}
```

### **2. Personnalisation par langue**

```javascript
// Templates français/anglais
const templateId = navigator.language.startsWith('fr') 
  ? import.meta.env.VITE_EMAILJS_TEMPLATE_FR
  : import.meta.env.VITE_EMAILJS_TEMPLATE_EN
```

### **3. Backup avec Formspree**

```javascript
// Fallback si EmailJS échoue
const sendViaFormspree = async (formData) => {
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  return response.ok
}
```

---

**✅ Votre configuration EmailJS est maintenant complète !**

*N'oubliez pas de tester en local avant de déployer en production.*