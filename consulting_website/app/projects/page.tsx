import Navbar from "../components/Navbar";

export const metadata = {
  title: "How I Create Value — Drezdan Analytics LLC",
  description: "How I combine 3 skillsets to creatively solve technical problems.",
};

// ── DATA ──────────────────────────────────────────────────────────────────────

type Project = {
  title: string;
  context: string;
  solution: string;
  metric: string;   // punchy stat — displayed large
  outcome: string;  // one sentence supporting the metric
  link?: string;    // optional live project URL
  bullets?: string[]; // optional capability list — renders alternate card layout
};

type Vertical = {
  id: string;
  number: string;
  name: string;
  taglineLabel?: string;
  tagline: string;
  sectionBg: string;
  skills: string[];
  projects: Project[];
};

const verticals: Vertical[] = [
  {
    id: "data-analytics",
    number: "01",
    name: "Data Analytics",
    taglineLabel: "You need me when...",
    tagline: "Data infrastructure is a nightmare | Dashboards are a mess | Insights are scattered | Forecasting is unreliable",
    sectionBg: "bg-slate-50",
    skills: ["R", "Python", "SQL", "PowerBI", "Tableau", "Sigma"],
    projects: [
      {
        title: "Business Intelligence Tooling Migration",
        context: "Historic BI tool was outdated & difficult to maintain at a rapidly scaling organization, leading to mismanaged reports scattered across departments.",
        solution: "Led data team through migration efforts, successfully migrating reporting infrastructure to new tool while rolling out standardized metric layer.",
        metric: "1 Unified Source of Truth",
        outcome: "Enabled execs to trust in data infrastructure as they spent less time pouring over mis-matched reporting.",
      },
      {
        title: "Customer Cohort Model",
        context: "Product team at a regional bank needed to understand how customer behavior varied across regions before making a pricing change.",
        solution: "Built a clustering model using behavioral data and pricing elasticity to segment customers into distinct cohorts, giving the team a clear view of how different groups respond to pricing changes.",
        metric: "6 Customer Groups Uncovered",
        outcome: "Enabled targeted pricing strategies instead of broad, one-size-fits-all changes.",
      },
      {
        title: "Predictive Deal Closing Model",
        context: "A real estate lending company needed a reliable way to forecast month-end loan closings, but deal timelines were constantly shifting and projections varied widely across reps, borrowers, and deal stages.",
        solution: "Built a dynamic forecasting model incorporating borrower behavior, sales rep patterns, deal stage progression, and changing close dates. Updated in real time as pipeline data evolved.",
        metric: "±3% Forecast Accuracy",
        outcome: "Leadership gained a reliable view of month-end performance as predictions consistently landed within ±3% of actual closing volume.",
      },
    ],
  },
  {
    id: "automation",
    number: "02",
    name: "Automation",
    taglineLabel: "You need me when...",
    tagline: "Manual work is eating your team's time | Leads take too long to find | Your workflows aren't connected | Reporting takes too long",
    sectionBg: "bg-gradient-to-b from-slate-50 to-white",
    skills: ["Python", "APIs", "Claude", "Codex", "HubSpot"],
    projects: [
      {
        title: "Grant Lead Generation Engine",
        context: "Non-profit organization manually searched for grants across fragmented sources, missing opportunities and wasting hours weekly.",
        solution: "Built an automated pipeline that aggregates grant data, enriches eligibility, and scores relevance using embeddings + LLM classification.",
        metric: "98% less irrelevant grant review",
        outcome: "Surfaced only the top ~25 high-fit opportunities from 1,800 active grants each week.",
      },
      {
        title: "Campaign Creation & Automation",
        context: "Regional bank had a marketing campaign that was manually built and refreshed, limiting targeting precision and slowing down iteration cycles.",
        solution: "Built an automated campaign system that refreshed every 6 weeks, using a lightweight predictive model to identify high-value niche customer segments and dynamically update targeting and offers.",
        metric: "~30% Higher Performance",
        outcome: "Self-refreshing system targeting high-propensity customers.",
      },
      {
        title: "Customer Data Pipeline & Activation Engine",
        context: "Customer data was fragmented across multiple third-party platforms, making it difficult to unify data and execute targeted campaigns efficiently.",
        solution: "Built an automated pipeline that ingests customer data from multiple APIs, processes and standardizes it through ETL, and delivers a unified dataset ready for campaign execution.",
        metric: "Unified Campaign-Ready Data",
        outcome: "Eliminated fragmentation and enabled consistent, data-driven targeting.",
      },
    ],
  },
  {
    id: "product-development",
    number: "03",
    name: "Custom Product Builds",
    taglineLabel: "You need me when...",
    tagline: "Your team needs internal tooling | AI could automate complex work | Data is unstructured and unusable",
    sectionBg: "bg-slate-50",
    skills: ["Next.js", "React", "Sanity", "Vercel", "Supabase", "Claude Code"],
    projects: [
      {
        title: "Real Estate Portfolio Platform",
        context: "Real estate owner lacked a centralized, professional platform to showcase properties, capture leads, and manage listings dynamically.",
        solution: "Built a fully responsive property portfolio platform with CMS integration, interactive maps, listing pages, and lead capture functionality. Designed for easy client ownership and scalability.",
        metric: "View the Live Platform",
        outcome: "",
        link: "https://rent-quade-jet.vercel.app/",
      },
      {
        title: "Relationship Mapping Web App",
        context: "Professionals lacked a clear way to visualize and leverage their network connections for opportunities, introductions, and relationship management.",
        solution: "Built an interactive web application that maps relationships into a visual tree structure, enabling users to explore connections, identify pathways, and better leverage their network.",
        metric: "View the Live App",
        outcome: "",
        link: "https://connections-tree-web-app.vercel.app/landing_page",
      },
    ],
  },
  {
    id: "soft-skills",
    number: "04",
    name: "Translating Complexity",
    tagline: "Complex systems only create value when people understand them.",
    sectionBg: "bg-gradient-to-b from-slate-50 to-white",
    skills: [],
    projects: [
      {
        title: "Turn technical work into business decisions",
        context: "",
        solution: "",
        metric: "",
        outcome: "",
        bullets: [
          "Present complex data and system outputs in a way leadership can immediately act on",
          "Drive alignment between technical work and business strategy",
          "Communicate clearly with non-technical stakeholders to ensure adoption",
          "Comfortable presenting to large groups (40+), connecting analytics directly to growth",
        ],
      },
    ],
  },
];

// ── COMPONENTS ────────────────────────────────────────────────────────────────

function ProjectCard({ project, isMiddle = false }: { project: Project; isMiddle?: boolean }) {
  if (project.bullets) {
    return (
      <div className="rounded-2xl border border-slate-200/70 overflow-hidden shadow-sm shadow-slate-100/80 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-200 transition-all duration-200 bg-white">
        <div className="px-7 pt-6 pb-2">
          <h3 className="font-semibold text-[15px] [color:#26251e]">{project.title}</h3>
        </div>
        <ul className="px-7 pb-7 flex flex-col gap-3">
          {project.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5">
              <span className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0 [background-color:#1f8a65]" />
              <span className="text-[13px] [color:#5a5852] leading-[1.5]">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    // row-span-4 + subgrid: this card spans all 4 shared row tracks so
    // Context, Solution, and Outcome align across sibling cards.
    <div className={`group row-span-4 grid [grid-template-rows:subgrid] rounded-2xl border border-slate-200/70 overflow-hidden transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-200 ${isMiddle ? "shadow-md shadow-slate-200/50" : "shadow-sm shadow-slate-100/80"}`}>
      {/* Row 1 — Title */}
      <div className="px-7 pt-6 pb-0 bg-white">
        <h3 className="font-semibold text-[15px] [color:#26251e]">{project.title}</h3>
      </div>

      {/* Row 2 — Context */}
      <div className="px-7 pb-0 bg-white">
        <p className="text-[11px] font-bold tracking-[0.18em] uppercase [color:#807d72] mb-1">Context</p>
        <p className="text-[13px] [color:#807d72] leading-[1.5]">{project.context}</p>
      </div>

      {/* Row 3 — Solution */}
      <div className="px-7 pb-0 bg-white border-t border-slate-100">
        <p className="text-[11px] font-bold tracking-[0.18em] uppercase [color:#807d72] mb-1">Solution</p>
        <p className="text-[13px] [color:#5a5852] leading-[1.5]">{project.solution}</p>
      </div>

      {/* Row 4 — Outcome */}
      <div className="px-7 pt-3 pb-5 border-t [background:linear-gradient(to_bottom,#a9d3ac,#9fc9a2)] [border-color:#9fc9a2] group-hover:[filter:brightness(0.95)_saturate(1.1)] transition-[filter] duration-200">
        <p className="text-[11px] font-bold tracking-[0.12em] uppercase [color:#807d72] mb-1">Outcome</p>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[22px] font-black leading-[1.1] mb-1 [color:#1f8a65] hover:underline"
          >
            {project.metric}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        ) : (
          <p className="text-[22px] font-black leading-[1.1] mb-1 [color:#1f8a65]">{project.metric}</p>
        )}
        {project.outcome && (
          <p className="text-xs [color:#5a5852] leading-[1.45]">{project.outcome}</p>
        )}
      </div>
    </div>
  );
}

function VerticalSection({ vertical }: { vertical: Vertical }) {
  const isThree = vertical.projects.length === 3;
  return (
    <section id={vertical.id} className={`py-16 px-6 ${vertical.sectionBg}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold tracking-[0.2em] uppercase [color:#1f8a65]">
              {vertical.number}
            </span>
            <span className="w-8 h-px bg-slate-200" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-2">{vertical.name}</h2>
          {vertical.taglineLabel && (
            <p className="text-[13px] font-bold [color:#26251e] mb-2">{vertical.taglineLabel}</p>
          )}
          {vertical.taglineLabel ? (
            <div className="flex flex-wrap gap-2">
              {vertical.tagline.split(" | ").map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-[13px] font-medium [background-color:#dfa88f] [color:#26251e]"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : (
            <p className="[color:#5a5852] leading-relaxed text-[15px]">{vertical.tagline}</p>
          )}
        </div>
        {/* grid-template-rows defines 4 shared tracks: title / context / solution / outcome.
            Cards use row-span-4 + subgrid so every row aligns across columns. */}
        <div
          className={`grid gap-x-5 gap-y-5 [grid-template-rows:auto_1fr_1fr_auto] ${
            isThree
              ? "sm:grid-cols-2 lg:grid-cols-3"
              : vertical.projects.length === 1
              ? "grid-cols-1 max-w-2xl mx-auto w-full"
              : "sm:grid-cols-2 mx-auto lg:max-w-[762px] w-full"
          }`}
        >
          {vertical.projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              isMiddle={vertical.projects.length === 3 && i === 1}
            />
          ))}
        </div>
        {vertical.skills.length > 0 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 opacity-70">
            <span className="text-[13px] font-bold [color:#26251e] mr-1">Tools:</span>
            {vertical.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full text-[13px] font-medium [background-color:#9fbbe0] [color:#26251e]"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <div className="bg-white [color:#26251e] font-sans">
      <Navbar />
      <main className="pt-16">
        {/* ── HERO ──────────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase [color:#807d72]">
              How I Create Value
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-5">
              A skillset that drives outcomes
            </h1>
            <p className="mx-auto max-w-xl text-lg [color:#5a5852] leading-relaxed">
              I combine data analytics, automation, product development, and the ability to translate complexity to build systems that surface insights and create compounding returns.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {verticals.map((v) => (
                <a
                  key={v.id}
                  href={`#${v.id}`}
                  className="px-4 py-2 rounded-full border border-slate-200 text-sm [color:#5a5852] hover:border-slate-400 hover:[color:#26251e] transition-colors"
                >
                  {v.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── VERTICALS ─────────────────────────────────────────────── */}
        {verticals.map((vertical) => (
          <VerticalSection key={vertical.id} vertical={vertical} />
        ))}

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-slate-950">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              Let&apos;s find the highest leverage problem in your business
            </h2>
<a
              href="mailto:drez.data@gmail.com?subject=Consulting Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-colors"
            >
              Start a Conversation
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
            {[["Services", "/#services"], ["Process", "/#process"], ["Contact", "/#contact"]].map(([label, href]) => (
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
