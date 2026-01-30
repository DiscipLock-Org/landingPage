'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, Smartphone } from 'lucide-react';
import { Button } from './ui/Button';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('waitlist-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50/40 to-slate-50/40 overflow-hidden">
      {/* Background decorative elements - inspired by interlocking padlocks */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blue padlock shape */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        {/* Grey padlock shape */}
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-slate-400/20 to-slate-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        {/* Interlocking effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-500/10 via-slate-500/10 to-blue-600/10 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <Logo className="justify-center" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-slate-700 bg-clip-text text-transparent">
              Lock Your Distractions.
            </span>
            <span className="block bg-gradient-to-r from-slate-600 via-blue-600 to-blue-700 bg-clip-text text-transparent">
              Unlock Your Focus.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Set limits on distracting apps. Complete meaningful tasks before unlocking.
            <span className="block mt-2 font-semibold bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">
              Only your accountability partner can approve early breaks.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button
              size="lg"
              onClick={scrollToForm}
              className="w-full sm:w-auto"
            >
              Join the Waitlist
            </Button>
            <div className="flex items-center text-gray-600">
              <Smartphone className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Coming to iOS & Android</span>
            </div>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
          >
            <div className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-br from-blue-50/80 to-white/80 backdrop-blur-sm border border-blue-100/50 shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md">
                  <Lock className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 mb-1">App Blocking</h3>
                <p className="text-sm text-gray-600">Set limits on distracting apps</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-br from-slate-50/80 to-white/80 backdrop-blur-sm border border-slate-100/50 shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center shadow-md">
                  <Unlock className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 mb-1">Meaningful Gates</h3>
                <p className="text-sm text-gray-600">Complete tasks before unlocking</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-br from-blue-50/40 via-slate-50/40 to-blue-50/40 backdrop-blur-sm border border-blue-200/30 shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 via-slate-600 to-blue-700 flex items-center justify-center shadow-md">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 mb-1">Partnership</h3>
                <p className="text-sm text-gray-600">Partner approves early breaks</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
