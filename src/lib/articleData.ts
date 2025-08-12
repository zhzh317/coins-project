export interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  image: string
  readTime: string
  tags: string[]
  slug: string
}

export const allArticles: Article[] = [
  {
    id: "1",
    title: "Guide: Buy $Trump Coin In Current Worth (7$-33$)",
    excerpt: "Complete guide to buying Trump Coin with current market analysis and price predictions.",
    content: "",
    category: "INVESTING",
    author: "COINSCIPHERS EDITORS",
    date: "January 19, 2025",
    image: "https://ext.same-assets.com/659829736/602114545.png",
    readTime: "5 min read",
    tags: ["trump coin", "meme coin", "cryptocurrency", "defi", "investing"],
    slug: "trump-coin-guide"
  },
  {
    id: "2",
    title: "How to Buy Crypto with Robinhood",
    excerpt: "Step-by-step guide to purchasing cryptocurrency using the Robinhood platform.",
    content: "",
    category: "INVESTING",
    author: "MOLLY TALIOR",
    date: "April 23, 2024",
    image: "https://ext.same-assets.com/659829736/632691144.png",
    readTime: "6 min read",
    tags: ["robinhood", "cryptocurrency", "investing", "bitcoin", "trading"],
    slug: "buy-crypto-robinhood"
  },
  {
    id: "3",
    title: "How to Add ZetaChain to MetaMask Wallet",
    excerpt: "Learn how to add ZetaChain network to your MetaMask wallet in simple steps.",
    content: "",
    category: "METAMASK",
    author: "MOLLY TALIOR",
    date: "April 25, 2024",
    image: "https://ext.same-assets.com/659829736/1855264074.png",
    readTime: "4 min read",
    tags: ["zetachain", "metamask", "blockchain", "wallet", "tutorial"],
    slug: "add-zetachain-metamask"
  },
  {
    id: "4",
    title: "How to Buy Crypto with Zitraat Bank",
    excerpt: "Complete guide to purchasing cryptocurrency using Zitraat Bank services in Turkey.",
    content: "",
    category: "INVESTING",
    author: "MOLLY TALIOR",
    date: "April 30, 2024",
    image: "https://ext.same-assets.com/659829736/3743683483.png",
    readTime: "6 min read",
    tags: ["zitraat bank", "turkey", "cryptocurrency", "bitcoin", "trading"],
    slug: "buy-crypto-zitraat-bank"
  },
  {
    id: "5",
    title: "Best Cryptocurrency Investment Strategies for 2025",
    excerpt: "Comprehensive guide to the most effective cryptocurrency investment strategies for the new year.",
    content: "",
    category: "INVESTING",
    author: "COINSCIPHERS EDITORS",
    date: "January 15, 2025",
    image: "https://ext.same-assets.com/659829736/602114545.png",
    readTime: "8 min read",
    tags: ["cryptocurrency", "investment strategies", "2025", "portfolio", "defi"],
    slug: "crypto-investment-strategies-2025"
  },
  {
    id: "6",
    title: "MetaMask Security Best Practices Guide",
    excerpt: "Essential security practices to keep your MetaMask wallet and crypto assets safe.",
    content: "",
    category: "METAMASK",
    author: "MOLLY TALIOR",
    date: "January 10, 2025",
    image: "https://ext.same-assets.com/659829736/1855264074.png",
    readTime: "7 min read",
    tags: ["metamask", "security", "wallet protection", "cryptocurrency safety", "best practices"],
    slug: "metamask-security-guide"
  },
  {
    id: "7",
    title: "How to Use MetaMask with Hardware Wallets",
    excerpt: "Complete guide to connecting and using hardware wallets with MetaMask for enhanced security.",
    content: "",
    category: "METAMASK",
    author: "COINSCIPHERS EDITORS",
    date: "December 28, 2024",
    image: "https://ext.same-assets.com/659829736/1855264074.png",
    readTime: "6 min read",
    tags: ["metamask", "hardware wallet", "ledger", "trezor", "security"],
    slug: "metamask-hardware-wallet-guide"
  },
  {
    id: "8",
    title: "Best Crypto Casinos for Bitcoin Gambling in 2025",
    excerpt: "Complete guide to the top cryptocurrency casinos offering Bitcoin and altcoin gambling.",
    content: "",
    category: "CASINO",
    author: "COINSCIPHERS EDITORS",
    date: "January 12, 2025",
    image: "https://ext.same-assets.com/659829736/632691144.png",
    readTime: "7 min read",
    tags: ["crypto casino", "bitcoin gambling", "online casino", "provably fair", "cryptocurrency"],
    slug: "best-crypto-casinos-2025"
  },
  {
    id: "9",
    title: "Provably Fair Gaming: How Crypto Casinos Ensure Fairness",
    excerpt: "Understanding how blockchain technology ensures fair gaming in cryptocurrency casinos.",
    content: "",
    category: "CASINO",
    author: "MOLLY TALIOR",
    date: "December 20, 2024",
    image: "https://ext.same-assets.com/659829736/859811973.png",
    readTime: "5 min read",
    tags: ["provably fair", "crypto casino", "blockchain", "fairness", "gaming"],
    slug: "provably-fair-gaming-guide"
  },
  {
    id: "10",
    title: "Crypto Casino Bonuses: Maximizing Your Welcome Offers",
    excerpt: "Expert strategies for maximizing crypto casino bonuses and promotional offers.",
    content: "",
    category: "CASINO",
    author: "COINSCIPHERS EDITORS",
    date: "December 10, 2024",
    image: "https://ext.same-assets.com/659829736/858934483.png",
    readTime: "6 min read",
    tags: ["casino bonuses", "crypto casino", "welcome offers", "gambling strategy", "promotions"],
    slug: "crypto-casino-bonuses-guide"
  },
  {
    id: "11",
    title: "Binance Review 2025: Features, Fees, and Security Analysis",
    excerpt: "Comprehensive review of Binance exchange covering features, fees, security, and user experience.",
    content: "",
    category: "REVIEWS",
    author: "MOLLY TALIOR",
    date: "January 14, 2025",
    image: "https://ext.same-assets.com/659829736/632691144.png",
    readTime: "8 min read",
    tags: ["binance", "exchange review", "cryptocurrency trading", "crypto exchange", "trading platform"],
    slug: "binance-review-2025"
  },
  {
    id: "12",
    title: "Coinbase Pro vs Kraken: Which Exchange is Better?",
    excerpt: "Detailed comparison of Coinbase Pro and Kraken exchanges for cryptocurrency trading.",
    content: "",
    category: "REVIEWS",
    author: "COINSCIPHERS EDITORS",
    date: "December 28, 2024",
    image: "https://ext.same-assets.com/659829736/859811973.png",
    readTime: "7 min read",
    tags: ["coinbase", "kraken", "exchange comparison", "crypto trading", "platform review"],
    slug: "coinbase-vs-kraken-review"
  },
  {
    id: "13",
    title: "Ledger Nano X Review: Is It Worth the Investment?",
    excerpt: "In-depth review of the Ledger Nano X hardware wallet covering security, features, and usability.",
    content: "",
    category: "REVIEWS",
    author: "MOLLY TALIOR",
    date: "December 5, 2024",
    image: "https://ext.same-assets.com/659829736/858934483.png",
    readTime: "6 min read",
    tags: ["ledger nano x", "hardware wallet", "security", "crypto storage", "wallet review"],
    slug: "ledger-nano-x-review"
  },
  {
    id: "14",
    title: "Bitcoin vs Ethereum: Which Cryptocurrency to Choose?",
    excerpt: "Comprehensive comparison of Bitcoin and Ethereum covering technology, use cases, and investment potential.",
    content: "",
    category: "COMPARISONS",
    author: "COINSCIPHERS EDITORS",
    date: "January 11, 2025",
    image: "https://ext.same-assets.com/659829736/602114545.png",
    readTime: "9 min read",
    tags: ["bitcoin", "ethereum", "cryptocurrency comparison", "investment analysis", "blockchain"],
    slug: "bitcoin-vs-ethereum-comparison"
  },
  {
    id: "15",
    title: "DeFi vs CeFi: Decentralized vs Centralized Finance Explained",
    excerpt: "Detailed comparison between decentralized and centralized finance platforms and their benefits.",
    content: "",
    category: "COMPARISONS",
    author: "MOLLY TALIOR",
    date: "December 22, 2024",
    image: "https://ext.same-assets.com/659829736/632691144.png",
    readTime: "8 min read",
    tags: ["defi", "cefi", "decentralized finance", "centralized finance", "comparison"],
    slug: "defi-vs-cefi-comparison"
  },
  {
    id: "16",
    title: "Staking vs Mining: Which is More Profitable in 2025?",
    excerpt: "Analysis of staking versus mining profitability, risks, and environmental impact.",
    content: "",
    category: "COMPARISONS",
    author: "COINSCIPHERS EDITORS",
    date: "December 18, 2024",
    image: "https://ext.same-assets.com/659829736/859811973.png",
    readTime: "7 min read",
    tags: ["staking", "mining", "profitability", "cryptocurrency", "comparison"],
    slug: "staking-vs-mining-comparison"
  },
  {
    id: "17",
    title: "What is DeFi? Decentralized Finance Explained Simply",
    excerpt: "Simple explanation of decentralized finance (DeFi) and how it's revolutionizing traditional banking.",
    content: "",
    category: "EXPLAINED",
    author: "MOLLY TALIOR",
    date: "January 9, 2025",
    image: "https://ext.same-assets.com/659829736/632691144.png",
    readTime: "8 min read",
    tags: ["defi", "decentralized finance", "blockchain", "cryptocurrency", "smart contracts"],
    slug: "what-is-defi-explained"
  },
  {
    id: "18",
    title: "NFTs Explained: Non-Fungible Tokens Guide for Beginners",
    excerpt: "Complete beginner's guide to understanding NFTs, their value, and how they work.",
    content: "",
    category: "EXPLAINED",
    author: "COINSCIPHERS EDITORS",
    date: "December 25, 2024",
    image: "https://ext.same-assets.com/659829736/1855264074.png",
    readTime: "6 min read",
    tags: ["nfts", "non-fungible tokens", "digital art", "blockchain", "collectibles"],
    slug: "nfts-explained-beginners"
  },
  {
    id: "19",
    title: "Blockchain Technology Explained: Beyond Cryptocurrency",
    excerpt: "Understanding blockchain technology and its applications beyond cryptocurrency.",
    content: "",
    category: "EXPLAINED",
    author: "MOLLY TALIOR",
    date: "December 12, 2024",
    image: "https://ext.same-assets.com/659829736/858934483.png",
    readTime: "7 min read",
    tags: ["blockchain", "technology", "distributed ledger", "cryptocurrency", "applications"],
    slug: "blockchain-technology-explained"
  },
  {
    id: "20",
    title: "Diamond Investment Guide: Physical vs Digital Diamond Assets",
    excerpt: "Comprehensive guide to investing in diamonds, comparing physical and tokenized diamond assets.",
    content: "",
    category: "DIAMONDS",
    author: "COINSCIPHERS EDITORS",
    date: "January 7, 2025",
    image: "https://ext.same-assets.com/659829736/602114545.png",
    readTime: "10 min read",
    tags: ["diamond investment", "tokenization", "alternative assets", "physical diamonds", "digital assets"],
    slug: "diamond-investment-guide"
  },
  {
    id: "21",
    title: "How to Verify Diamond Authenticity: Certification Guide",
    excerpt: "Learn how to verify diamond authenticity through proper certification and appraisal methods.",
    content: "",
    category: "DIAMONDS",
    author: "MOLLY TALIOR",
    date: "December 30, 2024",
    image: "https://ext.same-assets.com/659829736/3743683483.png",
    readTime: "6 min read",
    tags: ["diamond authenticity", "certification", "appraisal", "gemology", "investment"],
    slug: "diamond-authenticity-verification"
  },
  {
    id: "22",
    title: "Diamond Tokenization: The Future of Luxury Asset Trading",
    excerpt: "Exploring how blockchain technology is revolutionizing diamond trading through tokenization.",
    content: "",
    category: "DIAMONDS",
    author: "COINSCIPHERS EDITORS",
    date: "December 14, 2024",
    image: "https://ext.same-assets.com/659829736/859811973.png",
    readTime: "8 min read",
    tags: ["diamond tokenization", "blockchain", "luxury assets", "trading", "digital assets"],
    slug: "diamond-tokenization-guide"
  },
  {
    id: "23",
    title: "How MetaMask Calculates Gas Fees",
    excerpt: "Understanding how MetaMask calculates and displays gas fees for transactions.",
    content: "",
    category: "METAMASK",
    author: "MOLLY TALIOR",
    date: "July 25, 2025",
    image: "https://ext.same-assets.com/659829736/2602516949.png",
    readTime: "5 min read",
    tags: ["metamask", "gas fees", "ethereum", "transaction costs", "blockchain"],
    slug: "metamask-gas-fees"
  },
  {
    id: "24",
    title: "How to Buy S&P 500 with Revolut",
    excerpt: "Complete guide to investing in S&P 500 using the Revolut platform.",
    content: "",
    category: "STOCKS",
    author: "MOLLY TALIOR",
    date: "April 24, 2024",
    image: "https://ext.same-assets.com/659829736/859811973.png",
    readTime: "5 min read",
    tags: ["s&p 500", "revolut", "stock investing", "index funds", "portfolio"],
    slug: "buy-sp500-revolut"
  },
  {
    id: "25",
    title: "5 Best Stock Trading Platforms in the USA",
    excerpt: "Comprehensive review of the top stock trading platforms available in the United States.",
    content: "",
    category: "STOCKS",
    author: "MOLLY TALIOR",
    date: "April 15, 2024",
    image: "https://ext.same-assets.com/659829736/858934483.png",
    readTime: "8 min read",
    tags: ["stock trading", "trading platforms", "usa", "investing", "brokers"],
    slug: "best-stock-trading-platforms"
  },
  {
    id: "26",
    title: "How to Buy Tesla Stock: Complete Beginner's Guide",
    excerpt: "Step-by-step guide to investing in Tesla stock with analysis of the company's prospects.",
    content: "",
    category: "STOCKS",
    author: "MOLLY TALIOR",
    date: "January 8, 2025",
    image: "https://ext.same-assets.com/659829736/602114545.png",
    readTime: "6 min read",
    tags: ["tesla stock", "stock investing", "electric vehicles", "growth stocks", "investing guide"],
    slug: "how-to-buy-tesla-stock"
  },
  {
    id: "27",
    title: "Dividend Investing Strategies for Passive Income",
    excerpt: "Learn how to build a dividend portfolio for consistent passive income generation.",
    content: "",
    category: "STOCKS",
    author: "COINSCIPHERS EDITORS",
    date: "December 15, 2024",
    image: "https://ext.same-assets.com/659829736/632691144.png",
    readTime: "7 min read",
    tags: ["dividend investing", "passive income", "dividend stocks", "portfolio", "income investing"],
    slug: "dividend-investing-strategies"
  },
  {
    id: "28",
    title: "Will Dogecoin Hit $1?",
    excerpt: "Analysis of Dogecoin's potential to reach $1 based on market trends and fundamentals.",
    content: "",
    category: "PREDICTIONS",
    author: "COINSCIPHERS EDITORS",
    date: "July 28, 2025",
    image: "https://ext.same-assets.com/659829736/3716991039.png",
    readTime: "6 min read",
    tags: ["dogecoin", "price prediction", "meme coin", "cryptocurrency", "market analysis"],
    slug: "will-dogecoin-hit-1-dollar"
  },
  {
    id: "29",
    title: "Ravencoin (RVN) Price Prediction – 2024, 2025, 2030",
    excerpt: "Long-term price predictions for Ravencoin with technical and fundamental analysis.",
    content: "",
    category: "PREDICTIONS",
    author: "MOLLY TALIOR",
    date: "May 10, 2024",
    image: "https://ext.same-assets.com/659829736/1536639884.png",
    readTime: "8 min read",
    tags: ["ravencoin", "price prediction", "cryptocurrency", "technical analysis", "altcoin"],
    slug: "ravencoin-price-prediction"
  },
  {
    id: "30",
    title: "Pi Network Price Prediction – 2024, 2025, 2030",
    excerpt: "Analysis of Pi Network's potential value and price predictions through 2030.",
    content: "",
    category: "PREDICTIONS",
    author: "MOLLY TALIOR",
    date: "July 4, 2025",
    image: "https://ext.same-assets.com/659829736/2700059141.png",
    readTime: "7 min read",
    tags: ["pi network", "price prediction", "mobile mining", "cryptocurrency", "blockchain"],
    slug: "pi-network-price-prediction"
  },
  {
    id: "31",
    title: "Bitcoin Price Prediction 2025: Bull Market Analysis",
    excerpt: "Comprehensive analysis of Bitcoin's price potential in 2025 with technical indicators.",
    content: "",
    category: "PREDICTIONS",
    author: "COINSCIPHERS EDITORS",
    date: "January 5, 2025",
    image: "https://ext.same-assets.com/659829736/602114545.png",
    readTime: "9 min read",
    tags: ["bitcoin", "price prediction", "bull market", "technical analysis", "cryptocurrency"],
    slug: "bitcoin-price-prediction-2025"
  }
]

// Helper function to get articles by category
export const getArticlesByCategory = (category: string): Article[] => {
  return allArticles.filter(article =>
    article.category.toLowerCase() === category.toLowerCase()
  )
}

// Helper function to get article by slug
export const getArticleBySlug = (slug: string): Article | undefined => {
  return allArticles.find(article => article.slug === slug)
}

// Helper function to get related articles
export const getRelatedArticles = (currentSlug: string, category: string, limit: number = 3): Article[] => {
  return allArticles
    .filter(article =>
      article.slug !== currentSlug &&
      article.category === category
    )
    .slice(0, limit)
}

// Helper function to search articles
export const searchArticles = (query: string, category?: string): Article[] => {
  let filtered = allArticles

  if (category) {
    filtered = filtered.filter(article =>
      article.category.toLowerCase() === category.toLowerCase()
    )
  }

  if (query.trim()) {
    const searchTerm = query.toLowerCase()
    filtered = filtered.filter(article =>
      article.title.toLowerCase().includes(searchTerm) ||
      article.excerpt.toLowerCase().includes(searchTerm) ||
      article.category.toLowerCase().includes(searchTerm) ||
      article.author.toLowerCase().includes(searchTerm) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    )
  }

  return filtered
}

// Get all unique categories
export const getAllCategories = (): string[] => {
  return Array.from(new Set(allArticles.map(article => article.category)))
}

// Get all unique tags
export const getAllTags = (): string[] => {
  const tags = new Set<string>()
  allArticles.forEach(article => {
    article.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
}
