import {
  User, Clock, AlertTriangle, Phone, Monitor, FileText,
  MessageSquare, TrendingDown, Shield, Zap
} from 'lucide-react'

const painPoints = [
  { icon: Phone, label: 'Password Resets', desc: '99% of support calls. Current reset flow fails ~75% of the time.', severity: 'critical' },
  { icon: AlertTriangle, label: 'Pop-up Blockers', desc: 'Statement PDFs open in new windows, triggering pop-up blockers constantly.', severity: 'high' },
  { icon: TrendingDown, label: 'Content Glazing', desc: 'Agents ignore most content. No mechanism to surface urgent/new information.', severity: 'high' },
  { icon: Clock, label: 'No Content Control', desc: 'Kristen has zero ability to edit portal content without developer involvement.', severity: 'critical' },
  { icon: Monitor, label: 'Dated Interface', desc: '"Website shit" — actual user feedback. Portal looks like 1995.', severity: 'medium' },
  { icon: Shield, label: 'Security Gaps', desc: 'Past WordPress driver portal incident: Driver A got Driver B\'s pay info.', severity: 'critical' },
]

const workflows = [
  {
    title: 'Daily Workflow (90% of agents)',
    color: '#3d7a1c',
    steps: [
      'Log into portal',
      'Click through to Trinium dispatch system',
      'Ignore everything else on the portal',
    ],
  },
  {
    title: 'Friday / Payday',
    color: '#00ABC7',
    steps: [
      'Log in to portal',
      'Navigate to Settlement Statements',
      'Select date, download/print PDF',
      'Occasionally call settlements department with questions',
    ],
  },
  {
    title: 'Tax Season',
    color: '#FFA300',
    steps: [
      'Log in to portal',
      'Navigate to Settlement Statements',
      'Select date range for the year',
      'Merge/download multiple PDFs',
    ],
  },
]

export function UsersContext() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-8 animate-fade-in">
        <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green-light mb-2">
          Users & Context
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-3">
          Who Uses This Portal
        </h1>
        <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
          ~200+ agent locations across the network. Wide age range (20s-80s+),
          multi-generational family businesses, owner-operators. Desktop-primary users.
        </p>
      </div>

      {/* Agent Profile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-card border border-border rounded-xl p-5 animate-fade-in stagger-1">
          <User size={18} className="text-brand-green-light mb-3" />
          <div className="text-sm font-bold mb-1">Agent Owner</div>
          <div className="text-xs text-muted-foreground leading-relaxed">
            Sees all statements for their terminal(s). May own multiple terminals.
            Primary portal user. Needs fast access to pay information.
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 animate-fade-in stagger-2">
          <User size={18} className="text-brand-teal mb-3" />
          <div className="text-sm font-bold mb-1">Agent Employee</div>
          <div className="text-xs text-muted-foreground leading-relaxed">
            May or may not see statements based on a checkbox setting in Trinium.
            Needs validation/alert system to prevent accidental access to sensitive data.
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 animate-fade-in stagger-3">
          <User size={18} className="text-brand-gold mb-3" />
          <div className="text-sm font-bold mb-1">Kristen (Content Admin)</div>
          <div className="text-xs text-muted-foreground leading-relaxed">
            HR/Communications Director. Manages content across all 5+ brands.
            Currently has zero editing ability. Print-first workflow. Needs CMS access urgently.
          </div>
        </div>
      </div>

      {/* Key Quote */}
      <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-5 mb-8 animate-fade-in stagger-4">
        <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green-light mb-2">
          Design Philosophy
        </div>
        <blockquote className="text-base font-semibold italic leading-relaxed">
          "Just on the right side of professional for trucking."
        </blockquote>
        <div className="text-xs text-muted-foreground mt-2">
          — Kristen Steele. Not too slick, not too fancy. If it looks expensive, agents think the company is wasting money.
        </div>
      </div>

      {/* Two columns: pain points + workflows */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pain Points */}
        <div className="animate-fade-in stagger-5">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Pain Points
          </h2>
          <div className="space-y-3">
            {painPoints.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.label} className="bg-card border border-border rounded-xl p-4 flex gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    p.severity === 'critical' ? 'bg-brand-crimson/15' :
                    p.severity === 'high' ? 'bg-brand-gold/15' : 'bg-muted'
                  }`}>
                    <Icon size={16} className={
                      p.severity === 'critical' ? 'text-brand-crimson' :
                      p.severity === 'high' ? 'text-brand-gold' : 'text-muted-foreground'
                    } />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="text-xs font-bold">{p.label}</div>
                      <span className={`text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full ${
                        p.severity === 'critical' ? 'bg-brand-crimson/15 text-brand-crimson' :
                        p.severity === 'high' ? 'bg-brand-gold/15 text-brand-gold' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {p.severity}
                      </span>
                    </div>
                    <div className="text-[11px] text-muted-foreground leading-relaxed mt-1">{p.desc}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Workflows */}
        <div className="animate-fade-in stagger-6">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Agent Workflows
          </h2>
          <div className="space-y-4">
            {workflows.map((w) => (
              <div key={w.title} className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: w.color }} />
                  <h3 className="text-xs font-bold">{w.title}</h3>
                </div>
                <ol className="space-y-2">
                  {w.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-muted-foreground leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0 text-[10px] font-bold text-muted-foreground">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          {/* Usage stat */}
          <div className="bg-card border border-border rounded-xl p-5 mt-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={14} className="text-brand-green-light" />
              <h3 className="text-xs font-bold">The 90/10 Split</h3>
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              90% of agents only ever access settlement statements. The other 10% occasionally
              use employee contacts, terminal list, or safety resources. The portal design must
              optimize for the 90% while still serving the 10%.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
