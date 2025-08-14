import { getArticleBySlug, getRelatedArticles } from "@/lib/articleData";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ArticleContent from "./ArticleClientContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The article you are looking for does not exist.",
    };
  }

  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription || article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug, article.category, 3);

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ArticleContent article={article} relatedArticles={relatedArticles} />
      </main>
      <Footer />
    </div>
  );
}