export default function Footer() {
  return (
    <footer className="px-4 sm:px-8 py-4 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500 gap-2">
      <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
        <span>© {new Date().getFullYear()} REPAKA AJAY.</span>
        <span className="hidden sm:inline text-slate-700">|</span>
        <span>Hyderabad, India</span>
      </div>
      <div className="flex items-center gap-2">
        <span>Built with AI using Google AI Studio</span>
        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
      </div>
    </footer>
  );
}
