import React, { useState } from 'react';
import videoInter from '../assets/images/candidate_video_interview_1792042392468.jpg'
import { 
  LayoutDashboard, 
  FileText, 
  Workflow, 
  UserCheck, 
  Play, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Layers, 
  Volume2, 
  ChevronRight,
  TrendingUp,
  BarChart3,
  Clock
} from 'lucide-react';

interface Props {
  onOpenDemo: () => void;
  onOpenScreeningSimulator: () => void;
}

export const PlatformWalkthrough: React.FC<Props> = ({ onOpenDemo, onOpenScreeningSimulator }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'create_job' | 'workflows' | 'candidate_view'>('dashboard');

  const handleTabChange = (tab: 'dashboard' | 'create_job' | 'workflows' | 'candidate_view') => {
    setActiveTab(tab);
  };

  return (
    <section id="walkthrough" className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3D38F5] bg-[#EEEDFF] px-3 py-1 rounded-full">
            Platform Walkthrough
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0E1330] mt-3 tracking-tight">
            From login to a job that <span className="text-brand-gradient">runs itself</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            See how recruiters configure autonomous hiring workflows, inspect candidate evidence, and review video interviews.
          </p>
        </div>

        {/* Tab Controls Bar */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 no-scrollbar">
          <button
            onClick={() => handleTabChange('dashboard')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'dashboard'
                ? 'bg-[#0E1330] text-white shadow-md'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>01. Pipeline Dashboard</span>
          </button>

          <button
            onClick={() => handleTabChange('create_job')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'create_job'
                ? 'bg-[#0E1330] text-white shadow-md'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>02. Job &amp; Precision Scoring</span>
          </button>

          <button
            onClick={() => handleTabChange('workflows')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'workflows'
                ? 'bg-[#0E1330] text-white shadow-md'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Workflow className="w-4 h-4" />
            <span>03. Autopilot Workflows</span>
          </button>

          <button
            onClick={() => handleTabChange('candidate_view')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'candidate_view'
                ? 'bg-[#0E1330] text-white shadow-md'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>04. Candidate 360 &amp; Video</span>
          </button>
        </div>

        {/* Tab Content Canvas */}
        <div className="mt-8 bg-[#0E1330] border border-slate-800 rounded-2xl p-4 sm:p-8 shadow-2xl text-slate-100 relative overflow-hidden">
          
          {/* Top Window Bar */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </span>
              <span className="font-mono text-slate-300 ml-2">app.candidhr.ai / console</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-white/10 text-slate-300 text-[11px] font-semibold">
                Autonomous Mode: ON
              </span>
            </div>
          </div>

          {/* TAB 1: PIPELINE DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-white">Live Recruitment Funnel</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">Real-time candidate movement across active hiring requisitions</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#4ADE9E] bg-[#12B886]/20 border border-[#12B886]/40 px-3 py-1 rounded-lg flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    +48% Screening Velocity
                  </span>
                </div>
              </div>

              {/* KPI Matrix */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#161C42] border border-white/10 rounded-xl p-4">
                  <span className="text-xs text-slate-400 block">Total Inbound</span>
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white tabular-nums">1,420</span>
                  <span className="text-[11px] text-slate-400 mt-1 block">From 12 job boards + 3B pool</span>
                </div>
                <div className="bg-[#161C42] border border-white/10 rounded-xl p-4">
                  <span className="text-xs text-slate-400 block">Screened by AI</span>
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#9F96FF] tabular-nums">1,420</span>
                  <span className="text-[11px] text-[#4ADE9E] mt-1 block">100% evaluated automatically</span>
                </div>
                <div className="bg-[#161C42] border border-white/10 rounded-xl p-4">
                  <span className="text-xs text-slate-400 block">Assessed &amp; Interviewed</span>
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white tabular-nums">142</span>
                  <span className="text-[11px] text-slate-400 mt-1 block">Completed video &amp; skills test</span>
                </div>
                <div className="bg-[#161C42] border-2 border-[#12B886]/50 rounded-xl p-4 bg-gradient-to-br from-[#161C42] to-[#12B886]/10">
                  <span className="text-xs text-[#4ADE9E] font-bold block">Interview-Ready Shortlist</span>
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white tabular-nums">28</span>
                  <span className="text-[11px] text-[#4ADE9E] mt-1 block">Recruiter time required: 4.5 hrs</span>
                </div>
              </div>

              {/* Funnel Graph Representation */}
              <div className="bg-[#161C42] border border-white/10 rounded-xl p-5 space-y-4">
                <div className="flex justify-between items-center text-xs font-semibold text-slate-300">
                  <span className="flex items-center gap-1.5"><BarChart3 className="w-4 h-4 text-[#3D38F5]" /> Stage Drop-off &amp; Quality Filtration</span>
                  <span className="text-slate-400">Zero manual recruiter phone screening</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">Sourced &amp; Applied</span>
                      <span className="text-white font-mono font-bold">1,420 candidates (100%)</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-white/40 w-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">Passed JD Precision Screening</span>
                      <span className="text-[#9F96FF] font-mono font-bold">284 candidates (20%)</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-gradient w-[20%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">Passed Role Assessments &amp; Coding Tests</span>
                      <span className="text-[#A9A6FF] font-mono font-bold">78 candidates (5.5%)</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#6C5CFF] w-[5.5%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">Recommended After AI Video Interview</span>
                      <span className="text-[#4ADE9E] font-mono font-bold">28 candidates (2.0%)</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#12B886] w-[2%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: AI JOB CREATION & PRECISION MATCHING */}
          {activeTab === 'create_job' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-white">Create a Job. Define Your Ideal Hire.</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">Job description generated by AI on the left · Precision resume score on the right</p>
                </div>
                <button
                  onClick={onOpenScreeningSimulator}
                  className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#3D38F5] rounded-lg hover:bg-[#2D28D6]"
                >
                  Test On Custom Role
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left Panel: Job Specs */}
                <div className="lg:col-span-6 bg-[#161C42] border border-white/10 rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-bold text-[#A9A6FF] uppercase font-mono">01 · AI-Generated Role Spec</span>
                    <span className="text-[11px] text-emerald-400">Ready to Publish</span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 block">Job Title</span>
                    <span className="text-sm font-bold text-white">Senior Sales Manager · Enterprise Accounts</span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs text-slate-400 block">Required Qualifications (Strict)</span>
                    <div className="space-y-1.5 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#12B886]" />
                        <span>5+ years direct B2B enterprise software sales</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#12B886]" />
                        <span>Demonstrated quota achievement &gt; $1.2M ARR</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#12B886]" />
                        <span>CRM mastery: Salesforce, HubSpot, Gong</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#12B886]" />
                        <span>Location: Mumbai / Pune (Hybrid)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel: Precision Resume Scoring */}
                <div className="lg:col-span-6 bg-[#161C42] border border-[#6C5CFF]/40 rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-bold text-[#A9A6FF] uppercase font-mono">02 · Precision Resume Match</span>
                    <span className="text-sm font-extrabold text-[#4ADE9E]">94% Match</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#3D38F5] font-bold text-xs flex items-center justify-center">
                      AS
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Ananya Sharma</div>
                      <div className="text-xs text-slate-400">Enterprise Account Manager (7 yrs exp)</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <span className="font-bold text-slate-300 block">Evidence Breakdown</span>
                    <div className="p-2.5 rounded-lg bg-white/5 space-y-1.5">
                      <div className="flex items-center gap-2 text-emerald-300">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>7 years B2B tech sales verified at SaaS leader</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-300">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>Closed $1.8M ARR in last fiscal year</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-300">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>Salesforce Administrator certified</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-start gap-2">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>Notice period is 60 days (target role prefers 30 days)</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: AUTOPILOT WORKFLOW BUILDER */}
          {activeTab === 'workflows' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-white">Let Hiring Workflows Run On Autopilot</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">Configure automated progression triggers without writing a single line of code</p>
                </div>
              </div>

              {/* Workflow Flowchart Representation */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                
                {/* Step 1 */}
                <div className="bg-[#161C42] border border-white/10 rounded-xl p-4 space-y-2">
                  <span className="text-[10px] font-mono text-[#9F96FF] block uppercase">Trigger</span>
                  <div className="text-sm font-bold text-white">New Application</div>
                  <p className="text-xs text-slate-400">Applicant applies on LinkedIn / job board or is invited from 3B pool.</p>
                  <div className="text-[11px] text-[#4ADE9E] bg-[#12B886]/10 px-2 py-1 rounded">
                    Action: Parse Resume Instantly
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-[#161C42] border border-white/10 rounded-xl p-4 space-y-2">
                  <span className="text-[10px] font-mono text-[#9F96FF] block uppercase">Condition</span>
                  <div className="text-sm font-bold text-white">Match &ge; 85%</div>
                  <p className="text-xs text-slate-400">If candidate exceeds match threshold with no red flags:</p>
                  <div className="text-[11px] text-[#A9A6FF] bg-[#3D38F5]/20 px-2 py-1 rounded">
                    Auto-send Coding Assessment
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-[#161C42] border border-white/10 rounded-xl p-4 space-y-2">
                  <span className="text-[10px] font-mono text-[#9F96FF] block uppercase">Assessment Passed</span>
                  <div className="text-sm font-bold text-white">Test Score &ge; 80%</div>
                  <p className="text-xs text-slate-400">Proctored test automatically evaluated &amp; score logged.</p>
                  <div className="text-[11px] text-[#4ADE9E] bg-[#12B886]/10 px-2 py-1 rounded">
                    Auto-schedule Video Interview
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-[#1E1B4B] border-2 border-[#12B886] rounded-xl p-4 space-y-2 shadow-lg">
                  <span className="text-[10px] font-mono text-[#4ADE9E] block uppercase font-bold">Outcome</span>
                  <div className="text-sm font-bold text-white">Shortlist Ready</div>
                  <p className="text-xs text-slate-300">Transcript, scores &amp; hiring verdict sent directly to Recruiter Slack / Email.</p>
                  <div className="text-[11px] text-white bg-[#12B886] px-2 py-1 rounded text-center font-bold">
                    Recruiter Notified
                  </div>
                </div>

              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between text-xs text-slate-300">
                <span>Save ~22 hours per open requisition with continuous autopilot progression.</span>
                <button
                  onClick={onOpenDemo}
                  className="text-white hover:text-[#9F96FF] font-semibold underline underline-offset-4 cursor-pointer"
                >
                  Configure for your ATS
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: CANDIDATE 360 & VIDEO INTERVIEW */}
          {activeTab === 'candidate_view' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-white">Get a Complete View of Every Candidate</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">Video replay, verbatim transcript, and AI hiring recommendation</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Left: Video Interview Frame with Image */}
                <div className="lg:col-span-6 bg-[#161C42] border border-white/10 rounded-xl overflow-hidden">
                  <div className="relative aspect-[4/3] bg-black">
                    <img
                      src={videoInter}
                      alt="Job candidate in automated video interview"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] text-white font-mono flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                      Answer 2 of 4 · 01:42 / 02:30
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-md p-3 rounded-lg border border-white/15">
                      <div className="text-[10px] text-[#A9A6FF] uppercase font-mono">Interview Prompt</div>
                      <div className="text-xs text-white font-medium">“Walk us through a critical incident where your team had to resolve an outage under pressure.”</div>
                    </div>
                  </div>

                  <div className="p-3 bg-[#0B0F27] flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-1.5"><Volume2 className="w-4 h-4 text-[#3D38F5]" /> Audio Clean · 0 Noise Anomalies</span>
                    <span className="text-slate-400">AI Proctor: Clean</span>
                  </div>
                </div>

                {/* Right: AI Analysis & Transcript */}
                <div className="lg:col-span-6 bg-[#161C42] border border-white/10 rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div>
                      <span className="font-heading font-bold text-base text-white">Ananya Sharma</span>
                      <span className="text-xs text-slate-400 block">Senior Enterprise Account Executive</span>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#12B886]/20 text-[#4ADE9E] border border-[#12B886]/40">
                      Recommendation: Advance to Offer Round
                    </span>
                  </div>

                  {/* Transcript Excerpt */}
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-300 uppercase font-mono">Transcript Excerpt</span>
                    <blockquote className="p-3 rounded-lg bg-white/5 text-xs text-slate-200 italic border-l-2 border-[#6C5CFF] leading-relaxed">
                      “When our enterprise client faced an escalation during quarterly renewals, I immediately mobilized our solutions engineering lead, scheduled an executive check-in within 3 hours, and renegotiated the multi-year SLA without concession on margin…”
                    </blockquote>
                  </div>

                  {/* Quantitative Scores */}
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                      <span className="text-slate-400 block text-[10px]">Communication</span>
                      <span className="font-bold text-white">4.8 / 5.0</span>
                    </div>
                    <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                      <span className="text-slate-400 block text-[10px]">Strategic Thinking</span>
                      <span className="font-bold text-white">4.6 / 5.0</span>
                    </div>
                    <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                      <span className="text-slate-400 block text-[10px]">Composure</span>
                      <span className="font-bold text-[#4ADE9E]">High</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={onOpenDemo}
                      className="w-full py-2.5 bg-brand-gradient hover:bg-brand-gradient-hover text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-[#3D38F5]/30 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Share Candidate Profile with Hiring Manager</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
