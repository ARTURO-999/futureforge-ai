import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Zap, Building2, Cloud, Wifi, Globe } from 'lucide-react';
import marketData from '../data/market.json';


export function MarketPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <h1 className="text-4xl font-bold text-dark dark:text-white mb-3 tracking-tight">Market Intelligence</h1>
        <p className="text-muted max-w-2xl text-[15px] leading-relaxed">Real-time insights into the job market, industry growth, and future trends.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <DollarSign size={20} className="text-success" />
            </div>
            <h3 className="font-semibold text-dark dark:text-white">Highest Paying</h3>
          </div>
          <div className="space-y-3">
            {marketData.highestPayingCareers.slice(0, 5).map((c, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-dark dark:text-white">{c.name}</span>
                <span className="text-sm font-medium text-success">{c.salary}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <TrendingUp size={20} className="text-primary" />
            </div>
            <h3 className="font-semibold text-dark dark:text-white">Fastest Growing</h3>
          </div>
          <div className="space-y-3">
            {marketData.fastestGrowingCareers.slice(0, 5).map((c, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-dark dark:text-white">{c.name}</span>
                <span className="text-sm font-medium text-primary">{c.growth}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <Zap size={20} className="text-purple-500" />
            </div>
            <h3 className="font-semibold text-dark dark:text-white">Top Skills</h3>
          </div>
          <div className="space-y-3">
            {marketData.mostInDemandSkills.slice(0, 5).map((s, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-dark dark:text-white">{s.name}</span>
                  <span className="text-xs text-muted">{s.demand}/100</span>
                </div>
                <div className="h-1.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full" style={{ width: `${s.demand}%` }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Building2 size={20} className="text-primary" />
            </div>
            <h3 className="font-semibold text-dark dark:text-white">Top Hiring Industries</h3>
          </div>
          <div className="space-y-4">
            {marketData.topHiringIndustries.map((ind, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-dark dark:text-white">{ind.name}</span>
                  <span className="text-xs text-muted">{ind.jobs} jobs</span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${ind.growth * 3}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted">+{ind.growth}% growth</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Cloud size={20} className="text-success" />
            </div>
            <h3 className="font-semibold text-dark dark:text-white">Industry Growth</h3>
          </div>
          <div className="space-y-4">
            {marketData.industryGrowth.map((ind, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-dark dark:text-white">{ind.name}</span>
                  <span className="text-xs text-muted">{ind.marketSize}</span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.min(ind.growth * 2, 100)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-gradient-to-r from-success to-emerald-400 rounded-full"
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted">+{ind.growth}% growth</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <Wifi size={20} className="text-orange-500" />
            </div>
            <h3 className="font-semibold text-dark dark:text-white">Remote Work Trends</h3>
          </div>
          <div className="space-y-4">
            {marketData.remoteWorkTrends.map((t, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-dark dark:text-white">{t.year}</span>
                </div>
                <div className="flex h-6 rounded-full overflow-hidden">
                  <div className="bg-primary text-white text-xs flex items-center justify-center" style={{ width: `${t.remote}%` }}>
                    {t.remote > 15 && `${t.remote}%`}
                  </div>
                  <div className="bg-accent text-white text-xs flex items-center justify-center" style={{ width: `${t.hybrid}%` }}>
                    {t.hybrid > 15 && `${t.hybrid}%`}
                  </div>
                  <div className="bg-gray-300 dark:bg-gray-600 text-white text-xs flex items-center justify-center" style={{ width: `${t.onsite}%` }}>
                    {t.onsite > 15 && `${t.onsite}%`}
                  </div>
                </div>
                <div className="flex gap-4 mt-2 text-xs">
                  <span className="text-primary">Remote {t.remote}%</span>
                  <span className="text-accent">Hybrid {t.hybrid}%</span>
                  <span className="text-gray-500 dark:text-gray-400">Onsite {t.onsite}%</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Globe size={20} className="text-primary" />
            </div>
            <h3 className="font-semibold text-dark dark:text-white">Future Job Outlook</h3>
          </div>
          <div className="space-y-4">
            {marketData.futureJobOutlook.map((o, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-dark dark:text-white">{o.year}</span>
                  <span className="text-xs text-muted">+{o.newRoles}M new roles</span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(o.techJobs / 80) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted">{o.techJobs}M tech jobs</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
