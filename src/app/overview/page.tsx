import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, BookOpen, Diamond } from "lucide-react";

export const metadata = {
  title: "Overview | CoinsCiphers",
  description: "Get a complete overview of CoinsCiphers. Learn about our core values, our unique approach to market analysis, and explore our main content categories.",
};

const coreValues = [
  {
    title: "Accuracy",
    description: "Our content is meticulously researched and fact-checked by certified financial analysts and blockchain experts.",
  },
  {
    title: "Clarity",
    description: "We translate complex topics into clear, easy-to-understand language for all knowledge levels.",
  },
  {
    title: "Integrity",
    description: "Our analysis is independent and unbiased, guided solely by data and our editorial principles.",
  },
];

const contentPillars = [
  {
    icon: BarChart2,
    title: "Market Analysis",
    description: "In-depth price predictions, technical analysis, and market sentiment reports.",
    href: "/category/predictions",
  },
  {
    icon: BookOpen,
    title: "Educational Guides",
    description: "Comprehensive guides on everything from DeFi and MetaMask to stock investing.",
    href: "/category/explained",
  },
  {
    icon: Diamond,
    title: "Unique Insights",
    description: "Exploring the intersection of digital assets and tangible commodities like diamonds.",
    href: "/category/diamonds",
  },
];

export default function OverviewPage() {
  const randomImageId = Math.floor(Math.random() * 52) + 1;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">

          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">An Overview of CoinsCiphers</h1>
            <p className="text-xl text-muted-foreground">
              Your Trusted Source for Integrated Financial Intelligence
            </p>
          </section>

          <section className="mb-16">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src={`/images/${String(randomImageId).padStart(2, '0')}.jpg`}
                alt="CoinsCiphers Market Analysis"
                fill
                className="object-cover"
              />
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {coreValues.map((value) => (
                <Card key={value.title} className="text-center">
                  <CardHeader>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Content Pillars</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {contentPillars.map((pillar) => (
                <Card key={pillar.title} className="flex flex-col">
                  <CardHeader className="items-center">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <pillar.icon className="w-8 h-8 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent className="text-center flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                    <p className="text-muted-foreground flex-grow">{pillar.description}</p>
                    <Button asChild variant="ghost" className="mt-4">
                      <Link href={pillar.href}>
                        Explore <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="text-center bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Dive Deeper?</h2>
            <p className="text-muted-foreground mb-6">
              Explore our research methodology or get in touch with our team.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link href="/research">Our Research</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}

