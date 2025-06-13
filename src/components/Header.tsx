
import React from 'react';
import { Flame } from 'lucide-react';

export const Header = () => {
  return (
    <header className="text-center">
      <div className="flex items-center justify-center mb-4">
        <Flame className="w-8 h-8 text-orange-500 mr-3" />
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          AlgoBurner
        </h1>
        <Flame className="w-8 h-8 text-orange-500 ml-3" />
      </div>
      <p className="text-lg md:text-xl text-slate-400 font-light">
        Because your stats deserve the truth.
      </p>
    </header>
  );
};
