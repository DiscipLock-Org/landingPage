'use client';

import React from 'react';
import { Users, AlertCircle, Clock } from 'lucide-react';

export const PartnerRequestScreen: React.FC = () => {
  return (
    <div className="h-full bg-gradient-to-br from-blue-50 via-white to-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-slate-600 to-blue-700 text-white px-3 sm:px-4 py-4 sm:py-6 rounded-b-2xl sm:rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-2 sm:mb-4">
          <Users className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-[10px] sm:text-xs font-medium">Request Break</span>
        </div>
        <h2 className="text-base sm:text-lg font-bold">End Session Early?</h2>
      </div>

      {/* Content */}
      <div className="flex-1 px-3 sm:px-4 py-4 sm:py-6 overflow-y-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md mb-3 sm:mb-4">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-600 to-slate-600 flex items-center justify-center mr-2 sm:mr-3">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-xs sm:text-sm">Instagram Session</h3>
              <p className="text-[10px] sm:text-xs text-gray-500">5 minutes remaining</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
            <div className="flex items-start">
              <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[10px] sm:text-xs font-semibold text-yellow-800 mb-1">Early Break Request</p>
                <p className="text-[10px] sm:text-xs text-yellow-700">
                  Your accountability partner will be notified and can approve or deny your request.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
            <p className="text-[10px] sm:text-xs text-gray-600 mb-1">Reason (optional):</p>
            <div className="bg-white rounded p-2 border border-gray-200">
              <p className="text-[10px] sm:text-xs text-gray-500 italic">&quot;Need to check messages&quot;</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-center shadow-lg">
              <p className="text-xs sm:text-sm font-semibold">Send Request</p>
            </div>
            <div className="bg-gray-100 text-gray-700 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-center">
              <p className="text-xs sm:text-sm font-medium">Cancel</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-2 sm:p-3">
          <div className="flex items-center mb-1">
            <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mr-2" />
            <p className="text-[10px] sm:text-xs text-gray-600 font-medium">Partner: John Doe</p>
          </div>
          <p className="text-[10px] sm:text-xs text-gray-500">They&apos;ll receive a notification</p>
        </div>
      </div>
    </div>
  );
};
