"use client";

import { useState } from "react";

type Project = {
  title: string;
  context: string;
  solution: string;
  metric: string;
  outcome: string;
  link?: string;
  bullets?: string[];
};

export default function ProjectCard({ project, isMiddle = false }: { project: Project; isMiddle?: boolean }) {
  const [expanded, setExpanded] = useState(false);

  if (project.bullets) {
    return (
      <div className="rounded-2xl border border-slate-200/70 overflow-hidden shadow-sm shadow-slate-100/80 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-200 transition-all duration-200 bg-white">
        <button
          className="w-full text-left px-6 pt-5 pb-4 md:px-7 md:pt-6 md:pb-2 md:cursor-default"
          onClick={() => setExpanded(!expanded)}
        >
          <h3 className="font-semibold text-[15px] [color:#26251e]">{project.title}</h3>
          <p className="md:hidden mt-1 text-[11px] [color:#807d72]">
            {expanded ? "Show less ↑" : "Click for more ↓"}
          </p>
        </button>
        <ul className={`px-6 pb-5 md:px-7 md:pb-7 flex flex-col gap-3 ${!expanded ? "hidden md:flex" : "flex"}`}>
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
    // md+ only: row-span-4 + subgrid for cross-card alignment. Mobile is plain block.
    <div
      className={`group rounded-2xl border border-slate-200/70 overflow-hidden transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-200 md:row-span-4 md:grid md:[grid-template-rows:subgrid] ${isMiddle ? "shadow-md shadow-slate-200/50" : "shadow-sm shadow-slate-100/80"}`}
    >
      {/* Title — always visible */}
      <div
        className="px-6 pt-5 pb-4 md:px-7 md:pt-6 md:pb-0 bg-white cursor-pointer md:cursor-default"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="font-semibold text-[15px] [color:#26251e]">{project.title}</h3>
        <p className="md:hidden mt-1 text-[11px] [color:#807d72]">
          {expanded ? "Show less ↑" : "Click for more ↓"}
        </p>
      </div>

      {/* Context */}
      <div className={`px-6 md:px-7 pb-0 bg-white ${!expanded ? "hidden md:block" : ""}`}>
        <p className="text-[11px] font-bold tracking-[0.18em] uppercase [color:#807d72] mb-1">Context</p>
        <p className="text-[13px] [color:#807d72] leading-[1.5]">{project.context}</p>
      </div>

      {/* Solution */}
      <div className={`px-6 md:px-7 pb-0 bg-white border-t border-slate-100 ${!expanded ? "hidden md:block" : ""}`}>
        <p className="text-[11px] font-bold tracking-[0.18em] uppercase [color:#807d72] mb-1">Solution</p>
        <p className="text-[13px] [color:#5a5852] leading-[1.5]">{project.solution}</p>
      </div>

      {/* Outcome */}
      <div className={`px-6 md:px-7 pt-3 pb-5 border-t [background:linear-gradient(to_bottom,#a9d3ac,#9fc9a2)] [border-color:#9fc9a2] group-hover:[filter:brightness(0.95)_saturate(1.1)] transition-[filter] duration-200 ${!expanded ? "hidden md:block" : ""}`}>
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
