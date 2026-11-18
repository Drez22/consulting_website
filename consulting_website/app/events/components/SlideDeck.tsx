"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Slide } from "../data";
import SlideView from "./SlideView";

type Props = {
  slides: Slide[];
  title: string;
  // "embedded": inline on the event page. "full": the dedicated /slides page.
  mode?: "embedded" | "full";
  fullHref?: string; // embedded: link to the full-screen deck
  backHref?: string; // full: link back to the event page
};

const btn =
  "inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-3 rounded-lg border border-slate-700 text-sm font-medium text-slate-200 hover:border-slate-400 hover:text-white transition-colors disabled:opacity-30 disabled:hover:border-slate-700 disabled:hover:text-slate-200 disabled:cursor-not-allowed";

export default function SlideDeck({ slides, title, mode = "embedded", fullHref, backHref }: Props) {
  const full = mode === "full";
  const [index, setIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const hashSynced = useRef(false); // don't overwrite the URL hash before it has been read
  const last = slides.length - 1;

  const go = useCallback((n: number) => setIndex(Math.min(Math.max(n, 0), last)), [last]);

  // Full mode: start from the #N in the URL so a specific slide can be shared.
  useEffect(() => {
    if (!full) return;
    const onHash = () => {
      const m = parseInt(window.location.hash.replace("#", ""), 10);
      if (!Number.isNaN(m)) go(m - 1);
      hashSynced.current = true;
    };
    const frame = requestAnimationFrame(onHash); // initial slide from the URL, after hydration
    window.addEventListener("hashchange", onHash);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", onHash);
    };
  }, [full, go]);

  useEffect(() => {
    if (full && hashSynced.current) window.history.replaceState(null, "", `#${index + 1}`);
  }, [full, index]);

  useEffect(() => {
    const onChange = () => setIsFullscreen(document.fullscreenElement === rootRef.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen();
    else rootRef.current?.requestFullscreen?.();
  }, []);

  const onKey = useCallback(
    (e: KeyboardEvent | React.KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case " ":
          e.preventDefault();
          setIndex((i) => Math.min(i + 1, last));
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          setIndex((i) => Math.max(i - 1, 0));
          break;
        case "Home":
          e.preventDefault();
          setIndex(0);
          break;
        case "End":
          e.preventDefault();
          setIndex(last);
          break;
        case "f":
        case "F":
          if (full) toggleFullscreen();
          break;
      }
    },
    [last, full, toggleFullscreen]
  );

  // Full mode listens on the window; embedded mode only while focused.
  useEffect(() => {
    if (!full) return;
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [full, onKey]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") return;
    touch.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const start = touch.current;
    touch.current = null;
    if (!start) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) setIndex((i) => (dx < 0 ? Math.min(i + 1, last) : Math.max(i - 1, 0)));
  };

  // Full mode: size the stage to the viewport height so a slide never overflows.
  const stageStyle = full
    ? ({ width: "min(100%, calc((100dvh - 9rem) * 1.7778))" } as React.CSSProperties)
    : undefined;

  return (
    <div
      ref={rootRef}
      tabIndex={full ? undefined : 0}
      onKeyDown={full ? undefined : onKey}
      aria-roledescription="slide deck"
      aria-label={title}
      className={`deck-root flex flex-col ${full ? "min-h-dvh justify-center bg-slate-950 px-4 py-4" : "outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded-2xl"}`}
    >
      <div
        className="deck-stage @container relative mx-auto w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-white aspect-[4/5] sm:aspect-video select-none touch-pan-y"
        style={stageStyle}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            aria-hidden={i !== index}
            className={`deck-slide absolute inset-0 ${i === index ? "" : "hidden"}`}
          >
            <SlideView slide={slide} />
          </div>
        ))}
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-slate-800">
          <div
            className="h-full [background-color:#1f8a65] transition-[width] duration-300"
            style={{ width: `${((index + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>

      <div className={`deck-controls mx-auto mt-4 flex w-full flex-wrap items-center justify-between gap-3 ${full ? "max-w-5xl" : ""}`}>
        <div className="flex items-center gap-2">
          <button type="button" className={btn} onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous slide">
            &larr;
          </button>
          <span className={`px-2 text-sm tabular-nums ${full ? "text-slate-400" : "[color:#807d72]"}`} aria-live="polite">
            {index + 1} / {slides.length}
          </span>
          <button type="button" className={btn} onClick={() => go(index + 1)} disabled={index === last} aria-label="Next slide">
            &rarr;
          </button>
        </div>
        <div className="flex items-center gap-2">
          {full ? (
            <>
              {backHref && (
                <Link href={backHref} className={btn}>
                  Back to event
                </Link>
              )}
              <button type="button" className={btn} onClick={toggleFullscreen} aria-pressed={isFullscreen}>
                {isFullscreen ? "Exit full screen" : "Full screen"}
              </button>
            </>
          ) : (
            fullHref && (
              <Link
                href={fullHref}
                className="inline-flex items-center justify-center min-h-[44px] px-4 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-700 transition-colors"
              >
                Open full screen
              </Link>
            )
          )}
        </div>
      </div>
      {full && (
        <p className="mx-auto mt-3 text-center text-xs text-slate-600">
          Use the arrow keys or swipe to move between slides. Press F for full screen.
        </p>
      )}
    </div>
  );
}
