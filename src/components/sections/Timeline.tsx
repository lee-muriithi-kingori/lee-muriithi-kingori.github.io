"use client";

import * as React from "react";
import { timeline, type TimelineRow } from "@/data/profile";
import { motion } from "framer-motion";

// ============================================================
// TIMELINE — recent real commits/tags/rollbacks
// Criticiser anti-slop: real dates, real repo names, real
// actions. No "shipped v2.0 🚀" filler. The rollback row
// is honest — it documents a thing that was deleted.
// ============================================================

const KIND_META: Record<TimelineRow["kind"], { label: string; color: string }> = {
  tag: { label: "tag", color: "var(--lestra)" },
  merge: { label: "merge", color: "#6e85b5" },
  commit: { label: "commit", color: "var(--ink-2)" },
  docs: { label: "docs", color: "var(--amber)" },
  open: { label: "open", color: "#7a9d54" },
  rollback: { label: "rollback", color: "#a3372f" },
};

export function Timeline() {
  return (
    <section id="recent" className="relative">
      <div className="max-w-[1080px] mx-auto px-6 md:px-8">
        <header className="mb-10 md:mb-14 max-w-[42rem]">
          <p className="eyebrow mb-4">06 / Recent</p>
          <h2 className="font-display font-light text-[clamp(2rem,4vw,3rem)] leading-[1.04] tracking-[-0.022em] mb-4">
            What landed, last few weeks.{" "}
            <em className="italic text-[var(--lestra)]">Including the rollback.</em>
          </h2>
          <p className="font-sans text-[15px] leading-[1.55] text-[var(--ink-3)]">
            Hardcoded. Updated when a real commit lands. No autogen crawler —
            the v1 crawler kept failing on fetch, so the page works offline now.
          </p>
        </header>

        <ol className="border-t border-[var(--rule)]">
          {timeline.map((row, i) => {
            const meta = KIND_META[row.kind];
            return (
              <motion.li
                key={`${row.date}-${row.repo}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.04,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="grid grid-cols-[7.5rem_1.5rem_1fr] md:grid-cols-[9rem_1.5rem_1fr] gap-4 md:gap-6 py-5 md:py-6 border-b border-[var(--rule)] items-start"
              >
                <time
                  dateTime={row.date}
                  className="mono text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--ink-3)] pt-1"
                >
                  {row.date}
                </time>
                <span
                  className="w-2 h-2 rounded-full mt-2 justify-self-center"
                  style={{ background: meta.color }}
                  aria-hidden="true"
                />
                <div className="pr-2 md:pr-8">
                  <p className="font-display text-[1.15rem] md:text-[1.25rem] leading-[1.3] tracking-[-0.01em] text-[var(--ink)] mb-1">
                    {row.title}
                  </p>
                  <p
                    className="mono text-[10px] uppercase tracking-[0.16em] mb-2"
                    style={{ color: meta.color }}
                  >
                    {meta.label} · {row.repo}
                  </p>
                  {row.body && (
                    <p className="font-sans text-[14px] leading-[1.55] text-[var(--ink-2)]">
                      {row.body}
                    </p>
                  )}
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
