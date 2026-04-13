import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Clock } from "lucide-react"
import { queueData, statusConfig } from "@/lib/data"

export default function QueuePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <FileText className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Daftar SPK</h1>
          <p className="text-muted-foreground">
            Kelola Surat Perintah Kerja bengkel
          </p>
        </div>
      </div>
      <Card className="border-border bg-card shadow-sm">
        <CardHeader>
          <CardTitle className="text-card-foreground">Daftar SPK Aktif</CardTitle>
          <CardDescription>
            Surat perintah kerja yang sedang dalam proses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {queueData.filter(q => q.status !== "done").map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
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
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {item.time}
                    </div>
                  </div>
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
  )
}
