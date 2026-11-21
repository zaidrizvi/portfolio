import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { resume } from '../data/resume.js'

export function Skills() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="skills" className="section-space border-y border-paper/10" aria-labelledby="skills-title">
      <div className="page-shell">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, clipPath: 'inset(0 0 35% 0)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <SectionHeading index="04" eyebrow="Skills" title="A toolkit organized around the work." />
        </motion.div>
        <div className="divide-y divide-paper/15 border-y border-paper/15">
          {Object.entries(resume.skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={reducedMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: reducedMotion ? 0 : index * 0.035 }}
              className="grid gap-5 py-8 md:grid-cols-12 md:gap-8 md:py-10"
            >
              <div className="md:col-span-4">
                <p className="font-mono text-sm uppercase tracking-[0.18em] text-acid">0{index + 1}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em]">{category}</h3>
              </div>
              <p className="text-2xl leading-relaxed text-mist md:col-span-8 md:text-3xl">
                {items.join(' · ')}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
