import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  "Categories": [
    { name: "News", href: "/category/news" },
    { name: "MetaMask Guides", href: "/category/metamask" },
    { name: "Predictions", href: "/category/predictions" },
    { name: "Stocks", href: "/category/stocks" },
    { name: "Investing", href: "/category/investing" },
    { name: "Reviews", href: "/category/reviews" },
    { name: "Comparisons", href: "/category/comparisons" },
    { name: "Defi", href: "/category/defi" },
    { name: "Crypto Staking Calculator (APY)", href: "/calculator/staking-apy" }
  ],
  "CoinsCiphers": [
    { name: "About us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Sitemap", href: "/site-map" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Advertise", href: "/advertise" }
  ],
  "Top Guides": [
    { name: "Add SpongeV2 to MetaMask", href: "/articles/add-spongev2-to-metamask" },
    { name: "Green Bitcoin Price", href: "/articles/green-bitcoin-price-prediction" },
    { name: "Add SEI To MetaMask", href: "/articles/add-sei-to-metamask" },
    { name: "Uphold Vault Review", href: "/articles/uphold-vault-review" },
    { name: "Add Celestia To Metamask", href: "/articles/add-celestia-to-metamask" },
    { name: "Buy Boston Dynamics Stock", href: "/articles/how-to-buy-boston-dynamics-stock" },
    { name: "How to Buy OpenAI Stocks", href: "/articles/how-to-buy-openai-stocks" },
    { name: "MetaMask Review", href: "/articles/metamask-review" },
    { name: "How to Buy Dogecoin on Etoro", href: "/articles/how-to-buy-dogecoin-on-etoro" }
  ]
}

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
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Image src="/images/logo.png" alt="CoinsCiphers Logo" width={20} height={20} />
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

            {/* Links Columns */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-3 gap-8">
                {Object.entries(footerLinks).map(([title, links]) => (
                  <div key={title}>
                    <h4 className="font-bold text-lg mb-4">{title}</h4>
                    <ul className="space-y-3">
                      {links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
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
