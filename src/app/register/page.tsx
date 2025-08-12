"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Loader2, Mail, Lock, User, Phone } from "lucide-react"
import Link from "next/link"

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
  newsletter: z.boolean(),
  terms: z.boolean().refine(val => val === true, "You must accept the terms and conditions")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type RegisterForm = z.infer<typeof registerSchema>

export default function RegisterPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      newsletter: true,
      terms: false
    }
  })

  const onSubmit = async (data: RegisterForm) => {
    setLoading(true)
    try {
      // Mock registration API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Store user session (in real app, use proper auth)
      localStorage.setItem('user', JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        subscribed: data.newsletter,
        registeredAt: new Date().toISOString()
      }))

      toast.success("Account created successfully!")
      router.push('/dashboard')
    } catch (error) {
      toast.error("Failed to create account. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-crypto-pattern">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
              <p className="text-muted-foreground">
                Join CoinsCiphers to access premium insights
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Full name"
                      className="pl-10"
                      {...form.register("name")}
                      disabled={loading}
                    />
                  </div>
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-sm">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Email address"
                      className="pl-10"
                      {...form.register("email")}
                      disabled={loading}
                    />
                  </div>
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="tel"
                      placeholder="Phone number"
                      className="pl-10"
                      {...form.register("phone")}
                      disabled={loading}
                    />
                  </div>
                  {form.formState.errors.phone && (
                    <p className="text-red-500 text-sm">
                      {form.formState.errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="password"
                      placeholder="Password"
                      className="pl-10"
                      {...form.register("password")}
                      disabled={loading}
                    />
                  </div>
                  {form.formState.errors.password && (
                    <p className="text-red-500 text-sm">
                      {form.formState.errors.password.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="password"
                      placeholder="Confirm password"
                      className="pl-10"
                      {...form.register("confirmPassword")}
                      disabled={loading}
                    />
                  </div>
                  {form.formState.errors.confirmPassword && (
                    <p className="text-red-500 text-sm">
                      {form.formState.errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      {...form.register("newsletter")}
                      disabled={loading}
                    />
                    <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                      Subscribe to our newsletter for crypto insights
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      {...form.register("terms")}
                      disabled={loading}
                    />
                    <label htmlFor="terms" className="text-sm text-muted-foreground">
                      I agree to the{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  {form.formState.errors.terms && (
                    <p className="text-red-500 text-sm">
                      {form.formState.errors.terms.message}
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                  Create Account
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" disabled={loading}>
                  Google
                </Button>
                <Button variant="outline" disabled={loading}>
                  GitHub
                </Button>
              </div>

              <div className="text-center text-sm">
                <span className="text-muted-foreground">Already have an account? </span>
                <Link href="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
