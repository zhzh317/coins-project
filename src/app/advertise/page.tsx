import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Advertise with CoinsCiphers",
  description: "Reach a targeted audience of crypto enthusiasts, investors, and developers. Explore advertising opportunities with CoinsCiphers, including sponsored content, banner ads, and more.",
};

const audienceStats = [
  { metric: "Monthly Visitors", value: "500,000+" },
  { metric: "Social Followers", value: "1.2 Million" },
  { metric: "Primary Audience", value: "Crypto Investors & Enthusiasts" },
  { metric: "Avg. Engagement Rate", value: "12%" },
];

const adOptions = [
  "Sponsored Articles & Reviews",
  "Banner Advertising (Display Ads)",
  "Newsletter Sponsorships",
  "Press Release Distribution",
  "Social Media Campaigns",
  "Custom Partnership Packages"
];

export default function AdvertisePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Advertise with Us</h1>
            <p className="text-xl text-muted-foreground">
              Connect with a rapidly growing community of cryptocurrency enthusiasts and investors.
            </p>
          </section>

          <section className="mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Our Audience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  {audienceStats.map(stat => (
                    <div key={stat.metric}>
                      <p className="text-3xl font-bold text-primary">{stat.value}</p>
                      <p className="text-muted-foreground">{stat.metric}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Partner with CoinsCiphers?</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                At <a href="https://coinsciphers.com/">CoinsCiphers</a>, we are more than just a news outlet; we are a trusted resource in the cryptocurrency space. Our readers rely on us for accurate, in-depth, and accessible content. By advertising with us, you gain direct access to a highly engaged and targeted audience that is actively seeking information on <a href="https://coinsciphers.com/">crypto projects</a>, trading platforms, and financial tools.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Advertising Solutions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {adOptions.map(option => (
                <div key={option} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg">{option}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              Let's create a campaign that meets your goals. Contact our advertising team to discuss your needs and receive a custom quote.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}


