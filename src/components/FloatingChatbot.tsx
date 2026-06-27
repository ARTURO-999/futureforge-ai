import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, User, Bot, X, MessageCircle } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const suggestedQuestions = [
  'What career has the highest salary?',
  'How do I become a full stack developer?',
  'What skills are in highest demand?',
  'Which career is best for remote work?',
  'How long to learn AI?',
  'What certifications should I get?',
];

const demoResponses: Record<string, string> = {
  'What career has the highest salary?':
    'AI Engineers currently have the highest salary potential, with average compensation ranging from $140,000 to $220,000 per year. Machine Learning Engineers and Cloud Engineers are also among the top-paying roles.',
  'How do I become a full stack developer?':
    'To become a full stack developer, start with HTML, CSS, and JavaScript. Then learn a frontend framework like React, a backend language like Node.js or Python, and databases like SQL and MongoDB. Check out our Learning Roadmaps for a detailed step-by-step guide.',
  'What skills are in highest demand?':
    'The most in-demand skills are Python, Cyber Security, Machine Learning, SQL, JavaScript, AWS, and Cloud Computing. These skills are essential across multiple industries and command premium salaries.',
  'Which career is best for remote work?':
    'Frontend Developer, UI/UX Designer, and Full Stack Developer roles offer the highest remote work availability. DevOps and Data Science also have strong remote opportunities with 35-45% of positions being fully remote.',
  'How long to learn AI?':
    'Becoming proficient in AI typically takes 10-16 months of dedicated study. You need a strong foundation in mathematics, Python programming, and machine learning frameworks like TensorFlow and PyTorch.',
  'What certifications should I get?':
    'Top certifications include AWS Solutions Architect for cloud, CISSP for security, Google Cloud Professional ML Engineer for AI, and Meta Frontend Developer for web development. Choose based on your target career path.',
};

const defaultResponse =
  "I can help you explore careers, analyze skills, and provide market insights. Try asking about specific careers, salary data, or learning paths.";

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        "Hello! I'm your AI Career Assistant. I can help you discover the perfect career, analyze skills, and navigate the job market.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
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
      setTimeout(() => inputRef.current?.focus(), 300);
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
      const matchedKey = Object.keys(demoResponses).find(
        (k) =>
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
    }, 1200);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  return (
    <>
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-[400px] h-[500px] max-h-[70vh] card shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-border dark:border-white/10 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-dark dark:text-white">AI Assistant</h3>
                  <p className="text-xs text-green-500">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 text-muted transition-colors"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      msg.role === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-primary/10 text-primary'
                    }`}
                  >
                    {msg.role === 'user' ? <User size={12} /> : <Bot size={12} />}
                  </div>
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-primary text-white rounded-tr-md'
                        : 'bg-gray-50 dark:bg-white/5 text-dark dark:text-white rounded-tl-md'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Bot size={12} />
                  </div>
                  <div className="px-3 py-2 rounded-2xl rounded-tl-md bg-gray-50 dark:bg-white/5">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested questions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 shrink-0">
                <p className="text-xs text-muted mb-1.5">Try asking:</p>
                <div className="flex flex-wrap gap-1.5">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="px-2.5 py-1 rounded-md bg-primary/5 text-primary text-xs hover:bg-primary/10 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="px-4 py-3 border-t border-border dark:border-white/10 shrink-0">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about careers..."
                  className="flex-1 px-3 py-2 rounded-lg border border-border dark:border-white/10 bg-white dark:bg-[#1E293B] text-dark dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button
                  onClick={() => handleSend(input)}
                  disabled={!input.trim() || isTyping}
                  className="p-2 rounded-lg bg-primary text-white hover:bg-accent transition-colors disabled:opacity-40"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-primary text-white shadow-xl shadow-primary/25 hover:bg-accent hover:scale-105 transition-all flex items-center justify-center"
            aria-label="Open AI Assistant"
          >
            <MessageCircle size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
