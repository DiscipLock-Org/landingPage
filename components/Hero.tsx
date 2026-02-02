'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, Smartphone } from 'lucide-react';
import { Button } from './ui/Button';
import { Logo } from './Logo';
import { PhoneMockup } from './PhoneMockup';

export const Hero: React.FC = () => {
  const distractionWords = ['Distractions', 'Procrastination', 'Excuses'];
  const focusWords = ['Focus', 'Discipline', 'Productivity'];
  
  const [distractionIndex, setDistractionIndex] = useState(0);
  const [focusIndex, setFocusIndex] = useState(0);
  const [distractionCharIndex, setDistractionCharIndex] = useState(0);
  const [focusCharIndex, setFocusCharIndex] = useState(0);
  const [focusStarted, setFocusStarted] = useState(false);

  // Typewriter effect for distraction words
  useEffect(() => {
    const currentWord = distractionWords[distractionIndex];
    
    if (distractionCharIndex < currentWord.length) {
      // Type next character
      const timeout = setTimeout(() => {
        setDistractionCharIndex((prev) => prev + 1);
      }, 60); // Typing speed: 60ms per character
      
      return () => clearTimeout(timeout);
    } else {
      // Word is complete, wait then move to next word
      const timeout = setTimeout(() => {
        setDistractionIndex((prev) => (prev + 1) % distractionWords.length);
        setDistractionCharIndex(0);
      }, 2000); // Pause 2 seconds after word is complete
      
      return () => clearTimeout(timeout);
    }
  }, [distractionIndex, distractionCharIndex, distractionWords]);

  // Start focus words typing after initial delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFocusStarted(true);
    }, 1500);
    
    return () => clearTimeout(timeout);
  }, []);

  // Typewriter effect for focus words (staggered start)
  useEffect(() => {
    if (!focusStarted) return;
    
    const currentWord = focusWords[focusIndex];
    
    if (focusCharIndex < currentWord.length) {
      // Type next character
      const timeout = setTimeout(() => {
        setFocusCharIndex((prev) => prev + 1);
      }, 60); // Typing speed: 60ms per character
      
      return () => clearTimeout(timeout);
    } else {
      // Word is complete, wait then move to next word
      const timeout = setTimeout(() => {
        setFocusIndex((prev) => (prev + 1) % focusWords.length);
        setFocusCharIndex(0);
      }, 2000); // Pause 2 seconds after word is complete
      
      return () => clearTimeout(timeout);
    }
  }, [focusIndex, focusCharIndex, focusWords, focusStarted]);

  const scrollToForm = () => {
    const formSection = document.getElementById('waitlist-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Background decorative elements - inspired by interlocking padlocks */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blue padlock shape */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
        {/* Grey padlock shape */}
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-slate-500/10 to-slate-600/10 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        {/* Interlocking effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-500/5 via-slate-500/5 to-blue-600/5 rounded-full filter blur-2xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
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
            className="mb-0 -mt-4"
          >
            <Logo className="justify-center" size="md" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-100 mb-4 leading-tight flex flex-col items-center px-4"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 flex-wrap sm:flex-nowrap">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-slate-400 bg-clip-text text-transparent whitespace-nowrap">
                Lock
              </span>
              <span className="relative bg-gradient-to-r from-blue-400 via-blue-500 to-slate-400 bg-clip-text text-transparent whitespace-nowrap inline-block" style={{ minHeight: '1.2em' }}>
                {distractionWords[distractionIndex].split('').map((char, index) => (
                  <motion.span
                    key={`${distractionIndex}-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: index < distractionCharIndex ? 1 : 0,
                      y: index < distractionCharIndex ? 0 : 10
                    }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 flex-wrap sm:flex-nowrap">
              <span className="bg-gradient-to-r from-slate-400 via-blue-500 to-blue-600 bg-clip-text text-transparent whitespace-nowrap">
                Unlock
              </span>
              <span className="relative bg-gradient-to-r from-slate-400 via-blue-500 to-blue-600 bg-clip-text text-transparent whitespace-nowrap inline-block" style={{ minHeight: '1.2em' }}>
                {focusWords[focusIndex].split('').map((char, index) => (
                  <motion.span
                    key={`${focusIndex}-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: index < focusCharIndex ? 1 : 0,
                      y: index < focusCharIndex ? 0 : 10
                    }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Set limits on distracting apps. Complete meaningful tasks before unlocking.
            <span className="block mt-2 font-semibold bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent">
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
            <div className="flex items-center text-gray-300">
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
            <div className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md">
                  <Lock className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-100 mb-1">App Blocking</h3>
                <p className="text-sm text-gray-400">Set limits on distracting apps</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center shadow-md">
                  <Unlock className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-100 mb-1">Meaningful Gates</h3>
                <p className="text-sm text-gray-400">Complete tasks before unlocking</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 via-slate-600 to-blue-700 flex items-center justify-center shadow-md">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-100 mb-1">Partnership</h3>
                <p className="text-sm text-gray-400">Partner approves early breaks</p>
              </div>
            </div>
          </motion.div>

          {/* Phone Carousel - Right after feature highlights */}
          <div className="mt-16 mb-8">
            <PhoneMockup />
          </div>
        </motion.div>

        {/* Statistics Badge - Positioned after phone animation section */}
        <div className="flex flex-col items-center gap-3 pb-4">
          <div className="flex flex-col items-center gap-1">
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700 shadow-sm">
              <span className="text-sm text-gray-200">
                <span className="font-bold text-blue-400">3.8 billion</span> people struggle with phone addiction
              </span>
            </div>
            <p className="text-xs text-gray-400 italic">
              Source: Global smartphone addiction research
            </p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="text-sm text-gray-300">
              <span className="font-semibold text-gray-100">71%</span> spend more time on phones than with loved ones
            </div>
            <p className="text-xs text-gray-400 italic">
              Source: Social media usage studies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
