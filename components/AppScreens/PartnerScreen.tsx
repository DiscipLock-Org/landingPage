'use client';

import React from 'react';
import { Users, CheckCircle2, XCircle } from 'lucide-react';

export const PartnerScreen: React.FC = () => {
  return (
    <div className="h-full bg-gradient-to-br from-blue-50 via-white to-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-slate-600 to-blue-700 text-white px-4 py-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <Users className="w-5 h-5" />
          <span className="text-xs font-medium">Accountability</span>
        </div>
        <h2 className="text-lg font-bold">Break Request</h2>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-6 overflow-y-auto">
        <div className="bg-white rounded-2xl p-4 shadow-md mb-4">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-slate-600 flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">JD</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">John Doe</h3>
              <p className="text-xs text-gray-500">Your Accountability Partner</p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-3 mb-4">
            <p className="text-xs text-gray-600 mb-1">Request Details</p>
            <p className="text-sm text-gray-700 font-medium mb-2">
              End Instagram session 5 minutes early
            </p>
            <p className="text-xs text-gray-500">
              Reason: "Need to check messages"
            </p>
          </div>

          <div className="space-y-2">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl px-4 py-3 flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-5 h-5 mr-2" />
              <span className="text-sm font-semibold">Approve</span>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl px-4 py-3 flex items-center justify-center shadow-lg">
              <XCircle className="w-5 h-5 mr-2" />
              <span className="text-sm font-semibold">Deny</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-3">
          <p className="text-xs text-gray-600 text-center">
            Your partner will be notified of your decision
          </p>
        </div>
      </div>
    </div>
  );
};
