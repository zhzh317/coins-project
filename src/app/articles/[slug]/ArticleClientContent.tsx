"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Clock } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import AdBanner from "@/components/AdBanner"
import { type Article } from "@/lib/articleData"
import Link from "next/link";

interface ArticleClientContentProps {
  article: Article
  relatedArticles: Article[]
}

export default function ArticleClientContent({ article, relatedArticles }: ArticleClientContentProps) {
  const router = useRouter()

  return (
    <div className="grid lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <article>
          <div className="mb-8">
            <Badge className="bg-primary text-primary-foreground mb-4">
              {article.category}
            </Badge>
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
                <span>{article.readTime} min read</span>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div
            className="prose prose-lg dark:prose-invert max-w-none mb-12 space-y-6"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="flex flex-wrap gap-2 mb-12">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </article>
      </div>

      <aside className="lg:col-span-1 space-y-8 sticky top-24 self-start">
        {relatedArticles.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="space-y-6">
              {relatedArticles.map((relatedArticle) => (
                <Link key={relatedArticle.id} href={`/articles/${relatedArticle.slug}`} className="group block">
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary">
                    <div className="relative h-40">
                      <Image
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-md mb-2 line-clamp-2 group-hover:text-primary">
                        {relatedArticle.title}
                      </h3>
                      <div className="text-xs text-muted-foreground flex items-center space-x-2">
                        <Calendar className="w-3 h-3" />
                        <span>{relatedArticle.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
        {/* <AdBanner 
          href="https://shrinkme.io/ref/Hunteruer"
          imgSrc="https://shrinkme.io/banners/ref/970x90.png"
          imgTitle="Make short links and earn the biggest money"
        /> */}
      </aside>
    </div>
  )
}
