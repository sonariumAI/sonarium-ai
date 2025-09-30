"use client"

import * as React from "react"
import { motion } from "framer-motion"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className
}: FadeInProps) {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  const directionOffset = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: 60 },
    right: { x: -60 }
  }

  if (!isMounted) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...directionOffset[direction]
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}