"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Clock } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import AdBanner from "@/components/AdBanner"
import { type Article } from "@/lib/articleData"

interface ArticleClientContentProps {
  article: Article
  relatedArticles: Article[]
}

const ad = {
  href: "https://shrinkme.io/ref/Hunteruer",
  title: "Make short links and earn the biggest money",
};

export default function ArticleClientContent({ article, relatedArticles }: ArticleClientContentProps) {
  const router = useRouter()

  return (
    <>
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      {/* Ad Banner 1 */}
      <AdBanner
        href={ad.href}
        imgSrc="https://shrinkme.io/banners/ref/970x250.png"
        imgTitle={ad.title}
        className="mb-8"
      />

      <div className="max-w-4xl mx-auto">
        {/* Article Header */}
        <div className="mb-8">
          <div className="mb-4">
            <Badge className="bg-primary text-primary-foreground">
              {article.category}
            </Badge>
          </div>

          <h1 className="text-4xl font-bold mb-4 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            {article.excerpt}
          </p>

          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <div
          className="prose prose-lg dark:prose-invert max-w-none mb-12 space-y-6"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Card
                  key={relatedArticle.slug}
                  className="group hover:scale-105 transition-transform duration-300 bg-card/60 backdrop-blur-sm border-border/50 overflow-hidden cursor-pointer"
                  onClick={() => router.push(`/articles/${relatedArticle.slug}`)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground text-xs">
                        {relatedArticle.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {relatedArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <User className="w-3 h-3" />
                        <span>{relatedArticle.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3" />
                        <span>{relatedArticle.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
