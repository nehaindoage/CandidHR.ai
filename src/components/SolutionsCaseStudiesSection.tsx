import React from 'react';
import { Building2, TrendingUp, GraduationCap, Briefcase, Rocket, ArrowRight, Quote } from 'lucide-react';

interface Props {
  onOpenDemo: () => void;
}

export const SolutionsCaseStudiesSection: React.FC<Props> = ({ onOpenDemo }) => {
  const solutions = [
    {
      title: 'Talent Acquisition Teams',
      description: 'Reclaim 80% of screening hours. Hand off pre-qualified candidates with verified skill evidence directly to hiring managers.',
      icon: Building2
    },
    {
      title: 'High-Volume Hiring',
      description: 'Process hundreds or thousands of applicants concurrently with zero drop in candidate experience or screening rigor.',
      icon: TrendingUp
    },
    {
      title: 'Campus & Early Career Hiring',
      description: 'Standardize testing and video evaluations across thousands of university graduates in structured batches.',
      icon: GraduationCap
    },
    {
      title: 'Staffing & Recruitment Agencies',
      description: 'Submit verified shortlists with candidate video clips in 24 hours to win more mandates and increase placement fees.',
      icon: Briefcase
    },
    {
      title: 'Startups & Growing Companies',
      description: 'Implement enterprise-grade hiring structure without hiring a massive recruitment operations team.',
      icon: Rocket
    }
  ];

  return (
    <section id="solutions" className="bg-[#F6F7FB] py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3D38F5] bg-[#EEEDFF] px-3 py-1 rounded-full">
            Tailored Solutions
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0E1330] mt-3 tracking-tight">
            Built for teams with <span className="text-brand-gradient">more applicants than time</span>
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Whether you hire 5 engineers a quarter or 500 associates a month, CandidHR adapts to your velocity.
          </p>
        </div>

        {/* 5 Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:shadow-md hover:border-[#6C5CFF]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#EEEDFF] text-[#3D38F5] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#0E1330] mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <button
                    onClick={onOpenDemo}
                    className="text-xs font-bold text-[#3D38F5] hover:text-[#2D28D6] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Quick CTA Card */}
          <div className="bg-brand-gradient text-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-white/80 font-mono">Custom Requirements</span>
              <h3 className="font-heading font-extrabold text-xl text-white mt-2">Have specialized role rubrics?</h3>
              <p className="text-xs text-white/90 mt-2 leading-relaxed">
                We configure bespoke evaluation rubrics, domain testing questions, and custom ATS workflows during your onboarding.
              </p>
            </div>
            <button
              onClick={onOpenDemo}
              className="mt-6 w-full py-2.5 bg-white text-[#0E1330] hover:bg-slate-100 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              Talk to a Solutions Architect
            </button>
          </div>
        </div>

        {/* Real Customer Case Study: Lumiverse Solutions */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3F8F1] text-[#0A7F5D] text-xs font-bold">
                <span>Customer Result · Lumiverse Solutions</span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0E1330] tracking-tight">
                “360 interviews. 25 qualified candidates. All in just 3 hours.”
              </h3>

              <blockquote className="text-slate-600 text-sm sm:text-base leading-relaxed italic border-l-2 border-[#3D38F5] pl-4">
                “Before CandidHR.ai, our recruiters spent weeks scheduling phone screens and weeding through mismatched candidates. 
                With CandidHR’s automated screening and video interviews, we processed 360 applicants in a single morning, 
                and our managers immediately sat down with the top 25 candidates.”
              </blockquote>

              <div className="pt-2">
                <div className="font-heading font-bold text-sm text-[#0E1330]">Amar Thakare</div>
                <div className="text-xs text-slate-500">CEO &amp; Managing Director, Lumiverse Solutions</div>
              </div>
            </div>

            {/* Right Side Team Collaboration Photo */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src="/src/assets/images/hr_team_collaboration_1792042394052.jpg"
                alt="HR team collaborating over hiring shortlist"
                className="w-full h-64 sm:h-72 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1330]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-mono text-[#4ADE9E] block">Outcome Delivered</span>
                <span className="font-heading font-bold text-base block mt-0.5">85% Reduction in Time-to-Hire</span>
              </div>
            </div>

          </div>
        </div>

        {/* CEO Quote Banner */}
        <div className="bg-[#0E1330] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Quote className="w-10 h-10 text-[#6C5CFF] mx-auto opacity-60" />
            <p className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight leading-snug">
              “If your team spends 90% of its time dealing with hiring noise and only 10% talking to quality candidates, the process is backwards.”
            </p>
            <p className="text-xs sm:text-sm text-slate-300">
              Your recruiters shouldn’t have to interview 20 people to discover that 15 were never qualified. 
              CandidHR.ai moves screening, assessments and first interviews earlier — and automates them — so recruiter time goes to the conversations that decide a hire.
            </p>
            <div className="pt-2 text-xs text-[#A9A6FF] font-mono">
              <strong className="text-white font-heading font-bold">Om Maurya</strong> · Founder &amp; CEO, CandidHR.ai
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
