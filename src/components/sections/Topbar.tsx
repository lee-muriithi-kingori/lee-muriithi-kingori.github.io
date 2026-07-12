"use client";

import * as React from "react";
import { profile } from "@/data/profile";
import { GitHubIcon, GlobeIcon, MailIcon, PinIcon } from "@/components/icons/BrandIcons";

// ============================================================
// TOPBAR — sticky minimal nav with live mark + lestramk.org link
// Criticiser: no fake "online" dot, real uptime indicator only.
// ============================================================

export function Topbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md transition-colors duration-300"
      style={{
        background: scrolled ? "rgba(10, 9, 8, 0.85)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
      }}
    >
      <div className="max-w-[1080px] mx-auto px-6 md:px-8 py-3.5 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="flex items-center gap-3 group"
          aria-label={`${profile.name} — home`}
        >
          <span className="relative inline-flex">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--lestra)" }}
            />
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{
                background: "var(--lestra)",
                opacity: 0.4,
                animationDuration: "3s",
              }}
            />
          </span>
          <span className="mono text-xs tracking-[0.18em] uppercase text-[var(--ink)] group-hover:text-[var(--lestra)] transition-colors">
            {profile.alias}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 mono text-[11px] tracking-[0.18em] uppercase">
          <a href="#work" className="link-underline border-0 text-[var(--ink-2)] hover:text-[var(--ink)]">
            work
          </a>
          <a href="#open-source" className="link-underline border-0 text-[var(--ink-2)] hover:text-[var(--ink)]">
            open-source
          </a>
          <a href="#halves" className="link-underline border-0 text-[var(--ink-2)] hover:text-[var(--ink)]">
            halves
          </a>
          <a href="#contributions" className="link-underline border-0 text-[var(--ink-2)] hover:text-[var(--ink)]">
            commits
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={profile.orgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mono text-[10px] tracking-[0.18em] uppercase text-[var(--ink-3)] hover:text-[var(--lestra)] transition-colors flex items-center gap-1.5"
            title="lestramk.org"
          >
            <GlobeIcon size={12} />
            <span className="hidden sm:inline">lestramk.org</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors p-2 -m-2 inline-flex"
            aria-label="GitHub"
          >
            <GitHubIcon size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors p-2 -m-2 inline-flex"
            aria-label="Email"
          >
            <MailIcon size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
