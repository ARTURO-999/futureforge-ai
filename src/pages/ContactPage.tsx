import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { useToast } from '../components/Toast';

export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      showToast('Message sent successfully! We will get back to you soon.', 'success');
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-4xl font-bold text-dark dark:text-white mb-3 tracking-tight">Contact Us</h1>
        <p className="text-muted max-w-2xl text-[15px] leading-relaxed">Have a question or feedback? We would love to hear from you. Reach out and our team will respond promptly.</p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="card p-6"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[13px] font-semibold text-dark dark:text-white mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-dark dark:text-white mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-field"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-[13px] font-semibold text-dark dark:text-white mb-2">Subject</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="input-field"
                placeholder="How can we help?"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[13px] font-semibold text-dark dark:text-white mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="input-field resize-none"
                placeholder="Tell us more about your question..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary flex items-center gap-2 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card p-6"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-4">
              <Mail className="w-5 h-5 text-primary" strokeWidth={2} />
            </div>
            <h3 className="font-semibold text-dark dark:text-white mb-1 text-[15px]">Email</h3>
            <p className="text-[13px] text-muted">hello@futureforge.ai</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card p-6"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-4">
              <Phone className="w-5 h-5 text-primary" strokeWidth={2} />
            </div>
            <h3 className="font-semibold text-dark dark:text-white mb-1 text-[15px]">Phone</h3>
            <p className="text-[13px] text-muted">+1 (555) 123-4567</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card p-6"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-primary" strokeWidth={2} />
            </div>
            <h3 className="font-semibold text-dark dark:text-white mb-1 text-[15px]">Location</h3>
            <p className="text-[13px] text-muted leading-relaxed">San Francisco, CA<br />United States</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="card p-6"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-4">
              <MessageSquare className="w-5 h-5 text-primary" strokeWidth={2} />
            </div>
            <h3 className="font-semibold text-dark dark:text-white mb-1 text-[15px]">AI Assistant</h3>
            <p className="text-[13px] text-muted mb-3 leading-relaxed">Get instant answers to your career questions.</p>
            <p className="text-[13px] text-muted">Use the floating chat icon in the corner.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
