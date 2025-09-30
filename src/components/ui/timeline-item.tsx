import * as React from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  week: string
  title: string
  description: string
  deliverables: string[]
  isLast?: boolean
  variant?: "default" | "primary" | "secondary" | "accent"
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, icon: Icon, week, title, description, deliverables, isLast = false, variant = "default", ...props }, ref) => {
    const variantStyles = {
      default: {
        iconBg: "bg-primary/20 border-primary/30",
        iconColor: "text-primary",
        line: "bg-gradient-to-b from-primary/50 to-secondary/30"
      },
      primary: {
        iconBg: "bg-primary/20 border-primary/30",
        iconColor: "text-primary",
        line: "bg-gradient-to-b from-primary/50 to-secondary/30"
      },
      secondary: {
        iconBg: "bg-secondary/20 border-secondary/30",
        iconColor: "text-secondary",
        line: "bg-gradient-to-b from-secondary/50 to-primary/30"
      },
      accent: {
        iconBg: "bg-accent/20 border-accent/30",
        iconColor: "text-accent",
        line: "bg-gradient-to-b from-accent/50 to-primary/30"
      }
    }

    const styles = variantStyles[variant]

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex gap-6 group",
          className
        )}
        {...props}
      >
        {/* Timeline Line and Icon */}
        <div className="flex flex-col items-center">
          {/* Icon */}
          <div className={cn(
            "relative w-16 h-16 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110",
            styles.iconBg,
            "shadow-lg group-hover:shadow-xl backdrop-blur-sm"
          )}>
            <Icon className={cn("w-8 h-8", styles.iconColor)} />

            {/* Pulsing effect */}
            <div className={cn(
              "absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 animate-ping",
              styles.iconBg.split(' ')[1] // Extract border color
            )} />
          </div>

          {/* Connecting Line */}
          {!isLast && (
            <div className={cn(
              "w-0.5 h-24 mt-4 rounded-full",
              styles.line
            )} />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-12">
          {/* Week Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-card/50 border border-border/50 mb-3">
            <span className="text-sm font-semibold text-primary">
              {week}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>

          {/* Deliverables */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider">
              Key Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {deliverables.map((deliverable, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-card/30 border border-border/30 hover:bg-card/50 hover:border-border/50 transition-all duration-200"
                >
                  <div className={cn(
                    "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                    variant === "primary" && "bg-primary",
                    variant === "secondary" && "bg-secondary",
                    variant === "accent" && "bg-accent",
                    variant === "default" && "bg-primary"
                  )} />
                  <span className="text-sm text-foreground/90 leading-relaxed">
                    {deliverable}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
)
TimelineItem.displayName = "TimelineItem"

export { TimelineItem }