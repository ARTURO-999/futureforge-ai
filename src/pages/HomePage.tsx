import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, TrendingUp, BookOpen, Users, Shield, BarChart3, Brain, Target, Zap, Award, Star, ChevronRight, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';

const stats = [
  { value: 250, suffix: '+', label: 'Careers' },
  { value: 1000, suffix: '+', label: 'Learning Resources' },
  { value: 150, suffix: '+', label: 'Skills' },
  { value: 98, suffix: '%', label: 'Career Success' },
];

const features = [
  { icon: Brain, title: 'AI Career Advisor', desc: 'Get personalized career guidance powered by intelligent analysis.' },
  { icon: Target, title: 'Career Intelligence', desc: 'Explore detailed career profiles with salary, demand, and growth data.' },
  { icon: TrendingUp, title: 'Market Trends', desc: 'Stay ahead with real-time market intelligence and industry insights.' },
  { icon: BarChart3, title: 'Salary Insights', desc: 'Compare salaries across roles, industries, and experience levels.' },
  { icon: BookOpen, title: 'Learning Roadmaps', desc: 'Step-by-step guides from beginner to expert for every career path.' },
  { icon: Shield, title: 'Career Comparison', desc: 'Compare careers side by side across all key metrics.' },
  { icon: Zap, title: 'Skill Intelligence', desc: 'Discover which skills matter most and how to acquire them efficiently.' },
  { icon: Award, title: 'Industry Analysis', desc: 'Deep dive into industry trends, growth sectors, and emerging opportunities.' },
];

const testimonials = [
  { name: 'Rohan M.', role: 'Frontend Developer', quote: 'FutureForge helped me transition from marketing to tech. The roadmap was exactly what I needed.' },
  { name: 'Aisha K.', role: 'Data Scientist', quote: 'The market intelligence dashboard gave me the confidence to negotiate a 40% higher salary.' },
  { name: 'Vikram S.', role: 'Cloud Engineer', quote: 'I used the skill comparison to decide between AWS and Azure. Best career decision I have made.' },
  { name: 'Neha R.', role: 'AI Engineer', quote: 'The career quiz accurately predicted my fit for AI engineering. Now I am doing what I love.' },
];

export function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-primary/[0.04] rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] right-0 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.08] text-primary text-[13px] font-semibold mb-6">
                <Zap size={14} strokeWidth={2.5} />
                <span>The Future of Career Intelligence</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-dark dark:text-white leading-[1.1] mb-6 tracking-tight text-balance">
                Build the Career the{' '}
                <span className="gradient-text">Future Demands</span>
              </h1>
              <p className="text-lg text-muted leading-[1.6] mb-8 max-w-lg text-balance">
                Explore future-ready careers, discover in-demand skills, analyze market trends, and receive AI-powered career guidance.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/careers" className="btn-primary">
                  Explore Careers <ArrowRight size={18} strokeWidth={2.5} />
                </Link>
                <Link to="/quiz" className="btn-secondary">
                  Take Career Quiz
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-48 glass rounded-2xl p-5 animate-float shadow-lg shadow-black/5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-success" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-dark dark:text-white">AI Industry</p>
                      <p className="text-[13px] text-muted">+45% Growth</p>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[75%] bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>
                </div>

                <div className="absolute top-32 -right-8 w-72 h-48 glass rounded-2xl p-5 animate-float shadow-lg shadow-black/5" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-primary" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-dark dark:text-white">Top Career</p>
                      <p className="text-[13px] text-muted">AI Engineer</p>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-dark dark:text-white tracking-tight">$220K</span>
                    <span className="text-[13px] text-muted">avg salary</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-12 w-72 h-48 glass rounded-2xl p-5 animate-float shadow-lg shadow-black/5" style={{ animationDelay: '4s' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-purple-500" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-dark dark:text-white">Skills</p>
                      <p className="text-[13px] text-muted">150+ Tracked</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'React', 'AWS', 'ML'].map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-full bg-primary/[0.08] text-primary text-[12px] font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl opacity-50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white dark:bg-[#0B0F1A]/50 border-y border-border dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="text-3xl lg:text-[2.5rem] font-bold text-dark dark:text-white mb-1 tracking-tight">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[13px] text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-[2.5rem] font-bold text-dark dark:text-white mb-3 tracking-tight text-balance">Everything You Need to Build Your Future</h2>
            <p className="text-muted max-w-2xl mx-auto text-balance">A comprehensive platform designed to guide you through every stage of your career journey.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="card p-6 group cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-semibold text-dark dark:text-white mb-1.5 text-[15px]">{feature.title}</h3>
                <p className="text-[14px] text-muted leading-[1.6]">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Careers */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-dark dark:text-white mb-2 tracking-tight">Top Careers</h2>
              <p className="text-muted text-[15px]">Explore the highest demand and highest paying roles.</p>
            </div>
            <Link to="/careers" className="hidden sm:flex items-center gap-1 text-[14px] font-semibold text-primary hover:text-primary/80 transition-colors duration-200">
              View All <ChevronRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {['AI Engineer', 'Machine Learning Engineer', 'Cloud Engineer', 'DevOps Engineer'].map((career, i) => (
              <motion.div
                key={career}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="card p-6 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/[0.12] to-accent/[0.12] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Briefcase className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-semibold text-dark dark:text-white mb-1 text-[15px]">{career}</h3>
                <p className="text-[13px] text-muted">Very High Demand</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[13px] font-semibold text-success">$140K - $220K</span>
                  <ArrowRight size={16} className="text-muted group-hover:text-primary transition-colors duration-300" strokeWidth={2.5} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FutureForge */}
      <section className="section bg-white dark:bg-[#0B0F1A]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-[2.5rem] font-bold text-dark dark:text-white mb-6 tracking-tight text-balance">Why FutureForge?</h2>
              <div className="space-y-5">
                {[
                  { title: 'Real-Time Market Data', desc: 'Our platform aggregates data from industry reports, job boards, and salary databases to give you the most accurate picture of the market.' },
                  { title: 'AI-Powered Insights', desc: 'Our intelligent systems analyze your skills and preferences to recommend the optimal career path for your unique profile.' },
                  { title: 'Curated Learning Paths', desc: 'Every roadmap is crafted by industry experts and includes the exact resources you need to progress from beginner to expert.' },
                  { title: 'Community Driven', desc: 'Join thousands of professionals who are using FutureForge to make smarter career decisions every day.' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" /></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark dark:text-white mb-1 text-[15px]">{item.title}</h4>
                      <p className="text-[14px] text-muted leading-[1.6]">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="glass rounded-3xl p-8 shadow-xl shadow-black/5">
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/[0.08] flex items-center justify-center">
                      <Users className="w-7 h-7 text-primary" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[1.75rem] font-bold text-dark dark:text-white tracking-tight">50,000+</p>
                      <p className="text-[13px] text-muted">Active Users</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                      <Star className="w-7 h-7 text-success" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[1.75rem] font-bold text-dark dark:text-white tracking-tight">4.9/5</p>
                      <p className="text-[13px] text-muted">User Rating</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center">
                      <Award className="w-7 h-7 text-purple-500" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[1.75rem] font-bold text-dark dark:text-white tracking-tight">92%</p>
                      <p className="text-[13px] text-muted">Career Change Success</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-[2.5rem] font-bold text-dark dark:text-white mb-3 tracking-tight text-balance">What Our Users Say</h2>
            <p className="text-muted max-w-2xl mx-auto text-balance">Real stories from professionals who transformed their careers with FutureForge.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="card p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" strokeWidth={2} />
                  ))}
                </div>
                <p className="text-[14px] text-muted leading-[1.7] mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold text-[12px]">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-dark dark:text-white">{t.name}</p>
                    <p className="text-[12px] text-muted">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-12 lg:p-16 text-center"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="relative">
              <h2 className="text-3xl lg:text-[2.5rem] font-bold text-white mb-4 tracking-tight text-balance">Ready to Forge Your Future?</h2>
              <p className="text-white/75 max-w-2xl mx-auto mb-8 text-[16px] leading-[1.6] text-balance">Start exploring careers, analyzing skills, and building your roadmap today. Your future self will thank you.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/careers" className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors duration-200 shadow-lg shadow-black/10">
                  Explore Careers
                </Link>
                <Link to="/quiz" className="bg-white/[0.12] text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/[0.2] transition-colors duration-200 border border-white/20">
                  Take Career Quiz
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Built by */}
      <section className="py-10 border-t border-border dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center gap-3"
          >
            <p className="text-[13px] text-muted font-medium tracking-wide">Built by <span className="text-dark dark:text-white font-semibold">Farhan Sheikh</span></p>
            <div className="flex gap-2">
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
                  className="relative group"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent opacity-0 blur-[4px] group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="relative p-2 rounded-xl bg-gray-50 dark:bg-white/[0.04] text-muted hover:text-primary dark:hover:text-slate-300 hover:bg-gray-100 dark:hover:bg-white/[0.08] transition-all duration-300 hover:scale-110 hover:-translate-y-0.5">
                    <Icon size={16} strokeWidth={2} />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
