import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Network, Code2 } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'

const education = [
  {
    label: 'ECE Paris',
    title: 'Bachelor Cybersécurité (B3)',
    detail: 'Formation en cours',
  },
  {
    label: 'Licence',
    title: 'Réseaux et Télécommunications',
    detail: 'IIT (Institut International de Technologie), Grand-Bassam, Côte d’Ivoire. Tronc commun Génie Logiciel.',
  },
]

const focus = [
  {
    icon: ShieldCheck,
    title: 'Sécurité des systèmes',
    description: 'Comprendre comment un système est exposé pour mieux le protéger.',
  },
  {
    icon: Network,
    title: 'Réseaux',
    description: "Architecture, protocoles et communications, base de toute démarche de sécurité.",
  },
  {
    icon: Code2,
    title: 'Développement',
    description: 'Concevoir et construire des applications, du back-end à l’interface.',
  },
]

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.4 },
}

const About = () => (
  <section id="about" className="section-y scroll-mt-16 bg-canvas">
    <div className="container-page space-y-16">
      <SectionHeader index="01" label="À propos" title="Réseaux, développement, sécurité" />

      <div className="grid gap-12 lg:grid-cols-12">
        <motion.div {...reveal} className="space-y-6 text-base leading-relaxed text-ink/80 lg:col-span-7 md:text-lg">
          <p>
            J'ai obtenu ma Licence en Réseaux et Télécommunications (tronc commun Génie Logiciel) à
            l'IIT, Institut International de Technologie, à Grand-Bassam en Côte d'Ivoire. Je suis
            actuellement en Bachelor B3 Cybersécurité à l'ECE Paris.
          </p>
          <p>
            Ce double ancrage, réseaux d'un côté et développement de l'autre, structure ma façon
            d'aborder la sécurité : comprendre comment un système est construit avant de chercher
            à le protéger.
          </p>
          <p>
            Je mets ces centres d'intérêt en pratique dans des projets personnels, dont Justice Guide
            AI, un assistant juridique reposant sur une architecture RAG.
          </p>
        </motion.div>

        {/* Parcours */}
        <motion.div {...reveal} className="lg:col-span-5">
          <p className="label mb-4 text-ink/60">[ Parcours ]</p>
          <ol className="border-l border-line">
            {education.map((item) => (
              <li key={item.title} className="relative pb-8 pl-6 last:pb-0">
                <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full border border-accent bg-canvas" />
                <p className="label text-accent">[ {item.label} ]</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-ink/70">{item.detail}</p>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>

      {/* Domaines d'intérêt */}
      <div className="grid gap-px overflow-hidden rounded border border-line bg-line md:grid-cols-3">
        {focus.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.08 }}
              className="space-y-4 bg-surface p-8"
            >
              <Icon size={24} strokeWidth={1.5} className="text-accent" aria-hidden="true" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink/70">{item.description}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  </section>
)

export default About
