import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    number: "#1",
    label: "Daily Crypto Newsletter",
    highlight: true
  },
  {
    number: "220k+",
    label: "Monthly Readers"
  },
  {
    number: "750+",
    label: "Comprehensive Guides"
  }
]

export function StatsSection() {
  return (
    <section className="py-16">
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className={`text-center bg-card/60 backdrop-blur-sm border-border/50 ${
              stat.highlight ? 'border-primary/50 bg-primary/5' : ''
            }`}
          >
            <CardContent className="p-8">
              <div className="space-y-2">
                <div className={`text-5xl font-bold ${
                  stat.highlight ? 'text-primary' : 'text-foreground'
                }`}>
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
