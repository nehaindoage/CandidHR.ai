import React, { useState } from 'react';
import { ArrowRight, Play, CheckCircle2, ChevronRight, ShieldCheck, Building2 } from 'lucide-react';
import heroImage from "../assets/images/hero_recruiter_leader_1792042392230.jpg";

interface Props {
  onOpenDemo: () => void;
  onOpenScreeningSimulator: () => void;
}

export const HeroSection: React.FC<Props> = ({ onOpenDemo, onOpenScreeningSimulator }) => {
  // Client logos provided from CloudFront CDN
  const clientLogos = [
    {
      name: 'Ross Warner Hr Solutions',
      src: 'https://dersjb4x67dvf.cloudfront.net/tenants/3K0O2uCF83GKjpMf3EdLoIvse4M/logo/ross-warner.png'
    },
    {
      name: 'Vikas Group',
      src: 'https://dersjb4x67dvf.cloudfront.net/tenants/3HGXv7F104FiNp5F2WV7nIrXt6A/logo/vikas-group_logo.png'
    },
    {
      name: 'Wings Biotech LLP',
      src: 'https://dersjb4x67dvf.cloudfront.net/tenants/3JUcWa5q4fQ2CNAduH5cIJODzPa/logo/wings-bbiotech-logos.jpg'
    },
    {
      name: 'Zenithive',
      src: 'https://dersjb4x67dvf.cloudfront.net/tenants/3HPB8KS0lzLJ03OcWtWxcqtDPRi/logo/zenithhive.png'
    },
    {
      name: 'Lumiverse Solutions',
      src: 'https://dersjb4x67dvf.cloudfront.net/tenants/2yVjU2itZfPyZI1OC6ckiHfG8pc/logo/lumiverse-logo.webp'
    },
    {
      name: 'Forech India Pvt. Ltd',
      src: 'https://dersjb4x67dvf.cloudfront.net/tenants/3ILlG6KcdmY6XvOwkDMj2EFDDHf/logo/forech-logo.png'
    },
    {
      name: 'PANCHSHEEL FILTERS PVT LTD',
      src: 'https://dersjb4x67dvf.cloudfront.net/tenants/3J5kAWPAANdWzSFPyDlJgkRj36S/logo/pf-logo_73MPWM0.png'
    },
    {
      name: 'QubeHealth Pay',
      src: 'https://dersjb4x67dvf.cloudfront.net/tenants/3FwvyINpCGp8cIFNorfoTCqJYC9/logo/qubehealth-logo.jpg'
    },
    {
      name: 'Padmini Industries Limited',
      src: 'https://dersjb4x67dvf.cloudfront.net/tenants/3JRy7fNdDCqbsIzFl2b0HCEiWp8/logo/padmini_1503x351.png'
    },
    {
      name: 'GloLicense Solutions',
      src: 'https://dersjb4x67dvf.cloudfront.net/tenants/3JoFN6gln0xsZTL9lpeEzfMNo4z/logo/glolicense_minimal_whitespace.png'
    },
    {
      name: 'Monitra Healthcare',
      src: 'https://dersjb4x67dvf.cloudfront.net/tenants/3Jo95IGd54F5MLR276CryUamJkc/logo/monitrahealt-logo.png'
    },
    {
      name: 'KBP Engineering Services',
      src: 'https://dersjb4x67dvf.cloudfront.net/tenants/3JjPPnRW5MM7YDBIfloIur92WUy/logo/kbp_logo.png'
    },
    {
      name: 'HireFusions',
      src: 'https://dersjb4x67dvf.cloudfront.net/tenants/3Kj008N1sOrrXqzVz8EZ43ZtwFI/logo/hirefusions.png'
    },
    {
      name: 'Barbowws',
      src: 'https://dersjb4x67dvf.cloudfront.net/tenants/3Fu8Y8GtzQJcwPSXBVsUdypiHiQ/logo/barbowws-logo-v19.png'
    },
    {
      name: 'Diacto Technologies',
      src: 'https://dersjb4x67dvf.cloudfront.net/org_logo/diacto.ico'
    },
    {
      name: 'ZenZ Innovation',
      src: 'https://dersjb4x67dvf.cloudfront.net/tenants/3CbpnESBtZNc5TNtvgGWI2KJEiv/logo/zenz-innovation.png'
    }
  ];

  // State to track image fallback if CDN fails
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (name: string) => {
    setFailedImages(prev => ({ ...prev, [name]: true }));
  };

  return (
    <section className="relative bg-navy-glow pt-10 pb-14 overflow-hidden text-slate-100">
      {/* Decorative ambient blurred gradients */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-[#6C5CFF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-80 h-80 bg-[#3D38F5]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#A9A6FF] mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#12B886] animate-pulse" />
          <span>The AI Hiring Platform For Modern Teams</span>
          <span className="text-white/30">|</span>
          <span className="text-slate-300">One Platform. Every Stage.</span>
        </div>

        {/* 2-Column Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Provocative Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.08] tracking-tight text-white text-balance">
              STOP SCREENING RESUMES.{' '}
              <span className="text-brand-gradient block mt-1">
                START MEETING YOUR BEST CANDIDATES.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              CandidHR.ai auto-invites best matches from a <strong className="text-white font-semibold">3B talent pool</strong>, 
              screens resumes against the job description, and conducts role-relevant assessments &amp; video interviews — 
              so recruiters spend their time on the people <span className="text-white font-semibold underline decoration-[#6C5CFF] underline-offset-4">worth interviewing</span>.
            </p>

            {/* CTA Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-brand-gradient hover:bg-brand-gradient-hover shadow-xl shadow-[#3D38F5]/40 rounded-xl transition-all hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                <span>Book a Live Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* <button
                onClick={onOpenScreeningSimulator}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl transition-all cursor-pointer whitespace-nowrap"
              >
                <Play className="w-4 h-4 text-[#9F96FF]" />
                <span>Test AI Screening Live</span>
              </button> */}
            </div>

            {/* Micro Trust Note */}
            <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#12B886] shrink-0" />
              <span>SOC 2 Type II Certified · Bring a real job description &amp; see matches in 60s</span>
            </div>

          </div>

          {/* Right Column: Hero Visual Anchor + Live Screening Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-white/0 shadow-2xl">
              
              {/* Recruiter Hero Image */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#161C42]">
                <img
                  src={heroImage}
                  alt="Talent acquisition leader using CandidHR.ai platform"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1330] via-transparent to-transparent opacity-80" />

                {/* Overlaid Status Badge */}
                <div className="absolute top-3 left-3 bg-[#0E1330]/85 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-lg text-xs font-medium text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#12B886]" />
                  <span>Senior Data Engineer · Screening Live</span>
                </div>
              </div>

              {/* Overlaid Candidate Match Card */}
              <div className="mt-3 bg-[#161C42]/95 backdrop-blur-md border border-white/15 rounded-xl p-4 shadow-xl">
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-[#3D38F5]/30 border border-[#6C5CFF]/50 text-white font-bold flex items-center justify-center text-sm font-heading">
                      RK
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-bold text-sm text-white">Rhea Kapoor</span>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#12B886]/20 text-[#4ADE9E] border border-[#12B886]/30">
                          #1 Shortlist
                        </span>
                      </div>
                      <span className="text-xs text-slate-400">8 yrs exp · Python, AWS, Snowflake</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-slate-400 block font-medium">Fit Score</span>
                    <span className="font-heading font-extrabold text-lg text-white">96%</span>
                  </div>
                </div>

                {/* Score Breakdown Row */}
                <div className="grid grid-cols-3 gap-2 pt-3 text-center text-xs">
                  <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                    <span className="text-slate-400 block text-[10px]">Resume Match</span>
                    <span className="font-bold text-white">96%</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                    <span className="text-slate-400 block text-[10px]">Assessment</span>
                    <span className="font-bold text-white">91%</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                    <span className="text-slate-400 block text-[10px]">Video Interview</span>
                    <span className="font-bold text-[#4ADE9E]">88%</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 text-[#4ADE9E]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    All deal-breaker criteria satisfied
                  </span>
                  <button
                    onClick={onOpenScreeningSimulator}
                    className="text-[#A9A6FF] hover:text-white flex items-center gap-0.5 font-semibold cursor-pointer"
                  >
                    View Details
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* =========================================================================
            CLIENT-REQUESTED LOGO MARQUEE: WHITE RECTANGULAR CARDS ON DARK BACKDROP
            Exact card style from Capture.PNG and user's specifications:
            - White rounded card with border border-white/20
            - Fixed dimensions ~210px x 115px
            - Official logo centered with max-h-[75px] max-w-[180px] object-contain
            - Smooth infinite loop marquee with hover-pause
           ========================================================================= */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-300 mb-6 font-mono">
            Trusted by hiring teams and talent recruiters at
          </p>
          
          <div className="relative overflow-hidden w-full py-2 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="animate-marquee-scroll flex items-center gap-6 whitespace-nowrap">
              {/* Double sequence for infinite seamless loop */}
              {clientLogos.concat(clientLogos).map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex-shrink-0 flex items-center justify-center rounded-2xl bg-white border border-white/20 shadow-sm transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-105 p-3 sm:p-4 select-none"
                  style={{ width: '220px', height: '115px' }}
                  title={logo.name}
                >
                  {failedImages[logo.name] ? (
                    <div className="flex items-center gap-2 text-slate-800 text-xs font-heading font-extrabold text-center px-2">
                      <Building2 className="w-5 h-5 text-[#3D38F5] shrink-0" />
                      <span className="line-clamp-2 leading-tight">{logo.name}</span>
                    </div>
                  ) : (
                    <img
                      src={logo.src}
                      alt={logo.name}
                      title={logo.name}
                      onError={() => handleImageError(logo.name)}
                      className="max-h-[75px] max-w-[180px] w-auto h-auto object-contain"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
