import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator } from "lucide-react"
import { queueData } from "@/lib/data"

export default function CashierPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Calculator className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Kasir</h1>
          <p className="text-muted-foreground">
            Proses pembayaran dan cetak nota
          </p>
        </div>
      </div>
      <Card className="border-border bg-card shadow-sm">
        <CardHeader>
          <CardTitle className="text-card-foreground">Antrian Pembayaran</CardTitle>
          <CardDescription>
            Kendaraan yang siap untuk pembayaran
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {queueData.filter(q => q.status === "done").map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 rounded-lg bg-chart-3/5 border border-chart-3/20 hover:bg-chart-3/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-3/20 text-chart-3 font-bold">
                    {item.id}
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">{item.ticketNo}</p>
                    <p className="text-sm text-muted-foreground">{item.customer} - {item.vehicle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-sm font-medium text-card-foreground">{item.plateNo}</p>
                    <p className="text-xs text-muted-foreground">Selesai: {item.time}</p>
                  </div>
                  <Badge className="bg-chart-3/20 text-chart-3 border-chart-3/30">
                    Siap Bayar
                  </Badge>
                </div>
              </div>
            ))}
            {queueData.filter(q => q.status === "done").length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Calculator className="h-12 w-12 text-muted-foreground/50" />
                <h3 className="mt-4 text-lg font-medium text-card-foreground">
                  Belum ada antrian
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Kendaraan selesai servis akan muncul di sini
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
