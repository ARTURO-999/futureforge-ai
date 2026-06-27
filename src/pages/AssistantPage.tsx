import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const suggestedQuestions = [
  'What career has the highest salary potential?',
  'How do I become a full stack developer?',
  'What skills are in highest demand right now?',
  'Which career is best for remote work?',
  'How long does it take to learn AI?',
  'What certifications should I get?',
];

const demoResponses: Record<string, string> = {
  'What career has the highest salary potential?':
    'AI Engineers currently have the highest salary potential, with average compensation ranging from $140,000 to $220,000 per year. Machine Learning Engineers and Cloud Engineers are also among the top-paying roles.',
  'How do I become a full stack developer?':
    'To become a full stack developer, start with HTML, CSS, and JavaScript. Then learn a frontend framework like React, a backend language like Node.js or Python, and databases like SQL and MongoDB. Check out our Learning Roadmaps for a detailed step-by-step guide.',
  'What skills are in highest demand right now?':
    'The most in-demand skills are Python, Cyber Security, Machine Learning, SQL, JavaScript, AWS, and Cloud Computing. These skills are essential across multiple industries and command premium salaries.',
  'Which career is best for remote work?':
    'Frontend Developer, UI/UX Designer, and Full Stack Developer roles offer the highest remote work availability. DevOps and Data Science also have strong remote opportunities with 35-45% of positions being fully remote.',
  'How long does it take to learn AI?':
    'Becoming proficient in AI typically takes 10-16 months of dedicated study. You need a strong foundation in mathematics (linear algebra, calculus, statistics), Python programming, and machine learning frameworks like TensorFlow and PyTorch.',
  'What certifications should I get?':
    'Top certifications include AWS Solutions Architect for cloud, CISSP for security, Google Cloud Professional ML Engineer for AI, and Meta Frontend Developer for web development. Choose based on your target career path.',
};

const defaultResponse =
  'I am your AI Career Assistant. I can help you explore careers, analyze skills, and provide market insights. Try asking me about specific careers, salary data, or learning paths. What would you like to know?';

export function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Hello! I am your AI Career Assistant. I can help you discover the perfect career, analyze skills, and navigate the job market. What can I help you with today?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const matchedKey = Object.keys(demoResponses).find((k) =>
        text.toLowerCase().includes(k.toLowerCase()) ||
        k.toLowerCase().includes(text.toLowerCase())
      );

      const response = matchedKey ? demoResponses[matchedKey] : defaultResponse;

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, assistantMsg]);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-4xl font-bold text-dark dark:text-white mb-4">AI Career Assistant</h1>
        <p className="text-muted">Your intelligent companion for career discovery, skill analysis, and market insights.</p>
      </motion.div>

      <div className="card overflow-hidden flex flex-col" style={{ height: '600px' }}>
        {/* Header */}
        <div className="px-6 py-4 border-b border-border dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-dark dark:text-white">AI Assistant</h3>
              <p className="text-xs text-muted">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-primary/10 text-primary'
                  }`}
                >
                  {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                </div>
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-primary text-white rounded-tr-md'
                      : 'bg-gray-50 dark:bg-white/5 text-dark dark:text-white rounded-tl-md'
                  }`}
                >
                  {msg.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Bot size={14} />
              </div>
              <div className="px-4 py-3 rounded-2xl rounded-tl-md bg-gray-50 dark:bg-white/5">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-muted animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 rounded-full bg-muted animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-muted animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested questions */}
        {messages.length === 1 && (
          <div className="px-6 pb-2">
            <p className="text-xs text-muted mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="px-3 py-1.5 rounded-lg bg-primary/5 text-primary text-xs hover:bg-primary/10 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="px-6 py-4 border-t border-border dark:border-white/10">
          <div className="flex gap-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about careers, skills, or market trends..."
              className="flex-1 px-4 py-3 rounded-xl border border-border dark:border-white/10 bg-white dark:bg-[#1E293B] text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
            />
            <button
              onClick={() => handleSend(input)}
              disabled={!input.trim() || isTyping}
              className="p-3 rounded-xl bg-primary text-white hover:bg-accent transition-colors disabled:opacity-40"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
