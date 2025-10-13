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
      {/* Animated gradient background - Dark Galileo style */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br",
          variant === "default" && "from-navy-900 via-navy-800 to-navy-700",
          variant === "subtle" && "from-background via-navy-800 to-navy-700",
          variant === "bold" && "from-navy-800 via-navy-700 to-primary/10"
        )}
        style={{
          backgroundSize: "400% 400%",
          animation: "gradientShift 25s ease infinite"
        }}
      />

      {/* Floating orbs - Dark theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
          style={{
            animation: "float 25s ease-in-out infinite"
          }}
        />
        <div
          className="absolute top-2/3 right-1/4 w-[700px] h-[700px] bg-secondary/8 rounded-full blur-3xl"
          style={{
            animation: "float 30s ease-in-out infinite reverse"
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/2 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-3xl"
          style={{
            animation: "float 35s ease-in-out infinite"
          }}
        />
      </div>

      {/* Grid overlay - subtle for dark theme */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
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