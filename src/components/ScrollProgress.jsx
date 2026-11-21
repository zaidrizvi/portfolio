import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const reducedMotion = useReducedMotion()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: reducedMotion ? 1000 : 140,
    damping: reducedMotion ? 100 : 28,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[80] h-1 origin-left bg-acid"
      style={{ scaleX }}
    />
  )
}
