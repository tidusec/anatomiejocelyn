"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Target,
  Flame,
  Clock,
  BookOpen,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
} from "lucide-react";
import { useStudyProgress, MuscleProgress } from "@/hooks/use-study-progress";
import { Muscle } from "@/data/anatomy-data";

interface StatisticsDashboardProps {
  allMuscles: { muscle: Muscle; sectionTitle: string; subsectionTitle?: string }[];
}

function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}u ${minutes}m`;
}

function getMasteryColor(mastery: number): string {
  if (mastery >= 80) return "text-green-600 bg-green-50 border-green-200";
  if (mastery >= 60) return "text-blue-600 bg-blue-50 border-blue-200";
  if (mastery >= 40) return "text-yellow-600 bg-yellow-50 border-yellow-200";
  if (mastery >= 20) return "text-orange-600 bg-orange-50 border-orange-200";
  return "text-red-600 bg-red-50 border-red-200";
}

function getMasteryLabel(mastery: number): string {
  if (mastery >= 80) return "Beheerst";
  if (mastery >= 60) return "Goed";
  if (mastery >= 40) return "Gemiddeld";
  if (mastery >= 20) return "Beginnend";
  return "Nieuw";
}

export function StatisticsDashboard({ allMuscles }: StatisticsDashboardProps) {
  const {
    progress,
    isLoaded,
    getStatistics,
    getMusclesMastery,
    getMusclesDueForReview,
    resetProgress,
  } = useStudyProgress();

  if (!isLoaded) {
    return (
      <div className="w-full max-w-4xl mx-auto p-4">
        <p className="text-center text-muted-foreground">Laden...</p>
      </div>
    );
  }

  const stats = getStatistics();
  const muscleNames = allMuscles.map((m) => m.muscle.name);
  const dueForReview = getMusclesDueForReview(muscleNames);

  // Calculate mastery distribution
  const masteryDistribution = {
    mastered: 0,
    good: 0,
    average: 0,
    beginning: 0,
    new: 0,
  };

  muscleNames.forEach((name) => {
    const mastery = getMusclesMastery(name);
    if (mastery >= 80) masteryDistribution.mastered++;
    else if (mastery >= 60) masteryDistribution.good++;
    else if (mastery >= 40) masteryDistribution.average++;
    else if (mastery >= 20) masteryDistribution.beginning++;
    else masteryDistribution.new++;
  });

  // Get muscles sorted by need for review
  const musclesByPriority = muscleNames
    .map((name) => ({
      name,
      mastery: getMusclesMastery(name),
      progress: progress.muscles[name],
    }))
    .sort((a, b) => a.mastery - b.mastery)
    .slice(0, 10);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 flex flex-col items-center">
            <div className="flex items-center gap-2 text-orange-500 mb-2">
              <Flame className="h-5 w-5" />
              <span className="text-2xl font-bold">{stats.streakDays}</span>
            </div>
            <p className="text-xs text-muted-foreground text-center">Dagen streak</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex flex-col items-center">
            <div className="flex items-center gap-2 text-green-500 mb-2">
              <Target className="h-5 w-5" />
              <span className="text-2xl font-bold">{stats.accuracy}%</span>
            </div>
            <p className="text-xs text-muted-foreground text-center">Nauwkeurigheid</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex flex-col items-center">
            <div className="flex items-center gap-2 text-blue-500 mb-2">
              <Trophy className="h-5 w-5" />
              <span className="text-2xl font-bold">{stats.masteredCount}</span>
            </div>
            <p className="text-xs text-muted-foreground text-center">Beheerst</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex flex-col items-center">
            <div className="flex items-center gap-2 text-purple-500 mb-2">
              <Clock className="h-5 w-5" />
              <span className="text-2xl font-bold">{formatDuration(stats.totalStudyTime)}</span>
            </div>
            <p className="text-xs text-muted-foreground text-center">Studietijd</p>
          </CardContent>
        </Card>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="h-5 w-5" />
            Voortgang Overzicht
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Spieren bestudeerd</p>
              <p className="text-xl font-semibold">
                {stats.musclesStudied} / {muscleNames.length}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Totaal beantwoord</p>
              <p className="text-xl font-semibold">{stats.totalAnswered}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Sessies</p>
              <p className="text-xl font-semibold">{stats.sessionsCount}</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Algehele voortgang</span>
              <span>
                {Math.round((stats.musclesStudied / muscleNames.length) * 100)}%
              </span>
            </div>
            <Progress
              value={(stats.musclesStudied / muscleNames.length) * 100}
              className="h-3"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span className="text-sm">{stats.totalCorrect} goed</span>
            </div>
            <div className="flex items-center gap-1">
              <XCircle className="h-4 w-4 text-red-500" />
              <span className="text-sm">{stats.totalIncorrect} fout</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mastery Distribution */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <BookOpen className="h-5 w-5" />
            Beheersing Verdeling
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Badge className="bg-green-100 text-green-700 border-green-200 w-24 justify-center">
                Beheerst
              </Badge>
              <Progress
                value={(masteryDistribution.mastered / muscleNames.length) * 100}
                className="h-3 flex-1"
              />
              <span className="text-sm w-8 text-right">{masteryDistribution.mastered}</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-100 text-blue-700 border-blue-200 w-24 justify-center">
                Goed
              </Badge>
              <Progress
                value={(masteryDistribution.good / muscleNames.length) * 100}
                className="h-3 flex-1"
              />
              <span className="text-sm w-8 text-right">{masteryDistribution.good}</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200 w-24 justify-center">
                Gemiddeld
              </Badge>
              <Progress
                value={(masteryDistribution.average / muscleNames.length) * 100}
                className="h-3 flex-1"
              />
              <span className="text-sm w-8 text-right">{masteryDistribution.average}</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-orange-100 text-orange-700 border-orange-200 w-24 justify-center">
                Beginnend
              </Badge>
              <Progress
                value={(masteryDistribution.beginning / muscleNames.length) * 100}
                className="h-3 flex-1"
              />
              <span className="text-sm w-8 text-right">{masteryDistribution.beginning}</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-gray-100 text-gray-700 border-gray-200 w-24 justify-center">
                Nieuw
              </Badge>
              <Progress
                value={(masteryDistribution.new / muscleNames.length) * 100}
                className="h-3 flex-1"
              />
              <span className="text-sm w-8 text-right">{masteryDistribution.new}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Muscles needing attention */}
      {musclesByPriority.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <AlertCircle className="h-5 w-5 text-orange-500" />
              Focus Nodig
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {musclesByPriority.map(({ name, mastery, progress: muscleProgress }) => (
                <div
                  key={name}
                  className="flex items-center justify-between p-2 rounded-md border bg-card"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{name}</p>
                    {muscleProgress && (
                      <p className="text-xs text-muted-foreground">
                        {muscleProgress.correctCount} goed, {muscleProgress.incorrectCount} fout
                      </p>
                    )}
                  </div>
                  <Badge
                    variant="outline"
                    className={`ml-2 ${getMasteryColor(mastery)}`}
                  >
                    {getMasteryLabel(mastery)}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Due for review */}
      {dueForReview.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="h-5 w-5 text-blue-500" />
              Te Herhalen ({dueForReview.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {dueForReview.slice(0, 15).map((name) => (
                <Badge key={name} variant="outline" className="text-xs">
                  {name}
                </Badge>
              ))}
              {dueForReview.length > 15 && (
                <Badge variant="secondary" className="text-xs">
                  +{dueForReview.length - 15} meer
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Reset button */}
      <div className="flex justify-center">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            if (confirm("Weet je zeker dat je alle voortgang wilt resetten?")) {
              resetProgress();
            }
          }}
          className="text-red-600 hover:text-red-700"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset Voortgang
        </Button>
      </div>
    </div>
  );
}
