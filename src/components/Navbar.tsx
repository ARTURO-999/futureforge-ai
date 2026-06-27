import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/careers', label: 'Careers' },
  { path: '/skills', label: 'Skills' },
  { path: '/market', label: 'Market' },
  { path: '/roadmaps', label: 'Roadmaps' },
  { path: '/resources', label: 'Resources' },
  { path: '/compare', label: 'Compare' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-40 glass border-b border-border dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
              <Sparkles className="w-4.5 h-4.5 text-white" size={18} />
            </div>
            <span className="text-lg font-bold tracking-tight text-dark dark:text-white">FutureForge</span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-muted hover:text-dark dark:text-slate-400 dark:hover:text-slate-200 hover:bg-black/[0.03] dark:hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute inset-0 bg-primary/[0.08] dark:bg-primary/[0.12] rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-muted hover:text-dark dark:text-slate-400 dark:hover:text-slate-200 hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={17} strokeWidth={2} /> : <Moon size={17} strokeWidth={2} />}
            </button>
            <Link to="/careers" className="btn-primary text-sm !py-2 !px-5">
              Get Started
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-muted hover:text-dark dark:text-slate-400 dark:hover:text-slate-200 hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={17} strokeWidth={2} /> : <Moon size={17} strokeWidth={2} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-muted hover:text-dark dark:text-slate-400 dark:hover:text-slate-200 hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all duration-200"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="lg:hidden border-t border-border dark:border-white/5 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/[0.08] dark:bg-primary/[0.12]'
                      : 'text-muted hover:text-dark dark:text-slate-400 dark:hover:text-slate-200 hover:bg-black/[0.03] dark:hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link to="/careers" onClick={() => setMobileOpen(false)} className="btn-primary text-sm block text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
