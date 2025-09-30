"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LoadingSpinner } from "@/components/ui/loading"
import { Send, CheckCircle, AlertCircle, User, Mail, Building2, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = React.useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange"
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to send message")
      }

      setSubmitStatus("success")
      reset()

      // Reset success state after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } catch (error) {
      console.error("Contact form error:", error)
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  }

  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <motion.div variants={inputVariants} className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center space-x-2">
            <User className="w-4 h-4 text-primary" />
            <span>Full Name</span>
          </label>
          <div className="relative">
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className={cn(
                "transition-all duration-200",
                errors.name && "border-red-500 focus:border-red-500"
              )}
              {...register("name")}
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-500 mt-1 flex items-center space-x-1"
              >
                <AlertCircle className="w-3 h-3" />
                <span>{errors.name.message}</span>
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Email Field */}
        <motion.div variants={inputVariants} className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center space-x-2">
            <Mail className="w-4 h-4 text-primary" />
            <span>Email Address</span>
          </label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="your.email@company.com"
              className={cn(
                "transition-all duration-200",
                errors.email && "border-red-500 focus:border-red-500"
              )}
              {...register("email")}
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-500 mt-1 flex items-center space-x-1"
              >
                <AlertCircle className="w-3 h-3" />
                <span>{errors.email.message}</span>
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Company Field */}
        <motion.div variants={inputVariants} className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-foreground flex items-center space-x-2">
            <Building2 className="w-4 h-4 text-primary" />
            <span>Company</span>
          </label>
          <div className="relative">
            <Input
              id="company"
              type="text"
              placeholder="Your company name"
              className={cn(
                "transition-all duration-200",
                errors.company && "border-red-500 focus:border-red-500"
              )}
              {...register("company")}
            />
            {errors.company && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-500 mt-1 flex items-center space-x-1"
              >
                <AlertCircle className="w-3 h-3" />
                <span>{errors.company.message}</span>
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Message Field */}
        <motion.div variants={inputVariants} className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center space-x-2">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span>Message</span>
          </label>
          <div className="relative">
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us about your LLM project and how we can help..."
              className={cn(
                "flex w-full rounded-md border border-border bg-card/80 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all duration-200",
                errors.message && "border-red-500 focus:border-red-500"
              )}
              {...register("message")}
            />
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-500 mt-1 flex items-center space-x-1"
              >
                <AlertCircle className="w-3 h-3" />
                <span>{errors.message.message}</span>
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <LoadingSpinner size="sm" variant="muted" />
                Sending Message...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </motion.div>

        {/* Status Messages */}
        <AnimatePresence mode="wait">
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <div>
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-sm opacity-90">We&apos;ll get back to you within 24 hours.</p>
                </div>
              </div>
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600"
            >
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-5 h-5" />
                <div>
                  <p className="font-medium">Failed to send message</p>
                  <p className="text-sm opacity-90">{errorMessage}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Help Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xs text-muted-foreground text-center"
        >
          Your information is secure and will only be used to respond to your inquiry.
        </motion.p>
      </form>
    </div>
  )
}