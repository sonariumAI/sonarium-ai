"use client"

import * as React from "react"
import Image, { ImageProps } from "next/image"
import { cn } from "@/lib/utils"
import { Skeleton } from "./loading"

interface OptimizedImageProps extends Omit<ImageProps, "src" | "alt"> {
  src: string
  alt: string
  className?: string
  fallback?: React.ReactNode
  aspectRatio?: "square" | "video" | "portrait" | "landscape"
  priority?: boolean
}

export function OptimizedImage({
  src,
  alt,
  className,
  fallback,
  aspectRatio,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = React.useState(true)
  const [hasError, setHasError] = React.useState(false)

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]"
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  if (hasError) {
    return (
      fallback || (
        <div className={cn(
          "flex items-center justify-center bg-muted rounded-md",
          aspectRatio && aspectRatioClasses[aspectRatio],
          className
        )}>
          <span className="text-muted-foreground text-sm">Failed to load image</span>
        </div>
      )
    )
  }

  return (
    <div className={cn("relative overflow-hidden", aspectRatio && aspectRatioClasses[aspectRatio], className)}>
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      <Image
        src={src}
        alt={alt}
        className={cn(
          "object-cover transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoad={handleLoad}
        onError={handleError}
        priority={priority}
        quality={90}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
      />
    </div>
  )
}

// For placeholder images and logos
export function PlaceholderImage({
  className,
  aspectRatio = "square",
  children,
  ...props
}: {
  className?: string
  aspectRatio?: "square" | "video" | "portrait" | "landscape"
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) {
  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]"
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center bg-muted/30 border border-border/50 rounded-lg",
        aspectRatioClasses[aspectRatio],
        className
      )}
      {...props}
    >
      {children || (
        <span className="text-muted-foreground text-sm">Image</span>
      )}
    </div>
  )
}