import type { Slide } from "../data";

// Renders one slide. All type is sized in container-query units (cqw) so the
// same slide looks right inline and full screen.
const accent = "[color:#a9d3ac]";

export default function SlideView({ slide }: { slide: Slide }) {
  const shell = "h-full w-full flex flex-col justify-center px-[7cqw] py-[6cqw]";

  switch (slide.kind) {
    case "title":
      return (
        <div className={shell}>
          <h2 className="font-bold tracking-tight leading-[1.05] text-[clamp(28px,7cqw,96px)]">{slide.title}</h2>
          {slide.subtitle && (
            <p className={`mt-[2.5cqw] text-[clamp(16px,3cqw,40px)] leading-snug ${accent}`}>{slide.subtitle}</p>
          )}
          {slide.meta && (
            <p className="mt-[5cqw] text-[clamp(12px,1.9cqw,26px)] tracking-[0.12em] uppercase text-slate-400">{slide.meta}</p>
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
        <div className={shell}>
          <h2 className="font-bold tracking-tight leading-tight text-[clamp(22px,4.6cqw,64px)] mb-[3.5cqw]">{slide.title}</h2>
          <ul className="flex flex-col gap-[2cqw]">
            {slide.bullets.map((b) => (
              <li key={b} className="flex items-start gap-[1.8cqw] text-[clamp(15px,2.8cqw,38px)] leading-snug text-slate-200">
                <span className="mt-[1.3cqw] h-[0.9cqw] min-h-[6px] w-[0.9cqw] min-w-[6px] flex-shrink-0 rounded-full [background-color:#a9d3ac]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "statement":
      return (
        <div className={`${shell} items-center text-center`}>
          <p className="max-w-[80%] font-bold tracking-tight leading-[1.15] text-[clamp(24px,5.6cqw,76px)]">{slide.text}</p>
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
        <div className={shell}>
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
