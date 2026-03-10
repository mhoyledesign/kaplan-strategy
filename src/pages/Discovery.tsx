import { useState } from 'react'
import {
  Calendar, Clock, Users, MessageSquare, CheckCircle2,
  AlertCircle, Lightbulb, ChevronDown, ChevronRight
} from 'lucide-react'

type Tab = 'sessions' | 'decisions' | 'requirements'

const sessions = [
  {
    id: 'kickoff',
    title: 'Discovery Kickoff',
    date: 'Feb 16, 2026',
    participants: ['Dave (President)', 'JD (IT Director)', 'Steve (IT Services)', 'Adam (Tech Services)', 'Kristen (HR/Comms)', 'Madeline', 'Jeremy', 'Jeff', 'Anthony'],
    topics: ['Portal overview', 'User demographics', 'Brand separation', 'Phase 1 scope'],
    findings: [
      { type: 'decision', text: 'Phase 1 = modernize existing functionality, not add new features' },
      { type: 'insight', text: 'Portal is a "late-90s relic" — any changes require developer involvement' },
      { type: 'insight', text: '"Website shit" is the actual user feedback quote' },
      { type: 'insight', text: '99% of support calls are password resets' },
      { type: 'decision', text: 'Five separate companies under same management — zero cross-contamination' },
      { type: 'insight', text: 'Agents "glaze over" most content — information hierarchy is key' },
      { type: 'question', text: 'How do we force portal visits without email delivery of statements?' },
    ],
  },
  {
    id: 'session1',
    title: 'Working Session 1',
    date: 'Feb 2026',
    participants: ['Steve', 'Kristen', 'JD', 'Madeline', 'Jeremy'],
    topics: ['Current portal walkthrough', 'Feature inventory', 'User behavior', 'Analytics gap'],
    findings: [
      { type: 'insight', text: '90% of agents only access settlement statements' },
      { type: 'insight', text: 'Pop-up blockers are the #1 user complaint' },
      { type: 'insight', text: 'Zero analytics — no usage data exists' },
      { type: 'decision', text: 'Responsive design essential' },
      { type: 'decision', text: 'Video hosting must be internal (not YouTube/Vimeo)' },
      { type: 'decision', text: 'Preference for one CMS managing all five brands if 100% separation guaranteed' },
      { type: 'insight', text: 'Kristen is primary content manager across all sites — needs easy image/PDF upload' },
      { type: 'question', text: 'How to handle agents with multiple terminals requiring multiple accounts?' },
    ],
  },
  {
    id: 'qa',
    title: 'QA Session',
    date: 'Feb 2026',
    participants: ['Steve', 'Kristen', 'JD', 'Madeline'],
    topics: ['User personas', 'Daily workflow', 'Pain points', 'Design preferences'],
    findings: [
      { type: 'insight', text: 'Very wide age range (20s-80s+). Resistance to change expected.' },
      { type: 'decision', text: 'Modernized but not shocking — simple, clean, few paths, easy to learn, expandable' },
      { type: 'insight', text: 'Most log in, click to dispatch, and don\'t use much else daily' },
      { type: 'insight', text: 'On Fridays (payday) they download statements and sometimes call to dispute' },
      { type: 'idea', text: 'Timed messages so content doesn\'t become totally glazed over' },
      { type: 'decision', text: 'Get prototypes first, then get agent feedback' },
    ],
  },
  {
    id: 'session2',
    title: 'Working Session 2',
    date: 'Feb 2026',
    participants: ['Sean (Dev Manager)', 'Steve', 'JD', 'Madeline', 'Jeremy'],
    topics: ['Technical architecture', 'API strategy', 'Authentication', 'Development approach'],
    findings: [
      { type: 'technical', text: 'Current portal is static HTML with no CMS. Password reset fails 75% of time.' },
      { type: 'technical', text: 'User auth stored in SQL table via manual tool. No SSO.' },
      { type: 'decision', text: 'Kaplan will build whatever APIs needed — main data source is on-premise SQL Server' },
      { type: 'technical', text: 'Settlement statements are pre-generated PDFs — 25-step generation process ($1M+ project)' },
      { type: 'decision', text: 'Prefers CSS modules over Tailwind. Uses MUI with React.' },
      { type: 'decision', text: 'Mirror existing functionality first, build foundation for expansion' },
      { type: 'insight', text: 'President has expansion ideas requiring two-way data flow' },
      { type: 'question', text: 'SSO integration with Microsoft Active Directory — future or now?' },
    ],
  },
]

const decisions = [
  { decision: 'Phase 1 = modernize existing, not add new', source: 'Kickoff', impact: 'high' },
  { decision: 'Zero brand cross-contamination between 5+ companies', source: 'Kickoff', impact: 'high' },
  { decision: 'Authentication stays controlled (not self-serve)', source: 'Kickoff', impact: 'high' },
  { decision: 'One CMS managing all brands if separation guaranteed', source: 'Session 1', impact: 'high' },
  { decision: 'Responsive design essential', source: 'Session 1', impact: 'medium' },
  { decision: 'Internal video hosting only (no YouTube/Vimeo)', source: 'Session 1', impact: 'medium' },
  { decision: 'Modernized but not shocking aesthetic', source: 'QA', impact: 'medium' },
  { decision: 'Get prototype first, then agent feedback', source: 'QA', impact: 'medium' },
  { decision: 'Kaplan builds APIs, thunder::tech builds front-end', source: 'Session 2', impact: 'high' },
  { decision: 'CSS modules preferred over Tailwind', source: 'Session 2', impact: 'low' },
  { decision: 'Mirror existing functionality first', source: 'Session 2', impact: 'high' },
]

const requirements = [
  { category: 'Settlement Statements', priority: 'must', items: ['PDF viewer without pop-up blockers', 'Date range filtering', 'Single and multi-date selection', 'Permission levels (owner vs employee)', 'Agent/contractor context switching'] },
  { category: 'User Management', priority: 'must', items: ['Controlled signup (not self-serve)', 'Reliable password reset', 'Multi-terminal access under single login', 'Enable/disable notifications', '~3 agents added/terminated weekly'] },
  { category: 'Content Management', priority: 'must', items: ['CMS access for Kristen', 'Easy image resizing/upload', 'PDF upload for flyers and manuals', 'Slider/banner for announcements', 'Content management across all 5+ brands'] },
  { category: 'Multi-Brand', priority: 'must', items: ['5 (soon 6) distinct brands', 'Zero visual cross-contamination', 'Mostly color + logo differences', 'Single admin managing all', 'Brand-specific content capability'] },
  { category: 'Directories', priority: 'should', items: ['Employee directory with search (~100 employees)', 'Terminal list with search (58+ terminals)', 'Safety resources hub', 'Document library'] },
  { category: 'Reports', priority: 'should', items: ['Compliance Report', 'Pending Drivers Report', 'Remedial Review', 'Driver Log Codes', 'Driver Sign On Documents'] },
  { category: 'External Integrations', priority: 'should', items: ['Carrier Approval (RMIS) link', 'Remote Assistance (Splashtop)', 'Trinium Dispatch link', 'Equipment Unloading Locations tool'] },
  { category: 'Future', priority: 'could', items: ['SSO with Active Directory', 'Two-way data flow', 'Driver portal migration', 'Unified messaging system', 'Analytics integration'] },
]

export function Discovery() {
  const [tab, setTab] = useState<Tab>('sessions')
  const [expandedSession, setExpandedSession] = useState<string | null>('kickoff')

  const tabs: { id: Tab; label: string }[] = [
    { id: 'sessions', label: 'Sessions' },
    { id: 'decisions', label: 'Decisions' },
    { id: 'requirements', label: 'Requirements' },
  ]

  const findingIcon = (type: string) => {
    switch (type) {
      case 'decision': return <CheckCircle2 size={12} className="text-brand-green-light shrink-0 mt-0.5" />
      case 'insight': return <Lightbulb size={12} className="text-brand-gold shrink-0 mt-0.5" />
      case 'question': return <AlertCircle size={12} className="text-brand-amber shrink-0 mt-0.5" />
      case 'idea': return <Lightbulb size={12} className="text-brand-teal shrink-0 mt-0.5" />
      case 'technical': return <MessageSquare size={12} className="text-brand-cool-gray shrink-0 mt-0.5" />
      default: return <CheckCircle2 size={12} className="text-muted-foreground shrink-0 mt-0.5" />
    }
  }

  const findingBadge = (type: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      decision: { bg: '#3d7a1c20', text: '#4a9422' },
      insight: { bg: '#FFA30020', text: '#FFA300' },
      question: { bg: '#F59E0B20', text: '#F59E0B' },
      idea: { bg: '#00ABC720', text: '#00ABC7' },
      technical: { bg: '#99989920', text: '#999899' },
    }
    const c = colors[type] || colors.insight
    return (
      <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full" style={{ backgroundColor: c.bg, color: c.text }}>
        {type}
      </span>
    )
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-8 animate-fade-in">
        <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green-light mb-2">
          Discovery
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-3">
          Meeting Notes & Requirements
        </h1>
        <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
          Four working sessions with Kaplan stakeholders, covering portal walkthrough, user behavior,
          technical architecture, and design direction.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer
              ${tab === t.id
                ? 'bg-brand-green/15 text-brand-green-light'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Sessions tab */}
      {tab === 'sessions' && (
        <div className="space-y-3">
          {sessions.map((s, i) => {
            const isExpanded = expandedSession === s.id
            return (
              <div
                key={s.id}
                className={`bg-card border border-border rounded-xl overflow-hidden animate-fade-in stagger-${i + 1}`}
              >
                <button
                  onClick={() => setExpandedSession(isExpanded ? null : s.id)}
                  className="w-full flex items-center justify-between p-5 cursor-pointer text-left hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      {s.date}
                    </div>
                    <h3 className="font-bold text-sm">{s.title}</h3>
                    <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-muted-foreground">
                      <Users size={10} />
                      {s.participants.length} participants
                    </div>
                  </div>
                  {isExpanded ? <ChevronDown size={16} className="text-muted-foreground" /> : <ChevronRight size={16} className="text-muted-foreground" />}
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 border-t border-border pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground mb-2">Participants</h4>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {s.participants.map((p) => (
                            <span key={p} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{p}</span>
                          ))}
                        </div>
                        <h4 className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground mb-2">Topics</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {s.topics.map((t) => (
                            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-brand-green/10 text-brand-green-light">{t}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground mb-2">Key Findings</h4>
                        <ul className="space-y-2">
                          {s.findings.map((f, j) => (
                            <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                              {findingIcon(f.type)}
                              <span className="flex-1">{f.text}</span>
                              {findingBadge(f.type)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Decisions tab */}
      {tab === 'decisions' && (
        <div className="bg-card border border-border rounded-xl overflow-hidden animate-fade-in">
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-[10px] font-semibold tracking-wider uppercase text-muted-foreground">Decision</th>
                  <th className="text-left p-4 text-[10px] font-semibold tracking-wider uppercase text-muted-foreground w-28">Source</th>
                  <th className="text-left p-4 text-[10px] font-semibold tracking-wider uppercase text-muted-foreground w-20">Impact</th>
                </tr>
              </thead>
              <tbody>
                {decisions.map((d, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="p-4 text-muted-foreground leading-relaxed">{d.decision}</td>
                    <td className="p-4">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{d.source}</span>
                    </td>
                    <td className="p-4">
                      <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                        d.impact === 'high' ? 'bg-brand-green/15 text-brand-green-light' :
                        d.impact === 'medium' ? 'bg-brand-gold/15 text-brand-gold' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {d.impact}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Requirements tab */}
      {tab === 'requirements' && (
        <div className="space-y-4">
          {requirements.map((r, i) => (
            <div key={r.category} className={`bg-card border border-border rounded-xl p-5 animate-fade-in stagger-${Math.min(i + 1, 8)}`}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-sm font-bold">{r.category}</h3>
                <span className={`text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                  r.priority === 'must' ? 'bg-brand-green/15 text-brand-green-light' :
                  r.priority === 'should' ? 'bg-brand-teal/15 text-brand-teal' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {r.priority} have
                </span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {r.items.map((item, j) => (
                  <li key={j} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
                    <CheckCircle2 size={12} className="shrink-0 mt-0.5 text-muted-foreground/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
