import { useParams, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, DollarSign, TrendingUp, Clock, GraduationCap, Wifi, Briefcase, Building2, Award, CheckCircle2, XCircle, Lightbulb, ChevronRight } from 'lucide-react';
import careersData from '../data/careers.json';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function CareerDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookmarks, setBookmarks] = useLocalStorage<string[]>('careerBookmarks', []);

  const career = useMemo(() => careersData.careers.find((c) => c.id === id), [id]);

  if (!career) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-dark dark:text-white mb-4">Career not found</h1>
        <button onClick={() => navigate('/careers')} className="btn-primary">Back to Careers</button>
      </div>
    );
  }

  const isBookmarked = bookmarks.includes(career.id);

  const toggleBookmark = () => {
    if (isBookmarked) {
      setBookmarks(bookmarks.filter((b) => b !== career.id));
    } else {
      setBookmarks([...bookmarks, career.id]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <button onClick={() => navigate('/careers')} className="flex items-center gap-2 text-muted hover:text-dark dark:hover:text-white mb-8 transition-colors">
        <ArrowLeft size={18} />
        <span className="text-sm font-medium">Back to Careers</span>
      </button>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="relative h-64 lg:h-80 rounded-3xl overflow-hidden mb-8">
          <img src={career.image} alt={career.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">{career.category}</span>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">{career.futureDemand} Demand</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-2">{career.title}</h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="card p-6">
              <h2 className="text-xl font-bold text-dark dark:text-white mb-4">Overview</h2>
              <p className="text-muted leading-relaxed">{career.overview}</p>
            </section>

            <section className="card p-6">
              <h2 className="text-xl font-bold text-dark dark:text-white mb-4">Responsibilities</h2>
              <ul className="space-y-3">
                {career.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-success mt-0.5 shrink-0" />
                    <span className="text-muted">{r}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="card p-6">
              <h2 className="text-xl font-bold text-dark dark:text-white mb-4">Skills Required</h2>
              <div className="flex flex-wrap gap-2">
                {career.skillsRequired.map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="card p-6">
              <h2 className="text-xl font-bold text-dark dark:text-white mb-4">Education & Certifications</h2>
              <p className="text-muted leading-relaxed mb-4">{career.educationPath}</p>
              <div className="space-y-2">
                {career.certifications.map((cert, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/5">
                    <Award size={18} className="text-primary" />
                    <span className="text-sm text-dark dark:text-white">{cert}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="card p-6">
              <h2 className="text-xl font-bold text-dark dark:text-white mb-4">Pros & Cons</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-success mb-3 flex items-center gap-2">
                    <CheckCircle2 size={16} /> Pros
                  </h3>
                  <ul className="space-y-2">
                    {career.pros.map((p, i) => (
                      <li key={i} className="text-sm text-muted">{p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-red-500 mb-3 flex items-center gap-2">
                    <XCircle size={16} /> Cons
                  </h3>
                  <ul className="space-y-2">
                    {career.cons.map((c, i) => (
                      <li key={i} className="text-sm text-muted">{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="card p-6">
              <h2 className="text-xl font-bold text-dark dark:text-white mb-4">FAQs</h2>
              <div className="space-y-4">
                {career.faqs.map((faq, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-dark dark:text-white mb-1 flex items-start gap-2">
                      <Lightbulb size={16} className="text-primary mt-1 shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="text-sm text-muted ml-6">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-bold text-dark dark:text-white mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <DollarSign size={18} className="text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Avg Salary</p>
                    <p className="font-semibold text-dark dark:text-white">{career.averageSalary}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <TrendingUp size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Future Demand</p>
                    <p className="font-semibold text-dark dark:text-white">{career.futureDemand}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                    <Clock size={18} className="text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Difficulty</p>
                    <p className="font-semibold text-dark dark:text-white">{career.difficulty}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <GraduationCap size={18} className="text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Education</p>
                    <p className="font-semibold text-dark dark:text-white">{career.education}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Wifi size={18} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Remote</p>
                    <p className="font-semibold text-dark dark:text-white">{career.remoteAvailability}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <Briefcase size={18} className="text-gray-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Experience</p>
                    <p className="font-semibold text-dark dark:text-white">{career.experienceLevel}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={toggleBookmark}
                className={`w-full mt-6 py-3 rounded-xl font-medium transition-colors ${
                  isBookmarked
                    ? 'bg-primary text-white'
                    : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {isBookmarked ? 'Bookmarked' : 'Bookmark Career'}
              </button>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-bold text-dark dark:text-white mb-4">Top Companies</h3>
              <div className="space-y-3">
                {career.topCompanies.map((company, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Building2 size={16} className="text-muted" />
                    <span className="text-sm text-dark dark:text-white">{company}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-bold text-dark dark:text-white mb-4">Hiring Industries</h3>
              <div className="flex flex-wrap gap-2">
                {career.hiringIndustries.map((industry) => (
                  <span key={industry} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-sm text-muted">
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-bold text-dark dark:text-white mb-4">Future Scope</h3>
              <p className="text-sm text-muted leading-relaxed">{career.futureScope}</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-bold text-dark dark:text-white mb-4">Market Demand</h3>
              <p className="text-sm text-muted leading-relaxed">{career.marketDemand}</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-bold text-dark dark:text-white mb-4">Related Careers</h3>
              <div className="space-y-2">
                {career.relatedCareers.map((rc) => {
                  const related = careersData.careers.find((c) => c.id === rc);
                  if (!related) return null;
                  return (
                    <button
                      key={rc}
                      onClick={() => navigate(`/careers/${rc}`)}
                      className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                    >
                      <span className="text-sm text-dark dark:text-white">{related.title}</span>
                      <ChevronRight size={16} className="text-muted" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
