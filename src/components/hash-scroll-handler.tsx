"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function HashScrollHandler() {
  const pathname = usePathname()

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash

    if (hash) {
      // Try to scroll immediately first
      const scrollToElement = () => {
        const element = document.querySelector(hash)
        if (element) {
          // Use a longer timeout to ensure DOM is ready
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 300)
          return true
        }
        return false
      }

      // Try immediately
      if (!scrollToElement()) {
        // If element not found, retry after a delay
        const timeouts = [100, 300, 500, 1000]
        timeouts.forEach(delay => {
          setTimeout(scrollToElement, delay)
        })
      }
    }
  }, [pathname])

  return null
}
