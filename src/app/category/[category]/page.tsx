import { notFound } from "next/navigation"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { getArticlesByCategory, type Article } from "@/lib/articleData"
import CategoryClientContent from "./CategoryClientContent"

type Props = {
  params: Promise<{ category: string }>
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const articles = getArticlesByCategory(category.toUpperCase())
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1)

  if (articles.length === 0) {
    return (
      <div className="min-h-screen bg-crypto-pattern">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <CategoryClientContent 
            articles={articles} 
            categoryName={categoryName} 
            isEmpty={true}
          />
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-crypto-pattern">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <CategoryClientContent 
          articles={articles} 
          categoryName={categoryName} 
          isEmpty={false}
        />
      </main>
      <Footer />
    </div>
  )
}
