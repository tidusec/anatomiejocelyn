"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Muscle } from "@/data/anatomy-data";
import { useStudyProgress } from "@/hooks/use-study-progress";
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Shuffle,
  Lightbulb,
  Eye,
  EyeOff,
  Keyboard,
  Star,
  Clock,
} from "lucide-react";

type FlashcardField = "origin" | "insertion" | "innervation" | "function";

interface FlashcardProps {
  muscles: { muscle: Muscle; sectionTitle: string; subsectionTitle?: string }[];
  questionField: FlashcardField;
  showFields: FlashcardField[];
}

const fieldLabels: Record<FlashcardField, string> = {
  origin: "Origo",
  insertion: "Insertie",
  innervation: "Innervatie",
  function: "Functie",
};

const fieldColors: Record<FlashcardField, string> = {
  origin: "text-blue-600",
  insertion: "text-green-600",
  innervation: "text-purple-600",
  function: "text-orange-600",
};

export function Flashcard({ muscles, questionField, showFields }: FlashcardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffledMuscles, setShuffledMuscles] = useState(muscles);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [revealedFields, setRevealedFields] = useState<Set<FlashcardField>>(new Set());
  const [studyMode, setStudyMode] = useState<"all" | "due">("all");
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);

  const {
    recordCorrect,
    recordIncorrect,
    getMusclesMastery,
    getMusclesDueForReview,
    startSession,
    endSession,
  } = useStudyProgress();

  const currentMuscle = shuffledMuscles[currentIndex];
  const muscleNames = muscles.map((m) => m.muscle.name);
  const dueForReview = getMusclesDueForReview(muscleNames);

  // Start session on mount
  useEffect(() => {
    startSession();
    return () => {
      endSession();
    };
  }, [startSession, endSession]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ignore if typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key.toLowerCase()) {
        case " ":
        case "enter":
          e.preventDefault();
          setIsFlipped(!isFlipped);
          break;
        case "arrowleft":
        case "a":
          e.preventDefault();
          handlePrev();
          break;
        case "arrowright":
        case "d":
          e.preventDefault();
          handleNext();
          break;
        case "arrowup":
        case "w":
          if (isFlipped) {
            e.preventDefault();
            handleCorrect();
          }
          break;
        case "arrowdown":
        case "s":
          if (isFlipped) {
            e.preventDefault();
            handleIncorrect();
          }
          break;
        case "h":
          e.preventDefault();
          setShowHint(!showHint);
          break;
        case "r":
          if (e.ctrlKey || e.metaKey) return;
          e.preventDefault();
          handleShuffle();
          break;
        case "?":
          e.preventDefault();
          setShowKeyboardHelp(!showKeyboardHelp);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isFlipped, showHint, showKeyboardHelp]);

  const handleNext = useCallback(() => {
    setIsFlipped(false);
    setShowHint(false);
    setRevealedFields(new Set());
    setCurrentIndex((prev) => (prev + 1) % shuffledMuscles.length);
  }, [shuffledMuscles.length]);

  const handlePrev = useCallback(() => {
    setIsFlipped(false);
    setShowHint(false);
    setRevealedFields(new Set());
    setCurrentIndex((prev) => (prev - 1 + shuffledMuscles.length) % shuffledMuscles.length);
  }, [shuffledMuscles.length]);

  const handleShuffle = useCallback(() => {
    const toShuffle = studyMode === "due"
      ? muscles.filter((m) => dueForReview.includes(m.muscle.name))
      : muscles;
    
    if (toShuffle.length === 0) {
      setShuffledMuscles(muscles);
    } else {
      const shuffled = [...toShuffle].sort(() => Math.random() - 0.5);
      setShuffledMuscles(shuffled);
    }
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowHint(false);
    setRevealedFields(new Set());
    setCorrectCount(0);
    setIncorrectCount(0);
  }, [muscles, dueForReview, studyMode]);

  const handleCorrect = useCallback(() => {
    if (currentMuscle) {
      recordCorrect(currentMuscle.muscle.name);
      setCorrectCount((prev) => prev + 1);
    }
    handleNext();
  }, [currentMuscle, recordCorrect, handleNext]);

  const handleIncorrect = useCallback(() => {
    if (currentMuscle) {
      recordIncorrect(currentMuscle.muscle.name);
      setIncorrectCount((prev) => prev + 1);
    }
    handleNext();
  }, [currentMuscle, recordIncorrect, handleNext]);

  const handleReset = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setCorrectCount(0);
    setIncorrectCount(0);
    setShowHint(false);
    setRevealedFields(new Set());
  };

  const toggleFieldReveal = (field: FlashcardField) => {
    const newSet = new Set(revealedFields);
    if (newSet.has(field)) {
      newSet.delete(field);
    } else {
      newSet.add(field);
    }
    setRevealedFields(newSet);
  };

  const generateHint = (value: string): string => {
    if (!value || value.length === 0) return "";
    const words = value.split(" ");
    if (words.length > 1) {
      return words.map((w) => w.charAt(0) + "...").join(" ");
    }
    return value.charAt(0) + "..." + value.charAt(value.length - 1);
  };

  if (muscles.length === 0) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <p className="text-muted-foreground">
            Selecteer ten minste één sectie om te oefenen.
          </p>
        </CardContent>
      </Card>
    );
  }

  if (!currentMuscle) {
    return null;
  }

  const mastery = getMusclesMastery(currentMuscle.muscle.name);
  const progressPercentage = ((currentIndex + 1) / shuffledMuscles.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {/* Keyboard help modal */}
      {showKeyboardHelp && (
        <Card className="border-primary">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold flex items-center gap-2">
                <Keyboard className="h-4 w-4" />
                Sneltoetsen
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowKeyboardHelp(false)}
              >
                ✕
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><kbd className="px-2 py-1 bg-muted rounded">Spatie</kbd> Kaart omdraaien</div>
              <div><kbd className="px-2 py-1 bg-muted rounded">←</kbd> of <kbd className="px-2 py-1 bg-muted rounded">A</kbd> Vorige</div>
              <div><kbd className="px-2 py-1 bg-muted rounded">→</kbd> of <kbd className="px-2 py-1 bg-muted rounded">D</kbd> Volgende</div>
              <div><kbd className="px-2 py-1 bg-muted rounded">↑</kbd> of <kbd className="px-2 py-1 bg-muted rounded">W</kbd> Goed</div>
              <div><kbd className="px-2 py-1 bg-muted rounded">↓</kbd> of <kbd className="px-2 py-1 bg-muted rounded">S</kbd> Fout</div>
              <div><kbd className="px-2 py-1 bg-muted rounded">H</kbd> Hint tonen</div>
              <div><kbd className="px-2 py-1 bg-muted rounded">R</kbd> Shuffle</div>
              <div><kbd className="px-2 py-1 bg-muted rounded">?</kbd> Deze help</div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Top bar with stats and mode toggle */}
      <div className="flex flex-wrap justify-between items-center gap-2">
        <div className="flex gap-2">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            ✓ {correctCount}
          </Badge>
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            ✗ {incorrectCount}
          </Badge>
          {mastery > 0 && (
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              <Star className="h-3 w-3 mr-1" />
              {mastery}% beheerst
            </Badge>
          )}
        </div>
        <div className="flex gap-2">
          {dueForReview.length > 0 && (
            <Button
              variant={studyMode === "due" ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setStudyMode(studyMode === "due" ? "all" : "due");
                handleShuffle();
              }}
            >
              <Clock className="h-3 w-3 mr-1" />
              Herhalen ({dueForReview.length})
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowKeyboardHelp(!showKeyboardHelp)}
          >
            <Keyboard className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Voortgang</span>
          <span>{currentIndex + 1} / {shuffledMuscles.length}</span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>

      {/* Flashcard */}
      <div
        className="perspective-1000 cursor-pointer select-none"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <Card
          className={`w-full min-h-[350px] transition-all duration-500 ${
            isFlipped ? "bg-gradient-to-br from-primary/5 to-primary/10" : ""
          }`}
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front */}
          <CardContent
            className="absolute inset-0 p-6 flex flex-col justify-center items-center"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(0deg)",
            }}
          >
            <div className="flex gap-2 mb-4 flex-wrap justify-center">
              <Badge>{currentMuscle.sectionTitle}</Badge>
              {currentMuscle.subsectionTitle && (
                <Badge variant="outline">{currentMuscle.subsectionTitle}</Badge>
              )}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-primary">
              {currentMuscle.muscle.name}
            </h2>
            
            {/* Hint section */}
            {showHint && (
              <div className="w-full mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800 font-medium mb-2 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Hints:
                </p>
                <div className="space-y-1 text-sm text-yellow-700">
                  {showFields.map((field) => (
                    <p key={field}>
                      <span className="font-medium">{fieldLabels[field]}:</span>{" "}
                      {generateHint(currentMuscle.muscle[field] || "")}
                    </p>
                  ))}
                </div>
              </div>
            )}

            <p className="text-muted-foreground text-center mt-4">
              Klik of druk op spatie om om te draaien
            </p>
          </CardContent>

          {/* Back */}
          <CardContent
            className="absolute inset-0 p-6 flex flex-col justify-center overflow-auto"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <h3 className="text-xl font-bold text-center mb-6 text-primary">
              {currentMuscle.muscle.name}
            </h3>
            <div className="space-y-4">
              {showFields.map((field) => {
                const value = currentMuscle.muscle[field];
                if (!value) return null;
                
                const isRevealed = revealedFields.has(field);
                
                return (
                  <div
                    key={field}
                    className="p-3 bg-muted/50 rounded-lg border"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-semibold ${fieldColors[field]}`}>
                        {fieldLabels[field]}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFieldReveal(field);
                        }}
                      >
                        {isRevealed ? (
                          <Eye className="h-4 w-4" />
                        ) : (
                          <EyeOff className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <p className={isRevealed ? "blur-none" : "blur-sm"}>
                      {value}
                    </p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Self-assessment buttons (only show when flipped) */}
      {isFlipped && (
        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            className="bg-red-50 hover:bg-red-100 text-red-700 border-red-200 flex-1 max-w-[200px]"
            onClick={(e) => {
              e.stopPropagation();
              handleIncorrect();
            }}
          >
            Ik wist het niet (↓)
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-green-50 hover:bg-green-100 text-green-700 border-green-200 flex-1 max-w-[200px]"
            onClick={(e) => {
              e.stopPropagation();
              handleCorrect();
            }}
          >
            Ik wist het! (↑)
          </Button>
        </div>
      )}

      {/* Control buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        <Button variant="outline" onClick={handlePrev}>
          <ChevronLeft className="h-4 w-4 mr-1" />
          Vorige
        </Button>
        <Button
          variant="outline"
          onClick={() => setShowHint(!showHint)}
          className={showHint ? "bg-yellow-50" : ""}
        >
          <Lightbulb className="h-4 w-4 mr-1" />
          {showHint ? "Verberg Hint" : "Hint"}
        </Button>
        <Button variant="outline" onClick={handleReset}>
          <RotateCcw className="h-4 w-4 mr-1" />
          Reset
        </Button>
        <Button variant="outline" onClick={handleShuffle}>
          <Shuffle className="h-4 w-4 mr-1" />
          Shuffle
        </Button>
        <Button variant="outline" onClick={handleNext}>
          Volgende
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}
