import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { resume } from '../data/resume.js'

export function Education() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="education" className="section-space" aria-labelledby="education-title">
      <div className="page-shell">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SectionHeading index="03" eyebrow="Education" title="Learning across systems and data." />
        </motion.div>
        <div className="grid gap-3 md:grid-cols-2">
          {resume.education.map((item, index) => (
            <motion.article
              key={item.institution}
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: reducedMotion ? 0 : index * 0.08 }}
              className="flex flex-col justify-between rounded-xl border border-paper/20 bg-white/[0.025] p-6 sm:p-7"
            >
              <div>
                <p className="font-mono text-sm uppercase tracking-[0.14em] text-acid">{item.period}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em]">{item.institution}</h3>
                <p className="mt-3 text-base leading-relaxed text-mist">{item.degree}</p>
              </div>
              <div className="mt-6 flex flex-wrap justify-between gap-3 border-t border-paper/15 pt-4 text-sm text-mist">
                <span>{item.location}</span>
                {item.detail && <span className="text-paper">{item.detail}</span>}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
