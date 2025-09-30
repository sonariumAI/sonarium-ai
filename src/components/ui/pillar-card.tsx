import * as React from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface PillarCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  outcomes: string[]
  variant?: "default" | "primary" | "secondary" | "accent"
}

const PillarCard = React.forwardRef<HTMLDivElement, PillarCardProps>(
  ({ className, icon: Icon, title, description, features, outcomes, variant = "default", ...props }, ref) => {
    const variantStyles = {
      default: {
        iconBg: "bg-primary/20",
        iconColor: "text-primary",
        accent: "from-primary/10 to-primary/5"
      },
      primary: {
        iconBg: "bg-primary/20",
        iconColor: "text-primary",
        accent: "from-primary/10 to-primary/5"
      },
      secondary: {
        iconBg: "bg-secondary/20",
        iconColor: "text-secondary",
        accent: "from-secondary/10 to-secondary/5"
      },
      accent: {
        iconBg: "bg-accent/20",
        iconColor: "text-accent",
        accent: "from-accent/10 to-accent/5"
      }
    }

    const styles = variantStyles[variant]

    return (
      <div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] cursor-pointer",
          // Glassmorphism effect
          "bg-white/[0.03] backdrop-blur-xl border border-white/[0.08]",
          "hover:bg-white/[0.08] hover:border-white/[0.12]",
          "shadow-2xl hover:shadow-3xl",
          className
        )}
        {...props}
      >
        {/* Background gradient overlay */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          styles.accent
        )} />

        {/* Animated background orbs */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className={cn(
            "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110",
            styles.iconBg,
            "shadow-lg group-hover:shadow-xl"
          )}>
            <Icon className={cn("w-8 h-8", styles.iconColor)} />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            {description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">
              Key Features
            </h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcomes */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">
              Outcomes
            </h4>
            <ul className="space-y-2">
              {outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Glassmorphism shine effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Border highlight effect */}
        <div className="absolute inset-0 rounded-2xl border border-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    )
  }
)
PillarCard.displayName = "PillarCard"

export { PillarCard }