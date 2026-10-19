'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Send, 
  Clock, 
  ShieldCheck, 
  Headphones,
  RotateCw,
  Sparkles
} from 'lucide-react';

export default function ContactPage() {
  const [department, setDepartment] = useState<'sales' | 'support' | 'arch' | 'security'>('sales');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '5-20 engineers',
    scale: '10M - 50M requests/mo',
    subject: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTicketId(`NP-${Math.floor(10000 + Math.random() * 90000)}`);
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      teamSize: '5-20 engineers',
      scale: '10M - 50M requests/mo',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="py-20 bg-[#080a0f] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Headphones className="w-3.5 h-3.5" />
            <span>Direct Engineering Consultation</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Connect with our systems architects.
          </h1>
          <p className="text-base sm:text-lg text-slate-400">
            Whether you are migrating massive Kubernetes clusters or prototyping a new edge agent, we're ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Panel */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-[#0e1320] border border-white/[0.08] space-y-6">
              <h2 className="text-xl font-bold text-white tracking-tight">
                Global Support & Engineering Hubs
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Direct Email Channels</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Enterprise: enterprise@nexpro.cloud</p>
                    <p className="text-xs text-slate-400">Technical Support: support@nexpro.cloud</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">SLA Response Times</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Enterprise Tier: Under 15 minutes (24/7/365)
                    </p>
                    <p className="text-xs text-slate-400">Standard Support: Under 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Engineering Offices</h4>
                    <p className="text-xs text-slate-400 mt-0.5">San Francisco: 550 Howard St, Suite 400</p>
                    <p className="text-xs text-slate-400">London: 100 Liverpool St, Broadgate</p>
                  </div>
                </div>
              </div>

              {/* Status pill card */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Network Operations Center: ACTIVE</span>
                </div>
                <span className="text-slate-500">Latency: 0.8ms</span>
              </div>
            </div>

            {/* Security Guarantee Box */}
            <div className="p-6 rounded-2xl bg-[#0b0e17] border border-white/[0.06] flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-indigo-400 flex-shrink-0" />
              <div className="text-xs text-slate-400 leading-relaxed">
                <span className="font-semibold text-white block">Zero Vendor Lock-in & NDA Protected</span>
                All architecture reviews and technical audits are protected by bilateral Non-Disclosure Agreements.
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0c101a] border border-white/[0.08] shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Inquiry Dispatched Successfully!</h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Your technical request has been routed to our on-call infrastructure architects.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#111726] border border-white/[0.06] max-w-sm mx-auto font-mono text-xs space-y-1 text-slate-300">
                    <div className="flex justify-between text-slate-400">
                      <span>TICKET REF:</span>
                      <span className="text-indigo-400 font-bold">{ticketId}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>CONTACT EMAIL:</span>
                      <span className="text-white">{formData.email}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>DEPARTMENT:</span>
                      <span className="text-emerald-400 uppercase">{department}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl font-semibold text-xs text-slate-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Department Switcher */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 block uppercase tracking-wider">
                      Select Department
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'sales', label: 'Enterprise Sales' },
                        { id: 'support', label: 'Technical SLA' },
                        { id: 'arch', label: 'Arch Review' },
                        { id: 'security', label: 'Security & BAA' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setDepartment(item.id as any)}
                          className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                            department === item.id
                              ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                              : 'bg-[#121624] text-slate-400 border-white/[0.06] hover:text-white'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ada Lovelace"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#121725] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Work Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ada@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#121725] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  {/* Company and Team Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Technologies"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#121725] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Monthly Traffic Scale
                      </label>
                      <select
                        value={formData.scale}
                        onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#121725] border border-white/[0.1] text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="< 1M req/mo">&lt; 1 Million requests/mo</option>
                        <option value="1M - 10M req/mo">1M - 10M requests/mo</option>
                        <option value="10M - 50M requests/mo">10M - 50M requests/mo</option>
                        <option value="50M+ requests/mo">50M+ requests/mo (High Volume)</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Migration from AWS Lambda and VPC Peering"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121725] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Project Details or Questions <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current infrastructure bottlenecks, target latency SLAs, or specific enterprise requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-[#121725] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/35 transition-all disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <RotateCw className="w-4 h-4 animate-spin" />
                        <span>Transmitting to On-Call Architect...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Architecture Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-500">
                    Your contact information is strictly confidential. We never sell or share customer data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
