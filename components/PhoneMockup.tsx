'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GateScreen } from './AppScreens/GateScreen';
import { TimerScreen } from './AppScreens/TimerScreen';
import { PartnerScreen } from './AppScreens/PartnerScreen';
import { DashboardScreen } from './AppScreens/DashboardScreen';
import { AppListScreen } from './AppScreens/AppListScreen';

const screens = [
  { component: GateScreen, name: 'gate' },
  { component: TimerScreen, name: 'timer' },
  { component: PartnerScreen, name: 'partner' },
  { component: DashboardScreen, name: 'dashboard' },
  { component: AppListScreen, name: 'applist' },
];

interface PhoneMockupProps {
  scrollRef: React.RefObject<HTMLElement>;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ scrollRef }) => {
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  // Map scroll progress to screen index (0-4)
  // Divide scroll progress into 5 equal sections for 5 screens
  const screenIndex = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 1, 2, 3, 4, 4]
  );
  const [currentScreenIndex, setCurrentScreenIndex] = React.useState(0);

  React.useEffect(() => {
    const unsubscribe = screenIndex.on('change', (latest) => {
      const index = Math.min(Math.floor(latest), screens.length - 1);
      if (index >= 0 && index < screens.length && index !== currentScreenIndex) {
        setCurrentScreenIndex(index);
      }
    });
    return () => unsubscribe();
  }, [screenIndex, currentScreenIndex]);

  const CurrentScreen = screens[currentScreenIndex].component;

  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative will-change-transform">
        {/* Phone Frame */}
        <div className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] aspect-[9/19.5] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[2.5rem] sm:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
          
          {/* Screen Area */}
          <div className="relative w-full h-full bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-10 sm:h-12 bg-gradient-to-b from-gray-50 to-white z-20 flex items-center justify-between px-4 sm:px-6 pt-1 sm:pt-2">
              <span className="text-xs font-semibold text-gray-900">9:41</span>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-2 border border-gray-900 rounded-sm">
                  <div className="w-3 h-1.5 bg-gray-900 rounded-sm m-0.5"></div>
                </div>
                <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>
            </div>

            {/* App Content */}
            <div className="absolute inset-0 pt-10 sm:pt-12 overflow-hidden">
              <motion.div
                key={currentScreenIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="h-full"
              >
                <CurrentScreen />
              </motion.div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-0.5 sm:h-1 bg-gray-900 rounded-full z-20"></div>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-slate-500/20 rounded-[2.5rem] sm:rounded-[3rem] blur-2xl -z-10"></div>
      </div>
    </div>
  );
};
