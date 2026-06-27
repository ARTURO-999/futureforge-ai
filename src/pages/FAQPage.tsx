import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import faqData from '../data/faq.json';

export function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <div className="w-14 h-14 rounded-full bg-primary/[0.08] flex items-center justify-center mx-auto mb-6">
          <HelpCircle className="w-7 h-7 text-primary" strokeWidth={2} />
        </div>
        <h1 className="text-4xl font-bold text-dark dark:text-white mb-3 tracking-tight">Frequently Asked Questions</h1>
        <p className="text-muted text-[15px] leading-relaxed">Everything you need to know about FutureForge.</p>
      </motion.div>

      <div className="space-y-4">
        {faqData.faqs.map((faq, i) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="card overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === faq.id ? null : faq.id)}
              className="w-full p-5 flex items-center justify-between text-left"
            >
              <span className="font-semibold text-dark dark:text-white pr-4 text-[15px] leading-snug">{faq.question}</span>
              <ChevronDown
                size={20}
                className={`text-muted shrink-0 transition-transform duration-300 ${open === faq.id ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence>
              {open === faq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5">
                    <p className="text-[14px] text-muted leading-[1.7]">{faq.answer}</p>
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
