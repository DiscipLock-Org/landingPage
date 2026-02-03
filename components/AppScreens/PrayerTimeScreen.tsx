'use client';

import React from 'react';
import { Moon, Lock, Clock } from 'lucide-react';

export const PrayerTimeScreen: React.FC = () => {
  return (
    <div className="h-full bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-3 sm:px-4 py-4 sm:py-6 rounded-b-2xl sm:rounded-b-3xl shadow-lg">
        <div className="flex items-center mb-2">
          <Moon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          <span className="text-[10px] sm:text-xs font-medium">Maghrib Prayer</span>
        </div>
        <h2 className="text-base sm:text-lg font-bold">It&apos;s Time to Pray</h2>
        <p className="text-[10px] sm:text-xs opacity-90 mt-1">Sunset: 6:45 PM</p>
      </div>

      {/* Content */}
      <div className="flex-1 px-3 sm:px-4 py-4 sm:py-6 overflow-y-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md mb-3 sm:mb-4">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center mr-2 sm:mr-3">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-xs sm:text-sm">Prayer Time Active</h3>
              <p className="text-[10px] sm:text-xs text-gray-500">Apps locked for 15 minutes</p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
            <p className="text-[10px] sm:text-xs text-gray-600 mb-2">Locked Apps:</p>
            <div className="space-y-2">
              {['Instagram', 'TikTok', 'Twitter', 'YouTube'].map((app, i) => (
                <div key={i} className="flex items-center justify-between bg-white rounded p-2">
                  <span className="text-xs text-gray-700 font-medium">{app}</span>
                  <Lock className="w-3 h-3 text-slate-600" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-lg p-2 sm:p-3 text-center">
            <p className="text-[10px] sm:text-xs font-medium">Complete your prayer to unlock</p>
          </div>
        </div>
      </div>
    </div>
  );
};
