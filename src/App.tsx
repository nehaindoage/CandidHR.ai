import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TransitionVeil } from './components/TransitionVeil';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ProcessVideoSection } from './components/ProcessVideoSection';
import { PlatformWalkthrough } from './components/PlatformWalkthrough';
import { TalentSourcingSection } from './components/TalentSourcingSection';
import { FeatureGridSection } from './components/FeatureGridSection';
import { AtsJobBoardSection } from './components/AtsJobBoardSection';
import { RoiCalculatorSection } from './components/RoiCalculatorSection';
import { SolutionsCaseStudiesSection } from './components/SolutionsCaseStudiesSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { InteractiveScreenModal } from './components/InteractiveScreenModal';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoInitialVolume, setDemoInitialVolume] = useState('5-15 hires/month');
  const [screenSimulatorOpen, setScreenSimulatorOpen] = useState(false);

  const handleOpenDemo = () => {
    setDemoInitialVolume('5-15 hires/month');
    setDemoModalOpen(true);
  };

  const handleOpenDemoWithSpecs = (specs: string) => {
    setDemoInitialVolume(specs);
    setDemoModalOpen(true);
  };

  const handleOpenScreenSimulator = () => {
    setScreenSimulatorOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0E1330] flex flex-col font-sans">
      {/* Top Announcement Bar */}
      <AnnouncementBar onOpenDemo={handleOpenDemo} />

      {/* Primary Sticky Navbar */}
      <Navbar
        onOpenDemo={handleOpenDemo}
        onOpenScreeningSimulator={handleOpenScreenSimulator}
      />

      <main className="flex-1">
        {/* SECTION 1: DARK MODE HERO (With compact logo marquee, hiring math removed) */}
        <HeroSection
          onOpenDemo={handleOpenDemo}
          onOpenScreeningSimulator={handleOpenScreenSimulator}
        />

        {/* SEAMLESS VISUAL TRANSITION: Dark Mode into Light Mode for High Readability */}
        <TransitionVeil />

        {/* SECTION 2: HOW IT ALL WORKS TOGETHER (Light Mode 5-Stage Pipeline) */}
        <HowItWorksSection onOpenDemo={handleOpenDemo} />

        {/* SECTION 3: PROCESS VIDEO (Dedicated Section Demonstrating the Autonomous Flow) */}
        <ProcessVideoSection
          onOpenDemo={handleOpenDemo}
          onOpenScreeningSimulator={handleOpenScreenSimulator}
        />

        {/* SECTION 4: PLATFORM WALKTHROUGH (4 Console Views) */}
        <PlatformWalkthrough
          onOpenDemo={handleOpenDemo}
          onOpenScreeningSimulator={handleOpenScreenSimulator}
        />

        {/* SECTION 5: 3B CANDIDATE SOURCING & DEEPSEARCH */}
        <TalentSourcingSection onOpenDemo={handleOpenDemo} />

        {/* SECTION 6: CAPABILITIES MARQUEE CAROUSEL (Up/Down Staggered Rhythm) */}
        <FeatureGridSection onOpenDemo={handleOpenDemo} />

        {/* SECTION 7: ATS & JOB BOARDS (Streamlined, Shorter Block) */}
        <AtsJobBoardSection onOpenDemo={handleOpenDemo} />

        {/* SECTION 8: SUBSCRIPTION PLANS (Streamlined, Parameters and Impact Cards Removed) */}
        <RoiCalculatorSection onOpenDemoWithSpecs={handleOpenDemoWithSpecs} />

        {/* SECTION 9: SOLUTIONS & CASE STUDY (Lumiverse Solutions: 360 Interviews in 3 Hours) */}
        <SolutionsCaseStudiesSection onOpenDemo={handleOpenDemo} />

        {/* SECTION 10: RECRUITER FAQ (5 Core Questions) */}
        <FaqSection onOpenDemo={handleOpenDemo} />
      </main>

      {/* FOOTER */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* INTERACTIVE MODALS */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        initialVolume={demoInitialVolume}
      />

      <InteractiveScreenModal
        isOpen={screenSimulatorOpen}
        onClose={() => setScreenSimulatorOpen(false)}
        onOpenDemo={handleOpenDemo}
      />
    </div>
  );
}
