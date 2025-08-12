import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User } from "lucide-react"
import Image from "next/image"

const categories = [
  "Diamonds", "Investing", "Stocks", "Reviews", "Metamask Guides", "Comparison", "Predictions"
]

const guides = [
  {
    title: "Mortgage Cost Estimator: Calculate Your Monthly Mortgage Payments",
    image: "https://ext.same-assets.com/659829736/1180356349.webp",
    author: "COINSCIPHERS EDITORS",
    date: "August 1, 2025",
    category: "INVESTING"
  },
  {
    title: "Will Dogecoin Hit $1?",
    image: "https://ext.same-assets.com/659829736/3332280603.webp",
    author: "COINSCIPHERS EDITORS",
    date: "July 28, 2025",
    category: "PREDICTIONS"
  },
  {
    title: "XRP Ledger: The Fast, Scalable Blockchain Challenging the Old Guard of Global Finance",
    image: "https://ext.same-assets.com/659829736/3209178164.webp",
    author: "COINSCIPHERS EDITORS",
    date: "July 25, 2025",
    category: "EXPLAINED"
  },
  {
    title: "Real-Time Crypto Market Intelligence: Why Polygon is a Game-Changer for Traders",
    image: "https://ext.same-assets.com/659829736/1188237175.png",
    author: "COINSCIPHERS EDITORS",
    date: "June 18, 2025",
    category: "INVESTING"
  },
  {
    title: "What is Poker Rake: The House's Cut Explained",
    image: "https://ext.same-assets.com/659829736/1188965651.webp",
    author: "COINSCIPHERS EDITORS",
    date: "July 26, 2025",
    category: "EXPLAINED"
  },
  {
    title: "Guide: Buy $Trump Coin In Current Worth (7$-33$)",
    image: "https://ext.same-assets.com/659829736/4041471982.png",
    author: "COINSCIPHERS EDITORS",
    date: "January 19, 2025",
    category: "INVESTING"
  }
]

export function ResearchGuides() {
  return (
    <section className="py-16">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <Card key={index} className="group hover:scale-105 transition-transform duration-300 bg-card/60 backdrop-blur-sm border-border/50 overflow-hidden">
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
