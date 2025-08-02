# 📘 Guide d'Installation Détaillé

Ce guide vous accompagne pas à pas dans l'installation et la configuration de votre portfolio personnel.

## 🎯 Objectif

À la fin de ce guide, vous aurez :
- ✅ Un portfolio fonctionnel sur votre machine locale
- ✅ Toutes les dépendances correctement installées
- ✅ L'environnement de développement configuré
- ✅ Les outils de déploiement prêts

---

## 📋 Prérequis techniques

### **Système d'exploitation**
- ✅ Windows 10+ / macOS 10.15+ / Linux Ubuntu 18.04+
- ✅ Au moins 4 GB de RAM disponible
- ✅ Au moins 2 GB d'espace disque libre

### **Logiciels requis**

#### **1. Node.js (version 16+)**

**Installation sur Windows :**
```bash
# Télécharger depuis https://nodejs.org/
# Choisir la version LTS (Long Term Support)
# Exécuter l'installateur et suivre les instructions

# Vérifier l'installation
node --version  # Doit afficher v16.x.x ou plus
npm --version   # Doit afficher 8.x.x ou plus
```

**Installation sur macOS :**
```bash
# Option 1: Homebrew (recommandé)
brew install node

# Option 2: Site officiel
# Télécharger depuis https://nodejs.org/

# Vérification
node --version
npm --version
```

**Installation sur Linux :**
```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# CentOS/RHEL/Fedora
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# Vérification
node --version
npm --version
```

#### **2. Yarn (gestionnaire de paquets)**

```bash
# Installation globale via npm
npm install -g yarn

# Vérifier l'installation
yarn --version  # Doit afficher 1.22.x ou plus

# Alternative : installation via script officiel
curl -o- -L https://yarnpkg.com/install.sh | bash
```

#### **3. Git (système de version)**

**Windows :**
```bash
# Télécharger Git for Windows depuis https://git-scm.com/
# Exécuter l'installateur avec les options par défaut
```

**macOS :**
```bash
# Option 1: Xcode Command Line Tools
xcode-select --install

# Option 2: Homebrew
brew install git
```

**Linux :**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install git

# CentOS/RHEL/Fedora
sudo yum install git
```

**Configuration Git :**
```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre-email@example.com"
```

---

## 🚀 Installation pas à pas

### **Étape 1 : Cloner le repository**

#### **Option A : Via HTTPS (simple)**
```bash
# Créer un dossier pour vos projets
mkdir ~/projets
cd ~/projets

# Cloner le repository
git clone https://github.com/kader/portfolio.git
cd portfolio
```

#### **Option B : Via SSH (sécurisé, pour contributeurs)**
```bash
# Configurer SSH (si pas déjà fait)
ssh-keygen -t ed25519 -C "votre-email@example.com"
cat ~/.ssh/id_ed25519.pub  # Ajouter cette clé à GitHub

# Cloner via SSH
git clone git@github.com:kader/portfolio.git
cd portfolio
```

### **Étape 2 : Vérifier le contenu**

```bash
# Lister les fichiers du projet
ls -la

# Vous devriez voir :
# ├── public/
# ├── src/
# ├── package.json
# ├── vite.config.js
# ├── tailwind.config.js
# └── README.md
```

### **Étape 3 : Installation des dépendances**

```bash
# Installation avec Yarn (recommandé)
yarn install

# OU avec npm (alternative)
npm install

# En cas d'erreur, nettoyer et réinstaller
rm -rf node_modules yarn.lock package-lock.json
yarn install
```

**Temps d'installation :** 2-5 minutes selon votre connexion internet.

**Dépendances installées :**
- React 18.2.0 (Framework principal)
- Vite 4.5.0 (Build tool)
- Tailwind CSS 3.3.5 (Framework CSS)
- Framer Motion 10.16.4 (Animations)
- Lucide React 0.294.0 (Icônes)

### **Étape 4 : Configuration de l'environnement**

```bash
# Copier le fichier d'exemple
cp .env.example .env

# Éditer le fichier .env
# Windows
notepad .env

# macOS
open -e .env

# Linux
nano .env
# ou
code .env  # Si VS Code est installé
```

**Configuration minimale pour le développement :**
```bash
# Remplacer dans .env
VITE_APP_NAME=Portfolio Votre Nom
VITE_AUTHOR_NAME=Votre Nom
VITE_EMAIL=votre-email@example.com
VITE_GITHUB_URL=https://github.com/votre-username
VITE_LINKEDIN_URL=https://linkedin.com/in/votre-profil
```

### **Étape 5 : Premier lancement**

```bash
# Démarrer le serveur de développement
yarn dev

# Vous devriez voir :
# ➜  Local:   http://localhost:3000/
# ➜  Network: http://192.168.x.x:3000/
```

**🎉 Ouvrez http://localhost:3000 dans votre navigateur !**

---

## ✅ Vérification de l'installation

### **Tests de fonctionnement**

#### **1. Interface utilisateur**
- [ ] La page d'accueil s'affiche correctement
- [ ] La navigation fonctionne (scroll smooth entre sections)
- [ ] Le bouton de thème fonctionne (sombre ↔ clair)
- [ ] Les animations sont fluides
- [ ] Le design est responsive (testez sur mobile)

#### **2. Console développeur**
```bash
# Ouvrir les outils de développement (F12)
# Onglet Console : aucune erreur rouge
# Onglet Network : toutes les ressources se chargent (200 OK)
# Onglet Performance : temps de chargement < 3 secondes
```

#### **3. Build de production**
```bash
# Tester le build
yarn build

# Vérifier que le dossier dist/ est créé
ls dist/

# Tester la version de production
yarn preview
```

#### **4. Linting et qualité de code**
```bash
# Vérifier la qualité du code
yarn lint

# Aucune erreur ne devrait apparaître
```

---

## 🛠️ Personnalisation initiale

### **1. Informations personnelles**

#### **Modifier les données de base**
```javascript
// src/data/socials.js
export const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/VOTRE-USERNAME', // ← Changer ici
    icon: Github,
    color: '#333'
  },
  // ... autres réseaux
]
```

#### **Mettre à jour le contenu Hero**
```javascript
// src/components/Hero.jsx - Ligne ~30
<h1 className="text-5xl md:text-7xl font-bold text-text-light">
  Votre Nom  {/* ← Changer ici */}
</h1>
<h2 className="text-2xl md:text-4xl font-semibold text-gradient">
  Votre Titre  {/* ← Changer ici */}
</h2>
```

#### **Modifier la bio dans About**
```javascript
// src/components/About.jsx - Ligne ~45
<p className="text-text-light/80 leading-relaxed">
  Votre biographie personnelle...  {/* ← Changer ici */}
</p>
```

### **2. Ajouter votre premier projet**

```javascript
// src/data/projects.js - Ajouter dans le tableau
{
  id: 7,
  title: "Mon Premier Projet",
  description: "Description de votre projet...",
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  technologies: ["HTML", "CSS", "JavaScript"],
  features: [
    "Fonctionnalité 1",
    "Fonctionnalité 2",
    "Fonctionnalité 3"
  ],
  github: "https://github.com/votre-username/votre-projet",
  demo: "https://votre-projet.netlify.app",
  status: "Terminé",
  category: "Web Development"
}
```

### **3. Mettre à jour vos compétences**

```javascript
// src/data/skills.js - Modifier les niveaux
{
  name: "JavaScript",
  icon: "⚡",
  level: 75,  // ← Ajuster selon votre niveau (0-100)
  color: "#F7DF1E"
}
```

---

## 🔧 Outils de développement recommandés

### **Éditeur de code : Visual Studio Code**

#### **Installation :**
```bash
# Télécharger depuis https://code.visualstudio.com/
# Ou via package manager :

# Windows (Chocolatey)
choco install vscode

# macOS (Homebrew)
brew install --cask visual-studio-code

# Linux (Ubuntu)
sudo snap install code --classic
```

#### **Extensions recommandées :**
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",      // Tailwind CSS IntelliSense
    "esbenp.prettier-vscode",         // Prettier - Code formatter
    "dbaeumer.vscode-eslint",         // ESLint
    "ms-vscode.vscode-typescript-next", // TypeScript support
    "formulahendry.auto-rename-tag",  // Auto rename paired HTML tags
    "christian-kohler.path-intellisense", // Path autocomplete
    "ms-vscode.vscode-json",          // JSON support
    "bradlc.vscode-tailwindcss"       // Tailwind CSS autocomplete
  ]
}
```

#### **Configuration VS Code pour le projet :**
```json
// .vscode/settings.json (créer ce fichier)
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.experimental.classRegex": [
    "tw`([^`]*)", 
    ["tw.div`([^`]*)", "`([^`]*)`"]
  ],
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

### **Navigateur pour le développement**

#### **Google Chrome avec extensions :**
- React Developer Tools
- Redux DevTools (si vous utilisez Redux plus tard)
- Lighthouse (audit de performance)
- ColorZilla (pour les couleurs)

---

## 🚨 Problèmes courants à l'installation

### **Erreur : "node: command not found"**
```bash
# Vérifier l'installation de Node.js
which node

# Si vide, réinstaller Node.js
# Ajouter au PATH (Linux/macOS)
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

### **Erreur : "yarn: command not found"**
```bash
# Installer Yarn globalement
npm install -g yarn

# Ou utiliser npm à la place
npm install  # au lieu de yarn install
npm run dev  # au lieu de yarn dev
```

### **Erreur : Port 3000 déjà utilisé**
```bash
# Solution 1: Changer le port
yarn dev --port 3001

# Solution 2: Tuer le processus existant
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

### **Erreur : "Cannot resolve dependency"**
```bash
# Nettoyer et réinstaller
rm -rf node_modules
rm yarn.lock package-lock.json
yarn install

# Ou forcer la résolution
yarn install --force
```

### **Erreur : Styles Tailwind ne fonctionnent pas**
```bash
# Vérifier tailwind.config.js
# Le content doit inclure vos fichiers
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
]

# Redémarrer le serveur après modification
```

---

## 📞 Support et aide

### **Si vous rencontrez des problèmes :**

1. **Vérifiez d'abord :**
   - Toutes les dépendances sont installées
   - Les versions de Node.js et Yarn sont correctes
   - Le fichier .env est configuré
   - Aucune erreur dans la console

2. **Ressources d'aide :**
   - 📖 Ce README complet
   - 🐛 [Issues GitHub](https://github.com/kader/portfolio/issues)
   - 💬 [Discord React](https://discord.gg/reactiflux)
   - 📚 [Documentation React](https://react.dev/)

3. **Créer un issue GitHub :**
   ```
   Titre: [INSTALLATION] Description du problème
   
   **Environnement:**
   - OS: Windows 11 / macOS Big Sur / Ubuntu 20.04
   - Node.js: 18.x.x
   - Yarn: 1.22.x
   
   **Erreur:**
   [Coller le message d'erreur complet]
   
   **Étapes pour reproduire:**
   1. ...
   2. ...
   ```

---

**🎉 Félicitations ! Votre portfolio est maintenant installé et prêt à être personnalisé !**

*Prochaine étape : Consultez le [Guide de Personnalisation](CUSTOMIZATION_GUIDE.md)*