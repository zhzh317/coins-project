"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { allArticles } from "@/lib/articleData"

const categories = [
  "Diamonds", "Investing", "Stocks", "Reviews", "Metamask", "Comparisons", "Predictions"
]

// Display a curated list of guides on the homepage
const featuredGuides = allArticles.filter(article => 
  ["will-dogecoin-hit-1-dollar", "defi-vs-cefi-comparison", "trump-coin-guide", "ravencoin-price-prediction", "metamask-security-guide", "diamond-investment-guide"].includes(article.slug)
).slice(0, 6);


export function ResearchGuides() {
  const router = useRouter()

  return (
    <section>
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Research & Guides</h2>
          <p className="text-muted-foreground">
            Latest published guides about cryptocurrencies, assets, stocks & more!
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredGuides.map((guide, index) => (
            <Card 
              key={index} 
              className="group hover:scale-105 transition-transform duration-300 bg-card/60 backdrop-blur-sm border-border/50 overflow-hidden cursor-pointer"
              onClick={() => router.push(`/articles/${guide.slug}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {guide.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{guide.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{guide.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
