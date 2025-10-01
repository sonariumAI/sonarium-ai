"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AnimatedBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "subtle" | "bold"
}

export function AnimatedBackground({
  className,
  variant = "default",
  children,
  ...props
}: AnimatedBackgroundProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Animated gradient background */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-80",
          variant === "default" && "from-background via-gray-900/90 to-primary/20",
          variant === "subtle" && "from-background via-gray-900/95 to-primary/10",
          variant === "bold" && "from-background via-primary/30 to-secondary/20"
        )}
        style={{
          backgroundSize: "400% 400%",
          animation: "gradientShift 15s ease infinite"
        }}
      />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 -left-20 sm:left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-primary/5 rounded-full blur-3xl"
          style={{
            animation: "float 20s ease-in-out infinite"
          }}
        />
        <div
          className="absolute top-3/4 -right-20 sm:right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/5 rounded-full blur-3xl"
          style={{
            animation: "float 25s ease-in-out infinite reverse"
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-primary/3 rounded-full blur-3xl hidden sm:block"
          style={{
            animation: "float 30s ease-in-out infinite"
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }
      `}</style>
    </div>
  )
}