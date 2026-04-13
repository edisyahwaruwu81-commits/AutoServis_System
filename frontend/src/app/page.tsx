import Link from "next/link"
import { Wrench, ShieldCheck, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8 max-w-lg">
        <div className="flex justify-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
            <Wrench className="h-8 w-8" />
          </div>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-foreground">
          AutoServis System
        </h1>
        <p className="text-lg text-muted-foreground">
          Sistem manajemen bengkel terpadu. Silakan pilih portal masuk sesuai dengan peran operasi Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
        <Link 
          href="/dashboard"
          className="group flex items-center justify-between p-6 rounded-2xl border-2 border-border/50 bg-card hover:border-primary/50 hover:shadow-md transition-all active:scale-[0.98]"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h2 className="text-xl font-bold text-card-foreground">Admin Portal</h2>
              <p className="text-sm text-muted-foreground">Kelola pendaftaran & antrian</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </Link>

        <Link 
          href="/mechanic"
          className="group flex items-center justify-between p-6 rounded-2xl border-2 border-border/50 bg-card hover:border-amber-500/50 hover:shadow-md transition-all active:scale-[0.98]"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
              <Wrench className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h2 className="text-xl font-bold text-card-foreground">Mekanik Portal</h2>
              <p className="text-sm text-muted-foreground">Lihat SPK & selesaikan job</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-amber-500 transition-colors" />
        </Link>
      </div>

    </div>
  )
}
