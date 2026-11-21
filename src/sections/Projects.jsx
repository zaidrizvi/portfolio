import { motion, useReducedMotion } from 'framer-motion'
import { MagneticButton } from '../components/MagneticButton.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { resume } from '../data/resume.js'

export function Projects() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="projects" className="section-space bg-paper text-ink" aria-labelledby="projects-title">
      <div className="page-shell">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SectionHeading index="05" eyebrow="Featured projects" title="Complex systems, made legible." tone="light" />
        </motion.div>
        <div className="divide-y divide-ink/20 border-y border-ink/20">
          {resume.projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={reducedMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="group py-12 md:py-16"
            >
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                  <p className="font-mono text-sm uppercase tracking-[0.16em] text-ember-dark">Project 0{index + 1}</p>
                  <h3 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl">
                    {project.title}
                  </h3>
                  <div className="mt-8">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/65">Technology</p>
                    <p className="mt-3 text-lg text-ink/80">{project.stack.join(' / ')}</p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <MagneticButton href={project.source} ariaLabel={`View source code for ${project.title}`}>
                      Source code
                    </MagneticButton>
                    {project.demo && (
                      <MagneticButton href={project.demo} variant="outline" ariaLabel={`Open live demo of ${project.title}`}>
                        Live demo
                      </MagneticButton>
                    )}
                  </div>
                </div>
                <div className="space-y-7 lg:col-span-7">
                  <ProjectDetail label="Problem" text={project.problem} />
                  <ProjectDetail label="Architecture" text={project.architecture} />
                  <div className="grid gap-3 border-t border-ink/15 pt-5 sm:grid-cols-3">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink/60">Key decisions</p>
                    <ul className="space-y-3 leading-relaxed text-ink/80 sm:col-span-2">
                      {project.decisions.map((decision) => <li key={decision}>{decision}</li>)}
                    </ul>
                  </div>
                  <ProjectDetail label="Results" text={project.results} />
                  <ProjectDetail label="Demo" text={project.demo ? 'Live demo available.' : 'Live demo not provided in the source résumé.'} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectDetail({ label, text }) {
  return (
    <div className="grid gap-3 border-t border-ink/15 pt-5 sm:grid-cols-3">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink/60">{label}</p>
      <p className="leading-relaxed text-ink/80 sm:col-span-2">{text}</p>
    </div>
  )
}
