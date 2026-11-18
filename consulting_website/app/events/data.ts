// ── EVENTS DATA ───────────────────────────────────────────────────────────────
// To add a talk: add an entry to `events` below, then write its `slides`.
// Set `draft: true` to keep an event off the live site (it still shows locally
// in `npm run dev`). Remove `draft` (or set it to false) to publish.
//
// Slides are public. Do not put private speaker notes in this file.

export type Slide =
  | { kind: "title"; title: string; subtitle?: string; meta?: string }
  | { kind: "section"; title: string; subtitle?: string }
  | { kind: "bullets"; title: string; bullets: string[] }
  | { kind: "statement"; text: string; subtext?: string }
  | { kind: "quote"; text: string; attribution?: string }
  | { kind: "image"; title?: string; src: string; alt: string; caption?: string }
  | { kind: "end"; title: string; subtitle?: string; links?: { label: string; href: string }[] };

export type EventItem = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  venue: string; // e.g. "Guest lecture · University name"
  summary: string;
  slides: Slide[];
  draft?: boolean;
};

export const events: EventItem[] = [
  {
    slug: "jcu-guest-talk",
    title: "PLACEHOLDER: JCU guest talk",
    date: "2026-11-20",
    venue: "PLACEHOLDER venue",
    summary: "PLACEHOLDER summary. Replace with your own words.",
    draft: true,
    slides: [
      { kind: "title", title: "PLACEHOLDER title", subtitle: "Placeholder subtitle", meta: "Drezdan Dale · Drezdan Analytics LLC" },
      { kind: "section", title: "Placeholder section", subtitle: "Section divider" },
      {
        kind: "bullets",
        title: "Placeholder bullets",
        bullets: ["First placeholder point", "Second placeholder point", "Third placeholder point"],
      },
      { kind: "statement", text: "Placeholder statement slide.", subtext: "Optional supporting line" },
      { kind: "quote", text: "Placeholder quote text.", attribution: "Placeholder attribution" },
      { kind: "end", title: "Thank you", subtitle: "Placeholder closing", links: [{ label: "drezdandale.com", href: "https://www.drezdandale.com" }] },
    ],
  },
];

// ── HELPERS ───────────────────────────────────────────────────────────────────

// Drafts are visible in local dev only; production builds exclude them.
const showDrafts = process.env.NODE_ENV !== "production";

export function getVisibleEvents(): EventItem[] {
  return events.filter((e) => showDrafts || !e.draft);
}

export function getEvent(slug: string): EventItem | undefined {
  return getVisibleEvents().find((e) => e.slug === slug);
}

export function formatEventDate(date: string): string {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// An event is "upcoming" through the end of its day.
export function isUpcoming(date: string): boolean {
  const end = new Date(`${date}T23:59:59`);
  return end.getTime() >= Date.now();
}
