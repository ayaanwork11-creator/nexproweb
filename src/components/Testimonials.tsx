'use client';

import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Elena Rostova',
    role: 'VP of Infrastructure',
    company: 'HyperScale AI',
    avatar: 'ER',
    avatarBg: 'from-purple-500 to-indigo-600',
    quote:
      'NexPro cut our global latency by 72% on day one. Our engineering team stopped worrying about Kubernetes ingress configuration and focused entirely on core model inference logic.',
    metrics: '72% latency drop',
  },
  {
    name: 'Marcus Chen',
    role: 'Principal DevOps Architect',
    company: 'Veloce Commerce',
    avatar: 'MC',
    avatarBg: 'from-blue-500 to-cyan-600',
    quote:
      'We handle Black Friday traffic peaks with over 600,000 requests per second. With NexPro, we had zero cold starts and our cloud bill decreased by 38% compared to our previous AWS setup.',
    metrics: '38% cloud cost reduction',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Co-founder & CTO',
    company: 'PulseMetric Realtime',
    avatar: 'SJ',
    avatarBg: 'from-emerald-500 to-teal-600',
    quote:
      'The developer experience is unmatched. Pull request sandboxes boot up in two seconds, allowing our product team and QA engineers to verify features instantly before merging to main.',
    metrics: '4x faster pull request merges',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative bg-[#07090e] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Quote className="w-3.5 h-3.5" />
            <span>Customer Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Loved by technical leaders worldwide.
          </h2>
          <p className="text-base text-slate-400">
            Discover why high-growth startups and established enterprises rely on NexPro for mission-critical workloads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl bg-[#0d111c] border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Highlight metric badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{rev.metrics}</span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${rev.avatarBg} flex items-center justify-center font-bold text-white text-xs shadow-md`}>
                  {rev.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">{rev.name}</h4>
                  <p className="text-xs text-slate-400">{rev.role}, <span className="text-indigo-400">{rev.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
