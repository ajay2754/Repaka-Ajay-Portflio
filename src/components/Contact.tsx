import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:jayajay2754@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-4 pb-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 md:p-8">
          <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Let's Connect
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-xs sm:text-sm opacity-70 leading-relaxed">
                I'm interested in opportunities related to Agentic AI, LLM applications, AI agents and backend AI engineering. Feel free to contact me.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-800 rounded text-cyan-400"><Mail className="w-4 h-4" /></div>
                  <a href="mailto:jayajay2754@gmail.com" className="text-xs sm:text-sm text-white hover:text-cyan-400">jayajay2754@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-800 rounded text-cyan-400"><Phone className="w-4 h-4" /></div>
                  <span className="text-xs sm:text-sm text-white">+91-9553511640</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-800 rounded text-cyan-400"><MapPin className="w-4 h-4" /></div>
                  <span className="text-xs sm:text-sm text-white">Hyderabad, India</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-slate-800/30 border border-slate-700/50 p-5 rounded-xl space-y-3 text-xs sm:text-sm">
              <div className="grid grid-cols-2 gap-3">
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white focus:border-cyan-500 outline-none w-full" placeholder="Name" />
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white focus:border-cyan-500 outline-none w-full" placeholder="Email" />
              </div>
              <input type="text" name="subject" required value={formData.subject} onChange={handleChange} className="bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white focus:border-cyan-500 outline-none w-full" placeholder="Subject" />
              <textarea name="message" required rows={3} value={formData.message} onChange={handleChange} className="bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white focus:border-cyan-500 outline-none w-full resize-none" placeholder="Message"></textarea>
              <button type="submit" className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded text-xs font-bold uppercase tracking-wider transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
