import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-primary-dark">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light">
            Mes <span className="text-gradient">compétences</span>
          </h2>
          
          <p className="text-text-light/70 text-lg max-w-2xl mx-auto">
            Voici les technologies et outils que j'utilise pour créer des expériences web modernes
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills