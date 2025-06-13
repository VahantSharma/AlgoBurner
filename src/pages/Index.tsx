import { ChartsSection } from "@/components/ChartsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LoadingState } from "@/components/LoadingState";
import { RoastDisplay } from "@/components/RoastDisplay";
import { SocialSharing } from "@/components/SocialSharing";
import { UsernameForm } from "@/components/UsernameForm";
import { LeetCodeService, LeetCodeStats } from "@/services/leetcodeService";
import { useState } from "react";

const Index = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [roastMessage, setRoastMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

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
      `${stats.totalSolved} out of ${stats.totalQuestions} problems? You've barely scratched the surface of your incompetence.`,
      `Your easy-to-hard ratio suggests you avoid challenges like vampires avoid sunlight.`,
      `${Math.round(
        (stats.totalSolved / stats.totalQuestions) * 100
      )}% completion rate? Even my patience has better statistics.`,
      `With ${stats.easySolved} easy problems, you've proven that you can breathe and type simultaneously. Barely.`,
      `Your medium problem count is like your coding skills - painfully average and forgettable.`,
      `${stats.hardSolved} hard problems? I've seen more complexity in a game of tic-tac-toe.`,
      `Your acceptance rate of ${stats.acceptanceRate}% suggests even LeetCode feels sorry for you.`,
      `Ranking #${stats.ranking}? You're like the middle child of competitive programming - ignored and unremarkable.`,
    ];
    return roasts[Math.floor(Math.random() * roasts.length)];
  };

  const handleSubmit = async (inputUsername: string) => {
    setIsLoading(true);
    setUsername(inputUsername);
    setError(null);
    setStats(null);
    setRoastMessage("");

    try {
      // Fetch real LeetCode data
      const leetcodeStats = await LeetCodeService.fetchUserStats(inputUsername);
      setStats(leetcodeStats);
      setRoastMessage(generateRoast(leetcodeStats));
    } catch (err) {
      console.error("Error fetching LeetCode stats:", err);
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );

      // Fallback to mock data in case of API failure (for demo purposes)
      if (process.env.NODE_ENV === "development") {
        console.log("Using mock data as fallback...");
        const mockStats = LeetCodeService.getMockStats();
        setStats(mockStats);
        setRoastMessage(generateRoast(mockStats));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0e1117] text-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Header />

        <div className="mt-12">
          <UsernameForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>

        {error && !stats && !isLoading && (
          <div className="mt-16 max-w-md mx-auto">
            <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 text-center">
              <h3 className="text-red-400 font-semibold mb-2">
                Oops! Something went wrong
              </h3>
              <p className="text-red-300 text-sm">{error}</p>
              <p className="text-slate-400 text-xs mt-2">
                Double-check the username and try again, or the API might be
                temporarily unavailable.
              </p>
            </div>
          </div>
        )}

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
