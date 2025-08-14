import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { allArticles, getArticlesByCategory } from "@/lib/articleData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Sitemap | CoinsCiphers",
  description: "Explore the structure of CoinsCiphers. Find links to all our main pages, article categories, and top guides to easily navigate our content.",
};

const mainPages = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Advertise", href: "/advertise" },
];

const categories = [
  { name: "News", slug: "news" },
  { name: "MetaMask Guides", slug: "metamask" },
  { name: "Predictions", slug: "predictions" },
  { name: "Stocks", slug: "stocks" },
  { name: "Investing", slug: "investing" },
  { name: "Reviews", slug: "reviews" },
  { name: "Comparisons", slug: "comparisons" },
  { name: "Explained", slug: "explained" },
  { name: "Diamonds", slug: "diamonds" },
  { name: "Casino", slug: "casino" },
  { name: "Defi", slug: "defi" },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sitemap</h1>
            <p className="text-xl text-muted-foreground">
              A complete guide to all the content on CoinsCiphers.
            </p>
          </section>

          <div className="space-y-12">
            {/* Main Pages */}
            <Card>
              <CardHeader>
                <CardTitle>Main Pages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {mainPages.map((page) => (
                    <li key={page.href}>
                      <Link href={page.href} className="text-primary hover:underline">
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Article Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Article Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {categories.map((category) => (
                    <div key={category.slug}>
                      <h3 className="font-bold text-lg mb-2">
                        <Link href={`/category/${category.slug}`} className="text-primary hover:underline">
                          {category.name}
                        </Link>
                      </h3>
                      <ul className="space-y-1 list-disc list-inside">
                        {getArticlesByCategory(category.slug.toUpperCase()).slice(0, 5).map(article => (
                          <li key={article.slug}>
                            <Link href={`/articles/${article.slug}`} className="text-muted-foreground hover:text-primary transition-colors">
                              {article.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* All Articles */}
            <Card>
              <CardHeader>
                <CardTitle>All Articles ({allArticles.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 columns-1 md:columns-2">
                  {allArticles.map((article) => (
                    <li key={article.slug}>
                      <Link href={`/articles/${article.slug}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
