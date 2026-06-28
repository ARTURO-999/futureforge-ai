import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Rocket, Shield, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const values = [
  { icon: Target, title: 'Precision', desc: 'Data-driven insights for every career decision.' },
  { icon: Eye, title: 'Vision', desc: 'Anticipating the future of work and skills.' },
  { icon: Heart, title: 'Empathy', desc: 'Designed around real human career journeys.' },
  { icon: Users, title: 'Community', desc: 'Built with and for professionals worldwide.' },
  { icon: Rocket, title: 'Innovation', desc: 'Leveraging AI to deliver cutting-edge guidance.' },
  { icon: Shield, title: 'Integrity', desc: 'Transparent, accurate, and unbiased information.' },
];

export function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-dark dark:text-white mb-4">About FutureForge</h1>
        <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
          FutureForge AI was born from a simple belief: everyone deserves access to world-class career intelligence.
          We combine cutting-edge AI with real market data to help professionals build the careers the future demands.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-dark dark:text-white mb-4">Our Mission</h2>
          <p className="text-muted leading-relaxed mb-4">
            To empower every professional with the intelligence, tools, and guidance needed to build a future-proof career.
            We believe that career decisions should be informed by data, not guesswork.
          </p>
          <p className="text-muted leading-relaxed">
            Whether you are a student exploring your first career, a professional considering a pivot, or an executive
            planning your next move, FutureForge is your companion for the journey ahead.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-dark dark:text-white mb-4">Our Vision</h2>
          <p className="text-muted leading-relaxed mb-4">
            A world where every career decision is an informed one. Where professionals can navigate the rapidly evolving
            landscape of work with confidence and clarity.
          </p>
          <p className="text-muted leading-relaxed">
            We envision a platform that grows with you throughout your career, from your first job to your last,
            providing relevant insights at every stage.
          </p>
        </motion.div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-dark dark:text-white text-center mb-10">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <v.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-dark dark:text-white mb-1">{v.title}</h3>
              <p className="text-sm text-muted">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-dark dark:text-white text-center mb-10">Meet the Founder</h2>
        <div className="max-w-lg mx-auto">
          <div className="relative group">
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-primary via-accent to-primary opacity-30 blur-[1px] group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-primary via-accent to-primary opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative card p-8 text-center overflow-hidden bg-white/80 dark:bg-[#0B0F1A]/80 backdrop-blur-xl">
              <div className="relative mx-auto mb-6">
                <div className="absolute -inset-[2px] rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-60 blur-[1px] group-hover:opacity-100 group-hover:blur-[2px] transition-all duration-500" />
                <div className="absolute -inset-[2px] rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-40 animate-pulse" />
                <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-3xl font-bold tracking-wider shadow-lg shadow-primary/20">
                  FS
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-500 border-2 border-white dark:border-[#0B0F1A] flex items-center justify-center shadow-md">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-dark dark:text-white mb-1">Farhan Sheikh</h3>
              <p className="text-sm font-medium text-primary mb-4">Founder & Creator of FutureForge AI</p>
              <p className="text-sm text-muted leading-relaxed mb-6">
                Farhan Sheikh is the sole creator and developer of FutureForge AI. He designed and built the platform using modern AI-assisted development tools with a strong focus on helping students and professionals make smarter career decisions. His goal is to simplify career planning through intelligent roadmaps, skill analysis, AI-powered guidance, and an exceptional user experience. FutureForge AI reflects his passion for technology, innovation, and creating impactful digital products.
              </p>
              <div className="flex justify-center gap-3">
                {[
                  { Icon: Github, href: 'https://github.com/ARTURO-999', label: 'GitHub' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/farhan-sheikh-749649377?utm_source=share_via&utm_content=profile&utm_medium=member_ios', label: 'LinkedIn' },
                  { Icon: Twitter, href: 'https://x.com/FarhanSheikh999', label: 'X' },
                  { Icon: Mail, href: 'mailto:farhansheikh007yt@gmail.com', label: 'Email' },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="relative group/icon"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent opacity-0 blur-[4px] group-hover/icon:opacity-40 transition-opacity duration-300" />
                    <div className="relative p-2.5 rounded-xl bg-gray-50 dark:bg-white/[0.04] text-muted hover:text-primary dark:hover:text-slate-300 hover:bg-gray-100 dark:hover:bg-white/[0.08] transition-all duration-300 hover:scale-110 hover:-translate-y-0.5">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
