import {
  ExternalLink, Monitor, CheckCircle2, Palette, Shield, Users,
  Wrench, Key, Eye, BarChart3, MessageSquare, Smartphone
} from 'lucide-react'

const designFoundation = [
  {
    title: 'Dashboard Hub',
    desc: 'Alerts + quick-access cards + newsfeed directly solve the "glaze-over" problem. Agents see what\'s urgent and can jump to their task in one click. The newsfeed gives Kristen a place to publish without developer help.',
    tags: ['solves glaze-over', 'new capability'],
  },
  {
    title: 'Modal PDF Viewer',
    desc: 'In-page modal with progress indicator for statement PDFs. Eliminates the pop-up blocker complaint — the #1 user frustration. Print + download in the modal footer keeps the agent in context.',
    tags: ['solves pop-up blockers', 'critical fix'],
  },
  {
    title: 'Statement Filter Presets',
    desc: '"Recent" (default), "Past Week," "Past 2 Weeks," "Date Range." One-click presets for the most common needs. Three clicks from sign-in to viewing most recent statement.',
    tags: ['speed-to-content', '90% use case'],
  },
  {
    title: 'Sidebar Navigation',
    desc: 'Reduces 11 mixed-type items (pages, PDFs, external links, mailto) to consistently-typed internal pages. Collapsible to icon-only mode. Eliminates the current portal\'s confusing dual-navigation.',
    tags: ['simplification'],
  },
  {
    title: 'Consolidated Library',
    desc: 'Replaces scattered PDFs across multiple pages and the neglected Video Library into one searchable, filterable interface.',
    tags: ['reduces clutter', 'CMS-ready'],
  },
  {
    title: 'Progressive Disclosure',
    desc: 'Headlines → summaries → full content. Newsfeed items expand inline. Documents open in modals. The agent is never confronted with more than they need at any given moment.',
    tags: ['information hierarchy'],
  },
  {
    title: 'Employee Directory Cards',
    desc: 'Avatar initials (color-coded), name, role, terminal, email. Real-time search replacing clunky postback forms.',
    tags: ['modernization'],
  },
]

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
    title: 'Notes Overlay',
    desc: 'Toggleable overlay that highlights every piece of content Kristen would manage through the CMS. Dashed borders with "Notes" badges appear on news items, library content, safety documents, and statement viewers.',
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
    desc: 'Demo role switcher in the user menu lets you toggle between Agent (Owner), Agent (Employee), and Admin views. Agent (Employee) role shows restricted access to statements — controlled by a Trinium checkbox in production. Admin role reveals Site Admin in the sidebar.',
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
    title: 'Tools & Resources Section',
    desc: 'Dedicated section housing Equipment Unloading, Safety Resources, Feedback form, Trinium Dispatch (external link), and Remote Assistance (Splashtop SOS). Sub-routes keep the sidebar clean while consolidating utility features.',
    icon: Wrench,
    tags: ['Trinium + Remote Assist'],
  },
  {
    title: 'Safety Resources',
    desc: 'Tabbed interface under Tools & Resources separating Documents, Inspection Stations, Clinic Locations, and Accidents & Claims. Emergency hotline banner always visible. Searchable station and clinic directories.',
    icon: Shield,
    tags: ['expanded from flat list'],
  },
  {
    title: 'Feedback Form',
    desc: 'Brand-aware feedback form under Tools & Resources. Agents can submit feature requests, report issues, request content updates, or send general feedback — giving Kristen and IT a structured intake channel.',
    icon: MessageSquare,
    tags: ['new capability'],
  },
  {
    title: 'Reports Index',
    desc: 'Color-coded category cards (Financial, Safety, Operations, Compliance) with all 11 report types from discovery. Each report has view/download actions.',
    icon: BarChart3,
    tags: ['organized from scattered'],
  },
]

const openQuestions = [
  'Should dashboard quick-access cards be configurable per user, or fixed by role?',
  'How does admin experience (user management, CMS, freight quotes) get accessed — separate admin portal or integrated views?',
  'SSO / Active Directory — Shawn mentioned potential integration with Microsoft AD. Even if Phase 2, the authentication architecture must accommodate this.',
  'Employee & Terminal detail views — are the card summaries sufficient, or do agents need full drilldown detail pages?',
  'How should the Trinium checkbox (statement access) sync to the portal — real-time API check, or cached at sign-in?',
]

export function NewPrototypeReview() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-8 animate-fade-in">
        <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green-light mb-2">
          UX Prototype
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-3">
          Interactive Portal Prototype
        </h1>
        <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
          A fully interactive prototype addressing every gap identified in discovery.
          Fluent Design language with sidebar navigation, multi-brand theming,
          complete auth flows, notes overlay, admin tools, and permission-based views.
        </p>
      </div>

      {/* Two-column layout: content left, phone iframe right on desktop */}
      <div className="flex flex-col xl:flex-row gap-8 mb-10">
        {/* Left column */}
        <div className="flex-1 min-w-0">
          {/* Launch CTA */}
          <a
            href="https://kaplan-ux-prototype.up.railway.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-brand-green/10 border border-brand-green/30 rounded-xl p-5 mb-8 hover:bg-brand-green/15 transition-colors group animate-fade-in stagger-1"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-green/20 flex items-center justify-center shrink-0">
              <Monitor size={24} className="text-brand-green-light" />
            </div>
            <div className="flex-1">
              <div className="text-base font-bold">Launch UX Prototype</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                Opens the interactive agent portal prototype in a new tab. Includes multi-brand switching,
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
                <span>Toggle <strong>Notes</strong> in the user menu to see which content areas Kristen would manage</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0 text-[10px] font-bold text-brand-green-light">4</span>
                <span>Switch roles in the <strong>User Menu</strong> to see permission differences (Admin shows Site Admin in sidebar)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0 text-[10px] font-bold text-brand-green-light">5</span>
                <span>Try the <strong>password reset flow</strong> from the sign-in page "Forgot your password?" link</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0 text-[10px] font-bold text-brand-green-light">6</span>
                <span>Click <strong>View</strong> on any statement to see the PDF modal with progress simulation</span>
              </div>
            </div>
          </div>

          {/* Design Foundation */}
          <div className="animate-fade-in stagger-3">
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-green-light mb-4 flex items-center gap-2">
              <CheckCircle2 size={14} />
              Design Foundation
            </h2>
            <div className="space-y-3">
              {designFoundation.map((item, i) => (
                <div key={item.title} className={`bg-card border border-border rounded-xl p-5 animate-fade-in stagger-${Math.min(i + 1, 8)}`}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-brand-green-light shrink-0 mt-0.5" />
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
              ))}
            </div>
          </div>
        </div>

        {/* Right column — mobile preview iframe */}
        <div className="xl:w-[420px] shrink-0 animate-fade-in stagger-2">
          <div className="xl:sticky xl:top-4">
            <div className="flex items-center gap-2 mb-3">
              <Smartphone size={14} className="text-brand-green-light" />
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                Mobile Preview
              </h2>
            </div>
            <div className="flex justify-center">
              <div
                className="rounded-2xl border-4 border-neutral-700 bg-neutral-900 p-2 shadow-2xl"
                style={{ width: 400, height: 800 }}
              >
                <iframe
                  src="https://kaplan-ux-prototype.up.railway.app"
                  title="UX Prototype — Mobile Preview"
                  className="w-full h-full rounded-xl bg-white"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discovery gap closers */}
      <div className="mb-10 animate-fade-in stagger-4">
        <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-green-light mb-4 flex items-center gap-2">
          <CheckCircle2 size={14} />
          Discovery Gaps Addressed
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

      {/* Open questions */}
      <div className="bg-card border border-border rounded-xl p-6 animate-fade-in stagger-5">
        <h2 className="text-sm font-bold mb-4 flex items-center gap-2">
          <MessageSquare size={16} className="text-brand-teal" />
          Open Questions for Stakeholder Review
        </h2>
        <ol className="space-y-3">
          {openQuestions.map((q, i) => (
            <li key={i} className="flex items-start gap-3 text-xs text-muted-foreground leading-relaxed">
              <span className="w-5 h-5 rounded-full bg-brand-teal/15 flex items-center justify-center shrink-0 text-[10px] font-bold text-brand-teal">
                {i + 1}
              </span>
              {q}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
