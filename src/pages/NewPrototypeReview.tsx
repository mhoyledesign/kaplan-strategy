import {
  ExternalLink, Monitor, CheckCircle2, Palette, Shield, Users,
  Wrench, Key, Eye, BarChart3
} from 'lucide-react'

const improvements = [
  {
    title: 'Multi-Brand Theming',
    desc: 'Live brand switcher that changes the entire app\'s colors and logo instantly. Demonstrates zero cross-contamination across all 6 companies — Kaplan Trucking (green), Horizon Freight System (blue), Eastern Express (red), TRX (purple), Bessemer (slate), and more.',
    icon: Palette,
    tags: ['critical gap addressed'],
  },
  {
    title: 'Complete Password Reset Flow',
    desc: '4-step flow: Forgot Password → Email Confirmation → New Password (with strength meter) → Success. Addresses the #1 support call issue — 99% of calls are password-related.',
    icon: Key,
    tags: ['99% of support calls'],
  },
  {
    title: 'CMS Content Indicators',
    desc: 'Toggleable overlay that highlights every piece of content Kristen would manage through the CMS. Dashed borders with "CMS" badges appear on news items, library content, and safety documents.',
    icon: Eye,
    tags: ['Kristen\'s pain point'],
  },
  {
    title: 'Admin Panel & User Management',
    desc: 'Full user management interface with add/edit/enable/disable actions, role assignment, multi-terminal configuration, and activity audit log. Shows IT workflow for the ~3 agents added/terminated weekly.',
    icon: Shield,
    tags: ['IT workflow'],
  },
  {
    title: 'Permission-Based Views',
    desc: 'Demo role switcher in the user menu lets you toggle between Agent Owner, Employee, and Admin views. Employee role shows restricted access to statements. Admin role reveals Site Admin in the sidebar.',
    icon: Users,
    tags: ['discovery requirement'],
  },
  {
    title: 'Equipment Unloading Locations',
    desc: 'The orphaned interactive tool now has a home under Tools. Region and terminal filtering with detailed unloading instructions for 15 facilities across 5 regions.',
    icon: Wrench,
    tags: ['previously missing'],
  },
  {
    title: 'Tools Section',
    desc: 'Dedicated section housing Equipment Unloading, Trinium Dispatch (external link), and Remote Assistance (Splashtop SOS). These high-usage items were missing from the original prototype.',
    icon: Wrench,
    tags: ['Trinium + Remote Assist'],
  },
  {
    title: 'Safety Tabs',
    desc: 'Tabbed interface separating Documents, Inspection Stations, Clinic Locations, and Accidents & Claims. Emergency hotline banner always visible. Searchable station and clinic directories.',
    icon: Shield,
    tags: ['expanded from flat list'],
  },
  {
    title: 'Reports Index',
    desc: 'Color-coded category cards (Financial, Safety, Operations, Compliance) with all 11 report types from discovery. Each report has view/download actions.',
    icon: BarChart3,
    tags: ['organized from scattered'],
  },
]

export function NewPrototypeReview() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-8 animate-fade-in">
        <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green-light mb-2">
          New Prototype
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-3">
          Enhanced Portal Concept
        </h1>
        <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
          A new prototype built from scratch to address every gap identified in discovery.
          Same Fluent Design language, same sidebar navigation pattern — but with multi-brand theming,
          complete auth flows, CMS indicators, admin tools, and all the features that were missing.
        </p>
      </div>

      {/* Launch CTA */}
      <a
        href="https://thundertech-kaplan-agent-portal-prototype-v2-production.up.railway.app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 bg-brand-green/10 border border-brand-green/30 rounded-xl p-5 mb-8 hover:bg-brand-green/15 transition-colors group animate-fade-in stagger-1"
      >
        <div className="w-12 h-12 rounded-xl bg-brand-green/20 flex items-center justify-center shrink-0">
          <Monitor size={24} className="text-brand-green-light" />
        </div>
        <div className="flex-1">
          <div className="text-base font-bold">Launch New Portal Prototype</div>
          <div className="text-xs text-muted-foreground mt-0.5">
            Opens the enhanced agent portal concept in a new tab. Includes multi-brand switching,
            password reset flow, admin panel, and all discovery-identified features.
          </div>
        </div>
        <ExternalLink size={18} className="text-brand-green-light group-hover:translate-x-0.5 transition-transform shrink-0" />
      </a>

      {/* Demo tips */}
      <div className="bg-card border border-border rounded-xl p-5 mb-8 animate-fade-in stagger-2">
        <h2 className="text-sm font-bold mb-3">Demo Walkthrough Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-muted-foreground">
          <div className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0 text-[10px] font-bold text-brand-green-light">1</span>
            <span>Log in with any credentials — authentication is simulated</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0 text-[10px] font-bold text-brand-green-light">2</span>
            <span>Use the <strong>Brand Switcher</strong> in the header to see all 5 company themes</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0 text-[10px] font-bold text-brand-green-light">3</span>
            <span>Toggle the <strong>CMS</strong> button to see which content areas Kristen would manage</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0 text-[10px] font-bold text-brand-green-light">4</span>
            <span>Switch roles in the <strong>User Menu</strong> to see permission differences (Admin shows Site Admin in sidebar)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0 text-[10px] font-bold text-brand-green-light">5</span>
            <span>Try the <strong>password reset flow</strong> from the login page "Forgot your password?" link</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0 text-[10px] font-bold text-brand-green-light">6</span>
            <span>Click <strong>View</strong> on any statement to see the PDF modal with progress simulation</span>
          </div>
        </div>
      </div>

      {/* What's new */}
      <div className="mb-6 animate-fade-in stagger-3">
        <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-green-light mb-4 flex items-center gap-2">
          <CheckCircle2 size={14} />
          What This Prototype Adds
        </h2>
        <div className="space-y-3">
          {improvements.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={item.title} className={`bg-card border border-border rounded-xl p-5 animate-fade-in stagger-${Math.min(i + 1, 8)}`}>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-green/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={16} className="text-brand-green-light" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-sm font-bold">{item.title}</span>
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[9px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded-full bg-brand-green/10 text-brand-green-light">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
