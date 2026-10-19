import React from 'react';
import PricingCalculator from '@/components/PricingCalculator';
import FaqSection from '@/components/FaqSection';
import Link from 'next/link';
import { Check, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Pricing & Plans — NexPro Cloud',
  description:
    'Simple, transparent pricing for teams of every scale. Start free with our developer cluster or power global enterprises.',
};

const DETAILED_FEATURES = [
  {
    category: 'Compute & Execution',
    items: [
      { name: 'V8 Micro-Isolate Warm Starts', starter: 'Included', pro: 'Included', ent: 'Dedicated PoPs' },
      { name: 'Monthly Invocations', starter: '100,000', pro: '10,000,000', ent: 'Unlimited / Custom' },
      { name: 'Max Execution Timeout', starter: '10s', pro: '60s', ent: 'Custom (up to 15m)' },
      { name: 'Memory Allocation', starter: 'Up to 256MB', pro: 'Up to 2GB', ent: 'Up to 16GB' },
    ],
  },
  {
    category: 'State & Storage',
    items: [
      { name: 'Global Active-Active KV Cache', starter: '1 GB', pro: '50 GB', ent: 'Custom Petabyte' },
      { name: 'Vector Similarity Indexing', starter: '10k Vectors', pro: '500k Vectors', ent: 'Millions' },
      { name: 'Cross-Region Replicas', starter: '2 Regions', pro: 'All 32 Regions', ent: 'Isolated Private VPC' },
    ],
  },
  {
    category: 'Security & Enterprise',
    items: [
      { name: 'Automated mTLS 1.3 Encryption', starter: true, pro: true, ent: true },
      { name: 'Hardware HSM Secret Rotation', starter: false, pro: true, ent: true },
      { name: 'SOC 2 Type II & HIPAA Package', starter: false, pro: true, ent: true },
      { name: 'Custom Single Sign-On (SAML/Okta)', starter: false, pro: false, ent: true },
    ],
  },
  {
    category: 'Support & SLAs',
    items: [
      { name: 'Support Channels', starter: 'Community Discord', pro: '24/7 Slack & Email', ent: 'Dedicated Architect & Phone' },
      { name: 'Guaranteed Uptime SLA', starter: 'Best effort', pro: '99.95%', ent: '99.999% Financial SLA' },
      { name: 'Response Time Guarantee', starter: 'Community', pro: '< 2 Hours', ent: '< 15 Minutes' },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="py-12 bg-[#080a0f] text-slate-100">
      <PricingCalculator />

      {/* Feature By Feature Breakdown Table */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Detailed Feature Comparison
          </h2>
          <p className="text-sm text-slate-400">
            Compare every technical capability across all NexPro service tiers.
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.08] bg-[#0c101a] overflow-hidden">
          {DETAILED_FEATURES.map((section, sIdx) => (
            <div key={sIdx} className="border-b last:border-b-0 border-white/[0.06]">
              <div className="py-4 px-6 bg-[#0f1422] font-bold text-xs uppercase tracking-wider text-indigo-400">
                {section.category}
              </div>
              <div className="divide-y divide-white/[0.04]">
                {section.items.map((item, iIdx) => (
                  <div key={iIdx} className="grid grid-cols-12 py-3.5 px-6 text-sm items-center hover:bg-white/[0.02]">
                    <div className="col-span-6 font-medium text-slate-200">{item.name}</div>
                    <div className="col-span-2 text-center text-xs text-slate-400">
                      {typeof item.starter === 'boolean' ? (
                        item.starter ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : '—'
                      ) : (
                        item.starter
                      )}
                    </div>
                    <div className="col-span-2 text-center text-xs text-indigo-300 font-semibold">
                      {typeof item.pro === 'boolean' ? (
                        item.pro ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : '—'
                      ) : (
                        item.pro
                      )}
                    </div>
                    <div className="col-span-2 text-center text-xs text-slate-300">
                      {typeof item.ent === 'boolean' ? (
                        item.ent ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : '—'
                      ) : (
                        item.ent
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise Custom Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#121626] to-[#0e121f] border border-indigo-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold text-white">Need custom volume, HIPAA BAA, or private cloud?</h3>
            <p className="text-sm text-slate-400">
              Our engineering team will construct a tailored enterprise package with dedicated bandwidth, private nodes, and customized billing terms.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition-colors whitespace-nowrap flex items-center gap-2"
          >
            <span>Talk to Enterprise Engineering</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <FaqSection />
    </div>
  );
}
