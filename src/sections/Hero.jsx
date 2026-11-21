import { motion, useReducedMotion } from 'framer-motion'
import { MagneticButton } from '../components/MagneticButton.jsx'
import { resume } from '../data/resume.js'

const greetingWords = `Hi, I'm ${resume.person.name}.`.split(' ')
const fallingStars = [
  { left: '8%', top: '8%', size: 11, delay: 0 },
  { left: '35%', top: '38%', size: 13, delay: 0.18 },
  { left: '70%', top: '66%', size: 11, delay: 0.36 },
  { left: '91%', top: '18%', size: 15, delay: 0.52 },
  { left: '21%', top: '72%', size: 9, delay: 0.08, desktopOnly: true },
  { left: '48%', top: '12%', size: 12, delay: 0.26, desktopOnly: true },
  { left: '59%', top: '48%', size: 10, delay: 0.44, desktopOnly: true },
  { left: '81%', top: '82%', size: 13, delay: 0.14, desktopOnly: true },
  { left: '96%', top: '54%', size: 9, delay: 0.32, desktopOnly: true },
]

export function Hero() {
  const reducedMotion = useReducedMotion()
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reducedMotion ? 0 : 0.075, delayChildren: 0.15 },
    },
  }
  const word = {
    hidden: reducedMotion ? { opacity: 1 } : { opacity: 0, y: '75%', rotate: 2 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pb-10 pt-32 sm:pb-14" aria-labelledby="hero-title">
      <FallingStars reducedMotion={reducedMotion} />
      <div className="page-shell relative z-10 w-full">
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mb-8 font-mono text-sm uppercase tracking-[0.18em] text-acid"
        >
          {resume.person.role}
        </motion.p>
        <div className="grid min-w-0 grid-cols-1 items-end gap-9 lg:grid-cols-12 lg:gap-14">
          <motion.h1
            id="hero-title"
            variants={container}
            initial="hidden"
            animate="visible"
            className="min-w-0 max-w-4xl text-[clamp(3.4rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.06em] lg:col-span-8"
          >
            {greetingWords.map((item, index) => (
              <span key={`${item}-${index}`} className="mr-[0.2em] inline-block overflow-hidden pb-[0.14em] align-top">
                <motion.span variants={word} className="inline-block">
                  {item}
                </motion.span>
              </span>
            ))}
          </motion.h1>
          <motion.aside
            id="about"
            initial={reducedMotion ? false : { opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: reducedMotion ? 0 : 0.45 }}
            className="min-w-0 border-l border-paper/25 pl-6 lg:col-span-4 lg:mb-4"
            aria-labelledby="hero-about-title"
          >
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-acid">About</p>
            <h2 id="hero-about-title" className="mt-3 text-2xl font-semibold tracking-[-0.025em]">
              Building software for people.
            </h2>
            <p className="mt-4 leading-relaxed text-mist">{resume.person.summary}</p>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-paper/70">
              {resume.person.location}
            </p>
          </motion.aside>
        </div>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: reducedMotion ? 0 : 0.55 }}
          className="mt-10 flex flex-col gap-7 border-t border-paper/20 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-lg font-mono text-sm uppercase tracking-[0.14em] text-mist">
            React / Node.js / FastAPI / AI integration
          </p>
          <div className="flex flex-wrap gap-3">
            <MagneticButton href="#projects">View work</MagneticButton>
            <MagneticButton href={resume.links.github} variant="outline" ariaLabel="Visit GitHub profile">
              GitHub
            </MagneticButton>
          </div>
        </motion.div>
        <motion.a
          href="#experience"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: reducedMotion ? 0 : 0.65 }}
          className="mt-7 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acid"
        >
          <span className="h-px w-12 bg-acid" aria-hidden="true" />
          Explore experience
        </motion.a>
      </div>
    </section>
  )
}

function FallingStars({ reducedMotion }) {
  if (reducedMotion) return null

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {fallingStars.map((star, index) => (
        <motion.span
          key={`${star.left}-${star.top}`}
          initial={{ opacity: 0, x: 0, y: -24, scale: 0.65 }}
          animate={{ opacity: [0, 0.5, 0], x: [0, -10, -20], y: [-30, 75, 180], scale: [0.65, 1, 0.8] }}
          transition={{ duration: 0.58, ease: 'easeOut', delay: star.delay, repeat: Infinity, repeatType: 'loop' }}
          className={`absolute text-paper/50 ${star.desktopOnly ? 'hidden sm:block' : 'block'}`}
          style={{ left: star.left, top: star.top, fontSize: star.size }}
        >
          {index % 2 === 0 ? '✦' : '✧'}
        </motion.span>
      ))}
    </div>
  )
}
