
import React from 'react';
import { LeetCodeStats } from '@/services/leetcodeService';

interface DifficultyChartProps {
  stats: LeetCodeStats;
}

export const DifficultyChart: React.FC<DifficultyChartProps> = ({ stats }) => {
  const total = stats.easySolved + stats.mediumSolved + stats.hardSolved;
  const easyPercentage = (stats.easySolved / total) * 100;
  const mediumPercentage = (stats.mediumSolved / total) * 100;
  const hardPercentage = (stats.hardSolved / total) * 100;

  return (
    <div className="space-y-6">
      <div className="relative w-32 h-32 mx-auto">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#22c55e"
            strokeWidth="8"
            strokeDasharray={`${easyPercentage * 2.83} 283`}
            strokeLinecap="round"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="8"
            strokeDasharray={`${mediumPercentage * 2.83} 283`}
            strokeDashoffset={-easyPercentage * 2.83}
            strokeLinecap="round"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#ef4444"
            strokeWidth="8"
            strokeDasharray={`${hardPercentage * 2.83} 283`}
            strokeDashoffset={-(easyPercentage + mediumPercentage) * 2.83}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-white">{total}</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />
            <span className="text-slate-300">Easy</span>
          </div>
          <span className="text-white font-semibold">{stats.easySolved}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2" />
            <span className="text-slate-300">Medium</span>
          </div>
          <span className="text-white font-semibold">{stats.mediumSolved}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2" />
            <span className="text-slate-300">Hard</span>
          </div>
          <span className="text-white font-semibold">{stats.hardSolved}</span>
        </div>
      </div>
    </div>
  );
};
