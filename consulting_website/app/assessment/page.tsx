import LandingNavbar from "../components/LandingNavbar";

export const metadata = {
  title: "Data Foundation Assessment — Drezdan Analytics LLC",
  description:
    "A focused, fixed-scope diagnostic of how data moves through your business — where logic is fragmented, what risks that creates, and what to build first.",
};

// ── DATA ──────────────────────────────────────────────────────────────────────

const symptoms = [
  "You do not fully trust your reports",
  "Historical numbers are difficult to reproduce",
  "Teams disagree on KPI definitions",
  "You want to use AI, but are not sure your data is ready",
];

const chain = ["Data", "Business logic", "Reporting", "Workflows", "AI readiness"];

const youDoNotNeed = [
  "A metric layer",
  "BI modernization",
  "Data architecture work",
  "Automation",
  "AI",
  "Custom tooling",
];

const youOnlyNeed = [
  "Your numbers are hard to trust",
  "Reporting is fragmented",
  "Too much logic lives in spreadsheets or people\u2019s heads",
  "Recreating history is difficult",
  "Teams spend too much time manually fixing things",
  "You want to build AI or automation, but your foundation may not support it",
];

const whatIReview = [
  "Interviews with business, finance, and data leaders",
  "Source systems and data flows",
  "Critical dashboards and recurring reports",
  "Embedded code, custom logic, and manual workflows",
  "KPI definitions and metric inconsistencies",
  "Historical reporting gaps",
  "Documentation and ownership gaps",
  "AI and automation readiness constraints",
];

const whatYouGet = [
  "Key risks across data, business logic, and reporting",
  "Historical reporting gap assessment",
  "Data architecture recommendation & roadmap",
  "AI-readiness implications",
  "Recommended first pilot",
  "Executive summary and detailed findings report",
  "Executive readout session",
];

const valueToOrg = [
  "Reduce time spent reconciling numbers across teams, dashboards, and spreadsheets",
  "Align data, finance, operations, and leadership around shared KPI definitions",
  "Prioritize the first high-value data foundation pilot instead of guessing what to build next",
  "Surface hidden logic, ownership gaps, and manual workflows before they become larger risks",
  "Give leadership a clearer path from fragmented data and reporting to trusted, AI-ready infrastructure",
];

// ── COMPONENTS ────────────────────────────────────────────────────────────────

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0 [background-color:#1f8a65]" />
          <span className="text-[13px] [color:#5a5852] leading-[1.5]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function Assessment() {
  return (
    <div className="bg-white [color:#26251e] font-sans">
      <LandingNavbar />
      <main className="pt-16">

        {/* ── HERO ──────────────────────────────────────────────────── */}
        <section className="py-14 md:py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-[0.2em] uppercase [color:#1f8a65]">
                Assessment
              </span>
              <span className="w-8 h-px bg-slate-200" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-5 max-w-3xl">
              Data Foundation Assessment
            </h1>
            <p className="text-lg sm:text-xl font-semibold leading-snug [color:#1f8a65] mb-4 max-w-2xl">
              Not sure what needs to be built first? Start here.
            </p>
            <p className="text-[15px] sm:text-base [color:#26251e] leading-relaxed mb-3 max-w-2xl">
              For organizations that know something is wrong with their data and reporting, but do not yet know what needs to be fixed.
            </p>
            <p className="text-[15px] [color:#5a5852] leading-relaxed mb-8 max-w-2xl">
              <em>Built from hands-on work untangling reporting logic across dashboards, SQL, spreadsheets, source systems, and undocumented workflows.</em>
            </p>

            {/* Symptoms */}
            <div>
              <p className="text-[13px] font-bold [color:#26251e] mb-3">Sound familiar?</p>
              <div className="flex flex-wrap gap-2">
                {symptoms.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-[13px] font-medium [background-color:#dfa88f] [color:#26251e]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── THE PROBLEM ───────────────────────────────────────────── */}
        <section id="problem" className="py-16 px-6 bg-slate-50">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-[0.2em] uppercase [color:#807d72]">
                The Problem
              </span>
              <span className="w-8 h-px bg-slate-200" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-6 max-w-2xl [color:#26251e]">
              The symptoms show up before the problem is obvious.
            </h2>
            <div className="max-w-2xl space-y-4">
              <p className="text-[15px] [color:#5a5852] leading-relaxed">
                Most organizations do not start with a clear diagnosis. They feel the symptoms: dashboards do not reconcile, historical numbers are hard to recreate, KPI definitions change across teams, and important business logic lives in BI tools, spreadsheets, SQL queries, or someone&apos;s head.
              </p>
              <p className="text-[15px] [color:#5a5852] leading-relaxed">
                Then leadership asks for AI or automation - but neither can fix a data foundation the business does not trust.
              </p>
            </div>
          </div>
        </section>

        {/* ── THE OFFER ─────────────────────────────────────────────── */}
        <section className="py-16 px-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-[0.2em] uppercase [color:#807d72]">
                The Solution
              </span>
              <span className="w-8 h-px bg-slate-200" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-5 max-w-2xl [color:#26251e]">
              A focused diagnostic - not a vague audit.
            </h2>
            <div className="max-w-2xl space-y-4">
              <p className="text-[15px] [color:#5a5852] leading-relaxed">
                The <strong>Data Foundation Assessment</strong> identifies where your data, business logic, and reporting are breaking down, what risks that creates, and what should be built first.
              </p>
              <p className="text-[15px] [color:#5a5852] leading-relaxed">
                This is a diagnostic of how data moves through the business today, from source systems and business logic through reporting, manual workflows, and downstream automation.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {chain.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[13px] font-medium [background-color:#9fbbe0] [color:#26251e]">
                    {step}
                  </span>
                  {i < chain.length - 1 && (
                    <span aria-hidden="true" className="text-[13px] [color:#807d72]">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── YOU DO NOT NEED TO KNOW THE ANSWER ────────────────────── */}
        <section className="pt-16 pb-10 px-6 bg-slate-50">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-[0.2em] uppercase [color:#807d72]">
                Where To Start
              </span>
              <span className="w-8 h-px bg-slate-200" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-5 max-w-2xl [color:#26251e]">
              You do not need to know what to build.
            </h2>
            <p className="text-[15px] [color:#5a5852] leading-relaxed max-w-2xl mb-8">
              The assessment exists to determine what actually needs to be built first &mdash; so you do not have to guess.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-slate-200/70 bg-white shadow-sm shadow-slate-100/80 overflow-hidden">
                <div className="px-7 pt-6 pb-3 border-b border-slate-100">
                  <h3 className="font-semibold text-[15px] [color:#26251e]">You do not need to already know if you need:</h3>
                </div>
                <div className="px-7 py-5 flex flex-wrap gap-2">
                  {youDoNotNeed.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-[13px] font-medium [background-color:#9fbbe0] [color:#26251e]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200/70 bg-white shadow-sm shadow-slate-100/80 overflow-hidden">
                <div className="px-7 pt-6 pb-3 border-b border-slate-100">
                  <h3 className="font-semibold text-[15px] [color:#26251e]">You only need to know that:</h3>
                </div>
                <div className="px-7 py-5">
                  <BulletList items={youOnlyNeed} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE OUTCOME ───────────────────────────────────────────── */}
        <section id="outcome" className="pt-10 pb-16 px-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-[0.2em] uppercase [color:#807d72]">
                The Outcome
              </span>
              <span className="w-8 h-px bg-slate-200" />
            </div>
            {/* Outcome card — green gradient matching project cards */}
            <div className="rounded-2xl border [border-color:#9fc9a2] [background:linear-gradient(to_bottom,#a9d3ac,#9fc9a2)] px-5 py-6 md:px-8 md:py-8 max-w-3xl">
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase [color:#807d72] mb-3">Leadership gets a clear answer to:</p>
              <p className="text-xl sm:text-2xl font-bold leading-snug [color:#1f8a65]">
                &ldquo;What foundation needs to exist so we can trust our numbers, recreate history, reduce manual work, and build AI or automation on solid ground?&rdquo;
              </p>
              <p className="mt-4 text-[13px] [color:#5a5852] leading-[1.5]">
                The goal is to identify the first practical layer the business needs to move from fragmented data, logic, and reporting to trusted, reusable, AI-ready infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT I REVIEW / WHAT YOU GET / VALUE ─────────────────── */}
        <section id="scope" className="py-16 px-6 bg-slate-50">
          <div className="mx-auto max-w-6xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {/* What I Review */}
              <div className="rounded-2xl border border-slate-200/70 bg-white shadow-sm shadow-slate-100/80 overflow-hidden">
                <div className="px-7 pt-6 pb-3 border-b border-slate-100">
                  <p className="text-[11px] font-bold tracking-[0.18em] uppercase [color:#807d72] mb-1">Scope</p>
                  <h3 className="font-semibold text-[15px] [color:#26251e]">What I Review</h3>
                </div>
                <div className="px-7 py-5">
                  <BulletList items={whatIReview} />
                </div>
              </div>

              {/* What You Get */}
              <div className="rounded-2xl border border-slate-200/70 bg-white shadow-sm shadow-slate-100/80 overflow-hidden">
                <div className="px-7 pt-6 pb-3 border-b border-slate-100">
                  <p className="text-[11px] font-bold tracking-[0.18em] uppercase [color:#807d72] mb-1">Deliverables</p>
                  <h3 className="font-semibold text-[15px] [color:#26251e]">What You Get</h3>
                </div>
                <div className="px-7 py-5">
                  <BulletList items={whatYouGet} />
                </div>
              </div>

              {/* Business Value */}
              <div className="rounded-2xl border border-slate-200/70 bg-white shadow-sm shadow-slate-100/80 overflow-hidden">
                <div className="px-7 pt-6 pb-3 border-b border-slate-100">
                  <p className="text-[11px] font-bold tracking-[0.18em] uppercase [color:#807d72] mb-1">Value</p>
                  <h3 className="font-semibold text-[15px] [color:#26251e]">Business Value</h3>
                </div>
                <div className="px-7 py-5">
                  <BulletList items={valueToOrg} />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── ENGAGEMENT STRUCTURE ──────────────────────────────────── */}
        <section id="structure" className="py-16 px-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-[0.2em] uppercase [color:#807d72]">
                Engagement Structure
              </span>
              <span className="w-8 h-px bg-slate-200" />
            </div>
            <div className="flex flex-wrap gap-3 mb-6">
              {["Fixed-scope", "3 weeks", "Roadmap included"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[13px] font-medium [background-color:#9fbbe0] [color:#26251e]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-[14px] [color:#5a5852] leading-relaxed max-w-2xl mb-1">
              <span className="font-semibold [color:#26251e]">Pricing:</span> $14,000.
            </p>
            <p className="text-[14px] [color:#5a5852] leading-relaxed max-w-2xl mb-8">
              Scope confirmed before the engagement begins.
            </p>

            {/* Week-by-week timeline */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-3xl">
              {[
                {
                  week: "Week 1",
                  items: ["Interviews with business and data leaders", "Source system & data flow review", "Dashboard, report & logic review"],
                },
                {
                  week: "Week 2",
                  items: ["Findings synthesis", "Risk assessment", "Architecture recommendation"],
                },
                {
                  week: "Week 3",
                  items: ["Executive readout", "Recommended first pilot", "Detailed findings report", "Implementation options"],
                },
              ].map((w) => (
                <div key={w.week} className="flex-1 rounded-2xl border border-slate-200/70 bg-white shadow-sm shadow-slate-100/80 px-6 py-5">
                  <p className="text-[11px] font-bold tracking-[0.18em] uppercase [color:#1f8a65] mb-3">{w.week}</p>
                  <ul className="flex flex-col gap-2.5">
                    {w.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0 [background-color:#1f8a65]" />
                        <span className="text-[13px] [color:#5a5852] leading-[1.5]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[13px] [color:#5a5852] leading-[1.5] max-w-3xl">
              The assessment stands on its own. If you want help building the recommended foundation, implementation options are part of the readout, no obligation.
            </p>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 px-6 bg-slate-950">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block mb-5 px-3 py-1 rounded-full border border-slate-700 text-xs font-semibold text-slate-400 tracking-widest uppercase">
              Ready to discuss?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Know something is off, but not sure what to fix first?
            </h2>

            <a
              href="https://calendly.com/drezdan-drezdandale"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-colors"
            >
              Book a 30-Minute Assessment Call
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </section>

      </main>

      {/* ── FOOTER ────────────────────────────────────────────────── */}
      <footer className="bg-slate-950 border-t border-slate-800 px-6 py-8">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white text-sm font-semibold tracking-tight">Drezdan Analytics LLC</span>
          <nav className="flex items-center gap-6">
            {[["How I Create Value", "/projects"], ["Assessment", "/assessment"], ["Contact", "/#contact"]].map(([label, href]) => (
              <a key={label} href={href} className="text-xs text-slate-600 hover:text-slate-300 transition-colors">
                {label}
              </a>
            ))}
          </nav>
          <p className="text-xs text-slate-700">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
