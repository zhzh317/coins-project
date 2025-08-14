"use client"
import { notFound } from "next/navigation"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { getArticlesByCategory, type Article } from "@/lib/articleData"
import AdBanner from "@/components/AdBanner"

type Props = {
  params: { category: string }
}

const ad = {
  href: "https://shrinkme.io/ref/Hunteruer",
  title: "Make short links and earn the biggest money",
};

const categoryTitles: Record<string, string> = {
  investing: "Investing Guides",
  metamask: "MetaMask Guides",
  stocks: "Stock Trading",
  predictions: "Price Predictions",
  reviews: "Reviews",
  comparisons: "Comparisons",
  explained: "Explained",
  diamonds: "Diamond Trading",
  casino: "Online Casino"
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const router = useRouter()
  const articles = getArticlesByCategory(params.category.toUpperCase())
  const categoryName = params.category.charAt(0).toUpperCase() + params.category.slice(1)

  if (articles.length === 0) {
    return (
      <div className="min-h-screen bg-crypto-pattern">
        <Header />

        <main className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => router.push('/')}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          {/* Category Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {categoryName}
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our latest {categoryName.toLowerCase()} articles and guides
            </p>
          </div>

          <AdBanner
            href={ad.href}
            imgSrc="https://shrinkme.io/banners/ref/970x90.png"
            imgTitle={ad.title}
            className="mb-8"
          />

          {/* Articles Grid */}
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
            <p className="text-muted-foreground mb-6">
              We're working on adding more {categoryName.toLowerCase()} content. Check back soon!
            </p>
            <Button onClick={() => router.push('/')}>
              Browse Other Categories
            </Button>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-crypto-pattern">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => router.push('/')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {categoryName}
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore our latest {categoryName.toLowerCase()} articles and guides
          </p>
        </div>

        <AdBanner
          href={ad.href}
          imgSrc="https://shrinkme.io/banners/ref/970x90.png"
          imgTitle={ad.title}
          className="mb-8"
        />

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-transform duration-300 bg-card/60 backdrop-blur-sm border-border/50 overflow-hidden cursor-pointer"
              onClick={() => router.push(`/articles/${article.slug}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground text-xs">
                    {article.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
