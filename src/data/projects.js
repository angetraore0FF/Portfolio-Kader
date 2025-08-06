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
    github: "https://github.com/angetraore0FF/Portfolio-Kader",
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
    status: "En cours",
    category: "Web Application"
  },

  {
    id: 3,
    title: "Blog ecommerce",
    description: "Une boutique ? Un blog ? Pourquoi choisir ! Ce projet Django fusionne les deux pour offrir un site e-commerce dynamique avec un espace de contenu intégré. C’est un projet personnel qui illustre comment créer une application modulaire, scalable et facile à maintenir avec Django.",
    image: "https://www.retis.be/wp-content/uploads/2022/09/ecommerce-definition.png",
    technologies: ["JavaScript", "HTML", "CSS", "Python"],
    features: [
      "Ajout/suppression de tâches",
      "Marquage terminé/non terminé",
      "Filtrage par statut",
      "Stockage local persistant",
      "Interface responsive"
    ],
    github: "https://github.com/angetraore0FF/django_ecommerce_blog",
    demo: "https://todo-kader.netlify.app",
    status: "Terminé",
    category: "Site Web"
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
    status: "En cours",
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
  "Game Development",
  "Site Web"
]

export const projectStats = {
  total: projects.length,
  completed: projects.filter(p => p.status === "Terminé").length,
  inProgress: projects.filter(p => p.status === "En cours").length,
  planned: projects.filter(p => p.status === "Planifié").length
}