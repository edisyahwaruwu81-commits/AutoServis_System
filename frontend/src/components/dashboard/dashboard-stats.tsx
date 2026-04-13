"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  DollarSign, 
  Car, 
  AlertTriangle, 
  Wrench,
  TrendingUp,
  TrendingDown
} from "lucide-react"

const stats = [
  {
    title: "Revenue",
    value: "Rp 35.5M",
    change: "+18%",
    trend: "up",
    description: "from last month",
    icon: DollarSign,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Units",
    value: "127",
    change: "+12",
    trend: "up",
    description: "vehicles this month",
    icon: Car,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    title: "Low Stock",
    value: "4",
    change: "+2",
    trend: "down",
    description: "items need restock",
    icon: AlertTriangle,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    title: "Active Mechanics",
    value: "8",
    change: "2 off",
    trend: "neutral",
    description: "of 10 total",
    icon: Wrench,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
]

export function DashboardStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title} className="border-border bg-card shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.bgColor}`}>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
              <div className="flex items-center gap-1 mt-1">
                {stat.trend === "up" && (
                  <div className="flex items-center text-primary text-xs font-medium">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {stat.change}
                  </div>
                )}
                {stat.trend === "down" && (
                  <div className="flex items-center text-destructive text-xs font-medium">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    {stat.change}
                  </div>
                )}
                {stat.trend === "neutral" && (
                  <span className="text-xs text-muted-foreground">{stat.change}</span>
                )}
                <span className="text-xs text-muted-foreground ml-1">{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
