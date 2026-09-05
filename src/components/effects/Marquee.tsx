"use client";

import { languages } from "@/data/profile";

// Single marquee strip: the language palette drifting between hero and work.
// The one allowed marquee on the page. CSS-driven, pauses on hover,
// killed under prefers-reduced-motion.
export function Marquee() {
  const items = [...languages, ...languages];
  return (
    <div
      aria-hidden="true"
      className="marquee border-y border-[var(--rule)] bg-[var(--surface)] overflow-hidden py-3 select-none"
    >
      <div className="marquee-track">
        {items.map((l, i) => (
          <span
            key={`${l.id}-${i}`}
            className="mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink-2)] flex items-center gap-3 pr-3 whitespace-nowrap"
          >
            <span
              className="inline-block w-2 h-2 rotate-45 shrink-0"
              style={{ background: l.color }}
            />
            {l.label}
          </span>
        ))}
      </div>
    </div>
  );
}
