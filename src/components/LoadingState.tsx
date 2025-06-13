
import React from 'react';
import { Flame } from 'lucide-react';

export const LoadingState = () => {
  return (
    <div className="text-center py-16">
      <div className="relative">
        <Flame className="w-16 h-16 text-orange-500 mx-auto animate-pulse" />
        <div className="absolute inset-0 w-16 h-16 mx-auto">
          <div className="w-16 h-16 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin" />
        </div>
      </div>
      <p className="mt-6 text-xl text-slate-300">
        Preparing your roast...
      </p>
      <p className="mt-2 text-slate-500">
        This might sting a little
      </p>
    </div>
  );
};
