'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  HelpCircle,
  Calculator
} from 'lucide-react';

export default function PricingCalculator() {
  const [annualBilling, setAnnualBilling] = useState(true);
  const [seats, setSeats] = useState(5);

  const starterPrice = 0;
  const proBasePrice = annualBilling ? 39 : 49;
  const proCalculated = proBasePrice * seats;
  const enterpriseBasePrice = annualBilling ? 149 : 189;
  const enterpriseCalculated = enterpriseBasePrice * seats;

  // Estimated devops engineering hours saved per month
  const hoursSaved = seats * 18;
  const estimatedDollarsSaved = hoursSaved * 85;

  return (
    <section id="pricing" className="py-24 relative bg-[#090b10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent, Predictable Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Scale as you grow. No hidden surprises.
          </h2>
          <p className="text-base text-slate-400">
            Start completely free for developer prototypes, then scale seamlessly to enterprise production workloads.
          </p>

          {/* Billing Toggle */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!annualBilling ? 'text-white' : 'text-slate-400'}`}>
              Monthly Billing
            </span>
            <button
              type="button"
              onClick={() => setAnnualBilling(!annualBilling)}
              className="relative w-14 h-8 rounded-full bg-[#182033] border border-white/[0.1] p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle annual or monthly billing"
            >
              <div
                className={`w-6 h-6 rounded-full bg-indigo-500 shadow-md transform transition-transform duration-200 ${
                  annualBilling ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${annualBilling ? 'text-white' : 'text-slate-400'}`}>
                Annual Billing
              </span>
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {/* Starter Plan */}
          <div className="rounded-2xl bg-[#0e1320] border border-white/[0.08] p-8 flex flex-col justify-between hover:border-white/[0.15] transition-all">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Starter</h3>
                <p className="text-xs text-slate-400 mt-1">For indie hackers and hobby prototypes.</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-extrabold text-white">$0</span>
                <span className="text-sm text-slate-400">/ forever</span>
              </div>

              <ul className="space-y-3 text-sm text-slate-300 pt-4 border-t border-white/[0.06]">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Up to 3 active micro-services</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100,000 edge invocations / mo</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>1GB distributed KV cache</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Community Discord support</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6">
              <Link
                href="/contact"
                className="w-full block text-center py-3 rounded-xl font-semibold text-sm text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-colors"
              >
                Deploy Free Cluster
              </Link>
            </div>
          </div>

          {/* Pro / Team Plan (Recommended) */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#141b2d] to-[#0f1422] border-2 border-indigo-500 shadow-2xl shadow-indigo-950/50 p-8 flex flex-col justify-between -translate-y-2">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md">
              Most Popular Choice
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Pro Team</h3>
                <p className="text-xs text-slate-300 mt-1">For fast-moving engineering & startup teams.</p>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">
                    ${proBasePrice}
                  </span>
                  <span className="text-sm text-slate-300">/ seat / mo</span>
                </div>
                <p className="text-xs text-indigo-300 mt-1">
                  {annualBilling ? 'Billed annually ($468/yr)' : 'Billed month-to-month'}
                </p>
              </div>

              <ul className="space-y-3 text-sm text-slate-200 pt-4 border-t border-white/[0.1]">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span className="font-semibold text-white">Unlimited micro-services & sandboxes</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span>10,000,000 edge invocations / mo</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span>50GB Global active-active state cache</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span>Autonomous AI Agent execution pipelines</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span>Priority 24/7 Slack & ticket support</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/35 transition-all group"
              >
                <span>Start 14-Day Pro Trial</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="rounded-2xl bg-[#0e1320] border border-white/[0.08] p-8 flex flex-col justify-between hover:border-white/[0.15] transition-all">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Enterprise Scale</h3>
                <p className="text-xs text-slate-400 mt-1">For mission-critical production workloads.</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-extrabold text-white">Custom</span>
                <span className="text-sm text-slate-400">/ volume-based</span>
              </div>

              <ul className="space-y-3 text-sm text-slate-300 pt-4 border-t border-white/[0.06]">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Dedicated isolated VPC & private edge PoPs</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Custom 99.999% SLA uptime contract</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>SOC2 Type II, HIPAA & GDPR compliance pack</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Dedicated solutions architect & 15-min response</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6">
              <Link
                href="/contact"
                className="w-full block text-center py-3 rounded-xl font-semibold text-sm text-white bg-white/[0.08] hover:bg-white/[0.12] transition-colors"
              >
                Contact Enterprise Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive Team Size & ROI Estimator */}
        <div className="rounded-2xl p-8 bg-[#0b0f19] border border-white/[0.08] shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Interactive Team ROI Estimator</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Calculate your exact savings with NexPro.
              </h3>
              <p className="text-sm text-slate-400">
                Adjust your active engineering team size to see projected monthly cost and DevOps maintenance hours reclaimed.
              </p>

              <div className="pt-2">
                <div className="flex items-center justify-between text-sm text-slate-300 mb-2">
                  <span>Engineers on Team:</span>
                  <span className="font-bold text-white text-base">{seats} Engineers</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={seats}
                  onChange={(e) => setSeats(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Projected Savings Metrics */}
            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="p-5 rounded-xl bg-[#111726] border border-white/[0.06] text-center min-w-[160px]">
                <span className="text-xs text-slate-400 font-medium">Reclaimed Time</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1">
                  ~{hoursSaved} hrs
                </div>
                <span className="text-[11px] text-slate-500 mt-1 block">per month</span>
              </div>

              <div className="p-5 rounded-xl bg-[#111726] border border-white/[0.06] text-center min-w-[160px]">
                <span className="text-xs text-slate-400 font-medium">Projected Savings</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 mt-1">
                  ${estimatedDollarsSaved.toLocaleString()}
                </div>
                <span className="text-[11px] text-slate-500 mt-1 block">vs custom DevOps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantees banner */}
        <div className="mt-12 text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            14-day fully featured free trial
          </span>
          <span>•</span>
          <span>No credit card required for Starter</span>
          <span>•</span>
          <span>Cancel or adjust seats anytime</span>
        </div>
      </div>
    </section>
  );
}
