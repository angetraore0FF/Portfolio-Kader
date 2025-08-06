import React from 'react'
import { motion } from 'framer-motion'
import { skills, softSkills } from '../data/skills'
import { Code, Brain, TrendingUp, Award } from 'lucide-react'

const Skills = () => {
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  }

  const SkillCard = ({ skill, index }) => (
    <motion.div
      variants={skillVariants}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-primary-dark/50 p-6 rounded-lg border border-primary-light/20 hover:border-accent-mint/50 transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-semibold text-text-light group-hover:text-accent-mint transition-colors duration-300">
            {skill.name}
          </span>
        </div>
        <span className="text-accent-mint font-bold">
          {skill.level}%
        </span>
      </div>
      
      <div className="w-full bg-primary-light/30 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="h-2 rounded-full"
          style={{ 
            background: `linear-gradient(90deg, #5FC2BA 0%, ${skill.color || '#5FC2BA'} 100%)`
          }}
        />
      </div>
    </motion.div>
  )

  const SoftSkillCard = ({ skill, index }) => (
    <motion.div
      variants={skillVariants}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="bg-primary-dark/30 p-6 rounded-lg border border-primary-light/10 hover:border-accent-mint/30 transition-all duration-300 text-center group"
    >
      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
        {skill.icon}
      </div>
      <h4 className="font-semibold text-text-light mb-2 group-hover:text-accent-mint transition-colors duration-300">
        {skill.name}
      </h4>
      <p className="text-text-light/70 text-sm leading-relaxed">
        {skill.description}
      </p>
    </motion.div>
  )

  return (
    <section id="skills" className="section-padding bg-primary-dark">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* En-tête */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light">
              Mes <span className="text-gradient">compétences</span>
            </h2>
            <p className="text-text-light/70 text-lg max-w-2xl mx-auto">
              Voici les technologies et outils que j'utilise
            </p>
          </motion.div>

          {/* Statistiques */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: Code, label: "Technologies", value: "15+", color: "text-blue-400" },
              { icon: TrendingUp, label: "Progression", value: "+25%", color: "text-green-400" },
              { icon: Brain, label: "Projets", value: "10+", color: "text-purple-400" },
              { icon: Award, label: "Expertise", value: "Junior", color: "text-accent-mint" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="bg-primary-medium/50 p-6 rounded-lg text-center border border-primary-light/20 hover:border-accent-mint/50 transition-all duration-300"
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold text-text-light mb-1">
                  {stat.value}
                </div>
                <div className="text-text-light/70 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Compétences techniques - Affichage direct */}
          <motion.div variants={itemVariants} className="space-y-12">
            {skills.map((category, index) => (
              <div key={category.category} className="space-y-6">
                <h3 className="text-2xl font-bold text-text-light flex items-center">
                  <span className="text-2xl mr-3">
                    {index === 0 ? "💻" : index === 1 ? "🛠️" : "🚀"}
                  </span>
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.technologies.map((skill, skillIndex) => (
                    <SkillCard key={skill.name} skill={skill} index={skillIndex} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-text-light mb-4">
                Compétences <span className="text-gradient">transversales</span>
              </h3>
              <p className="text-text-light/70 max-w-2xl mx-auto">
                Mes qualités complémentaires
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {softSkills.map((skill, index) => (
                <SoftSkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills