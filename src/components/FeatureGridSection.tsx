import React, { useState, useRef } from 'react';
import { 
  Sparkles, 
  FileText, 
  Search, 
  CheckCircle, 
  Upload, 
  AlertTriangle, 
  Video, 
  ShieldCheck, 
  Award, 
  Code2, 
  MessageSquare, 
  Layers, 
  Globe2, 
  Lock, 
  Briefcase, 
  Calendar, 
  Share2,
  Users,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play
} from 'lucide-react';

interface Props {
  onOpenDemo: () => void;
}

export const FeatureGridSection: React.FC<Props> = ({ onOpenDemo }) => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      title: 'Job Creation in Seconds',
      description: 'AI drafts comprehensive job descriptions based on title, seniority, and stack.',
      icon: FileText,
      badge: 'Core'
    },
    {
      title: '3B Candidate Talent Pool',
      description: 'Direct passive sourcing from an indexed pool of 3 billion professionals.',
      icon: Globe2,
      badge: 'Premium'
    },
    {
      title: 'AI Resume Screening & Ranking',
      description: 'Reads and ranks 1,000+ resumes against role criteria in under 60 seconds.',
      icon: Search,
      badge: 'Core'
    },
    {
      title: 'Auto-Invite Best Matches',
      description: 'Configure autonomous invitations to top 25-100 candidates on job launch.',
      icon: Users,
      badge: 'Premium'
    },
    {
      title: 'Job Description Matching',
      description: 'Direct requirements mapping so recruiters see why each candidate fits.',
      icon: CheckCircle,
      badge: 'Core'
    },
    {
      title: 'DeepSearch Natural Language',
      description: 'Search candidates by describing the exact human and technical traits you need.',
      icon: Search,
      badge: 'Premium'
    },
    {
      title: 'Bulk Resume Upload',
      description: 'Upload folders or zip files of existing applicant resumes with instant parsing.',
      icon: Upload,
      badge: 'Core'
    },
    {
      title: 'In-Depth Video Analysis',
      description: 'Verbatim transcripts, communication rubrics, and hiring recommendations.',
      icon: Sparkles,
      badge: 'Premium'
    },
    {
      title: 'Red-Flag Detection',
      description: 'Surfaces deal-breakers (notice period, visa, location, salary gap) up front.',
      icon: AlertTriangle,
      badge: 'Core'
    },
    {
      title: 'Hands-on Coding Tests',
      description: 'Interactive browser programming environments with test case evaluation.',
      icon: Code2,
      badge: 'Premium'
    },
    {
      title: 'AI-Proctored Assessments',
      description: 'Role-relevant tests with webcam, screen, and anomaly detection.',
      icon: ShieldCheck,
      badge: 'Core'
    },
    {
      title: 'WhatsApp Recruiter Integration',
      description: 'Invite candidates and send interview reminders via WhatsApp for 90%+ open rates.',
      icon: MessageSquare,
      badge: 'Premium'
    },
    {
      title: 'Automated Video Interviews',
      description: 'Candidates record structured question responses on their own time.',
      icon: Video,
      badge: 'Core'
    },
    {
      title: '153 ATS Bi-directional Sync',
      description: 'Connect Greenhouse, Lever, Workday, Ashby, BambooHR with instant two-way sync.',
      icon: Share2,
      badge: 'Premium'
    },
    {
      title: 'Candidate Communication',
      description: 'Automated progression emails and status notifications at every stage.',
      icon: MessageSquare,
      badge: 'Core'
    },
    {
      title: '1,000+ Job Boards (Kerbo)',
      description: 'One-click multi-posting across LinkedIn, Indeed, Glassdoor, and global boards.',
      icon: Briefcase,
      badge: 'Premium'
    },
    {
      title: 'Workflow Automation',
      description: 'Stage triggers move qualified candidates forward without manual intervention.',
      icon: Layers,
      badge: 'Core'
    },
    {
      title: 'Full White Labelling',
      description: 'Your company brand, custom domain, and styling on the candidate experience.',
      icon: Award,
      badge: 'Premium'
    }
  ];

  // Manual scroll helper
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#3D38F5] bg-[#EEEDFF] px-3 py-1 rounded-full">
              Full Platform Capabilities
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0E1330] mt-3 tracking-tight">
              Everything from <span className="text-brand-gradient">job created to shortlist</span>
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-2xl">
              A continuous suite of autonomous hiring tools engineered to filter noise and accelerate recruiter decision making.
            </p>
          </div>

          {/* Marquee Controls */}
          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
              aria-label={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
              title={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
            >
              {isPaused ? <Play className="w-4 h-4 text-[#3D38F5]" /> : <Pause className="w-4 h-4 text-slate-600" />}
            </button>
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Staggered Infinite Marquee Carousel (One card up, one card slight down) */}
        <div
          ref={scrollContainerRef}
          className="relative w-full  no-scrollbar py-6 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]"
        >
          <div
            className={`flex items-center gap-6 ${isPaused ? '' : 'animate-marquee-cards'}`}
            style={{ width: 'max-content' }}
          >
            {/* Duplicated list to ensure seamless infinite loop */}
            {features.concat(features).map((feat, idx) => {
              const Icon = feat.icon;
              const isEven = idx % 2 === 0;
              const isPremium = feat.badge === 'Premium';

              return (
                <div
                  key={`${feat.title}-${idx}`}
                  className={`w-[290px] sm:w-[320px] shrink-0 p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.02] shadow-sm select-none ${
                    isEven ? '-translate-y-3.5' : 'translate-y-3.5'
                  } ${
                    isPremium
                      ? 'bg-[#FAF9FF] border-[#6C5CFF]/30 hover:border-[#3D38F5] hover:shadow-md'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isPremium ? 'bg-brand-gradient text-white' : 'bg-[#EEEDFF] text-[#3D38F5]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className={`text-[10px] font-extrabold uppercase font-mono px-2 py-0.5 rounded-full ${
                      isPremium ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-[#0E1330] mb-1.5 leading-snug">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed min-h-[40px]">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-6 sm:p-8 bg-[#0E1330] rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-bold text-lg sm:text-xl">Want to test CandidHR on one of your own active jobs?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">Book a 20-minute tailored demo. Bring a real JD and see candidate ranking live.</p>
          </div>
          <button
            onClick={onOpenDemo}
            className="px-6 py-3 bg-brand-gradient hover:bg-brand-gradient-hover text-white rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap shadow-md cursor-pointer shrink-0"
          >
            Book Recruiter Demo
          </button>
        </div>

      </div>
    </section>
  );
};
