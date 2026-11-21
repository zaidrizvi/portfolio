import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export function CursorGlow() {
  const reducedMotion = useReducedMotion()
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const springX = useSpring(x, { stiffness: 120, damping: 24 })
  const springY = useSpring(y, { stiffness: 120, damping: 24 })

  useEffect(() => {
    if (reducedMotion) return undefined
    const move = (event) => {
      x.set(event.clientX - 180)
      y.set(event.clientY - 180)
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [reducedMotion, x, y])

  if (reducedMotion) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 hidden size-[360px] rounded-full bg-acid/[0.055] blur-3xl lg:block"
      style={{ x: springX, y: springY }}
    />
  )
}
