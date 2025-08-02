export const projects = [
  {
    id: 1,
    title: "Portfolio Personnel",
    description: "Un portfolio moderne et responsive développé avec React et Tailwind CSS. Comprend des animations fluides, un système de thème sombre/clair, et une architecture modulaire.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    features: [
      "Design responsive",
      "Animations fluides",
      "Mode sombre/clair",
      "Navigation smooth scroll",
      "Architecture modulaire"
    ],
    github: "https://github.com/kader/portfolio",
    demo: "https://portfolio-kader.vercel.app",
    status: "En cours",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Application Todo",
    description: "Une application de gestion des tâches interactive avec fonctionnalités de tri, filtrage et stockage local. Interface intuitive et moderne.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
    features: [
      "Ajout/suppression de tâches",
      "Marquage terminé/non terminé",
      "Filtrage par statut",
      "Stockage local persistant",
      "Interface responsive"
    ],
    github: "https://github.com/kader/todo-app",
    demo: "https://todo-kader.netlify.app",
    status: "Terminé",
    category: "Web Application"
  },
  {
    id: 3,
    title: "Landing Page Restaurant",
    description: "Page d'atterrissage élégante pour un restaurant avec galerie d'images, menu interactif et formulaire de réservation. Design moderne et appétissant.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["HTML5", "CSS3", "JavaScript", "SASS"],
    features: [
      "Design responsive",
      "Galerie d'images interactive",
      "Menu avec filtres",
      "Formulaire de contact",
      "Animations CSS"
    ],
    github: "https://github.com/kader/restaurant-landing",
    demo: "https://restaurant-kader.netlify.app",
    status: "Terminé",
    category: "Landing Page"
  },
  {
    id: 4,
    title: "Calculatrice Scientifique",
    description: "Calculatrice web avancée avec fonctions scientifiques, historique des calculs et interface utilisateur intuitive. Parfaite pour les étudiants et professionnels.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "CSS Modules", "Math.js"],
    features: [
      "Opérations de base et avancées",
      "Fonctions trigonométriques",
      "Historique des calculs",
      "Interface responsive",
      "Raccourcis clavier"
    ],
    github: "https://github.com/kader/scientific-calculator",
    demo: "https://calculator-kader.vercel.app",
    status: "En cours",
    category: "Utility App"
  },
  {
    id: 5,
    title: "API Météo Widget",
    description: "Widget météo interactif qui affiche les conditions météorologiques actuelles et les prévisions. Intégration avec une API météo externe.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["JavaScript", "API REST", "CSS3", "Chart.js"],
    features: [
      "Données météo en temps réel",
      "Prévisions 5 jours",
      "Géolocalisation automatique",
      "Graphiques interactifs",
      "Recherche par ville"
    ],
    github: "https://github.com/kader/weather-widget",
    demo: "https://weather-kader.netlify.app",
    status: "Terminé",
    category: "API Integration"
  },
  {
    id: 6,
    title: "Jeu Memory Card",
    description: "Jeu de mémoire interactif avec différents niveaux de difficulté, système de score et animations amusantes. Parfait pour tous les âges.",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "CSS Animations", "Local Storage"],
    features: [
      "Plusieurs niveaux de difficulté",
      "Système de score et timer",
      "Animations fluides",
      "Sauvegarde des meilleurs scores",
      "Design responsive"
    ],
    github: "https://github.com/kader/memory-game",
    demo: "https://memory-kader.vercel.app",
    status: "Planifié",
    category: "Game Development"
  }
]

export const projectCategories = [
  "Tous",
  "Web Development",
  "Web Application", 
  "Landing Page",
  "Utility App",
  "API Integration",
  "Game Development"
]

export const projectStats = {
  total: projects.length,
  completed: projects.filter(p => p.status === "Terminé").length,
  inProgress: projects.filter(p => p.status === "En cours").length,
  planned: projects.filter(p => p.status === "Planifié").length
}