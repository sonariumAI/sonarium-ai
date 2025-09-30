import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sectionVariants = cva(
  "relative",
  {
    variants: {
      size: {
        sm: "py-8 px-4",
        default: "py-16 px-4",
        lg: "py-24 px-4",
        xl: "py-32 px-4",
      },
      width: {
        full: "w-full",
        container: "max-w-7xl mx-auto",
        narrow: "max-w-4xl mx-auto",
        tight: "max-w-2xl mx-auto",
      },
      variant: {
        default: "",
        gradient: "bg-gradient-to-b from-background/50 to-background",
        accent: "bg-accent/5",
        primary: "bg-primary/5",
        secondary: "bg-secondary/5",
      },
    },
    defaultVariants: {
      size: "default",
      width: "container",
      variant: "default",
    },
  }
)

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, size, width, variant, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(sectionVariants({ size, width, variant, className }))}
      {...props}
    >
      {children}
    </section>
  )
)
Section.displayName = "Section"

const SectionHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { center?: boolean }
>(({ className, center = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mb-12",
      center && "text-center",
      className
    )}
    {...props}
  />
))
SectionHeader.displayName = "SectionHeader"

const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    gradient?: boolean
  }
>(({ className, as: Comp = "h2", gradient = false, ...props }, ref) => (
  <Comp
    ref={ref}
    className={cn(
      "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
      gradient && "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
      className
    )}
    {...props}
  />
))
SectionTitle.displayName = "SectionTitle"

const SectionDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "mt-4 text-lg text-muted-foreground max-w-2xl",
      className
    )}
    {...props}
  />
))
SectionDescription.displayName = "SectionDescription"

const SectionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-8", className)}
    {...props}
  />
))
SectionContent.displayName = "SectionContent"

export {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  SectionContent,
  sectionVariants,
}