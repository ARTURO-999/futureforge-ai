import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChevronDown, MapPin, CheckCircle2 } from 'lucide-react';
import roadmapsData from '../data/roadmaps.json';

export function RoadmapsPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-4xl font-bold text-dark dark:text-white mb-3 tracking-tight">Learning Roadmaps</h1>
        <p className="text-muted max-w-2xl text-[15px] leading-relaxed">Step-by-step guides from beginner to expert for every career path. Follow the proven path to mastery.</p>
      </motion.div>

      <div className="space-y-5">
        {roadmapsData.roadmaps.map((roadmap, i) => (
          <motion.div
            key={roadmap.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="card overflow-hidden"
          >
            <button
              onClick={() => setExpanded(expanded === roadmap.id ? null : roadmap.id)}
              className="w-full p-6 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/[0.12] to-accent/[0.12] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-dark dark:text-white">{roadmap.title}</h3>
                  <p className="text-[13px] text-muted mt-1">{roadmap.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-2 text-[13px] text-muted">
                  <Clock size={14} strokeWidth={2} />
                  <span>{roadmap.totalTime}</span>
                </div>
                <ChevronDown
                  size={18}
                  strokeWidth={2.5}
                  className={`text-muted transition-transform duration-300 ${expanded === roadmap.id ? 'rotate-180' : ''}`}
                />
              </div>
            </button>

            <AnimatePresence>
              {expanded === roadmap.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div className="relative">
                      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />
                      <div className="space-y-8">
                        {roadmap.stages.map((stage, stageIndex) => (
                          <div key={stageIndex} className="relative pl-14">
                            <div className="absolute left-3 top-0 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                              {stageIndex + 1}
                            </div>
                            <div className="mb-3">
                              <h4 className="font-semibold text-dark dark:text-white text-[15px]">{stage.name}</h4>
                              <p className="text-[13px] text-muted">{stage.duration}</p>
                            </div>
                            <div className="space-y-2">
                              {stage.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="flex items-center gap-2 text-[13px] text-muted leading-relaxed">
                                  <CheckCircle2 size={14} className="text-success shrink-0" strokeWidth={2} />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
