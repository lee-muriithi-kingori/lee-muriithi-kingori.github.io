"use client";

import * as React from "react";
import { profile } from "@/data/profile";
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
          </a>
          . Self-taught engineer building operating systems, cyber-tech AI, and
          Android root-hiding modules. BSc Nursing, pursuing anaesthesia. One
          foot in systems, one foot in clinic — both steady.
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
            { k: "role", v: profile.role },
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
