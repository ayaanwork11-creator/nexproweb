'use client';

import React from 'react';
import { Zap, Clock, ShieldCheck, Activity, Award } from 'lucide-react';

const STATS = [
  {
    icon: Clock,
    value: '< 1.2ms',
    label: 'Global P99 Latency',
    desc: 'Instant code execution with zero cold-start penalty across 32 regional edge nodes.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
  {
    icon: ShieldCheck,
    value: '99.999%',
    label: 'Guaranteed SLA Uptime',
    desc: 'Automated failover, distributed consensus, and enterprise-grade resilience baked in.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: Zap,
    value: '4.8x',
    label: 'Faster Engineering Velocity',
    desc: 'Ship from local test to production edge in single git push or CLI deployment command.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  {
    icon: Activity,
    value: '850M+',
    label: 'Daily Edge Invocations',
    desc: 'Handling massive sustained concurrency with automatic elastic horizontal scaling.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
];

export default function MetricStats() {
  return (
    <section className="py-20 relative border-y border-white/[0.06] bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            Engineered for Extreme Performance
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built to endure the scale of modern internet infrastructure.
          </p>
          <p className="text-base text-slate-400">
            Every layer of NexPro is benchmarked against the most demanding production workloads.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-[#0d111c] border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className={`w-11 h-11 rounded-xl ${stat.bg} ${stat.border} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-200">
                    {stat.label}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
