import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
  variant?: "default" | "minimal"
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ className, size = "md", variant = "default", ...props }, ref) => {
    const heightClasses = {
      sm: "h-16",
      md: "h-20",
      lg: "h-24"
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center",
          heightClasses[size],
          className
        )}
        {...props}
      >
        {/* SVG Logo */}
        <img
          src="/sonarium_logo.svg"
          alt="Sonarium AI"
          className={cn(
            "w-auto",
            heightClasses[size]
          )}
        />
      </div>
    )
  }
)
Logo.displayName = "Logo"

export { Logo }