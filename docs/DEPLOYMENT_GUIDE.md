# 🚀 Guide de Déploiement Complet

Ce guide détaille toutes les méthodes pour déployer votre portfolio en production avec les meilleures pratiques.

## 🎯 Plateformes de déploiement

### **Recommandations par cas d'usage :**

| Plateforme | Idéal pour | Difficulté | Coût |
|------------|------------|------------|------|
| **Vercel** | Projets React/Next.js | ⭐⭐ | Gratuit |
| **Netlify** | Sites statiques | ⭐⭐ | Gratuit |
| **GitHub Pages** | Projets open source | ⭐⭐⭐ | Gratuit |
| **Firebase Hosting** | Intégration Google | ⭐⭐⭐ | Gratuit |
| **AWS S3 + CloudFront** | Performance maximale | ⭐⭐⭐⭐ | Payant |

---

## 🏆 Vercel (Recommandé)

### **Pourquoi Vercel ?**
- ✅ Optimisé pour React/Vite
- ✅ Déploiement automatique via Git
- ✅ CDN global intégré
- ✅ HTTPS automatique
- ✅ Domaine personnalisé gratuit
- ✅ Analytics intégrées

### **Méthode 1 : Interface Web (Recommandée)**

#### **Étape 1 : Préparation**
```bash
# Vérifier que le projet build correctement
yarn build
yarn preview  # Tester localement

# Commit et push sur GitHub
git add .
git commit -m "Portfolio prêt pour déploiement"
git push origin main
```

#### **Étape 2 : Création du compte Vercel**
1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur "Sign up"
3. Connectez-vous avec GitHub
4. Autorisez Vercel à accéder à vos repositories

#### **Étape 3 : Import du projet**
1. Cliquez sur "New Project"
2. Sélectionnez votre repository portfolio
3. Vercel détecte automatiquement Vite
4. Configuration par défaut :
   ```
   Framework Preset: Vite
   Build Command: yarn build
   Output Directory: dist
   ```

#### **Étape 4 : Variables d'environnement**
```bash
# Dans l'interface Vercel, section Environment Variables
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id  
VITE_EMAILJS_USER_ID=your_user_id
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_key
```

#### **Étape 5 : Déploiement**
1. Cliquez sur "Deploy"
2. Attendez 2-3 minutes
3. ✅ Votre portfolio est en ligne !

### **Méthode 2 : CLI Vercel**

```bash
# Installation de la CLI
npm i -g vercel

# Connexion à votre compte
vercel login

# Déploiement initial
vercel

# Questions interactives :
# ? Set up and deploy "~/portfolio"? [Y/n] y
# ? Which scope? [Your Account]
# ? Link to existing project? [y/N] n
# ? What's your project's name? portfolio
# ? In which directory is your code located? ./
# ? Want to override the settings? [y/N] n

# Déploiements ultérieurs
vercel --prod
```

### **Configuration avancée Vercel**

#### **vercel.json (optionnel)**
```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options", 
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## 🌐 Netlify

### **Avantages de Netlify :**
- ✅ Interface intuitive
- ✅ Formulaires intégrés (pour le contact)
- ✅ Redirections faciles
- ✅ Split testing A/B
- ✅ Fonctions serverless

### **Méthode 1 : Drag & Drop**

```bash
# Build du projet
yarn build

# Upload du dossier dist/
# 1. Allez sur netlify.com
# 2. Glissez-déposez le dossier dist/
# 3. ✅ Site déployé instantanément !
```

### **Méthode 2 : Git Integration**

#### **Configuration netlify.toml**
```toml
# netlify.toml à la racine du projet
[build]
  command = "yarn build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

# Redirections pour SPA
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Headers de sécurité
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data: https:;"
```

#### **Déploiement via Git**
1. Commit le fichier netlify.toml
2. Push sur GitHub
3. Sur Netlify : "New site from Git"
4. Connectez votre repository
5. Déploiement automatique

### **Variables d'environnement Netlify**
```bash
# Dans Site Settings > Environment variables
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id  
VITE_EMAILJS_USER_ID=your_user_id
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_key
```

---

## 📄 GitHub Pages

### **Configuration pour GitHub Pages**

#### **Méthode 1 : GitHub Actions (Recommandée)**

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'yarn'
        
    - name: Install dependencies
      run: yarn install --frozen-lockfile
      
    - name: Build
      run: yarn build
      env:
        VITE_EMAILJS_SERVICE_ID: ${{ secrets.VITE_EMAILJS_SERVICE_ID }}
        VITE_EMAILJS_TEMPLATE_ID: ${{ secrets.VITE_EMAILJS_TEMPLATE_ID }}
        VITE_EMAILJS_USER_ID: ${{ secrets.VITE_EMAILJS_USER_ID }}
        VITE_RECAPTCHA_SITE_KEY: ${{ secrets.VITE_RECAPTCHA_SITE_KEY }}
        
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

#### **Configuration vite.config.js**
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Nom de votre repository
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})
```

#### **Secrets GitHub**
1. Repository Settings > Secrets and variables > Actions
2. Ajoutez vos variables d'environnement comme secrets

---

## 🔥 Firebase Hosting

### **Configuration Firebase**

```bash
# Installation Firebase CLI
npm install -g firebase-tools

# Connexion à Firebase
firebase login

# Initialisation dans le projet
firebase init hosting

# Configuration :
# ? What do you want to use as your public directory? dist
# ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
# ? Set up automatic builds and deploys with GitHub? Yes
```

#### **firebase.json**
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ]
  }
}
```

#### **Déploiement**
```bash
# Build et déploiement
yarn build
firebase deploy

# Déploiement automatique via GitHub Actions
# (Firebase init vous guide dans la configuration)
```

---

## 🌟 Configuration de domaine personnalisé

### **Acheter un domaine**
- **Namecheap** : ~10€/an
- **OVH** : ~8€/an
- **Gandi** : ~12€/an
- **Google Domains** : ~12€/an

### **Configuration DNS pour Vercel**

#### **Option 1 : Sous-domaine**
```
# DNS Records
Type: CNAME
Name: portfolio
Value: cname.vercel-dns.com
```

#### **Option 2 : Domaine racine**
```
# DNS Records
Type: A
Name: @
Value: 76.76.19.61

Type: A  
Name: @
Value: 76.76.21.61
```

### **Configuration DNS pour Netlify**

```
# DNS Records
Type: CNAME
Name: www
Value: your-site-name.netlify.app

Type: A
Name: @
Value: 75.2.60.5
```

---

## 🔒 HTTPS et Sécurité

### **Configuration automatique**
- ✅ **Vercel/Netlify** : HTTPS activé automatiquement
- ✅ **GitHub Pages** : HTTPS disponible dans les paramètres
- ✅ **Firebase** : HTTPS par défaut

### **Headers de sécurité recommandés**

```javascript
// Pour tous les déploiements
const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.emailjs.com;"
}
```

---

## 📊 Analytics et Monitoring

### **Google Analytics 4**

```javascript
// src/utils/analytics.js
export const initGA = () => {
  if (typeof window !== 'undefined' && import.meta.env.VITE_GA_TRACKING_ID) {
    // Script Google Analytics
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_TRACKING_ID}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date())
    gtag('config', import.meta.env.VITE_GA_TRACKING_ID)
  }
}

// Dans App.jsx
import { useEffect } from 'react'
import { initGA } from './utils/analytics'

function App() {
  useEffect(() => {
    initGA()
  }, [])
  
  // ... reste du composant
}
```

### **Vercel Analytics**
```bash
# Installation
yarn add @vercel/analytics

# Dans App.jsx
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      {/* Votre app */}
      <Analytics />
    </>
  )
}
```

---

## 🚀 Optimisations de performance

### **Build optimisé**

```javascript
// vite.config.js - Configuration optimisée
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          framer: ['framer-motion']
        }
      }
    }
  }
})
```

### **Images optimisées**

```javascript
// Plugin pour optimiser les images
yarn add --dev vite-plugin-imagemin

// vite.config.js
import { defineConfig } from 'vite'
import { viteImagemin } from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.65, 0.8] },
      svgo: {
        plugins: [
          { name: 'removeViewBox' },
          { name: 'removeEmptyAttrs', active: false }
        ]
      }
    })
  ]
})
```

---

## 📋 Checklist pré-déploiement

### **Tests fonctionnels**
- [ ] ✅ Build réussit sans erreurs (`yarn build`)
- [ ] ✅ Preview fonctionne localement (`yarn preview`)
- [ ] ✅ Toutes les sections s'affichent correctement
- [ ] ✅ Navigation smooth scroll fonctionne
- [ ] ✅ Switch de thème fonctionne
- [ ] ✅ Liens externes fonctionnent (GitHub, LinkedIn)
- [ ] ✅ Images se chargent correctement
- [ ] ✅ Site responsive sur mobile/tablet

### **SEO et métadonnées**
- [ ] ✅ Title et meta description personnalisés
- [ ] ✅ Favicon configuré
- [ ] ✅ Open Graph tags
- [ ] ✅ Sitemap.xml généré
- [ ] ✅ Robots.txt configuré

### **Performance**
- [ ] ✅ Lighthouse score > 90
- [ ] ✅ Temps de chargement < 3 secondes
- [ ] ✅ Images optimisées
- [ ] ✅ CSS/JS minifiés

### **Sécurité**
- [ ] ✅ HTTPS activé
- [ ] ✅ Headers de sécurité configurés
- [ ] ✅ Pas de clés API exposées
- [ ] ✅ Variables d'environnement sécurisées

---

## 🔄 Déploiement continu

### **Workflow automatique**

```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'yarn'
    - run: yarn install
    - run: yarn lint
    - run: yarn build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'yarn'
    - run: yarn install
    - run: yarn build
    - name: Deploy to Vercel
      run: vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

---

## 🆘 Troubleshooting déploiement

### **Erreurs courantes**

#### **1. Build fails: "Module not found"**
```bash
# Vérifier les imports relatifs vs absolus
# ❌ Incorrect
import Component from '../Component'

# ✅ Correct
import Component from '../components/Component.jsx'
```

#### **2. Variables d'environnement non définies**
```bash
# ⚠️ Variables Vite doivent commencer par VITE_
# ❌ Incorrect
EMAILJS_SERVICE_ID=xxx

# ✅ Correct
VITE_EMAILJS_SERVICE_ID=xxx
```

#### **3. Routes 404 en production**
```javascript
// Vérifier la configuration SPA
// netlify.toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

// vercel.json
{
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

#### **4. CSS ne s'applique pas**
```bash
# Vérifier que Tailwind est bien inclus
# src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

**🎉 Félicitations ! Votre portfolio est maintenant déployé et accessible au monde entier !**

*N'oubliez pas de tester régulièrement votre site et de monitorer ses performances.*