
import React from 'react';

interface RoastDisplayProps {
  message: string;
  username: string;
}

export const RoastDisplay: React.FC<RoastDisplayProps> = ({ message, username }) => {
  return (
    <div className="animate-fade-in">
      <div className="bg-[#161b22] border border-slate-700 rounded-lg p-8 shadow-2xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-slate-200 mb-2">
            🔥 Roast for @{username}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
        </div>
        
        <blockquote className="text-lg md:text-xl text-slate-300 italic text-center leading-relaxed font-mono">
          "{message}"
        </blockquote>
      </div>
    </div>
  );
};
