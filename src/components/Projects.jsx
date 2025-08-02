import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-primary-medium">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light">
            Mes <span className="text-gradient">projets</span>
          </h2>
          
          <p className="text-text-light/70 text-lg max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets récents et les technologies utilisées
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects