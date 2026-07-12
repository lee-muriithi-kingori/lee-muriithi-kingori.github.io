"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CapsuleIcon, PulseIcon, TerminalIcon } from "@/components/icons/BrandIcons";
import {
  AsmIcon,
  CIcon,
  CppIcon,
  KotlinIcon,
  PythonIcon,
  TypeScriptIcon,
} from "@/components/icons/LanguageIcons";

// ============================================================
// TWO HALVES — engineer / nurse-anaesthetist
// Criticiser anti-slop: no fake "balance" poem. Real skills
// on each side, real icons, real titles.
// ============================================================

export function TwoHalves() {
  return (
    <section id="halves" className="relative">
      <div className="max-w-[1080px] mx-auto px-6 md:px-8">
        <header className="mb-10 md:mb-14 max-w-[42rem]">
          <p className="eyebrow mb-4">04 / Two halves</p>
          <h2 className="font-display font-light text-[clamp(2rem,4vw,3rem)] leading-[1.04] tracking-[-0.022em] mb-4">
            One foot in systems.{" "}
            <em className="italic text-[var(--lestra)]">One in the clinic.</em>
          </h2>
          <p className="font-sans text-[15px] leading-[1.55] text-[var(--ink-3)]">
            Both halves run in parallel. Neither is a hobby. The discipline
            transfers: assessment, triage, steady hands under load.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--rule)] border border-[var(--rule)]">
          {/* Engineer half */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="bg-[var(--surface)] p-7 md:p-9"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[var(--lestra)]">
                <TerminalIcon size={20} />
              </span>
              <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--lestra)]">
                engineer
              </span>
            </div>

            <h3 className="font-display font-light text-[1.8rem] md:text-[2.1rem] leading-[1.1] tracking-[-0.018em] mb-6">
              Builds{" "}
              <em className="italic text-[var(--lestra)]">systems</em> that
              move.
            </h3>

            <ul className="space-y-px mb-6">
              {[
                {
                  icon: "kotlin",
                  label: "Native Android — Kotlin, NDK, Magisk modules",
                },
                {
                  icon: "c",
                  label: "Systems — C, x86_64, kernel work, Linux from scratch",
                },
                {
                  icon: "typescript",
                  label: "Web — TypeScript, Next.js, Prisma, Postgres",
                },
                {
                  icon: "python",
                  label: "Infra — SOCKS5 tunnels, proxies, privacy networking",
                },
                {
                  icon: "cpp",
                  label: "Native — C++, Zygisk, runtime hooks, ptrace",
                },
                {
                  icon: "asm",
                  label: "Low-level — x86_64 ASM, bootloaders, drivers",
                },
              ].map((row) => (
                <li
                  key={row.label}
                  className="flex items-center gap-3 py-2.5 border-t border-[var(--rule)] first:border-t-0"
                >
                  <span className="text-[var(--ink-3)] flex-shrink-0">
                    {row.icon === "kotlin" && <KotlinIcon size={14} />}
                    {row.icon === "c" && <CIcon size={14} />}
                    {row.icon === "typescript" && <TypeScriptIcon size={14} />}
                    {row.icon === "python" && <PythonIcon size={14} />}
                    {row.icon === "cpp" && <CppIcon size={14} />}
                    {row.icon === "asm" && <AsmIcon size={14} />}
                  </span>
                  <span className="font-sans text-[14px] text-[var(--ink-2)]">
                    {row.label}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-3)]">
              Since 2020 · self-taught · still shipping
            </p>
          </motion.div>

          {/* Nurse / anaesthesia half */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="bg-[var(--surface)] p-7 md:p-9"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[var(--lestra)]">
                <PulseIcon size={20} />
              </span>
              <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--lestra)]">
                nurse · anaesthesia
              </span>
            </div>

            <h3 className="font-display font-light text-[1.8rem] md:text-[2.1rem] leading-[1.1] tracking-[-0.018em] mb-6">
              Reads vital signs.{" "}
              <em className="italic text-[var(--lestra)]">Holds steady.</em>
            </h3>

            <ul className="space-y-px mb-6">
              {[
                {
                  icon: "pulse",
                  label:
                    "BSc Nursing — Dedan Kimathi University of Technology, Nyeri",
                },
                {
                  icon: "pulse",
                  label:
                    "Pursuing anaesthesia — pharmacology, airway, regional blocks",
                },
                {
                  icon: "pulse",
                  label:
                    "Patient assessment, vital signs, clinical documentation",
                },
                {
                  icon: "capsule",
                  label:
                    "Pharmacology: induction agents, analgesics, reversal protocols",
                },
                {
                  icon: "pulse",
                  label: "Wound care, triage, infection prevention & control",
                },
                {
                  icon: "capsule",
                  label:
                    "Quietly learning to keep humans alive while keeping systems alive",
                },
              ].map((row, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 py-2.5 border-t border-[var(--rule)] first:border-t-0"
                >
                  <span className="text-[var(--ink-3)] flex-shrink-0">
                    {row.icon === "pulse" ? (
                      <PulseIcon size={14} />
                    ) : (
                      <CapsuleIcon size={14} />
                    )}
                  </span>
                  <span className="font-sans text-[14px] text-[var(--ink-2)]">
                    {row.label}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-3)]">
              Since 2024 · active · year 2
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
