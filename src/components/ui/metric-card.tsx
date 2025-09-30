"use client"

import * as React from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedCounter } from "./animated-counter"

interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  title: string
  beforeValue: number
  afterValue: number
  beforeLabel?: string
  afterLabel?: string
  valueProps?: {
    decimals?: number
    prefix?: string
    suffix?: string
    separator?: string
  }
  variant?: "improvement" | "reduction" | "neutral"
  isVisible?: boolean
}

const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  ({
    className,
    icon: Icon,
    title,
    beforeValue,
    afterValue,
    beforeLabel = "Before",
    afterLabel = "After",
    valueProps = {},
    variant = "improvement",
    isVisible = false,
    ...props
  }, ref) => {
    const [showAfter, setShowAfter] = React.useState(false)

    React.useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setShowAfter(true)
        }, 1000) // Start after animation after 1 second

        return () => clearTimeout(timer)
      }
    }, [isVisible])

    const getVariantStyles = () => {
      switch (variant) {
        case "improvement":
          return {
            iconBg: "bg-green-500/20",
            iconColor: "text-green-500",
            border: "border-green-500/20 hover:border-green-500/40",
            afterValueColor: "text-green-500"
          }
        case "reduction":
          return {
            iconBg: "bg-blue-500/20",
            iconColor: "text-blue-500",
            border: "border-blue-500/20 hover:border-blue-500/40",
            afterValueColor: "text-blue-500"
          }
        case "neutral":
          return {
            iconBg: "bg-primary/20",
            iconColor: "text-primary",
            border: "border-primary/20 hover:border-primary/40",
            afterValueColor: "text-primary"
          }
      }
    }

    const styles = getVariantStyles()

    const calculateImprovement = () => {
      if (variant === "reduction") {
        const reduction = ((beforeValue - afterValue) / beforeValue) * 100
        return reduction > 0 ? `↓${reduction.toFixed(1)}%` : `↑${Math.abs(reduction).toFixed(1)}%`
      } else {
        const improvement = ((afterValue - beforeValue) / beforeValue) * 100
        return improvement > 0 ? `↑${improvement.toFixed(1)}%` : `↓${Math.abs(improvement).toFixed(1)}%`
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-xl border p-6 transition-all duration-300 hover:scale-[1.02]",
          "bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:shadow-lg",
          styles.border,
          className
        )}
        {...props}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative">
          {/* Icon and Title */}
          <div className="flex items-center space-x-3 mb-4">
            <div className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              styles.iconBg
            )}>
              <Icon className={cn("w-5 h-5", styles.iconColor)} />
            </div>
            <h3 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider">
              {title}
            </h3>
          </div>

          {/* Metrics */}
          <div className="space-y-4">
            {/* Before Value */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{beforeLabel}</span>
              <div className="text-2xl font-bold text-muted-foreground">
                <AnimatedCounter
                  value={beforeValue}
                  trigger={isVisible}
                  duration={1500}
                  {...valueProps}
                />
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* After Value */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{afterLabel}</span>
              <div className={cn("text-3xl font-bold transition-colors duration-300", styles.afterValueColor)}>
                <AnimatedCounter
                  value={afterValue}
                  trigger={showAfter}
                  duration={2000}
                  {...valueProps}
                />
              </div>
            </div>

            {/* Improvement Badge */}
            {showAfter && (
              <div className="flex justify-center pt-2">
                <div className={cn(
                  "px-3 py-1 rounded-full text-xs font-semibold transition-all duration-500 opacity-0 animate-in fade-in slide-in-from-bottom-2",
                  variant === "improvement" && "bg-green-500/20 text-green-500",
                  variant === "reduction" && "bg-blue-500/20 text-blue-500",
                  variant === "neutral" && "bg-primary/20 text-primary",
                  "opacity-100"
                )}>
                  {calculateImprovement()} improvement
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Shine effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
      </div>
    )
  }
)
MetricCard.displayName = "MetricCard"

export { MetricCard }