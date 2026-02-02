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
    <section className="py-12 bg-gray-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Everything You Need to Stay Focused
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Disciplock combines app blocking, meaningful gates, and social accountability
            to help you build lasting discipline.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isAccountability = feature.title === 'Accountability Partner';
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300 h-full group-hover:bg-gradient-to-br group-hover:from-gray-800/80 group-hover:to-gray-900/80`}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  
                  {/* Research Statistics for Accountability Partner */}
                  {isAccountability && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-lg p-3 border border-gray-700">
                        <div className="text-2xl font-bold text-green-400 mb-1">95%</div>
                        <p className="text-xs text-gray-200 mb-2">
                          Success rate with accountability partners
                        </p>
                        <p className="text-[10px] text-gray-400">
                          Research: American Society for Training and Development
                        </p>
                      </div>
                      <div className="mt-2 text-xs text-gray-300">
                        <p>• 76% completion with weekly reports</p>
                        <p>• 66% maintain behavior with support</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
