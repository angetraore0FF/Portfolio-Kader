import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { socials } from '../data/socials'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary-medium border-t border-primary-light/20">
      <div className="container-max px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gradient cursor-pointer" onClick={scrollToTop}>
              Kader
            </h3>
            <p className="text-text-light/70 max-w-md">
              Développeur Junior passionné par la création d'expériences web modernes et intuitives.
            </p>
          </motion.div>

          {/* Navigation rapide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-text-light">Navigation</h4>
            <ul className="space-y-2">
              {[
                { name: 'Accueil', href: '#hero' },
                { name: 'À propos', href: '#about' },
                { name: 'Projets', href: '#projects' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-text-light/70 hover:text-accent-mint transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-text-light">Me suivre</h4>
            <div className="flex space-x-4">
              {socials.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-primary-light hover:bg-accent-mint hover:text-primary-dark transition-all duration-300 rounded-lg group"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Ligne de séparation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-primary-light/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-light/70 text-sm">
              © {currentYear} Kader. Tous droits réservés.
            </p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-text-light/70 text-sm flex items-center space-x-1"
            >
              <span>Développé avec</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.span>
              <span>et React</span>
            </motion.p>
          </div>
        </motion.div>

        {/* Bouton retour en haut */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 p-3 bg-accent-mint text-primary-dark rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer