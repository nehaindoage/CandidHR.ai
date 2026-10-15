import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface Props {
  onOpenDemo: () => void;
}

export const FaqSection: React.FC<Props> = ({ onOpenDemo }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Exactly 5 concise, high-priority questions as requested
  const faqs = [
    {
      q: 'What is CandidHR.ai?',
      a: 'CandidHR.ai is AI recruitment software that sources, screens, assesses, and interviews candidates before your team’s first round. It invites best-matched candidates from a 3B talent pool, matches resumes against role requirements, conducts proctored assessments and automated video interviews, and presents recruiters with a ranked shortlist of candidates worth talking to.'
    },
    {
      q: 'How does AI resume screening work?',
      a: 'You upload resumes in bulk or collect applications from connected job boards. CandidHR.ai compares each resume against your exact job criteria (experience, required skills, domain knowledge, deal-breaker questions), produces an explainable match score, and pinpoints where candidates meet requirements or have gaps. No black-box scores.'
    },
    {
      q: 'How does the automated AI video interview work?',
      a: 'Candidates record answers to role-specific questions on their own schedule 24/7. CandidHR.ai transcribes each response in real time, scores communication and answer structure (e.g. STAR method), and provides an explicit hiring recommendation. Recruiters can watch full clips or jump straight to key highlights.'
    },
    {
      q: 'How is CandidHR.ai different from a traditional ATS?',
      a: 'A traditional ATS tracks applicants through pipeline stages. CandidHR.ai performs the actual pre-interview evaluation work — sourcing passive candidates, screening resumes, running assessments, and conducting first-round interviews. It connects seamlessly with 153 ATS platforms (including Greenhouse, Lever, Workday, and Ashby).'
    },
    {
      q: 'Does CandidHR.ai replace recruiters?',
      a: 'No. It automates repetitive manual screening, phone tag, and initial filtering. Recruiters review the shortlist with verified evidence, lead the strategic final-round interviews, and make every hiring decision. People decide.'
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3D38F5] bg-[#EEEDFF] px-3 py-1 rounded-full">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-[#0E1330] mt-3 tracking-tight">
            Questions recruiters ask us
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Five core things to know before deploying autonomous screening on your jobs.
          </p>
        </div>

        {/* 5 Accordion Items */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-[#0E1330]">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'bg-[#EEEDFF] text-[#3D38F5] rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#FAF9FF]/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-[#F6F7FB] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <span className="font-bold text-[#0E1330] block">Have a specific ATS or workflow requirement?</span>
            <span className="text-slate-500">Ask our hiring engineers during a live interactive walkthrough.</span>
          </div>
          <button
            onClick={onOpenDemo}
            className="px-4 py-2 bg-[#0E1330] hover:bg-[#161C42] text-white font-bold rounded-xl whitespace-nowrap cursor-pointer transition-colors"
          >
            Ask in Live Demo
          </button>
        </div>

      </div>
    </section>
  );
};
