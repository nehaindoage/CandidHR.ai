import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, AlertCircle, ArrowRight, Sparkles, Building, Mail, User, Phone, ShieldCheck } from 'lucide-react';
import { DemoLeadForm } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialVolume?: string;
}

export const DemoModal: React.FC<Props> = ({ isOpen, onClose, initialVolume = '5-15 hires/month' }) => {
  const [formData, setFormData] = useState<DemoLeadForm>({
    fullName: '',
    workEmail: '',
    companyName: '',
    phone: '',
    hiringVolume: initialVolume,
    rolesDescription: '',
    source: 'modal_dialog'
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{ bookingRef: string; message: string } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.fullName.trim() || !formData.workEmail.trim() || !formData.companyName.trim()) {
      setError('Please fill in your full name, work email, and company name.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit demo request.');
      }

      setSuccessData({
        bookingRef: data.bookingRef,
        message: data.message
      });
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please check your details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900 my-8">
        
        {/* Top Header with Brand Gradient accent */}
        <div className="bg-[#0E1330] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A9A6FF]">
            Personalized Platform Walkthrough
          </span>
          <h3 className="font-heading font-extrabold text-2xl text-white mt-1">
            Book a 20-Minute Live Demo
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Bring one of your real job descriptions — see CandidHR source and screen candidates for it live.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {successData ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#E3F8F1] text-[#12B886] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="font-heading font-extrabold text-2xl text-[#0E1330]">
                Demo Request Confirmed!
              </h4>

              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                {successData.message}
              </p>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500 font-mono">
                Confirmation Reference: <strong className="text-slate-800">{successData.bookingRef}</strong>
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#0E1330] text-white rounded-xl text-xs font-bold hover:bg-[#3D38F5] transition-colors"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Sarah Jenkins"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-[#3D38F5] focus:ring-1 focus:ring-[#3D38F5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="s.jenkins@company.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-[#3D38F5] focus:ring-1 focus:ring-[#3D38F5]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Company Name *</label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Acme Corp"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-[#3D38F5] focus:ring-1 focus:ring-[#3D38F5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number (Optional)</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-[#3D38F5] focus:ring-1 focus:ring-[#3D38F5]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Expected Hiring Volume</label>
                <select
                  value={formData.hiringVolume}
                  onChange={(e) => setFormData({ ...formData, hiringVolume: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-[#3D38F5] focus:ring-1 focus:ring-[#3D38F5] bg-white"
                >
                  <option value="1-4 hires/month">1 - 4 hires / month (Startup / Boutique)</option>
                  <option value="5-15 hires/month">5 - 15 hires / month (Growing Team)</option>
                  <option value="16-50 hires/month">16 - 50 hires / month (Mid-Market / Agency)</option>
                  <option value="50+ hires/month">50+ hires / month (Enterprise / High Volume)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Current ATS or Key Roles (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Using Greenhouse, hiring 4 Senior Python Engineers..."
                  value={formData.rolesDescription}
                  onChange={(e) => setFormData({ ...formData, rolesDescription: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-[#3D38F5] focus:ring-1 focus:ring-[#3D38F5]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-brand-gradient hover:bg-brand-gradient-hover text-white font-bold text-sm rounded-xl shadow-lg shadow-[#3D38F5]/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Submitting request...</span>
                ) : (
                  <>
                    <span>Confirm Live Demo Booking</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#12B886]" />
                <span>No credit card required · SOC 2 Type II compliant data handling</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
