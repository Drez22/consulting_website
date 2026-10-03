import Link from "next/link";

const arrow = (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

type Props = {
  variant?: "banner" | "compact";
  label?: string;
  headline: string;
  body: string;
  className?: string;
};

export default function AssessmentCallout({
  variant = "banner",
  label,
  headline,
  body,
  className = "bg-white",
}: Props) {
  const banner = variant === "banner";
  return (
    <section className={`${banner ? "py-12 md:py-16" : "py-10 md:py-12"} px-6 ${className}`}>
      <div className={`mx-auto ${banner ? "max-w-5xl" : "max-w-4xl"}`}>
        <div
          className={`rounded-2xl border border-slate-200/70 bg-white shadow-sm shadow-slate-100/80 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 border-l-4 [border-left-color:#1f8a65] ${
            banner ? "px-7 py-8 md:px-10 md:py-9" : "px-6 py-6 md:px-8 md:py-7"
          }`}
        >
          <div className="flex-1">
            {label && (
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-[0.2em] uppercase [color:#1f8a65]">
                  {label}
                </span>
                <span className="w-8 h-px bg-slate-200" />
              </div>
            )}
            <h2
              className={`font-bold leading-tight [color:#26251e] mb-2 ${
                banner ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
              }`}
            >
              {headline}
            </h2>
            <p className="text-[15px] [color:#5a5852] leading-relaxed max-w-2xl">{body}</p>
          </div>
          <Link
            href="/assessment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-700 transition-colors whitespace-nowrap self-start md:self-center"
          >
            Explore the Assessment
            {arrow}
          </Link>
        </div>
      </div>
    </section>
  );
}
