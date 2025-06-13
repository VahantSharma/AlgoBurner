import { ChartsSection } from "@/components/ChartsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LoadingState } from "@/components/LoadingState";
import { RoastDisplay } from "@/components/RoastDisplay";
import { SocialSharing } from "@/components/SocialSharing";
import { UsernameForm } from "@/components/UsernameForm";
import { useState } from "react";

export interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
  ranking: number;
  totalQuestions: number;
}

const Index = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [roastMessage, setRoastMessage] = useState("");
  const generateRoast = (stats: LeetCodeStats) => {
    const roasts = [
      `${stats.totalSolved} problems solved? That's cute. My calculator has done more heavy lifting.`,
      `With a ${stats.acceptanceRate}% acceptance rate, you're like a participation trophy in competitive programming.`,
      `Ranking #${stats.ranking}? Even my WiFi password has better performance metrics.`,
      `${stats.easySolved} easy problems solved. Congratulations, you've mastered digital breathing.`,
      `Your LeetCode profile is like a horror movie - lots of attempts, minimal success.`,
      `${stats.hardSolved} hard problems? I've seen more challenge in opening a jar of pickles.`,
      `With ${stats.mediumSolved} medium problems, you're the human equivalent of lukewarm coffee.`,
      `Your acceptance rate suggests you treat LeetCode like a lottery - throw enough darts and eventually hit something.`,
      `${stats.totalSolved} solutions but still can't solve the problem of being mediocre at coding.`,
      `Your ranking is so low, it's practically underground. Are you coding or mining for coal?`,
      `Looking at your stats, I'd say you're consistent... consistently average.`,
      `${stats.totalSolved} problems solved and yet the biggest problem remains unsolved: your coding skills.`,
    ];
    return roasts[Math.floor(Math.random() * roasts.length)];
  };

  const handleSubmit = async (inputUsername: string) => {
    setIsLoading(true);
    setUsername(inputUsername);

    // Simulate API call with mock data for demo
    setTimeout(() => {
      const mockStats: LeetCodeStats = {
        totalSolved: Math.floor(Math.random() * 500) + 50,
        easySolved: Math.floor(Math.random() * 200) + 20,
        mediumSolved: Math.floor(Math.random() * 200) + 15,
        hardSolved: Math.floor(Math.random() * 100) + 5,
        acceptanceRate: Math.floor(Math.random() * 40) + 30,
        ranking: Math.floor(Math.random() * 100000) + 10000,
        totalQuestions: 3000,
      };

      setStats(mockStats);
      setRoastMessage(generateRoast(mockStats));
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0e1117] text-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Header />

        <div className="mt-12">
          <UsernameForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>

        {isLoading && (
          <div className="mt-16">
            <LoadingState />
          </div>
        )}

        {stats && !isLoading && (
          <div className="mt-16 space-y-12">
            <RoastDisplay message={roastMessage} username={username} />

            <ChartsSection stats={stats} />

            <SocialSharing username={username} roastMessage={roastMessage} />
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default Index;
