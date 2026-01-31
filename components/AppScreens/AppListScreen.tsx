'use client';

import React from 'react';
import { Instagram, Youtube, Twitter, Settings } from 'lucide-react';

const apps = [
  { name: 'Instagram', icon: Instagram, limit: '30 min/day', color: 'from-pink-500 to-purple-600' },
  { name: 'TikTok', icon: Youtube, limit: '20 min/day', color: 'from-red-500 to-pink-600' },
  { name: 'Twitter', icon: Twitter, limit: '15 min/day', color: 'from-blue-400 to-blue-600' },
];

export const AppListScreen: React.FC = () => {
  return (
    <div className="h-full bg-gradient-to-br from-white via-slate-50/30 to-blue-50/30 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-4 py-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">App Limits</h2>
          <Settings className="w-5 h-5" />
        </div>
        <p className="text-xs opacity-90">Manage your focus</p>
      </div>

      {/* App List */}
      <div className="flex-1 px-4 py-6 overflow-y-auto">
        <div className="space-y-3">
          {apps.map((app, index) => {
            const Icon = app.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-4 shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center mr-3 shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{app.name}</h3>
                      <p className="text-xs text-gray-500">Limited</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600">Daily Limit</span>
                    <span className="text-xs font-semibold text-gray-900">{app.limit}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className={`bg-gradient-to-r ${app.color} rounded-full h-1.5`}
                      style={{ width: `${Math.random() * 40 + 30}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl px-4 py-3 text-center shadow-lg">
          <p className="text-sm font-semibold">Add More Apps</p>
        </div>
      </div>
    </div>
  );
};
