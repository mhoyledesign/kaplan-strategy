import {
  Server, Database, Globe, Shield, Code, AlertTriangle,
  CheckCircle2, XCircle, Monitor
} from 'lucide-react'

const currentStack = [
  { category: 'Web Server', value: 'Microsoft IIS 10.0', status: 'working' },
  { category: 'Framework', value: 'ASP.NET Web Forms 4.x', status: 'legacy' },
  { category: 'Runtime', value: '.NET Framework 4.6+', status: 'legacy' },
  { category: 'Database', value: 'On-premise SQL Server', status: 'working' },
  { category: 'Hosting', value: 'On-premise (12.16.226.76)', status: 'working' },
  { category: 'SSL', value: 'TLS 1.3 (GoDaddy cert, expires Jun 2026)', status: 'working' },
  { category: 'Auth', value: 'Forms Authentication (KaplanAuthForm cookie)', status: 'legacy' },
  { category: 'CMS', value: 'None — all content hardcoded in .aspx pages', status: 'broken' },
  { category: 'Analytics', value: 'Universal Analytics (sunset Jul 2023)', status: 'broken' },
]

const frontEnd = [
  { lib: 'jQuery', version: '2.1.4 / 2.2.4', note: 'Two different versions (main vs SharedWeb)' },
  { lib: 'Bootstrap', version: '3.3.7', note: 'Loaded but underutilized' },
  { lib: 'jQuery UI', version: '1.11.4', note: 'Cupertino theme' },
  { lib: 'Microsoft Ajax', version: '4.6.1', note: 'For UpdatePanel postbacks' },
  { lib: 'SSRS ReportViewer', version: '12.0', note: '150KB JS, renders reports as HTML tables' },
]

const securityIssues = [
  'No Secure flag on auth cookie',
  'No CSRF token beyond ASP.NET EventValidation',
  'No Content-Security-Policy headers',
  'No rate limiting on login attempts',
  'Remote Assistance link uses HTTP (not HTTPS)',
  'ViewState not encrypted (base64, default behavior)',
  'Password reset fails ~75% of the time',
]

const apiEndpoints = [
  { endpoint: '/GetVideoList', method: 'AJAX POST', desc: 'Returns video library JSON' },
  { endpoint: 'AgentStatementsSelection', method: 'UpdatePanel', desc: 'Statement PDF retrieval' },
  { endpoint: 'EmployeeContacts', method: 'PostBack', desc: 'Search by name or department' },
  { endpoint: 'TerminalList', method: 'PostBack', desc: 'Search by terminal or city/state' },
  { endpoint: 'SharedContent/WebMethods.aspx/*', method: 'AJAX POST', desc: '9+ endpoints for location tools' },
  { endpoint: 'ReportPage.aspx', method: 'SSRS Viewer', desc: '6 SSRS reports (4 working, 2 broken)' },
]

export function TechLandscape() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-8 animate-fade-in">
        <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-green-light mb-2">
          Technical Landscape
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-3">
          Current Stack & API Strategy
        </h1>
        <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
          A circa 2010-2015 ASP.NET 4.x Web Forms application on IIS 10. Table-based layouts,
          classic postback model, no CMS, no responsive design, defunct analytics.
        </p>
      </div>

      {/* Architecture summary */}
      <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-5 mb-8 animate-fade-in stagger-1">
        <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-green-light mb-2">
          Summary
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The entire front-end is "static HTML with ASP.NET server controls bolted on." Dynamic portions
          are limited to: login/auth, statement selection (UpdatePanel), employee/terminal search, SSRS reports,
          and the SharedWeb location tools. Markup errors exist on every page (styles rendered outside the closing HTML tag).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Server Stack */}
        <div className="animate-fade-in stagger-2">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 flex items-center gap-2">
            <Server size={14} /> Server Stack
          </h2>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <table className="w-full text-xs">
              <tbody>
                {currentStack.map((s, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="p-3 font-semibold w-28">{s.category}</td>
                    <td className="p-3 text-muted-foreground">{s.value}</td>
                    <td className="p-3 w-8">
                      {s.status === 'working' && <CheckCircle2 size={12} className="text-brand-green-light" />}
                      {s.status === 'legacy' && <AlertTriangle size={12} className="text-brand-gold" />}
                      {s.status === 'broken' && <XCircle size={12} className="text-brand-crimson" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Front-End Libraries */}
        <div className="animate-fade-in stagger-3">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 flex items-center gap-2">
            <Code size={14} /> Front-End Libraries
          </h2>
          <div className="space-y-2">
            {frontEnd.map((f) => (
              <div key={f.lib} className="bg-card border border-border rounded-xl p-3 flex items-start gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold">{f.lib}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground">{f.version}</span>
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{f.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Issues */}
        <div className="animate-fade-in stagger-4">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 flex items-center gap-2">
            <Shield size={14} /> Security Observations
          </h2>
          <div className="bg-card border border-border rounded-xl p-5">
            <ul className="space-y-2">
              {securityIssues.map((issue, i) => (
                <li key={i} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
                  <AlertTriangle size={12} className="shrink-0 mt-0.5 text-brand-crimson" />
                  {issue}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* API Endpoints Discovered */}
        <div className="animate-fade-in stagger-5">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 flex items-center gap-2">
            <Globe size={14} /> Data Endpoints Discovered
          </h2>
          <div className="space-y-2">
            {apiEndpoints.map((e) => (
              <div key={e.endpoint} className="bg-card border border-border rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <code className="text-[10px] font-mono text-brand-green-light bg-brand-green/10 px-1.5 py-0.5 rounded">{e.endpoint}</code>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground">{e.method}</span>
                </div>
                <div className="text-[11px] text-muted-foreground">{e.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* API Strategy */}
      <div className="mt-8 bg-card border border-border rounded-xl p-6 animate-fade-in stagger-6">
        <h2 className="text-sm font-bold mb-4 flex items-center gap-2">
          <Monitor size={16} className="text-brand-green-light" />
          API Strategy (Phase 2)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-[10px] font-semibold tracking-wider uppercase text-brand-green-light mb-2">Approach</h3>
            <ul className="space-y-1.5">
              {[
                'Greenfield API development — Kaplan builds, thunder::tech consumes',
                'Pull-only for Phase 1, architecture supports future push',
                '.NET-adjacent preferred (in-house developers use .NET)',
                'On-premise SQL Server as main data source',
                'Settlement PDFs retrieved by date + driver code + contractor code',
              ].map((item, i) => (
                <li key={i} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
                  <CheckCircle2 size={12} className="shrink-0 mt-0.5 text-brand-green-light" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] font-semibold tracking-wider uppercase text-brand-teal mb-2">Front-End Preferences</h3>
            <ul className="space-y-1.5">
              {[
                'React (Kaplan team already uses it)',
                'CSS modules over Tailwind (Shawn\'s team preference)',
                'Material UI (MUI) for component library',
                'Node.js acceptable for prototyping',
                'Current SharedWeb has multi-brand theming config (currentCompany object)',
              ].map((item, i) => (
                <li key={i} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
                  <CheckCircle2 size={12} className="shrink-0 mt-0.5 text-brand-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Multi-brand theming */}
      <div className="mt-4 bg-card border border-border rounded-xl p-6 animate-fade-in stagger-7">
        <h2 className="text-sm font-bold mb-3">Multi-Brand Theming Precedent</h2>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3">
          The existing SharedWeb tools already have a JavaScript config object (<code className="text-brand-green-light bg-brand-green/10 px-1 rounded">currentCompany</code>)
          with brand-swappable tokens. This pattern should inform the new design system:
        </p>
        <div className="bg-muted rounded-lg p-4 font-mono text-[11px] text-muted-foreground overflow-x-auto">
          <pre>{`var currentCompany = {
  Name: "Kaplan",
  PrimaryColor: "#336615",
  PrimaryColorDarker: "#2d5016",
  PrimaryColorLighter: "#4a9422",
  LogoUrl: "/images/Kaplan-Logo.png",
  FontFamily: "...",
  BackgroundGradiantClassUp: "gradiant-background-up-",
  HighlightColor: "#daffda"
}`}</pre>
        </div>
      </div>
    </div>
  )
}
