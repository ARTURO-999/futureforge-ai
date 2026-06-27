import { useState } from 'react';

import { motion } from 'framer-motion';
import { Search, BookOpen, Play, Award, Code, ExternalLink, FileText, Globe, Star } from 'lucide-react';
import resourcesData from '../data/resources.json';

const tabs = [
  { id: 'books', label: 'Books', icon: BookOpen },
  { id: 'courses', label: 'Courses', icon: Play },
  { id: 'youtube', label: 'YouTube', icon: Play },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'practice', label: 'Practice', icon: Code },
  { id: 'blogs', label: 'Blogs', icon: FileText },
  { id: 'documentation', label: 'Documentation', icon: Globe },
];

export function ResourcesPage() {
  const [activeTab, setActiveTab] = useState('books');
  const [search, setSearch] = useState('');

  const data = (resourcesData as any)[activeTab] || [];

  const filtered = data.filter((item: any) =>
    item.title?.toLowerCase().includes(search.toLowerCase()) ||
    item.description?.toLowerCase().includes(search.toLowerCase()) ||
    item.author?.toLowerCase().includes(search.toLowerCase()) ||
    item.channel?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-4xl font-bold text-dark dark:text-white mb-3 tracking-tight">Resources</h1>
        <p className="text-muted max-w-2xl text-[15px] leading-relaxed">Curated books, courses, certifications, and platforms to accelerate your career growth.</p>
      </motion.div>

      <div className="mb-8">
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} strokeWidth={2} />
          <input
            type="text"
            placeholder="Search resources..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field pl-12"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-sm shadow-primary/20'
                  : 'bg-gray-50 dark:bg-white/[0.04] text-muted hover:bg-gray-100 dark:hover:bg-white/[0.08]'
              }`}
            >
              <tab.icon size={16} strokeWidth={2} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item: any, i: number) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="card p-6 group"
          >
            {activeTab === 'books' && (
              <>
                <div className="w-11 h-11 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-semibold text-dark dark:text-white mb-1 text-[15px]">{item.title}</h3>
                <p className="text-[13px] text-primary mb-2 font-medium">{item.author}</p>
                <p className="text-[14px] text-muted mb-3 leading-[1.6]">{item.description}</p>
                <div className="flex items-center gap-3">
                  <span className={`text-[12px] px-2.5 py-1 rounded-lg font-semibold ${
                    item.difficulty === 'Beginner' ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300' :
                    item.difficulty === 'Intermediate' ? 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300' :
                    'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300'
                  }`}>{item.difficulty}</span>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" strokeWidth={2} />
                    <span className="text-[13px] text-muted">{item.rating}</span>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'courses' && (
              <>
                <div className="w-11 h-11 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-4">
                  <Play className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-semibold text-dark dark:text-white mb-1 text-[15px]">{item.title}</h3>
                <p className="text-[13px] text-primary mb-2 font-medium">{item.platform}</p>
                <p className="text-[14px] text-muted mb-3 leading-[1.6]">{item.description}</p>
                <div className="flex items-center gap-3">
                  <span className="text-[12px] text-muted">{item.duration}</span>
                  <span className={`text-[12px] px-2.5 py-1 rounded-lg font-semibold ${
                    item.difficulty === 'Beginner' ? 'bg-green-50 text-green-700' :
                    item.difficulty === 'Intermediate' ? 'bg-yellow-50 text-yellow-700' :
                    'bg-red-50 text-red-700'
                  }`}>{item.difficulty}</span>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" strokeWidth={2} />
                    <span className="text-[13px] text-muted">{item.rating}</span>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'youtube' && (
              <>
                <div className="w-11 h-11 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-4">
                  <Play className="w-5 h-5 text-red-500" strokeWidth={2} />
                </div>
                <h3 className="font-semibold text-dark dark:text-white mb-1 text-[15px]">{item.title}</h3>
                <p className="text-[13px] text-primary mb-2 font-medium">{item.channel}</p>
                <p className="text-[14px] text-muted mb-3 leading-[1.6]">{item.description}</p>
                <div className="flex items-center gap-3">
                  <span className="text-[12px] text-muted">{item.subscribers} subscribers</span>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" strokeWidth={2} />
                    <span className="text-[13px] text-muted">{item.rating}</span>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'certifications' && (
              <>
                <div className="w-11 h-11 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-4">
                  <Award className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-semibold text-dark dark:text-white mb-1 text-[15px]">{item.title}</h3>
                <p className="text-[13px] text-primary mb-2 font-medium">{item.provider}</p>
                <p className="text-[14px] text-muted mb-3 leading-[1.6]">{item.description}</p>
                <div className="flex items-center gap-3">
                  <span className={`text-[12px] px-2.5 py-1 rounded-lg font-semibold ${
                    item.difficulty === 'Beginner' ? 'bg-green-50 text-green-700' :
                    item.difficulty === 'Intermediate' ? 'bg-yellow-50 text-yellow-700' :
                    'bg-red-50 text-red-700'
                  }`}>{item.difficulty}</span>
                  <span className="text-[12px] text-muted">{item.cost}</span>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" strokeWidth={2} />
                    <span className="text-[13px] text-muted">{item.rating}</span>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'practice' && (
              <>
                <div className="w-11 h-11 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-4">
                  <Code className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-semibold text-dark dark:text-white mb-1 text-[15px]">{item.title}</h3>
                <p className="text-[13px] text-primary mb-2 font-medium">{item.category}</p>
                <p className="text-[14px] text-muted mb-3 leading-[1.6]">{item.description}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" strokeWidth={2} />
                    <span className="text-[13px] text-muted">{item.rating}</span>
                  </div>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-[13px] text-primary font-semibold flex items-center gap-1 hover:underline">
                    Visit <ExternalLink size={14} strokeWidth={2} />
                  </a>
                </div>
              </>
            )}

            {activeTab === 'blogs' && (
              <>
                <div className="w-11 h-11 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-semibold text-dark dark:text-white mb-1 text-[15px]">{item.title}</h3>
                <p className="text-[13px] text-primary mb-2 font-medium">{item.category}</p>
                <p className="text-[14px] text-muted mb-3 leading-[1.6]">{item.description}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-[13px] text-primary font-semibold flex items-center gap-1 hover:underline">
                  Visit <ExternalLink size={14} strokeWidth={2} />
                </a>
              </>
            )}

            {activeTab === 'documentation' && (
              <>
                <div className="w-11 h-11 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-semibold text-dark dark:text-white mb-1 text-[15px]">{item.title}</h3>
                <p className="text-[13px] text-primary mb-2 font-medium">{item.category}</p>
                <p className="text-[14px] text-muted mb-3 leading-[1.6]">{item.description}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-[13px] text-primary font-semibold flex items-center gap-1 hover:underline">
                  Visit <ExternalLink size={14} strokeWidth={2} />
                </a>
              </>
            )}
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted text-lg">No resources found matching your search.</p>
        </div>
      )}
    </div>
  );
}
