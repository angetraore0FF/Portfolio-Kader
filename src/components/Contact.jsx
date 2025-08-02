import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-primary-dark">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light">
            Contactez-<span className="text-gradient">moi</span>
          </h2>
          
          <p className="text-text-light/70 text-lg max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets ou opportunités
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact