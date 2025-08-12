"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import {
  User,
  Mail,
  Phone,
  Settings,
  BookmarkPlus,
  TrendingUp,
  Calendar,
  Bell,
  LogOut,
  Edit
} from "lucide-react"

interface UserData {
  name: string
  email: string
  phone?: string
  subscribed: boolean
  registeredAt?: string
}

export default function DashboardPage() {
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      router.push('/login')
      return
    }
    setLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('user')
    toast.success("Successfully logged out!")
    router.push('/')
  }

  const handleSubscriptionToggle = () => {
    if (user) {
      const updatedUser = { ...user, subscribed: !user.subscribed }
      setUser(updatedUser)
      localStorage.setItem('user', JSON.stringify(updatedUser))
      toast.success(updatedUser.subscribed ? "Subscribed to newsletter!" : "Unsubscribed from newsletter!")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-crypto-pattern">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">Loading...</div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-crypto-pattern">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Dashboard Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
                <p className="text-muted-foreground">
                  Manage your account and stay updated with crypto insights
                </p>
              </div>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-card/60 backdrop-blur-sm border-border/50">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Account Status</CardTitle>
                    <User className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-400">Active</div>
                    <p className="text-xs text-muted-foreground">
                      Member since {user.registeredAt ? new Date(user.registeredAt).toLocaleDateString() : 'Recently'}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/60 backdrop-blur-sm border-border/50">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Newsletter</CardTitle>
                    <Mail className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {user.subscribed ? (
                        <span className="text-green-400">Subscribed</span>
                      ) : (
                        <span className="text-red-400">Unsubscribed</span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Daily crypto insights
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/60 backdrop-blur-sm border-border/50">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Saved Articles</CardTitle>
                    <BookmarkPlus className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">
                      Bookmarked guides
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card className="bg-card/60 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm">Subscribed to newsletter</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm">Saved article: "Will Dogecoin Hit $1?"</p>
                        <p className="text-xs text-muted-foreground">1 day ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm">Account created</p>
                        <p className="text-xs text-muted-foreground">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <Card className="bg-card/60 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-20 h-20">
                      <AvatarFallback className="text-2xl">
                        {user.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">{user.name}</h3>
                      <p className="text-muted-foreground">{user.email}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Photo
                    </Button>
                  </div>

                  <Separator />

                  <div className="grid gap-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label className="text-sm font-medium">Name</label>
                      <Input value={user.name} className="col-span-3" readOnly />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label className="text-sm font-medium">Email</label>
                      <Input value={user.email} className="col-span-3" readOnly />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label className="text-sm font-medium">Phone</label>
                      <Input value={user.phone || "Not provided"} className="col-span-3" readOnly />
                    </div>
                  </div>

                  <Button>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Subscriptions Tab */}
            <TabsContent value="subscriptions" className="space-y-6">
              <Card className="bg-card/60 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle>Newsletter Subscriptions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <h4 className="font-medium">Daily Crypto Newsletter</h4>
                      <p className="text-sm text-muted-foreground">
                        Get daily insights on cryptocurrency trends and market analysis
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge variant={user.subscribed ? "default" : "secondary"}>
                        {user.subscribed ? "Subscribed" : "Unsubscribed"}
                      </Badge>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleSubscriptionToggle}
                      >
                        {user.subscribed ? "Unsubscribe" : "Subscribe"}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg opacity-60">
                    <div className="space-y-1">
                      <h4 className="font-medium">Weekly Market Report</h4>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive weekly analysis and predictions (Premium)
                      </p>
                    </div>
                    <Badge variant="outline">Premium Only</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <Card className="bg-card/60 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Email Notifications</h4>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications about account activity
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Bell className="w-4 h-4 mr-2" />
                        Configure
                      </Button>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Privacy Settings</h4>
                        <p className="text-sm text-muted-foreground">
                          Manage your privacy and data settings
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Settings className="w-4 h-4 mr-2" />
                        Manage
                      </Button>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-red-500">Delete Account</h4>
                        <p className="text-sm text-muted-foreground">
                          Permanently delete your account and all data
                        </p>
                      </div>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
