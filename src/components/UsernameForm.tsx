
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface UsernameFormProps {
  onSubmit: (username: string) => void;
  isLoading: boolean;
}

export const UsernameForm: React.FC<UsernameFormProps> = ({ onSubmit, isLoading }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSubmit(username.trim());
    }
  };

  return (    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            type="text"
            placeholder="Enter LeetCode username (e.g., johndoe)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full h-14 text-lg bg-[#161b22] border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500/20"
            disabled={isLoading}
          />
          <p className="mt-2 text-xs text-slate-500 text-center">
            Enter your exact LeetCode username to get your real stats roasted!
          </p>
        </div>
        
        <Button
          type="submit"
          disabled={isLoading || !username.trim()}
          className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
        >
          {isLoading ? (
            <div className="flex items-center">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
              Fetching & Burning...
            </div>
          ) : (
            <>🔥 Roast My Stats</>
          )}
        </Button>
      </form>
    </div>
  );
};
