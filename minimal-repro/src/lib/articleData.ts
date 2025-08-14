export interface Article {
  id: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export const allArticles: Article[] = [
  {
    id: "1",
    title: "Guide: Buy $Trump Coin In Current Worth (7$-33$)",
    metaTitle: "How to Buy $TRUMP Coin (MAGA Coin) - Complete Guide 2025",
    metaDescription: "Learn how to buy $TRUMP Coin (MAGA Coin) with our comprehensive guide. Understand the current market value, risks, and steps to purchase this meme coin.",
    excerpt: "Complete guide to buying Trump Coin with current market analysis and price predictions.",
    content: `<h3>Understanding the MAGA (TRUMP) Coin Phenomenon</h3>`,
    category: "INVESTING",
    author: "COINSCIPHERS EDITORS",
    date: "January 19, 2025",
    image: "/images/01.jpg",
    readTime: "5 min read",
    tags: ["trump coin", "meme coin", "cryptocurrency", "defi", "investing"],
    slug: "trump-coin-guide"
  }
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return allArticles.find(article => article.slug === slug);
};

export const getRelatedArticles = (currentSlug: string, category: string, limit: number = 3): Article[] => {
  return allArticles
    .filter(article =>
      article.slug !== currentSlug &&
      article.category === category
    )
    .slice(0, limit);
};
