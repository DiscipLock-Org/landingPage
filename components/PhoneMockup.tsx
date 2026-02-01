'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PrayerTimeScreen } from './AppScreens/PrayerTimeScreen';
import { PartnerRequestScreen } from './AppScreens/PartnerRequestScreen';
import { DashboardScreen } from './AppScreens/DashboardScreen';
import { PhoneFrame } from './PhoneFrame';

const SWIPE_THRESHOLD = 50; // pixels
const PHONES = [
  { screen: DashboardScreen, name: 'Dashboard' },
  { screen: PartnerRequestScreen, name: 'Partner Request' },
  { screen: PrayerTimeScreen, name: 'Prayer Time' },
];

export const PhoneMockup: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with Partner Request
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragCurrent, setDragCurrent] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate position for each phone based on currentIndex
  const getPhonePosition = (index: number) => {
    const diff = index - currentIndex;
    
    if (diff === 0) {
      // Center phone (active)
      return {
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        translateX: 0,
        translateZ: 0,
        zIndex: 3,
        opacity: 1,
      };
    } else if (diff === -1) {
      // Left phone (behind)
      return {
        rotateY: -20,
        rotateZ: -6,
        scale: 0.85,
        translateX: -20,
        translateZ: -100,
        zIndex: 1,
        opacity: 1,
      };
    } else if (diff === 1) {
      // Right phone (behind)
      return {
        rotateY: 20,
        rotateZ: 6,
        scale: 0.85,
        translateX: 20,
        translateZ: -100,
        zIndex: 1,
        opacity: 1,
      };
    } else {
      // Off-screen phones
      return {
        rotateY: diff < 0 ? -30 : 30,
        rotateZ: diff < 0 ? -10 : 10,
        scale: 0.3,
        translateX: diff < 0 ? -60 : 60,
        translateZ: -150,
        zIndex: 0,
        opacity: 0,
      };
    }
  };

  // Handle swipe navigation
  const handleSwipe = (deltaX: number) => {
    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;

    if (deltaX < 0 && currentIndex < PHONES.length - 1) {
      // Swipe left - move to next phone
      setCurrentIndex(currentIndex + 1);
    } else if (deltaX > 0 && currentIndex > 0) {
      // Swipe right - move to previous phone
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setDragStart({ x: touch.clientX, y: touch.clientY });
    setDragCurrent({ x: touch.clientX, y: touch.clientY });
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    setDragCurrent({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    const deltaX = dragCurrent.x - dragStart.x;
    handleSwipe(deltaX);
    setIsDragging(false);
    setDragStart({ x: 0, y: 0 });
    setDragCurrent({ x: 0, y: 0 });
  };

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragStart({ x: e.clientX, y: e.clientY });
    setDragCurrent({ x: e.clientX, y: e.clientY });
    setIsDragging(true);
  };

  // Global mouse event handlers for smooth dragging
  useEffect(() => {
    if (!isDragging) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      setDragCurrent({ x: e.clientX, y: e.clientY });
    };

    const handleGlobalMouseUp = () => {
      setDragCurrent((current) => {
        const deltaX = current.x - dragStart.x;
        handleSwipe(deltaX);
        setIsDragging(false);
        setDragStart({ x: 0, y: 0 });
        return { x: 0, y: 0 };
      });
    };

    document.addEventListener('mousemove', handleGlobalMouseMove);
    document.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, dragStart]);

  const handleMouseLeave = () => {
    // Don't cancel on mouse leave - let global handlers manage it
  };

  // Calculate drag offset for visual feedback during drag
  const dragOffset = isDragging ? dragCurrent.x - dragStart.x : 0;
  const maxDragOffset = 100; // Maximum visual drag offset
  const constrainedDragOffset = Math.max(-maxDragOffset, Math.min(maxDragOffset, dragOffset));

  return (
    <div className="flex flex-col items-center justify-center w-full py-8">
      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="relative flex items-center justify-center w-full overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
      >
        {PHONES.map((phone, index) => {
          const position = getPhonePosition(index);
          const PhoneComponent = phone.screen;
          
          // Apply drag offset to center phone for visual feedback during drag
          const dragAdjustment = index === currentIndex && isDragging ? constrainedDragOffset : 0;
          
          return (
            <motion.div
              key={index}
              style={{
                transformStyle: 'preserve-3d',
              }}
              animate={{
                rotateY: position.rotateY,
                rotateZ: position.rotateZ,
                scale: position.scale,
                x: position.translateX + dragAdjustment,
                z: position.translateZ,
                zIndex: position.zIndex,
                opacity: position.opacity,
              }}
              transition={{
                duration: isDragging ? 0 : 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
              className={`relative ${
                index === currentIndex - 1 ? '-ml-4 sm:-ml-5 md:-ml-6 lg:-ml-8' : ''
              } ${
                index === currentIndex + 1 ? '-mr-4 sm:-mr-5 md:-mr-6 lg:-mr-8' : ''
              }`}
            >
              <PhoneFrame screen={PhoneComponent} />
            </motion.div>
          );
        })}
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {PHONES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-3 h-3 bg-blue-600'
                : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to ${PHONES[index].name}`}
          />
        ))}
      </div>
    </div>
  );
};
