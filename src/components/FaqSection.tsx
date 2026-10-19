'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: 'architecture' | 'pricing' | 'security';
}

const FAQS: FaqItem[] = [
  {
    category: 'architecture',
    question: 'How does NexPro achieve sub-millisecond cold starts?',
    answer:
      'NexPro utilizes memory-mapped V8 micro-isolates combined with pre-warmed snapshot trees. When an HTTP request or event trigger arrives at our edge anycast network, our runtime executes pre-warmed memory instances in less than 0.8ms, bypassing traditional container boot-up cycles.',
  },
  {
    category: 'architecture',
    question: 'Can I use existing Node.js, Next.js, and Python code?',
    answer:
      'Yes! NexPro supports standard Web APIs (Fetch, Request, Response, Streams), full Next.js App Router applications, Node.js packages, and WebAssembly modules. You can deploy directly using our CLI or GitHub integration without rewriting your application logic.',
  },
  {
    category: 'pricing',
    question: 'What happens if our traffic spikes beyond our current tier limit?',
    answer:
      'We never throttle your live traffic or degrade end-user response times. If you exceed your tier limits during unexpected virality or major product launches, we gracefully absorb the surge and bill fractional edge invocation overages at standard transparent rates without penalizing your uptime.',
  },
  {
    category: 'pricing',
    question: 'Is there a free trial for the Pro Team plan?',
    answer:
      'Yes, you receive a full 14-day free trial of the Pro Team plan upon signup. No credit card is required to begin prototyping with our Starter cluster.',
  },
  {
    category: 'security',
    question: 'What security certifications does NexPro maintain?',
    answer:
      'NexPro is audited and compliant with SOC 2 Type II, ISO 27001, HIPAA, and GDPR standards. All data at rest is encrypted using AES-256-GCM, and traffic in transit is strictly enforced with TLS 1.3 and mutual TLS (mTLS).',
  },
  {
    category: 'security',
    question: 'How does isolated multi-tenancy protect sensitive customer data?',
    answer:
      'Each customer workload runs inside hardware-level isolated sandbox boundaries. Memory spaces and execution threads are cryptographically isolated, ensuring complete protection against side-channel vulnerabilities and noisy-neighbor interference.',
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<'all' | 'architecture' | 'pricing' | 'security'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 relative bg-[#090b10] border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Got questions? We've got answers.
          </h2>
          <p className="text-base text-slate-400">
            Everything you need to know about the platform, migration, billing, and security.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4 mb-10">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. cold starts, SOC2, billing)..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#0f1422] border border-white/[0.08] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Topics' },
              { id: 'architecture', label: 'Architecture & Engine' },
              { id: 'pricing', label: 'Pricing & Scaling' },
              { id: 'security', label: 'Security & Compliance' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-[#121624] text-slate-400 hover:text-white border border-white/[0.06]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-slate-400 bg-[#0e1320] rounded-xl border border-white/[0.06]">
              No questions found matching your search term.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-white/[0.08] bg-[#0d121e] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-white tracking-tight">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-indigo-400 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/[0.04] pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
