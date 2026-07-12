import * as React from "react";
import { profile } from "@/data/profile";
import { GlobeIcon, GitHubIcon, ArrowUpRight } from "@/components/icons/BrandIcons";

// ============================================================
// FOOTER — minimal, sticky-bottom, with lestramk.org emphasis
// ============================================================

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-[var(--rule)]">
      <div className="max-w-[1080px] mx-auto px-6 md:px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <a
            href={profile.orgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-3xl text-[var(--ink)] hover:text-[var(--lestra)] transition-colors inline-flex items-center gap-2.5 group"
          >
            <GlobeIcon size={22} />
            <span className="tracking-[-0.02em]">lestramk.org</span>
            <span className="text-[var(--ink-3)] group-hover:text-[var(--lestra)] transition-colors">
              <ArrowUpRight size={14} />
            </span>
          </a>
          <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-3)]">
            © {year} {profile.name} · built in Nairobi
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-2">
          <div className="flex items-center gap-4 mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-3)]">
            <span>Next.js 16 · matter-js · GSAP · framer-motion</span>
          </div>
          <div className="flex items-center gap-4 mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-3)]">
            <span>7 categories · 70 agents · 9.5 quality bar</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ink-2)] hover:text-[var(--lestra)] transition-colors inline-flex items-center gap-1.5"
            >
              <GitHubIcon size={12} />
              {profile.githubHandle}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
