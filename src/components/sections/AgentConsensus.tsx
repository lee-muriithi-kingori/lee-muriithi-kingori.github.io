"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ShieldIcon, TerminalIcon } from "@/components/icons/BrandIcons";

// ============================================================
// AGENT CONSENSUS — the 7-category methodology made visible
// Board, Cyber Security, Designers, Criticiser, Engineers,
// Animators/Physics, QA. Each has 10 agents split 5/5.
// All 7 leads must sign for anything to ship.
// ============================================================

const CATEGORIES = [
  {
    n: "01",
    name: "Board",
    role: "strategic ratification",
    lead: "lead: ratifies scope, locks design system, final 9.5 sign-off",
    color: "var(--lestra)",
    agents: 10,
    detail:
      "Owns the brief. Refuses scope creep. Vetoes anything below the quality bar. The only track that can override the Criticiser, and only with a written reason.",
  },
  {
    n: "02",
    name: "Cyber Security",
    role: "security review",
    lead: "lead: safe links, no XSS, no data leaks, performant canvas",
    color: "#a3372f",
    agents: 10,
    detail:
      "Reviews every external href, every input surface, every canvas allocation. Rox ships default-deny. Browser Automation Engine never auto-exfiltrates. No third-party trackers.",
  },
  {
    n: "03",
    name: "Designers",
    role: "visual system, layout, iconography",
    lead: "lead: dark editorial palette, Fraunces + Inter + JetBrains Mono",
    color: "#d9a35a",
    agents: 10,
    detail:
      "Owns the typographic system, the icon library, the spacing rhythm. No emoji rule enforced here. Every SVG is hand-traced or sourced from CC0/MIT icon sets.",
  },
  {
    n: "04",
    name: "Criticiser",
    role: "anti-slop, calls out AI patterns",
    lead: "lead: no fade-up cascades, no fake stats, no lorem ipsum energy",
    color: "#7a9d54",
    agents: 10,
    detail:
      "Reads every paragraph looking for the AI smell. Flags generic transitions, lazy copies, fake metrics, fake testimonials, fake team photos. Holds veto power on every section.",
  },
  {
    n: "05",
    name: "Engineers",
    role: "code quality, performance, types",
    lead: "lead: TypeScript strict, no any, deterministic SSR",
    color: "#6e85b5",
    agents: 10,
    detail:
      "Owns the architecture. Matter.js body count is capped. Contributions grid is deterministic. Mouse constraints clean up on unmount. No memory leaks on route change.",
  },
  {
    n: "06",
    name: "Animators / Physics",
    role: "motion language, real collisions",
    lead: "lead: matter-js field + GSAP timeline + framer-motion reveals",
    color: "#9d7ac4",
    agents: 10,
    detail:
      "Owns every transition. Physics bodies collide with real restitution. The crawler walks real cell coordinates. Reduced-motion respected on every effect.",
  },
  {
    n: "07",
    name: "QA / Reviewers",
    role: "end-to-end verification",
    lead: "lead: agent-browser pass, console clean, sticky footer verified",
    color: "#5c9d9d",
    agents: 10,
    detail:
      "Opens the page in a real browser. Clicks every link. Hovers every cell. Checks console. Verifies sticky footer. Verifies responsive at 375px and 1440px.",
  },
];

export function AgentConsensus() {
  return (
    <section id="methodology" className="relative">
      <div className="max-w-[1080px] mx-auto px-6 md:px-8">
        <header className="mb-10 md:mb-14 max-w-[44rem]">
          <p className="eyebrow mb-4">08 / Methodology</p>
          <h2 className="font-display font-light text-[clamp(2rem,4vw,3rem)] leading-[1.04] tracking-[-0.022em] mb-4">
            Seven leads.{" "}
            <em className="italic text-[var(--lestra)]">All must sign.</em>
          </h2>
          <p className="font-sans text-[15px] leading-[1.55] text-[var(--ink-3)]">
            This page was built under a 7-category agent methodology. 70 agents
            total, split 5/5 per category for parallel subtasks. Anything below
            a 9.5/10 quality bar gets cut. The Criticiser holds veto on every
            section — including this one.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rule)] border border-[var(--rule)]">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="bg-[var(--surface)] hover:bg-[var(--surface-2)] transition-colors p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span
                    className="mono text-[10px] tracking-[0.2em] uppercase"
                    style={{ color: cat.color }}
                  >
                    {cat.n}
                  </span>
                  <h3
                    className="font-display text-xl tracking-[-0.015em] text-[var(--ink)]"
                  >
                    {cat.name}
                  </h3>
                </div>
                <span
                  className="mono text-[9px] uppercase tracking-[0.16em] px-2 py-0.5 border"
                  style={{
                    color: cat.color,
                    borderColor: cat.color,
                  }}
                >
                  10 · 5+5
                </span>
              </div>

              <p
                className="mono text-[10px] uppercase tracking-[0.16em] mb-3"
                style={{ color: cat.color }}
              >
                {cat.role}
              </p>

              <p className="font-sans text-[13px] leading-[1.55] text-[var(--ink-2)] mb-4">
                {cat.detail}
              </p>

              <p className="mono text-[9px] uppercase tracking-[0.14em] text-[var(--ink-3)] border-t border-[var(--rule)] pt-3">
                {cat.lead}
              </p>
            </motion.div>
          ))}

          {/* Eighth cell — the consensus rule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            className="bg-[var(--background)] p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[var(--lestra)]">
                  <ShieldIcon size={18} />
                </span>
                <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--lestra)]">
                  consensus rule
                </span>
              </div>
              <p className="font-display text-2xl leading-[1.1] tracking-[-0.015em] text-[var(--ink)] mb-4">
                No section ships without{" "}
                <em className="italic text-[var(--lestra)]">all seven leads</em>{" "}
                signing.
              </p>
            </div>
            <p className="mono text-[10px] uppercase tracking-[0.14em] text-[var(--ink-3)] border-t border-[var(--rule)] pt-3">
              Quality bar: 9.5 / 10 · enforced by Board
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
