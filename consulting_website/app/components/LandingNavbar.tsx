const linkedInIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function LandingNavbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/" className="font-semibold tracking-tight text-base hover:text-slate-600 transition-colors">
            Drezdan Analytics LLC
          </a>
          <a
            href="https://www.linkedin.com/in/drezdan-dale/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 transition-colors"
            aria-label="LinkedIn"
          >
            {linkedInIcon}
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {[["Problem", "#problem"], ["Scope", "#scope"], ["Outcome", "#outcome"], ["Structure", "#structure"]].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="https://calendly.com/drezdan-drezdandale"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-medium hover:bg-slate-700 transition-colors whitespace-nowrap"
        >
          Book Assessment Call
        </a>
      </div>
    </header>
  );
}
