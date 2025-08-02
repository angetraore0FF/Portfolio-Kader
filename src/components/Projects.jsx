import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Calendar, Tag, Filter } from 'lucide-react'
import { projects, projectCategories, projectStats } from '../data/projects'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [hoveredProject, setHoveredProject] = useState(null)

  const filteredProjects = selectedCategory === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Terminé':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'En cours':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'Planifié':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const ProjectCard = ({ project, index }) => (
    <motion.div
      variants={projectVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      whileHover={{ y: -5 }}
      onHoverStart={() => setHoveredProject(project.id)}
      onHoverEnd={() => setHoveredProject(null)}
      className="bg-primary-medium/50 rounded-lg overflow-hidden border border-primary-light/20 hover:border-accent-mint/50 transition-all duration-300 group"
    >
      {/* Image du projet */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-primary-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-text-light/20 backdrop-blur-sm rounded-full hover:bg-accent-mint hover:text-primary-dark transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-text-light/20 backdrop-blur-sm rounded-full hover:bg-accent-mint hover:text-primary-dark transition-all duration-300"
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>
        
        {/* Badge de statut */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
          {project.status}
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-text-light group-hover:text-accent-mint transition-colors duration-300">
              {project.title}
            </h3>
            <span className="text-text-light/60 text-sm flex items-center">
              <Tag className="w-4 h-4 mr-1" />
              {project.category}
            </span>
          </div>
          
          <p className="text-text-light/70 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-primary-dark/50 text-accent-mint text-xs rounded-full border border-accent-mint/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features (visible au hover) */}
        <AnimatePresence>
          {hoveredProject === project.id && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              <h4 className="text-sm font-semibold text-text-light">Fonctionnalités :</h4>
              <ul className="text-xs text-text-light/70 space-y-1">
                {project.features.slice(0, 3).map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="w-1 h-1 bg-accent-mint rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex space-x-4 pt-4 border-t border-primary-light/20">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 text-center py-2 bg-primary-light/30 hover:bg-primary-light/50 text-text-light rounded-lg transition-colors duration-300 text-sm font-medium"
          >
            Code
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 text-center py-2 bg-accent-mint/20 hover:bg-accent-mint/30 text-accent-mint rounded-lg transition-colors duration-300 text-sm font-medium"
          >
            Démo
          </motion.a>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="projects" className="section-padding bg-primary-medium">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light">
              Mes <span className="text-gradient">projets</span>
            </h2>
            <p className="text-text-light/70 text-lg max-w-2xl mx-auto">
              Découvrez une sélection de mes réalisations, des projets personnels aux applications web complètes
            </p>
          </motion.div>

          {/* Statistiques des projets */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Total", value: projectStats.total, color: "text-accent-mint" },
              { label: "Terminés", value: projectStats.completed, color: "text-green-400" },
              { label: "En cours", value: projectStats.inProgress, color: "text-blue-400" },
              { label: "Planifiés", value: projectStats.planned, color: "text-yellow-400" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="bg-primary-dark/30 p-6 rounded-lg text-center border border-primary-light/20 hover:border-accent-mint/30 transition-all duration-300"
              >
                <div className={`text-3xl font-bold mb-1 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-text-light/70 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Filtres de catégories */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="flex flex-wrap gap-2 bg-primary-dark/30 p-2 rounded-lg border border-primary-light/20">
              <Filter className="w-5 h-5 text-text-light/50 self-center mr-2" />
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-accent-mint text-primary-dark'
                      : 'text-text-light hover:text-accent-mint hover:bg-primary-light/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grille des projets */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Message si aucun projet */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-text-light/70 text-lg">
                Aucun projet trouvé dans cette catégorie.
              </p>
            </motion.div>
          )}

          {/* Call to action */}
          <motion.div 
            variants={itemVariants}
            className="text-center bg-primary-dark/30 p-8 rounded-lg border border-primary-light/20"
          >
            <h3 className="text-2xl font-bold text-text-light mb-4">
              Vous avez un projet en tête ? 💡
            </h3>
            <p className="text-text-light/70 mb-6 max-w-2xl mx-auto">
              Je suis toujours intéressé par de nouveaux défis et collaborations. 
              N'hésitez pas à me contacter pour discuter de votre projet !
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Démarrons un projet
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects