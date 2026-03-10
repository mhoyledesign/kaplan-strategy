import {
  CheckCircle2, AlertCircle, ExternalLink, Monitor, Eye,
  MessageSquare, ArrowRight
} from 'lucide-react'

const worksWell = [
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
    title: 'Consolidated Library',
    desc: 'Replaces scattered PDFs across multiple pages (Transflo Cover Sheet, Personal Conveyance, Safety Manual) and the neglected Video Library (2 videos from 7+ years ago) into one searchable, filterable interface.',
    tags: ['reduces clutter', 'CMS-ready'],
  },
  {
    title: 'Reports Aggregation',
    desc: 'Clean card-based index of all reports in one location. Currently reports are buried inside nested Safety sub-pages. Each report shows title + one-line description — no ambiguity about what each option does.',
    tags: ['improves findability'],
  },
  {
    title: 'Statement Filter Presets',
    desc: '"Recent" (default), "Past Week," "Past 2 Weeks," "Date Range." One-click presets for the most common needs, rather than bare date pickers. Three clicks from login to viewing most recent statement.',
    tags: ['speed-to-content', '90% use case'],
  },
  {
    title: 'Fluent Design Language',
    desc: 'Microsoft\'s system — layered surfaces, restrained color, Segoe UI typography. Fits "just on the right side of professional" (Kristen). Corporate enough for Dave, not flashy enough to alarm agents. .NET team familiarity is a bonus for buy-in.',
    tags: ['stakeholder-aligned'],
  },
  {
    title: 'Sidebar Navigation',
    desc: 'Reduces 11 mixed-type items (pages, PDFs, external links, mailto) to 9 consistently-typed internal pages. Collapsible to icon-only mode. Eliminates the current portal\'s confusing dual-navigation (sidebar + welcome page links).',
    tags: ['simplification'],
  },
  {
    title: 'Employee Directory Cards',
    desc: 'Avatar initials (color-coded), name, role, terminal, email. Real-time search replacing clunky postback forms. Signals that internal tools are taken as seriously as customer-facing ones.',
    tags: ['modernization'],
  },
  {
    title: 'Progressive Disclosure',
    desc: 'Headlines → summaries → full content. Newsfeed items expand inline. Documents open in modals. The agent is never confronted with more than they need at any given moment.',
    tags: ['information hierarchy'],
  },
]

const needsAttention = [
  {
    title: 'Multi-Brand Architecture',
    desc: '6 companies under Bessemer Management with zero cross-contamination. The narrative describes a single-brand experience. Theming tokens, content scoping, and brand-specific routing must be designed.',
    severity: 'critical',
  },
  {
    title: 'CMS Integration',
    desc: 'Kristen\'s #1 pain point is having zero ability to edit content without developer involvement. The narrative focuses on agent-facing UX but doesn\'t address how content gets managed. This is the core reason for the rebuild.',
    severity: 'critical',
  },
  {
    title: 'Permission Model',
    desc: 'Agent owners see all statements; employees may/may not (Trinium checkbox); multi-terminal access under single login; custom roles. None of this is addressed in the prototype.',
    severity: 'critical',
  },
  {
    title: 'Equipment Unloading Locations',
    desc: 'A full interactive tool with 6+ WebMethod API endpoints, 39KB of JavaScript, region filtering, and terminal visibility controls. Missing entirely from the prototype. Needs a home — likely under "Tools" or embedded.',
    severity: 'high',
  },
  {
    title: 'Admin & User Management',
    desc: '~3 agents added/terminated weekly. Currently managed via manual SQL table manipulation. Need enable/disable notifications, user list, role assignment. Admin UX needs its own design pass.',
    severity: 'high',
  },
  {
    title: 'Password Reset Flow',
    desc: '99% of support calls. Current flow fails ~75%. The prototype has a clean login screen but doesn\'t address the reset experience. This must be reliable — it\'s the most frequent user interaction besides statements.',
    severity: 'critical',
  },
  {
    title: 'SSO / Active Directory',
    desc: 'Sean mentioned potential SSO integration with Microsoft AD. Even if Phase 2, the authentication architecture must accommodate this. Affects login flow, session management, and user provisioning.',
    severity: 'medium',
  },
  {
    title: 'Trinium Dispatch Link',
    desc: 'Agents use this daily — it\'s the most-used destination from the portal. Not present in the prototype sidebar. Should be highly visible, possibly as a quick-access card or in the Tools section.',
    severity: 'high',
  },
  {
    title: 'Remote Assistance Link',
    desc: 'Splashtop SOS for IT support. Currently in the top bar of the existing portal. Not mentioned in the prototype. IT needs this accessible for remote troubleshooting.',
    severity: 'medium',
  },
  {
    title: 'Employee & Terminal Detail Views',
    desc: 'The existing portal has detail pages (EmployeeDetails.aspx?id=, TerminalDetails.aspx?id=). The narrative mentions cards but not expandable detail views. Decide if card content is sufficient or if drilldown is needed.',
    severity: 'low',
  },
]

const openQuestions = [
  'Does "Tools" work as a nav label, or should Trinium Dispatch / Remote Assistance be individual sidebar items?',
  'Should dashboard quick-access cards be configurable per user, or fixed to the four Jeremy specified?',
  'Where does the "Submit a Suggestion" function live — feedback form in footer? User menu?',
  'How does admin experience (user management, CMS, freight quotes) get accessed — separate admin portal or integrated views?',
]

export function PrototypeReview() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-8 animate-fade-in">
        <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green-light mb-2">
          Prototype Review
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-3">
          Jeremy's Portal Concept
        </h1>
        <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
          Analysis of the interactive prototype against discovery findings and live portal audit.
          What aligns with stakeholder needs, what's missing, and what needs discussion.
        </p>
      </div>

      {/* Launch prototype CTA */}
      <a
        href="https://thundertech-kaplan-agent-portal-prototype-v1-production.up.railway.app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 bg-brand-green/10 border border-brand-green/30 rounded-xl p-5 mb-8 hover:bg-brand-green/15 transition-colors group animate-fade-in stagger-1"
      >
        <div className="w-12 h-12 rounded-xl bg-brand-green/20 flex items-center justify-center shrink-0">
          <Monitor size={24} className="text-brand-green-light" />
        </div>
        <div className="flex-1">
          <div className="text-base font-bold">Launch Interactive Prototype</div>
          <div className="text-xs text-muted-foreground mt-0.5">
            Opens Jeremy's fully interactive agent portal concept in a new tab.
            Built with React, Fluent Design, and shadcn/ui components.
          </div>
        </div>
        <ExternalLink size={18} className="text-brand-green-light group-hover:translate-x-0.5 transition-transform shrink-0" />
      </a>

      {/* What works well */}
      <div className="mb-10 animate-fade-in stagger-2">
        <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-green-light mb-4 flex items-center gap-2">
          <CheckCircle2 size={14} />
          What Works Well
        </h2>
        <div className="space-y-3">
          {worksWell.map((item, i) => (
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

      {/* What needs attention */}
      <div className="mb-10 animate-fade-in stagger-3">
        <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-amber mb-4 flex items-center gap-2">
          <AlertCircle size={14} />
          What Needs Attention
        </h2>
        <div className="space-y-3">
          {needsAttention.map((item, i) => (
            <div key={item.title} className={`bg-card border border-border rounded-xl p-5 animate-fade-in stagger-${Math.min(i + 1, 8)}`}>
              <div className="flex items-start gap-3">
                <AlertCircle size={16} className={`shrink-0 mt-0.5 ${
                  item.severity === 'critical' ? 'text-brand-crimson' :
                  item.severity === 'high' ? 'text-brand-amber' :
                  item.severity === 'medium' ? 'text-brand-gold' : 'text-muted-foreground'
                }`} />
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-sm font-bold">{item.title}</span>
                    <span className={`text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full ${
                      item.severity === 'critical' ? 'bg-brand-crimson/15 text-brand-crimson' :
                      item.severity === 'high' ? 'bg-brand-amber/15 text-brand-amber' :
                      item.severity === 'medium' ? 'bg-brand-gold/15 text-brand-gold' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {item.severity}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Open questions */}
      <div className="bg-card border border-border rounded-xl p-6 animate-fade-in stagger-4">
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
