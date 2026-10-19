'use client';

import React, { useState } from 'react';
import { 
  Zap, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Activity, 
  GitBranch, 
  ArrowRight,
  Boxes,
  Terminal,
  Lock,
  Layers,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

const FEATURES = [
  {
    icon: Zap,
    title: 'Zero-Cold-Start Edge Runtime',
    category: 'Compute Engine',
    desc: 'Micro-snapshot VM technology that executes serverless logic under 1.2ms without traditional cold-start penalties.',
    badge: 'Sub-millisecond',
    tags: ['V8 Isolate', 'Wasm', 'Instant Boot'],
  },
  {
    icon: Database,
    title: 'Distributed Global State & Cache',
    category: 'Storage Layer',
    desc: 'Active-active multi-region key-value and vector memory store synchronized across 32 international points of presence.',
    badge: 'Active-Active',
    tags: ['CRDT Sync', 'Vector Index', 'Raft Consensus'],
  },
  {
    icon: Cpu,
    title: 'Intelligent AI Agent Pipelines',
    category: 'Model Orchestration',
    desc: 'Low-latency orchestration for model inference, streaming tokens, embeddings, and automated tool-calling workflows.',
    badge: 'AI Native',
    tags: ['Streaming', 'Prompt Caching', 'Tool Calling'],
  },
  {
    icon: Activity,
    title: 'Deep Observability & Flame Graphs',
    category: 'Monitoring',
    desc: 'Real-time telemetry natively adhering to OpenTelemetry specs with zero sampling overhead or manual instrumentation.',
    badge: 'OpenTelemetry',
    tags: ['Live Tracing', 'Error Budgets', 'Metric Alerts'],
  },
  {
    icon: GitBranch,
    title: 'Ephemeral Sandbox Branching',
    category: 'Developer Experience',
    desc: 'Every pull request spawns a production-replica sandbox with isolated database state and live collaboration URLs.',
    badge: 'Git Integrated',
    tags: ['PR Previews', 'Data Sandboxing', 'CI/CD Webhooks'],
  },
  {
    icon: ShieldCheck,
    title: 'Zero-Trust Perimeter & Security',
    category: 'Security & Compliance',
    desc: 'Hardware-backed secret rotation, end-to-end mTLS, automated DDoS mitigation, and enterprise compliance audits out of the box.',
    badge: 'SOC2 Type II',
    tags: ['mTLS 1.3', 'Secret Vault', 'Audit Trails'],
  },
];

export default function FeatureGrid() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="features" className="py-24 relative bg-[#090b10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Comprehensive Cloud Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Everything your team needs to ship at hyperspeed.
            </h2>
            <p className="text-base text-slate-400">
              Stop stitching together dozens of disparate cloud services. NexPro integrates compute, distributed caching, security, and AI execution into one seamless interface.
            </p>
          </div>

          <div>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group"
            >
              <span>Explore Architecture Deep-Dive</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat, index) => {
            const Icon = feat.icon;
            const isHovered = hoveredIdx === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative p-8 rounded-2xl bg-[#0f1422] border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? 'border-indigo-500/40 shadow-xl shadow-indigo-950/30 -translate-y-1'
                    : 'border-white/[0.08] hover:border-white/[0.14]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#171f33] border border-white/[0.08] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {feat.badge}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <span className="text-xs font-semibold text-indigo-400/90 uppercase tracking-wider">
                      {feat.category}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {feat.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-white/[0.04] border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
