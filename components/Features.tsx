'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, BookOpen, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'App Blocking with Gates',
    description: 'Complete meaningful tasks before unlocking apps. Whether it\'s reading a Bible verse, meditating, or reflecting, you must pass through the gate first.',
    color: 'from-blue-600 to-blue-700',
    borderColor: 'border-blue-200',
  },
  {
    icon: Users,
    title: 'Accountability Partner',
    description: 'Your friend approves early breaks - creating real social accountability. No more self-negotiation. They decide if you truly need that break.',
    color: 'from-slate-600 to-slate-700',
    borderColor: 'border-slate-200',
  },
  {
    icon: BookOpen,
    title: 'Faith & Discipline Modes',
    description: 'Choose from Bible verses, Quran readings, meditation, reflection prompts, or motivational quotes. Tailor the experience to your goals.',
    color: 'from-blue-500 to-slate-600',
    borderColor: 'border-blue-200',
  },
  {
    icon: TrendingUp,
    title: 'Track Progress',
    description: 'Build streaks, earn XP, and see your growth over time. Watch your focus improve as you complete more sessions.',
    color: 'from-slate-500 to-blue-600',
    borderColor: 'border-slate-200',
  },
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Stay Focused
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Disciplock combines app blocking, meaningful gates, and social accountability
            to help you build lasting discipline.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`bg-white p-6 rounded-2xl border ${feature.borderColor} hover:border-blue-400 hover:shadow-xl transition-all duration-300 h-full group-hover:bg-gradient-to-br group-hover:from-blue-50/50 group-hover:to-slate-50/50`}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
