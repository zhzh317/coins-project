import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { allArticles } from "@/lib/articleData";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Our Research | CoinsCiphers",
  description: "Explore the proprietary research methodology that powers CoinsCiphers. Learn how our team of experts analyzes market data to deliver actionable insights.",
};

const researchPrinciples = [
  {
    title: "Data-Driven Analysis",
    description: "Our forecasts and reports are built on a foundation of quantitative data, including on-chain metrics, market sentiment, and macroeconomic indicators.",
  },
  {
    title: "Qualitative Expertise",
    description: "We combine data with the insights of our certified financial analysts and blockchain specialists who understand the nuances of the technology.",
  },
  {
    title: "Transparent Methodology",
    description: "We believe in showing our work. Our analyses are accompanied by clear explanations of the models and assumptions we use.",
  },
];

export default function ResearchPage() {
  const researchArticles = allArticles.filter(article => 
    article.category === "PREDICTIONS" || article.category === "REVIEWS" || article.category === "COMPARISONS"
  ).slice(0, 6);

  const randomImageId = Math.floor(Math.random() * 52) + 1;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">

          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Research Methodology</h1>
            <p className="text-xl text-muted-foreground">
              Combining Advanced Analytics with Expert Insight
            </p>
          </section>

          <section className="mb-16">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src={`/images/${String(randomImageId).padStart(2, '0')}.jpg`}
                alt="Data analysis and research"
                fill
                className="object-cover"
              />
            </div>
          </section>

          <section className="mb-16">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                At <a href="https://coinsciphers.com/">CoinsCiphers</a>, our reputation is built on the quality and reliability of our research. We utilize a proprietary methodology that blends advanced data analytics with the nuanced expertise of our financial and blockchain specialists. Our goal is to provide our readers with a clear, unbiased, and actionable understanding of the digital asset landscape.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Core Principles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {researchPrinciples.map((principle) => (
                <Card key={principle.title}>
                  <CardHeader>
                    <CardTitle>{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Research & Analysis</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {researchArticles.map(article => (
                <Link key={article.slug} href={`/articles/${article.slug}`} className="block group">
                  <Card className="h-full overflow-hidden group-hover:border-primary transition-colors">
                    <div className="relative h-48">
                       <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="mb-2">{article.category}</Badge>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{article.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{article.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
                <Button asChild>
                    <Link href="/category/predictions">Explore More Research</Link>
                </Button>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}


