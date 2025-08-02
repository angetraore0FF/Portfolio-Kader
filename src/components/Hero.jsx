import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react'

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoratif */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-mint/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container-max px-4 relative z-10">
        <div className="text-center space-y-8">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-accent-mint text-lg font-medium"
            >
              Salut, je suis
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-text-light"
            >
              Kader
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl md:text-4xl font-semibold text-gradient"
            >
              Développeur Junior
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-text-light/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Passionné par le développement web moderne, je crée des expériences numériques 
            intuitives et performantes avec <span className="text-accent-mint font-medium">React</span>, 
            <span className="text-accent-mint font-medium"> JavaScript</span> et les dernières technologies.
          </motion.p>

          {/* Boutons d'action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="btn-primary flex items-center space-x-2 group"
            >
              <span>Voir mes projets</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="btn-secondary flex items-center space-x-2"
            >
              <span>En savoir plus</span>
            </motion.button>
          </motion.div>

          {/* Liens sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-primary-medium hover:bg-accent-mint hover:text-primary-dark transition-all duration-300 rounded-lg group"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-primary-medium hover:bg-accent-mint hover:text-primary-dark transition-all duration-300 rounded-lg group"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>

        {/* Indicateur de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 cursor-pointer"
            onClick={scrollToAbout}
          >
            <span className="text-text-light/60 text-sm">Défiler vers le bas</span>
            <ArrowDown className="w-5 h-5 text-accent-mint" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero