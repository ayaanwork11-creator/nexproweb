import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Compass, LifeBuoy } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-20 bg-[#080a0f]">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
          <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
          <span>HTTP 404 — Edge Node Not Found</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Page lost in distributed memory.
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed">
          The route you are looking for has been moved, removed, or never synchronized across our edge clusters.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/30"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
          >
            <LifeBuoy className="w-4 h-4" />
            <span>Support Desk</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-white/[0.06] text-xs text-slate-500">
          <span>Requested path could not be resolved by Anycast DNS.</span>
        </div>
      </div>
    </div>
  );
}
