"use client"

import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  ClipboardPlus,
  FileText,
  Calculator,
  Wrench,
  ChevronLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps {
  collapsed: boolean
  onToggleCollapse: () => void
  onMobileLinkClick?: () => void
}

const menuItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/pendaftaran", label: "Registration", icon: ClipboardPlus },
  { href: "/dashboard/spk", label: "Queue", icon: FileText },
  { href: "/dashboard/kasir", label: "Cashier", icon: Calculator },
]

export function Sidebar({
  collapsed,
  onToggleCollapse,
  onMobileLinkClick,
}: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        "flex flex-col relative h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo Section */}
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4 shrink-0">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sidebar-primary">
            <Wrench className="h-5 w-5 text-sidebar-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="flex flex-col whitespace-nowrap">
              <span className="text-base font-bold text-sidebar-foreground">
                AutoServis
              </span>
              <span className="text-xs text-sidebar-foreground/60">Workshop System</span>
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleCollapse}
          className="h-8 w-8 text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent hidden lg:flex shrink-0"
        >
          <ChevronLeft
            className={cn(
              "h-4 w-4 transition-transform",
              collapsed && "rotate-180"
            )}
          />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden p-3 flex flex-col gap-1">
        {!collapsed && (
          <span className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/50 whitespace-nowrap">
            Main Menu
          </span>
        )}
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onMobileLinkClick}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all w-full",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-lg shadow-sidebar-primary/20"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
              )}
            >
              <Icon className={cn("h-5 w-5 shrink-0")} />
              {!collapsed && <span className="whitespace-nowrap">{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="mt-auto p-4 shrink-0">
          <div className="rounded-xl bg-sidebar-accent/50 p-4">
            <p className="text-xs text-sidebar-foreground/60 whitespace-nowrap">
              Workshop Info System
            </p>
            <p className="text-sm font-semibold text-sidebar-foreground">v1.0.0</p>
          </div>
        </div>
      )}
    </aside>
  )
}
