import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { SalesChart } from "@/components/dashboard/sales-chart"
import { InventoryTable } from "@/components/dashboard/inventory-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"
import { queueData, statusConfig } from "@/lib/data"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Selamat datang di Sistem Informasi Bengkel Otomotif
        </p>
      </div>
      <DashboardStats />
      <div className="grid gap-6 lg:grid-cols-2">
        <SalesChart />
        <Card className="border-border bg-card shadow-sm">
          <CardHeader>
            <CardTitle className="text-card-foreground flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Antrian Servis Hari Ini
            </CardTitle>
            <CardDescription>Status kendaraan dalam antrian</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {queueData.slice(0, 5).map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-bold">
                      {item.id}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-card-foreground">{item.customer}</p>
                      <p className="text-xs text-muted-foreground">{item.vehicle} - {item.plateNo}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                    <Badge className={statusConfig[item.status].color}>
                      {statusConfig[item.status].label}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <InventoryTable />
    </div>
  )
}
