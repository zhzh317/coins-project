"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Menu, Search, User, LogOut, Settings, BookmarkPlus } from "lucide-react"
import { toast } from "sonner"
import { useAuth } from "@/contexts/AuthContext"

const navigationItems = [
  { name: "Online Casino", href: "/category/casino" },
  { name: "Metamask Guides", href: "/category/metamask" },
  { name: "Reviews", href: "/category/reviews" },
  { name: "Comparisons", href: "/category/comparisons" },
  { name: "Investing", href: "/category/investing" },
  { name: "Stocks", href: "/category/stocks" },
  { name: "Predictions", href: "/category/predictions" },
  { name: "Explained", href: "/category/explained" },
  { name: "Diamonds", href: "/category/diamonds" }
]

interface UserData {
  name: string
  email: string
  subscribed: boolean
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { user, loading, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // Check for user data in localStorage
    const userData = localStorage.getItem('user')
    if (userData) {
      // This useEffect is now handled by useAuth, but keeping it for now
      // as it might be useful for other parts of the app.
      // setUser(JSON.parse(userData))
    }

    // Listen for storage changes (logout from other tabs)
    const handleStorageChange = () => {
      const userData = localStorage.getItem('user')
      // This useEffect is now handled by useAuth, but keeping it for now
      // as it might be useful for other parts of the app.
      // setUser(userData ? JSON.parse(userData) : null)
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
    }
  }

  return (
    <header className="border-b border-border/40 backdrop-blur-sm bg-background/30 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => router.push('/')}>
            <div className="relative w-8 h-8">
              <div className="w-full h-full bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">C</span>
              </div>
            </div>
            <div className="text-xl font-bold">
              <span className="text-foreground">COINS</span>
              <span className="text-primary">CIPHERS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  router.push(item.href)
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Search and User Menu */}
          <div className="flex items-center space-x-4">
            {/* Search Form */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pr-10"
                />
                <Button
                  type="submit"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </form>

            {/* Mobile Search Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => router.push('/search')}
            >
              <Search className="h-4 w-4" />
            </Button>

            {/* User Menu */}
            {loading ? (
              <div className="h-10 w-24 animate-pulse rounded-md bg-muted"></div>
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {user.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => router.push('/dashboard')}>
                    <User className="mr-2 h-4 w-4" />
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push('/dashboard')}>
                    <BookmarkPlus className="mr-2 h-4 w-4" />
                    Saved Articles
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push('/dashboard')}>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => router.push('/login')}>
                    Sign In
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push('/register')}>
                    Register
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="mb-6">
                  <div className="relative">
                    <Input
                      type="search"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pr-10"
                    />
                    <Button
                      type="submit"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </form>

                {/* User Info in Mobile Menu */}
                {user && (
                  <div className="mb-6 p-4 bg-card rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {user.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                  </div>
                )}

                <nav className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                      onClick={(e) => {
                        e.preventDefault()
                        router.push(item.href)
                        setIsOpen(false)
                      }}
                    >
                      {item.name}
                    </a>
                  ))}

                  {user ? (
                    <>
                      <hr className="my-4" />
                      <a
                        href="/dashboard"
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        Dashboard
                      </a>
                      <button
                        onClick={() => {
                          logout()
                          setIsOpen(false)
                        }}
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2 text-left"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <hr className="my-4" />
                      <a
                        href="/login"
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign In
                      </a>
                      <a
                        href="/register"
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        Register
                      </a>
                    </>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
