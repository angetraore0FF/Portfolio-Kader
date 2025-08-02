# 🌟 Portfolio Personnel Moderne - Kader

Un portfolio personnel moderne et responsive développé avec React, Tailwind CSS et Framer Motion. Conçu pour les développeurs juniors souhaitant présenter leurs compétences et projets de manière professionnelle.

![Portfolio Screenshot](https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## 🚀 Démonstration en ligne

- **Demo Live :** [https://portfolio-kader.vercel.app](https://portfolio-kader.vercel.app) *(à configurer)*
- **Code Source :** [https://github.com/kader/portfolio](https://github.com/kader/portfolio) *(à configurer)*

---

## 📋 Table des matières

1. [Caractéristiques](#-caractéristiques)
2. [Technologies utilisées](#-technologies-utilisées)
3. [Installation locale](#-installation-locale)
4. [Structure du projet](#-structure-du-projet)
5. [Configuration](#-configuration)
6. [Personnalisation](#-personnalisation)
7. [Gestion du contenu](#-gestion-du-contenu)
8. [Déploiement](#-déploiement)
9. [Maintenance](#-maintenance)
10. [Troubleshooting](#-troubleshooting)
11. [Scripts disponibles](#-scripts-disponibles)
12. [Contribution](#-contribution)

---

## ✨ Caractéristiques

### 🎨 **Design et UX**
- ✅ Design moderne et professionnel
- ✅ Mode sombre par défaut avec switch vers mode clair
- ✅ Animations fluides avec Framer Motion
- ✅ Interface 100% responsive (mobile-first)
- ✅ Palette de couleurs personnalisée et cohérente
- ✅ Navigation smooth scroll entre sections

### 🛠️ **Fonctionnalités**
- ✅ Section Hero avec call-to-action
- ✅ Section À propos détaillée avec statistiques
- ✅ Compétences avec barres de progression animées
- ✅ Portfolio de projets avec filtres par catégorie
- ✅ Formulaire de contact avec validation (prêt pour Phase 3)
- ✅ Liens vers réseaux sociaux
- ✅ Bouton retour en haut de page

### 🔧 **Techniques**
- ✅ Architecture modulaire et maintenable
- ✅ Données externalisées dans des fichiers dédiés
- ✅ Optimisé pour le SEO
- ✅ Variables d'environnement sécurisées
- ✅ Code TypeScript-ready
- ✅ Build optimisé pour la production

---

## 🛠️ Technologies utilisées

### **Frontend Core**
| Technologie | Version | Description |
|-------------|---------|-------------|
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) | ^18.2.0 | Bibliothèque JavaScript pour l'interface utilisateur |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) | ^4.5.0 | Build tool moderne et rapide |

### **Styling & UI**
| Technologie | Version | Description |
|-------------|---------|-------------|
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white) | ^3.3.5 | Framework CSS utility-first |
| ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=flat&logo=framer&logoColor=white) | ^10.16.4 | Bibliothèque d'animations React |

### **Icons & Assets**
| Technologie | Version | Description |
|-------------|---------|-------------|
| ![Lucide React](https://img.shields.io/badge/Lucide-F56565?style=flat&logo=lucide&logoColor=white) | ^0.294.0 | Pack d'icônes modernes pour React |

### **Intégrations (Phase 3)**
| Service | Version | Description |
|---------|---------|-------------|
| EmailJS | ^3.2.0 | Service d'envoi d'emails côté client |
| reCAPTCHA | v2/v3 | Protection anti-spam Google |

---

## 🚀 Installation locale

### **Prérequis**

Assurez-vous d'avoir installé sur votre machine :

```bash
# Node.js (version 16 ou supérieure)
node --version  # Doit afficher v16.x.x ou plus récent

# Yarn (gestionnaire de paquets)
yarn --version  # Doit afficher 1.22.x ou plus récent

# Git (pour le versioning)
git --version   # Doit afficher une version récente
```

### **Installation pas à pas**

#### **1. Cloner le repository**
```bash
# Option 1: HTTPS
git clone https://github.com/kader/portfolio.git
cd portfolio

# Option 2: SSH (si configuré)
git clone git@github.com:kader/portfolio.git
cd portfolio
```

#### **2. Installer les dépendances**
```bash
# Installation avec Yarn (recommandé)
yarn install

# OU avec npm (alternative)
npm install
```

⏱️ *Temps d'installation : 2-3 minutes selon votre connexion*

#### **3. Configuration de l'environnement**
```bash
# Copier le fichier d'environnement d'exemple
cp .env.example .env

# Éditer le fichier .env avec vos valeurs
nano .env  # ou code .env avec VSCode
```

#### **4. Lancer le serveur de développement**
```bash
# Démarrer en mode développement
yarn dev

# OU avec npm
npm run dev
```

🎉 **Votre portfolio sera accessible sur :** http://localhost:3000

### **Vérification de l'installation**

Après le lancement, vous devriez voir :
- ✅ Le serveur Vite démarré sans erreurs
- ✅ La page d'accueil s'affiche correctement
- ✅ Les animations fonctionnent
- ✅ La navigation entre sections fonctionne
- ✅ Le switch de thème fonctionne

---

## 📁 Structure du projet

```
portfolio/
├── 📁 public/                    # Fichiers statiques
│   ├── favicon.svg              # Icône du site (personnalisable)
│   └── index.html               # Template HTML principal
├── 📁 src/                      # Code source principal
│   ├── 📁 components/           # Composants React réutilisables
│   │   ├── About.jsx           # Section À propos
│   │   ├── Contact.jsx         # Section Contact + formulaire
│   │   ├── Footer.jsx          # Pied de page avec liens
│   │   ├── Hero.jsx            # Section d'accueil héroïque
│   │   ├── Navbar.jsx          # Barre de navigation
│   │   ├── Projects.jsx        # Section Portfolio/Projets
│   │   └── Skills.jsx          # Section Compétences
│   ├── 📁 data/                 # Données externalisées (à personnaliser)
│   │   ├── projects.js         # Liste des projets
│   │   ├── skills.js           # Compétences techniques
│   │   └── socials.js          # Liens réseaux sociaux
│   ├── 📁 hooks/                # Hooks React personnalisés
│   │   └── useTheme.jsx        # Gestion du thème sombre/clair
│   ├── 📁 utils/                # Utilitaires et helpers
│   ├── App.jsx                  # Composant principal
│   ├── index.css               # Styles globaux + Tailwind
│   └── main.jsx                # Point d'entrée React
├── 📁 docs/                     # Documentation additionnelle
├── .env                         # Variables d'environnement (à créer)
├── .env.example                 # Template des variables d'env
├── .gitignore                   # Fichiers ignorés par Git
├── package.json                 # Dépendances et scripts
├── postcss.config.js           # Configuration PostCSS
├── tailwind.config.js          # Configuration Tailwind CSS
├── vite.config.js              # Configuration Vite
└── README.md                   # Ce fichier de documentation
```

### **Description détaillée des dossiers**

#### **📁 `/src/components/`**
Contient tous les composants React du portfolio :

| Fichier | Description | Responsabilités |
|---------|-------------|-----------------|
| `Navbar.jsx` | Navigation principale | Menu, thème switcher, scroll navigation |
| `Hero.jsx` | Section d'accueil | Présentation, CTA, liens sociaux |
| `About.jsx` | Section à propos | Bio, stats, formation, objectifs |
| `Skills.jsx` | Compétences | Technologies, barres de progression, soft skills |
| `Projects.jsx` | Portfolio | Grille de projets, filtres, détails |
| `Contact.jsx` | Formulaire contact | Form validation, anti-spam, EmailJS |
| `Footer.jsx` | Pied de page | Copyright, liens, retour en haut |

#### **📁 `/src/data/`**
Fichiers de données à personnaliser selon vos informations :

| Fichier | Contenu | Comment modifier |
|---------|---------|------------------|
| `projects.js` | Liste des projets | Ajouter/modifier vos projets |
| `skills.js` | Compétences techniques | Mettre à jour vos compétences |
| `socials.js` | Liens réseaux sociaux | Remplacer par vos liens |

#### **📁 `/src/hooks/`**
Hooks React personnalisés :

| Fichier | Utilité |
|---------|---------|
| `useTheme.jsx` | Gestion thème sombre/clair avec persistance localStorage |

---

## ⚙️ Configuration

### **Variables d'environnement**

Créez un fichier `.env` à la racine du projet :

```bash
# ===== CONFIGURATION GÉNÉRALE =====
VITE_APP_NAME=Portfolio Kader
VITE_APP_VERSION=1.0.0

# ===== EMAILJS (Phase 3) =====
# Obtenez ces clés sur https://www.emailjs.com/
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here  
VITE_EMAILJS_USER_ID=your_user_id_here

# ===== RECAPTCHA (Phase 3) =====
# Obtenez cette clé sur https://www.google.com/recaptcha/
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here

# ===== ANALYTICS (Optionnel) =====
VITE_GA_TRACKING_ID=your_google_analytics_id
```

### **Configuration Tailwind CSS**

Le fichier `tailwind.config.js` contient la configuration personnalisée :

```javascript
// Palette de couleurs personnalisée
colors: {
  primary: {
    dark: '#0B162C',    // Bleu nuit - Fond principal
    medium: '#1C2942',  // Bleu foncé - Sections secondaires  
    light: '#3B556D',   // Bleu/gris - UI éléments
  },
  accent: {
    mint: '#5FC2BA',    // Vert menthe - Couleur d'accent
  },
  text: {
    light: '#FBFBFB',   // Blanc cassé - Texte clair
    dark: '#0B162C',    // Bleu nuit - Texte sombre
  }
}
```

---

## 🎨 Personnalisation

### **1. Informations personnelles**

#### **Modifier le contenu de base**
Éditez les fichiers suivants avec vos informations :

```javascript
// src/components/Hero.jsx - Ligne 15-25
<h1>Votre Nom</h1>
<h2>Votre Titre</h2>
<p>Votre description personnelle...</p>

// src/components/About.jsx - Ligne 45-65
<p>Votre biographie détaillée...</p>
```

#### **Mettre à jour les métadonnées SEO**
```html
<!-- public/index.html -->
<title>Portfolio - Votre Nom | Votre Titre</title>
<meta name="description" content="Votre description personnelle" />
<meta name="author" content="Votre Nom" />
```

### **2. Réseaux sociaux**

Éditez `src/data/socials.js` :

```javascript
export const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/votre-username',  // ← Remplacez
    icon: Github,
    color: '#333'
  },
  {
    name: 'LinkedIn', 
    url: 'https://linkedin.com/in/votre-profil', // ← Remplacez
    icon: Linkedin,
    color: '#0077B5'
  },
  // Ajoutez d'autres réseaux si nécessaire
]
```

### **3. Modifier les couleurs du thème**

Pour changer la palette de couleurs, modifiez `tailwind.config.js` :

```javascript
// Exemple : Thème violet/rose
colors: {
  primary: {
    dark: '#1a1625',     // Violet très foncé
    medium: '#2d1b3d',   // Violet foncé
    light: '#4a3b5c',    // Violet moyen
  },
  accent: {
    mint: '#ff6b9d',     // Rose accent
  },
  // ...
}
```

**⚠️ Important :** Après modification des couleurs, redémarrez le serveur :
```bash
yarn dev
```

### **4. Favicon personnalisé**

Remplacez `public/favicon.svg` par votre propre icône :

```xml
<!-- Exemple de favicon personnalisé -->
<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
  <!-- Votre design d'icône ici -->
  <rect width="32" height="32" rx="8" fill="#0B162C"/>
  <text x="16" y="22" text-anchor="middle" fill="#5FC2BA" 
        font-family="Arial" font-size="14" font-weight="bold">
    K  <!-- Remplacez par votre initiale -->
  </text>
</svg>
```

---

## 📊 Gestion du contenu

### **Ajouter un nouveau projet**

#### **1. Préparer les assets**
- Image du projet (recommandé : 800x600px, format JPG/PNG)
- URL du repository GitHub
- URL de la démo live

#### **2. Éditer le fichier des projets**
Ouvrez `src/data/projects.js` et ajoutez :

```javascript
export const projects = [
  // ... projets existants
  {
    id: 7, // Incrémentez l'ID
    title: "Nom de votre projet",
    description: "Description détaillée du projet et de ses fonctionnalités...",
    image: "URL_DE_VOTRE_IMAGE", // Unsplash ou image locale
    technologies: ["React", "Node.js", "MongoDB"], // Technologies utilisées
    features: [
      "Fonctionnalité 1",
      "Fonctionnalité 2", 
      "Fonctionnalité 3"
    ],
    github: "https://github.com/votre-username/votre-projet",
    demo: "https://votre-projet.vercel.app",
    status: "Terminé", // "Terminé", "En cours", ou "Planifié"  
    category: "Web Application" // Voir categories disponibles
  }
]
```

#### **3. Catégories disponibles**
```javascript
// Catégories existantes dans projects.js
"Web Development"
"Web Application"
"Landing Page" 
"Utility App"
"API Integration"
"Game Development"

// Pour ajouter une nouvelle catégorie :
export const projectCategories = [
  "Tous",
  // ... catégories existantes
  "Votre Nouvelle Catégorie"
]
```

### **Modifier vos compétences**

#### **Structure du fichier `src/data/skills.js`**

```javascript
export const skills = [
  {
    category: "Frontend", // Nom de la catégorie
    technologies: [
      {
        name: "React",           // Nom de la technologie
        icon: "⚛️",             // Emoji ou icône
        level: 85,              // Niveau de 0 à 100
        color: "#61DAFB"        // Couleur pour la barre de progression
      },
      // ... autres technologies
    ]
  },
  // ... autres catégories
]
```

#### **Ajouter une nouvelle compétence**

```javascript
// Dans une catégorie existante
{
  name: "Vue.js",
  icon: "💚",
  level: 70,
  color: "#4FC08D"
}

// Ou créer une nouvelle catégorie
{
  category: "Backend",
  technologies: [
    {
      name: "Node.js",
      icon: "🟢", 
      level: 65,
      color: "#339933"
    }
  ]
}
```

### **Soft Skills**

Modifiez la section `softSkills` dans `src/data/skills.js` :

```javascript
export const softSkills = [
  {
    name: "Votre Soft Skill",
    description: "Description de cette compétence transversale",
    icon: "🎯" // Emoji représentatif
  },
  // ... autres soft skills
]
```

---

## 🚀 Déploiement

### **Déploiement sur Vercel (Recommandé)**

#### **Méthode 1 : Via interface web**

1. **Préparer le projet**
   ```bash
   # Assurez-vous que tout fonctionne localement
   yarn build
   yarn preview
   ```

2. **Pousser sur GitHub**
   ```bash
   git add .
   git commit -m "Portfolio prêt pour le déploiement"
   git push origin main
   ```

3. **Déployer sur Vercel**  
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez votre compte GitHub
   - Importez votre repository portfolio
   - Configurez les variables d'environnement
   - Déployez !

#### **Méthode 2 : Via CLI Vercel**

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter à Vercel
vercel login

# Déployer
vercel

# Pour les déploiements suivants
vercel --prod
```

#### **Configuration des variables d'environnement**

Dans l'interface Vercel, ajoutez :
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`  
- `VITE_EMAILJS_USER_ID`
- `VITE_RECAPTCHA_SITE_KEY`

### **Déploiement sur Netlify**

#### **Méthode 1 : Drag & Drop**

```bash
# Build du projet
yarn build

# Le dossier dist/ sera généré
# Glissez-déposez ce dossier sur netlify.com
```

#### **Méthode 2 : Git intégration**

```bash
# Créer netlify.toml à la racine
echo '[build]
  command = "yarn build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"' > netlify.toml

# Pousser sur GitHub
git add netlify.toml
git commit -m "Configuration Netlify"
git push

# Connecter le repository sur netlify.com
```

### **Configuration du domaine personnalisé**

#### **Sur Vercel :**
1. Allez dans Project Settings → Domains
2. Ajoutez votre domaine personnalisé
3. Configurez les DNS selon les instructions

#### **Sur Netlify :**
1. Allez dans Site Settings → Domain management
2. Ajoutez votre domaine personnalisé
3. Configurez les DNS selon les instructions

---

## 🔧 Maintenance

### **Mise à jour des dépendances**

#### **Vérifier les mises à jour disponibles**
```bash
# Avec Yarn
yarn outdated

# Avec npm
npm outdated
```

#### **Mettre à jour les dépendances**
```bash
# Mises à jour mineures sécurisées
yarn upgrade

# Mises à jour majeures (attention aux breaking changes)
yarn upgrade --latest

# Mettre à jour une dépendance spécifique
yarn upgrade react
```

#### **Audit de sécurité**
```bash
# Vérifier les vulnérabilités
yarn audit

# Corriger automatiquement si possible
yarn audit fix
```

### **Monitoring des performances**

#### **Analyser le bundle**
```bash
# Installer l'analyseur de bundle
yarn add --dev @rollup/plugin-analyzer

# Générer le rapport
yarn build --analyze
```

#### **Lighthouse audit**
```bash
# Installer lighthouse
npm install -g lighthouse

# Audit de votre site déployé
lighthouse https://votre-portfolio.vercel.app --output=html
```

### **Backup et versioning**

#### **Stratégie de branches Git**
```bash
# Branche principale (production)
git checkout main

# Branche de développement
git checkout -b develop

# Feature branches
git checkout -b feature/nouvelle-fonctionnalite

# Merge vers main après tests
git checkout main
git merge develop
```

#### **Tags de version**
```bash
# Créer un tag de version
git tag -a v1.0.0 -m "Version 1.0.0 - Portfolio initial"
git push origin v1.0.0

# Lister les versions
git tag -l
```

### **Logs et monitoring**

#### **Monitoring avec Vercel Analytics**
```bash
# Ajouter dans votre composant principal
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

#### **Google Analytics (optionnel)**
```javascript
// src/utils/analytics.js
export const initGA = () => {
  if (typeof window !== 'undefined' && process.env.VITE_GA_TRACKING_ID) {
    gtag('config', process.env.VITE_GA_TRACKING_ID)
  }
}
```

---

## 🚨 Troubleshooting

### **Problèmes courants et solutions**

#### **1. Erreur de build : "Module not found"**
```bash
# Solution : Vérifier les imports
# Problème fréquent avec les chemins relatifs
# ❌ Incorrect
import Component from '../Component'

# ✅ Correct  
import Component from '../components/Component'

# Nettoyer et reinstaller
rm -rf node_modules yarn.lock
yarn install
```

#### **2. Variables d'environnement non reconnues**
```bash
# ⚠️ Variables Vite doivent commencer par VITE_
# ❌ Incorrect
EMAILJS_SERVICE_ID=xxx

# ✅ Correct
VITE_EMAILJS_SERVICE_ID=xxx

# Redémarrer le serveur après modification .env
yarn dev
```

#### **3. Images ne s'affichent pas en production**
```bash
# ⚠️ Chemins absolus dans public/
# ❌ Incorrect
<img src="/images/photo.jpg" />

# ✅ Correct - images dans public/
<img src="/photo.jpg" />

# ✅ Correct - import d'images  
import photo from '../assets/photo.jpg'
<img src={photo} />
```

#### **4. Animations Framer Motion ne fonctionnent pas**
```javascript
# ⚠️ Vérifier la structure des variants
// ❌ Incorrect
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

// ✅ Correct
const variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
}
```

#### **5. Styles Tailwind ne s'appliquent pas**
```bash
# Vérifier que les fichiers sont inclus dans tailwind.config.js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",  # Vérifier ces chemins
]

# Redémarrer le serveur
yarn dev
```

### **Logs de débogage**

#### **Activer les logs détaillés**
```bash
# Mode verbose pour Vite
DEBUG=vite:* yarn dev

# Logs de build détaillés
yarn build --mode development
```

#### **Débugger en production**
```javascript
// Ajouter dans vite.config.js pour le debug
export default defineConfig({
  // ...
  define: {
    __DEV__: process.env.NODE_ENV === 'development'
  }
})

// Utiliser dans le code
if (__DEV__) {
  console.log('Mode développement activé')
}
```

### **Support et communauté**

#### **Ressources utiles**
- 📖 [Documentation React](https://react.dev/)
- 🎨 [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- ⚡ [Documentation Vite](https://vitejs.dev/guide/)
- 🎭 [Documentation Framer Motion](https://www.framer.com/motion/)

#### **Où obtenir de l'aide**
- 💬 [Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs)
- 💡 [GitHub Issues](https://github.com/votre-username/portfolio/issues)
- 🗨️ [Discord React](https://discord.gg/reactiflux)
- 📱 [Reddit r/reactjs](https://reddit.com/r/reactjs)

---

## 📜 Scripts disponibles

| Script | Commande | Description |
|--------|----------|-------------|
| **Développement** | `yarn dev` | Lance le serveur de développement |
| **Build** | `yarn build` | Génère la version de production |
| **Prévisualisation** | `yarn preview` | Prévisualise le build de production |
| **Lint** | `yarn lint` | Vérifie la qualité du code |
| **Format** | `yarn format` | Formate le code avec Prettier |
| **Type Check** | `yarn type-check` | Vérifie les types TypeScript |
| **Test** | `yarn test` | Lance les tests unitaires |
| **Audit** | `yarn audit` | Vérifie les vulnérabilités |

### **Scripts personnalisés avancés**

Ajoutez dans `package.json` :

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "format": "prettier --write \"src/**/*.{js,jsx,json,css,md}\"",
    "clean": "rm -rf dist node_modules/.vite",
    "analyze": "vite build --analyze",
    "deploy": "yarn build && vercel --prod",
    "backup": "git add . && git commit -m 'Backup automatique' && git push"
  }
}
```

---

## 🤝 Contribution

### **Guidelines de contribution**

#### **Pour contribuer au projet :**

1. **Fork le repository**
2. **Créer une branche feature**
   ```bash
   git checkout -b feature/nouvelle-fonctionnalite
   ```
3. **Commiter vos changements**
   ```bash
   git commit -m 'Ajouter nouvelle fonctionnalité'
   ```
4. **Pousser la branche**
   ```bash
   git push origin feature/nouvelle-fonctionnalite
   ```
5. **Créer une Pull Request**

#### **Standards de code**
- ✅ Utilisez Prettier pour le formatage
- ✅ Suivez les conventions de nommage React
- ✅ Ajoutez des commentaires pour les logiques complexes
- ✅ Testez vos modifications localement

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 👤 Auteur

**Kader** - Développeur Junior

- 🌐 Website: [https://portfolio-kader.vercel.app](https://portfolio-kader.vercel.app)
- 🐙 GitHub: [@kader](https://github.com/kader)
- 💼 LinkedIn: [kader](https://linkedin.com/in/kader)
- 📧 Email: kader@example.com

---

## 🙏 Remerciements

- [React Team](https://react.dev) pour React
- [Tailwind Labs](https://tailwindcss.com) pour Tailwind CSS  
- [Framer](https://framer.com) pour Framer Motion
- [Lucide](https://lucide.dev) pour les icônes
- [Unsplash](https://unsplash.com) pour les images
- [Vercel](https://vercel.com) pour l'hébergement

---

## 📈 Roadmap

### **Phase 3 - Finalisation (En cours)**
- [ ] Formulaire de contact fonctionnel avec EmailJS
- [ ] Système anti-spam (honeypot + reCAPTCHA)
- [ ] Tests automatisés
- [ ] Optimisations SEO avancées

### **Phase 4 - Améliorations futures**
- [ ] Blog intégré avec MDX
- [ ] Système de commentaires
- [ ] Analytics avancées
- [ ] PWA (Progressive Web App)
- [ ] Mode offline
- [ ] Multilingue (FR/EN)

---

*📅 Dernière mise à jour : Mars 2025*
*📝 Version de la documentation : 1.0.0*