import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Clock, Award, BarChart3 } from 'lucide-react';
import skillsData from '../data/skills.json';

export function SkillsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(skillsData.skills.map((s) => s.category)))];

  const filtered = useMemo(() => {
    return skillsData.skills.filter((s) => {
      const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === 'All' || s.category === category;
      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <h1 className="text-4xl font-bold text-dark dark:text-white mb-3 tracking-tight">Skills Intelligence</h1>
        <p className="text-muted max-w-2xl text-[15px] leading-relaxed">Discover the most valuable skills in the market, their learning curves, and career impact.</p>
      </motion.div>

      <div className="mb-8 space-y-3">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} strokeWidth={2} />
          <input
            type="text"
            placeholder="Search skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field pl-12"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200 ${
                category === cat
                  ? 'bg-primary text-white shadow-sm shadow-primary/20'
                  : 'bg-gray-50 dark:bg-white/[0.04] text-muted hover:bg-gray-100 dark:hover:bg-white/[0.08]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((skill, i) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="card p-6 group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/[0.12] to-accent/[0.12] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <BarChart3 className="w-5 h-5 text-primary" strokeWidth={2} />
              </div>
              <span className={`px-3 py-1 rounded-full text-[12px] font-semibold ${
                skill.difficulty === 'Beginner' ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300' :
                skill.difficulty === 'Intermediate' ? 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300' :
                'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300'
              }`}>
                {skill.difficulty}
              </span>
            </div>
            <h3 className="text-[15px] font-semibold text-dark dark:text-white mb-2">{skill.name}</h3>
            <p className="text-[14px] text-muted mb-4 leading-[1.6] line-clamp-2">{skill.description}</p>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-[13px]">
                <span className="flex items-center gap-2 text-muted"><Clock size={14} strokeWidth={2} /> Learning Time</span>
                <span className="font-semibold text-dark dark:text-white">{skill.learningTime}</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="flex items-center gap-2 text-muted"><TrendingUp size={14} strokeWidth={2} /> Demand</span>
                <span className="font-semibold text-dark dark:text-white">{skill.marketDemand}</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="flex items-center gap-2 text-muted"><TrendingUp size={14} strokeWidth={2} /> Growth</span>
                <span className="font-semibold text-success">{skill.futureGrowth}</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="flex items-center gap-2 text-muted"><Award size={14} strokeWidth={2} /> Salary Impact</span>
                <span className="font-semibold text-success">{skill.salaryImpact}</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-[12px] text-muted mb-1.5 font-medium">Market Demand Score</p>
              <div className="h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.demandScore}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[12px] text-muted">0</span>
                <span className="text-[12px] font-semibold text-dark dark:text-white">{skill.demandScore}/100</span>
              </div>
            </div>

            <div className="pt-4 border-t border-border dark:border-white/[0.06]">
              <p className="text-[12px] text-muted mb-2 font-medium">Related Careers</p>
              <div className="flex flex-wrap gap-2">
                {skill.relatedCareers.slice(0, 3).map((rc) => (
                  <span key={rc} className="px-2.5 py-1 rounded-lg bg-primary/[0.08] text-primary text-[12px] font-semibold">
                    {rc.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted text-lg">No skills found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
