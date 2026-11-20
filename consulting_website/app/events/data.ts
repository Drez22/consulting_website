// ── EVENTS DATA ───────────────────────────────────────────────────────────────
// To add a talk: add an entry to `events` below, then write its `slides`.
// Set `draft: true` to keep an event off the live site (it still shows locally
// in `npm run dev`). Remove `draft` (or set it to false) to publish.
//
// Slides are public. Do not put private speaker notes in this file.

export type Slide =
  | { kind: "title"; title: string; subtitle?: string; meta?: string; photo?: { src: string; alt?: string } }
  | { kind: "section"; title: string; subtitle?: string }
  | { kind: "bullets"; tag?: string; title: string; bullets: string[]; numbered?: boolean }
  | { kind: "statement"; tag?: string; heading?: string; text: string; subtext?: string }
  | {
      kind: "timeline";
      tag?: string; // small label in the top-left corner
      title?: string;
      rows: { label: string; text: string }[];
      // Each draws a "]" spanning rows from..to (0-based, inclusive) with a label.
      brackets?: { from: number; to: number; label: string }[];
    }
  | { kind: "pairs"; tag?: string; title?: string; rows: { lead: string; result: string }[] } // "lead → result" rows
  | { kind: "crossed"; tag?: string; title?: string; items: string[]; footnote?: string } // scattered, struck-through chips
  | { kind: "career"; tag?: string; title?: string; steps: { date: string; role: string; org?: string }[] } // dated career timeline
  | {
      kind: "progression";
      tag?: string;
      title?: string;
      // Left: a path of steps; `milestone` steps get a label and a bigger dot.
      // A step can carry bullets that hang under it.
      steps: { label?: string; text: string; milestone?: boolean; bullets?: string[] }[];
      // Right: a colored card. Omit it and the path spans the full width.
      card?: { label: string; headline: string; sub?: string; bullets?: string[] };
    }
  | {
      kind: "cards";
      tag?: string;
      title?: string;
      subtitle?: string;
      columns?: 2 | 3 | 4;
      // A card is a plain label, or a title with a short description.
      cards: (string | { title: string; body?: string; tags?: string[] })[];
    } // grid of cards
  | {
      kind: "flow";
      tag?: string; // small label in the top-left corner
      title?: string;
      large?: boolean; // bigger type for slides with little text
      // Blocks render top to bottom, so one slide can mix paragraphs, bullets and chips.
      blocks: (
        | { t: "lead"; text: string } // bold lead-in
        | { t: "text"; text: string }
        | { t: "accent"; text: string } // green and bold
        | { t: "bullets"; items: string[] }
        | { t: "chips"; items: string[] }
      )[];
    }
  | {
      kind: "compare";
      tag?: string;
      title?: string;
      // Two photos side by side. Leave `src` off to show an empty frame until the photo exists.
      photos: { src?: string; alt?: string; label: string }[];
      // Optional green card beside (or below) the photos.
      callout?: { label?: string; bullets: string[] };
    }
  | { kind: "quote"; text: string; attribution?: string }
  | { kind: "image"; title?: string; src: string; alt: string; caption?: string }
  | { kind: "end"; title: string; subtitle?: string; links?: { label: string; href: string }[]; qr?: { src: string; caption?: string } };

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
    title: "JCU Guest Speaker Talk",
    date: "2026-11-20",
    venue: "Virtual Meeting",
    summary: "Guest speaking event for Dr. Banerjee's 400 level data course",
    draft: false,
    slides: [
      { kind: "title", title: "JCU Data Guest Speaker Event", subtitle: "Drezdan Dale · Drezdan Analytics LLC", photo: { src: "/drez-title.jpg", alt: "Drezdan Dale" } },
      {
        kind: "statement",
        text: "I remember sitting in this class listening to guest speakers thinking, \"they are so far ahead of me, I wonder if I will ever get there?\"",
        subtext: "Fast forward 3.5 years and I am shocked at how far I have come. I hope you all wonder the same thing and go as far as your mind dares",
      },
      {
        kind: "bullets",
        title: "Topic Overview",
        numbered: true,
        bullets: ["Who I am", "Career", "Drezdan Analytics LLC", "Entrepreneurship", "Advice"],
      },
      {
        kind: "bullets",
        tag: "Who I am #1",
        title: "Who I am",
        bullets: [
          "Grew up in cornfields of IL",
          "Graduated from JCU in May 2023",
          "Have lived in CLE, CBus, and now Chicago",
          "Enjoy working out, walking, traveling, drinking coffee",
          "Big foodie & have a top 25 list of pizza restaurants",
        ],
      },
      {
        kind: "bullets",
        tag: "Who I am #2",
        title: "Values",
        bullets: ["Consistency", "Discipline", "Hard work beats talent", "Stay Curious", "Do Things for YOU"],
      },
      { kind: "section", title: "Career" },
      {
        kind: "career",
        tag: "Career #1",
        title: "Career Timeline",
        steps: [
          { date: "May 2021", role: "Data Analyst Intern", org: "Upright Lending" },
          { date: "May 2023", role: "Data Analyst (full time)", org: "Upright Lending" },
          { date: "Dec 2023", role: "Product Data Analyst", org: "Huntington Bank" },
          { date: "Mar 2026", role: "Started Drezdan Analytics" },
        ],
      },
      {
        kind: "progression",
        tag: "Career #2",
        title: "Upright Lending",
        steps: [
          { milestone: true, label: "May 2021", text: "Started as Data Analyst Intern" },
          { text: "3 months with data manager who left to work in crypto" },
          { text: "Had to grow up quick as was only data person at company for a solid 5-6 months" },
          { text: "Built most of the key reporting logic used by Underwriting, Sales, and Servicing teams" },
          { milestone: true, label: "May 2023", text: "Went full time as Data Analyst" },
          { text: "Owned Underwriting, Sales, Servicing, and Capital Markets reporting lines" },
        ],
        card: {
          label: "Best project",
          headline: "Rebuilt data infrastructure",
          sub: "Fall '22 to Spring '23",
          bullets: [
            "Dissected key reporting code",
            "Met with business leaders to verify understanding & receive sign off",
            "Mapped logic into new BI tool & new datawarehouse",
          ],
        },
      },
      {
        kind: "progression",
        tag: "Career #3",
        title: "Huntington Bank",
        steps: [
          {
            milestone: true,
            label: "December 2023",
            text: "Started as Deposit Product Data Analyst",
            bullets: [
              "Worked with Business Banking Deposit team, building & testing campaigns and sizing marketing tactics",
              "Helped build & maintain Consumer MMA migration optimization framework, migrating an average of $1.1B each month",
            ],
          },
          {
            milestone: true,
            text: "Moved to Digital Product team",
            bullets: [
              "Oversaw digital CD product launch, building out data trends to provide recommendations & uncovering cohorts of customers to serve digital ads to",
            ],
          },
        ],
        card: {
          label: "Best project",
          headline: "Digital production metric reporting",
          bullets: [
            "Owned reporting, presenting metrics and product recommendations in weekly diagnostic meetings to leadership",
            "Became comfortable describing problems using data to leadership",
          ],
        },
      },
      { kind: "section", title: "Drezdan Analytics LLC", subtitle: "March 2026 to Present" },
      {
        kind: "cards",
        tag: "Drezdan Analytics LLC #1",
        title: "Who I work with",
        columns: 2,
        cards: ["Private Lenders", "Banks", "GTM Teams", "Legal Services & Litigation Support"],
      },
      {
        kind: "cards",
        tag: "Drezdan Analytics LLC #2",
        title: "What I do",
        subtitle: "Everything Data & AI",
        columns: 3,
        cards: ["Data Analyst", "Data Engineer", "Data Science", "Fractional AI Owner", "Fractional Data Owner"],
      },
      {
        kind: "cards",
        tag: "Drezdan Analytics LLC #3",
        title: "Projects",
        columns: 2,
        cards: [
          {
            title: "NPL Scenario Platform",
            body: "Full application with automated scenario modeling across dynamic strategies, assumptions, and timelines",
          },
          {
            title: "Servicing Date Down Automation",
            body: "Built AI workflow that retrieves emails, processes documents, stores data points, and sends a response back to sender, saving the business a FT hire",
          },
          {
            title: "Daily Metric Store",
            body: "Built a centralized metric layer and automated data pipeline, storing historical KPI snapshots for downstream reporting and analysis",
          },
          {
            title: "Lead Gen Engine",
            body: "Built an automated pipeline that aggregates lead data, enriches eligibility, and scores relevance using embeddings + LLM classification",
          },
        ],
      },
      { kind: "section", title: "Entrepreneurship" },
      {
        kind: "timeline",
        tag: "Entrepreneurship #1",
        title: "Everything I am learning",
        rows: [
          { label: "Closed mouths don't get fed", text: "You have to network and __ask__ for things" },
          { label: "Skills", text: "Sales, Negotiation, Branding, Taxes" },
          { label: "Embracing the unknown", text: "This could all end next month but I trust I will keep figuring it out" },
          {
            label: "Build confidence with Evidence",
            text: "Evidence is the best source of confidence because it is grounded in truth",
          },
        ],
      },
      {
        kind: "timeline",
        tag: "Entrepreneurship #2",
        title: "Why I love Entrepreneurship",
        rows: [
          { label: "There is pressure", text: "and I love it. I can see the growth. Pressure leads to growth." },
          { label: "I feel aligned", text: "Working 9-5, I felt trapped. Now I have the most energy and passion I have ever had" },
          { label: "Control of Work", text: "My schedule, my environment, my rules" },
        ],
      },
      {
        kind: "timeline",
        tag: "Entrepreneurship #3",
        title: "Where I want to go next",
        rows: [
          { label: "Keep this business running", text: "Keep this going strong while continuing to raise prices & reduce my hours" },
          {
            label: "Sort through ideas",
            text: "Have several ideas, still figuring out which one is worth pursuing and which one I feel most aligned to",
          },
          { label: "Begin building an actual company", text: "Mentor & I will form partnership and sprint together" },
        ],
      },
      { kind: "section", title: "Advice" },
      {
        kind: "statement",
        tag: "Advice #1",
        heading: "Prioritize your health",
        text: "Physical & mental health unlock the ability to work longer, focus better, feel confident in your own skin, and deal with career stress better. Being healthy will never go out of style",
      },
      {
        kind: "compare",
        tag: "Advice #1",
        photos: [
          { src: "/drez-grad.jpg", label: "May '23", alt: "Drezdan at his graduation" },
          { src: "/drez-title.jpg", label: "Now", alt: "Drezdan today" },
        ],
        callout: {
          bullets: ["- 54 lbs", "Better mental health", "Better focus", "Better sleep", "More confidence", "More creativity"],
        },
      },
      {
        kind: "statement",
        tag: "Advice #2",
        heading: "Do not give up",
        text: "There are periods of your life where you work really hard and nothing seems to happen. __Simply do not give up.__ Stay at it and something even greater than you set out for will happen",
      },
      {
        kind: "timeline",
        tag: "Advice #2",
        rows: [
          { label: "College", text: "Worked 20-30 hour weeks at internship on top of classes; 50+ hour weeks on breaks" },
          {
            label: "Years 1-3 post college",
            text: "Independent learning, 2 (failed) masters programs, worked more than 40 hours at 9-5 to learn more, took on more work outside 9-5 in form of 1099 client",
          },
          { label: "Last 8 months (Current)", text: "Booking 65+ hour weeks, feel fully aligned, and everything took off to far greater heights than I ever imagined" },
          { label: "Future", text: "I fully expect to get punched in the face and \"fail\"; will trust my process, never quit, and continue to learn and improve" },
        ],
        brackets: [
          { from: 0, to: 1, label: "felt hard; little to no reward but constantly learned" },
          { from: 2, to: 2, label: "Better than I ever planned" },
        ],
      },
      {
        kind: "statement",
        tag: "Advice #3",
        heading: "Become comfortable with \"failing\"",
        text: "Learning from failure turns failure into success. When you try more, you will fail more, and that is okay. Try new things, accept you might suck at them, and then learn how to get better.",
      },
      {
        kind: "crossed",
        tag: "Advice #3",
        title: "Here are my failures",
        items: [
          "Tried working in NFL football",
          "Posted NFL R graphs on my twitter to build a following",
          "Started Etsy shop",
          "Tried running",
          "Went to networking events and did not speak to anyone",
          "Applied for promotion at 9-5",
          "Failed to negotiate a higher raise",
          "Started as a Finance major",
          "Have been rejected on over 500 cold emails",
          "Mis-priced Hubspot project",
          "Mis-timed client relationship",
        ],
        footnote: "...along with countless others",
      },
      {
        kind: "pairs",
        tag: "Advice #3",
        title: "What I learned",
        rows: [
          {
            lead: "Dropped out of 2 Masters programs",
            result: "I realized I learn better and feel more aligned by growing through work & taking on more work/clients",
          },
          {
            lead: "Neglected my health in college to focus on school & work",
            result: "I became so unhealthy that I spent time after college learning about health; now I am the healthiest I have ever been even though I work more than ever",
          },
          {
            lead: "Cold messaged dozens of people on LinkedIn in summer of '25, no one responded",
            result: "2 of those people ended up agreeing to contracts with me in summer of '26 once I had proven myself more",
          },
        ],
      },
      {
        kind: "statement",
        tag: "Advice #4",
        heading: "Life is a game",
        text: "The sooner you learn to treat life like a game, the more fun it becomes",
      },
      {
        kind: "flow",
        tag: "Advice #4",
        blocks: [
          {
            t: "lead",
            text: "Over the last year, I have treated life like this is MY game that I get to play every day. This made life infinitely more fun:",
          },
          { t: "chips", items: ["Build a business", "Learn new things", "Workout and get healthier", "Seek out a mentor", "Invest in yourself", "Save & Invest money"] },
          { t: "accent", text: "You get to level up your character every day! Embrace it! Get excited about it!" },
        ],
      },
      { kind: "end", title: "Thank you", links: [{ label: "drezdandale.com", href: "https://www.drezdandale.com" }, { label: "LinkedIn", href: "https://www.linkedin.com/in/drezdan-dale/" }], qr: { src: "/linkedin-qr.svg", caption: "Scan to connect on LinkedIn" } },
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
