import Link from "next/link";
import Navbar from "../components/Navbar";
import { formatEventDate, getVisibleEvents, isUpcoming, type EventItem } from "./data";

export const metadata = {
  title: "Events — Drezdan Analytics LLC",
  description: "Speaking events and publicly available slides from Drezdan Dale.",
};

// Re-render hourly so an event moves from Upcoming to Past on its own.
export const revalidate = 3600;

function EventCard({ event }: { event: EventItem }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group rounded-2xl border border-slate-200/70 bg-white shadow-sm shadow-slate-100/80 px-6 py-6 md:px-8 md:py-7 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-200 transition-all duration-200"
    >
      <p className="text-[11px] font-bold tracking-[0.18em] uppercase [color:#807d72]">
        {formatEventDate(event.date)} &middot; {event.venue}
      </p>
      <h3 className="font-semibold text-lg [color:#26251e]">{event.title}</h3>
      <p className="text-[14px] [color:#5a5852] leading-relaxed">{event.summary}</p>
      <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium [color:#1f8a65]">
        View slides
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
    </Link>
  );
}

function Group({ label, items }: { label: string; items: EventItem[] }) {
  if (items.length === 0) return null;
  return (
    <div className="mb-12 last:mb-0">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-xs font-bold tracking-[0.2em] uppercase [color:#1f8a65]">{label}</span>
        <span className="w-8 h-px bg-slate-200" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {items.map((e) => (
          <EventCard key={e.slug} event={e} />
        ))}
      </div>
    </div>
  );
}

export default function Events() {
  const all = getVisibleEvents();
  const upcoming = all.filter((e) => isUpcoming(e.date)).sort((a, b) => a.date.localeCompare(b.date));
  const past = all.filter((e) => !isUpcoming(e.date)).sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="bg-white [color:#26251e] font-sans">
      <Navbar />
      <main className="pt-16">
        <section className="py-14 md:py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase [color:#807d72]">Events</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-5">
              Talks &amp; slides
            </h1>
            <p className="mx-auto max-w-xl text-base sm:text-lg [color:#5a5852] leading-relaxed">
              Speaking events and the slides behind them, free to view and share.
            </p>
          </div>
        </section>

        <section className="pb-16 md:pb-24 px-6 bg-white">
          <div className="mx-auto max-w-4xl">
            {all.length === 0 ? (
              <div className="rounded-2xl border border-slate-200/70 bg-slate-50 px-6 py-10 text-center">
                <p className="font-semibold [color:#26251e] mb-1">No events posted yet</p>
                <p className="text-[14px] [color:#5a5852]">Slides from upcoming talks will appear here.</p>
              </div>
            ) : (
              <>
                <Group label="Upcoming" items={upcoming} />
                <Group label="Past" items={past} />
              </>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 border-t border-slate-800 px-6 py-8">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white text-sm font-semibold tracking-tight">Drezdan Analytics LLC</span>
          <nav className="flex items-center gap-6">
            {[["How I Create Value", "/projects"], ["Events", "/events"], ["Contact", "/#contact"]].map(([label, href]) => (
              <Link key={label} href={href} className="text-xs text-slate-600 hover:text-slate-300 transition-colors">
                {label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-slate-700">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
