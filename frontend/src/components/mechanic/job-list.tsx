"use client"

import { Car, Clock, Wrench } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Link from "next/link"
import type { Job } from "@/lib/mechanic-data"

interface JobListProps {
  jobs: Job[]
}

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

export function JobList({ jobs }: JobListProps) {
  return (
    <div className="flex flex-col gap-4">
      {jobs.map((job) => (
        <Link href={`/mechanic/job/${job.id}`} key={job.id}>
          <Card
            className={cn(
              "p-5 cursor-pointer transition-all duration-200",
              "active:scale-[0.98] hover:bg-muted/50",
              "border-2 border-border/50"
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                {/* License Plate - Large and prominent */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 shrink-0">
                    <Car className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold tracking-wider text-foreground">
                      {job.licensePlate}
                    </p>
                    <p className="text-base text-muted-foreground">{job.carModel}</p>
                  </div>
                </div>
                
                {/* Customer and Time */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Wrench className="w-4 h-4" />
                    {job.customerName}
                  </span>
                  {job.estimatedTime && (
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {job.estimatedTime}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Status Badge */}
              <Badge
                variant="outline"
                className={cn(
                  "text-sm font-semibold px-3 py-1.5 shrink-0",
                  statusConfig[job.status].className
                )}
              >
                {statusConfig[job.status].label}
              </Badge>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}
