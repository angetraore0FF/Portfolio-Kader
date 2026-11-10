import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { socials } from '../data/socials'

const navItems = [
  { name: 'À propos', href: '#about' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Projets', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Footer = () => {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="on-dark bg-primary text-canvas">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <p className="font-mono text-sm font-medium">Traoré Ange Lamine Abdoul Kader</p>
            <p className="max-w-xs text-sm leading-relaxed text-canvas/70">
              Étudiant en Bachelor B3 Cybersécurité à l'ECE Paris. Systèmes, réseaux et développement.
            </p>
          </div>

          <nav aria-label="Pied de page" className="space-y-4">
            <p className="label text-canvas/50">[ Navigation ]</p>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    type="button"
                    onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm text-canvas/80 underline-offset-4 transition-colors duration-200 hover:text-canvas hover:underline"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-4">
            <p className="label text-canvas/50">[ Réseaux ]</p>
            <ul className="flex gap-3">
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
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-canvas/15 pt-6 text-xs text-canvas/60 md:flex-row md:justify-between">
          <p className="font-mono tabular-nums">© {new Date().getFullYear()} Traoré Ange Lamine Abdoul Kader</p>
          <p className="font-mono">React · Tailwind CSS</p>
        </div>
      </div>

      {showTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Retour en haut de page"
          className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-[max(1.5rem,env(safe-area-inset-right))] z-40 flex size-11 items-center justify-center rounded border border-line bg-surface text-primary shadow-sm transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          <ArrowUp size={18} strokeWidth={1.5} />
        </button>
      )}
    </footer>
  )
}

export default Footer
