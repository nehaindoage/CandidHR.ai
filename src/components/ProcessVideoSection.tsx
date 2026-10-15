import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, CheckCircle2, ChevronRight, ArrowRight, RotateCcw } from 'lucide-react';

interface Props {
  onOpenDemo: () => void;
  onOpenScreeningSimulator: () => void;
}

export const ProcessVideoSection: React.FC<Props> = ({ onOpenDemo, onOpenScreeningSimulator }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeChapter, setActiveChapter] = useState(1);
  const [progressPercent, setProgressPercent] = useState(38);

  const chapters = [
    { id: 0, time: '0:00', title: '01. Job Created & AI JD' },
    { id: 1, time: '0:45', title: '02. 3B Sourcing & Invites' },
    { id: 2, time: '1:30', title: '03. Precision Resume Screening' },
    { id: 3, time: '2:15', title: '04. Proctored Coding Assessment' },
    { id: 4, time: '2:45', title: '05. Video Interview Verdict' }
  ];

  // Auto-progress simulation when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgressPercent((prev) => {
        const next = prev >= 100 ? 0 : prev + 1;
        // Map progress to chapter
        if (next < 20) setActiveChapter(0);
        else if (next < 45) setActiveChapter(1);
        else if (next < 70) setActiveChapter(2);
        else if (next < 90) setActiveChapter(3);
        else setActiveChapter(4);
        return next;
      });
    }, 450);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleSelectChapter = (id: number) => {
    setActiveChapter(id);
    const mappedPercent = id * 22;
    setProgressPercent(mappedPercent);
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3D38F5] bg-[#EEEDFF] px-3 py-1 rounded-full">
            Video Demonstration
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0E1330] mt-3 tracking-tight">
            See the AI hiring process <span className="text-brand-gradient">in action</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            Watch how a single open requisition moves autonomously from job creation to a verified shortlist in under 3 minutes.
          </p>
        </div>

        {/* Video Player Console */}
        <div className="max-w-5xl mx-auto bg-[#0E1330] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden text-white">
          
          {/* Top Window Bar */}
          <div className="px-5 py-3.5 bg-[#0B0F27] border-b border-white/10 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-heading font-bold text-white text-xs">CandidHR Process Reel</span>
              <span className="text-white/20">|</span>
              <span className="font-mono text-[11px] text-slate-400">4K Recruiter Simulation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#3D38F5]/20 text-[#9F96FF] font-semibold text-[11px]">
                Full Autonomous Loop
              </span>
            </div>
          </div>

          {/* Interactive Screen Display */}
          <div className="relative aspect-[16/9] bg-gradient-to-br from-[#161C42] via-[#0E1330] to-[#0B0F27] flex flex-col justify-between p-6 sm:p-10 overflow-hidden group">
            
            {/* Dynamic Stage Backdrop Simulation */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#6C5CFF] rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#3D38F5] rounded-full blur-3xl" />
            </div>

            {/* Stage Tag Overlay */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-xs font-semibold text-white">
                <Sparkles className="w-3.5 h-3.5 text-[#4ADE9E]" />
                <span>{chapters[activeChapter].title}</span>
              </div>
              <span className="text-xs font-mono text-slate-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                0{Math.floor(progressPercent * 0.03)}:{String(Math.floor((progressPercent * 1.8) % 60)).padStart(2, '0')} / 03:00
              </span>
            </div>

            {/* Center Dynamic Graphic Showcase */}
            <div className="relative z-10 my-auto max-w-xl mx-auto w-full">
              {activeChapter === 0 && (
                <div className="bg-[#161C42]/90 border border-white/15 rounded-2xl p-6 backdrop-blur-md shadow-xl text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-[#3D38F5]/20 text-[#9F96FF] flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-extrabold text-xl text-white">Step 1: Role Published &amp; AI JD Synthesized</h4>
                  <p className="text-xs text-slate-300">Target: Senior Data Engineer · Hybrid Bengaluru · Stack: Python, Snowflake, AWS</p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12B886]/20 text-[#4ADE9E] text-xs font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Criteria Set Automatically
                  </div>
                </div>
              )}

              {activeChapter === 1 && (
                <div className="bg-[#161C42]/90 border border-white/15 rounded-2xl p-6 backdrop-blur-md shadow-xl text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-[#6C5CFF]/20 text-[#A9A6FF] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-extrabold text-xl text-white">Step 2: Sourcing 3B Global Candidates</h4>
                  <p className="text-xs text-slate-300">Auto-invited top 50 matches matching seniority, tech stack, and location requirements.</p>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden max-w-xs mx-auto">
                    <div className="bg-brand-gradient h-full rounded-full w-[78%]" />
                  </div>
                  <span className="text-[11px] text-[#A9A6FF] font-mono">38 responses received in 24 hours</span>
                </div>
              )}

              {activeChapter === 2 && (
                <div className="bg-[#161C42]/90 border border-white/15 rounded-2xl p-6 backdrop-blur-md shadow-xl text-center space-y-3 animate-fadeIn">
                  <h4 className="font-heading font-extrabold text-xl text-white">Step 3: Precision Resume Match &amp; Gap Detection</h4>
                  <div className="grid grid-cols-2 gap-3 text-left text-xs pt-1">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                      <strong>96% Match: Rhea Kapoor</strong>
                      <div className="text-[11px] text-slate-300 mt-0.5">8 yrs enterprise Python/AWS verified.</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300">
                      <strong>Flag Filtered: 4 Candidates</strong>
                      <div className="text-[11px] text-slate-300 mt-0.5">Notice period exceeded 90 days.</div>
                    </div>
                  </div>
                </div>
              )}

              {activeChapter === 3 && (
                <div className="bg-[#161C42]/90 border border-white/15 rounded-2xl p-6 backdrop-blur-md shadow-xl text-center space-y-3 animate-fadeIn">
                  <h4 className="font-heading font-extrabold text-xl text-white">Step 4: AI-Proctored Coding &amp; Skills Testing</h4>
                  <p className="text-xs text-slate-300">Hands-on SQL query optimization and Python data modeling benchmarks.</p>
                  <div className="flex justify-center gap-4 text-xs font-mono font-bold">
                    <span className="text-[#4ADE9E]">SQL: 88%</span>
                    <span className="text-[#4ADE9E]">Python: 91%</span>
                    <span className="text-[#4ADE9E]">Architecture: 86%</span>
                  </div>
                  <span className="text-[11px] text-slate-400 block">Proctor status: 100% clean verified environment</span>
                </div>
              )}

              {activeChapter === 4 && (
                <div className="bg-[#161C42]/90 border border-[#12B886]/50 rounded-2xl p-6 backdrop-blur-md shadow-xl text-center space-y-3 animate-fadeIn">
                  <h4 className="font-heading font-extrabold text-xl text-white">Step 5: Automated Video Interview &amp; Shortlist</h4>
                  <p className="text-xs text-slate-300">Responses transcribed, communication scored 4.7/5, full evidence ready for recruiter.</p>
                  <button
                    onClick={onOpenDemo}
                    className="px-5 py-2 rounded-xl bg-brand-gradient text-white text-xs font-bold shadow-md hover:scale-105 transition-transform"
                  >
                    View Shortlist &amp; Book Demo
                  </button>
                </div>
              )}
            </div>

            {/* Video Controls Bar Overlay */}
            <div className="relative z-10 bg-black/75 backdrop-blur-md border border-white/15 p-3 rounded-2xl flex flex-col gap-2">
              
              {/* Progress Scrubber */}
              <div
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pos = (e.clientX - rect.left) / rect.width;
                  setProgressPercent(Math.round(pos * 100));
                }}
                className="w-full bg-white/20 h-1.5 rounded-full cursor-pointer relative overflow-hidden group/bar"
              >
                <div
                  className="bg-brand-gradient h-full rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1.5 text-white hover:text-[#9F96FF] transition-colors cursor-pointer"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                  </button>

                  <button
                    onClick={() => {
                      setProgressPercent(0);
                      setActiveChapter(0);
                      setIsPlaying(true);
                    }}
                    className="p-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Replay from start"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                    Interactive Walkthrough
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={onOpenScreeningSimulator}
                    className="text-[11px] font-bold text-[#A9A6FF] hover:text-white px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    Try Interactive Simulator
                  </button>
                  <button
                    onClick={onOpenDemo}
                    className="px-3 py-1 bg-brand-gradient text-white rounded-lg font-bold text-[11px] shadow-sm hover:opacity-90"
                  >
                    Book Full Demo
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Chapters Navigation Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 border-t border-white/10 bg-[#0B0F27] text-xs">
            {chapters.map((ch) => {
              const isActive = activeChapter === ch.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => handleSelectChapter(ch.id)}
                  className={`p-3 text-left border-r border-white/5 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white/10 text-white font-bold border-b-2 border-b-[#3D38F5]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="font-mono text-[10px] text-slate-500">{ch.time}</div>
                  <div className="truncate mt-0.5">{ch.title}</div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
