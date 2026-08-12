import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    title: 'RAG PDF Assistant',
    tag: 'Python • ChromaDB',
    tagColor: 'text-cyan-400 bg-cyan-500/10',
    description: 'A Retrieval-Augmented Generation system allowing natural language queries on PDFs with grounded responses.',
    features: ['Document chunking & embeddings', 'ChromaDB vector storage', 'Semantic search', 'Context-aware LLM responses'],
    githubUrl: 'https://github.com/repakaajay',
    liveUrl: null,
  },
  {
    title: 'Autonomous Task Agent',
    tag: 'LangGraph • OpenAI',
    tagColor: 'text-blue-400 bg-blue-500/10',
    description: 'Stateful AI agent capable of planning multi-step tasks and using tools dynamically via state management.',
    features: ['Multi-step task planning', 'Tool selection & execution', 'LangGraph state management', 'Output reflection'],
    githubUrl: 'https://github.com/repakaajay',
    liveUrl: null,
  },
  {
    title: 'MCP Orchestrator',
    tag: 'MCP • Python',
    tagColor: 'text-purple-400 bg-purple-500/10',
    description: 'Assistant connecting external services (Gmail, GitHub, Filesystem) through Model Context Protocol.',
    features: ['MCP server communication', 'Dynamic tool discovery', 'Protocol-based integration'],
    githubUrl: 'https://github.com/repakaajay',
    liveUrl: null,
  },
  {
    title: 'Conversational AI Backend',
    tag: 'FastAPI • REST',
    tagColor: 'text-emerald-400 bg-emerald-500/10',
    description: 'A backend system for building multi-turn conversational AI applications with streaming capabilities.',
    features: ['FastAPI REST endpoints', 'Streaming responses', 'Persistent chat history'],
    githubUrl: 'https://github.com/repakaajay',
    liveUrl: null,
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-4">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map((project) => (
              <div key={project.title} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 md:p-5 hover:border-cyan-500/50 transition-colors flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm sm:text-base font-bold text-white">{project.title}</h3>
                  <span className={`px-2 py-0.5 text-[10px] rounded shrink-0 ml-2 ${project.tagColor}`}>
                    {project.tag}
                  </span>
                </div>
                
                <p className="text-[11px] sm:text-xs opacity-70 mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="mb-4 hidden sm:block">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Key Capabilities</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-[10px] sm:text-[11px] opacity-70 flex items-start">
                        <span className="text-cyan-500 mr-1.5 mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-2 mt-auto pt-3 sm:pt-4 border-t border-slate-800/50">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] sm:text-xs text-white bg-slate-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded hover:bg-slate-600 flex items-center gap-1.5">
                    <Github className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> GitHub
                  </a>
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] sm:text-xs text-slate-900 bg-cyan-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded hover:bg-cyan-300 flex items-center gap-1.5">
                      <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Live Demo
                    </a>
                  ) : (
                    <button disabled className="text-[10px] sm:text-xs text-slate-400 border border-slate-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded cursor-not-allowed">
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
