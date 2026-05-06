"use client";

import { useState } from "react";

const linkedInIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-100 bg-[#0a1628] md:bg-white/90 md:backdrop-blur-sm md:border-slate-100">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Left: logo + LinkedIn */}
        <div className="flex items-center gap-3">
          <a href="/" className="font-semibold tracking-tight text-base text-white md:text-slate-900 hover:text-slate-300 md:hover:text-slate-600 transition-colors">
            Drezdan Analytics LLC
          </a>
          <a
            href="https://www.linkedin.com/in/drezdan-dale/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white md:hover:text-slate-900 transition-colors"
            aria-label="LinkedIn"
          >
            {linkedInIcon}
          </a>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/projects"
            className="text-sm text-slate-700 hover:text-slate-900 hover:underline underline-offset-4 transition-colors"
          >
            How I Create Value
          </a>
          {[["How I Work", "/#process"], ["Contact", "/#contact"]].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:drez.data@gmail.com?subject=Consulting Inquiry"
            className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-700 transition-colors"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a1628] border-t border-slate-700 px-6 py-5 flex flex-col gap-4">
          {[
            ["How I Create Value", "/projects"],
            ["How I Work", "/#process"],
            ["Contact", "/#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-sm text-slate-300 hover:text-white transition-colors${label === "How I Create Value" ? " underline underline-offset-4" : ""}`}
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:drez.data@gmail.com?subject=Consulting Inquiry"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-2.5 rounded-lg bg-white text-[#0a1628] text-sm font-medium text-center hover:bg-slate-200 transition-colors"
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </header>
  );
}
