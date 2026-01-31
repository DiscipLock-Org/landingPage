'use client';

import React from 'react';
import { Clock, Instagram } from 'lucide-react';

export const TimerScreen: React.FC = () => {
  return (
    <div className="h-full bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-4 py-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <Instagram className="w-5 h-5" />
          <span className="text-xs font-medium">Active Session</span>
        </div>
        <h2 className="text-lg font-bold">Instagram Focus</h2>
      </div>

      {/* Timer Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="relative mb-8">
          {/* Circular Progress */}
          <div className="w-48 h-48 rounded-full border-8 border-slate-200 flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-blue-600 border-r-blue-600" style={{
              transform: 'rotate(135deg)',
            }}></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-1">09:45</div>
              <div className="text-sm text-gray-500">of 10 minutes</div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-xs space-y-3">
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-600">Time Remaining</span>
              <Clock className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-lg font-bold text-gray-900">0:15</div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl px-4 py-3 text-center shadow-lg">
            <p className="text-sm font-semibold">End Session Early</p>
          </div>
        </div>
      </div>
    </div>
  );
};
