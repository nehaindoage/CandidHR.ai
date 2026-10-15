import React from 'react';
import { Search, Globe2, Sparkles, UserPlus, CheckCircle2, ArrowRight } from 'lucide-react';
import globalTalent from '../assets/images/global_talent_network_1792042392492.jpg'

interface Props {
  onOpenDemo: () => void;
}

export const TalentSourcingSection: React.FC<Props> = ({ onOpenDemo }) => {
  return (
    <section id="sourcing" className="bg-[#F6F7FB] py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3D38F5] bg-[#EEEDFF] px-3 py-1 rounded-full">
              AI Candidate Sourcing · 3B Talent Pool
            </span>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0E1330] tracking-tight text-balance">
              No applicants yet? <span className="text-brand-gradient block">Bring the right people in.</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Don’t wait weeks hoping qualified candidates stumble upon your job post. 
              CandidHR.ai scours an active global talent pool of <strong className="text-slate-900 font-semibold">3 billion candidates</strong>, 
              surfaces exact-match profiles, and automatically invites them to apply and screen.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E3F8F1] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#12B886]" />
                </div>
                <div>
                  <strong className="text-[#0E1330] font-bold block">DeepSearch Natural Language Query</strong>
                  <span className="text-slate-600 text-xs">Search profiles using human requirements, e.g. “Senior Data Engineer with Snowflake and streaming Kafka experience in APAC”.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E3F8F1] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#12B886]" />
                </div>
                <div>
                  <strong className="text-[#0E1330] font-bold block">Auto-Invite While You Sleep</strong>
                  <span className="text-slate-600 text-xs">Specify how many best-fit candidates to invite (e.g. 25, 50, or 100). CandidHR sends personalized outreach and tracks replies.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E3F8F1] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#12B886]" />
                </div>
                <div>
                  <strong className="text-[#0E1330] font-bold block">Integrated Career Portals &amp; Job Boards</strong>
                  <span className="text-slate-600 text-xs">Post once to 1,000+ job boards while tapping into passive candidate communities worldwide.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-brand-gradient hover:bg-brand-gradient-hover rounded-xl shadow-lg shadow-[#3D38F5]/25 transition-all cursor-pointer"
              >
                <span>Request Talent Pool Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase featuring generated image */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              <img
                src={globalTalent}
                alt="Global 3B candidate talent network visualization"
                className="w-full h-64 sm:h-72 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1330] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#A9A6FF]">DeepSearch Query Console</span>
                <div className="bg-[#0E1330]/90 backdrop-blur-md border border-white/20 rounded-xl p-3 mt-1.5 flex items-center gap-3">
                  <Search className="w-4 h-4 text-[#9F96FF] shrink-0" />
                  <span className="text-xs text-slate-200 truncate">
                    “Find senior architects with 7+ yrs distributed systems &amp; AWS in Mumbai”
                  </span>
                  <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded bg-[#12B886] text-white whitespace-nowrap">
                    2,410 Matches
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Sourcing Metrics Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
                <span className="text-xs text-slate-500 block">Talent Pool Reach</span>
                <span className="font-heading font-extrabold text-2xl text-[#0E1330]">3,000,000,000+</span>
                <span className="text-[11px] text-slate-500 mt-0.5 block">Candidates indexed worldwide</span>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
                <span className="text-xs text-slate-500 block">Outreach Conversion</span>
                <span className="font-heading font-extrabold text-2xl text-[#12B886]">42% Apply Rate</span>
                <span className="text-[11px] text-slate-500 mt-0.5 block">Compared to 8% cold InMail</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
