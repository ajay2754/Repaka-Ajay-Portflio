import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Use a small timeout to allow the mobile menu to unmount before calculating scroll positions
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

  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/Ajay_Repaka_Resume.pdf');
      if (!response.ok) throw new Error('Network response was not ok');
      const blob = await response.blob();
      
      // Convert blob to base64 data URL to prevent mobile download manager failures
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result as string;
        const link = document.createElement('a');
        link.href = base64data;
        link.download = 'Ajay_Repaka_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      reader.readAsDataURL(blob);
    } catch (error) {
      console.error('Download failed:', error);
      window.open('/Ajay_Repaka_Resume.pdf', '_blank');
    }
    setIsOpen(false);
  };

  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center text-slate-900 font-bold text-sm">AR</div>
        <span className="text-white font-bold tracking-tight uppercase text-sm sm:text-base hidden sm:block">REPAKA AJAY</span>
      </div>

      <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-slate-400 hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="/Ajay_Repaka_Resume.pdf"
          onClick={handleDownload}
          className="ml-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full transition-all text-xs font-bold uppercase tracking-wider"
        >
          Download Resume
        </a>
      </div>

      <div className="lg:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white p-2">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 lg:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Ajay_Repaka_Resume.pdf"
                onClick={handleDownload}
                className="mt-2 text-center px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded transition-all text-xs font-bold uppercase tracking-wider"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
