'use client';

import React from 'react';

interface PhoneFrameProps {
  screen: React.ComponentType;
  className?: string;
  style?: React.CSSProperties;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  screen: ScreenComponent,
  className = '',
  style = {},
}) => {
  return (
    <div
      style={{
        transformStyle: 'preserve-3d',
        ...style,
      }}
      className={`relative will-change-transform ${className}`}
    >
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
          <div className="absolute inset-0 pt-10 sm:pt-12 pb-2 overflow-hidden">
            <div className="w-full h-full">
              <ScreenComponent />
            </div>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-0.5 sm:h-1 bg-gray-900 rounded-full z-20"></div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-slate-500/20 rounded-[2.5rem] sm:rounded-[3rem] blur-2xl -z-10"></div>
    </div>
  );
};
