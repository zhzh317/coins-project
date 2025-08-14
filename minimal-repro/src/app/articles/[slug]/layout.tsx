import { getArticleBySlug } from "@/lib/articleData";
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: Promise<ResolvingMetadata>
): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription || article.excerpt,
  };
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
