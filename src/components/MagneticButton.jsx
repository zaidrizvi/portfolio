import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

export function MagneticButton({ href, children, variant = 'solid', ariaLabel }) {
  const reducedMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 20 })
  const springY = useSpring(y, { stiffness: 260, damping: 20 })

  function handleMove(event) {
    if (reducedMotion) return
    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18)
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18)
  }

  function reset() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onBlur={reset}
      style={{ x: springX, y: springY }}
      whileHover={reducedMotion ? undefined : { scale: 1.03 }}
      whileTap={reducedMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 py-3 font-mono text-sm uppercase tracking-[0.12em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acid ${
        variant === 'solid'
          ? 'border-acid bg-acid text-ink'
          : 'border-paper/30 bg-transparent text-paper'
      }`}
    >
      {children}
    </motion.a>
  )
}
