export interface QueueItem {
  id: string
  ticketNo: string
  customer: string
  vehicle: string
  plateNo: string
  status: "waiting" | "in-progress" | "done"
  time: string
}

export const queueData: QueueItem[] = [
  { id: "1", ticketNo: "TKT-20240412-001", customer: "Ahmad Subandi", vehicle: "Honda Beat", plateNo: "B 1234 ABC", status: "in-progress", time: "08:30" },
  { id: "2", ticketNo: "TKT-20240412-002", customer: "Siti Rahayu", vehicle: "Toyota Avanza", plateNo: "B 5678 DEF", status: "in-progress", time: "09:15" },
  { id: "3", ticketNo: "TKT-20240412-003", customer: "Budi Santoso", vehicle: "Yamaha NMAX", plateNo: "B 9012 GHI", status: "waiting", time: "09:45" },
  { id: "4", ticketNo: "TKT-20240412-004", customer: "Dewi Lestari", vehicle: "Daihatsu Xenia", plateNo: "B 3456 JKL", status: "waiting", time: "10:00" },
  { id: "5", ticketNo: "TKT-20240412-005", customer: "Eko Prasetyo", vehicle: "Honda Vario", plateNo: "B 7890 MNO", status: "done", time: "07:30" },
]

export const statusConfig = {
  "waiting": { label: "Menunggu", variant: "secondary" as const, color: "bg-muted text-muted-foreground" },
  "in-progress": { label: "Dikerjakan", variant: "default" as const, color: "bg-primary text-primary-foreground" },
  "done": { label: "Selesai", variant: "outline" as const, color: "bg-chart-3/20 text-chart-3 border-chart-3/30" },
}
