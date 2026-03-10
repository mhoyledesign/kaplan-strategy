import { useState } from 'react'
import {
  ArrowRight, CheckCircle2, XCircle, AlertCircle, MinusCircle,
  LayoutDashboard, FileText, Building2, Users, Newspaper, BookOpen,
  BarChart3, Shield, Link2, Wrench
} from 'lucide-react'

type Tab = 'inventory' | 'proposed' | 'comparison'

const featureInventory = [
  { feature: 'Settlement Statements', current: 'API-driven PDF retrieval', usage: 'Critical — 90%', action: 'Rebuild (primary)', actionType: 'rebuild' },
  { feature: 'Employee Directory', current: 'DB-driven, search by name/dept', usage: 'Low', action: 'Rebuild with modern search', actionType: 'rebuild' },
  { feature: 'Terminal List', current: 'DB-driven, search by terminal/city', usage: 'Low', action: 'Rebuild with modern search', actionType: 'rebuild' },
  { feature: 'Safety Resources', current: 'Static pages + PDFs', usage: 'Occasional', action: 'CMS-managed content', actionType: 'rebuild' },
  { feature: 'Video Library', current: '2 videos, 7+ years old', usage: 'Minimal', action: 'Merge into Library', actionType: 'consolidate' },
  { feature: 'Reports (SSRS)', current: '6 reports (4 working, 2 broken)', usage: 'Unknown', action: 'Rebuild as report index', actionType: 'rebuild' },
  { feature: 'Carrier Approval (RMIS)', current: 'External link', usage: 'Unknown', action: 'Keep as external link', actionType: 'keep' },
  { feature: 'Equipment Unloading', current: 'Complex SharedWeb tool', usage: 'Low', action: 'Keep/embed', actionType: 'keep' },
  { feature: 'Transflo Cover Sheet', current: 'Static PDF', usage: 'Being phased out', action: 'Archive or omit', actionType: 'remove' },
  { feature: 'Remote Assistance', current: 'Splashtop SOS download', usage: 'IT use', action: 'Keep prominent', actionType: 'keep' },
  { feature: 'News/Announcements', current: 'Non-existent', usage: 'N/A', action: 'New feature — dashboard feed', actionType: 'new' },
  { feature: 'Password Reset', current: 'Broken (~75% failure)', usage: 'Attempted', action: 'Rebuild properly', actionType: 'rebuild' },
  { feature: 'Update Profile', current: 'Broken (re-enter all info)', usage: 'Attempted', action: 'Rebuild properly', actionType: 'rebuild' },
]

const proposedNav = [
  { icon: LayoutDashboard, label: 'Dashboard', desc: 'Hub: alerts + quick-access cards + newsfeed', source: 'New (Jeremy)' },
  { icon: FileText, label: 'Statements', desc: 'Filter presets + modal PDF viewer', source: 'Redesigned' },
  { icon: Building2, label: 'Terminal List', desc: 'Card grid, real-time search', source: 'Modernized' },
  { icon: Users, label: 'Employee Directory', desc: 'Card grid, avatar initials, real-time search', source: 'Modernized' },
  { icon: Newspaper, label: 'News & Updates', desc: 'Full newsfeed archive', source: 'New (Jeremy)' },
  { icon: BookOpen, label: 'Library', desc: 'Documents + videos, search + category filter', source: 'New (Jeremy)' },
  { icon: BarChart3, label: 'Reports', desc: 'Aggregated report index', source: 'New (Jeremy)' },
  { icon: Shield, label: 'Safety', desc: 'Accidents/claims, roadside, location tools', source: 'Restructured' },
  { icon: Link2, label: 'Carrier Approval', desc: 'External link to RMIS', source: 'Kept' },
  { icon: Wrench, label: 'Tools', desc: 'Equipment Unloading, Remote Assistance, Trinium', source: 'New' },
]

const navChanges = [
  { current: 'Home (exits portal!)', proposed: 'Removed', reason: 'Anti-pattern. Logo serves as home.', type: 'removed' },
  { current: 'Agent Home', proposed: 'Dashboard', reason: 'Completely redesigned with alerts, quick-access cards, newsfeed.', type: 'redesigned' },
  { current: 'Employee Contacts', proposed: 'Employee Directory', reason: 'Renamed, cards + real-time search.', type: 'modernized' },
  { current: 'Transflo Cover Sheet', proposed: 'Moved to Library', reason: 'Being phased out. No longer nav-level item.', type: 'consolidated' },
  { current: 'Video Library', proposed: 'Merged into Library', reason: 'Only 2 videos. Single searchable repository.', type: 'consolidated' },
  { current: 'Site Administration', proposed: 'Utility area (hidden)', reason: 'Permission-gated. Clutters nav for 95% of users.', type: 'moved' },
  { current: 'Submit Suggestion (mailto)', proposed: 'Removed or form', reason: 'mailto links are poor UX. Replace with feedback form.', type: 'removed' },
  { current: '—', proposed: '+ News & Updates', reason: 'Solves content glaze-over problem.', type: 'new' },
  { current: '—', proposed: '+ Library', reason: 'Consolidates scattered PDFs and videos.', type: 'new' },
  { current: '—', proposed: '+ Reports', reason: 'Aggregates 6+ SSRS reports in one index.', type: 'new' },
  { current: '—', proposed: '+ Tools', reason: 'Home for Equipment Unloading, Remote Assistance, Trinium.', type: 'new' },
]

export function InformationArchitecture() {
  const [tab, setTab] = useState<Tab>('proposed')

  const tabs: { id: Tab; label: string }[] = [
    { id: 'proposed', label: 'Proposed Navigation' },
    { id: 'inventory', label: 'Feature Inventory' },
    { id: 'comparison', label: 'What Changed' },
  ]

  const actionBadge = (type: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      rebuild: { bg: '#3d7a1c20', text: '#4a9422' },
      new: { bg: '#00ABC720', text: '#00ABC7' },
      keep: { bg: '#99989920', text: '#999899' },
      consolidate: { bg: '#FFA30020', text: '#FFA300' },
      remove: { bg: '#D2263020', text: '#D22630' },
    }
    const c = colors[type] || colors.keep
    return (
      <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full whitespace-nowrap" style={{ backgroundColor: c.bg, color: c.text }}>
        {type}
      </span>
    )
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-8 animate-fade-in">
        <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green-light mb-2">
          Information Architecture
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-3">
          Structure & Navigation
        </h1>
        <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
          Synthesized from discovery sessions, live portal audit, and Jeremy's design narrative.
          Current portal has 11 mixed-type nav items with heavy duplication. Proposed: 10 consistently-typed pages.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto no-scrollbar">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer whitespace-nowrap
              ${tab === t.id ? 'bg-brand-green/15 text-brand-green-light' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Proposed Navigation */}
      {tab === 'proposed' && (
        <div className="space-y-6">
          <div className="animate-fade-in">
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Sidebar Navigation (10 items)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {proposedNav.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className={`bg-card border border-border rounded-xl p-4 flex gap-3 animate-fade-in stagger-${Math.min(i + 1, 8)}`}>
                    <div className="w-9 h-9 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-brand-green-light" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <div className="text-xs font-bold">{item.label}</div>
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground">{item.source}</span>
                      </div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Utility area */}
          <div className="bg-card border border-border rounded-xl p-5 animate-fade-in stagger-6">
            <h3 className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground mb-3">Utility Area (top bar or user menu)</h3>
            <div className="flex flex-wrap gap-2">
              {['Profile / Password', 'Logout', 'Site Admin (permission-gated)'].map((item) => (
                <span key={item} className="text-[11px] px-3 py-1.5 rounded-lg bg-muted text-muted-foreground">{item}</span>
              ))}
            </div>
          </div>

          {/* Multi-brand callout */}
          <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-5 animate-fade-in stagger-7">
            <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-green-light mb-2">Multi-Brand Architecture</div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              6 companies with identical functionality but zero visual crossover. One CMS, one content manager (Kristen).
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {['Kaplan Trucking', 'Horizon Freight System', 'TRX', 'DD&S Express', 'Eastern Express', 'Single Source'].map((brand) => (
                <div key={brand} className="text-[11px] px-3 py-2 rounded-lg bg-card border border-border text-muted-foreground">{brand}</div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Feature Inventory */}
      {tab === 'inventory' && (
        <div className="bg-card border border-border rounded-xl overflow-hidden animate-fade-in">
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-[10px] font-semibold tracking-wider uppercase text-muted-foreground">Feature</th>
                  <th className="text-left p-4 text-[10px] font-semibold tracking-wider uppercase text-muted-foreground hidden sm:table-cell">Current State</th>
                  <th className="text-left p-4 text-[10px] font-semibold tracking-wider uppercase text-muted-foreground w-28">Usage</th>
                  <th className="text-left p-4 text-[10px] font-semibold tracking-wider uppercase text-muted-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {featureInventory.map((f, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="p-4 font-semibold">{f.feature}</td>
                    <td className="p-4 text-muted-foreground hidden sm:table-cell">{f.current}</td>
                    <td className="p-4 text-muted-foreground">{f.usage}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {actionBadge(f.actionType)}
                        <span className="text-muted-foreground hidden lg:inline">{f.action}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* What Changed */}
      {tab === 'comparison' && (
        <div className="space-y-2 animate-fade-in">
          {navChanges.map((c, i) => {
            const typeColors: Record<string, string> = {
              removed: 'text-brand-crimson',
              redesigned: 'text-brand-green-light',
              modernized: 'text-brand-teal',
              consolidated: 'text-brand-gold',
              moved: 'text-muted-foreground',
              new: 'text-brand-teal',
            }
            const typeIcons: Record<string, typeof CheckCircle2> = {
              removed: XCircle,
              redesigned: CheckCircle2,
              modernized: CheckCircle2,
              consolidated: MinusCircle,
              moved: ArrowRight,
              new: CheckCircle2,
            }
            const Icon = typeIcons[c.type] || CheckCircle2
            return (
              <div key={i} className={`bg-card border border-border rounded-xl p-4 flex items-start gap-3 animate-fade-in stagger-${Math.min(i + 1, 8)}`}>
                <Icon size={14} className={`shrink-0 mt-0.5 ${typeColors[c.type]}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-muted-foreground line-through">{c.current}</span>
                    <ArrowRight size={10} className="text-muted-foreground/40" />
                    <span className="text-xs font-bold">{c.proposed}</span>
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{c.reason}</div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
