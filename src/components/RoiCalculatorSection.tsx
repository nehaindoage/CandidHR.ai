import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface Props {
  onOpenDemoWithSpecs: (volume: string) => void;
}

export const RoiCalculatorSection: React.FC<Props> = ({ onOpenDemoWithSpecs }) => {
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <section id="pricing" className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Concise Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3D38F5] bg-[#EEEDFF] px-3 py-1 rounded-full">
            Transparent Subscription Plans
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0E1330] mt-3 tracking-tight">
            Plans built to <span className="text-brand-gradient">scale with your hiring</span>
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Try resume screening and video interviews on a real role for free, or scale across your entire talent pipeline.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 p-1 bg-slate-100 rounded-xl mt-6 border border-slate-200">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                !annualBilling ? 'bg-white text-[#0E1330] shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                annualBilling ? 'bg-[#0E1330] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] font-extrabold text-[#4ADE9E] bg-[#12B886]/20 px-1.5 py-0.5 rounded">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Streamlined Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Free Tier */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-heading font-bold text-lg text-[#0E1330]">Free</h3>
                <span className="text-xs text-slate-400 font-mono">Proof of Value</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Try resume screening &amp; video interviews on a real open role.</p>
              
              <div className="mt-5 mb-6">
                <span className="font-heading font-extrabold text-3xl text-[#0E1330]">$0</span>
                <span className="text-xs text-slate-400 ml-1">/ forever</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-600 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#12B886] shrink-0" /> 1 Active Job Requisition</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#12B886] shrink-0" /> AI Resume Screening &amp; Ranking</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#12B886] shrink-0" /> Automated Video Interviews</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#12B886] shrink-0" /> Standard Aptitude Assessments</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#12B886] shrink-0" /> Reason-Backed Fit Scores</li>
              </ul>
            </div>

            <button
              onClick={() => onOpenDemoWithSpecs('Free Plan Request')}
              className="mt-6 w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-[#0E1330] rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              Get Started Free
            </button>
          </div>

          {/* Growth Tier (Most Popular) */}
          <div className="bg-white border-2 border-[#3D38F5] rounded-2xl p-6 shadow-xl relative flex flex-col justify-between">
            <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-brand-gradient text-white text-[10px] font-extrabold uppercase tracking-wider">
              Most Popular
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-heading font-bold text-lg text-[#0E1330]">Growth</h3>
                <span className="text-xs text-[#3D38F5] font-mono font-bold">Growing Teams</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">For talent teams and recruitment agencies hiring every month.</p>
              
              <div className="mt-5 mb-6">
                <span className="font-heading font-extrabold text-3xl text-[#0E1330]">
                  ${annualBilling ? '399' : '499'}
                </span>
                <span className="text-xs text-slate-400 ml-1">/ month</span>
                {annualBilling && (
                  <span className="text-[11px] text-[#0A7F5D] block font-semibold mt-0.5">
                    Billed annually ($4,788/yr)
                  </span>
                )}
              </div>

              <ul className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2 font-medium"><Check className="w-3.5 h-3.5 text-[#12B886] shrink-0" /> Up to 10 Active Jobs concurrently</li>
                <li className="flex items-center gap-2 font-medium"><Check className="w-3.5 h-3.5 text-[#12B886] shrink-0" /> Unlimited AI Resume Screening</li>
                <li className="flex items-center gap-2 font-medium"><Check className="w-3.5 h-3.5 text-[#12B886] shrink-0" /> Proctored Technical &amp; Coding Tests</li>
                <li className="flex items-center gap-2 font-medium"><Check className="w-3.5 h-3.5 text-[#12B886] shrink-0" /> Video Transcripts &amp; Hiring Recommendations</li>
                <li className="flex items-center gap-2 font-medium"><Check className="w-3.5 h-3.5 text-[#12B886] shrink-0" /> Standard ATS Sync &amp; Webhooks</li>
              </ul>
            </div>

            <button
              onClick={() => onOpenDemoWithSpecs('Growth Plan Request')}
              className="mt-6 w-full py-2.5 bg-brand-gradient hover:bg-brand-gradient-hover text-white rounded-xl text-xs font-bold shadow-md shadow-[#3D38F5]/30 transition-all cursor-pointer"
            >
              Start Growth Trial
            </button>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-[#0E1330] text-white border border-white/10 rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-heading font-bold text-lg text-white">Enterprise</h3>
                <span className="text-xs text-[#9F96FF] font-mono">Full Scale</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">Premium reach: 3B talent pool, white label, and custom workflows.</p>
              
              <div className="mt-5 mb-6">
                <span className="font-heading font-extrabold text-3xl text-white">Custom</span>
                <span className="text-xs text-slate-400 ml-1">/ tailored to volume</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300 border-t border-white/10 pt-5">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#4ADE9E] shrink-0" /> 3B Candidate Talent Pool &amp; DeepSearch</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#4ADE9E] shrink-0" /> Autonomous Candidate Auto-Invite</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#4ADE9E] shrink-0" /> 153 ATS Bi-directional Connectors</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#4ADE9E] shrink-0" /> 1,000+ Job Boards (Kerbo Multi-Post)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#4ADE9E] shrink-0" /> WhatsApp Integration &amp; White Labelling</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#4ADE9E] shrink-0" /> Dedicated Account Manager &amp; Custom SLA</li>
              </ul>
            </div>

            <button
              onClick={() => onOpenDemoWithSpecs('Enterprise Plan Inquiry')}
              className="mt-6 w-full py-2.5 bg-white text-[#0E1330] hover:bg-slate-100 rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              Contact Enterprise Sales
            </button>
          </div>

        </div>

        {/* Security & Guarantee Note */}
        <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#12B886]" />
          <span>SOC 2 Type II certified · No long-term lock-in · Cancel anytime</span>
        </div>

      </div>
    </section>
  );
};
