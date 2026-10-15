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
  Bot,
  UserCheck
} from 'lucide-react';

interface Props {
  onOpenDemo: () => void;
}

export const HowItWorksSection: React.FC<Props> = ({ onOpenDemo }) => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      step: '01',
      title: 'Source',
      subtitle: 'Bring the right candidates to the job',
      description: 'Create a job in seconds with an AI-written description. CandidHR.ai automatically invites the best-matched profiles from a 3B talent pool alongside active job board applicants.',
      actor: 'AI Automated',
      icon: Users,
      chips: ['Jobs in seconds', 'AI job descriptions', 'Auto-invite matches', '3B talent pool', 'Deep Search', 'Job portals'],
      keyTakeaway: 'Stop waiting for candidates to find you — invite top matches immediately.'
    },
    {
      step: '02',
      title: 'Screen',
      subtitle: 'Match candidates to the job, not just keywords',
      description: 'Every resume is parsed and evaluated against your exact role criteria — required skills, years of experience, domain knowledge, and deal-breaker questions.',
      actor: 'AI Automated',
      icon: FileSearch,
      chips: ['Resume screening & ranking', 'Bulk resume upload', 'AI JD matching', 'Reason-backed match score', 'Red-flag detection'],
      keyTakeaway: 'No black-box scoring. Every candidate match explains why they fit.'
    },
    {
      step: '03',
      title: 'Assess',
      subtitle: 'Test what the resume can’t prove',
      description: 'Candidates who pass initial screening take role-relevant assessments on their own schedule. Supported tests include coding, domain skills, aptitude, and communication with AI proctoring.',
      actor: 'AI Automated',
      icon: CheckSquare,
      chips: ['Technical & coding tests', 'Aptitude tests', 'Domain skills', 'AI proctoring', 'Instant auto-scoring'],
      keyTakeaway: 'A resume tells you what they claim. An assessment proves what they can do.'
    },
    {
      step: '04',
      title: 'Interview',
      subtitle: 'Automated video interviews on their schedule',
      description: 'Candidates record answers to role-specific questions. CandidHR.ai transcribes each response, scores communication and relevance, and provides an AI hiring recommendation.',
      actor: 'AI Automated',
      icon: Video,
      chips: ['Self-paced video interview', 'Red-flag questions', 'Real-time transcription', 'Communication & logic score', 'AI recommendation'],
      keyTakeaway: 'The first round happens 24/7 without recruiter calendar gymnastics.'
    },
    {
      step: '05',
      title: 'Shortlist',
      subtitle: 'One ranked view with complete evidence',
      description: 'Resume fit, assessment test scores, and video interview analysis merge into a unified candidate ranking. Recruiters and hiring managers review the top 10 and make the hire.',
      actor: 'Your Team Decides',
      icon: Award,
      chips: ['Ranked shortlist', 'Candidate 360 profile', 'Shareable hiring manager links', 'Interview scheduling', 'ATS export'],
      keyTakeaway: 'AI does the heavy evaluation. Your team spends time on final-round conversations.'
    }
  ];

  return (
    <section id="how-it-works" className="bg-[#F6F7FB] text-slate-900 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
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

        {/* Interactive 5-Stage Step Showcase */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-[#3D38F5] tracking-wider uppercase">Interactive Pipeline</span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0E1330] mt-0.5">
                5 Stages from Job Creation to Shortlist
              </h3>
            </div>
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3D38F5] hover:text-[#2D28D6] bg-[#EEEDFF] hover:bg-[#D9D6FF] px-3.5 py-2 rounded-xl transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span>See Demo on Your Jobs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Stage Tabs Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-6">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStage === idx;
              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStage(idx)}
                  className={`flex flex-col items-start p-3.5 rounded-xl border transition-all text-left cursor-pointer ${
                    isActive
                      ? 'bg-[#0E1330] text-white border-[#0E1330] shadow-md shadow-slate-900/10'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#9F96FF]' : 'text-slate-400'}`}>
                      {stage.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#4ADE9E]' : 'text-[#3D38F5]'}`} />
                  </div>
                  <span className="font-heading font-bold text-sm">{stage.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Panel */}
          <div className="mt-8 bg-[#F6F7FB] border border-slate-200 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#3D38F5] text-white">
                    Step {stages[activeStage].step}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {stages[activeStage].actor}
                  </span>
                </div>

                <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0E1330]">
                  {stages[activeStage].subtitle}
                </h4>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {stages[activeStage].description}
                </p>

                {/* Capability Chips */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                    Included capabilities
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {stages[activeStage].chips.map((chip) => (
                      <span
                        key={chip}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
                      >
                        <Check className="w-3.5 h-3.5 text-[#12B886]" />
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-xs font-semibold text-[#0A7F5D] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#12B886]" />
                  <span>{stages[activeStage].keyTakeaway}</span>
                </div>
              </div>

              {/* Right Side Stage Visual Card */}
              <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-600 uppercase font-mono">Stage Preview</span>
                  <span className="text-xs font-semibold text-[#12B886] bg-[#E3F8F1] px-2 py-0.5 rounded-full">Active</span>
                </div>

                {activeStage === 0 && (
                  <div className="space-y-3 text-xs">
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="text-slate-500">Target Role</div>
                      <div className="font-bold text-slate-900 text-sm">Senior Data Engineer</div>
                      <div className="text-slate-500 mt-1">Location: Bengaluru · Remote Eligible</div>
                    </div>
                    <div className="p-3 bg-[#EEEDFF] border border-[#6C5CFF]/30 rounded-lg">
                      <div className="font-bold text-[#3D38F5]">Auto-Invite Active</div>
                      <div className="text-slate-700 mt-0.5">Inviting top 50 matches from 3B global candidates.</div>
                    </div>
                  </div>
                )}

                {activeStage === 1 && (
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between font-bold text-slate-800">
                      <span>Resume Screening Progress</span>
                      <span>412 / 500 screened</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#3D38F5] h-full rounded-full w-[82%]" />
                    </div>
                    <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 mt-2">
                      <div className="font-bold">Deal-breaker Check: Passed</div>
                      <div>Required 5+ yrs B2B and enterprise accounts verified.</div>
                    </div>
                  </div>
                )}

                {activeStage === 2 && (
                  <div className="space-y-2 text-xs">
                    <div className="font-bold text-slate-800 mb-2">Automated Skill Scores</div>
                    <div className="space-y-1.5">
                      <div className="flex justify-between"><span>Python Data Engineering</span><span className="font-bold">91%</span></div>
                      <div className="flex justify-between"><span>SQL &amp; Query Optimization</span><span className="font-bold">88%</span></div>
                      <div className="flex justify-between"><span>Data Modeling &amp; Architecture</span><span className="font-bold">82%</span></div>
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[#0A7F5D] font-medium">
                      <span>AI Proctoring: Verified</span>
                      <Check className="w-4 h-4" />
                    </div>
                  </div>
                )}

                {activeStage === 3 && (
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 bg-[#0E1330] text-white rounded-lg">
                      <span className="text-[10px] text-[#A9A6FF] font-mono block">Video Interview Question</span>
                      <p className="font-medium text-xs mt-0.5 italic">“Tell us about a time you optimized a critical failing pipeline.”</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-center pt-1">
                      <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg">
                        <span className="text-[10px] text-slate-500 block">Communication</span>
                        <span className="font-bold text-slate-800">4.7 / 5</span>
                      </div>
                      <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg">
                        <span className="text-[10px] text-slate-500 block">Answer Structure</span>
                        <span className="font-bold text-slate-800">Strong (STAR)</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStage === 4 && (
                  <div className="space-y-2 text-xs">
                    <div className="p-3 bg-white border-2 border-[#12B886] rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-900 text-sm">#1 Rhea Kapoor</span>
                        <span className="text-xs font-bold text-[#12B886] bg-[#E3F8F1] px-2 py-0.5 rounded">96% Match</span>
                      </div>
                      <p className="text-slate-600 text-xs mt-1">Recommended for final recruiter conversation.</p>
                      <button
                        onClick={onOpenDemo}
                        className="mt-2 w-full py-1.5 bg-[#0E1330] text-white rounded-md font-bold text-xs hover:bg-[#3D38F5] transition-colors"
                      >
                        Schedule Interview
                      </button>
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
