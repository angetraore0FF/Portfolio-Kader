import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { socials } from '../data/socials'

const profile = [
  { key: 'nom', value: 'Traoré Ange Lamine Abdoul Kader' },
  { key: 'licence', value: 'Réseaux et Télécommunications, IIT Grand-Bassam' },
  { key: 'parcours', value: 'Tronc commun Génie Logiciel' },
  { key: 'en cours', value: 'Bachelor B3 Cybersécurité, ECE Paris' },
  { key: 'focus', value: 'Systèmes, réseaux, développement' },
]

const goTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

const Hero = () => (
  <section id="hero" className="on-dark bg-primary pt-16 text-canvas">
    <div className="container-page grid items-center gap-16 py-24 md:py-32 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-12">
      {/* Texte */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="space-y-8 lg:col-span-7"
      >
        <p className="label text-canvas/70">[ ECE Paris · B3 Cybersécurité ]</p>

        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Traoré Ange Lamine Abdoul Kader
          </h1>
          <h2 className="text-xl font-normal text-canvas/80 md:text-2xl">
            Étudiant en cybersécurité
          </h2>
        </div>

        <p className="max-w-xl text-base leading-relaxed text-canvas/75 md:text-lg">
          J'ai obtenu ma Licence en Réseaux et Télécommunications (tronc commun Génie Logiciel) à
          l'IIT, Institut International de Technologie, à Grand-Bassam en Côte d'Ivoire. Je suis
          actuellement en Bachelor B3 Cybersécurité à l'ECE Paris, avec un intérêt marqué pour la
          sécurisation des systèmes, les réseaux et le développement.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={() => goTo('#projects')} className="btn-light">
            Voir mes projets
            <ArrowDown size={16} strokeWidth={1.5} />
          </button>
          <button type="button" onClick={() => goTo('#contact')} className="btn-light-outline">
            <Mail size={16} strokeWidth={1.5} />
            Me contacter
          </button>
        </div>

        <ul className="flex gap-3" aria-label="Réseaux">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <li key={social.name}>
                <a
                  href={social.url}
                  target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex size-11 items-center justify-center rounded border border-canvas/20 text-canvas/80 transition-colors duration-200 hover:border-canvas hover:text-canvas"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              </li>
            )
          })}
        </ul>
      </motion.div>

      {/* Panneau profil style terminal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        className="lg:col-span-5"
      >
        <div className="rounded border border-canvas/15 bg-black/20">
          <div className="border-b border-canvas/15 px-5 py-3">
            <span className="label text-canvas/60">~/profil</span>
          </div>
          <dl className="space-y-4 px-5 py-6 font-mono text-sm">
            {profile.map((row) => (
              <div key={row.key} className="grid grid-cols-[6rem_1fr] gap-4">
                <dt className="text-canvas/50">{row.key}</dt>
                <dd className="text-canvas">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </div>
  </section>
)

export default Hero
