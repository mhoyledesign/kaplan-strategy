import {
  Users, FileText, Server, ArrowRight, Shield, Clock,
  CheckCircle2, Circle, Monitor, Eye
} from 'lucide-react'
import type { Page } from '../App'

interface Props {
  onNavigate: (page: Page) => void
}

const stats = [
  { label: 'Companies', value: '6', sub: 'under Bessemer Management', icon: Shield },
  { label: 'Agent Locations', value: '200+', sub: 'across the network', icon: Users },
  { label: 'Active Drivers', value: '3,000', sub: 'signed up', icon: FileText },
  { label: 'Portal Age', value: '~30yr', sub: 'static HTML on IIS', icon: Clock },
]

const quickLinks: { label: string; desc: string; page: Page }[] = [
  { label: 'Discovery', desc: 'Meeting notes, key decisions, and requirements', page: 'discovery' },
  { label: 'Users & Context', desc: 'Agent personas, pain points, and behaviors', page: 'users' },
  { label: 'Information Architecture', desc: 'Feature inventory, proposed nav, multi-brand', page: 'architecture' },
  { label: 'Technical Landscape', desc: 'Current stack analysis and API strategy', page: 'tech' },
  { label: 'UX Direction', desc: 'Design principles and visual direction', page: 'ux' },
  { label: 'Prototype Review', desc: 'What works, what needs attention, view live prototype', page: 'prototype' },
  { label: 'Risks & Next Steps', desc: 'Strategic risks, open questions, opportunities', page: 'risks' },
]

export function Dashboard({ onNavigate }: Props) {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Discovery & Strategy',
      status: 'in-progress' as const,
      color: '#3d7a1c',
      deliverables: [
        'Kickoff & stakeholder interviews',
        'Portal audit and content inventory',
        'User research and persona development',
        'Information architecture & feature mapping',
        'Technical assessment and API strategy',
        'Design direction and prototype',
        'Strategy presentation (this app)',
      ],
      completed: [
        'Kickoff session (Feb 16, 2026)',
        'Working Session 1 — portal walkthrough, features, user behavior',
        'QA session — agent personas, pain points, daily workflow',
        'Working Session 2 — technical architecture, API approach, dev preferences',
        'Live portal scrape and technical audit',
        'Information architecture extraction',
        'Three-way comparison analysis',
        'Interactive prototype (Jeremy)',
      ],
      remaining: [
        'Stakeholder review of strategy & prototype',
        'Permissions documentation (from Steve)',
        'Finalize Phase 2 scope and proposal',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Design & Build',
      status: 'upcoming' as const,
      color: '#333D47',
      deliverables: [
        'Responsive front-end development (React)',
        'Multi-brand theming system (5-6 companies)',
        'CMS integration for Kristen',
        'API integration with Kaplan .NET backend',
        'Settlement statement viewer',
        'Permission system and user management',
        'QA testing and UAT',
        'Launch and post-launch support',
      ],
      completed: [],
      remaining: [],
    },
  ]

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-10 animate-fade-in">
        <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green-light mb-2">
          Discovery &middot; Strategy &middot; UX
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-3">
          Kaplan Agent Portal<br />Redesign Strategy
        </h1>
        <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
          Replace a 30-year-old static HTML agent portal with a modern, CMS-driven experience
          — across 5 (soon 6) separately branded trucking companies with zero cross-contamination.
          Phase 1 is modernizing existing functionality. Build a foundation to stack on.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((s, i) => {
          const Icon = s.icon
          return (
            <div
              key={s.label}
              className={`bg-card border border-border rounded-xl p-5 animate-fade-in stagger-${i + 1}`}
            >
              <Icon size={18} className="text-brand-green-light mb-3" strokeWidth={1.5} />
              <div className="text-3xl font-black tracking-tight">{s.value}</div>
              <div className="text-sm font-semibold mt-1">{s.label}</div>
              <div className="text-xs text-muted-foreground">{s.sub}</div>
            </div>
          )
        })}
      </div>

      {/* Current position callout */}
      <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-5 mb-6 animate-fade-in stagger-5">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-brand-green-light animate-pulse" />
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-green-light">
            Current Position — Discovery Complete
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Four working sessions completed. Portal scraped, analyzed, and documented.
          Jeremy's interactive prototype built. Three-way comparison (discovery notes vs. live portal vs. prototype)
          complete. Ready for stakeholder review and Phase 2 scoping.
        </p>
      </div>

      {/* Phase cards */}
      <div className="space-y-6 mb-10">
        {phases.map((s, i) => (
          <div
            key={s.phase}
            className={`bg-card border border-border rounded-xl p-6 animate-fade-in stagger-${i + 6}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-2">
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className="text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: s.color + '20', color: s.color === '#333D47' ? '#999899' : s.color }}
                >
                  {s.phase}
                </span>
                <h2 className="text-lg font-bold">{s.title}</h2>
                <span
                  className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: s.status === 'in-progress' ? '#3d7a1c20' : '#333D4720',
                    color: s.status === 'in-progress' ? '#4a9422' : '#999899',
                  }}
                >
                  {s.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                </span>
              </div>
            </div>

            <div className={`grid gap-6 ${s.completed.length > 0 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1'}`}>
              <div>
                <h3 className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground mb-3">
                  Deliverables
                </h3>
                <ul className="space-y-1.5">
                  {s.deliverables.map((d, j) => (
                    <li key={j} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
                      <Circle size={8} className="shrink-0 mt-1.5 text-muted-foreground/40" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {s.completed.length > 0 && (
                <div>
                  <h3 className="text-[10px] font-semibold tracking-wider uppercase text-brand-teal mb-3">
                    Completed
                  </h3>
                  <ul className="space-y-1.5">
                    {s.completed.map((c, j) => (
                      <li key={j} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
                        <CheckCircle2 size={12} className="shrink-0 mt-0.5 text-brand-teal" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {s.remaining.length > 0 && (
                <div>
                  <h3 className="text-[10px] font-semibold tracking-wider uppercase text-brand-green-light mb-3">
                    Remaining
                  </h3>
                  <ul className="space-y-1.5">
                    {s.remaining.map((r, j) => (
                      <li key={j} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
                        <ArrowRight size={12} className="shrink-0 mt-0.5 text-brand-green-light" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Two-column: quick nav + key insight */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="animate-fade-in stagger-5">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Navigate
          </h2>
          <div className="space-y-2">
            {quickLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className="w-full flex items-center justify-between bg-card border border-border rounded-lg p-4 hover:border-brand-green/40 transition-colors group cursor-pointer text-left"
              >
                <div>
                  <div className="font-semibold text-sm">{link.label}</div>
                  <div className="text-xs text-muted-foreground">{link.desc}</div>
                </div>
                <ArrowRight size={16} className="text-muted-foreground group-hover:text-brand-green-light transition-colors shrink-0 ml-3" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {/* Key insight */}
          <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-6 animate-fade-in stagger-6">
            <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green-light mb-2">
              Core Mandate
            </div>
            <div className="text-lg font-bold mb-1">Simplicity Above All</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              "Simplicity, ease of use, don't want 15 ways to get to the same thing, want a streamlined
              and simple and clean page." — Steve Hardin, IT Services
            </p>
          </div>

          {/* Stakeholders */}
          <div className="bg-card border border-border rounded-xl p-6 animate-fade-in stagger-7">
            <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
              Key Stakeholders
            </div>
            <div className="space-y-2">
              {[
                { name: 'Dave', role: 'President', note: 'Final decision-maker. Needs visual mockups.' },
                { name: 'JD Ross', role: 'IT Director', note: 'Secure, stable, owner-approved.' },
                { name: 'Steve Hardin', role: 'IT Services', note: 'Day-to-day contact. Permissions.' },
                { name: 'Sean', role: 'Dev Manager', note: 'Leads .NET API team.' },
                { name: 'Kristen Steele', role: 'HR/Communications', note: 'Content manager. Needs CMS.' },
              ].map((p) => (
                <div key={p.name} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold text-brand-green-light">
                      {p.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold">{p.name} <span className="text-muted-foreground font-normal">— {p.role}</span></div>
                    <div className="text-[11px] text-muted-foreground">{p.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
