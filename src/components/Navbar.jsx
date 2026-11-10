import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'À propos', href: '#about' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Projets', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const goTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="on-dark fixed inset-x-0 top-0 z-50 border-b border-canvas/10 bg-primary text-canvas">
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Navigation principale">
        <button
          type="button"
          onClick={() => goTo('#hero')}
          className="min-w-0 truncate pr-4 text-left font-mono text-xs font-medium sm:text-sm"
          aria-label="Retour à l'accueil"
        >
          Traoré Ange Lamine Abdoul Kader
        </button>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                type="button"
                onClick={() => goTo(item.href)}
                className="label text-canvas/70 transition-colors duration-200 hover:text-canvas"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex size-11 items-center justify-center rounded border border-canvas/20 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </nav>

      {isMenuOpen && (
        <ul id="mobile-menu" className="border-t border-canvas/10 bg-primary md:hidden">
          {navItems.map((item) => (
            <li key={item.name} className="border-b border-canvas/10 last:border-b-0">
              <button
                type="button"
                onClick={() => goTo(item.href)}
                className="label block min-h-[44px] w-full px-5 py-3 text-left text-canvas/80 hover:text-canvas"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar
