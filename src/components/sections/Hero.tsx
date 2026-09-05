"use client";

import * as React from "react";
import { profile, orgs } from "@/data/profile";
import { ArrowUpRight, GlobeIcon, PinIcon, TerminalIcon } from "@/components/icons/BrandIcons";
import { Magnetic } from "@/components/effects/Magnetic";
import { NairobiClock } from "@/components/effects/NairobiClock";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

// ============================================================
// HERO — kinetic editorial headline, ambient meta panel
// Criticiser anti-slop: no fade-up cascade that screams
// "AI template". Use a real stagger that reveals words at
// editorial pace, with one italic accent in lestra red.
// ============================================================

const WORDS = [
  { text: "Writes", accent: false },
  { text: "software", accent: true },
  { text: "that", accent: false },
  { text: "hides", accent: false },
  { text: "root,", accent: true },
  { text: "moves", accent: false },
  { text: "money,", accent: true },
  { text: "and", accent: false },
  { text: "keeps", accent: false },
  { text: "humans", accent: true },
  { text: "alive.", accent: false },
];

export function Hero() {
  // Pointer parallax on the Memphis shapes — depth-graded drift on springs.
  // Fine pointers only; values stay 0 otherwise. Springs keep it interruptible.
  const reduce = useReducedMotion();
  const [fine, setFine] = React.useState(false);
  React.useEffect(() => {
    setFine(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 16 });
  const sy = useSpring(my, { stiffness: 55, damping: 16 });
  const s1x = useTransform(sx, (v) => v * 22);
  const s1y = useTransform(sy, (v) => v * 16);
  const s2x = useTransform(sx, (v) => v * -14);
  const s2y = useTransform(sy, (v) => v * 12);
  const s3x = useTransform(sx, (v) => v * 30);
  const s3y = useTransform(sy, (v) => v * -20);

  return (
    <section
      id="top"
      className="relative pt-20 md:pt-24 pb-12 md:pb-16 border-t-0"
      style={{ borderTop: 0 }}
      onMouseMove={(e) => {
        if (reduce || !fine) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
    >
      {/* Memphis signature shapes — the one bold flourish on the page */}
      <motion.svg
        aria-hidden="true"
        className="hidden md:block absolute right-[6%] top-[8%] pointer-events-none"
        width="120" height="120" viewBox="0 0 120 120"
        style={{ x: s1x, y: s1y }}
      >
        <path
          d="M4 60C22 30 38 90 56 60S90 30 108 60"
          stroke="var(--lestra)" strokeWidth="6" strokeLinecap="round" fill="none"
        />
      </motion.svg>
      <motion.svg
        aria-hidden="true"
        className="hidden md:block absolute right-[2%] top-[26%] pointer-events-none"
        width="54" height="54" viewBox="0 0 54 54"
        style={{ x: s2x, y: s2y }}
      >
        <circle cx="27" cy="27" r="21" fill="none" stroke="var(--cyan)" strokeWidth="5" strokeDasharray="7 8" />
      </motion.svg>
      <motion.span
        aria-hidden="true"
        className="hidden md:block absolute right-[16%] top-[4%] pointer-events-none"
        style={{ x: s3x, y: s3y }}
      >
        <span
          aria-hidden="true"
          className="block w-0 h-0"
          style={{
            borderLeft: "16px solid transparent",
            borderRight: "16px solid transparent",
            borderBottom: "26px solid var(--yellow)",
            transform: "rotate(18deg)",
          }}
        />
      </motion.span>

      <div className="max-w-[1080px] mx-auto px-6 md:px-8">
        {/* Eyebrow */}
        <motion.p
          className="eyebrow mb-10"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          01 / Identity · Lestramk
        </motion.p>

        <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:gap-12 items-start">
          <div>

        {/* Headline */}
        <h1 className="font-display font-light leading-[0.94] tracking-[-0.025em] text-[clamp(2.6rem,7vw,5.5rem)] mb-8">
          {WORDS.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.08,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className={
                word.accent
                  ? "italic text-[var(--lestra)] mr-[0.25em]"
                  : "text-[var(--ink)] mr-[0.25em]"
              }
              style={{ display: "inline-block" }}
            >
              {word.text}
            </motion.span>
          ))}
        </h1>

        {/* Lede */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="font-sans text-[clamp(1.05rem,1.6vw,1.4rem)] leading-[1.55] text-[var(--ink-2)] max-w-[38rem] mb-8"
        >
          I&apos;m <span className="text-[var(--ink)]">Lee</span>. Founder of{" "}
          <a
            href={profile.orgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--lestra)] border-b border-[var(--lestra)] hover:bg-[var(--lestra-soft)] transition-colors"
          >
            Lestramk
          </a>{" "}
          and owner of{" "}
          <span className="text-[var(--ink)] border-b border-dashed border-[var(--ink-3)]" title="Private security — no public site. Covers aamt.lestramk.org.">
            Cronas
          </span>
          , its private security arm. Self-taught engineer building operating
          systems, cyber-tech AI, and Android root-hiding modules. BSc
          Nursing, pursuing anaesthesia. Two companies, one clinic shift —
          all steady.
        </motion.p>

        {/* CTAs — one per intent: work vs recent */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="flex flex-wrap gap-4 mb-10"
        >
          <Magnetic>
            <a href="#work" className="btn-memphis">
              See the work
              <ArrowUpRight size={14} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#recent" className="btn-ghost">
              What landed lately
            </a>
          </Magnetic>
        </motion.div>
        </div>

        {/* Vitals panel — the same meta facts as instrumentation */}
        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="border border-[var(--rule)] bg-[var(--surface)]"
          aria-label="Vitals"
        >
          <div className="flex items-center gap-2.5 px-4 py-3 border-b border-[var(--rule)]">
            <span className="relative inline-flex">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--pulse)" }}
              />
              <span
                className="absolute inset-0 rounded-full animate-ping"
                style={{
                  background: "var(--pulse)",
                  opacity: 0.4,
                  animationDuration: "2.4s",
                }}
              />
            </span>
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--pulse)]">
              vitals // live
            </span>
          </div>
          <svg
            aria-hidden="true"
            className="block w-full h-12 border-b border-[var(--rule)]"
            viewBox="0 0 300 48"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              className="ecg-path"
              d="M0 24 H70 L80 24 L86 8 L94 40 L100 14 L104 24 H180 L190 24 L196 8 L204 40 L210 14 L214 24 H300"
              stroke="var(--pulse)"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
          <dl className="mono text-[11px] uppercase tracking-[0.14em]">
            {[
              { k: "uid", v: profile.uid },
              { k: "since", v: `${profile.since} · shipping` },
              { k: "orgs", v: orgs.map((o) => o.name).join(" · ") },
              { k: "study", v: "BSN · anaesthesia" },
            ].map((row) => (
              <div
                key={row.k}
                className="flex flex-col gap-1 px-4 py-3 border-b border-[var(--rule)] last:border-b-0"
              >
                <dt className="text-[var(--pulse)] text-[9px]">{row.k}</dt>
                <dd className="text-[var(--ink)] normal-case tracking-normal text-xs">
                  {row.v}
                </dd>
              </div>
            ))}
            <div className="flex flex-col gap-1 px-4 py-3">
              <dt className="text-[var(--pulse)] text-[9px]">local</dt>
              <dd>
                <NairobiClock className="text-[var(--ink)] normal-case tracking-normal text-xs" />
              </dd>
            </div>
          </dl>
        </motion.aside>
        </div>

        {/* Status row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-3)]"
        >
          <span className="flex items-center gap-2">
            <PinIcon size={12} />
            {profile.location}
          </span>
          <span className="flex items-center gap-2">
            <TerminalIcon size={12} />
            self-taught since 2020
          </span>
          <a
            href={profile.orgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--ink-2)] hover:text-[var(--lestra)] transition-colors group"
          >
            <GlobeIcon size={12} />
            lestramk.org
            <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
