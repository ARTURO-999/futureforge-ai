import { Link } from 'react-router-dom';
import { Sparkles, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border dark:border-white/[0.06] bg-white dark:bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
                <Sparkles className="w-5 h-5 text-white" size={20} />
              </div>
              <span className="text-lg font-bold tracking-tight text-dark dark:text-white">FutureForge</span>
            </Link>
            <p className="text-muted text-sm leading-[1.7] mb-6 max-w-sm">
              Forge your future with AI intelligence. Explore careers, discover skills, analyze market trends, and receive AI-powered career guidance.
            </p>
            <div className="flex gap-2">
              {[
                { Icon: Github, href: 'https://github.com/ARTURO-999', label: 'GitHub' },
                { Icon: Twitter, href: 'https://x.com/FarhanSheikh999', label: 'X' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/farhan-sheikh-749649377?utm_source=share_via&utm_content=profile&utm_medium=member_ios', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:farhansheikh007yt@gmail.com', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="relative group"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent opacity-0 blur-[4px] group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="relative p-2.5 rounded-xl bg-gray-50 dark:bg-white/[0.04] text-muted hover:text-primary dark:hover:text-slate-300 hover:bg-gray-100 dark:hover:bg-white/[0.08] transition-all duration-300 hover:scale-110 hover:-translate-y-0.5">
                    <Icon size={18} strokeWidth={2} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold text-dark dark:text-white mb-4 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2.5">
              <li><Link to="/careers" className="text-sm text-muted hover:text-primary dark:hover:text-slate-300 transition-colors duration-200">Career Explorer</Link></li>
              <li><Link to="/skills" className="text-sm text-muted hover:text-primary dark:hover:text-slate-300 transition-colors duration-200">Skills Intelligence</Link></li>
              <li><Link to="/market" className="text-sm text-muted hover:text-primary dark:hover:text-slate-300 transition-colors duration-200">Market Intelligence</Link></li>
              <li><Link to="/roadmaps" className="text-sm text-muted hover:text-primary dark:hover:text-slate-300 transition-colors duration-200">Learning Roadmaps</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold text-dark dark:text-white mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5">
              <li><Link to="/resources" className="text-sm text-muted hover:text-primary dark:hover:text-slate-300 transition-colors duration-200">Learning Resources</Link></li>
              <li><Link to="/compare" className="text-sm text-muted hover:text-primary dark:hover:text-slate-300 transition-colors duration-200">Career Comparison</Link></li>
              <li><Link to="/quiz" className="text-sm text-muted hover:text-primary dark:hover:text-slate-300 transition-colors duration-200">Career Quiz</Link></li>
              <li><Link to="/faq" className="text-sm text-muted hover:text-primary dark:hover:text-slate-300 transition-colors duration-200">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold text-dark dark:text-white mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm text-muted hover:text-primary dark:hover:text-slate-300 transition-colors duration-200">About</Link></li>
              <li><Link to="/contact" className="text-sm text-muted hover:text-primary dark:hover:text-slate-300 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border dark:border-white/[0.06] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-muted">2026 FutureForge. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-[13px] text-muted">Built by Farhan Sheikh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
