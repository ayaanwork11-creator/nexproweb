'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  Copy, 
  Check, 
  Play, 
  Activity, 
  Zap, 
  ShieldCheck, 
  Database,
  Cpu,
  Server
} from 'lucide-react';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'metrics' | 'pipeline' | 'logs'>('metrics');

  const cliCommand = 'npx nexpro@latest init my-cluster';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cliCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-blue-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Announcement Badge */}
        <div className="flex justify-center mb-8">
          <Link
            href="/features"
            className="group inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#101522] border border-white/[0.09] hover:border-indigo-500/40 text-slate-300 hover:text-white transition-all shadow-sm shadow-indigo-950/20"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
            <span className="font-semibold text-indigo-400">NexPro 2.5</span>
            <span className="text-slate-500">|</span>
            <span>Distributed Edge Orchestration is now Live</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Main Heading & Lead */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
            Engineering velocity without the{' '}
            <span className="gradient-accent-text">DevOps friction.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            The next-generation distributed runtime designed for modern software teams. 
            Deploy microservices, serverless workflows, and real-time data pipelines in seconds with zero configuration.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-base text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/45 transition-all duration-200 flex items-center justify-center gap-2.5 group active:scale-98"
            >
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#interactive-demo"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium text-base text-slate-200 bg-[#121622] hover:bg-[#191f30] border border-white/[0.08] hover:border-white/[0.16] transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-indigo-400 fill-indigo-400/20" />
              <span>Explore Interactive Demo</span>
            </a>
          </div>

          {/* Copyable CLI Snippet */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#0c101a] border border-white/[0.08] text-xs sm:text-sm font-mono text-slate-400">
              <span className="text-indigo-400 font-bold">$</span>
              <span className="text-slate-200">{cliCommand}</span>
              <button
                type="button"
                onClick={copyToClipboard}
                className="ml-2 p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors"
                title="Copy install command"
                aria-label="Copy install command"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Product UI Mockup / Dashboard Preview */}
        <div className="mt-14 sm:mt-18 relative max-w-5xl mx-auto">
          {/* Subtle Glow behind the mockup */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl rounded-3xl -z-10" />

          <div className="rounded-2xl border border-white/[0.1] bg-[#0c101a] shadow-2xl overflow-hidden">
            {/* Window Top Bar */}
            <div className="px-4 py-3 bg-[#080b12] border-b border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="ml-3 text-xs text-slate-400 font-mono hidden sm:inline-block">
                  nexpro-console.internal / prod-us-east-1
                </span>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center gap-1 bg-[#101420] p-1 rounded-lg border border-white/[0.05]">
                <button
                  type="button"
                  onClick={() => setActiveTab('metrics')}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    activeTab === 'metrics'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Live Telemetry
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('pipeline')}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    activeTab === 'pipeline'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Pipelines
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('logs')}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    activeTab === 'logs'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Edge Logs
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Cluster Sync 0.4ms
              </div>
            </div>

            {/* Mockup Dashboard Content */}
            <div className="p-6 bg-gradient-to-b from-[#0e121e] to-[#0a0d15] text-slate-200">
              {activeTab === 'metrics' && (
                <div className="space-y-6">
                  {/* Top Stats Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-[#131826] border border-white/[0.06]">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>P99 Global Latency</span>
                        <Zap className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">1.82 ms</span>
                        <span className="text-xs text-emerald-400 font-medium">-18% vs avg</span>
                      </div>
                      <div className="mt-3 w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-amber-400 h-full rounded-full w-[24%]" />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#131826] border border-white/[0.06]">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Throughput (Req/sec)</span>
                        <Activity className="w-4 h-4 text-indigo-400" />
                      </div>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">418,290</span>
                        <span className="text-xs text-emerald-400 font-medium">+24.6%</span>
                      </div>
                      <div className="mt-3 w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-indigo-500 h-full rounded-full w-[82%]" />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#131826] border border-white/[0.06]">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Active Edge Workers</span>
                        <Cpu className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">1,480</span>
                        <span className="text-xs text-slate-400">32 regions</span>
                      </div>
                      <div className="mt-3 w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-purple-500 h-full rounded-full w-[65%]" />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#131826] border border-white/[0.06]">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Zero-Cold Starts</span>
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">99.998%</span>
                        <span className="text-xs text-emerald-400 font-medium">Warm snapshot</span>
                      </div>
                      <div className="mt-3 w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full w-[99%]" />
                      </div>
                    </div>
                  </div>

                  {/* Micro Visual Chart Mockup */}
                  <div className="p-5 rounded-xl bg-[#121624] border border-white/[0.06] space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-indigo-400" />
                        <span className="font-semibold text-white">Real-Time Event Stream Distribution</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">Interval: 100ms Live</span>
                    </div>

                    <div className="h-28 flex items-end gap-1.5 pt-4">
                      {[35, 42, 48, 55, 62, 58, 67, 72, 85, 78, 64, 70, 82, 89, 94, 91, 86, 92, 97, 88, 93, 98, 95, 100].map((val, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                          <div 
                            style={{ height: `${val}%` }} 
                            className="w-full rounded-t bg-gradient-to-t from-indigo-700 via-indigo-500 to-purple-400 opacity-80 group-hover:opacity-100 transition-opacity" 
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'pipeline' && (
                <div className="space-y-4 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-[#090c14] border border-white/[0.06] space-y-2">
                    <div className="flex items-center justify-between text-emerald-400">
                      <span>✓ PIPELINE #8942-MAIN: DEPLOY_EDGE_CLUSTER</span>
                      <span className="text-slate-400">Duration: 1.4s</span>
                    </div>
                    <div className="text-slate-400 pl-4 border-l border-indigo-500/30 space-y-1">
                      <p>→ Resolving manifest [packages/cloud-runtime/package.json]</p>
                      <p>→ Tree-shaking 184 dependencies (Turbopack AST analyzer)</p>
                      <p className="text-indigo-300">→ Distributing to 32 edge nodes across US, EU, AP...</p>
                      <p className="text-emerald-400 font-bold">✓ Cluster synchronized with TLS 1.3 certificates verified.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'logs' && (
                <div className="p-4 rounded-xl bg-[#090c14] border border-white/[0.06] font-mono text-xs text-slate-300 space-y-1.5 h-56 overflow-y-auto">
                  <p className="text-slate-500">[09:55:01.002] INFO worker-us-east-1: worker initialized (boot: 0.8ms)</p>
                  <p className="text-indigo-400">[09:55:01.120] SYNC raft-consensus: quorum verified across 5 nodes</p>
                  <p className="text-emerald-400">[09:55:01.240] HTTP GET /api/v2/stream 200 OK 1.4ms (client: tokyo-node)</p>
                  <p className="text-slate-400">[09:55:01.350] CACHE hit key="user_session_9182" in-memory 0.05ms</p>
                  <p className="text-emerald-400">[09:55:01.480] HTTP POST /v1/ingest 201 Created 2.1ms (payload: 1.2MB)</p>
                  <p className="text-slate-500">[09:55:01.620] GC sweep: memory reclaimed 42MB</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Customer Trust Logos */}
        <div className="mt-20 pt-10 border-t border-white/[0.06]">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-8">
            Powering mission-critical platforms at hyper-growth organizations
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center opacity-70">
            {['Veloce Systems', 'SynthAI Labs', 'CloudScale Inc', 'PulseMetric', 'PrismFlow', 'Kinetix'].map((brand, i) => (
              <div 
                key={i} 
                className="flex items-center justify-center py-2 px-4 rounded-lg bg-white/[0.02] border border-white/[0.04] text-sm font-semibold text-slate-400 hover:text-white hover:border-white/[0.1] transition-all cursor-default"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
