"use client"

import { useState } from "react"
import { ArrowLeft, Car, Check, ChevronDown, Package, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import type { Job } from "@/lib/mechanic-data"

interface ChecklistItem {
  id: string
  label: string
  checked: boolean
}

interface SparePart {
  id: string
  name: string
  quantity: number
  available: boolean
}

interface TaskDetailProps {
  job: Job
  onBack: () => void
  onComplete: (jobId: string) => void
}

const initialChecklist: ChecklistItem[] = [
  { id: "1", label: "Inspect engine oil level", checked: false },
  { id: "2", label: "Check brake pads and rotors", checked: false },
  { id: "3", label: "Inspect air filter", checked: false },
  { id: "4", label: "Check tire pressure and condition", checked: false },
  { id: "5", label: "Inspect battery terminals", checked: false },
  { id: "6", label: "Check coolant level", checked: false },
  { id: "7", label: "Test all lights", checked: false },
  { id: "8", label: "Final quality check", checked: false },
]

const spareParts: SparePart[] = [
  { id: "1", name: "Oil Filter", quantity: 5, available: true },
  { id: "2", name: "Air Filter", quantity: 3, available: true },
  { id: "3", name: "Brake Pads (Front)", quantity: 2, available: true },
  { id: "4", name: "Brake Pads (Rear)", quantity: 0, available: false },
  { id: "5", name: "Spark Plugs (Set)", quantity: 8, available: true },
  { id: "6", name: "Coolant 1L", quantity: 12, available: true },
]

const statusConfig = {
  waiting: {
    label: "Waiting",
    className: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  completed: {
    label: "Completed",
    className: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
}

export function TaskDetail({ job, onBack, onComplete }: TaskDetailProps) {
  const [checklist, setChecklist] = useState<ChecklistItem[]>(initialChecklist)
  const [isPartsOpen, setIsPartsOpen] = useState(false)
  const [requestedParts, setRequestedParts] = useState<string[]>([])

  const completedCount = checklist.filter((item) => item.checked).length
  const progress = Math.round((completedCount / checklist.length) * 100)
  const allCompleted = completedCount === checklist.length

  const handleCheckItem = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    )
  }

  const handleRequestPart = (partId: string) => {
    setRequestedParts((prev) =>
      prev.includes(partId)
        ? prev.filter((id) => id !== partId)
        : [...prev, partId]
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="flex items-center gap-4 p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="h-12 w-12 shrink-0"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-bold truncate">Task Details</h1>
            <p className="text-sm text-muted-foreground">
              {job.licensePlate} - {job.carModel}
            </p>
          </div>
          <Badge
            variant="outline"
            className={cn(
              "text-xs font-semibold px-2 py-1",
              statusConfig[job.status as keyof typeof statusConfig].className
            )}
          >
            {statusConfig[job.status as keyof typeof statusConfig].label}
          </Badge>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 p-4 pb-28 overflow-y-auto">
        {/* Vehicle Info Card */}
        <Card className="p-4 mb-6 border-2 border-border/50">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10">
              <Car className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-2xl font-bold tracking-wider">
                {job.licensePlate}
              </p>
              <p className="text-lg text-muted-foreground">{job.carModel}</p>
              <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                <User className="w-4 h-4" />
                <span>{job.customerName}</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Progress
            </span>
            <span className="text-sm font-bold text-primary">
              {completedCount}/{checklist.length} tasks
            </span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Repair Checklist */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-4">Repair Checklist</h2>
          <div className="flex flex-col gap-2">
            {checklist.map((item) => (
              <button
                key={item.id}
                onClick={() => handleCheckItem(item.id)}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-xl transition-all",
                  "bg-card border-2 border-border/50",
                  "active:scale-[0.98]",
                  item.checked && "bg-primary/10 border-primary/30"
                )}
              >
                <div
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-lg border-2",
                    item.checked
                      ? "bg-primary border-primary"
                      : "bg-muted border-border"
                  )}
                >
                  {item.checked && <Check className="w-5 h-5 text-primary-foreground" />}
                </div>
                <span
                  className={cn(
                    "text-base font-medium flex-1 text-left",
                    item.checked && "text-muted-foreground line-through"
                  )}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Spare Parts Request */}
        <Collapsible open={isPartsOpen} onOpenChange={setIsPartsOpen}>
          <CollapsibleTrigger asChild>
            <button
              className={cn(
                "w-full flex items-center justify-between p-4 rounded-xl",
                "bg-card border-2 border-border/50",
                "transition-all active:scale-[0.98]"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/20">
                  <Package className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-base">Request Spare Parts</p>
                  <p className="text-sm text-muted-foreground">
                    {requestedParts.length > 0
                      ? `${requestedParts.length} part(s) selected`
                      : "Tap to expand"}
                  </p>
                </div>
              </div>
              <ChevronDown
                className={cn(
                  "w-6 h-6 text-muted-foreground transition-transform",
                  isPartsOpen && "rotate-180"
                )}
              />
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2">
            <div className="flex flex-col gap-2 p-4 bg-card rounded-xl border-2 border-border/50">
              {spareParts.map((part) => (
                <button
                  key={part.id}
                  onClick={() => part.available && handleRequestPart(part.id)}
                  disabled={!part.available}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-lg transition-all",
                    "active:scale-[0.98]",
                    part.available
                      ? "bg-muted hover:bg-muted/80"
                      : "bg-muted/50 opacity-50 cursor-not-allowed",
                    requestedParts.includes(part.id) &&
                      "bg-accent/20 ring-2 ring-accent"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Checkbox
                      checked={requestedParts.includes(part.id)}
                      disabled={!part.available}
                      className="h-6 w-6"
                    />
                    <span className="font-medium">{part.name}</span>
                  </div>
                  <Badge
                    variant={part.available ? "secondary" : "destructive"}
                    className="text-xs"
                  >
                    {part.available ? `${part.quantity} in stock` : "Out of stock"}
                  </Badge>
                </button>
              ))}
              {requestedParts.length > 0 && (
                <Button
                  variant="secondary"
                  className="mt-2 h-14 text-base font-bold"
                >
                  <Package className="w-5 h-5 mr-2" />
                  Submit Request ({requestedParts.length} items)
                </Button>
              )}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </main>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-t border-border">
        <Button
          onClick={() => onComplete(job.id)}
          disabled={!allCompleted}
          className={cn(
            "w-full h-16 text-xl font-bold rounded-xl transition-all",
            allCompleted
              ? "bg-primary hover:bg-primary/90 text-primary-foreground"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          )}
        >
          <Check className="w-6 h-6 mr-3" />
          Complete Job
        </Button>
        {!allCompleted && (
          <p className="text-center text-sm text-muted-foreground mt-2">
            Complete all checklist items to finish
          </p>
        )}
      </div>
    </div>
  )
}
