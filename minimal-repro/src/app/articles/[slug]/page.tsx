import { getArticleBySlug, getRelatedArticles } from "@/lib/articleData";
import { notFound } from "next/navigation";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
import ArticleClientContent from "./ArticleClientContent";

type Props = {
  params: { slug: string };
};

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(params.slug, article.category, 3);

  return (
    <div className="bg-background min-h-screen">
      {/* <Header /> */}
      <main className="container mx-auto px-4 py-8">
        <ArticleClientContent article={article} relatedArticles={relatedArticles} />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
