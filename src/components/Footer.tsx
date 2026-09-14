import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white dark:bg-zinc-950 dark:border-zinc-800 mt-20 transition-colors">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          {/* LEFT: Identity & Status */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Mary Dada</span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm">
              Full-Stack & Security Engineer crafting resilient web architectures and automated compliance engines.
            </p>
          </div>

          {/* RIGHT: Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
            <a 
              href="https://github.com/Pruddy1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              GitHub ↗
            </a>
            <a 
              href="https://www.linkedin.com/in/mary-dada-249b17311/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              LinkedIn ↗
            </a>
           
            <a 
              href="mailto:oreoluwadada6@gmail.com" 
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Email ↗
            </a>
          </div>
        </div>

        {/* BOTTOM: Copyright & Build Stack */}
        <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400 dark:text-zinc-500">
          <p>© {new Date().getFullYear()} Mary Dada. All rights reserved.</p>
          <p>Built with Next.js, React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}