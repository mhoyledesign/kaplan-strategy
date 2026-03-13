import {
  Layers, Palette, Type, MousePointer, Eye, Zap,
  Monitor, Smartphone, Printer, Grid3x3,
  LayoutDashboard, FileText, Building2, Users, Newspaper, BookOpen,
  BarChart3, Link2, Wrench
} from 'lucide-react'

const principles = [
  {
    icon: Layers,
    title: 'Progressive Disclosure',
    desc: 'Information is layered. Dashboard shows headlines; clicking reveals summaries; opening a document renders full content. The agent is never confronted with more information than they need.',
  },
  {
    icon: Zap,
    title: 'Speed & Feedback',
    desc: 'When the portal talks to a backend API (generating a PDF, loading a report), the agent sees a progress indicator. They are never left wondering whether something is working.',
  },
  {
    icon: Eye,
    title: 'Wayfinding',
    desc: 'The logo is always visible. The current page is always indicated. Breadcrumbs and page titles reinforce location. The agent always knows where they are.',
  },
  {
    icon: MousePointer,
    title: 'Simplicity First',
    desc: '"Don\'t want 15 ways to get to the same thing." One clear path to each function. Current portal has 2 parallel nav systems — new design uses sidebar only with dashboard quick-access for top destinations.',
  },
]

const componentPatterns = [
  { label: 'Cards', desc: 'Primary content container for statements, terminals, employees, library items, reports', color: '#3d7a1c' },
  { label: 'Modal Overlays', desc: 'PDF viewing — solves pop-up blocker complaint. Progress indicator + print/download in footer.', color: '#00ABC7' },
  { label: 'Alert Bands', desc: 'Dashboard top: red = action-required, amber = awareness. Disappear when no alerts.', color: '#FFA300' },
  { label: 'Real-time Search', desc: 'Replace postback-based form submissions. Employee, terminal, and library searches filter as you type.', color: '#3d7a1c' },
  { label: 'Filter Presets', desc: 'Statements: "Recent" (default), "Past Week," "Past 2 Weeks," "Date Range." One-click for common needs.', color: '#00ABC7' },
  { label: 'Progress Indicators', desc: 'All API-driven content loads. Current portal gives zero feedback during waits.', color: '#FFA300' },
]

const proposedNav = [
  { icon: LayoutDashboard, label: 'Home', desc: 'Hub: action items + quick-access cards + newsfeed', source: 'New' },
  { icon: FileText, label: 'Statements', desc: 'Filter presets + modal PDF viewer + previous statement', source: 'Redesigned' },
  { icon: Building2, label: 'Terminal List', desc: 'Card grid, real-time search', source: 'Modernized' },
  { icon: Users, label: 'Employee Directory', desc: 'Card grid, avatar initials, real-time search', source: 'Modernized' },
  { icon: Newspaper, label: 'News & Updates', desc: 'Full newsfeed archive with category filters', source: 'New' },
  { icon: BookOpen, label: 'Library', desc: 'Documents + videos + training, search + category/type filter', source: 'New' },
  { icon: BarChart3, label: 'Reports', desc: 'Aggregated report index by category', source: 'New' },
  { icon: Link2, label: 'Carrier Approval', desc: 'External link to RMIS', source: 'Kept' },
  { icon: Wrench, label: 'Tools & Resources', desc: 'Equipment Unloading, Safety, Feedback, Trinium, Remote Assistance', source: 'New' },
]

export function UXDirection() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-8 animate-fade-in">
        <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green-light mb-2">
          UX Vision
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-3">
          Design Principles & Visual Direction
        </h1>
        <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
          Informed by stakeholder feedback, user research, and the Fluent Design approach.
          The goal: modern but not shocking. Professional but not corporate. Clean and fast.
        </p>
      </div>

      {/* Design spectrum */}
      <div className="bg-card border border-border rounded-xl p-6 mb-8 animate-fade-in stagger-1">
        <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
          The Design Spectrum
        </h2>
        <div className="relative">
          <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-2">
            <span>Too Basic</span>
            <span className="text-brand-green-light font-bold">Sweet Spot</span>
            <span>Too Slick</span>
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-muted via-brand-green to-muted" style={{ width: '100%' }} />
          </div>
          <div className="flex items-center justify-between text-[10px] text-muted-foreground/60 mt-2">
            <span>Current portal (1995)</span>
            <span>Target</span>
            <span>Corporate software</span>
          </div>
        </div>
      </div>

      {/* Stakeholder quotes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { quote: '"Just on the right side of professional for trucking."', author: 'Kristen Steele', role: 'HR/Communications', note: 'Functional over flashy. Clean over clever.' },
          { quote: '"Simplicity, ease of use, streamlined and clean."', author: 'Steve Hardin', role: 'IT Services', note: 'Don\'t want 15 ways to get to the same thing.' },
          { quote: '"Lean heavily towards usability, functionality."', author: 'JD Ross', role: 'IT Director', note: 'Ease of operation is the priority.' },
        ].map((q, i) => (
          <div key={q.author} className={`bg-card border border-border rounded-xl p-5 animate-fade-in stagger-${i + 2}`}>
            <blockquote className="text-sm font-semibold italic leading-relaxed mb-3">{q.quote}</blockquote>
            <div className="text-xs font-bold">{q.author}</div>
            <div className="text-[10px] text-muted-foreground">{q.role}</div>
            <div className="text-[11px] text-muted-foreground mt-2 pt-2 border-t border-border">{q.note}</div>
          </div>
        ))}
      </div>

      {/* Design Language */}
      <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-6 mb-8 animate-fade-in stagger-5">
        <div className="flex items-center gap-2 mb-3">
          <Palette size={16} className="text-brand-green-light" />
          <h2 className="text-sm font-bold">Fluent Design Language</h2>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          thunder::tech proposes Microsoft's Fluent Design system as the visual foundation. This aligns well with Kristen's
          "right side of professional" directive and the .NET team's familiarity with the Microsoft ecosystem.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Layered Surfaces', desc: 'Subtle depth and elevation' },
            { label: '4px/8px Grid', desc: 'Consistent spacing system' },
            { label: 'Segoe UI', desc: 'Clean, neutral typography' },
            { label: 'Restrained Motion', desc: 'Functional, not decorative' },
          ].map((item) => (
            <div key={item.label} className="bg-card/50 rounded-lg p-3">
              <div className="text-[11px] font-bold">{item.label}</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Principles */}
        <div className="animate-fade-in stagger-6">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Design Principles
          </h2>
          <div className="space-y-3">
            {principles.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.title} className="bg-card border border-border rounded-xl p-4 flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-brand-green-light" />
                  </div>
                  <div>
                    <div className="text-xs font-bold mb-0.5">{p.title}</div>
                    <div className="text-[11px] text-muted-foreground leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Component Patterns */}
        <div className="animate-fade-in stagger-7">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Component Patterns
          </h2>
          <div className="space-y-3">
            {componentPatterns.map((c) => (
              <div key={c.label} className="bg-card border border-border rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: c.color }} />
                  <div className="text-xs font-bold">{c.label}</div>
                </div>
                <div className="text-[11px] text-muted-foreground leading-relaxed">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Color System */}
      <div className="mt-8 bg-card border border-border rounded-xl p-6 animate-fade-in stagger-8">
        <h2 className="text-sm font-bold mb-4 flex items-center gap-2">
          <Grid3x3 size={16} className="text-brand-green-light" />
          Color System
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { color: '#336615', label: 'Kaplan Green', note: 'Primary accent (from existing portal)' },
            { color: '#ffffff', label: 'White', note: 'Background surfaces' },
            { color: '#f5f5f5', label: 'Light Gray', note: 'Card backgrounds' },
            { color: '#333D47', label: 'Dark Gray', note: 'Text and borders' },
          ].map((c) => (
            <div key={c.label} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg border border-border shrink-0" style={{ backgroundColor: c.color }} />
              <div>
                <div className="text-[11px] font-bold">{c.label}</div>
                <div className="text-[10px] text-muted-foreground">{c.note}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-muted-foreground mt-4 pt-3 border-t border-border">
          Must be tokenized for multi-brand swapping. The existing SharedWeb already has a <code className="text-brand-green-light bg-brand-green/10 px-1 rounded">currentCompany</code> config
          with PrimaryColor, PrimaryColorDarker, PrimaryColorLighter — this pattern informs the design system.
        </p>
      </div>

      {/* Responsive notes */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { icon: Monitor, label: 'Desktop-First', desc: 'Agents are primarily desktop users. Fixed sidebar + full content area.' },
          { icon: Smartphone, label: 'Responsive', desc: '"We definitely want this reactive." Sidebar collapses on mobile.' },
          { icon: Printer, label: 'Print-Friendly', desc: 'Drivers still want physical copies. PDF content must print cleanly.' },
        ].map((r, i) => {
          const Icon = r.icon
          return (
            <div key={r.label} className={`bg-card border border-border rounded-xl p-4 animate-fade-in stagger-${i + 1}`}>
              <Icon size={16} className="text-brand-green-light mb-2" />
              <div className="text-xs font-bold">{r.label}</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">{r.desc}</div>
            </div>
          )
        })}
      </div>

      {/* Information Architecture */}
      <div className="mt-10">
        <h2 className="text-xl sm:text-2xl font-black tracking-tight mb-3">
          Information Architecture
        </h2>
        <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed mb-6">
          Current portal has 11 mixed-type nav items with heavy duplication. Proposed: 9 consistently-typed
          sidebar pages with sub-routes for tools. Safety, Equipment Unloading, and Feedback live under
          Tools & Resources.
        </p>

        {/* Proposed Navigation */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Sidebar Navigation (9 items)
          </h3>
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
        <div className="bg-card border border-border rounded-xl p-5 mb-6">
          <h3 className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground mb-3">Utility Area (top bar + user menu)</h3>
          <div className="flex flex-wrap gap-2">
            {['Profile / Password', 'Logout', 'Site Admin (permission-gated)', 'Notes toggle (demo)', 'Brand switcher (demo)', 'Role switcher (demo)'].map((item) => (
              <span key={item} className="text-[11px] px-3 py-1.5 rounded-lg bg-muted text-muted-foreground">{item}</span>
            ))}
          </div>
        </div>

        {/* Multi-brand callout */}
        <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-5">
          <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-green-light mb-2">Multi-Brand Architecture</div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            6 companies with identical functionality but zero visual crossover. One CMS, one content manager (Kristen).
            CSS custom properties on :root swap the entire theme at login — no separate builds, no forks.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {['Kaplan Trucking', 'Horizon Freight System', 'TRX', 'DD&S Express', 'Eastern Express', 'Single Source'].map((brand) => (
              <div key={brand} className="text-[11px] px-3 py-2 rounded-lg bg-card border border-border text-muted-foreground">{brand}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
