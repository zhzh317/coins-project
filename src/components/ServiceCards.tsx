import { Card, CardContent } from "@/components/ui/card"
import { Diamond, Wallet, Info, TrendingUp, LineChart, Zap } from "lucide-react"

const services = [
  {
    title: "Diamond Education",
    icon: Diamond,
    href: "#"
  },
  {
    title: "MetaMask Guides",
    icon: Wallet,
    href: "#"
  },
  {
    title: "Explained",
    icon: Info,
    href: "#"
  },
  {
    title: "Investing",
    icon: TrendingUp,
    href: "#"
  },
  {
    title: "Stocks",
    icon: LineChart,
    href: "#"
  },
  {
    title: "Predictions",
    icon: Zap,
    href: "#"
  }
]

export function ServiceCards() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card
                key={service.title}
                className="group hover:scale-105 transition-transform duration-300 bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
