import Link from "next/link"
import { Wrench, ShieldCheck, ArrowRight, UserCircle, Settings } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Premium Decorative Background */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="text-center mb-12 max-w-2xl relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="flex justify-center mb-8">
          <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-primary text-primary-foreground shadow-[0_20px_40px_-15px_rgba(var(--primary),0.5)] transform hover:scale-110 transition-transform duration-500">
            <Wrench className="h-10 w-10" />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-foreground">
          AutoServis <span className="text-primary font-outline-2">Pro</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Sistem pengurusan bengkel automotif tercanggih dengan integrasi data masa nyata dan antaramuka premium.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl relative z-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
        <Link 
          href="/login"
          className="group flex flex-col p-8 rounded-[2.5rem] border border-border/50 bg-card/50 backdrop-blur-md hover:border-primary/50 hover:bg-card hover:shadow-2xl hover:shadow-primary/5 transition-all active:scale-[0.98] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <ShieldCheck className="w-24 h-24" />
          </div>
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div className="text-left flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-bold text-card-foreground">Admin Portal</h2>
              <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
            </div>
            <p className="text-muted-foreground leading-snug">
              Akses konsol pengurusan untuk pendaftaran, antrian servis, dan pengurusan inventori.
            </p>
          </div>
        </Link>

        <Link 
          href="/mechanic"
          className="group flex flex-col p-8 rounded-[2.5rem] border border-border/50 bg-card/50 backdrop-blur-md hover:border-accent/50 hover:bg-card hover:shadow-2xl hover:shadow-accent/5 transition-all active:scale-[0.98] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Wrench className="w-24 h-24" />
          </div>
          <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-500">
            <Wrench className="w-7 h-7" />
          </div>
          <div className="text-left flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-bold text-card-foreground">Mekanik Portal</h2>
              <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
            </div>
            <p className="text-muted-foreground leading-snug">
              Pantau tugasan kerja (SPK), kemaskini status pembaikan, dan inventori alat ganti.
            </p>
          </div>
        </Link>
      </div>

      {/* Footer Info */}
      <div className="mt-16 text-center text-muted-foreground/50 text-sm animate-in fade-in duration-1000 delay-500">
        <p>© 2026 AutoServis Professional System. All rights reserved.</p>
      </div>
    </div>
  )
}
