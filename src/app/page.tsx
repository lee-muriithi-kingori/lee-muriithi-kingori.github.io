import { Topbar } from "@/components/sections/Topbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { OpenSource } from "@/components/sections/OpenSource";
import { TwoHalves } from "@/components/sections/TwoHalves";
import { Timeline } from "@/components/sections/Timeline";
import { ContributionsChart } from "@/components/sections/ContributionsChart";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { BackgroundVideo } from "@/components/effects/BackgroundVideo";
import { Aurora } from "@/components/effects/Aurora";
import { LanguageField } from "@/components/effects/LanguageField";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { Marquee } from "@/components/effects/Marquee";

// ============================================================
// LESTRAMK.ORG — Lee Muriithi Kingori
// ============================================================

export default function Home() {
  return (
    <>
      {/* Background layers (z-0) */}
      <BackgroundVideo />
      <Aurora />

      {/* Physics layer (z-0, pointer-events: auto for mouse drag) */}
      <LanguageField />

      {/* Custom cursor */}
      <CursorGlow />

      {/* Scroll progress */}
      <ScrollProgress />

      {/* Content (z-1) */}
      <div className="content-layer min-h-screen flex flex-col">
        <Topbar />
        <main className="flex-1">
          <Hero />
          <Marquee />
          <Projects />
          <OpenSource />
          <TwoHalves />
          <Timeline />
          <section id="contributions" className="relative">
            <div className="max-w-[1080px] mx-auto px-6 md:px-8">
              <ContributionsChart />
            </div>
          </section>
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
