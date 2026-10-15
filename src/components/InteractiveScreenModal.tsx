import React, { useState, useEffect } from 'react';
import { X, Play, CheckCircle2, AlertCircle, Sparkles, Filter, ChevronRight, Award, Video, FileSearch } from 'lucide-react';
import { CandidateScore } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemo: () => void;
}

export const InteractiveScreenModal: React.FC<Props> = ({ isOpen, onClose, onOpenDemo }) => {
  const [selectedRole, setSelectedRole] = useState('Senior Data Engineer');
  const [loading, setLoading] = useState(false);
  const [candidates, setCandidates] = useState<CandidateScore[]>([]);
  const [selectedCandidate, setSelectedCandidate] = useState<CandidateScore | null>(null);

  const presetRoles = [
    { title: 'Senior Data Engineer', skills: ['Python', 'AWS', 'Snowflake', 'SQL'] },
    { title: 'Enterprise Account Executive', skills: ['B2B Sales', 'Salesforce', 'Enterprise SLA', 'Quota'] },
    { title: 'Full Stack Tech Lead', skills: ['React', 'TypeScript', 'Node.js', 'System Architecture'] },
    { title: 'ML / AI Platform Engineer', skills: ['PyTorch', 'Vector DBs', 'Kubernetes', 'LLM Fine-tuning'] }
  ];

  const fetchScreening = async (role: string) => {
    setLoading(true);
    try {
      const res = await fetch('/api/screen-preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobTitle: role })
      });
      if (res.ok) {
        const data = await res.json();
        setCandidates(data.candidates);
        if (data.candidates?.length > 0) {
          setSelectedCandidate(data.candidates[0]);
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchScreening(selectedRole);
    }
  }, [isOpen, selectedRole]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900 my-6">
        
        {/* Header */}
        <div className="bg-[#0E1330] p-5 sm:p-6 text-white flex items-center justify-between border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#12B886] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A9A6FF]">
                Live AI Screening Console
              </span>
            </div>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mt-1">
              Test Candidate Screening &amp; Shortlist Engine
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Role Selector Tabs */}
        <div className="bg-slate-50 border-b border-slate-200 p-4">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2 font-mono">
            Select Role to Simulate Autonomous Screening:
          </label>
          <div className="flex flex-wrap gap-2">
            {presetRoles.map((role) => (
              <button
                key={role.title}
                onClick={() => setSelectedRole(role.title)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  selectedRole === role.title
                    ? 'bg-[#3D38F5] text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {role.title}
              </button>
            ))}
          </div>
        </div>

        {/* Body Layout: Master-Detail Candidate View */}
        <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[420px]">
          
          {/* Left Column: Ranked Candidates List */}
          <div className="lg:col-span-5 border-r border-slate-200 pr-0 lg:pr-6 space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pb-1">
              <span>Ranked Shortlist (Top 4)</span>
              <span className="text-[#3D38F5] font-mono">Sorted by Fit</span>
            </div>

            {loading ? (
              <div className="text-center py-12 text-slate-400 text-xs">
                Scanning 3B talent pool &amp; matching resumes...
              </div>
            ) : (
              <div className="space-y-2.5">
                {candidates.map((cand, idx) => {
                  const isSelected = selectedCandidate?.id === cand.id;
                  return (
                    <div
                      key={cand.id}
                      onClick={() => setSelectedCandidate(cand)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#EEEDFF]/60 border-[#3D38F5] shadow-xs'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-extrabold text-slate-400 font-mono">
                            #{idx + 1}
                          </span>
                          <div className="w-8 h-8 rounded-full bg-[#3D38F5]/10 text-[#3D38F5] font-bold text-xs flex items-center justify-center font-heading">
                            {cand.avatarInitials}
                          </div>
                          <div>
                            <div className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                              {cand.name}
                            </div>
                            <div className="text-[11px] text-slate-500 truncate max-w-[150px]">
                              {cand.title} · {cand.experience}
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="font-heading font-extrabold text-sm text-[#3D38F5]">
                            {cand.overallScore}%
                          </span>
                          <span className="text-[10px] text-slate-400 block">Fit</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column: In-Depth Candidate Evidence */}
          <div className="lg:col-span-7">
            {selectedCandidate ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div>
                    <h4 className="font-heading font-extrabold text-lg text-[#0E1330]">
                      {selectedCandidate.name}
                    </h4>
                    <span className="text-xs text-slate-500">
                      {selectedCandidate.title} · {selectedCandidate.experience} · {selectedCandidate.location}
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E3F8F1] text-[#0A7F5D]">
                    {selectedCandidate.aiVerdict}
                  </span>
                </div>

                {/* Score Quadrant */}
                <div className="grid grid-cols-4 gap-2 text-center text-xs">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">JD Match</span>
                    <span className="font-bold text-slate-900">{selectedCandidate.matchScore}%</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">Assessment</span>
                    <span className="font-bold text-slate-900">{selectedCandidate.assessmentScore}%</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">Coding Test</span>
                    <span className="font-bold text-slate-900">{selectedCandidate.codingScore}%</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">AI Video</span>
                    <span className="font-bold text-[#12B886]">{selectedCandidate.interviewScore}%</span>
                  </div>
                </div>

                {/* AI Summary */}
                <div className="p-3 bg-[#FAF9FF] border border-[#6C5CFF]/20 rounded-xl space-y-1 text-xs">
                  <span className="font-bold text-[#3D38F5] flex items-center gap-1 font-mono uppercase text-[10px]">
                    <Sparkles className="w-3 h-3" /> AI Screening Evidence
                  </span>
                  <p className="text-slate-700 leading-relaxed">{selectedCandidate.aiSummary}</p>
                </div>

                {/* Verified Skills vs Potential Gaps */}
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-slate-700 block mb-1">Verified Requirements:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCandidate.verifiedSkills.map((sk) => (
                        <span key={sk} className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1 font-medium">
                          <CheckCircle2 className="w-3 h-3 text-[#12B886]" />
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedCandidate.potentialGaps.length > 0 && (
                    <div className="pt-1">
                      <span className="font-bold text-amber-800 block mb-1">Noted Considerations:</span>
                      <div className="space-y-1">
                        {selectedCandidate.potentialGaps.map((gap) => (
                          <div key={gap} className="px-2.5 py-1 rounded bg-amber-50 text-amber-900 border border-amber-200 flex items-center gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                            <span>{gap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Highlights Note */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
                  <Video className="w-4 h-4 text-[#3D38F5] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">Video Interview Takeaway: </strong>
                    {selectedCandidate.videoHighlights}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenDemo();
                    }}
                    className="w-full py-2.5 bg-[#0E1330] hover:bg-[#3D38F5] text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Schedule Final Interview with {selectedCandidate.name}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : null}
          </div>

        </div>

      </div>
    </div>
  );
};
