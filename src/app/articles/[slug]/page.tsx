"use client"

import { useParams } from "next/navigation"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Clock } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { allArticles, getArticleBySlug, getRelatedArticles } from "@/lib/articleData"

export default function ArticlePage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const article = getArticleBySlug(slug)

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
            <Button onClick={() => router.push('/')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Get related articles (exclude current article)
  const relatedArticles = getRelatedArticles(slug, article.category, 3)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

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
        <div className="max-w-4xl mx-auto">
          {/* Article Content - For now showing placeholder as content field is empty */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            {article.content ? (
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            ) : (
              <div className="space-y-6">
                <p className="text-lg">
                  This is a comprehensive article about {article.title.toLowerCase()}.
                  Our team of experts has carefully researched and compiled the most relevant
                  information to help you understand this topic thoroughly.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
                <p>
                  {article.excerpt} This guide will walk you through everything you need to know
                  about this important topic in the cryptocurrency and finance space.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Key Points</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Comprehensive analysis and insights</li>
                  <li>Step-by-step guidance when applicable</li>
                  <li>Expert recommendations and best practices</li>
                  <li>Real-world examples and case studies</li>
                  <li>Latest market trends and developments</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                <p>
                  Understanding the concepts covered in this article is crucial for anyone
                  interested in cryptocurrency and financial markets. Stay informed with our
                  latest updates and guides to make better investment decisions.
                </p>

                <div className="bg-card/50 border rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold mb-2">💡 Expert Tip</h3>
                  <p className="text-muted-foreground">
                    Always do your own research and consider consulting with financial advisors
                    before making investment decisions. The cryptocurrency market is highly volatile
                    and involves significant risk.
                  </p>
                </div>
              </div>
            )}
          </div>

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
      </main>

      <Footer />
    </div>
  )
}
