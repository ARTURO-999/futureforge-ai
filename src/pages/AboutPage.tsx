import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Rocket, Shield } from 'lucide-react';

const values = [
  { icon: Target, title: 'Precision', desc: 'Data-driven insights for every career decision.' },
  { icon: Eye, title: 'Vision', desc: 'Anticipating the future of work and skills.' },
  { icon: Heart, title: 'Empathy', desc: 'Designed around real human career journeys.' },
  { icon: Users, title: 'Community', desc: 'Built with and for professionals worldwide.' },
  { icon: Rocket, title: 'Innovation', desc: 'Leveraging AI to deliver cutting-edge guidance.' },
  { icon: Shield, title: 'Integrity', desc: 'Transparent, accurate, and unbiased information.' },
];

const team = [
  { name: 'Alex Rivera', role: 'Founder & CEO', bio: 'Former Google PM with a passion for democratizing career intelligence.' },
  { name: 'Maya Singh', role: 'Head of AI', bio: 'PhD in Machine Learning from Stanford. Leading our AI research efforts.' },
  { name: 'David Chen', role: 'CTO', bio: 'Ex-Netflix engineer. Architected platforms serving millions of users.' },
  { name: 'Emma Watson', role: 'Head of Design', bio: 'Previously at Apple Design. Crafting beautiful, intuitive experiences.' },
];

export function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-dark dark:text-white mb-4">About FutureForge</h1>
        <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
          FutureForge AI was born from a simple belief: everyone deserves access to world-class career intelligence.
          We combine cutting-edge AI with real market data to help professionals build the careers the future demands.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-dark dark:text-white mb-4">Our Mission</h2>
          <p className="text-muted leading-relaxed mb-4">
            To empower every professional with the intelligence, tools, and guidance needed to build a future-proof career.
            We believe that career decisions should be informed by data, not guesswork.
          </p>
          <p className="text-muted leading-relaxed">
            Whether you are a student exploring your first career, a professional considering a pivot, or an executive
            planning your next move, FutureForge is your companion for the journey ahead.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-dark dark:text-white mb-4">Our Vision</h2>
          <p className="text-muted leading-relaxed mb-4">
            A world where every career decision is an informed one. Where professionals can navigate the rapidly evolving
            landscape of work with confidence and clarity.
          </p>
          <p className="text-muted leading-relaxed">
            We envision a platform that grows with you throughout your career, from your first job to your last,
            providing relevant insights at every stage.
          </p>
        </motion.div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-dark dark:text-white text-center mb-10">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <v.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-dark dark:text-white mb-1">{v.title}</h3>
              <p className="text-sm text-muted">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-dark dark:text-white text-center mb-10">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                {member.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <h3 className="font-semibold text-dark dark:text-white mb-0.5">{member.name}</h3>
              <p className="text-sm text-primary mb-2">{member.role}</p>
              <p className="text-sm text-muted">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
