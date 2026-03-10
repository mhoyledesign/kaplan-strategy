import { useState } from 'react'
import {
  LayoutDashboard, Search, Users, Server, Map, Palette,
  Monitor, AlertTriangle, Menu, X
} from 'lucide-react'
import type { Page } from '../App'

const navItems: { id: Page; label: string; icon: typeof LayoutDashboard }[] = [
  { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
  { id: 'discovery', label: 'Discovery', icon: Search },
  { id: 'users', label: 'Users', icon: Users },
  { id: 'architecture', label: 'Architecture', icon: Map },
  { id: 'tech', label: 'Technical', icon: Server },
  { id: 'ux', label: 'UX Direction', icon: Palette },
  { id: 'prototype', label: 'UX Prototype', icon: Monitor },
  { id: 'risks', label: 'Risks & Next', icon: AlertTriangle },
]

interface TopNavProps {
  activePage: Page
  onNavigate: (page: Page) => void
}

export function TopNav({ activePage, onNavigate }: TopNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNav = (page: Page) => {
    onNavigate(page)
    setMobileOpen(false)
  }

  return (
    <>
      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Mobile slide-up menu */}
      {mobileOpen && (
        <nav className="fixed bottom-16 left-0 right-0 z-50 lg:hidden bg-card border-t border-border rounded-t-xl py-2 px-3 animate-slide-up">
          <div className="flex items-center justify-between px-1 pb-2 mb-1 border-b border-border">
            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground">
              Navigate
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>
          {navItems.map((item) => {
            const isActive = activePage === item.id
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
                  transition-all duration-200 cursor-pointer
                  ${isActive
                    ? 'bg-brand-green/15 text-brand-green-light'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }
                `}
              >
                <Icon size={16} strokeWidth={isActive ? 2 : 1.5} />
                {item.label}
              </button>
            )
          })}
        </nav>
      )}

      {/* Bottom bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-sm border-t border-border">
        {/* Desktop: left column (branding + nav stacked), right column (logo full height) */}
        <div className="hidden lg:flex items-stretch h-20 px-6">
          <div className="flex flex-col gap-2 flex-1 min-w-0 justify-center">
            <div className="flex items-center gap-3">
              <img
                src="/kaplan-logo-white.png"
                alt="Kaplan Trucking"
                className="h-7 shrink-0"
              />
              <div className="h-5 w-px bg-border shrink-0" />
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-foreground whitespace-nowrap">
                Agent Portal Strategy
              </span>
            </div>
            <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar">
              {navItems.map((item) => {
                const isActive = activePage === item.id
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className={`
                      flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium
                      transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0
                      ${isActive
                        ? 'bg-brand-green/15 text-brand-green-light'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }
                    `}
                  >
                    <Icon size={14} strokeWidth={isActive ? 2 : 1.5} />
                    {item.label}
                  </button>
                )
              })}
            </nav>
          </div>
          <img
            src="/logo-full.svg"
            alt="thunder::tech"
            className="shrink-0 ml-6 py-3 h-full w-auto object-contain opacity-60"
          />
        </div>

        {/* Mobile: branding + hamburger */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              src="/kaplan-logo-white.png"
              alt="Kaplan Trucking"
              className="h-5 shrink-0"
            />
            <div className="h-4 w-px bg-border shrink-0" />
            <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-muted-foreground whitespace-nowrap">
              Agent Portal Strategy
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer shrink-0"
            >
              <Menu size={20} />
            </button>
            <img
              src="/logo-full.svg"
              alt="thunder::tech"
              className="h-5 opacity-50 shrink-0"
            />
          </div>
        </div>
      </footer>
    </>
  )
}
