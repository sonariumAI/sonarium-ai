"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
  variant?: "primary" | "secondary" | "muted"
}

export function LoadingSpinner({
  className,
  size = "md",
  variant = "primary",
  ...props
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  }

  const variantClasses = {
    primary: "border-primary",
    secondary: "border-secondary",
    muted: "border-muted-foreground"
  }

  return (
    <div
      className={cn(
        "inline-block animate-spin rounded-full border-2 border-solid border-transparent",
        sizeClasses[size],
        variantClasses[variant],
        "border-t-current",
        className
      )}
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}

interface LoadingDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "muted"
}

export function LoadingDots({
  className,
  variant = "primary",
  ...props
}: LoadingDotsProps) {
  const variantClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    muted: "bg-muted-foreground"
  }

  return (
    <div
      className={cn("flex items-center space-x-1", className)}
      {...props}
    >
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={cn(
            "w-2 h-2 rounded-full",
            variantClasses[variant]
          )}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular"
}

export function Skeleton({
  className,
  variant = "rectangular",
  ...props
}: SkeletonProps) {
  const variantClasses = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded"
  }

  return (
    <motion.div
      className={cn(
        "bg-muted animate-pulse",
        variantClasses[variant],
        className
      )}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      {...props}
    />
  )
}