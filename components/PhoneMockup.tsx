'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PrayerTimeScreen } from './AppScreens/PrayerTimeScreen';
import { PartnerRequestScreen } from './AppScreens/PartnerRequestScreen';
import { DashboardScreen } from './AppScreens/DashboardScreen';
import { PhoneFrame } from './PhoneFrame';

interface PhoneMockupProps {
  scrollRef: React.RefObject<HTMLElement>;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ scrollRef }) => {
  // Track scroll through Hero section for animations
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start 0.5', 'end 0'],
  });

  // Animate rotation angles on scroll
  // Left phone: starts at -25deg, animates to -15deg
  const leftRotationY = useTransform(scrollYProgress, [0, 1], [-25, -15]);
  const leftRotationZ = useTransform(scrollYProgress, [0, 1], [-8, -5]);
  
  // Center phone: starts slightly rotated, animates to 0
  const centerRotationY = useTransform(scrollYProgress, [0, 1], [5, 0]);
  
  // Right phone: starts at 25deg, animates to 15deg
  const rightRotationY = useTransform(scrollYProgress, [0, 1], [25, 15]);
  const rightRotationZ = useTransform(scrollYProgress, [0, 1], [8, 5]);

  // Animate scale - phones grow slightly as you scroll
  const leftScale = useTransform(scrollYProgress, [0, 1], [0.85, 0.9]);
  const centerScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const rightScale = useTransform(scrollYProgress, [0, 1], [0.85, 0.9]);

  // Animate translateX for depth effect
  const leftTranslateX = useTransform(scrollYProgress, [0, 1], [-30, -20]);
  const rightTranslateX = useTransform(scrollYProgress, [0, 1], [30, 20]);

  // Animate translateZ for 3D depth
  const leftTranslateZ = useTransform(scrollYProgress, [0, 1], [-50, -30]);
  const centerTranslateZ = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const rightTranslateZ = useTransform(scrollYProgress, [0, 1], [-50, -30]);

  return (
    <div className="flex items-center justify-center w-full py-8">
      {/* Container with 3D perspective */}
      <div 
        className="relative flex items-center justify-center gap-4 sm:gap-6 md:gap-8"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Left Phone - Dashboard */}
        <motion.div
          style={{
            rotateY: leftRotationY,
            rotateZ: leftRotationZ,
            scale: leftScale,
            x: leftTranslateX,
            z: leftTranslateZ,
            zIndex: 1,
            transformStyle: 'preserve-3d',
          }}
          className="relative"
        >
          <PhoneFrame screen={DashboardScreen} />
        </motion.div>

        {/* Center Phone - Partner Request */}
        <motion.div
          style={{
            rotateY: centerRotationY,
            scale: centerScale,
            z: centerTranslateZ,
            zIndex: 3,
            transformStyle: 'preserve-3d',
          }}
          className="relative"
        >
          <PhoneFrame screen={PartnerRequestScreen} />
        </motion.div>

        {/* Right Phone - Prayer Time */}
        <motion.div
          style={{
            rotateY: rightRotationY,
            rotateZ: rightRotationZ,
            scale: rightScale,
            x: rightTranslateX,
            z: rightTranslateZ,
            zIndex: 1,
            transformStyle: 'preserve-3d',
          }}
          className="relative"
        >
          <PhoneFrame screen={PrayerTimeScreen} />
        </motion.div>
      </div>
    </div>
  );
};
