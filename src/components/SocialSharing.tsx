import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from "lucide-react";
import React from "react";

interface SocialSharingProps {
  username: string;
  roastMessage: string;
}

export const SocialSharing: React.FC<SocialSharingProps> = ({
  username,
  roastMessage,
}) => {
  const shareText = `Just got roasted by AlgoBurner 🔥 "${roastMessage}" - Check out your own LeetCode roast at https://github.com/VahantSharma/AlgoBurner`;

  const shareToLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      "https://github.com/VahantSharma/AlgoBurner"
    )}&summary=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank", "width=600,height=400");
  };

  const shareToTwitter = () => {
    const twitterText = `${shareText} by @VahantSharma`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      twitterText
    )}`;
    window.open(url, "_blank", "width=600,height=400");
  };

  return (
    <div className="text-center animate-fade-in">
      <h3 className="text-xl font-semibold text-slate-200 mb-6">
        Share Your Roast
      </h3>
      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
        <Button
          onClick={shareToLinkedIn}
          variant="outline"
          className="flex items-center justify-center bg-[#161b22] border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-200"
        >
          <Linkedin className="w-5 h-5 mr-2" />
          LinkedIn
        </Button>
        <Button
          onClick={shareToTwitter}
          variant="outline"
          className="flex items-center justify-center bg-[#161b22] border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-200"
        >
          <Twitter className="w-5 h-5 mr-2" />
          Twitter
        </Button>
      </div>
    </div>
  );
};
