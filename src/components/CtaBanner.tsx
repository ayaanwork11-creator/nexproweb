'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#121829] via-[#0d121f] to-[#141b2c] border border-indigo-500/30 shadow-2xl overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Cloud Activation</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to eliminate DevOps bottlenecks forever?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto">
              Deploy your first distributed cluster today. Zero complex YAML files, zero server provisioning, zero cold starts.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/35 hover:shadow-indigo-600/50 transition-all flex items-center justify-center gap-2 group active:scale-98"
              >
                <span>Deploy Free Cluster in 60s</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all flex items-center justify-center gap-2"
              >
                <span>Book Architecture Consultation</span>
              </Link>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                SOC2 Type II Certified
              </span>
              <span>•</span>
              <span>14-day Pro trial with full access</span>
              <span>•</span>
              <span>Sub-millisecond global cold starts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
