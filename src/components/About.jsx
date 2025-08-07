import React from 'react'
import { motion } from 'framer-motion'
import { Code, Coffee, Heart, Zap, Target, Rocket } from 'lucide-react'

const About = () => {
  const stats = [
    { label: "Projets réalisés", value: "10+", icon: Code },
    { label: "Tasses de café", value: "∞", icon: Coffee },
    { label: "Technologies apprises", value: "15+", icon: Zap },
    { label: "Passion", value: "100%", icon: Heart }
  ]

  const highlights = [
    {
      icon: Target,
      title: "Objectif",
      description: "Devenir un développeur full-stack compétent capable de créer des applications web complètes et innovantes."
    },
    {
      icon: Rocket,
      title: "Ambition",
      description: "Contribuer à des projets qui ont un impact positif et continuer à apprendre les technologies émergentes."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Transformer des idées créatives en solutions numériques élégantes et fonctionnelles."
    }
  ]

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

  return (
    <section id="about" className="section-padding bg-primary-medium">
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
              À propos de <span className="text-gradient">moi</span>
            </h2>
            <p className="text-text-light/70 text-lg max-w-2xl mx-auto">
              Découvrez mon parcours, mes passions et ce qui me motive dans le développement web
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenu principal */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-text-light mb-4">
                  Salut ! Je suis Kader 👋
                </h3>
                
                <p className="text-text-light/80 leading-relaxed">
                  <strong className="text-accent-mint">Développeur junior passionné</strong> basé en Côte d'Ivoire, 
                  je me spécialise dans la création d'expériences web modernes et intuitives. 
                  Mon parcours a commencé par curiosité pour les technologies, et s'est transformé 
                  en une véritable passion pour le code.
                </p>
                
                <p className="text-text-light/80 leading-relaxed">
                  Actuellement en formation intensive, je développe mes compétences en 
                  <span className="text-accent-mint font-medium"> React, JavaScript </span>
                  et les outils de développement moderne. J'aime résoudre des problèmes complexes 
                  et transformer des idées créatives en solutions numériques élégantes.
                </p>
                
                <p className="text-text-light/80 leading-relaxed">
                  Quand je ne code pas, vous me trouverez en train d'explorer les dernières 
                  tendances technologiques, de contribuer à des projets open source, ou de 
                  planifier mon prochain projet créatif.
                </p>
              </div>

              {/* Formation et passion */}
              <div className="bg-primary-dark/50 p-6 rounded-lg border border-primary-light/20">
                <h4 className="text-xl font-semibold text-text-light mb-3">
                  📚 Formation & Apprentissage
                </h4>
                <ul className="space-y-2 text-text-light/80">
                  <li>• <strong>Autodidacte</strong> - Apprentissage continu via projets pratiques</li>
                  <li>• <strong>Formation web</strong> - HTML, CSS, JavaScript, React</li>
                  <li>• <strong>Veille technologique</strong> - Suivi des dernières tendances</li>
                  <li>• <strong>Projets personnels</strong> - Application pratique des connaissances</li>
                </ul>
              </div>
            </motion.div>

            {/* Stats et highlights */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="bg-primary-dark/50 p-6 rounded-lg text-center border border-primary-light/20 hover:border-accent-mint/50 transition-all duration-300"
                    >
                      <Icon className="w-8 h-8 text-accent-mint mx-auto mb-2" />
                      <div className="text-2xl font-bold text-text-light mb-1">
                        {stat.value}
                      </div>
                      <div className="text-text-light/70 text-sm">
                        {stat.label}
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon
                  return (
                    <motion.div
                      key={highlight.title}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-4 p-4 bg-primary-dark/30 rounded-lg border border-primary-light/10 hover:border-accent-mint/30 transition-all duration-300"
                    >
                      <div className="p-2 bg-accent-mint/20 rounded-lg">
                        <Icon className="w-5 h-5 text-accent-mint" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-text-light mb-1">
                          {highlight.title}
                        </h5>
                        <p className="text-text-light/70 text-sm leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Call to action */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <p className="text-text-light/70 mb-6">
              Prêt à collaborer sur votre prochain projet ?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Travaillons ensemble
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About