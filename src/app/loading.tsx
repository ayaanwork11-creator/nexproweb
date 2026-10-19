import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-[#080a0f]">
      <div className="relative flex items-center justify-center">
        {/* Outer glowing pulsing ring */}
        <div className="w-16 h-16 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        <div className="absolute w-8 h-8 rounded-full bg-indigo-500/10 animate-ping" />
      </div>
      <p className="mt-4 text-xs font-mono text-slate-400 tracking-wider uppercase">
        Loading NexPro Engine...
      </p>
    </div>
  );
}
