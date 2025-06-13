
import React from 'react';
import { AcceptanceChart } from './AcceptanceChart';
import { DifficultyChart } from './DifficultyChart';
import { LeetCodeStats } from '@/pages/Index';

interface ChartsSectionProps {
  stats: LeetCodeStats;
}

export const ChartsSection: React.FC<ChartsSectionProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
      <div className="bg-[#161b22] border border-slate-700 rounded-lg p-6 shadow-xl">
        <h3 className="text-xl font-semibold text-slate-200 mb-6 text-center">
          Acceptance Rate
        </h3>
        <AcceptanceChart acceptanceRate={stats.acceptanceRate} />
      </div>
      
      <div className="bg-[#161b22] border border-slate-700 rounded-lg p-6 shadow-xl">
        <h3 className="text-xl font-semibold text-slate-200 mb-6 text-center">
          Problem Difficulty Distribution
        </h3>
        <DifficultyChart stats={stats} />
      </div>
    </div>
  );
};
