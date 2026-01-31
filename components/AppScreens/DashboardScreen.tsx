'use client';

import React from 'react';
import { Flame, TrendingUp, Award, Clock } from 'lucide-react';

export const DashboardScreen: React.FC = () => {
  return (
    <div className="h-full bg-gradient-to-br from-white via-blue-50/30 to-slate-50/30 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-6 rounded-b-3xl shadow-lg">
        <h2 className="text-lg font-bold">Dashboard</h2>
        <p className="text-xs opacity-90">Your Focus Journey</p>
      </div>

      {/* Stats */}
      <div className="flex-1 px-4 py-6 overflow-y-auto">
        {/* Streak Card */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 mb-4 shadow-lg text-white">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Flame className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Current Streak</span>
            </div>
          </div>
          <div className="text-3xl font-bold mb-1">5 days</div>
          <p className="text-xs opacity-90">Keep it going! 🔥</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white rounded-xl p-3 shadow-md">
            <div className="flex items-center mb-2">
              <Clock className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-xs text-gray-600">Focus Time</span>
            </div>
            <div className="text-xl font-bold text-gray-900">425</div>
            <div className="text-xs text-gray-500">minutes</div>
          </div>

          <div className="bg-white rounded-xl p-3 shadow-md">
            <div className="flex items-center mb-2">
              <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-xs text-gray-600">Sessions</span>
            </div>
            <div className="text-xl font-bold text-gray-900">23</div>
            <div className="text-xs text-gray-500">completed</div>
          </div>
        </div>

        {/* XP Card */}
        <div className="bg-gradient-to-r from-blue-600 to-slate-600 rounded-xl p-4 shadow-lg text-white mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">XP Progress</span>
            </div>
          </div>
          <div className="text-2xl font-bold mb-2">230 / 500</div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div className="bg-white rounded-full h-2" style={{ width: '46%' }}></div>
          </div>
          <p className="text-xs opacity-90 mt-1">Level 3</p>
        </div>

        {/* Weekly View */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h3 className="text-sm font-bold text-gray-900 mb-3">This Week</h3>
          <div className="flex justify-between">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
              <div key={i} className="text-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                  i < 5 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  <span className="text-xs font-bold">{day}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
