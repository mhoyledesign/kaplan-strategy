import {
  AlertTriangle, HelpCircle, Lightbulb, ArrowRight,
  CheckCircle2, Clock, Shield, Users, Palette, Server
} from 'lucide-react'

const risks = [
  {
    risk: 'Brand Cross-Contamination',
    desc: 'If a Kaplan user sees a Horizon logo, the president "will go through the roof." This is the single hardest technical constraint. Must be airtight.',
    mitigation: 'Token-based theming system with brand context at login. Automated testing for cross-brand leaks.',
    severity: 'critical',
    icon: Shield,
  },
  {
    risk: 'PFQ Mid-Project Scope Creep',
    desc: 'Sixth company (PFQ) >50% likely to be folded in during the build. Architecture must handle this without rework.',
    mitigation: 'Design multi-brand from day one, not as an afterthought. Add PFQ as a theming config, not a fork.',
    severity: 'high',
    icon: AlertTriangle,
  },
  {
    risk: 'Statement PDF Performance',
    desc: 'Settlement statements are the primary feature (90% usage). Generation is a 25-step process on Kaplan\'s side. Latency is a risk.',
    mitigation: 'Pre-generation stays as-is. API returns pre-built PDFs. Progress indicators in UI. Consider caching.',
    severity: 'medium',
    icon: Clock,
  },
  {
    risk: 'User Resistance to Change',
    desc: 'Wide age range (20s-80s+). Multi-generational family businesses. The existing portal is terrible but familiar.',
    mitigation: 'Gradual rollout. Same functionality, modern wrapper. Quick-access cards for top tasks. No unnecessary learning curve.',
    severity: 'medium',
    icon: Users,
  },
  {
    risk: 'CMS Content Migration',
    desc: 'All existing content is hardcoded in .aspx pages. PDFs are scattered across directories. No structured data.',
    mitigation: 'Manual content audit (already done). Clean migration plan. Kristen trains on CMS before launch.',
    severity: 'medium',
    icon: Server,
  },
  {
    risk: 'SSRS Report Replacement',
    desc: 'Reports currently use SQL Server Reporting Services (150KB JS). Two are already broken. Replacing them requires data access coordination.',
    mitigation: 'Phase 1: embed existing working reports. Phase 2: rebuild with modern charting/table components.',
    severity: 'low',
    icon: AlertTriangle,
  },
]

const openQuestions = [
  { question: 'What are the exact permission levels and roles Steve wants?', owner: 'Steve/Adam', impact: 'Architecture', status: 'Waiting on documentation' },
  { question: 'SSO/Active Directory — Phase 1 or Phase 2?', owner: 'JD/Sean', impact: 'Auth architecture', status: 'Need decision' },
  { question: 'How should Equipment Unloading Locations integrate?', owner: 'Sean', impact: 'API scope', status: 'Need discussion' },
  { question: 'Which SSRS reports are actively used vs. can be dropped?', owner: 'Steve', impact: 'Feature scope', status: 'Need data' },
  { question: 'What is the hosting plan — on-prem IIS, Azure, or other?', owner: 'JD/Sean', impact: 'Deployment', status: 'Need decision' },
  { question: 'Will Kaplan provide a staging API for development?', owner: 'Sean', impact: 'Dev timeline', status: 'Need commitment' },
]

const opportunities = [
  { title: 'Analytics from Day One', desc: 'Zero analytics exist today. Modern portal with GA4/Clarity gives immediate insight into what agents actually use.' },
  { title: 'Notification System', desc: 'Push agents to the portal with new statement alerts, compliance deadlines, and company announcements. Currently no notification mechanism exists.' },
  { title: 'Driver Portal Migration', desc: 'If agent portal succeeds, driver portal (~3,000 users) may migrate to the same stack. Architecture decisions now affect future scale.' },
  { title: 'Unified Admin Experience', desc: 'Kristen managing content + Steve managing users + IT managing permissions — all from one admin interface instead of three different tools.' },
  { title: 'Self-Healing Password Reset', desc: 'Current flow fails 75% and generates 99% of support calls. A working reset saves hundreds of hours of IT support annually.' },
  { title: 'Future Two-Way Data Flow', desc: 'Dave has expansion ideas. Phase 1 is pull-only, but the architecture should support future bidirectional capabilities.' },
]

const nextSteps = [
  { step: 'Stakeholder Review', desc: 'Present this strategy and prototype to Dave, JD, Steve, Kristen. Get visual buy-in.', status: 'next' },
  { step: 'Permissions Documentation', desc: 'Steve/Adam to provide detailed permission levels and role definitions.', status: 'waiting' },
  { step: 'Session with Sean', desc: 'Define API contract, hosting plan, staging environment, and development workflow.', status: 'scheduled' },
  { step: 'Prototype Feedback Round', desc: 'Share prototype with select agents for usability feedback.', status: 'upcoming' },
  { step: 'Phase 2 Proposal', desc: 'Scope, timeline, and budget for design and build phase based on approved strategy.', status: 'upcoming' },
]

export function RisksNextSteps() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-8 animate-fade-in">
        <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green-light mb-2">
          Risks & Next Steps
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-3">
          What Could Go Wrong &<br />What Comes Next
        </h1>
        <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
          Strategic risks to plan around, open questions needing stakeholder input,
          and the recommended path forward.
        </p>
      </div>

      {/* Risks */}
      <div className="mb-10">
        <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 flex items-center gap-2">
          <AlertTriangle size={14} /> Strategic Risks
        </h2>
        <div className="space-y-3">
          {risks.map((r, i) => {
            const Icon = r.icon
            return (
              <div key={r.risk} className={`bg-card border border-border rounded-xl p-5 animate-fade-in stagger-${Math.min(i + 1, 8)}`}>
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    r.severity === 'critical' ? 'bg-brand-crimson/15' :
                    r.severity === 'high' ? 'bg-brand-amber/15' :
                    r.severity === 'medium' ? 'bg-brand-gold/15' : 'bg-muted'
                  }`}>
                    <Icon size={16} className={
                      r.severity === 'critical' ? 'text-brand-crimson' :
                      r.severity === 'high' ? 'text-brand-amber' :
                      r.severity === 'medium' ? 'text-brand-gold' : 'text-muted-foreground'
                    } />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold">{r.risk}</span>
                      <span className={`text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full ${
                        r.severity === 'critical' ? 'bg-brand-crimson/15 text-brand-crimson' :
                        r.severity === 'high' ? 'bg-brand-amber/15 text-brand-amber' :
                        r.severity === 'medium' ? 'bg-brand-gold/15 text-brand-gold' : 'bg-muted text-muted-foreground'
                      }`}>
                        {r.severity}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">{r.desc}</p>
                    <div className="flex items-start gap-2 text-xs">
                      <Shield size={12} className="text-brand-green-light shrink-0 mt-0.5" />
                      <span className="text-muted-foreground"><span className="text-brand-green-light font-semibold">Mitigation:</span> {r.mitigation}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Open Questions */}
        <div className="animate-fade-in stagger-5">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 flex items-center gap-2">
            <HelpCircle size={14} /> Open Questions
          </h2>
          <div className="space-y-2">
            {openQuestions.map((q, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-4">
                <div className="text-xs font-semibold mb-1">{q.question}</div>
                <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                  <span>Owner: <span className="text-foreground">{q.owner}</span></span>
                  <span>Impact: <span className="text-brand-gold">{q.impact}</span></span>
                </div>
                <div className="mt-1">
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-brand-amber/15 text-brand-amber font-semibold tracking-wider uppercase">
                    {q.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Opportunities */}
        <div className="animate-fade-in stagger-6">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 flex items-center gap-2">
            <Lightbulb size={14} /> Opportunities
          </h2>
          <div className="space-y-2">
            {opportunities.map((o) => (
              <div key={o.title} className="bg-card border border-border rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Lightbulb size={12} className="text-brand-teal" />
                  <div className="text-xs font-bold">{o.title}</div>
                </div>
                <div className="text-[11px] text-muted-foreground leading-relaxed">{o.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="animate-fade-in stagger-7">
        <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-green-light mb-4 flex items-center gap-2">
          <ArrowRight size={14} /> Immediate Next Steps
        </h2>
        <div className="space-y-2">
          {nextSteps.map((s, i) => (
            <div key={s.step} className="bg-card border border-border rounded-xl p-4 flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-brand-green-light">{i + 1}</span>
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold">{s.step}</div>
                <div className="text-[11px] text-muted-foreground">{s.desc}</div>
              </div>
              <span className={`text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full whitespace-nowrap ${
                s.status === 'next' ? 'bg-brand-green/15 text-brand-green-light' :
                s.status === 'waiting' ? 'bg-brand-amber/15 text-brand-amber' :
                s.status === 'scheduled' ? 'bg-brand-teal/15 text-brand-teal' :
                'bg-muted text-muted-foreground'
              }`}>
                {s.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
