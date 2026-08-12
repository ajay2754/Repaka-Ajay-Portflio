import { motion } from 'motion/react';

const SKILL_CATEGORIES = [
  {
    title: 'Agentic AI',
    skills: ['LangGraph', 'LangChain', 'MCP', 'Tool Calling', 'Planning', 'Memory', 'Reflection', 'Multi-Agent', 'Eval', 'CrewAI']
  },
  {
    title: 'LLM APIs',
    skills: ['OpenAI', 'Anthropic Claude', 'Google Gemini']
  },
  {
    title: 'RAG & Retrieval',
    skills: ['RAG', 'Embeddings', 'ChromaDB', 'Vector Search', 'Chunking']
  },
  {
    title: 'Backend',
    skills: ['Python', 'FastAPI', 'REST APIs', 'Pydantic', 'Async']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'SQLite']
  },
  {
    title: 'DevOps & Cloud',
    skills: ['Docker', 'Kubernetes', 'Render', 'AWS', 'GitHub']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-4">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            Technical Stack
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((category) => (
              <div key={category.title}>
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">{category.title}</p>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-slate-800 rounded text-[10px] sm:text-xs text-slate-300 border border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
