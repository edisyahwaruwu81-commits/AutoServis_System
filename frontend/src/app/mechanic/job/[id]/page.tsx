"use client"

import { useParams, useRouter } from "next/navigation"
import { TaskDetail } from "@/components/mechanic/task-detail"
import { mockJobs } from "@/lib/mechanic-data"

export default function JobDetailPage() {
  const params = useParams()
  const router = useRouter()
  
  // Find job from data
  const job = mockJobs.find(j => j.id === params.id)
  
  if (!job) {
    return (
      <div className="flex h-screen items-center justify-center bg-background text-foreground">
        <h2>Job not found</h2>
      </div>
    )
  }

  const handleBack = () => {
    router.push("/mechanic")
  }

  const handleCompleteJob = (jobId: string) => {
    // In a real app, send API request here
    alert(`Job ${jobId} marked as complete!`)
    router.push("/mechanic")
  }

  return (
    <TaskDetail 
      job={job}
      onBack={handleBack}
      onComplete={handleCompleteJob}
    />
  )
}
