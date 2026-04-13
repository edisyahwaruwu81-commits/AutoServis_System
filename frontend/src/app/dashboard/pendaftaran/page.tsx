import { ServiceRegistrationForm } from "@/components/dashboard/service-registration-form"
import { ClipboardPlus } from "lucide-react"

export default function PendaftaranPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <ClipboardPlus className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Pendaftaran Servis</h1>
          <p className="text-muted-foreground">
            Daftarkan pelanggan dan kendaraan baru untuk servis
          </p>
        </div>
      </div>
      <ServiceRegistrationForm />
    </div>
  )
}
