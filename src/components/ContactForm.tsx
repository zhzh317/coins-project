"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"

// Form schema for validation
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
})

type ContactFormValues = z.infer<typeof contactSchema>

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  })

  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (response.ok) {
        toast.success(result.message || "Your message has been sent successfully!")
        form.reset()
      } else {
        toast.error(result.message || "An error occurred. Please try again.")
      }
    } catch (error) {
      toast.error("A network error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="flex flex-col bg-card/80 backdrop-blur-sm border-border/50">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Got Crypto Fraud? Need Finance Help?
        </CardTitle>
        <p className="text-muted-foreground text-center">
          Don&apos;t Wait! We&apos;re Here to Help.
        </p>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col flex-grow space-y-4">
          <Input placeholder="Name" {...form.register("name")} disabled={loading} />
          {form.formState.errors.name && (
            <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>
          )}

          <Input type="email" placeholder="Email" {...form.register("email")} disabled={loading} />
          {form.formState.errors.email && (
            <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>
          )}

          <Input placeholder="Phone (Optional)" {...form.register("phone")} disabled={loading} />
          {form.formState.errors.phone && (
            <p className="text-red-500 text-sm">{form.formState.errors.phone.message}</p>
          )}

          <Textarea placeholder="How can we help?" {...form.register("message")} disabled={loading} className="flex-grow"/>
          {form.formState.errors.message && (
            <p className="text-red-500 text-sm">{form.formState.errors.message.message}</p>
          )}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
