import { Button } from "@/components/ui/button"

const tabs = [
  { id: "why-us", label: "Why Us", active: true },
  { id: "about-us", label: "About Us", active: false },
  { id: "overview", label: "Overview", active: false },
  { id: "research", label: "Research", active: false }
]

export function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-4 mb-8">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={tab.active ? "default" : "outline"}
              className={tab.active ? "bg-primary text-primary-foreground" : ""}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-6">
            Why To Choose coinsciphers.com as Your Source?
          </h2>

          <div className="text-muted-foreground space-y-4 leading-relaxed">
            <p>
              At Coinsciphers, we pride ourselves on delivering unparalleled insights across
              the interconnected worlds of cryptocurrency, traditional finance, and the diamond
              industry. Our team of certified financial analysts, blockchain specialists, and
              gemological experts offers a unique perspective that bridges these seemingly
              disparate fields. We provide nuanced interpretations of market movements,
              leveraging advanced analytics and proprietary algorithms to deliver accurate,
              actionable intelligence.
            </p>

            <p>
              From Bitcoin and emerging <strong>DeFi projects</strong> to the intricacies of
              diamond valuation and its impact on digital assets, our comprehensive coverage
              ensures you're always ahead of the curve. Whether you're exploring crypto-backed
              diamond investments or seeking to understand how global financial trends affect
              digital currencies, our easy-to-understand yet in-depth analyses cater to all
              knowledge levels.
            </p>

            <p>
              Join our community of informed enthusiasts and professionals, and gain the
              Coinsciphers edge in navigating the complex landscape of modern finance and
              digital assets.
            </p>
          </div>

          {/* Methodology Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Methodology & Industry Recognition</h3>
            <div className="text-muted-foreground space-y-4">
              <p>
                Trusted by over <strong>220,000 monthly readers</strong>, Coinsciphers'
                newsletter is your daily dose of crypto intelligence. Our content is
                meticulously researched, fact-checked, and updated to ensure you receive
                the most reliable information in the fast-paced world of digital assets.
                Read our <strong>Editorial Guidelines</strong> for more information.
              </p>

              <p>
                Don't just take our word for it - read our <strong>transparent methodology</strong> and
                see why leading crypto exchanges and blockchain projects regularly cite our analyses.
              </p>

              <p>
                For more information please read the <strong>About Us page</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
