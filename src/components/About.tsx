import { motion } from 'motion/react';
import { Bot, BrainCircuit, Link2, Database, Zap, FileCode2 } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: Bot, label: 'Agentic AI', emoji: '🤖' },
  { icon: BrainCircuit, label: 'LLM Apps', emoji: '🧠' },
  { icon: Link2, label: 'MCP', emoji: '🔗' },
  { icon: Database, label: 'RAG', emoji: '📚' },
  { icon: Zap, label: 'FastAPI', emoji: '⚡' },
  { icon: FileCode2, label: 'Python', emoji: '🐍' },
];

export default function About() {
  return (
    <section id="about" className="py-4">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
            About Me
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 text-xs sm:text-sm leading-relaxed opacity-70 space-y-3">
              <p>I am an Agentic AI / LLM Engineer with hands-on experience designing multimodal, tool-using and multi-step AI agents. I work with technologies such as LangChain, LangGraph and Model Context Protocol (MCP).</p>
              <p>I am comfortable working across the agentic AI stack including planning, memory, tool/function calling, FastAPI backends and Retrieval-Augmented Generation pipelines with vector search.</p>
              <p>I actively build and test AI projects end-to-end while learning production practices including agent evaluation, observability and multi-agent orchestration.</p>
            </div>
            
            <div className="w-full md:w-64 grid grid-cols-2 gap-2 h-max">
              {HIGHLIGHTS.map(item => (
                <div key={item.label} className="bg-slate-800/50 p-2 rounded-lg text-[10px] sm:text-xs border border-slate-700/50 flex items-center gap-2">
                  <span className="text-cyan-400">{item.emoji}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
