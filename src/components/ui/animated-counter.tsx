"use client"

import * as React from "react"
import { motion, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  separator?: string
  trigger?: boolean
}

const AnimatedCounter = React.forwardRef<HTMLSpanElement, AnimatedCounterProps>(
  ({
    className,
    value,
    duration = 2000,
    decimals = 0,
    prefix = "",
    suffix = "",
    separator = ",",
    trigger = true,
    ...props
  }, ref) => {
    const [displayValue, setDisplayValue] = React.useState(0)
    const [isAnimating, setIsAnimating] = React.useState(false)
    const frameRef = React.useRef<number | undefined>(undefined)
    const startTimeRef = React.useRef<number | undefined>(undefined)

    // Framer Motion spring for smoother animations
    const spring = useSpring(0, {
      stiffness: 50,
      damping: 20,
      mass: 1
    })

    const displayValueMotion = useTransform(spring, (value) => value)

    const formatNumber = (num: number) => {
      let formatted = num.toFixed(decimals)

      if (separator && num >= 1000) {
        const parts = formatted.split('.')
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator)
        formatted = parts.join('.')
      }

      return `${prefix}${formatted}${suffix}`
    }

    const animate = React.useCallback((timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp
      }

      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)

      const currentValue = value * easeOutCubic
      setDisplayValue(currentValue)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setIsAnimating(false)
      }
    }, [duration, value])

    React.useEffect(() => {
      if (trigger && !isAnimating) {
        setIsAnimating(true)
        spring.set(value)
        startTimeRef.current = undefined
        frameRef.current = requestAnimationFrame(animate)
      }

      return () => {
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current)
        }
      }
    }, [trigger, value, isAnimating, animate, spring])

    // Update display value from motion value
    React.useEffect(() => {
      const unsubscribe = displayValueMotion.on("change", (v) => {
        setDisplayValue(v)
      })
      return unsubscribe
    }, [displayValueMotion])

    React.useEffect(() => {
      return () => {
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current)
        }
      }
    }, [])

    return (
      <motion.span
        ref={ref}
        className={cn("font-mono tabular-nums", className)}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        {...props}
      >
        {formatNumber(displayValue)}
      </motion.span>
    )
  }
)
AnimatedCounter.displayName = "AnimatedCounter"

export { AnimatedCounter }