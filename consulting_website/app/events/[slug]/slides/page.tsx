import { notFound } from "next/navigation";
import SlideDeck from "../../components/SlideDeck";
import { getEvent, getVisibleEvents } from "../../data";

export const dynamicParams = false;

export function generateStaticParams() {
  return getVisibleEvents().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return {};
  return { title: `${event.title}: Slides — Drezdan Analytics LLC`, description: event.summary };
}

export default async function SlidesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  return (
    <div className="min-h-dvh bg-slate-950 text-white font-sans">
      <SlideDeck
        slides={event.slides}
        title={`${event.title} slides`}
        mode="full"
        backHref={`/events/${event.slug}`}
      />
    </div>
  );
}
