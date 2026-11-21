import { motion, useReducedMotion } from 'framer-motion'
import { MagneticButton } from '../components/MagneticButton.jsx'
import { resume } from '../data/resume.js'

export function Contact() {
  const reducedMotion = useReducedMotion()

  return (
    <footer id="contact" className="section-space relative overflow-hidden" aria-labelledby="contact-title">
      <motion.div
        initial={reducedMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="page-shell relative z-10 text-center"
      >
        <p className="font-mono text-sm uppercase tracking-[0.22em] text-acid">06 / Contact</p>
        <h2 id="contact-title" className="mx-auto mt-6 max-w-5xl text-balance text-5xl font-semibold leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
          Let’s build something practical.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-mist">
          Reach out by email, or find more of my work and professional background online.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <MagneticButton href={resume.links.email}>Send an email</MagneticButton>
          <MagneticButton href={resume.links.linkedin} variant="outline" ariaLabel="Visit LinkedIn profile">LinkedIn</MagneticButton>
          <MagneticButton href={resume.links.github} variant="outline" ariaLabel="Visit GitHub profile">GitHub</MagneticButton>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-paper/20 pt-6 font-mono text-xs uppercase tracking-[0.14em] text-mist sm:mt-20 sm:flex-row sm:justify-between">
          <span>{resume.person.name}</span>
          <span>{resume.person.location}</span>
        </div>
      </motion.div>
    </footer>
  )
}
