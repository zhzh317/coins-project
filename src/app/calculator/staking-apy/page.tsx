"use client"

import { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface CalculationResult {
  totalReturn: string;
  finalBalance: string;
  dailyBreakdown: { day: number; interest: number; balance: number }[];
}

export default function StakingCalculatorPage() {
  const [principal, setPrincipal] = useState<string>("1000");
  const [apy, setApy] = useState<string>("10");
  const [days, setDays] = useState<string>("365");
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateApy = () => {
    const p = parseFloat(principal);
    const r = parseFloat(apy) / 100;
    const t = parseInt(days);

    if (isNaN(p) || isNaN(r) || isNaN(t) || p <= 0 || r < 0 || t <= 0) {
      alert("Please enter valid positive numbers for all fields.");
      return;
    }

    const dailyRate = r / 365;
    let balance = p;
    const dailyBreakdown = [];

    for (let day = 1; day <= t; day++) {
      const interest = balance * dailyRate;
      balance += interest;
      dailyBreakdown.push({
        day,
        interest: parseFloat(interest.toFixed(4)),
        balance: parseFloat(balance.toFixed(4)),
      });
    }

    const totalReturn = balance - p;
    setResult({
      totalReturn: totalReturn.toFixed(2),
      finalBalance: balance.toFixed(2),
      dailyBreakdown,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Crypto Staking APY Calculator</h1>
            <p className="text-xl text-muted-foreground">
              Calculate your potential returns from staking with daily compounding interest.
            </p>
          </section>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Staking Parameters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="principal" className="block text-sm font-medium text-muted-foreground mb-1">
                    Initial Investment ($)
                  </label>
                  <Input 
                    id="principal" 
                    type="number" 
                    value={principal} 
                    onChange={(e) => setPrincipal(e.target.value)}
                    placeholder="e.g., 1000"
                  />
                </div>
                <div>
                  <label htmlFor="apy" className="block text-sm font-medium text-muted-foreground mb-1">
                    Annual Percentage Yield (APY %)
                  </label>
                  <Input 
                    id="apy" 
                    type="number" 
                    value={apy}
                    onChange={(e) => setApy(e.target.value)}
                    placeholder="e.g., 10"
                  />
                </div>
                <div>
                  <label htmlFor="days" className="block text-sm font-medium text-muted-foreground mb-1">
                    Staking Duration (Days)
                  </label>
                  <Input 
                    id="days" 
                    type="number" 
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    placeholder="e.g., 365"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <Button onClick={calculateApy}>Calculate Returns</Button>
              </div>
            </CardContent>
          </Card>

          {result && (
            <Card>
              <CardHeader>
                <CardTitle>Calculation Results</CardTitle>
                <CardDescription>
                  After {days} days, your investment of ${principal} could be worth:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8 text-center">
                  <div>
                    <p className="text-3xl font-bold text-green-500">${result.finalBalance}</p>
                    <p className="text-muted-foreground">Final Balance</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">${result.totalReturn}</p>
                    <p className="text-muted-foreground">Total Staking Rewards</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-center">Growth Chart</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={result.dailyBreakdown}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" label={{ value: 'Days', position: 'insideBottom', offset: -5 }} />
                      <YAxis label={{ value: 'Balance ($)', angle: -90, position: 'insideLeft' }}/>
                      <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
                      <Legend />
                      <Line type="monotone" dataKey="balance" stroke="#8884d8" strokeWidth={2} name="Total Balance" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-center">Daily Breakdown</h3>
                  <div className="max-h-80 overflow-y-auto border rounded-md">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Day</TableHead>
                          <TableHead>Daily Interest ($)</TableHead>
                          <TableHead>End of Day Balance ($)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {result.dailyBreakdown.map(item => (
                          <TableRow key={item.day}>
                            <TableCell>{item.day}</TableCell>
                            <TableCell>{item.interest.toFixed(4)}</TableCell>
                            <TableCell>{item.balance.toFixed(2)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}


