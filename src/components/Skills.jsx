import React from 'react'
import { motion } from 'framer-motion'
import { skills, softSkills } from '../data/skills'
import SectionHeader from './ui/SectionHeader'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.4, ease: 'easeOut', delay },
})

const Skills = () => (
  <section id="skills" className="section-y scroll-mt-16 border-t border-line bg-canvas">
    <div className="container-page space-y-16">
      <SectionHeader
        index="02"
        label="Compétences"
        title="Langages, outils et qualités"
        intro="Les technologies que j'utilise et les qualités que j'apporte en équipe."
      />

      {/* Compétences techniques */}
      <div className="grid gap-6 lg:grid-cols-3">
        {skills.map((group, i) => (
          <motion.div key={group.category} {...reveal(i * 0.08)} className="card space-y-5 p-8">
            <h3 className="label text-accent">[ {group.category} ]</h3>
            <ul className="flex flex-wrap gap-2">
              {group.technologies.map((tech) => (
                <li key={tech.name} className="tag text-sm">
                  {tech.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Compétences transversales */}
      <div className="space-y-8">
        <motion.p {...reveal()} className="label text-ink/60">
          [ Compétences transversales ]
        </motion.p>
        <ul className="grid gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {softSkills.map((skill, i) => (
            <motion.li
              key={skill.name}
              {...reveal(i * 0.05)}
              className="space-y-2 bg-surface p-6"
            >
              <h4 className="text-base font-semibold">{skill.name}</h4>
              <p className="text-sm leading-relaxed text-ink/70">{skill.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default Skills
