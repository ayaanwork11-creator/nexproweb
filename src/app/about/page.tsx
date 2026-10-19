import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Globe2, 
  Heart, 
  Users, 
  Award,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: 'About Us — NexPro Cloud',
  description:
    'Our mission is to eliminate cloud infrastructure complexity and empower engineers to deploy distributed applications with zero friction.',
};

const VALUES = [
  {
    icon: Cpu,
    title: 'Obsession with Microseconds',
    desc: 'Every millisecond shaved from execution latency translates directly to better end-user experiences and reduced compute energy consumption.',
  },
  {
    icon: Layers,
    title: 'Zero Unnecessary Layers',
    desc: 'We refuse bloated abstraction layers. We build simple, robust primitives that do one job exceptionally well and compose effortlessly.',
  },
  {
    icon: ShieldCheck,
    title: 'Deterministic Resilience',
    desc: 'Failures in distributed systems are inevitable. We build software that expects failures, self-heals in milliseconds, and preserves state integrity.',
  },
  {
    icon: Heart,
    title: 'Developer Empathy First',
    desc: 'Great tools inspire great craft. We obsess over every CLI error message, API response, and dashboard interaction.',
  },
];

const TIMELINE = [
  {
    year: '2023',
    title: 'Inception & Isolate Runtime Research',
    desc: 'Started as an open-source research initiative exploring snapshot-based V8 micro-isolates to solve the serverless cold-start dilemma.',
  },
  {
    year: '2024',
    title: 'Global Anycast Edge Network Launch',
    desc: 'Deployed initial PoPs across North America and Europe, processing our first billion monthly production requests for early pilot teams.',
  },
  {
    year: '2025',
    title: 'NexPro 2.0 & Active-Active State Sync',
    desc: 'Introduced CRDT-backed global state sync and raised $24M Series A to expand the international engineering and security audit teams.',
  },
  {
    year: '2026',
    title: 'NexPro 2.5 & Autonomous AI Workflows',
    desc: 'Powering over 40,000+ development teams worldwide with sub-millisecond edge compute and native streaming AI inference pipelines.',
  },
];

const TEAM = [
  {
    name: 'Dr. Aris Thorne',
    role: 'Co-founder & CEO',
    bio: 'Former distributed systems lead at Cloudflare & CERN. PhD in Computer Science from MIT.',
    avatar: 'AT',
    bg: 'from-indigo-600 to-purple-600',
  },
  {
    name: 'Kavita Sundaram',
    role: 'Co-founder & CTO',
    bio: 'Architected high-throughput financial routing engines at Stripe. Creator of open-source Raft consensus implementations.',
    avatar: 'KS',
    bg: 'from-blue-600 to-cyan-600',
  },
  {
    name: 'Julian Vance',
    role: 'Head of Product Design',
    bio: 'Previously led design systems and developer tooling experiences at Figma and Vercel.',
    avatar: 'JV',
    bg: 'from-purple-600 to-pink-600',
  },
  {
    name: 'Miriam Al-Hassan',
    role: 'VP of Security & Trust',
    bio: 'Decade of experience directing cloud perimeter security and SOC2 / FedRAMP compliance for federal agencies.',
    avatar: 'MA',
    bg: 'from-emerald-600 to-teal-600',
  },
];

export default function AboutPage() {
  return (
    <div className="py-20 bg-[#080a0f] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Users className="w-3.5 h-3.5" />
            <span>Company & Engineering Mission</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            We build the cloud we always wished existed.
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            NexPro was founded by engineers frustrated by the spiraling complexity of modern cloud infrastructure. 
            We believe shipping software to production should be as instant as saving a local file.
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Our Core Engineering Values
            </h2>
            <p className="text-sm text-slate-400">
              Principles guiding every commit, protocol design, and architectural trade-off we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0e1320] border border-white/[0.08] hover:border-indigo-500/30 transition-all space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{val.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Journey */}
        <div className="mb-24 rounded-3xl bg-[#0b0e17] border border-white/[0.08] p-8 sm:p-14">
          <div className="max-w-2xl mb-12 space-y-3">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              The Journey So Far
            </h2>
            <p className="text-sm text-slate-400">
              From a prototype isolate runner to a global mission-critical infrastructure platform.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-white/[0.08]">
            {TIMELINE.map((step, idx) => (
              <div key={idx} className="relative flex items-start gap-6 sm:gap-8 group">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-indigo-600 border-4 border-[#0b0e17] flex-shrink-0 z-10 flex items-center justify-center text-[10px] font-bold text-white shadow-md">
                  {idx + 1}
                </div>
                <div className="p-6 rounded-2xl bg-[#0f1422] border border-white/[0.06] flex-1 space-y-1.5 group-hover:border-indigo-500/30 transition-colors">
                  <div className="flex items-center justify-between text-xs font-mono text-indigo-400">
                    <span className="font-bold">{step.year}</span>
                    <span>MILESTONE</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div id="team" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Leadership & Architecture Team
            </h2>
            <p className="text-sm text-slate-400">
              Experienced systems engineers and security veterans dedicated to developer velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0e1320] border border-white/[0.08] hover:border-white/[0.15] transition-all space-y-4"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${member.bg} flex items-center justify-center font-bold text-xl text-white shadow-lg`}>
                  {member.avatar}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">{member.name}</h3>
                  <span className="text-xs font-medium text-indigo-400">{member.role}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Footprint Banner */}
        <div className="rounded-2xl p-8 sm:p-12 bg-gradient-to-r from-indigo-950/40 via-[#0d121f] to-purple-950/40 border border-indigo-500/30 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Global Edge Backbone</span>
          </div>
          <h3 className="text-3xl font-bold text-white">32 International Points of Presence</h3>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Our multi-cloud edge mesh spans North America, Europe, Asia-Pacific, Latin America, and Oceania, guaranteeing &lt;2ms response times for 95% of global internet users.
          </p>
          <div className="pt-2">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
            >
              <span>Deploy on Global Mesh</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
