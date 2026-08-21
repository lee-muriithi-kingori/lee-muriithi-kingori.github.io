"use client";

import * as React from "react";
import { profile, orgs } from "@/data/profile";
import { ArrowUpRight, GlobeIcon, PinIcon, TerminalIcon } from "@/components/icons/BrandIcons";
import { motion } from "framer-motion";

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
  return (
    <section
      id="top"
      className="relative pt-20 md:pt-28 pb-16 md:pb-24 border-t-0"
      style={{ borderTop: 0 }}
    >
      {/* Memphis signature shapes — the one bold flourish on the page */}
      <svg
        aria-hidden="true"
        className="hidden md:block absolute right-[6%] top-[8%] pointer-events-none"
        width="120" height="120" viewBox="0 0 120 120"
      >
        <path
          d="M4 60C22 30 38 90 56 60S90 30 108 60"
          stroke="var(--lestra)" strokeWidth="6" strokeLinecap="round" fill="none"
        />
      </svg>
      <svg
        aria-hidden="true"
        className="hidden md:block absolute right-[2%] top-[26%] pointer-events-none"
        width="54" height="54" viewBox="0 0 54 54"
      >
        <circle cx="27" cy="27" r="21" fill="none" stroke="var(--cyan)" strokeWidth="5" strokeDasharray="7 8" />
      </svg>
      <span
        aria-hidden="true"
        className="hidden md:block absolute right-[16%] top-[4%] w-0 h-0 pointer-events-none"
        style={{
          borderLeft: "16px solid transparent",
          borderRight: "16px solid transparent",
          borderBottom: "26px solid var(--yellow)",
          transform: "rotate(18deg)",
        }}
      />

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

        {/* Headline */}
        <h1 className="font-display font-light leading-[0.94] tracking-[-0.025em] text-[clamp(2.8rem,8.5vw,7rem)] mb-10">
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
          className="font-sans text-[clamp(1.05rem,1.6vw,1.4rem)] leading-[1.55] text-[var(--ink-2)] max-w-[38rem] mb-12"
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

        {/* Meta grid */}
        <motion.dl
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--rule)] border border-[var(--rule)] max-w-[44rem] mono text-[11px] uppercase tracking-[0.14em]"
        >
          {[
            { k: "uid", v: profile.uid },
            { k: "since", v: `${profile.since} · shipping` },
            { k: "orgs", v: orgs.map((o) => o.name).join(" · ") },
            { k: "study", v: "BSN · anaesthesia" },
          ].map((row) => (
            <div
              key={row.k}
              className="bg-[var(--background)] p-3.5 flex flex-col gap-1"
            >
              <dt className="text-[var(--lestra)]">{row.k}</dt>
              <dd className="text-[var(--ink)] normal-case tracking-normal text-xs">
                {row.v}
              </dd>
            </div>
          ))}
        </motion.dl>

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
