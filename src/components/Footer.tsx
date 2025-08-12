import { Button } from "@/components/ui/button"

const footerCategories = {
  "Categories": [
    "News",
    "MetaMask Guides",
    "Predictions",
    "Stocks",
    "Investing",
    "Reviews",
    "Comparisons",
    "Defi",
    "Crypto Staking Calculator (APY)"
  ],
  "CoinsCiphers": [
    "About us",
    "Contact Us",
    "Sitemap",
    "Privacy Policy",
    "Advertise"
  ]
}

const topGuides = [
  "Add SpongeV2 to MetaMask",
  "Green Bitcoin Price",
  "Add SEI To MetaMask",
  "Uphold Vault Review",
  "Add Celestia To Metamask",
  "Buy Boston Dynamics Stock",
  "How to Buy OpenAI Stocks",
  "MetaMask Review",
  "How to Buy Dogecoin on Etoro"
]

export function Footer() {
  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-border/40 mt-20">


      {/* Main Footer Content */}
      <div className="border-t border-border/40">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">C</span>
                </div>
                <div className="text-xl font-bold">
                  <span className="text-foreground">COINS</span>
                  <span className="text-primary">CIPHERS</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                CoinsCiphers is a notable platform dedicated to providing current
                cryptocurrency news, analysis, and trends. Offering an array of
                informative guides and articles on topics like DeFi, MetaMask, NFTs,
                and notable cryptocurrency exchanges, it serves as a reputable
                source for crypto-enthusiasts to stay updated and educated in the
                fast-evolving crypto space.
              </p>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Contact us: <a href="mailto:info@coinsciphers.com" className="text-primary hover:underline">info@coinsciphers.com</a>
                </p>
              </div>
            </div>

            {/* Categories and CoinsCiphers Links */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(footerCategories).map(([title, links]) => (
                  <div key={title}>
                    <h4 className="font-bold text-lg mb-4">{title}</h4>
                    <ul className="space-y-3">
                      {links.map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Guides */}
            <div className="lg:col-span-1">
              <h4 className="font-bold text-lg mb-4">Top Guides</h4>
              <ul className="space-y-3">
                {topGuides.map((guide) => (
                  <li key={guide}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {guide}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border/40">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>©2025 Coinsciphers. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
