import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const metadata = {
  title: "About Us | CoinsCiphers",
  description: "Learn more about CoinsCiphers, your trusted source for cryptocurrency news, analysis, and educational guides. Discover our mission, our team, and our commitment to the crypto community.",
};

const teamMembers = [
  {
    name: "Alex Mason",
    role: "Founder & Chief Editor",
    avatar: "/images/avatars/alex.jpg",
    bio: "With over a decade of experience in financial markets and a passion for decentralized technology, Alex founded CoinsCiphers to demystify the world of crypto and empower investors with knowledge."
  },
  {
    name: "Jane Doe",
    role: "Lead Analyst & Journalist",
    avatar: "/images/avatars/jane.jpg",
    bio: "Jane is a seasoned journalist with a sharp eye for market trends. She specializes in in-depth analysis of blockchain projects and regulatory news, providing readers with timely and actionable insights."
  },
  {
    name: "Sam Wilson",
    role: "Technical Writer & SEO Specialist",
    avatar: "/images/avatars/sam.jpg",
    bio: "Sam breaks down complex technical topics into easy-to-understand guides. His expertise in SEO ensures that our valuable content reaches a global audience of crypto enthusiasts."
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">

          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About CoinsCiphers</h1>
            <p className="text-xl text-muted-foreground">
              Your Compass in the World of Cryptocurrency
            </p>
          </section>

          <section className="mb-16">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/about-hero.jpg"
                alt="CoinsCiphers Team Collaboration"
                fill
                className="object-cover"
              />
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 text-center">
              <p>
                In the fast-paced and often-confusing world of cryptocurrency, clarity is the most valuable asset. Our mission at <a href="https://coinsciphers.com/">CoinsCiphers</a> is to be your trusted guide, providing clear, accurate, and timely information to help you navigate the digital finance landscape. We believe that by simplifying complex topics and offering unbiased analysis, we can empower our readers to make informed decisions and confidently participate in the crypto revolution.
              </p>
              <p>
                We are dedicated to becoming the leading <a href="https://coinsciphers.com/">crypto news</a> platform, offering everything from breaking news and market analysis to educational guides on <a href="https://coinsciphers.com/">blockchain technology</a>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-12 text-center">Meet the Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  )
}


