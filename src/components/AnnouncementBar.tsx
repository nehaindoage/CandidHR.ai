import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface Props {
  onOpenDemo: () => void;
}

export const AnnouncementBar: React.FC<Props> = ({ onOpenDemo }) => {
  return (
    <div className="bg-[#0B0F27] border-b border-white/10 text-slate-300 text-xs py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#3D38F5]/30 text-[#9F96FF] font-semibold text-[11px] border border-[#6C5CFF]/30">
          <Sparkles className="w-3 h-3 text-[#9F96FF]" />
          New
        </span>
        <span className="hidden sm:inline">
          Create a job in seconds — CandidHR.ai auto-invites and screens best matches from a 3B talent pool.
        </span>
        <span className="sm:hidden">
          Auto-invite &amp; screen matches from 3B talent pool.
        </span>
        <button
          onClick={onOpenDemo}
          className="inline-flex items-center gap-1 font-semibold text-white underline underline-offset-4 hover:text-[#9F96FF] transition-colors ml-1 cursor-pointer"
        >
          Book a demo
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
