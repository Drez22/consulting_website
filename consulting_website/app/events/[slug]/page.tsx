import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import SlideDeck from "../components/SlideDeck";
import { formatEventDate, getEvent, getVisibleEvents } from "../data";

export const dynamicParams = false;

export function generateStaticParams() {
  return getVisibleEvents().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return {};
  return {
    title: `${event.title} — Drezdan Analytics LLC`,
    description: event.summary,
  };
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  return (
    <div className="bg-white [color:#26251e] font-sans">
      <Navbar />
      <main className="pt-16">
        <section className="py-12 md:py-16 px-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-4xl">
            <Link href="/events" className="inline-flex items-center gap-1.5 mb-6 text-sm [color:#807d72] hover:[color:#26251e] transition-colors">
              &larr; All events
            </Link>
            <p className="mb-3 text-[11px] font-bold tracking-[0.18em] uppercase [color:#1f8a65]">
              {formatEventDate(event.date)} &middot; {event.venue}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4">{event.title}</h1>
            <p className="max-w-2xl text-base sm:text-lg [color:#5a5852] leading-relaxed">{event.summary}</p>
          </div>
        </section>

        <section className="pb-16 md:pb-24 px-6 bg-white">
          <div className="mx-auto max-w-4xl">
            <SlideDeck
              slides={event.slides}
              title={`${event.title} slides`}
              mode="embedded"
              fullHref={`/events/${event.slug}/slides`}
            />
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
