"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Skeleton } from "./loading"

interface LazySectionProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  className?: string
  rootMargin?: string
}

export function LazySection({
  children,
  fallback,
  className,
  rootMargin = "100px"
}: LazySectionProps) {
  const [isIntersecting, setIsIntersecting] = React.useState(false)
  const [hasLoaded, setHasLoaded] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsIntersecting(true)
          // Delay to simulate loading time and ensure smooth transition
          setTimeout(() => {
            setHasLoaded(true)
          }, 100)
        }
      },
      {
        rootMargin,
        threshold: 0.1
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [hasLoaded, rootMargin])

  const defaultFallback = (
    <div className="space-y-4 p-8">
      <Skeleton className="h-8 w-1/3 mx-auto" variant="text" />
      <Skeleton className="h-4 w-2/3 mx-auto" variant="text" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-48 w-full" />
        ))}
      </div>
    </div>
  )

  return (
    <div ref={ref} className={className}>
      {hasLoaded ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      ) : isIntersecting ? (
        fallback || defaultFallback
      ) : (
        <div className="h-96" /> // Placeholder to maintain layout
      )}
    </div>
  )
}