import React, { useState } from 'react';
import { 
  Users, 
  FileSearch, 
  CheckSquare, 
  Video, 
  Award, 
  Sparkles, 
  ArrowRight, 
  Check, 
  X,
  UserCheck,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Play
} from 'lucide-react';
import heroImage from "../assets/images/hero_recruiter_leader_1792042392230.jpg";
import videoInter from '../assets/images/candidate_video_interview_1792042392468.jpg'
import globalTalent from '../assets/images/global_talent_network_1792042392492.jpg'
import hrTeam from '../assets/images/hr_team_collaboration_1792042394052.jpg'

interface Props {
  onOpenDemo: () => void;
}

export const HowItWorksSection: React.FC<Props> = ({ onOpenDemo }) => {
  // Default to Stage 05 (Shortlist) or Stage 01
  const [expandedIndex, setExpandedIndex] = useState<number>(4);

  const stages = [
    {
      id: 0,
      stageNumber: '01',
      stageName: 'Source',
      company: 'GloLicense Solutions',
      logoText: 'GloLicense',
      headline: 'GloLicense and CandidHR.ai auto-invite best matches from a 3B talent pool',
      quote: '“We invited 50 pre-matched engineers across 3 continents before receiving our first organic application. CandidHR’s DeepSearch initialized our entire engineering pipeline in under 24 hours.”',
      author: 'Pooja Patvekar',
      authorRole: 'Head of Talent Acquisition, GloLicense Solutions',
      metric: '3B+ Global Talent Indexed',
      statNumber: '42%',
      statLabel: 'Outreach response rate',
      badge: 'DeepSearch Active',
      image: globalTalent,
      tagline: 'Sourcing without recruiter cold outreach'
    },
    {
      id: 1,
      stageNumber: '02',
      stageName: 'Screen',
      company: 'Forech India',
      logoText: 'Forech',
      headline: 'Forech eliminates manual screening fatigue with precision resume matching',
      quote: '“Every candidate match shows the exact reasons and gaps against our criteria. Our recruiters stopped opening 500 PDFs by hand and stopped second-guessing qualifications.”',
      author: 'Rajesh Verma',
      authorRole: 'VP of Human Resources, Forech India',
      metric: '1,200+ Resumes Evaluated',
      statNumber: '60s',
      statLabel: 'Batch screening velocity',
      badge: '94% Match Accuracy',
      image: hrTeam,
      tagline: 'Zero black-box scores · Clear reasons'
    },
    {
      id: 2,
      stageNumber: '03',
      stageName: 'Assess',
      company: 'Vikas Group',
      logoText: 'Vikas Group',
      headline: 'Vikas Group benchmarks technical aptitude with AI-proctored coding tests',
      quote: '“A resume tells you what candidates claim. The proctored coding and domain benchmarks proved what they could build before our engineering managers booked a single interview.”',
      author: 'Sunil Kulkarni',
      authorRole: 'Director of Engineering, Vikas Group',
      metric: '100% Proctored Integrity',
      statNumber: '91%',
      statLabel: 'Assessment completion rate',
      badge: 'Proctor Verified',
      image: heroImage,
      tagline: 'Hands-on benchmarks before live rounds'
    },
    {
      id: 3,
      stageNumber: '04',
      stageName: 'Interview',
      company: 'QubeHealth Pay',
      logoText: 'QubeHealth',
      headline: 'QubeHealth accelerates hiring velocity with 24/7 automated video interviews',
      quote: '“Candidates record answers when it suits their schedule. Our talent team reviews structured transcripts, communication scores, and hiring verdicts with zero calendar coordination lag.”',
      author: 'Neha Singhania',
      authorRole: 'Lead Talent Partner, QubeHealth Pay',
      metric: '24/7 Candidate Self-Paced',
      statNumber: '4.8/5',
      statLabel: 'Verbal communication score',
      badge: 'STAR Rubric Scored',
      image: videoInter,
      tagline: 'The first interview without calendar lag'
    },
    {
      id: 4,
      stageNumber: '05',
      stageName: 'Shortlist',
      company: 'Lumiverse Solutions',
      logoText: 'Lumiverse',
      headline: 'Lumiverse screened 360 interviews and delivered 25 qualified hires in 3 hours',
      quote: '“CandidHR delivered our top 25 pre-qualified candidates in just 3 hours. Our managers sat down only with people who were truly hire-ready, completely eliminating preliminary screening noise.”',
      author: 'Amar Thakare',
      authorRole: 'CEO & Managing Director, Lumiverse Solutions',
      metric: '360 Interviews Completed',
      statNumber: '3 hrs',
      statLabel: 'From applications to hire-ready',
      badge: 'Shortlist Verified',
      image: heroImage,
      tagline: 'Unified 360 score · People decide'
    }
  ];

  const handleNext = () => {
    setExpandedIndex((prev) => (prev + 1) % stages.length);
  };

  const handlePrev = () => {
    setExpandedIndex((prev) => (prev - 1 + stages.length) % stages.length);
  };

  return (
    <section id="how-it-works" className="bg-[#F6F7FB] text-slate-900 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3D38F5] bg-[#EEEDFF] px-3 py-1 rounded-full">
            How It All Works Together
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0E1330] mt-3 tracking-tight">
            Who does what, from <span className="text-brand-gradient">job created to hire</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Steps 1 to 5 need no one from your team. CandidHR.ai automates the repetitive evaluation work so your recruiters focus on decision-making conversations.
          </p>
        </div>

        {/* Before vs With CandidHR Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* Old Way */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 text-rose-600 font-heading font-bold text-base mb-4">
              <div className="w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center">
                <X className="w-4 h-4" />
              </div>
              <span>Without CandidHR.ai (Tiring Manual Pipeline)</span>
            </div>

            <ol className="space-y-2.5 text-sm text-slate-600">
              <li className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-dashed border-slate-200">
                <span>1. Post job &amp; wait passively for applicants</span>
                <span className="text-xs text-slate-600 font-medium font-mono">Manual</span>
              </li>
              <li className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-dashed border-slate-200">
                <span>2. Open 500+ resumes one-by-one</span>
                <span className="text-xs text-slate-600 font-medium font-mono">Manual</span>
              </li>
              <li className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-dashed border-slate-200">
                <span>3. Schedule phone screens &amp; deal with no-shows</span>
                <span className="text-xs text-slate-600 font-medium font-mono">Manual</span>
              </li>
              <li className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-dashed border-slate-200">
                <span>4. Manually email tests &amp; check submissions</span>
                <span className="text-xs text-slate-600 font-medium font-mono">Manual</span>
              </li>
              <li className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-dashed border-slate-200">
                <span>5. Conduct repetitive first-round intro calls</span>
                <span className="text-xs text-slate-600 font-medium font-mono">Manual</span>
              </li>
              <li className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 font-semibold">
                <span>6. Discover candidate wasn’t qualified after all</span>
                <span className="text-xs text-amber-700 font-mono">Wasted time</span>
              </li>
            </ol>
          </div>

          {/* New Way */}
          <div className="bg-white border-2 border-[#3D38F5]/30 rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3D38F5]/5 rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center gap-2 text-[#3D38F5] font-heading font-bold text-base mb-4">
              <div className="w-6 h-6 rounded-full bg-[#EEEDFF] flex items-center justify-center">
                <Check className="w-4 h-4 text-[#3D38F5]" />
              </div>
              <span>With CandidHR.ai (Autonomous Screening Engine)</span>
            </div>

            <ol className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-center justify-between p-2.5 rounded-lg bg-[#F6F7FB] border border-slate-200">
                <span className="font-medium text-[#0E1330]">1. Top 50 matches auto-invited from 3B pool</span>
                <span className="text-xs text-[#3D38F5] font-bold font-mono">Automated</span>
              </li>
              <li className="flex items-center justify-between p-2.5 rounded-lg bg-[#F6F7FB] border border-slate-200">
                <span className="font-medium text-[#0E1330]">2. AI parses &amp; matches resumes against role</span>
                <span className="text-xs text-[#3D38F5] font-bold font-mono">Automated</span>
              </li>
              <li className="flex items-center justify-between p-2.5 rounded-lg bg-[#F6F7FB] border border-slate-200">
                <span className="font-medium text-[#0E1330]">3. Proctored technical &amp; aptitude assessments</span>
                <span className="text-xs text-[#3D38F5] font-bold font-mono">Automated</span>
              </li>
              <li className="flex items-center justify-between p-2.5 rounded-lg bg-[#F6F7FB] border border-slate-200">
                <span className="font-medium text-[#0E1330]">4. Video interview transcribed &amp; analyzed</span>
                <span className="text-xs text-[#3D38F5] font-bold font-mono">Automated</span>
              </li>
              <li className="flex items-center justify-between p-2.5 rounded-lg bg-[#F6F7FB] border border-slate-200">
                <span className="font-medium text-[#0E1330]">5. Ranked shortlist with hiring evidence</span>
                <span className="text-xs text-[#3D38F5] font-bold font-mono">Automated</span>
              </li>
              <li className="flex items-center justify-between p-2.5 rounded-lg bg-[#0E1330] text-white font-bold">
                <span className="flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-[#12B886]" />
                  6. Recruiter interviews the 10 best candidates &amp; hires
                </span>
                <span className="text-xs text-[#4ADE9E] font-mono">Your Team</span>
              </li>
            </ol>
          </div>

        </div>

        {/* =========================================================================
            ZOOM-STYLE INTERACTIVE ACCORDION SLIDER CAROUSEL
            Exact layout matching Zoom.com customer stories:
            - Multiple vertical cards side-by-side
            - 1 card is expanded wide with quote, metrics, author, CTA and image
            - Other cards are collapsed vertical slivers with company/logo
            - Smooth glide animation on click!
           ========================================================================= */}
        <div className="space-y-6">
          
          {/* Zoom Section Header & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#3D38F5] font-mono">
                Interactive Pipeline &amp; Customer Shortlists
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0E1330] mt-1 tracking-tight">
                Recruiters achieve more with <span className="text-brand-gradient">CandidHR.ai</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Click any stage to expand the full customer outcome and workflow evidence.
              </p>
            </div>

            {/* Circular Carousel Arrow Controls (Zoom Signature) */}
            <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
                aria-label="Previous story"
                title="Previous stage"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
                aria-label="Next story"
                title="Next stage"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Zoom Horizontal Expanding Accordion Container (Desktop & Tablet) */}
          <div className="hidden md:flex gap-3.5 h-[560px] w-full select-none">
            {stages.map((stage, idx) => {
              const isExpanded = expandedIndex === idx;

              return (
                <div
                  key={stage.id}
                  onClick={() => setExpandedIndex(idx)}
                  className={`relative rounded-3xl transition-all duration-500 ease-in-out cursor-pointer overflow-hidden border ${
                    isExpanded
                      ? 'flex-[5] bg-white border-slate-300 shadow-xl cursor-default'
                      : 'flex-1 bg-[#F0F2F8] hover:bg-[#E8EBF5] border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* COLLAPSED STATE SLIVER (Zoom Style) */}
                  {!isExpanded && (
                    <div className="h-full w-full flex flex-col justify-between items-center p-4 py-8">
                      {/* Top Stage Indicator */}
                      <div className="w-8 h-8 rounded-full bg-white text-[#3D38F5] border border-slate-200 flex items-center justify-center font-heading font-extrabold text-xs shadow-2xs">
                        {stage.stageNumber}
                      </div>

                      {/* Top Preview Image Thumbnail */}
                      <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-2xs border border-white">
                        <img
                          src={stage.image}
                          alt={stage.company}
                          className="w-full h-full object-cover grayscale opacity-75"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Vertical Company / Stage Label */}
                      <div className="flex flex-col items-center gap-2 my-auto">
                        <span 
                          className="text-xs font-heading font-extrabold text-[#0E1330] tracking-wider uppercase whitespace-nowrap rotate-180" 
                          style={{ writingMode: 'vertical-rl' }}
                        >
                          {stage.company}
                        </span>
                      </div>

                      {/* Bottom Stage Tag */}
                      <span className="text-[10px] font-mono font-bold text-slate-500 tracking-wider uppercase">
                        {stage.stageName}
                      </span>
                    </div>
                  )}

                  {/* EXPANDED STATE (Zoom Full Layout) */}
                  {isExpanded && (
                    <div className="h-full w-full p-8 lg:p-10 flex flex-col justify-between overflow-hidden">
                      
                      {/* Top Headline & Company Lockup */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <span className="px-2.5 py-1 rounded-full bg-[#EEEDFF] text-[#3D38F5] text-xs font-extrabold font-mono">
                              STAGE {stage.stageNumber} · {stage.stageName.toUpperCase()}
                            </span>
                            <span className="text-xs font-bold text-slate-600">
                              {stage.company}
                            </span>
                          </div>

                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#E3F8F1] text-[#0A7F5D]">
                            {stage.badge}
                          </span>
                        </div>

                        {/* Bold Zoom Headline */}
                        <h4 className="font-heading font-extrabold text-2xl lg:text-[28px] leading-[1.2] text-[#0E1330] tracking-tight">
                          {stage.headline}
                        </h4>
                      </div>

                      {/* Middle: Split Layout (Left: Quote + Author, Right: Image Visual) */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-4">
                        
                        {/* Quote & Author */}
                        <div className="lg:col-span-7 space-y-4">
                          <blockquote className="text-sm lg:text-base text-slate-700 leading-relaxed italic border-l-2 border-[#3D38F5] pl-4">
                            {stage.quote}
                          </blockquote>

                          <div>
                            <div className="font-heading font-bold text-sm text-[#0E1330]">
                              {stage.author}
                            </div>
                            <div className="text-xs text-slate-500">
                              {stage.authorRole}
                            </div>
                          </div>

                          {/* Stat Highlight Strip */}
                          <div className="flex items-center gap-6 pt-2 border-t border-slate-100">
                            <div>
                              <span className="font-heading font-extrabold text-2xl text-[#3D38F5] block">
                                {stage.statNumber}
                              </span>
                              <span className="text-[11px] text-slate-500 font-medium">
                                {stage.statLabel}
                              </span>
                            </div>
                            <div className="border-l border-slate-200 pl-6">
                              <span className="text-xs font-bold text-[#0E1330] block">
                                Key Capability
                              </span>
                              <span className="text-[11px] text-slate-500 font-medium">
                                {stage.tagline}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Right: Media Showcase */}
                        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-[#0E1330] border border-slate-200">
                          <img
                            src={stage.image}
                            alt={stage.company}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1330]/80 via-transparent to-transparent" />
                          <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs">
                            <span className="font-medium text-[11px] truncate max-w-[200px]">
                              {stage.metric}
                            </span>
                            <span className="w-2 h-2 rounded-full bg-[#12B886]" />
                          </div>
                        </div>

                      </div>

                      {/* Bottom Bar: Action Button + Stage Progress Indicator */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <button
                          onClick={onOpenDemo}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-gradient hover:bg-brand-gradient-hover text-white text-xs font-bold shadow-md shadow-[#3D38F5]/30 transition-all cursor-pointer"
                        >
                          <span>Explore {stage.stageName} Shortlist Workflow</span>
                          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                            <ArrowRight className="w-3.5 h-3.5 text-white" />
                          </div>
                        </button>

                        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-400">
                          <span>{stage.stageNumber}</span>
                          <span>/</span>
                          <span>05</span>
                        </div>
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* MOBILE VIEW (Clean Stacked / Tabbed Layout) */}
          <div className="md:hidden space-y-4">
            
            {/* Stage Selector Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
              {stages.map((st, i) => (
                <button
                  key={st.id}
                  onClick={() => setExpandedIndex(i)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                    expandedIndex === i
                      ? 'bg-[#0E1330] text-white border-[#0E1330]'
                      : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  {st.stageNumber}. {st.stageName}
                </button>
              ))}
            </div>

            {/* Active Mobile Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EEEDFF] text-[#3D38F5] text-[11px] font-extrabold font-mono">
                  STAGE {stages[expandedIndex].stageNumber} · {stages[expandedIndex].stageName.toUpperCase()}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  {stages[expandedIndex].company}
                </span>
              </div>

              <h4 className="font-heading font-extrabold text-lg text-[#0E1330]">
                {stages[expandedIndex].headline}
              </h4>

              <div className="relative rounded-xl overflow-hidden aspect-[16/9]">
                <img
                  src={stages[expandedIndex].image}
                  alt={stages[expandedIndex].company}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <blockquote className="text-xs text-slate-600 leading-relaxed italic border-l-2 border-[#3D38F5] pl-3">
                {stages[expandedIndex].quote}
              </blockquote>

              <div className="text-xs">
                <div className="font-bold text-[#0E1330]">{stages[expandedIndex].author}</div>
                <div className="text-slate-500 text-[11px]">{stages[expandedIndex].authorRole}</div>
              </div>

              <div className="pt-2 flex justify-between items-center border-t border-slate-100">
                <div>
                  <span className="font-heading font-extrabold text-xl text-[#3D38F5] block">
                    {stages[expandedIndex].statNumber}
                  </span>
                  <span className="text-[10px] text-slate-500">{stages[expandedIndex].statLabel}</span>
                </div>

                <button
                  onClick={onOpenDemo}
                  className="px-4 py-2 bg-brand-gradient text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
                >
                  <span>See Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
