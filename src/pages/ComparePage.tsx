import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightLeft, DollarSign, TrendingUp, Clock, Award, Wifi, Building2 } from 'lucide-react';
import careersData from '../data/careers.json';

export function ComparePage() {
  const [career1, setCareer1] = useState<string>(careersData.careers[0].id);
  const [career2, setCareer2] = useState<string>(careersData.careers[1].id);

  const c1 = useMemo(() => careersData.careers.find((c) => c.id === career1), [career1]);
  const c2 = useMemo(() => careersData.careers.find((c) => c.id === career2), [career2]);

  if (!c1 || !c2) return null;

  const comparison = [
    { label: 'Average Salary', icon: DollarSign, c1: c1.averageSalary, c2: c2.averageSalary, winner: c1.salaryMax > c2.salaryMax ? 'c1' : c1.salaryMax < c2.salaryMax ? 'c2' : 'tie' },
    { label: 'Future Demand', icon: TrendingUp, c1: c1.futureDemand, c2: c2.futureDemand, winner: 'text' },
    { label: 'Difficulty', icon: Award, c1: c1.difficulty, c2: c2.difficulty, winner: c1.difficultyLevel < c2.difficultyLevel ? 'c1' : c1.difficultyLevel > c2.difficultyLevel ? 'c2' : 'tie' },
    { label: 'Education', icon: Clock, c1: c1.education, c2: c2.education, winner: 'text' },
    { label: 'Remote Availability', icon: Wifi, c1: c1.remoteAvailability, c2: c2.remoteAvailability, winner: 'text' },
    { label: 'Experience Level', icon: Award, c1: c1.experienceLevel, c2: c2.experienceLevel, winner: 'text' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-4xl font-bold text-dark dark:text-white mb-3 tracking-tight">Career Comparison</h1>
        <p className="text-muted max-w-2xl text-[15px] leading-relaxed">Compare two careers side by side across all key metrics to make an informed decision.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div>
          <label className="block text-sm font-medium text-muted mb-2">Career 1</label>
          <select
            value={career1}
            onChange={(e) => setCareer1(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-border dark:border-white/10 bg-white dark:bg-[#1E293B] text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            {careersData.careers.map((c) => (
              <option key={c.id} value={c.id}>{c.title}</option>
            ))}
          </select>
        </div>
        <div className="flex items-end justify-center">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            <ArrowRightLeft size={20} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-muted mb-2">Career 2</label>
          <select
            value={career2}
            onChange={(e) => setCareer2(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-border dark:border-white/10 bg-white dark:bg-[#1E293B] text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            {careersData.careers.map((c) => (
              <option key={c.id} value={c.id}>{c.title}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="grid grid-cols-3 border-b border-border dark:border-white/10">
          <div className="p-6 bg-gray-50 dark:bg-white/5">
            <h3 className="font-semibold text-dark dark:text-white">{c1.title}</h3>
          </div>
          <div className="p-6 flex items-center justify-center bg-gray-50/50 dark:bg-white/[0.02]">
            <span className="text-sm font-medium text-muted">Comparison</span>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-white/5">
            <h3 className="font-semibold text-dark dark:text-white">{c2.title}</h3>
          </div>
        </div>

        {comparison.map((row, i) => (
          <div key={i} className="grid grid-cols-3 border-b border-border dark:border-white/10 last:border-0">
            <div className={`p-6 flex items-center gap-3 ${row.winner === 'c1' ? 'bg-green-50/50 dark:bg-green-900/10' : ''}`}>
              <row.icon size={16} className={row.winner === 'c1' ? 'text-success' : 'text-muted'} />
              <span className={`text-sm ${row.winner === 'c1' ? 'font-semibold text-success' : 'text-dark dark:text-white'}`}>{row.c1}</span>
            </div>
            <div className="p-6 flex items-center justify-center">
              <span className="text-sm font-medium text-muted">{row.label}</span>
            </div>
            <div className={`p-6 flex items-center gap-3 ${row.winner === 'c2' ? 'bg-green-50/50 dark:bg-green-900/10' : ''}`}>
              <span className={`text-sm ${row.winner === 'c2' ? 'font-semibold text-success' : 'text-dark dark:text-white'}`}>{row.c2}</span>
              <row.icon size={16} className={row.winner === 'c2' ? 'text-success' : 'text-muted'} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="card p-6">
          <h3 className="font-semibold text-dark dark:text-white mb-4">Top Skills - {c1.title}</h3>
          <div className="flex flex-wrap gap-2">
            {c1.skillsRequired.map((skill) => (
              <span key={skill} className="px-3 py-1.5 rounded-xl bg-primary/10 text-primary text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-dark dark:text-white mb-4">Top Skills - {c2.title}</h3>
          <div className="flex flex-wrap gap-2">
            {c2.skillsRequired.map((skill) => (
              <span key={skill} className="px-3 py-1.5 rounded-xl bg-primary/10 text-primary text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-dark dark:text-white mb-4">Top Companies - {c1.title}</h3>
          <div className="space-y-2">
            {c1.topCompanies.map((company, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-dark dark:text-white">
                <Building2 size={14} className="text-muted" />
                {company}
              </div>
            ))}
          </div>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-dark dark:text-white mb-4">Top Companies - {c2.title}</h3>
          <div className="space-y-2">
            {c2.topCompanies.map((company, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-dark dark:text-white">
                <Building2 size={14} className="text-muted" />
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
