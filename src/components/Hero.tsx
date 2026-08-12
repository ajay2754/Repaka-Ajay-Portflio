import { motion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const navHeight = 72;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  return (
    <section id="home" className="pt-8 pb-4">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]" />
          
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 mb-4 ring-4 ring-cyan-500/10 flex items-center justify-center text-white text-2xl font-bold z-10">AR</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 z-10">REPAKA AJAY</h1>
          <p className="text-cyan-400 font-mono text-sm sm:text-base mb-3 z-10">Agentic AI Engineer</p>
          <p className="text-xs sm:text-sm leading-relaxed opacity-80 max-w-2xl mb-6 z-10">
            Building intelligent AI agents with LangGraph, RAG, MCP, FastAPI and Python.<br className="hidden sm:block" />
            I design and build AI systems capable of reasoning, planning, using tools, retrieving knowledge, maintaining memory and performing multi-step tasks.
          </p>
          <div className="flex gap-3 mb-6 z-10">
            <a href="https://linkedin.com/in/repakaajay" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </a>
            <a href="https://github.com/repakaajay" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
              <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </a>
            <a href="mailto:jayajay2754@gmail.com" className="p-2 sm:p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </a>
          </div>
          <div className="flex gap-3 z-10">
            <a href="#projects" onClick={(e) => handleScroll(e, '#projects')} className="px-5 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full transition-all text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              View Projects
            </a>
            <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-all text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
