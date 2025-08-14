"use client"

// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Calendar, User, ArrowLeft, Clock } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
// import AdBanner from "@/components/AdBanner"
import { type Article } from "@/lib/articleData"
import Link from "next/link";

interface ArticleClientContentProps {
  article: Article
  relatedArticles: Article[]
}

export default function ArticleClientContent({ article, relatedArticles }: ArticleClientContentProps) {
  const router = useRouter()

  return (
    <div>
      <button onClick={() => router.back()}>Back</button>

      <article>
        <h1>{article.title}</h1>
        <p>{article.excerpt}</p>
        <div>
          <span>{article.author}</span>
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>

        <div dangerouslySetInnerHTML={{ __html: article.content }} />

        <div>
          {article.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </article>

      <aside>
        {relatedArticles.length > 0 && (
          <section>
            <h2>Related Articles</h2>
            <div>
              {relatedArticles.map((relatedArticle) => (
                <Link key={relatedArticle.id} href={`/articles/${relatedArticle.slug}`}>
                  <div>
                    <h3>{relatedArticle.title}</h3>
                    <div>
                      <span>{relatedArticle.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
        {/* <AdBanner /> */}
      </aside>
    </div>
  )
}
