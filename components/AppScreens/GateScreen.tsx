'use client';

import React from 'react';
import { BookOpen, Lock } from 'lucide-react';

export const GateScreen: React.FC = () => {
  return (
    <div className="h-full bg-gradient-to-br from-blue-50 via-white to-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 sm:px-4 py-4 sm:py-6 rounded-b-2xl sm:rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-2 sm:mb-4">
          <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-[10px] sm:text-xs font-medium">Disciplock</span>
        </div>
        <h2 className="text-base sm:text-lg font-bold">Complete to Unlock</h2>
      </div>

      {/* Content */}
      <div className="flex-1 px-3 sm:px-4 py-4 sm:py-6 overflow-y-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md mb-3 sm:mb-4">
          <div className="flex items-center mb-2 sm:mb-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mr-2 sm:mr-3">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-xs sm:text-sm">Today&apos;s Verse</h3>
              <p className="text-[10px] sm:text-xs text-gray-500">Matthew 6:34</p>
            </div>
          </div>
          
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3 sm:mb-4">
            &quot;Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.&quot;
          </p>

          <div className="bg-blue-50 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
            <p className="text-[10px] sm:text-xs text-gray-600 mb-1 sm:mb-2">Reflection Question:</p>
            <p className="text-[10px] sm:text-xs text-gray-700 font-medium">
              What is one worry you can let go of today?
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-center shadow-lg">
          <p className="text-xs sm:text-sm font-semibold">I&apos;ve completed this</p>
        </div>
      </div>
    </div>
  );
};
