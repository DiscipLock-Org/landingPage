'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Users, TrendingDown } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Phone Addiction Crisis
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Millions struggle with smartphone addiction, affecting relationships and productivity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">3.8B</div>
            <p className="text-gray-600 mb-3">
              People globally struggle with phone addiction
            </p>
            <p className="text-xs text-gray-500 italic">
              Source: Global smartphone addiction research
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">71%</div>
            <p className="text-gray-600 mb-3">
              Spend more time on phones than with loved ones
            </p>
            <p className="text-xs text-gray-500 italic">
              Source: Social media usage studies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center mb-4">
              <TrendingDown className="w-6 h-6 text-white" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">10%</div>
            <p className="text-gray-600 mb-3">
              Success rate when trying to break habits alone
            </p>
            <p className="text-xs text-gray-500 italic">
              Source: American Society for Training and Development
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            There's a Better Way
          </h3>
          <p className="text-xl md:text-2xl mb-6 opacity-90">
            Research shows that accountability partners increase success rates from 10% to 95%
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <p className="opacity-90">With accountability partner</p>
            </div>
            <div className="text-4xl opacity-50">vs</div>
            <div>
              <div className="text-5xl font-bold mb-2">10%</div>
              <p className="opacity-90">Trying alone</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
