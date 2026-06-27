import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, TrendingUp, DollarSign, Clock, GraduationCap, Wifi, Briefcase, Bookmark, BookmarkCheck, ChevronDown } from 'lucide-react';
import careersData from '../data/careers.json';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useToast } from '../components/Toast';

export function CareersPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('demand');
  const [showFilters, setShowFilters] = useState(false);
  const [bookmarks, setBookmarks] = useLocalStorage<string[]>('careerBookmarks', []);
  const [recentlyViewed, setRecentlyViewed] = useLocalStorage<string[]>('recentlyViewed', []);
  const { showToast } = useToast();

  const categories = ['All', ...Array.from(new Set(careersData.careers.map((c) => c.category)))];

  const filtered = useMemo(() => {
    let result = careersData.careers.filter((c) => {
      const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.skillsRequired.some((s) => s.toLowerCase().includes(search.toLowerCase()));
      const matchCategory = category === 'All' || c.category === category;
      return matchSearch && matchCategory;
    });
    if (sortBy === 'salary') {
      result = [...result].sort((a, b) => b.salaryMax - a.salaryMax);
    } else if (sortBy === 'demand') {
      const demandOrder = ['Explosive', 'Very High', 'High', 'Medium'];
      result = [...result].sort((a, b) => demandOrder.indexOf(a.futureDemand) - demandOrder.indexOf(b.futureDemand));
    } else if (sortBy === 'difficulty') {
      result = [...result].sort((a, b) => a.difficultyLevel - b.difficultyLevel);
    }
    return result;
  }, [search, category, sortBy]);

  const toggleBookmark = (id: string) => {
    if (bookmarks.includes(id)) {
      setBookmarks(bookmarks.filter((b) => b !== id));
      showToast('Removed from bookmarks', 'info');
    } else {
      setBookmarks([...bookmarks, id]);
      showToast('Added to bookmarks', 'success');
    }
  };

  const handleViewCareer = (id: string) => {
    if (!recentlyViewed.includes(id)) {
      setRecentlyViewed([id, ...recentlyViewed.slice(0, 9)]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <h1 className="text-4xl font-bold text-dark dark:text-white mb-3 tracking-tight">Career Explorer</h1>
        <p className="text-muted max-w-2xl text-[15px] leading-relaxed">Discover future-ready careers with detailed insights on salary, demand, skills, and growth.</p>
      </motion.div>

      <div className="mb-8 space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} strokeWidth={2} />
            <input
              type="text"
              placeholder="Search careers or skills..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field pl-12"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border dark:border-white/[0.06] bg-white dark:bg-[#1E293B] text-dark dark:text-white hover:bg-gray-50 dark:hover:bg-white/[0.04] transition-all duration-200 font-medium text-[14px]"
          >
            <Filter size={18} strokeWidth={2} />
            <span>Filters</span>
            <ChevronDown size={16} strokeWidth={2} className={`transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {showFilters && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="flex flex-wrap gap-4">
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
            <div className="flex items-center gap-2">
              <span className="text-[13px] text-muted font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-border dark:border-white/[0.06] bg-white dark:bg-[#1E293B] text-[13px] text-dark dark:text-white input-field !py-2 !px-3"
              >
                <option value="demand">Demand</option>
                <option value="salary">Salary</option>
                <option value="difficulty">Difficulty</option>
              </select>
            </div>
          </motion.div>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((career, i) => (
          <motion.div
            key={career.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="card overflow-hidden group"
          >
            <div className="relative h-44 overflow-hidden">
              <img src={career.image} alt={career.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => toggleBookmark(career.id)}
                  className="p-2 rounded-lg bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-200"
                  aria-label={bookmarks.includes(career.id) ? 'Remove bookmark' : 'Add bookmark'}
                >
                  {bookmarks.includes(career.id) ? <BookmarkCheck size={16} strokeWidth={2} /> : <Bookmark size={16} strokeWidth={2} />}
                </button>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[12px] font-semibold">
                  {career.category}
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-[15px] font-semibold text-dark dark:text-white mb-3">{career.title}</h3>
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                <div className="flex items-center gap-2 text-[13px]">
                  <DollarSign size={14} className="text-success" strokeWidth={2} />
                  <span className="text-muted">{career.averageSalary}</span>
                </div>
                <div className="flex items-center gap-2 text-[13px]">
                  <TrendingUp size={14} className="text-primary" strokeWidth={2} />
                  <span className="text-muted">{career.futureDemand}</span>
                </div>
                <div className="flex items-center gap-2 text-[13px]">
                  <Clock size={14} className="text-orange-500" strokeWidth={2} />
                  <span className="text-muted">{career.difficulty}</span>
                </div>
                <div className="flex items-center gap-2 text-[13px]">
                  <GraduationCap size={14} className="text-purple-500" strokeWidth={2} />
                  <span className="text-muted">{career.education}</span>
                </div>
                <div className="flex items-center gap-2 text-[13px]">
                  <Wifi size={14} className="text-blue-500" strokeWidth={2} />
                  <span className="text-muted">{career.remoteAvailability} Remote</span>
                </div>
                <div className="flex items-center gap-2 text-[13px]">
                  <Briefcase size={14} className="text-gray-500" strokeWidth={2} />
                  <span className="text-muted">{career.experienceLevel}</span>
                </div>
              </div>
              <Link
                to={`/careers/${career.id}`}
                onClick={() => handleViewCareer(career.id)}
                className="block w-full text-center py-2.5 rounded-xl bg-primary/[0.08] text-primary font-semibold text-[14px] hover:bg-primary hover:text-white transition-all duration-300"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted text-lg">No careers found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
