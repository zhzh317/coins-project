"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { getCryptoMarketData, getMockStockData, type CryptoMarketData, type StockMarketData } from "@/lib/api"

export function MarketOverview() {
  const [cryptoData, setCryptoData] = useState<CryptoMarketData[]>([])
  const [stockData, setStockData] = useState<StockMarketData[]>([])
  const [loading, setLoading] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const fetchData = async () => {
    setLoading(true)
    try {
      const [crypto, stocks] = await Promise.all([
        getCryptoMarketData(),
        Promise.resolve(getMockStockData())
      ])
      setCryptoData(crypto.slice(0, 5)) // Show top 5 cryptos
      setStockData(stocks)
      setLastUpdated(new Date())
    } catch (error) {
      console.error('Failed to fetch market data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    // Refresh data every 30 seconds
    const interval = setInterval(fetchData, 30000)
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    if (price < 1) return price.toFixed(6)
    if (price < 100) return price.toFixed(4)
    return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }

  const formatChange = (change: number) => {
    return change > 0 ? `+${change.toFixed(2)}` : change.toFixed(2)
  }

  const formatPercentage = (percentage: number) => {
    return `${percentage > 0 ? '+' : ''}${percentage.toFixed(2)}%`
  }

  return (
    <section>
      <Card className="bg-card/60 backdrop-blur-sm border-border/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">Market Overview</CardTitle>
            <div className="flex items-center space-x-4">
              {lastUpdated && (
                <span className="text-sm text-muted-foreground">
                  Last updated: {lastUpdated.toLocaleTimeString()}
                </span>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={fetchData}
                disabled={loading}
                className="flex items-center space-x-2"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>24h Change</TableHead>
                  <TableHead>24h %</TableHead>
                  <TableHead>Market Cap</TableHead>
                  <TableHead>Volume</TableHead>
                  <TableHead>High</TableHead>
                  <TableHead>Low</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Cryptocurrency Data */}
                {cryptoData.length > 0 && (
                  <>
                    <TableRow>
                      <TableCell colSpan={8} className="font-semibold text-primary py-2">
                        CRYPTOCURRENCY
                      </TableCell>
                    </TableRow>
                    {cryptoData.map((crypto) => (
                      <TableRow key={crypto.id}>
                        <TableCell className="font-medium">
                          <div className="flex flex-col">
                            <span className="font-semibold">{crypto.name}</span>
                            <span className="text-xs text-muted-foreground uppercase">
                              {crypto.symbol}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="font-mono">
                          ${formatPrice(crypto.current_price)}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={crypto.price_change_24h >= 0 ? "default" : "destructive"}
                            className={crypto.price_change_24h >= 0 ? "bg-green-600" : "bg-red-600"}
                          >
                            {formatChange(crypto.price_change_24h)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className={crypto.price_change_percentage_24h >= 0 ? "text-green-400" : "text-red-400"}>
                            {formatPercentage(crypto.price_change_percentage_24h)}
                          </span>
                        </TableCell>
                        <TableCell className="font-mono text-sm">
                          ${crypto.market_cap.toLocaleString()}
                        </TableCell>
                        <TableCell className="font-mono text-sm">
                          ${crypto.total_volume.toLocaleString()}
                        </TableCell>
                        <TableCell className="font-mono text-sm">
                          ${formatPrice(crypto.high_24h)}
                        </TableCell>
                        <TableCell className="font-mono text-sm">
                          ${formatPrice(crypto.low_24h)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                )}

                {/* Stock Data */}
                <TableRow>
                  <TableCell colSpan={8} className="font-semibold text-primary py-2">
                    INDICES & ETFs
                  </TableCell>
                </TableRow>
                {stockData.map((stock) => (
                  <TableRow key={stock.symbol}>
                    <TableCell className="font-medium">
                      <div className="flex flex-col">
                        <span className="font-semibold">{stock.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {stock.symbol}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono">
                      {formatPrice(stock.price)}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={stock.change >= 0 ? "default" : "destructive"}
                        className={stock.change >= 0 ? "bg-green-600" : "bg-red-600"}
                      >
                        {formatChange(stock.change)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className={stock.changePercent >= 0 ? "text-green-400" : "text-red-400"}>
                        {formatPercentage(stock.changePercent)}
                      </span>
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      {formatPrice(stock.open)}
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      ${formatPrice(stock.high)}
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      {formatPrice(stock.high)}
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      {formatPrice(stock.low)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 text-center">
            <a href="#" className="text-primary hover:underline text-sm">
              Track all markets on TradingView
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
