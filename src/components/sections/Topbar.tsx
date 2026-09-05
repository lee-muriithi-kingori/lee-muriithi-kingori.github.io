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
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#work", label: "work" },
    { href: "#open-source", label: "open-source" },
    { href: "#halves", label: "halves" },
    { href: "#contributions", label: "commits" },
  ];

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md transition-colors duration-300"
      style={{
        background: scrolled ? "rgba(255, 255, 255, 0.88)" : "transparent",
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
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline border-0 text-[var(--ink-2)] hover:text-[var(--ink)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu — the md nav is hidden below 768px */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden mono text-[11px] tracking-[0.18em] uppercase text-[var(--ink-2)] hover:text-[var(--lestra)] transition-colors px-2 py-2"
        >
          {open ? "close" : "menu"}
        </button>

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
      {open && (
        <nav className="md:hidden border-t border-[var(--rule)] bg-[var(--background)]">
          <div className="max-w-[1080px] mx-auto px-6 py-2 flex flex-col mono text-xs tracking-[0.18em] uppercase">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-[var(--rule)] last:border-b-0 text-[var(--ink-2)] hover:text-[var(--lestra)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
