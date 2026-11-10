import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import SectionHeader from './ui/SectionHeader'

const featured = projects.find((p) => p.featured)
const others = projects.filter((p) => !p.featured)

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.4, ease: 'easeOut', delay },
})

const ProjectLinks = ({ project, solid = false }) => {
  const hasCode = Boolean(project.github)
  const hasDemo = Boolean(project.demo) && project.status !== 'Planifié'
  if (!hasCode && !hasDemo) return null

  return (
    <div className="flex flex-wrap gap-3">
      {hasCode && project.status !== 'Planifié' && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={solid ? 'btn-solid' : 'btn-outline'}
        >
          <Github size={16} strokeWidth={1.5} />
          Code source
        </a>
      )}
      {hasDemo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-outline">
          <ExternalLink size={16} strokeWidth={1.5} />
          Démo
        </a>
      )}
    </div>
  )
}

const Projects = () => (
  <section id="projects" className="section-y scroll-mt-16 border-t border-line bg-canvas">
    <div className="container-page space-y-16">
      <SectionHeader
        index="03"
        label="Projets"
        title="Réalisations"
        intro="Une sélection de projets personnels, de l'application web à l'assistant IA."
      />

      {/* Projet phare */}
      {featured && (
        <motion.article
          {...reveal()}
          className="grid gap-8 rounded border border-accent bg-surface p-8 md:p-10 lg:grid-cols-12 lg:gap-12"
        >
          <div className="space-y-5 lg:col-span-7">
            <p className="label text-accent">[ Projet phare ]</p>
            <h3 className="text-3xl font-semibold">{featured.title}</h3>
            <p className="text-base leading-relaxed text-ink/80 md:text-lg">{featured.description}</p>
            <ProjectLinks project={featured} solid />
          </div>

          <div className="space-y-4 border-t border-line pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="label text-ink/60">[ Stack ]</p>
            <ul className="flex flex-wrap gap-2">
              {featured.technologies.map((tech) => (
                <li key={tech} className="tag text-sm">
                  {tech}
                </li>
              ))}
            </ul>
            <p className="label text-ink/60">[ Statut ]</p>
            <p className="font-mono text-sm text-ink">{featured.status}</p>
          </div>
        </motion.article>
      )}

      {/* Autres projets */}
      <div className="space-y-6">
        <p className="label text-ink/60">[ Autres projets ]</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((project, i) => (
            <motion.article
              key={project.id}
              {...reveal(i * 0.05)}
              className="card flex flex-col gap-5 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <span className="label shrink-0 text-ink/50">{project.status}</span>
              </div>

              <p className="flex-1 text-sm leading-relaxed text-ink/70">{project.description}</p>

              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>

              {project.status !== 'Planifié' && (
                <div className="flex gap-5 border-t border-line pt-4 text-sm font-medium">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent hover:underline"
                  >
                    Code <ArrowUpRight size={14} strokeWidth={1.5} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent hover:underline"
                    >
                      Démo <ArrowUpRight size={14} strokeWidth={1.5} />
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Projects
