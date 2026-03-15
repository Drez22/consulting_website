"use client";

import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("drez.data@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white text-slate-900 font-sans">
      {/* ── NAVBAR ────────────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold tracking-tight text-base">
              Drezdan Analytics LLC<span className="text-black"></span>
            </span>
            <a
              href="https://www.linkedin.com/in/drezdan-dale/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {["Services", "Process", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="mailto:drez.data@gmail.com?subject=Consulting Inquiry"
            className="hidden md:inline-flex px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-700 transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      </header>
      <main className="pt-16">
        {/* ── HERO ──────────────────────────────────────────────────── */}
        <section className="py-32 px-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
              Independent Data, AI, & GTM Consultant
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              Clarity from data.
              <br />
              Growth from systems.
            </h1>
            <p className="mx-auto max-w-xl text-lg text-slate-500 leading-relaxed mb-10">
              I help companies turn fragmented data and broken processes into
              cleaner infrastructure, sharper insights, and revenue that compounds.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="mailto:drez.data@gmail.com"
                className="px-8 py-3.5 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-700 transition-colors"
              >
                Start a Conversation
              </a>
              <a
                href="#services"
                className="px-8 py-3.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium hover:border-slate-400 transition-colors"
              >
                View Services
              </a>
            </div>
          </div>
        </section>
        {/* ── PROBLEMS I SOLVE ──────────────────────────────────────── */}
        <section id="problems" className="py-24 px-6 bg-slate-950">
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
              Sound Familiar?
            </p>
            <h2 className="mb-14 text-3xl sm:text-4xl font-bold text-white leading-tight max-w-lg">
              Problems I solve
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  n: "01",
                  title: "Messy dashboards & unclear data",
                  body: "Unclear dashboards everywhere. Reports living in spreadsheets. Undefined KPIs. Leadership still cannot answer the questions that actually drive decisions.",
                },
                {
                  n: "02",
                  title: "Misaligned GTM systems",
                  body: "CRM, Marketing, and Sales tools all live in different systems. Deals slip through the cracks and no one owns the full revenue picture.",
                },
                {
                  n: "03",
                  title: "AI pilots that never ship",
                  body: "Experiments and prototypes everywhere, but nothing reaches production. No clear path from idea to operational system.",
                },
                {
                  n: "04",
                  title: "Operations stuck in reactive mode",
                  body: "Instead of building scalable systems, the team spends time fixing reports, cleaning data, and chasing operational issues.",
                },
              ].map((p) => (
                <div
                  key={p.n}
                  className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition-colors"
                >
                  <span className="text-xs font-bold tracking-widest text-slate-600">
                    {p.n}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ── SERVICES OVERVIEW ─────────────────────────────────────── */}
        <section id="services" className="py-24 px-6 bg-slate-50">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
              Services
            </p>
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold leading-tight max-w-lg">
              Systems I Build
            </h2>
            <p className="mb-14 text-slate-500 leading-relaxed max-w-xl">
              I help companies design, build, and operationalize systems that power smarter decisions and scalable revenue.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Data Analysis",
                  icon: "▦",
                  body: "Transform fragmented data into into clear dashboards, reporting systems, and insights leadership can actually trust.",
                },
                {
                  title: "GTM Engineering",
                  icon: "⬡",
                  body: "Build infrastructure and analytics pipelines that power modern sales and marketing teams.",
                },
                {
                  title: "AI Solutions",
                  icon: "✦",
                  body: "Design and deploy practical AI tools that automate complex work and turn unstructured data into usable insights.",
                },
                {
                  title: "Predictive Analytics",
                  icon: "◈",
                  body: "Build statistical models and forecasting systems that uncover patterns and guide smarter decisions.",
                },
                {
                  title: "RevOps",
                  icon: "◎",
                  body: "Align sales, marketing, and operations through integrated systems, clean data, and reporting that creates a single source of truth.",
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-900 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300"
                >
                  <span className="text-2xl mb-5 block text-slate-300 group-hover:text-slate-900 transition-colors duration-300">
                    {s.icon}
                  </span>
                  <h3 className="text-base font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ── PRINCIPLES ────────────────────────────────────────────── */}
        <section id="principles" className="py-24 px-6 bg-slate-950">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
              Principles
            </p>
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-white leading-tight max-w-lg">
              Principles I operate by
            </h2>
            <p className="mb-14 text-slate-400 leading-relaxed max-w-xl">
              The values that guide how I show up for every client and every engagement.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Give a shit & get shit done",
                  icon: "2",
                  body: "I care about my work and companies I work with, and I have the passion to deliver real results.",
                },
                {
                  title: "Strong leaders create circumstances",
                  icon: "3",
                  body: "They do not wait for perfect conditions. They perfect through action.",
                },
                {
                  title: "Relationships matter more than money in the moment",
                  icon: "4",
                  body: "The right long-term relationship is worth more than a short-term dollar.",
                },
                {
                  title: "Don't force creativity- make space for it",
                  icon: "5",
                  body: "Creativity has many forms. The best ideas emerge when you aren't looking for them.",
                },
                {
                  title: "Stay humble, work hard, act purposefully",
                  icon: "1",
                  body: "Drop the ego. Be willing to put in the work. Do it all purposefully.",
                },
                {
                  title: "Being in the game > Watching from home",
                  icon: "6",
                  body: "I would rather be the worst team in the playoffs than the best team sitting at home. Show up, compete, and learn.",
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition-colors"
                >
                  <h3 className="text-base font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ── HOW I WORK ────────────────────────────────────────────── */}
        <section id="process" className="py-24 px-6 bg-white">
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
              How I Work
            </p>
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold leading-tight max-w-lg">
              Simple, transparent, no surprises
            </h2>
            <p className="mb-14 text-slate-500 max-w-xl leading-relaxed">
              Every engagement is clearly scoped, transparent, and hands-on. 
              You will work directly with me to design and ship systems that actually get used.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  n: "01",
                  title: "Discovery Call",
                  body: "A 30–60 minute conversation to understand your goals, current systems, and where better data or automation could unlock leverage.",
                },
                {
                  n: "02",
                  title: "Fit & Scope",
                  body: "After our conversation, I take a few days to evaluate the problem space and determine if I'm the right person to help. If it's a good fit, I'll return with a clear proposal outlining scope, timeline, and engagement model.",
                },
                {
                  n: "03",
                  title: "Execution",
                  body: "Engagements can be fractional, project-based, or hourly depending on the scope. I work hands-on with your team to build systems that deliver measurable outcomes.",
                },
                {
                  n: "04",
                  title: "Handover",
                  body: "The goal is not long-term dependency — it's building infrastructure your team can operate confidently.",
                },
              ].map((step) => (
                <div key={step.n}>
                  <div className="w-14 h-14 rounded-2xl border-2 border-slate-200 flex items-center justify-center font-bold text-sm text-slate-900 mb-5 bg-white">
                    {step.n}
                  </div>
                  <h3 className="text-base font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ── FINAL CTA ─────────────────────────────────────────────── */}
        <section id="contact" className="py-32 px-6 bg-slate-950">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block mb-6 px-3 py-1 rounded-full border border-slate-700 text-xs font-semibold text-slate-400 tracking-widest uppercase">
              Pricing starting at $125/hour
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              Let&apos;s build something
              <br />
              that actually works.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              I am always open to hearing about interesting problems. If you are working on something that could benefit from better data, AI systems, or revenue infrastructure, feel free to reach out.
            </p>
            <a
              href="mailto:drez.data@gmail.com?subject=Consulting Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-colors"
            >
              Start a Conversation
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
            <div className="mt-4">
              <button
                onClick={copyEmail}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Copy Email: drez.data@gmail.com
              </button>
              {copied && (
                <span className="ml-2 text-xs text-green-400 font-medium">Copied!</span>
              )}
            </div>
            <p className="mt-5 text-xs text-slate-600">
              I typically respond within two businesses days.
            </p>
          </div>
        </section>
      </main>
      {/* ── FOOTER ────────────────────────────────────────────────── */}
      <footer className="bg-slate-950 border-t border-slate-800 px-6 py-8">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-white text-sm font-semibold tracking-tight">
              Drezdan Analytics LLC<span className="text-slate-500"></span>
            </span>
            <a
              href="https://www.linkedin.com/in/drezdan-dale/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-300 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <nav className="flex items-center gap-6">
            {[
              ["Services", "#services"],
              ["Process", "#process"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-xs text-slate-600 hover:text-slate-300 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
          <p className="text-xs text-slate-700">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}



