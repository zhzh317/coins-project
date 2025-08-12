import axios from 'axios'

// CoinGecko API endpoints
const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3'

export interface CryptoMarketData {
  id: string
  symbol: string
  name: string
  current_price: number
  price_change_24h: number
  price_change_percentage_24h: number
  market_cap: number
  total_volume: number
  high_24h: number
  low_24h: number
}

export interface StockMarketData {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  open: number
  high: number
  low: number
  previousClose: number
}

// Mock crypto data as fallback
function getMockCryptoData(): CryptoMarketData[] {
  return [
    {
      id: 'bitcoin',
      symbol: 'BTC',
      name: 'Bitcoin',
      current_price: 92847.52,
      price_change_24h: 1523.89,
      price_change_percentage_24h: 1.67,
      market_cap: 1837245123456,
      total_volume: 45678912345,
      high_24h: 93250.12,
      low_24h: 91234.56
    },
    {
      id: 'ethereum',
      symbol: 'ETH',
      name: 'Ethereum',
      current_price: 3456.78,
      price_change_24h: -45.32,
      price_change_percentage_24h: -1.29,
      market_cap: 415678912345,
      total_volume: 23456789123,
      high_24h: 3512.45,
      low_24h: 3423.12
    },
    {
      id: 'solana',
      symbol: 'SOL',
      name: 'Solana',
      current_price: 234.56,
      price_change_24h: 12.34,
      price_change_percentage_24h: 5.56,
      market_cap: 112345678912,
      total_volume: 4567891234,
      high_24h: 238.90,
      low_24h: 221.45
    },
    {
      id: 'binancecoin',
      symbol: 'BNB',
      name: 'BNB',
      current_price: 678.90,
      price_change_24h: -8.76,
      price_change_percentage_24h: -1.27,
      market_cap: 98765432123,
      total_volume: 3456789123,
      high_24h: 689.45,
      low_24h: 667.23
    },
    {
      id: 'cardano',
      symbol: 'ADA',
      name: 'Cardano',
      current_price: 1.23,
      price_change_24h: 0.034,
      price_change_percentage_24h: 2.84,
      market_cap: 43210987654,
      total_volume: 1234567890,
      high_24h: 1.25,
      low_24h: 1.19
    }
  ]
}

// Get top cryptocurrencies market data
export async function getCryptoMarketData(): Promise<CryptoMarketData[]> {
  try {
    const response = await axios.get(`${COINGECKO_BASE_URL}/coins/markets`, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 10,
        page: 1,
        sparkline: false,
        price_change_percentage: '24h'
      },
      timeout: 5000 // 5 second timeout
    })
    return response.data
  } catch (error) {
    console.error('Failed to fetch crypto market data, using mock data:', error)
    // Return mock data instead of empty array
    return getMockCryptoData()
  }
}

// Get global crypto market overview
export async function getGlobalMarketData() {
  try {
    const response = await axios.get(`${COINGECKO_BASE_URL}/global`)
    return response.data.data
  } catch (error) {
    console.error('Failed to fetch global market data:', error)
    return null
  }
}

// Mock stock data (in a real app, you'd use a real stock API)
export function getMockStockData(): StockMarketData[] {
  return [
    {
      symbol: 'SPY',
      name: 'S&P 500 ETF',
      price: 6403.6,
      change: 1.90,
      changePercent: 0.03,
      open: 6401.0,
      high: 6406.1,
      low: 6389.8,
      previousClose: 6401.6
    },
    {
      symbol: 'QQQ',
      name: 'Nasdaq 100 ETF',
      price: 23656.0,
      change: -6.20,
      changePercent: -0.03,
      open: 23662.0,
      high: 23667.2,
      low: 23598.2,
      previousClose: 23662.2
    },
    {
      symbol: 'DIA',
      name: 'Dow Jones ETF',
      price: 44283.3,
      change: 39.10,
      changePercent: 0.09,
      open: 44246.2,
      high: 44314.3,
      low: 44199.3,
      previousClose: 44246.2
    }
  ]
}

// Newsletter subscription API
export async function subscribeToNewsletter(email: string) {
  // In a real app, this would call your backend API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Successfully subscribed to newsletter!' })
    }, 1000)
  })
}

// Contact form submission API
export async function submitContactForm(data: {
  name: string
  email: string
  phone: string
  message: string
}) {
  // In a real app, this would call your backend API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Your message has been sent successfully!' })
    }, 1000)
  })
}
