import * as React from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  stat: string
  title: string
  description: string
  variant?: "default" | "warning" | "danger" | "info"
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, icon: Icon, stat, title, description, variant = "default", ...props }, ref) => {
    const variantStyles = {
      default: {
        iconBg: "bg-primary/10",
        iconColor: "text-primary",
        border: "border-border hover:border-primary/50"
      },
      warning: {
        iconBg: "bg-amber-500/10",
        iconColor: "text-amber-500",
        border: "border-border hover:border-amber-500/50"
      },
      danger: {
        iconBg: "bg-red-500/10",
        iconColor: "text-red-500",
        border: "border-border hover:border-red-500/50"
      },
      info: {
        iconBg: "bg-secondary/10",
        iconColor: "text-secondary",
        border: "border-border hover:border-secondary/50"
      }
    }

    const styles = variantStyles[variant]

    return (
      <div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-xl border bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:bg-card/80 hover:shadow-lg hover:-translate-y-1 cursor-pointer",
          styles.border,
          className
        )}
        {...props}
      >
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative">
          {/* Icon */}
          <div className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110",
            styles.iconBg
          )}>
            <Icon className={cn("w-6 h-6", styles.iconColor)} />
          </div>

          {/* Stat */}
          <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {stat}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Subtle shine effect on hover */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
      </div>
    )
  }
)
StatCard.displayName = "StatCard"

export { StatCard }