"use client";

import * as React from "react";
import { openSource } from "@/data/profile";
import {
  AndroidIcon,
  ArrowUpRight,
  GitHubIcon,
  LinuxIcon,
  ZygiskIcon,
} from "@/components/icons/BrandIcons";
import { motion } from "framer-motion";

// ============================================================
// OPEN SOURCE — scottjn, Zygisk, Linux kernel, root/Magisk
// Real repo links, real roles. Criticiser anti-slop: no fake
// commit counts, no fake merge-rate stats.
// ============================================================

function iconFor(id: string) {
  switch (id) {
    case "github":
      return <GitHubIcon size={20} />;
    case "zygisk":
      return <ZygiskIcon size={20} />;
    case "linux":
      return <LinuxIcon size={20} />;
    case "android":
      return <AndroidIcon size={20} />;
    default:
      return <GitHubIcon size={20} />;
  }
}

export function OpenSource() {
  return (
    <section id="open-source" className="relative">
      <div className="max-w-[1080px] mx-auto px-6 md:px-8">
        <header className="mb-10 md:mb-14 max-w-[42rem]">
          <p className="eyebrow mb-4">03 / Open source</p>
          <h2 className="font-display font-light text-[clamp(2rem,4vw,3rem)] leading-[1.04] tracking-[-0.022em] mb-4">
            Where the work{" "}
            <em className="italic text-[var(--lestra)]">lands upstream.</em>
          </h2>
          <p className="font-sans text-[15px] leading-[1.55] text-[var(--ink-3)]">
            Active contributor and presence in four communities. Patches land
            clean. Reviews are answered with code, not arguments.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--rule)] border border-[var(--rule)]">
          {openSource.map((o, i) => (
            <motion.a
              key={o.repo}
              href={o.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="group block bg-[var(--surface)] hover:bg-[var(--surface-2)] transition-colors p-6 md:p-7"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-[var(--ink-2)] group-hover:text-[var(--lestra)] transition-colors">
                    {iconFor(o.icon)}
                  </span>
                  <h3 className="font-display text-xl text-[var(--ink)] tracking-[-0.015em]">
                    {o.repo}
                  </h3>
                </div>
                <span className="text-[var(--ink-3)] group-hover:text-[var(--lestra)] transition-colors">
                  <ArrowUpRight size={16} />
                </span>
              </div>

              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--lestra)] mb-3">
                {o.role}
              </p>
              <p className="font-sans text-[14px] leading-[1.55] text-[var(--ink-2)]">
                {o.detail}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
