"use client";

import { useState, useEffect, useCallback } from "react";

export interface MuscleProgress {
  muscleName: string;
  correctCount: number;
  incorrectCount: number;
  lastReviewed: string | null;
  nextReviewDate: string | null;
  easeFactor: number; // For spaced repetition (default 2.5)
  interval: number; // Days until next review
  repetitions: number;
}

export interface StudySession {
  date: string;
  correctCount: number;
  incorrectCount: number;
  musclesStudied: number;
  duration: number; // in seconds
}

export interface StudyProgress {
  muscles: Record<string, MuscleProgress>;
  sessions: StudySession[];
  totalCorrect: number;
  totalIncorrect: number;
  streakDays: number;
  lastStudyDate: string | null;
  startDate: string;
}

const STORAGE_KEY = "anatomy-study-progress";
const SESSION_STORAGE_KEY = "anatomy-current-session";

const defaultProgress: StudyProgress = {
  muscles: {},
  sessions: [],
  totalCorrect: 0,
  totalIncorrect: 0,
  streakDays: 0,
  lastStudyDate: null,
  startDate: new Date().toISOString().split("T")[0],
};

// SM-2 Algorithm helper function for spaced repetition
function calculateNextReview(
  quality: number, // 0-5, where 5 is perfect recall
  repetitions: number,
  easeFactor: number,
  interval: number
): { interval: number; repetitions: number; easeFactor: number } {
  let newEaseFactor = easeFactor;
  let newInterval = interval;
  let newRepetitions = repetitions;

  if (quality >= 3) {
    // Correct response
    if (repetitions === 0) {
      newInterval = 1;
    } else if (repetitions === 1) {
      newInterval = 6;
    } else {
      newInterval = Math.round(interval * easeFactor);
    }
    newRepetitions = repetitions + 1;
  } else {
    // Incorrect response - reset
    newRepetitions = 0;
    newInterval = 1;
  }

  // Update ease factor
  newEaseFactor = Math.max(
    1.3,
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  return {
    interval: newInterval,
    repetitions: newRepetitions,
    easeFactor: newEaseFactor,
  };
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

function isYesterday(date: Date): boolean {
  const yesterday = addDays(new Date(), -1);
  return isSameDay(date, yesterday);
}

export function useStudyProgress() {
  const [progress, setProgress] = useState<StudyProgress>(defaultProgress);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sessionStartTime, setSessionStartTime] = useState<number | null>(null);
  const [sessionStats, setSessionStats] = useState({
    correct: 0,
    incorrect: 0,
    musclesStudied: new Set<string>(),
  });

  // Load progress from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as StudyProgress;
        setProgress(parsed);
        
        // Update streak if needed
        if (parsed.lastStudyDate) {
          const lastDate = new Date(parsed.lastStudyDate);
          const today = new Date();
          
          if (!isSameDay(lastDate, today) && !isYesterday(lastDate)) {
            // Streak broken
            setProgress(prev => ({ ...prev, streakDays: 0 }));
          }
        }
      } catch (e) {
        console.error("Failed to parse study progress:", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress, isLoaded]);

  // Start a new study session
  const startSession = useCallback(() => {
    setSessionStartTime(Date.now());
    setSessionStats({
      correct: 0,
      incorrect: 0,
      musclesStudied: new Set<string>(),
    });
  }, []);

  // End the current session
  const endSession = useCallback(() => {
    if (sessionStartTime && sessionStats.musclesStudied.size > 0) {
      const duration = Math.round((Date.now() - sessionStartTime) / 1000);
      const today = new Date().toISOString().split("T")[0];
      
      const newSession: StudySession = {
        date: today,
        correctCount: sessionStats.correct,
        incorrectCount: sessionStats.incorrect,
        musclesStudied: sessionStats.musclesStudied.size,
        duration,
      };

      setProgress(prev => {
        const lastDate = prev.lastStudyDate ? new Date(prev.lastStudyDate) : null;
        const todayDate = new Date();
        
        let newStreak = prev.streakDays;
        if (!lastDate || !isSameDay(lastDate, todayDate)) {
          if (lastDate && isYesterday(lastDate)) {
            newStreak = prev.streakDays + 1;
          } else if (!lastDate) {
            newStreak = 1;
          }
        }

        return {
          ...prev,
          sessions: [...prev.sessions, newSession],
          lastStudyDate: today,
          streakDays: newStreak,
        };
      });
    }
    setSessionStartTime(null);
    setSessionStats({
      correct: 0,
      incorrect: 0,
      musclesStudied: new Set<string>(),
    });
  }, [sessionStartTime, sessionStats]);

  // Record a correct answer
  const recordCorrect = useCallback((muscleName: string) => {
    const today = new Date().toISOString().split("T")[0];
    
    setSessionStats(prev => ({
      correct: prev.correct + 1,
      incorrect: prev.incorrect,
      musclesStudied: new Set([...prev.musclesStudied, muscleName]),
    }));

    setProgress(prev => {
      const existing = prev.muscles[muscleName] || {
        muscleName,
        correctCount: 0,
        incorrectCount: 0,
        lastReviewed: null,
        nextReviewDate: null,
        easeFactor: 2.5,
        interval: 0,
        repetitions: 0,
      };

      const { interval, repetitions, easeFactor } = calculateNextReview(
        4, // Good recall
        existing.repetitions,
        existing.easeFactor,
        existing.interval
      );

      const nextReviewDate = addDays(new Date(), interval)
        .toISOString()
        .split("T")[0];

      return {
        ...prev,
        muscles: {
          ...prev.muscles,
          [muscleName]: {
            ...existing,
            correctCount: existing.correctCount + 1,
            lastReviewed: today,
            nextReviewDate,
            easeFactor,
            interval,
            repetitions,
          },
        },
        totalCorrect: prev.totalCorrect + 1,
      };
    });
  }, []);

  // Record an incorrect answer
  const recordIncorrect = useCallback((muscleName: string) => {
    const today = new Date().toISOString().split("T")[0];
    
    setSessionStats(prev => ({
      correct: prev.correct,
      incorrect: prev.incorrect + 1,
      musclesStudied: new Set([...prev.musclesStudied, muscleName]),
    }));

    setProgress(prev => {
      const existing = prev.muscles[muscleName] || {
        muscleName,
        correctCount: 0,
        incorrectCount: 0,
        lastReviewed: null,
        nextReviewDate: null,
        easeFactor: 2.5,
        interval: 0,
        repetitions: 0,
      };

      const { interval, repetitions, easeFactor } = calculateNextReview(
        1, // Poor recall
        existing.repetitions,
        existing.easeFactor,
        existing.interval
      );

      const nextReviewDate = addDays(new Date(), interval)
        .toISOString()
        .split("T")[0];

      return {
        ...prev,
        muscles: {
          ...prev.muscles,
          [muscleName]: {
            ...existing,
            incorrectCount: existing.incorrectCount + 1,
            lastReviewed: today,
            nextReviewDate,
            easeFactor,
            interval,
            repetitions,
          },
        },
        totalIncorrect: prev.totalIncorrect + 1,
      };
    });
  }, []);

  // Get muscles due for review
  const getMusclesDueForReview = useCallback((muscleNames: string[]): string[] => {
    const today = new Date().toISOString().split("T")[0];
    
    return muscleNames.filter(name => {
      const muscleProgress = progress.muscles[name];
      if (!muscleProgress || !muscleProgress.nextReviewDate) {
        return true; // Never studied
      }
      return muscleProgress.nextReviewDate <= today;
    });
  }, [progress.muscles]);

  // Get muscle mastery level (0-100)
  const getMusclesMastery = useCallback((muscleName: string): number => {
    const muscleProgress = progress.muscles[muscleName];
    if (!muscleProgress) return 0;
    
    const total = muscleProgress.correctCount + muscleProgress.incorrectCount;
    if (total === 0) return 0;
    
    const accuracy = muscleProgress.correctCount / total;
    const repetitionBonus = Math.min(muscleProgress.repetitions * 10, 30);
    
    return Math.min(100, Math.round(accuracy * 70 + repetitionBonus));
  }, [progress.muscles]);

  // Get overall statistics
  const getStatistics = useCallback(() => {
    const total = progress.totalCorrect + progress.totalIncorrect;
    const accuracy = total > 0 ? (progress.totalCorrect / total) * 100 : 0;
    
    const muscleStats = Object.values(progress.muscles);
    const masteredCount = muscleStats.filter(m => {
      const total = m.correctCount + m.incorrectCount;
      return total >= 5 && m.correctCount / total >= 0.8;
    }).length;
    
    const needsReviewCount = muscleStats.filter(m => {
      const today = new Date().toISOString().split("T")[0];
      return m.nextReviewDate && m.nextReviewDate <= today;
    }).length;
    
    // Calculate total study time
    const totalStudyTime = progress.sessions.reduce((acc, s) => acc + s.duration, 0);
    
    // Calculate average session duration
    const avgSessionDuration = progress.sessions.length > 0 
      ? totalStudyTime / progress.sessions.length 
      : 0;

    return {
      totalAnswered: total,
      totalCorrect: progress.totalCorrect,
      totalIncorrect: progress.totalIncorrect,
      accuracy: Math.round(accuracy * 10) / 10,
      streakDays: progress.streakDays,
      sessionsCount: progress.sessions.length,
      masteredCount,
      needsReviewCount,
      musclesStudied: Object.keys(progress.muscles).length,
      totalStudyTime,
      avgSessionDuration: Math.round(avgSessionDuration),
    };
  }, [progress]);

  // Reset all progress
  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    progress,
    isLoaded,
    recordCorrect,
    recordIncorrect,
    getMusclesDueForReview,
    getMusclesMastery,
    getStatistics,
    startSession,
    endSession,
    resetProgress,
    sessionStats: {
      correct: sessionStats.correct,
      incorrect: sessionStats.incorrect,
      musclesStudied: sessionStats.musclesStudied.size,
    },
  };
}
