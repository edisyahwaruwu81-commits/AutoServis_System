import { InventoryTable } from "@/components/dashboard/inventory-table"
import { Package } from "lucide-react"

export default function InventoriPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
          <Package className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Inventori Barang</h1>
          <p className="text-muted-foreground">
            Kelola stok suku cadang dan material bengkel
          </p>
        </div>
      </div>
      <InventoryTable />
    </div>
  )
}
