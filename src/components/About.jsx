import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section-padding bg-primary-medium">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light">
            À propos de <span className="text-gradient">moi</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-text-light/80 text-lg leading-relaxed">
              Développeur junior passionné par les technologies web modernes, 
              je me spécialise dans la création d'interfaces utilisateur intuitives et performantes.
            </p>
            
            <p className="text-text-light/80 text-lg leading-relaxed">
              Actuellement en formation, je développe mes compétences en React, JavaScript, 
              et les outils de développement moderne pour créer des expériences web exceptionnelles.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About