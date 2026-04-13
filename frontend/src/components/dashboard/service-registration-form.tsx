"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { 
  User, 
  Phone, 
  MapPin, 
  Car, 
  FileWarning,
  RotateCcw,
  Printer,
  CheckCircle
} from "lucide-react"

interface FormData {
  nama: string
  noPolisi: string
  noHp: string
  alamat: string
  merk: string
  keluhan: string
}

export function ServiceRegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    nama: "",
    noPolisi: "",
    noHp: "",
    alamat: "",
    merk: "",
    keluhan: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [ticketNumber, setTicketNumber] = useState("")

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const generateTicketNumber = () => {
    const date = new Date()
    const dateStr = date.toISOString().slice(0,10).replace(/-/g, '')
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
    return `TKT-${dateStr}-${random}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newTicket = generateTicketNumber()
    setTicketNumber(newTicket)
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setFormData({
      nama: "",
      noPolisi: "",
      noHp: "",
      alamat: "",
      merk: "",
      keluhan: "",
    })
    setIsSubmitted(false)
    setTicketNumber("")
  }

  const handlePrintTicket = () => {
    const printContent = `
      <html>
        <head>
          <title>Service Ticket - ${ticketNumber}</title>
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; padding: 20px; max-width: 400px; margin: 0 auto; }
            .header { text-align: center; border-bottom: 3px solid #2563eb; padding-bottom: 15px; margin-bottom: 20px; }
            .logo { font-size: 28px; font-weight: bold; color: #2563eb; letter-spacing: -1px; }
            .subtitle { color: #64748b; font-size: 12px; margin-top: 4px; }
            .ticket-no { font-size: 20px; font-weight: bold; margin: 20px 0; padding: 12px; background: linear-gradient(135deg, #dbeafe, #eff6ff); text-align: center; border-radius: 12px; color: #1e40af; border: 2px dashed #93c5fd; }
            .section { margin-bottom: 20px; }
            .section-title { font-weight: 600; color: #2563eb; margin-bottom: 8px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
            .row { display: flex; margin-bottom: 8px; padding: 6px 0; border-bottom: 1px solid #f1f5f9; }
            .label { width: 100px; color: #64748b; font-size: 13px; }
            .value { flex: 1; font-weight: 500; color: #1e293b; font-size: 13px; }
            .footer { text-align: center; margin-top: 25px; font-size: 11px; color: #94a3b8; border-top: 2px dashed #e2e8f0; padding-top: 15px; }
            .qr-placeholder { width: 80px; height: 80px; background: #f8fafc; border: 2px solid #e2e8f0; margin: 10px auto; display: flex; align-items: center; justify-content: center; font-size: 10px; color: #94a3b8; border-radius: 8px; }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo">AutoServis</div>
            <div class="subtitle">Professional Automotive Workshop</div>
          </div>
          <div class="ticket-no">TICKET: ${ticketNumber}</div>
          <div class="section">
            <div class="section-title">Customer Details</div>
            <div class="row"><span class="label">Name</span><span class="value">${formData.nama}</span></div>
            <div class="row"><span class="label">Plate No.</span><span class="value">${formData.noPolisi}</span></div>
            <div class="row"><span class="label">Phone</span><span class="value">${formData.noHp}</span></div>
            <div class="row"><span class="label">Address</span><span class="value">${formData.alamat || '-'}</span></div>
          </div>
          <div class="section">
            <div class="section-title">Vehicle Information</div>
            <div class="row"><span class="label">Vehicle</span><span class="value">${formData.merk}</span></div>
            <div class="row"><span class="label">Complaint</span><span class="value">${formData.keluhan}</span></div>
          </div>
          <div class="qr-placeholder">QR Code</div>
          <div class="footer">
            <p>Please keep this ticket for reference</p>
            <p>Printed: ${new Date().toLocaleString('id-ID')}</p>
          </div>
        </body>
      </html>
    `
    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(printContent)
      printWindow.document.close()
      printWindow.print()
    }
  }

  if (isSubmitted) {
    return (
      <Card className="border-border bg-card shadow-sm">
        <CardContent className="flex flex-col items-center justify-center py-16">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-6">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-card-foreground mb-2">
            Registration Successful!
          </h3>
          <p className="text-muted-foreground mb-6">Your ticket number:</p>
          <div className="text-3xl font-bold text-primary bg-primary/10 px-8 py-4 rounded-xl mb-8 border-2 border-dashed border-primary/30">
            {ticketNumber}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handlePrintTicket}
              size="lg"
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            >
              <Printer className="h-5 w-5" />
              Print Ticket
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleReset}
              className="gap-2 border-border px-8"
            >
              <RotateCcw className="h-5 w-5" />
              New Registration
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="border-border bg-card shadow-sm">
        <CardHeader className="border-b border-border bg-muted/30">
          <CardTitle className="text-xl text-card-foreground">Service Registration Form</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Column - Customer Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">Customer Details</h3>
                  <p className="text-sm text-muted-foreground">Personal information</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="nama" className="text-sm font-medium text-foreground">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="nama"
                      name="nama"
                      placeholder="Enter customer name"
                      value={formData.nama}
                      onChange={handleInputChange}
                      required
                      className="pl-10 h-11 bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="noPolisi" className="text-sm font-medium text-foreground">
                    Plate No. <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Car className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="noPolisi"
                      name="noPolisi"
                      placeholder="e.g. B 1234 ABC"
                      value={formData.noPolisi}
                      onChange={handleInputChange}
                      required
                      className="pl-10 h-11 bg-input border-border text-foreground placeholder:text-muted-foreground uppercase focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="noHp" className="text-sm font-medium text-foreground">
                    Phone <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="noHp"
                      name="noHp"
                      placeholder="08xxxxxxxxxx"
                      value={formData.noHp}
                      onChange={handleInputChange}
                      required
                      className="pl-10 h-11 bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="alamat" className="text-sm font-medium text-foreground">
                    Address
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Textarea
                      id="alamat"
                      name="alamat"
                      placeholder="Enter full address (optional)"
                      value={formData.alamat}
                      onChange={handleInputChange}
                      className="min-h-[88px] pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground resize-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Vehicle Complaints */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <FileWarning className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">Vehicle Complaints</h3>
                  <p className="text-sm text-muted-foreground">Problem description</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="merk" className="text-sm font-medium text-foreground">
                    Vehicle Make/Model <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Car className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="merk"
                      name="merk"
                      placeholder="e.g. Honda Beat, Toyota Avanza"
                      value={formData.merk}
                      onChange={handleInputChange}
                      required
                      className="pl-10 h-11 bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="keluhan" className="text-sm font-medium text-foreground">
                    Complaints/Problems <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <FileWarning className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Textarea
                      id="keluhan"
                      name="keluhan"
                      placeholder="Describe the vehicle problems or complaints in detail..."
                      value={formData.keluhan}
                      onChange={handleInputChange}
                      required
                      className="min-h-[200px] pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground resize-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Provide detailed information for accurate diagnosis
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              <span className="text-destructive">*</span> Required fields
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
                className="gap-2 border-border text-foreground hover:bg-secondary h-11 px-6"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </Button>
              <Button 
                type="submit" 
                size="lg"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
              >
                <Printer className="h-4 w-4" />
                Print Ticket
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}
