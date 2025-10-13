import { Metadata } from "next"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Book a Demo",
  description: "Schedule a free consultation to discuss your AI deployment needs.",
}

export default function BookDemoPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <ContactSection />
    </div>
  )
}
