"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { allArticles, getArticlesByCategory } from "@/lib/articleData"

const sectionData = [
  {
    title: "Investing",
    icon: "📈",
    viewAllLink: "/category/investing",
    category: "INVESTING"
  },
  {
    title: "MetaMask Guides",
    icon: "🦊",
    viewAllLink: "/category/metamask",
    category: "METAMASK"
  },
  {
    title: "Reviews",
    icon: "⭐",
    viewAllLink: "/category/reviews",
    category: "REVIEWS"
  },
  {
    title: "Comparisons",
    icon: "⚖️",
    viewAllLink: "/category/comparisons",
    category: "COMPARISONS"
  },
  {
    title: "Online Casino",
    icon: "🎰",
    viewAllLink: "/category/casino",
    category: "CASINO"
  },
  {
    title: "Explained",
    icon: "💡",
    viewAllLink: "/category/explained",
    category: "EXPLAINED"
  },
  {
    title: "Diamond Investment",
    icon: "💎",
    viewAllLink: "/category/diamonds",
    category: "DIAMONDS"
  }
]

export function ContentSections() {
  const router = useRouter()

  return (
    <div className="space-y-12">
      {sectionData.map((section, sectionIndex) => {
        const categoryArticles = getArticlesByCategory(section.category).slice(0, 3)

        return (
          <section key={sectionIndex}>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xl">{section.icon}</span>
                </div>
                <h2 className="text-2xl font-bold">{section.title}</h2>
              </div>
              <Button
                variant="outline"
                className="group"
                onClick={() => router.push(section.viewAllLink)}
              >
                All {section.title} Guides
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryArticles.map((article, articleIndex) => (
                <Card
                  key={articleIndex}
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
                    <h3 className="font-bold text-lg mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
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
          </section>
        )
      })}
    </div>
  )
}
