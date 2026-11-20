import { Fragment } from "react";
import type { Slide } from "../data";

// Renders one slide. All type is sized in container-query units (cqw) so the
// same slide looks right inline and full screen.
const accent = "[color:#a9d3ac]";

// Inline emphasis: wrap a word in __double underscores__ to underline it.
function rich(text: string) {
  return text.split(/__(.+?)__/g).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="underline underline-offset-[0.5cqw] decoration-[0.2cqw]">
        {part}
      </span>
    ) : (
      part
    )
  );
}

// Small label in the slide's top-left corner (the parent must be `relative`).
function Tag({ text, top = "3.5cqw" }: { text: string; top?: string }) {
  return (
    <p
      className="absolute left-[4cqw] font-bold tracking-[0.14em] uppercase text-[clamp(10px,1.6cqw,22px)] [color:#94a3b8]"
      style={{ top }}
    >
      {text}
    </p>
  );
}

export default function SlideView({ slide }: { slide: Slide }) {
  const shell = "h-full w-full flex flex-col justify-center px-[7cqw] py-[6cqw]";

  switch (slide.kind) {
    case "title":
      return (
        <div className={`${shell} ${slide.photo ? "!flex-col-reverse items-start justify-center gap-[4cqw] @lg:!flex-row @lg:items-center @lg:justify-between" : ""}`}>
          <div>
            <h2 className={`font-bold tracking-tight leading-[1.05] ${slide.photo ? "text-[clamp(26px,6cqw,84px)]" : "text-[clamp(28px,7cqw,96px)]"}`}>{slide.title}</h2>
            {slide.subtitle && (
              <p className={`mt-[2.5cqw] text-[clamp(16px,3cqw,40px)] leading-snug ${accent}`}>{slide.subtitle}</p>
            )}
            {slide.meta && (
              <p className="mt-[5cqw] text-[clamp(12px,1.9cqw,26px)] tracking-[0.12em] uppercase text-slate-400">{slide.meta}</p>
            )}
          </div>
          {slide.photo && (
            <div className="relative aspect-[4/5] w-[34cqw] flex-shrink-0 overflow-hidden rounded-[1.2cqw] border border-slate-700 @lg:w-auto @lg:h-[36cqw]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slide.photo.src} alt={slide.photo.alt ?? ""} className="absolute inset-0 h-full w-full object-cover" />
            </div>
          )}
        </div>
      );

    case "section":
      return (
        <div className={shell}>
          <span className="mb-[2cqw] block h-[0.5cqw] min-h-[3px] w-[8cqw] [background-color:#1f8a65]" />
          <h2 className="font-bold tracking-tight leading-[1.1] text-[clamp(26px,6cqw,80px)]">{slide.title}</h2>
          {slide.subtitle && (
            <p className="mt-[2cqw] text-[clamp(15px,2.6cqw,36px)] leading-snug text-slate-400">{slide.subtitle}</p>
          )}
        </div>
      );

    case "bullets":
      return (
        <div className={`${shell} relative`}>
          {slide.tag && (
            <p className="absolute left-[4cqw] top-[3.5cqw] font-bold tracking-[0.14em] uppercase text-[clamp(10px,1.6cqw,22px)] [color:#94a3b8]">{slide.tag}</p>
          )}
          <h2 className="font-bold tracking-tight leading-tight text-[clamp(22px,4.6cqw,64px)] mb-[3.5cqw]">{slide.title}</h2>
          <ul className="flex flex-col gap-[2cqw]">
            {slide.bullets.map((b, i) => (
              <li key={b} className="flex items-start gap-[1.8cqw] text-[clamp(15px,2.8cqw,38px)] leading-snug text-slate-200">
                {slide.numbered ? (
                  <span className={`min-w-[1.6em] flex-shrink-0 font-bold tabular-nums ${accent}`}>{i + 1}.</span>
                ) : (
                  <span className="mt-[1.3cqw] h-[0.9cqw] min-h-[6px] w-[0.9cqw] min-w-[6px] flex-shrink-0 rounded-full [background-color:#a9d3ac]" />
                )}
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "timeline": {
      return (
        <div className={`${shell} relative`}>
          {slide.tag && (
            <p className="absolute left-[4cqw] top-[2.4cqw] font-bold tracking-[0.14em] uppercase text-[clamp(10px,1.6cqw,22px)] [color:#94a3b8]">{slide.tag}</p>
          )}
          {slide.title && (
            <h2 className="font-bold tracking-tight leading-tight text-[clamp(20px,4cqw,56px)] mb-[2.5cqw]">{slide.title}</h2>
          )}
          <div className="grid grid-cols-[1fr_auto_auto] gap-x-[1.5cqw] gap-y-[2cqw]">
            {slide.rows.map((r, i) => (
              <div key={r.label} className="col-start-1" style={{ gridRow: i + 1 }}>
                <p className={`font-bold tracking-[0.14em] uppercase text-[clamp(10px,1.5cqw,20px)] ${accent}`}>{r.label}</p>
                <p className="mt-[0.4cqw] text-[clamp(12px,2.1cqw,28px)] leading-snug [color:#e2e8f0]">{rich(r.text)}</p>
              </div>
            ))}
            {slide.brackets?.map((b) => (
              <Fragment key={b.label}>
                <div
                  aria-hidden="true"
                  className="col-start-2 w-[2.2cqw] rounded-r-[0.6cqw] border-y-[0.3cqw] border-r-[0.3cqw] [border-color:#a9d3ac]"
                  style={{ gridRow: `${b.from + 1} / ${b.to + 2}` }}
                />
                <p
                  className="col-start-3 self-center max-w-[14cqw] font-semibold italic leading-snug text-[clamp(11px,2cqw,26px)] [color:#a9d3ac]"
                  style={{ gridRow: `${b.from + 1} / ${b.to + 2}` }}
                >
                  {b.label}
                </p>
              </Fragment>
            ))}
          </div>
        </div>
      );
    }

    case "career": {
      const date = `font-bold tracking-[0.14em] uppercase text-[clamp(10px,1.5cqw,20px)] ${accent}`;
      const role = "font-semibold leading-snug text-[clamp(12px,2.1cqw,28px)]";
      const org = "leading-snug text-[clamp(11px,1.8cqw,24px)] [color:#94a3b8]";
      return (
        <div className={`${shell} relative`}>
          {slide.tag && <Tag text={slide.tag} />}
          {slide.title && (
            <h2 className="font-bold tracking-tight leading-tight text-[clamp(20px,4cqw,56px)] mb-[4cqw]">{slide.title}</h2>
          )}

          {/* Narrow stage (phones): vertical list down a rail */}
          <ul className="@lg:hidden relative ml-[4px] flex flex-col gap-[3.5cqw] border-l border-slate-700">
            {slide.steps.map((s) => (
              <li key={s.date} className="relative pl-[5cqw]">
                <span className="absolute -left-[5px] top-[3px] h-[9px] w-[9px] rounded-full [background-color:#a9d3ac]" />
                <p className={date}>{s.date}</p>
                <p className={role}>{s.role}</p>
                {s.org && <p className={org}>{s.org}</p>}
              </li>
            ))}
          </ul>

          {/* Wide stage: horizontal line with a dot per step */}
          <ol className="hidden @lg:grid grid-cols-4 gap-x-[2cqw]">
            {slide.steps.map((s, i) => (
              <li key={s.date}>
                <p className={date}>{s.date}</p>
                <div className="relative my-[1.4cqw] h-[1.6cqw]">
                  {i < slide.steps.length - 1 && (
                    <span className="absolute left-0 -right-[2cqw] top-1/2 h-px bg-slate-700" />
                  )}
                  <span className="absolute left-0 top-1/2 h-[1.5cqw] w-[1.5cqw] -translate-y-1/2 rounded-full [background-color:#a9d3ac]" />
                </div>
                <p className={role}>{s.role}</p>
                {s.org && <p className={org}>{s.org}</p>}
              </li>
            ))}
          </ol>
        </div>
      );
    }

    case "progression": {
      const c = slide.card;
      return (
        <div className={`${shell} relative`}>
          {slide.tag && <Tag text={slide.tag} top="2.2cqw" />}
          {slide.title && (
            <h2 className="font-bold tracking-tight leading-tight text-[clamp(20px,4cqw,56px)] mb-[1.6cqw]">{slide.title}</h2>
          )}
          {/* Side by side on a wide stage, stacked on a narrow one */}
          <div className={`grid gap-[2.5cqw] ${c ? "@lg:grid-cols-[1.15fr_1fr] @lg:items-start @lg:gap-x-[4.5cqw]" : ""}`}>
            {/* Path: intern -> full time */}
            <ol className="relative ml-[5px] flex flex-col gap-[0.8cqw] border-l border-slate-600">
              {slide.steps.map((s) => (
                <li key={s.text} className="relative pl-[3cqw]">
                  <span
                    className={`absolute rounded-full ${
                      s.milestone
                        ? "-left-[5.5px] top-[2px] h-[10px] w-[10px] [background-color:#a9d3ac]"
                        : "-left-[3.5px] top-[5px] h-[6px] w-[6px] bg-slate-500"
                    }`}
                  />
                  {s.label && (
                    <p className={`font-bold tracking-[0.14em] uppercase text-[clamp(10px,1.5cqw,20px)] ${accent}`}>{s.label}</p>
                  )}
                  <p
                    className={`leading-snug ${
                      s.milestone
                        ? "font-semibold text-[clamp(12px,2.1cqw,28px)]"
                        : "text-[clamp(10px,1.7cqw,23px)] [color:#cbd5e1]"
                    }`}
                  >
                    {s.text}
                  </p>
                  {s.bullets && (
                    <ul className="mt-[0.6cqw] flex flex-col gap-[0.5cqw]">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-[1.2cqw] leading-snug text-[clamp(10px,1.65cqw,22px)] [color:#cbd5e1]">
                          <span className="mt-[0.75cqw] h-[0.6cqw] min-h-[4px] w-[0.6cqw] min-w-[4px] flex-shrink-0 rounded-full [background-color:#a9d3ac]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>

            {/* Best project: colored card (same green as the site's outcome cards) */}
            {c && (
            <div className="rounded-[1.4cqw] px-[2.4cqw] py-[2.2cqw] [background:linear-gradient(to_bottom,#a9d3ac,#9fc9a2)] [color:#26251e]">
              <p className="mb-[1cqw] font-bold tracking-[0.14em] uppercase text-[clamp(10px,1.5cqw,20px)] [color:#1f6e52]">{c.label}</p>
              <p className="font-bold leading-snug text-[clamp(14px,3cqw,40px)]">{c.headline}</p>
              {c.sub && (
                <p className="mt-[0.6cqw] font-semibold text-[clamp(11px,1.9cqw,26px)] [color:#1f6e52]">{c.sub}</p>
              )}
              {c.bullets && (
                <ul className="mt-[1.6cqw] flex flex-col gap-[0.9cqw]">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-[1.2cqw] leading-snug text-[clamp(11px,1.9cqw,26px)] [color:#26302a]">
                      <span className="mt-[0.7cqw] h-[0.7cqw] min-h-[5px] w-[0.7cqw] min-w-[5px] flex-shrink-0 rounded-full [background-color:#1f6e52]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            )}
          </div>
        </div>
      );
    }

    case "cards": {
      // Tailwind needs full class names, so map the column count explicitly.
      // Cards are laid out as centered, wrapping rows so an odd last row stays centered.
      const width = {
        2: "@lg:w-[calc(50%-0.9cqw)]",
        3: "@lg:w-[calc((100%-3.6cqw)/3)]",
        4: "@lg:w-[calc((100%-5.4cqw)/4)]",
      }[slide.columns ?? 2];
      return (
        <div className={`${shell} relative`}>
          {slide.tag && <Tag text={slide.tag} />}
          {slide.title && (
            <h2 className="font-bold tracking-tight leading-tight text-[clamp(20px,4.6cqw,64px)]">{slide.title}</h2>
          )}
          {slide.subtitle && (
            <p className={`mt-[0.8cqw] font-bold tracking-tight leading-tight text-[clamp(16px,3.4cqw,46px)] ${accent}`}>{slide.subtitle}</p>
          )}
          <ul className={`${slide.title ? "mt-[2.5cqw]" : ""} flex flex-wrap justify-center gap-[1.5cqw]`}>
            {slide.cards.map((card) => {
              const detailed = typeof card !== "string";
              const label = detailed ? card.title : card;
              return (
                <li
                  key={label}
                  className={`flex items-center rounded-[1.2cqw] border border-slate-700 border-t-[0.4cqw] bg-slate-900/60 px-[2.2cqw] [border-top-color:#a9d3ac] ${
                    detailed ? "w-full py-[1.1cqw]" : "w-[calc(50%-0.9cqw)] py-[2.6cqw]"
                  } ${width}`}
                >
                  {detailed ? (
                    <div>
                      <p className={`font-bold leading-snug text-[clamp(12px,2.15cqw,30px)] ${accent}`}>{card.title}</p>
                      {card.body && (
                        <p className="mt-[0.4cqw] leading-snug text-[clamp(10px,1.6cqw,22px)] [color:#cbd5e1]">{card.body}</p>
                      )}
                      {card.tags && (
                        <ul className="mt-[1cqw] flex flex-wrap gap-[0.8cqw]">
                          {card.tags.map((t) => (
                            <li
                              key={t}
                              className="rounded-full border px-[1.2cqw] py-[0.3cqw] font-semibold text-[clamp(9px,1.5cqw,20px)] [border-color:#a9d3ac] [color:#cbd5e1]"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <span className="font-semibold leading-snug text-[clamp(12px,2.5cqw,34px)]">{label}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }

    case "flow": {
      const big = slide.large;
      const lead = big ? "text-[clamp(14px,3cqw,42px)]" : "text-[clamp(12px,2.4cqw,32px)]";
      const body = big ? "text-[clamp(12px,2.5cqw,34px)]" : "text-[clamp(11px,2cqw,27px)]";
      return (
        <div className={`${shell} relative`}>
          {slide.tag && (
            <p className="absolute left-[4cqw] top-[3.5cqw] font-bold tracking-[0.14em] uppercase text-[clamp(10px,1.6cqw,22px)] [color:#94a3b8]">{slide.tag}</p>
          )}
          {slide.title && (
            <h2 className={`font-bold tracking-tight leading-tight mb-[3cqw] ${big ? "text-[clamp(18px,4.2cqw,58px)]" : "text-[clamp(18px,3.6cqw,50px)]"}`}>
              {slide.title}
            </h2>
          )}
          <div className="flex flex-col gap-[2.2cqw]">
            {slide.blocks.map((b, i) => {
              switch (b.t) {
                case "lead":
                  return <p key={i} className={`font-semibold leading-snug ${lead}`}>{b.text}</p>;
                case "text":
                  return <p key={i} className={`leading-snug [color:#e2e8f0] ${body}`}>{b.text}</p>;
                case "accent":
                  return <p key={i} className={`font-bold leading-snug ${accent} ${big ? lead : body}`}>{b.text}</p>;
                case "bullets":
                  return (
                    <ul key={i} className="flex flex-col gap-[1.4cqw]">
                      {b.items.map((it) => (
                        <li key={it} className={`flex items-start gap-[1.6cqw] leading-snug [color:#e2e8f0] ${body}`}>
                          <span className="mt-[1cqw] h-[0.8cqw] min-h-[5px] w-[0.8cqw] min-w-[5px] flex-shrink-0 rounded-full [background-color:#a9d3ac]" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  );
                case "chips":
                  return (
                    <ul key={i} className="flex flex-wrap gap-[1.2cqw]">
                      {b.items.map((it) => (
                        <li
                          key={it}
                          className={`rounded-full border px-[1.8cqw] py-[0.7cqw] font-semibold bg-slate-900/60 [border-color:#a9d3ac] ${body}`}
                        >
                          {it}
                        </li>
                      ))}
                    </ul>
                  );
              }
            })}
          </div>
        </div>
      );
    }

    case "compare":
      return (
        <div className={`${shell} relative`}>
          {slide.tag && (
            <p className="absolute left-[4cqw] top-[3.5cqw] font-bold tracking-[0.14em] uppercase text-[clamp(10px,1.6cqw,22px)] [color:#94a3b8]">{slide.tag}</p>
          )}
          {slide.title && (
            <h2 className="font-bold tracking-tight leading-tight text-[clamp(20px,4cqw,56px)] mb-[2.5cqw]">{slide.title}</h2>
          )}
          <div className="flex flex-col items-center gap-[3cqw] @lg:flex-row @lg:justify-start @lg:gap-[4cqw]">
            <div className="flex items-start gap-[2.5cqw]">
              {slide.photos.map((p) => (
                <figure key={p.label} className="flex flex-col items-center gap-[1cqw]">
                  <div className="relative aspect-[4/5] w-[40cqw] overflow-hidden rounded-[1.2cqw] border border-slate-700 bg-slate-900/60 @lg:w-auto @lg:h-[32cqw]">
                    {p.src ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.src} alt={p.alt ?? p.label} className="absolute inset-0 h-full w-full object-cover" />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center border border-dashed border-slate-600 text-center text-[clamp(10px,1.6cqw,20px)] [color:#64748b]">
                        Photo
                      </span>
                    )}
                  </div>
                  <figcaption className={`font-bold tracking-[0.14em] uppercase text-[clamp(10px,1.6cqw,22px)] ${accent}`}>{p.label}</figcaption>
                </figure>
              ))}
            </div>
            {slide.callout && (
              <div className="rounded-[1.4cqw] px-[2.4cqw] py-[2.2cqw] [background:linear-gradient(to_bottom,#a9d3ac,#9fc9a2)] [color:#26251e] @lg:max-w-[28cqw]">
                {slide.callout.label && (
                  <p className="mb-[1cqw] font-bold tracking-[0.14em] uppercase text-[clamp(10px,1.5cqw,20px)] [color:#1f6e52]">{slide.callout.label}</p>
                )}
                <ul className="flex flex-col gap-[0.9cqw]">
                  {slide.callout.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-[1.2cqw] leading-snug text-[clamp(11px,1.9cqw,26px)] [color:#26302a]">
                      <span className="flex-shrink-0 font-bold leading-snug [color:#1f6e52]">{b.startsWith("- ") ? "−" : "+"}</span>
                      <span>{b.startsWith("- ") ? b.slice(2) : b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      );

    case "pairs":
      return (
        <div className={`${shell} relative`}>
          {slide.tag && (
            <p className="absolute left-[4cqw] top-[2.4cqw] font-bold tracking-[0.14em] uppercase text-[clamp(10px,1.6cqw,22px)] [color:#94a3b8]">{slide.tag}</p>
          )}
          {slide.title && (
            <h2 className="font-bold tracking-tight leading-tight text-[clamp(20px,4cqw,56px)] mb-[2.5cqw]">{slide.title}</h2>
          )}
          <ul className="flex flex-col gap-[2.2cqw]">
            {slide.rows.map((r) => (
              <li key={r.lead}>
                <p className="font-semibold leading-snug text-[clamp(12px,2.2cqw,30px)]">{r.lead}</p>
                <p className="mt-[0.5cqw] flex items-start gap-[1cqw] leading-snug text-[clamp(11px,2cqw,27px)] [color:#e2e8f0]">
                  <span aria-hidden="true" className={`flex-shrink-0 font-bold ${accent}`}>&rarr;</span>
                  <span>{r.result}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      );

    case "crossed": {
      const tilt = [-1.5, 1, -0.6, 1.6, -1, 0.8];
      return (
        <div className={`${shell} relative`}>
          {slide.tag && (
            <p className="absolute left-[4cqw] top-[2.4cqw] font-bold tracking-[0.14em] uppercase text-[clamp(10px,1.6cqw,22px)] [color:#94a3b8]">{slide.tag}</p>
          )}
          {slide.title && (
            <h2 className="font-bold tracking-tight leading-tight text-[clamp(20px,4cqw,56px)] mb-[3cqw]">{slide.title}</h2>
          )}
          <ul className="flex flex-wrap gap-x-[1.4cqw] gap-y-[1.5cqw]">
            {slide.items.map((item, i) => (
              <li
                key={item}
                style={{ transform: `rotate(${tilt[i % tilt.length]}deg)` }}
                className="rounded-full border border-slate-700 bg-slate-900/60 px-[1.6cqw] py-[0.7cqw] text-[clamp(10px,1.85cqw,26px)] leading-snug [color:#cbd5e1] line-through [text-decoration-color:#a9d3ac] [text-decoration-thickness:0.3cqw]"
              >
                {item}
              </li>
            ))}
          </ul>
          {slide.footnote && (
            <p className="absolute bottom-[3cqw] right-[7cqw] italic text-[clamp(11px,2cqw,26px)] [color:#94a3b8]">{slide.footnote}</p>
          )}
        </div>
      );
    }

    case "statement":
      return (
        <div className={`${shell} relative items-center text-center`}>
          {slide.tag && (
            <p className="absolute left-[4cqw] top-[3.5cqw] font-bold tracking-[0.14em] uppercase text-[clamp(10px,1.6cqw,22px)] [color:#94a3b8]">{slide.tag}</p>
          )}
          {slide.heading && (
            <h2 className={`mb-[3cqw] font-bold tracking-tight leading-tight text-[clamp(22px,5cqw,68px)] ${accent}`}>{slide.heading}</h2>
          )}
          <p
            className={`max-w-[84%] font-bold tracking-tight leading-[1.2] ${
              slide.text.length > 100 ? "text-[clamp(18px,3.6cqw,50px)]" : "text-[clamp(24px,5.6cqw,76px)] max-w-[80%]"
            }`}
          >
            {rich(slide.text)}
          </p>
          {slide.subtext && (
            <p className={`mt-[3cqw] max-w-[70%] text-[clamp(15px,2.6cqw,36px)] leading-snug ${accent}`}>{slide.subtext}</p>
          )}
        </div>
      );

    case "quote":
      return (
        <div className={shell}>
          <p className="max-w-[88%] font-semibold leading-[1.25] text-[clamp(22px,4.6cqw,64px)]">
            <span className={accent}>&ldquo;</span>
            {slide.text}
            <span className={accent}>&rdquo;</span>
          </p>
          {slide.attribution && (
            <p className="mt-[3cqw] text-[clamp(14px,2.2cqw,30px)] text-slate-400">&mdash; {slide.attribution}</p>
          )}
        </div>
      );

    case "image":
      return (
        <div className={`${shell} gap-[2cqw]`}>
          {slide.title && (
            <h2 className="font-bold tracking-tight leading-tight text-[clamp(20px,4cqw,56px)]">{slide.title}</h2>
          )}
          <div className="relative min-h-0 flex-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slide.src} alt={slide.alt} className="absolute inset-0 h-full w-full object-contain" />
          </div>
          {slide.caption && (
            <p className="text-[clamp(12px,1.9cqw,26px)] text-slate-400">{slide.caption}</p>
          )}
        </div>
      );

    case "end":
      return (
        <div className={`${shell} relative`}>
          {slide.qr && (
            <figure className="absolute right-[7cqw] top-1/2 -translate-y-1/2 flex flex-col items-center gap-[1.2cqw]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slide.qr.src} alt="QR code" className="w-[22cqw] rounded-[1cqw]" />
              {slide.qr.caption && (
                <figcaption className="text-[clamp(10px,1.7cqw,22px)] text-slate-400">{slide.qr.caption}</figcaption>
              )}
            </figure>
          )}
          <h2 className="font-bold tracking-tight leading-[1.05] text-[clamp(28px,7cqw,96px)]">{slide.title}</h2>
          {slide.subtitle && (
            <p className={`mt-[2.5cqw] text-[clamp(16px,3cqw,40px)] leading-snug ${accent}`}>{slide.subtitle}</p>
          )}
          {slide.links && slide.links.length > 0 && (
            <ul className="mt-[4cqw] flex flex-col gap-[1.2cqw]">
              {slide.links.map((l) => (
                <li key={l.href} className="text-[clamp(14px,2.3cqw,32px)]">
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-slate-600 hover:decoration-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
  }
}
