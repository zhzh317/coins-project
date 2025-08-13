import { notFound } from "next/navigation"
import { getArticleBySlug, getRelatedArticles } from "@/lib/articleData"
import type { Metadata, ResolvingMetadata } from 'next'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import AdBanner from "@/components/AdBanner"
import ArticleClientContent from "./ArticleClientContent"

type Props = {
  params: { slug: string }
}

const ad = {
  href: "https://shrinkme.io/ref/Hunteruer",
  title: "Make short links and earn the biggest money",
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  // Optionally, you can fall back to the main title
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription || article.excerpt,
    openGraph: {
      images: [article.image, ...previousImages],
    },
  }
}

export default function ArticlePage({ params }: Props) {
  const slug = params.slug
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(slug, article.category, 3)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ArticleClientContent 
          article={article} 
          relatedArticles={relatedArticles}
        />
      </main>
      <Footer />
    </div>
  )
}
