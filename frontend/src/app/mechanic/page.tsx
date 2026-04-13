import { Menu, Bell, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { JobList } from "@/components/mechanic/job-list"
import { mockJobs } from "@/lib/mechanic-data"

export default function MechanicPage() {
  const activeJobs = mockJobs.filter((j) => j.status !== "completed")
  const inProgressCount = mockJobs.filter((j) => j.status === "in-progress").length
  const waitingCount = mockJobs.filter((j) => j.status === "waiting").length

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
              <Wrench className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold">AutoServis</h1>
              <p className="text-xs text-muted-foreground">Mechanic Portal</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative h-10 w-10">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 pb-8">
        {/* Stats Summary */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-blue-500/10 border-2 border-blue-500/20">
            <p className="text-3xl font-bold text-blue-400">{inProgressCount}</p>
            <p className="text-sm text-muted-foreground">In Progress</p>
          </div>
          <div className="p-4 rounded-xl bg-amber-500/10 border-2 border-amber-500/20">
            <p className="text-3xl font-bold text-amber-400">{waitingCount}</p>
            <p className="text-sm text-muted-foreground">Waiting</p>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">My Assigned Jobs</h2>
          <Badge variant="secondary" className="text-sm">
            {activeJobs.length} jobs
          </Badge>
        </div>

        {/* Job List */}
        <JobList jobs={activeJobs} />
      </main>
    </div>
  )
}
