import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, CheckCircle2, Target } from 'lucide-react';
import quizData from '../data/quiz.json';
import careersData from '../data/careers.json';
import { Link } from 'react-router-dom';

export function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  const question = quizData.questions[current];

  const handleSelect = (optionIndex: number) => {
    if (animating) return;
    setSelected(optionIndex);
    setAnimating(true);

    const newScores = { ...scores };
    const option = question.options[optionIndex];
    Object.entries(option.scores).forEach(([career, score]) => {
      newScores[career] = (newScores[career] || 0) + score;
    });
    setScores(newScores);

    setTimeout(() => {
      if (current < quizData.questions.length - 1) {
        setCurrent(current + 1);
        setSelected(null);
        setAnimating(false);
      } else {
        setFinished(true);
      }
    }, 600);
  };

  const reset = () => {
    setCurrent(0);
    setScores({});
    setFinished(false);
    setSelected(null);
    setAnimating(false);
  };

  const topCareers = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([id, score]) => {
      const career = careersData.careers.find((c) => c.id === id);
      return { ...career, score };
    })
    .filter(Boolean);

  if (finished) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Target className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-dark dark:text-white mb-4">Your Career Matches</h1>
          <p className="text-muted">Based on your answers, here are the top 3 careers we recommend for you.</p>
        </motion.div>

        <div className="space-y-6 mb-12">
          {topCareers.map((career, i) => (
            <motion.div
              key={career?.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary font-bold text-lg shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">{career?.title}</h3>
                  <p className="text-sm text-muted mb-4">{career?.overview}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-success font-medium">{career?.averageSalary}</span>
                    <span className="text-primary">{career?.futureDemand} Demand</span>
                    <span className="text-muted">{career?.difficulty}</span>
                  </div>
                </div>
                <Link to={`/careers/${career?.id}`} className="btn-primary text-sm shrink-0">
                  Explore
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button onClick={reset} className="btn-secondary flex items-center gap-2 mx-auto">
            <RotateCcw size={18} /> Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-4xl font-bold text-dark dark:text-white mb-3 tracking-tight">Career Quiz</h1>
        <p className="text-muted text-[15px] leading-relaxed">Answer 10 questions to discover your ideal career path.</p>
      </motion.div>

      <div className="mb-6">
        <div className="flex items-center justify-between text-[13px] mb-2">
          <span className="text-muted">Question {current + 1} of {quizData.questions.length}</span>
          <span className="text-primary font-medium">{Math.round(((current + 1) / quizData.questions.length) * 100)}%</span>
        </div>
        <div className="h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((current + 1) / quizData.questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="card p-8"
        >
          <h2 className="text-xl font-semibold text-dark dark:text-white mb-6">{question.question}</h2>
          <div className="space-y-3">
            {question.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={selected !== null}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  selected === i
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-border dark:border-white/10 hover:border-primary/50 hover:bg-primary/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    selected === i ? 'border-primary bg-primary' : 'border-gray-300 dark:border-gray-600'
                  }`}>
                    {selected === i && <CheckCircle2 size={14} className="text-white" />}
                  </div>
                  <span className="text-dark dark:text-white">{option.text}</span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
