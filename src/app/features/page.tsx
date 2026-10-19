'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Zap, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Activity, 
  Layers, 
  Check, 
  ArrowRight, 
  Code2, 
  Sparkles,
  Server,
  Lock,
  GitBranch,
  Terminal
} from 'lucide-react';

const ARCH_COLUMNS = [
  {
    icon: Zap,
    title: 'V8 Micro-Isolate Engine',
    tag: 'Execution Plane',
    desc: 'Runs zero-cold-start compute instances in hardware-isolated memory heaps. Boots in under 0.8ms without Linux namespace container lag.',
    specs: ['Boot: < 0.8ms', 'Memory: 128MB - 4GB', 'Concurrency: 100k/host'],
  },
  {
    icon: Database,
    title: 'Global CRDT Storage Layer',
    tag: 'State Plane',
    desc: 'Conflict-free replicated data types distributed across 32 points of presence with automatic convergence and microsecond read latencies.',
    specs: ['Active-Active Replication', 'Sub-millisecond Read', 'ACID Transactions'],
  },
  {
    icon: Cpu,
    title: 'Autonomous AI Orchestration',
    tag: 'Intelligence Plane',
    desc: 'Native streaming inference router with built-in prompt caching, semantic vector similarity, and automated tool dispatching.',
    specs: ['Streaming Token Dispatches', 'Vector Nearest-Neighbor', 'Tool Invocation'],
  },
  {
    icon: ShieldCheck,
    title: 'Zero-Trust Security Mesh',
    tag: 'Perimeter Plane',
    desc: 'Automatic end-to-end mutual TLS encryption with dynamic key exchange, hardware secret vaults, and DDoS scrubbers.',
    specs: ['TLS 1.3 Strict', 'Hardware HSM Secrets', 'Layer 7 WAF Filtering'],
  },
];

const COMPARISON_ROWS = [
  {
    feature: 'Cold-start latency',
    nexpro: '< 1.2 ms (Instant)',
    traditionalServerless: '250ms - 2,500ms',
    kubernetes: '15s - 60s (Container pull)',
  },
  {
    feature: 'Global multi-region state sync',
    nexpro: 'Built-in active-active CRDT',
    traditionalServerless: 'Manual DynamoDB / Aurora setup',
    kubernetes: 'Complex multi-cluster mesh',
  },
  {
    feature: 'Configuration & DevOps overhead',
    nexpro: 'Zero YAML, 1-command deploy',
    traditionalServerless: 'Moderate (CloudFormation/Terraform)',
    kubernetes: 'Extremely high (Helm, Kube manifests)',
  },
  {
    feature: 'Edge AI streaming support',
    nexpro: 'Native token streaming & vector cache',
    traditionalServerless: 'High latency API hops',
    kubernetes: 'Requires GPU node pools',
  },
  {
    feature: 'Ephemeral preview sandboxes',
    nexpro: 'Automatic per Git Pull Request',
    traditionalServerless: 'Complex custom staging pipelines',
    kubernetes: 'High resource consumption per branch',
  },
  {
    feature: 'Distributed tracing (OTel)',
    nexpro: '100% native with zero overhead',
    traditionalServerless: 'Additional Datadog/NewRelic agent fees',
    kubernetes: 'Requires daemonset sidecars',
  },
];

export default function FeaturesPage() {
  const [activeCodeTab, setActiveCodeTab] = useState<'edge' | 'state' | 'ai'>('edge');

  return (
    <div className="py-20 bg-[#080a0f] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architecture & Engine Specifications</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Engineered for pure speed and resilience.
          </h1>
          <p className="text-base sm:text-lg text-slate-400">
            Explore the core building blocks powering the NexPro high-velocity edge cloud runtime.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {ARCH_COLUMNS.map((col, idx) => {
            const Icon = col.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0e1320] border border-white/[0.08] hover:border-indigo-500/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider block">
                    {col.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {col.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {col.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-1.5">
                  {col.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Code Workbench */}
        <div className="mb-24 rounded-2xl bg-[#0c101a] border border-white/[0.1] shadow-2xl overflow-hidden">
          <div className="p-4 bg-[#090d16] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-indigo-400" />
              <span className="text-sm font-bold text-white">SDK Implementation Examples</span>
            </div>

            <div className="flex items-center gap-1 bg-[#121624] p-1 rounded-lg">
              <button
                type="button"
                onClick={() => setActiveCodeTab('edge')}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                  activeCodeTab === 'edge' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Edge Compute
              </button>
              <button
                type="button"
                onClick={() => setActiveCodeTab('state')}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                  activeCodeTab === 'state' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                CRDT State
              </button>
              <button
                type="button"
                onClick={() => setActiveCodeTab('ai')}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                  activeCodeTab === 'ai' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                AI Pipelines
              </button>
            </div>
          </div>

          <div className="p-6 bg-[#090c14] font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto">
            {activeCodeTab === 'edge' && (
              <pre className="text-slate-200 leading-relaxed">
{`// src/routes/checkout.ts
import { route, validate } from '@nexpro/core';
import { z } from 'zod';

const OrderSchema = z.object({
  cartId: z.string().uuid(),
  customerEmail: z.string().email(),
  currency: z.literal('USD'),
});

export const POST = route({
  memory: '256MB',
  regions: ['auto-anycast'],
  async handler({ body, state }) {
    const order = validate(body, OrderSchema);
    
    // Executes in < 0.8ms at closest regional edge PoP
    const reservation = await state.lockInventory(order.cartId);
    return Response.json({ success: true, reservationId: reservation.id });
  }
});`}
              </pre>
            )}

            {activeCodeTab === 'state' && (
              <pre className="text-slate-200 leading-relaxed">
{`// src/services/presence.ts
import { crdtMap } from '@nexpro/state';

// Distributed Active-Active CRDT Key-Value mapping
const activeUsers = crdtMap('global-presence-room');

export async function touchUserPresence(userId: string, metadata: Record<string, any>) {
  // Automatically resolves merge conflicts using Last-Write-Wins and logical timestamps
  await activeUsers.set(userId, {
    ...metadata,
    lastSeen: Date.now(),
    nodeRegion: process.env.NEXPRO_REGION
  });

  return activeUsers.size();
}`}
              </pre>
            )}

            {activeCodeTab === 'ai' && (
              <pre className="text-slate-200 leading-relaxed">
{`// src/agents/codeReviewer.ts
import { agentWorkflow, vectorIndex } from '@nexpro/ai';

const codebaseEmbeddings = vectorIndex('git-repository-vectors');

export default agentWorkflow({
  name: 'PrReviewAgent',
  async execute({ pullRequestDiff }) {
    // 1. Semantic search relevant architecture patterns in < 2ms
    const relevantDocs = await codebaseEmbeddings.querySimilarity(pullRequestDiff, { topK: 5 });

    // 2. Stream tokens back to the GitHub PR Webhook response
    return streamAiReview({
      diff: pullRequestDiff,
      contextDocs: relevantDocs,
      rules: ['no-secrets', 'prefer-strict-types', 'verify-accessibility']
    });
  }
});`}
              </pre>
            )}
          </div>
        </div>

        {/* Architectural Comparison Matrix */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Architectural Comparison Matrix
            </h2>
            <p className="text-sm text-slate-400">
              See how NexPro stacks up against traditional infrastructure patterns.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#0c101a]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#0f1422] text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-white/[0.06]">
                <tr>
                  <th className="py-4 px-6">Capability</th>
                  <th className="py-4 px-6 text-indigo-400">NexPro Cloud</th>
                  <th className="py-4 px-6">Traditional Serverless</th>
                  <th className="py-4 px-6">Custom Kubernetes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-slate-300">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-semibold text-white whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-indigo-300 font-semibold bg-indigo-500/[0.03]">
                      {row.nexpro}
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      {row.traditionalServerless}
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      {row.kubernetes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 pt-12 border-t border-white/[0.06]">
          <h3 className="text-2xl font-bold text-white">Ready to test these capabilities in your codebase?</h3>
          <div className="flex items-center justify-center gap-4 pt-2">
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl text-sm font-semibold text-slate-300 bg-white/[0.05] hover:bg-white/[0.1] transition-colors"
            >
              Schedule Tech Review
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
