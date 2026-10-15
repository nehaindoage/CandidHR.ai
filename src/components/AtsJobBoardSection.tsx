import React, { useState } from 'react';
import { Search, CheckCircle2, ArrowRight, Share2, Layers } from 'lucide-react';

interface Props {
  onOpenDemo: () => void;
}

export const AtsJobBoardSection: React.FC<Props> = ({ onOpenDemo }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const keyAts = [
    'Greenhouse', 'Lever', 'Workday', 'Ashby', 
    'BambooHR', 'Bullhorn', 'Darwinbox', 'iCIMS', 
    'Keka', 'SmartRecruiters', 'Workable', 'Zoho Recruit'
  ];

  const keyBoards = [
    'LinkedIn', 'Indeed', 'Glassdoor', 'Google for Jobs', 
    'ZipRecruiter', 'Naukri', 'Talent.com', 'Dice'
  ];

  const filteredAts = keyAts.filter(item => 
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="ats-integrations" className="bg-[#F6F7FB] py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Shorter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#3D38F5] bg-[#EEEDFF] px-3 py-1 rounded-full">
              Zero Workflow Disruption
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0E1330] mt-2 tracking-tight">
              ATS &amp; Job Board Integration. <span className="text-brand-gradient">153 Supported.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Keep your existing ATS. CandidHR works alongside your tools and distributes to 1,000+ boards.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your ATS..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-[#3D38F5] shadow-2xs"
            />
          </div>
        </div>

        {/* Compact Single-Row Badges Layout */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
          
          {/* Row 1: Supported ATS Connectors */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-3">
              <span className="flex items-center gap-1.5 font-heading">
                <Share2 className="w-4 h-4 text-[#3D38F5]" /> Native Bi-Directional ATS Sync
              </span>
              <span className="text-[#3D38F5] font-mono text-[11px]">153 Connectors Total</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {filteredAts.map((ats) => (
                <span
                  key={ats}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F6F7FB] border border-slate-200/90 text-xs font-bold text-[#0E1330] hover:border-[#3D38F5] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#12B886]" />
                  {ats}
                </span>
              ))}
              <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-100 text-slate-500 text-xs font-semibold">
                +141 more
              </span>
            </div>
          </div>

          {/* Row 2: 1,000+ Job Boards (Powered by Kerbo) */}
          <div className="pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-3">
              <span className="flex items-center gap-1.5 font-heading">
                <Layers className="w-4 h-4 text-[#12B886]" /> Post Once, Distribute Everywhere (Powered by Kerbo)
              </span>
              <span className="text-[#12B886] font-mono text-[11px]">1,000+ Job Boards Worldwide</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {keyBoards.map((board) => (
                <span
                  key={board}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FAF9FF] border border-[#6C5CFF]/20 text-xs font-medium text-slate-800"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#3D38F5]" />
                  {board}
                </span>
              ))}
              <span className="inline-flex items-center px-3 py-1 rounded-lg bg-slate-50 text-slate-500 text-xs">
                + niche aggregators &amp; social feeds
              </span>
            </div>
          </div>

          {/* Shorter Footer bar */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-500">Includes automatic candidate deduplication and webhook synchronization.</span>
            <button
              onClick={onOpenDemo}
              className="text-[#3D38F5] hover:text-[#2D28D6] font-bold flex items-center gap-1 cursor-pointer"
            >
              <span>Verify your internal stack in a demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
