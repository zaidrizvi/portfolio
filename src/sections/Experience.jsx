import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { resume } from '../data/resume.js'

export function Experience() {
  const reducedMotion = useReducedMotion()
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 80%', 'end 40%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 24 })

  return (
    <section id="experience" className="section-space bg-paper text-ink" aria-labelledby="experience-title">
      <div className="page-shell">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SectionHeading index="02" eyebrow="Experience" title="Built in real teams, shipped for real users." tone="light" />
        </motion.div>
        <div ref={timelineRef} className="relative ml-2 border-l border-ink/20 pl-8 sm:ml-4 sm:pl-12">
          <motion.div
            aria-hidden="true"
            className="absolute -left-px top-0 h-full w-0.5 origin-top bg-ember-dark"
            style={{ scaleY: reducedMotion ? 1 : scaleY }}
          />
          {resume.experience.map((item) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial={reducedMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative"
            >
              <span aria-hidden="true" className="absolute -left-[2.45rem] top-2 size-3 rounded-full border-4 border-paper bg-ember-dark sm:-left-[3.45rem]" />
              <div className="grid gap-7 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="font-mono text-sm uppercase tracking-[0.14em] text-ember-dark">{item.period}</p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">{item.company}</h3>
                  <p className="mt-2 text-lg">{item.role}</p>
                  <p className="mt-1 text-ink/60">{item.location}</p>
                </div>
                <ul className="space-y-5 lg:col-span-8">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="border-t border-ink/15 pt-5 leading-relaxed text-ink/75">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
