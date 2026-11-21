import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { resume } from '../data/resume.js'

const links = ['About', 'Experience', 'Education', 'Skills', 'Projects', 'Contact']

export function Header() {
  const reducedMotion = useReducedMotion()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      menuButtonRef.current?.focus()
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <motion.header
      initial={reducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut', delay: 0.1 }}
      className="absolute inset-x-0 top-0 z-40"
    >
      <nav className="page-shell flex h-20 items-center justify-between sm:h-24" aria-label="Primary navigation">
        <a
          href="#main-content"
          className="font-mono text-sm font-semibold uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acid"
        >
          {resume.person.shortName}
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-mono text-xs uppercase tracking-[0.14em] text-mist hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acid"
            >
              {link}
            </a>
          ))}
        </div>
        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex min-h-10 items-center rounded-full border border-paper/40 px-4 font-mono text-xs uppercase tracking-[0.12em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acid lg:hidden"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <a
          href={resume.links.email}
          className="hidden rounded-full border border-paper/40 px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acid lg:inline-flex"
        >
          Say hello
        </a>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={reducedMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="page-shell grid grid-cols-2 gap-1 rounded-2xl border border-paper/25 bg-ink p-2 lg:hidden"
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 font-mono text-sm uppercase tracking-[0.1em] text-paper/80 hover:bg-white/5 hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-acid"
              >
                {link}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
