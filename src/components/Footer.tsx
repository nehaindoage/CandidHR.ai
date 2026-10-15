import React from 'react';
import { ShieldCheck, Mail, MapPin } from 'lucide-react';
import logo from "../assets/images/logo_HR.png";

interface Props {
  onOpenDemo: () => void;
}

export const Footer: React.FC<Props> = ({ onOpenDemo }) => {
  return (
    <footer className="bg-[#0B0F27] text-slate-400 text-xs border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Certifications */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
               <img
              src={logo}
              alt="CandidHR.ai Logo"
              className="w-8 h-8 rounded-lg shadow-sm group-hover:scale-105 transition-transform object-contain"
            />
              {/* <svg
                className="w-7 h-7 rounded-lg"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="footerLogoGradA" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6C5CFF" />
                    <stop offset="100%" stopColor="#3D38F5" />
                  </linearGradient>
                  <linearGradient id="footerLogoGradB" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9F96FF" />
                    <stop offset="100%" stopColor="#3D38F5" />
                  </linearGradient>
                </defs>
                <rect width="32" height="32" rx="8" fill="#161C42" />
                <path d="M6 5h6.5L26 27h-6.5L6 5z" fill="url(#footerLogoGradA)" />
                <path d="M26 5h-6.5L6 27h6.5L26 5z" fill="url(#footerLogoGradB)" opacity="0.92" />
              </svg> */}
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                CandidHR<span className="text-[#6C5CFF]">.ai</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              AI recruitment software that sources, screens, assesses, and interviews candidates before your team’s first round — so recruiters spend their time on the people worth interviewing.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-slate-200 text-[11px] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#12B886]" />
                SOC 2 Type II Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-slate-200 text-[11px] font-semibold">
                GDPR &amp; CCPA Compliant
              </span>
            </div>

            <div className="space-y-1 pt-2 text-slate-400 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <a href="mailto:info@candidhr.ai" className="hover:text-white transition-colors">
                  info@candidhr.ai
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>Pune · Houston · Salt Lake City</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider text-[11px]">
              Platform &amp; Core
            </h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">5-Stage Pipeline</a></li>
              <li><a href="#walkthrough" className="hover:text-white transition-colors">Console Walkthrough</a></li>
              <li><a href="#sourcing" className="hover:text-white transition-colors">3B Candidate Sourcing</a></li>
              <li><a href="#walkthrough" className="hover:text-white transition-colors">Resume Match Engine</a></li>
              <li><a href="#walkthrough" className="hover:text-white transition-colors">Automated Video Replay</a></li>
              <li><a href="#ats-integrations" className="hover:text-white transition-colors">153 ATS Connectors</a></li>
              <li><a href="#ats-integrations" className="hover:text-white transition-colors">1,000+ Job Boards</a></li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider text-[11px]">
              Use Cases
            </h4>
            <ul className="space-y-2">
              <li><a href="#solutions" className="hover:text-white transition-colors">Talent Acquisition Teams</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">High-Volume Hiring</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Campus Recruitment</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Staffing &amp; Recruitment Agencies</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Fast-Growing Startups</a></li>
              <li><a href="#roi-calculator" className="hover:text-white transition-colors">Hiring ROI Calculator</a></li>
            </ul>
          </div>

          {/* Plans & Trust */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider text-[11px]">
              Company &amp; Access
            </h4>
            <ul className="space-y-2">
              <li><button onClick={onOpenDemo} className="hover:text-white transition-colors cursor-pointer text-left">Book a Live Demo</button></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Free &amp; Growth Plans</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Recruiter FAQ</a></li>
              <li><a href="#sourcing" className="hover:text-white transition-colors">DeepSearch Console</a></li>
              <li><span className="text-slate-600 cursor-not-allowed">Terms of Service</span></li>
              <li><span className="text-slate-600 cursor-not-allowed">Privacy Policy</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © 2026 CandidHR.ai · CandidHR.ai is a product of Diacto Labs Private Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/company/candidhrai/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://x.com/candidhr_ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              X (Twitter)
            </a>
            <a href="https://www.youtube.com/@CandidHR.AIOfficial" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              YouTube
            </a>
            <a href="https://www.instagram.com/candidhr.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
