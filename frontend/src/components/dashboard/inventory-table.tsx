"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Search, AlertTriangle, Package, Plus } from "lucide-react"
import { useState } from "react"

interface InventoryItem {
  id: string
  name: string
  sku: string
  category: string
  stock: number
  minStock: number
  price: number
  unit: string
}

const inventoryData: InventoryItem[] = [
  { id: "1", name: "Oli Mesin 10W-40", sku: "OLI-001", category: "Oli", stock: 45, minStock: 20, price: 85000, unit: "Liter" },
  { id: "2", name: "Filter Oli Universal", sku: "FLT-001", category: "Filter", stock: 8, minStock: 15, price: 35000, unit: "Pcs" },
  { id: "3", name: "Kampas Rem Depan", sku: "KMP-001", category: "Rem", stock: 12, minStock: 10, price: 125000, unit: "Set" },
  { id: "4", name: "Busi NGK Iridium", sku: "BSI-001", category: "Busi", stock: 3, minStock: 10, price: 95000, unit: "Pcs" },
  { id: "5", name: "Air Radiator Coolant", sku: "RAD-001", category: "Coolant", stock: 25, minStock: 15, price: 45000, unit: "Liter" },
  { id: "6", name: "V-Belt Fan Belt", sku: "VBT-001", category: "Belt", stock: 6, minStock: 8, price: 175000, unit: "Pcs" },
  { id: "7", name: "Aki Mobil 60Ah", sku: "AKI-001", category: "Aki", stock: 4, minStock: 5, price: 850000, unit: "Unit" },
  { id: "8", name: "Lampu Halogen H4", sku: "LMP-001", category: "Lampu", stock: 18, minStock: 10, price: 65000, unit: "Pcs" },
  { id: "9", name: "Minyak Rem DOT 4", sku: "MRM-001", category: "Oli", stock: 2, minStock: 10, price: 55000, unit: "Botol" },
  { id: "10", name: "Wiper Blade 18 inch", sku: "WPR-001", category: "Wiper", stock: 14, minStock: 8, price: 75000, unit: "Pcs" },
]

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export function InventoryTable() {
  const [searchTerm, setSearchTerm] = useState("")
  
  const filteredData = inventoryData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const lowStockCount = inventoryData.filter(item => item.stock < item.minStock).length

  return (
    <Card className="border-border bg-card shadow-sm">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="text-card-foreground flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              Inventory Management
            </CardTitle>
            <CardDescription>
              Manage spare parts and workshop materials
            </CardDescription>
          </div>
          {lowStockCount > 0 && (
            <Badge variant="destructive" className="gap-1 w-fit">
              <AlertTriangle className="h-3 w-3" />
              {lowStockCount} items low stock
            </Badge>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search name, SKU, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-input border-border"
            />
          </div>
          <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="h-4 w-4" />
            Add Item
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="text-foreground font-semibold">Product Name</TableHead>
                <TableHead className="text-foreground font-semibold">SKU</TableHead>
                <TableHead className="text-foreground font-semibold">Category</TableHead>
                <TableHead className="text-foreground font-semibold text-center">Stock</TableHead>
                <TableHead className="text-foreground font-semibold text-right">Price</TableHead>
                <TableHead className="text-foreground font-semibold text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item) => {
                const isLowStock = item.stock < item.minStock
                return (
                  <TableRow 
                    key={item.id} 
                    className={isLowStock ? "bg-destructive/5 hover:bg-destructive/10" : "hover:bg-muted/30"}
                  >
                    <TableCell className="font-medium text-card-foreground">
                      {item.name}
                    </TableCell>
                    <TableCell className="text-muted-foreground font-mono text-sm">
                      {item.sku}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                        {item.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className={`font-semibold ${isLowStock ? "text-destructive" : "text-card-foreground"}`}>
                        {item.stock}
                      </span>
                      <span className="text-muted-foreground text-sm"> {item.unit}</span>
                    </TableCell>
                    <TableCell className="text-right text-card-foreground font-medium">
                      {formatCurrency(item.price)}
                    </TableCell>
                    <TableCell className="text-center">
                      {isLowStock ? (
                        <Badge variant="destructive" className="gap-1">
                          <AlertTriangle className="h-3 w-3" />
                          Low Stock
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">
                          Available
                        </Badge>
                      )}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between pt-4 text-sm text-muted-foreground">
          <p>Showing {filteredData.length} of {inventoryData.length} items</p>
        </div>
      </CardContent>
    </Card>
  )
}
