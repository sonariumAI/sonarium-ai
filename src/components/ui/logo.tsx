import * as React from "react"
import { cn } from "@/lib/utils"

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
  variant?: "default" | "minimal"
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ className, size = "md", variant = "default", ...props }, ref) => {
    const sizeClasses = {
      sm: "h-6 text-lg",
      md: "h-8 text-xl",
      lg: "h-10 text-2xl"
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center space-x-2 font-bold",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {/* Logo Icon */}
        <div className={cn(
          "rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold",
          size === "sm" && "w-6 h-6 text-xs",
          size === "md" && "w-8 h-8 text-sm",
          size === "lg" && "w-10 h-10 text-base"
        )}>
          S
        </div>

        {/* Logo Text */}
        {variant === "default" && (
          <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Sonarium AI
          </span>
        )}
      </div>
    )
  }
)
Logo.displayName = "Logo"

export { Logo }