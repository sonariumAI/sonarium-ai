"use client"

import * as React from "react"
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
        <div
          key={index}
          className={cn(
            "w-2 h-2 rounded-full animate-pulse",
            variantClasses[variant]
          )}
          style={{
            animationDelay: `${index * 0.2}s`
          }}
        />
      ))}
    </div>
  )
}

interface SkeletonProps {
  variant?: "text" | "circular" | "rectangular"
  className?: string
}

export function Skeleton({
  className,
  variant = "rectangular"
}: SkeletonProps) {
  const variantClasses = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded"
  }

  return (
    <div
      className={cn(
        "bg-muted animate-pulse",
        variantClasses[variant],
        className
      )}
    />
  )
}