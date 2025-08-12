"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { ArrowRight, Loader2 } from "lucide-react"

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address.")
})

type NewsletterForm = z.infer<typeof newsletterSchema>

export function HeroSection() {
  const [loading, setLoading] = useState(false)
  const form = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" }
  })

  const onSubmit = async (data: NewsletterForm) => {
    setLoading(true)
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (response.ok) {
        toast.success(result.message || "Successfully subscribed!")
        form.reset()
      } else {
        // Handle specific errors from the backend
        if (response.status === 409) {
          toast.error(result.message || "This email is already subscribed.")
        } else {
          toast.error(result.message || "An error occurred. Please try again.")
        }
      }
    } catch (error) {
      console.error("Failed to subscribe:", error)
      toast.error("A network error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32 lg:py-40" style={{ backgroundImage: "url('/placeholder.svg')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Navigate the Future of Finance with <span className="text-primary">CoinsCiphers</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Your trusted source for cryptocurrency news, in-depth analysis, and expert investment guides.
          </p>
          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-lg mx-auto">
            <div className="flex items-center space-x-2 bg-card p-2 rounded-lg border border-border/50 shadow-lg">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-transparent border-none focus:ring-0"
                {...form.register("email")}
                disabled={loading}
              />
              <Button type="submit" size="lg" disabled={loading}>
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </>
                )}
              </Button>
            </div>
            {form.formState.errors.email && (
              <p className="text-red-500 text-sm mt-2">
                {form.formState.errors.email.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
