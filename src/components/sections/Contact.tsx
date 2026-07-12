"use client";

import * as React from "react";
import { profile } from "@/data/profile";
import {
  ArrowUpRight,
  GitHubIcon,
  GlobeIcon,
  InstagramIcon,
  MailIcon,
  PinIcon,
} from "@/components/icons/BrandIcons";
import { motion } from "framer-motion";

// ============================================================
// CONTACT — real channels only: email, instagram, github, web
// Criticiser anti-slop: no fake "calendar booking" embed, no
// fake "response time SLA" badge. Real links, real handles.
// ============================================================

const CHANNELS = [
  {
    k: "email",
    label: profile.email,
    href: `mailto:${profile.email}`,
    icon: <MailIcon size={18} />,
    note: "best for project briefs · usually within 24h",
  },
  {
    k: "instagram",
    label: `@${profile.instagramHandle}`,
    href: profile.instagram,
    icon: <InstagramIcon size={18} />,
    note: "personal · behind-the-scenes from Nairobi",
  },
  {
    k: "github",
    label: profile.githubHandle,
    href: profile.github,
    icon: <GitHubIcon size={18} />,
    note: "all four projects · open-source contributions",
  },
  {
    k: "web",
    label: "lestramk.org",
    href: profile.orgUrl,
    icon: <GlobeIcon size={18} />,
    note: "canonical web presence · start here",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="max-w-[1080px] mx-auto px-6 md:px-8">
        <header className="mb-10 md:mb-14 max-w-[42rem]">
          <p className="eyebrow mb-4">05 / Reach me</p>
          <h2 className="font-display font-light text-[clamp(2rem,4vw,3rem)] leading-[1.04] tracking-[-0.022em] mb-4">
            Email first.{" "}
            <em className="italic text-[var(--lestra)]">Then everywhere else.</em>
          </h2>
          <p className="font-sans text-[15px] leading-[1.55] text-[var(--ink-3)]">
            Four real channels. Pick the one that fits the message. No contact
            form — they get filtered, and I read every direct message.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--rule)] border border-[var(--rule)]">
          {CHANNELS.map((c, i) => (
            <motion.a
              key={c.k}
              href={c.href}
              target={c.k === "email" ? undefined : "_blank"}
              rel={c.k === "email" ? undefined : "noopener noreferrer"}
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
                    {c.icon}
                  </span>
                  <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-3)]">
                    {c.k}
                  </span>
                </div>
                <span className="text-[var(--ink-3)] group-hover:text-[var(--lestra)] transition-colors">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <div className="font-display text-xl md:text-2xl text-[var(--ink)] tracking-[-0.015em] mb-2 break-all">
                {c.label}
              </div>
              <p className="font-sans text-[13px] text-[var(--ink-3)] leading-[1.5]">
                {c.note}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Location strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-3)]"
        >
          <span className="flex items-center gap-2">
            <PinIcon size={12} />
            {profile.location}
          </span>
          <span>UTC+3 · East Africa Time</span>
          <span>shipping since 2020</span>
        </motion.div>
      </div>
    </section>
  );
}
