import { motion } from 'motion/react';

export default function Education() {
  return (
    <section id="education" className="py-4">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Education</h2>
          <div className="text-xs sm:text-sm">
            <p className="text-white font-medium">Bachelor of Technology (B.Tech) in Cybersecurity</p>
            <p className="opacity-60 mt-1">Malla Reddy Engineering College • Malla Reddy University</p>
            <p className="text-cyan-500/80 mt-1 font-mono text-[10px] sm:text-xs">Graduated June 2025 • Hyderabad, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}
