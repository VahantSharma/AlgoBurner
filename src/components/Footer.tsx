import { Code, Flame, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="text-center mt-24 pb-8">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center justify-center text-slate-500">
          <span>Made by Vahant Sharma with</span>
          <Flame className="w-4 h-4 mx-1 text-orange-500" />
          <span>and lots of coffee</span>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/VahantSharma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/vahant-sharma/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://leetcode.com/u/Vahant_Sharma/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors duration-200"
            aria-label="LeetCode Profile"
          >
            <Code className="w-5 h-5" />
          </a>
        </div>

        <div className="text-xs text-slate-600">
          © 2025 AlgoBurner. Built with React, TypeScript & Tailwind CSS
        </div>
      </div>
    </footer>
  );
};
