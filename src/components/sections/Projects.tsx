"use client";

import * as React from "react";
import { projects, type Project } from "@/data/profile";
import { LanguageIcon } from "@/components/icons/LanguageIcons";
import { ArrowUpRight, ShieldIcon, TerminalIcon } from "@/components/icons/BrandIcons";
import { motion } from "framer-motion";

// ============================================================
// PROJECTS — only 4 cards (Rox, LestraOS, aamt, Browser Auto)
// Each card is real: status pill, stack icons, metric, link.
// Criticiser anti-slop: no fake "Trending" tags, no fake
// star counts. Real status, real stack, real href.
// ============================================================

const STATUS_LABEL: Record<Project["status"], { label: string; cls: string }> = {
  shipped: { label: "shipped", cls: "pill-shipped" },
  beta: { label: "beta", cls: "pill-beta" },
  wip: { label: "wip", cls: "pill-wip" },
};

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <motion.a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      className="group block border border-[var(--rule)] bg-[var(--surface)] hover:bg-[var(--surface-2)] transition-colors card-lift p-6 md:p-7"
    >
      {/* Top row: index, name, status */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-4">
          <span className="mono text-[10px] tracking-[0.2em] uppercase text-[var(--lestra)]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display font-light text-2xl md:text-3xl tracking-[-0.018em] text-[var(--ink)]">
            {p.name}
          </h3>
        </div>
        <span className={`pill ${STATUS_LABEL[p.status].cls}`}>
          {STATUS_LABEL[p.status].label}
        </span>
      </div>

      {/* Tag */}
      <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-3)] mb-4">
        {p.tag}
      </p>

      {/* Description */}
      <p className="font-sans text-[15px] leading-[1.55] text-[var(--ink-2)] mb-5">
        {p.desc}
      </p>

      {/* Stack with real icons */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5">
        {p.stack.map((s) => (
          <span
            key={s.label}
            className="flex items-center gap-1.5 mono text-[10px] uppercase tracking-[0.14em] text-[var(--ink-3)]"
          >
            <span className="text-[var(--ink-2)]">
              <LanguageIcon id={s.icon} size={16} />
            </span>
            {s.label}
          </span>
        ))}
      </div>

      {/* Metric + arrow */}
      <div className="flex items-end justify-between pt-4 border-t border-[var(--rule)]">
        {p.metric && (
          <div>
            <div className="mono text-[9px] uppercase tracking-[0.2em] text-[var(--ink-3)]">
              {p.metric.label}
            </div>
            <div className="font-display text-lg text-[var(--ink)]">
              {p.metric.value}
            </div>
          </div>
        )}
        <span className="ml-auto text-[var(--ink-3)] group-hover:text-[var(--lestra)] transition-colors">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </motion.a>
  );
}

export function Projects() {
  return (
    <section id="work" className="relative">
      <div className="max-w-[1080px] mx-auto px-6 md:px-8">
        <header className="mb-10 md:mb-14 max-w-[42rem]">
          <p className="eyebrow mb-4">02 / Currently building</p>
          <h2 className="font-display font-light text-[clamp(2rem,4vw,3rem)] leading-[1.04] tracking-[-0.022em] mb-4">
            Four things, all{" "}
            <em className="italic text-[var(--lestra)]">in motion.</em>
          </h2>
          <p className="font-sans text-[15px] leading-[1.55] text-[var(--ink-3)]">
            Not a portfolio of every repo. Four live projects: a cyber-tech AI
            that hides root, a from-scratch x86_64 operating system, a CLI for
            Africa&apos;s vetted talent marketplace, and a stealth browser
            automation engine.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--rule)] border border-[var(--rule)]">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} p={p} index={i} />
          ))}
        </div>

        {/* Cyber security strip — small note from the Cyber Security lead */}
        <div className="mt-8 border border-[var(--rule)] bg-[var(--surface)] p-5 flex items-start gap-4">
          <span className="text-[var(--lestra)] mt-0.5">
            <ShieldIcon size={18} />
          </span>
          <p className="font-sans text-[13px] leading-[1.55] text-[var(--ink-2)]">
            <span className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--lestra)] mr-2">
              cyber · review
            </span>
            All four projects reviewed by the cyber-security track. Rox ships
            with a default-deny allowlist — no fake attestation, no fake
            keybox, no fake passmark. Browser Automation Engine never
            auto-exfiltrates; captcha-handoff is manual.
          </p>
        </div>
      </div>
    </section>
  );
}
