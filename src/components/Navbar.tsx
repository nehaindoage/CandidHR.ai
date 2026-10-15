import React, { useState } from "react";
import { Menu, X, Play, Calendar } from "lucide-react";
import logo from "../assets/images/logo_HR.png";

interface Props {
  onOpenDemo: () => void;
  onOpenScreeningSimulator: () => void;
}

export const Navbar: React.FC<Props> = ({
  onOpenDemo,
  onOpenScreeningSimulator,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Platform Walkthrough", href: "#walkthrough" },
    { label: "3B Sourcing", href: "#sourcing" },
    { label: "ATS & Boards", href: "#ats-integrations" },
    { label: "ROI Calculator", href: "#roi-calculator" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-[#0E1330]/90 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          {/* Zone 1: Brand Wordmark & Signature Logo */}

          <a href="#" className="flex items-center gap-2.5 shrink-0 group">
            <img
              src={logo}
              alt="CandidHR.ai Logo"
              className="w-8 h-8 rounded-lg shadow-sm group-hover:scale-105 transition-transform object-contain"
            />

            {/* <svg
              className="w-8 h-8 rounded-lg shadow-sm group-hover:scale-105 transition-transform"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="navLogoGradA" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#6C5CFF" />
                  <stop offset="100%" stopColor="#3D38F5" />
                </linearGradient>
                <linearGradient id="navLogoGradB" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9F96FF" />
                  <stop offset="100%" stopColor="#3D38F5" />
                </linearGradient>
              </defs>
              <rect width="32" height="32" rx="8" fill="#161C42" />
              <path d="M6 5h6.5L26 27h-6.5L6 5z" fill="url(#navLogoGradA)" />
              <path d="M26 5h-6.5L6 27h6.5L26 5z" fill="url(#navLogoGradB)" opacity="0.92" />
            </svg> */}
            <div className="flex items-baseline gap-1">
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                CandidHR<span className="text-[#6C5CFF]">.ai</span>
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#6C5CFF]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* <button
              onClick={onOpenScreeningSimulator}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all cursor-pointer whitespace-nowrap"
            >
              <Play className="w-3.5 h-3.5 text-[#9F96FF]" />
              Live Demo
            </button> */}
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-brand-gradient hover:opacity-95 shadow-lg shadow-[#3D38F5]/30 rounded-xl transition-all hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book a Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenDemo}
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-brand-gradient rounded-lg"
            >
              Book Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F27] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-base font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenScreeningSimulator();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-200 bg-white/5 border border-white/15 rounded-xl"
            >
              <Play className="w-4 h-4 text-[#9F96FF]" />
              Test AI Screening Live
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-brand-gradient rounded-xl shadow-lg shadow-[#3D38F5]/30"
            >
              <Calendar className="w-4 h-4" />
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
