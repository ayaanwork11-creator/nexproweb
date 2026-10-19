'use client';

import React, { useState } from 'react';
import { 
  Play, 
  RotateCw, 
  Terminal, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  Database, 
  Globe2, 
  Zap,
  Code2,
  Clock
} from 'lucide-react';

type DemoMode = 'api' | 'llm' | 'cluster';

export default function InteractiveDemo() {
  const [activeMode, setActiveMode] = useState<DemoMode>('api');
  const [region, setRegion] = useState('us-east (Virginia)');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationComplete, setSimulationComplete] = useState(false);
  const [concurrency, setConcurrency] = useState(2500);

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimulationComplete(false);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulationComplete(true);
    }, 900);
  };

  const getCalculatedLatency = () => {
    if (region.includes('us-east')) return '1.14 ms';
    if (region.includes('eu-central')) return '1.38 ms';
    if (region.includes('ap-northeast')) return '1.82 ms';
    return '1.25 ms';
  };

  return (
    <section id="interactive-demo" className="py-24 relative bg-[#07090e] border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Zap className="w-3.5 h-3.5" />
            <span>Live Interactive Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience the NexPro runtime in real-time.
          </h2>
          <p className="text-base text-slate-400">
            Select an architectural workflow, configure regional deployment targets, and simulate live distributed execution.
          </p>
        </div>

        {/* Sandbox Container */}
        <div className="rounded-2xl border border-white/[0.1] bg-[#0c101a] shadow-2xl overflow-hidden">
          {/* Top Mode Bar */}
          <div className="p-4 bg-[#090d16] border-b border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <button
                type="button"
                onClick={() => { setActiveMode('api'); setSimulationComplete(false); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeMode === 'api'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-[#121624] text-slate-400 hover:text-white'
                }`}
              >
                <Globe2 className="w-4 h-4" />
                <span>Edge Microservice & Cache</span>
              </button>

              <button
                type="button"
                onClick={() => { setActiveMode('llm'); setSimulationComplete(false); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeMode === 'llm'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-[#121624] text-slate-400 hover:text-white'
                }`}
              >
                <Cpu className="w-4 h-4" />
                <span>AI Agent Pipeline</span>
              </button>

              <button
                type="button"
                onClick={() => { setActiveMode('cluster'); setSimulationComplete(false); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeMode === 'cluster'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-[#121624] text-slate-400 hover:text-white'
                }`}
              >
                <Database className="w-4 h-4" />
                <span>Multi-Region Raft Consensus</span>
              </button>
            </div>

            {/* Region Selector & Controls */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-medium hidden sm:inline">PoP:</span>
                <select
                  value={region}
                  onChange={(e) => { setRegion(e.target.value); setSimulationComplete(false); }}
                  className="px-3 py-1.5 rounded-lg bg-[#141a29] border border-white/[0.1] text-xs font-mono text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  <option value="us-east (Virginia)">us-east (Virginia)</option>
                  <option value="eu-central (Frankfurt)">eu-central (Frankfurt)</option>
                  <option value="ap-northeast (Tokyo)">ap-northeast (Tokyo)</option>
                </select>
              </div>

              <button
                type="button"
                onClick={handleRunSimulation}
                disabled={isSimulating}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md shadow-emerald-600/30 disabled:opacity-60"
              >
                {isSimulating ? (
                  <>
                    <RotateCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Executing...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Run Simulation</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
            {/* Left: Code Definition */}
            <div className="lg:col-span-7 p-6 bg-[#0a0d15] font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] text-slate-400">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-indigo-400" />
                  <span>runtime/{activeMode === 'api' ? 'edge-handler.ts' : activeMode === 'llm' ? 'agent-workflow.ts' : 'cluster-replicate.ts'}</span>
                </div>
                <span className="text-[11px] text-slate-500">TypeScript 5.0</span>
              </div>

              <pre className="overflow-x-auto text-slate-300 leading-relaxed font-mono text-xs sm:text-[13px]">
                {activeMode === 'api' && `import { edgeHandler, cache } from '@nexpro/runtime';

export default edgeHandler({
  region: '${region}',
  memory: '128MB',
  timeoutMs: 5000,
  async handler(req) {
    // 1. Instant cache lookup with sub-millisecond CRDT
    const cached = await cache.get(req.id, { staleWhileRevalidate: 60 });
    if (cached) return Response.json(cached, { headers: { 'X-Cache': 'HIT' } });

    // 2. Perform distributed calculation
    const payload = await computeSummary(req.body);
    await cache.set(req.id, payload, { ttl: 3600 });

    return Response.json({ success: true, payload, latency: '${getCalculatedLatency()}' });
  }
});`}

                {activeMode === 'llm' && `import { agent, streamTokens } from '@nexpro/ai';

export const triageAgent = agent({
  model: 'nexpro-fast-inference-v2',
  targetRegion: '${region}',
  tools: ['databaseLookup', 'sendSlackAlert'],
  async onPrompt(prompt, context) {
    // Zero-overhead streaming token dispatch to client edge
    return streamTokens(prompt, {
      temperature: 0.2,
      maxTokens: 1024,
      systemPrompt: 'You are an autonomous DevOps triage assistant.'
    });
  }
});`}

                {activeMode === 'cluster' && `import { raftCluster } from '@nexpro/consensus';

export const syncCluster = raftCluster({
  electionTimeout: 150,
  heartbeatInterval: 50,
  peers: ['us-east-1', 'eu-central-1', 'ap-northeast-1'],
  onCommit(entry) {
    console.log('[RAFT] Quorum reached for logIndex:', entry.index);
    return { replicated: true, syncMs: 0.42 };
  }
});`}
              </pre>

              {/* Concurrency slider */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Simulated Concurrent Requests:</span>
                  <span className="font-bold text-white">{concurrency.toLocaleString()} req/s</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="500"
                  value={concurrency}
                  onChange={(e) => setConcurrency(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Right: Real-time Telemetry & Output */}
            <div className="lg:col-span-5 p-6 bg-[#0c101c] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Execution Telemetry
                  </h4>
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Ready
                  </span>
                </div>

                {/* Progress sequence */}
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#111726] border border-white/[0.04]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300">1. Edge DNS Anycast Routing</span>
                    <span className="ml-auto text-slate-400">0.2ms</span>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#111726] border border-white/[0.04]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300">2. V8 Micro-Isolate Warm Boot</span>
                    <span className="ml-auto text-slate-400">0.5ms</span>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#111726] border border-white/[0.04]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300">3. CRDT State Sync ({region.split(' ')[0]})</span>
                    <span className="ml-auto text-slate-400">{getCalculatedLatency()}</span>
                  </div>
                </div>

                {/* Response Payload Display */}
                <div className="p-4 rounded-xl bg-[#090c14] border border-white/[0.08] font-mono text-xs text-slate-300 space-y-1">
                  <div className="flex items-center justify-between text-slate-400 text-[11px] pb-1 border-b border-white/[0.05]">
                    <span>STATUS: 200 OK</span>
                    <span>P99: {getCalculatedLatency()}</span>
                  </div>
                  <pre className="text-emerald-400 pt-2 overflow-x-auto text-[11px]">
{simulationComplete ? `{
  "status": "success",
  "edgeRegion": "${region}",
  "concurrencyHandled": ${concurrency},
  "executionDuration": "${getCalculatedLatency()}",
  "cacheEfficiency": "99.4%",
  "activeReplicas": 16,
  "tlsHandshake": "0.1ms"
}` : `{
  "ready": true,
  "click": "Run Simulation button above"
}`}
                  </pre>
                </div>
              </div>

              {/* Bottom callout */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                  Instant cold-boot snapshot
                </span>
                <span className="text-indigo-400 font-semibold cursor-pointer hover:underline">
                  View Raw Flame Graph →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
