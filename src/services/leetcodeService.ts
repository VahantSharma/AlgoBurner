// LeetCode Stats API service
const LEETCODE_API_BASE_URL = import.meta.env.VITE_LEETCODE_API_BASE_URL || 'https://leetcode-stats-api.herokuapp.com';
const API_TIMEOUT = Number(import.meta.env.VITE_LEETCODE_API_TIMEOUT) || 10000;

export interface LeetCodeAPIResponse {
  status: string;
  message: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
}

export interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
  ranking: number;
  totalQuestions: number;
  totalEasy: number;
  totalMedium: number;
  totalHard: number;
}

export class LeetCodeService {
  static async fetchUserStats(username: string): Promise<LeetCodeStats> {
    try {
      // Create an AbortController for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);
      
      const response = await fetch(`${LEETCODE_API_BASE_URL}/${username}`, {
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
        },
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('User not found. Please check the username and try again.');
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: LeetCodeAPIResponse = await response.json();
      
      if (data.status === 'error') {
        throw new Error(data.message || 'Failed to fetch user data');
      }
      
      // Validate required fields
      if (typeof data.totalSolved !== 'number' || data.totalSolved < 0) {
        throw new Error('Invalid data received from API');
      }
      
      // Transform API response to our internal format
      return {
        totalSolved: data.totalSolved,
        easySolved: data.easySolved,
        mediumSolved: data.mediumSolved,
        hardSolved: data.hardSolved,
        acceptanceRate: data.acceptanceRate,
        ranking: data.ranking,
        totalQuestions: data.totalQuestions,
        totalEasy: data.totalEasy,
        totalMedium: data.totalMedium,
        totalHard: data.totalHard,
      };
    } catch (error) {
      console.error('Error fetching LeetCode stats:', error);
      
      // Handle specific error cases
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error('Request timed out. Please try again.');
        }
        if (error.message.includes('404')) {
          throw new Error('User not found. Please check the username and try again.');
        }
        if (error.message.includes('Failed to fetch')) {
          throw new Error('Network error. Please check your internet connection and try again.');
        }
        throw error;
      }
      
      throw new Error('An unexpected error occurred while fetching your stats.');
    }
  }
  
  // Fallback mock data for development/testing
  static getMockStats(): LeetCodeStats {
    return {
      totalSolved: Math.floor(Math.random() * 500) + 50,
      easySolved: Math.floor(Math.random() * 200) + 20,
      mediumSolved: Math.floor(Math.random() * 200) + 15,
      hardSolved: Math.floor(Math.random() * 100) + 5,
      acceptanceRate: Math.floor(Math.random() * 40) + 30,
      ranking: Math.floor(Math.random() * 100000) + 10000,
      totalQuestions: 3000,
      totalEasy: 1000,
      totalMedium: 1500,
      totalHard: 500,
    };
  }
}
