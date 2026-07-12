import { Topbar } from "@/components/sections/Topbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { OpenSource } from "@/components/sections/OpenSource";
import { TwoHalves } from "@/components/sections/TwoHalves";
import { Timeline } from "@/components/sections/Timeline";
import { ContributionsChart } from "@/components/sections/ContributionsChart";
import { AgentConsensus } from "@/components/sections/AgentConsensus";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { BackgroundVideo } from "@/components/effects/BackgroundVideo";
import { LanguageField } from "@/components/effects/LanguageField";
import { CursorGlow } from "@/components/effects/CursorGlow";

// ============================================================
// LESTRAMK.ORG — Lee Muriithi Kingori
// Mega revamp. 7-category agent methodology. 9.5 quality bar.
// ============================================================

export default function Home() {
  return (
    <>
      {/* Background layers (z-0) */}
      <BackgroundVideo />

      {/* Physics layer (z-0, pointer-events: auto for mouse drag) */}
      <LanguageField />

      {/* Custom cursor */}
      <CursorGlow />

      {/* Content (z-1) */}
      <div className="content-layer min-h-screen flex flex-col">
        <Topbar />
        <main className="flex-1">
          <Hero />
          <Projects />
          <OpenSource />
          <TwoHalves />
          <Timeline />
          <section id="contributions" className="relative">
            <div className="max-w-[1080px] mx-auto px-6 md:px-8">
              <ContributionsChart />
            </div>
          </section>
          <AgentConsensus />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
