"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navigationItems = [
  { name: "Solutions", href: "/#solutions" },
  { name: "Process", href: "/#process" },
  { name: "Team", href: "/#team" },
  { name: "Contact", href: "/#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 hover:text-primary",
                    mounted && isScrolled
                      ? "text-foreground/80 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link href="/book-demo">
              <Button
                size="lg"
                className={cn(
                  "hidden sm:inline-flex font-semibold",
                  !mounted || !isScrolled ? "bg-white/10 text-white border-white/20 hover:bg-white/20" : ""
                )}
                variant={mounted && isScrolled ? "default" : "outline"}
              >
                Book a Demo
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200",
                mounted && isScrolled
                  ? "text-foreground/80 hover:text-primary hover:bg-accent"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className={cn(
            "px-2 pt-2 pb-3 space-y-1 border-t",
            mounted && isScrolled
              ? "bg-background/95 backdrop-blur-md border-border"
              : "bg-background/95 backdrop-blur-md border-white/10"
          )}>
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Link href="/book-demo" className="block">
                <Button size="lg" className="w-full font-semibold">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}