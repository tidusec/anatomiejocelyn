"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Muscle } from "@/data/anatomy-data";
import { ChevronLeft, ChevronRight, RotateCcw, Shuffle } from "lucide-react";

type FlashcardField = "origin" | "insertion" | "innervation" | "function";

interface FlashcardProps {
  muscles: { muscle: Muscle; sectionTitle: string; subsectionTitle?: string }[];
  questionField: FlashcardField;
  showFields: FlashcardField[];
}

export function Flashcard({ muscles, questionField, showFields }: FlashcardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffledMuscles, setShuffledMuscles] = useState(muscles);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const currentMuscle = shuffledMuscles[currentIndex];

  const fieldLabels: Record<FlashcardField, string> = {
    origin: "Origo",
    insertion: "Insertie",
    innervation: "Innervatie",
    function: "Functie",
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % shuffledMuscles.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + shuffledMuscles.length) % shuffledMuscles.length);
  };

  const handleShuffle = () => {
    const shuffled = [...muscles].sort(() => Math.random() - 0.5);
    setShuffledMuscles(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setCorrectCount(0);
    setIncorrectCount(0);
  };

  const handleCorrect = () => {
    setCorrectCount((prev) => prev + 1);
    handleNext();
  };

  const handleIncorrect = () => {
    setIncorrectCount((prev) => prev + 1);
    handleNext();
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setCorrectCount(0);
    setIncorrectCount(0);
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

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {/* Progress and stats */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Goed: {correctCount}
          </Badge>
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Fout: {incorrectCount}
          </Badge>
        </div>
        <Badge variant="secondary">
          {currentIndex + 1} / {shuffledMuscles.length}
        </Badge>
      </div>

      {/* Flashcard */}
      <div
        className="perspective-1000 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <Card
          className={`w-full min-h-[300px] transition-all duration-500 transform-style-preserve-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front */}
          <CardContent
            className="absolute inset-0 p-6 backface-hidden flex flex-col justify-center items-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Badge className="mb-4">{currentMuscle.sectionTitle}</Badge>
            {currentMuscle.subsectionTitle && (
              <Badge variant="outline" className="mb-4">
                {currentMuscle.subsectionTitle}
              </Badge>
            )}
            <h2 className="text-2xl font-bold text-center mb-4">
              {currentMuscle.muscle.name}
            </h2>
            <p className="text-muted-foreground text-center">
              Klik om de details te zien
            </p>
          </CardContent>

          {/* Back */}
          <CardContent
            className="absolute inset-0 p-6 backface-hidden flex flex-col justify-center"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <h3 className="text-xl font-bold text-center mb-4">
              {currentMuscle.muscle.name}
            </h3>
            <div className="space-y-3">
              {showFields.includes("origin") && currentMuscle.muscle.origin && (
                <div>
                  <span className="font-semibold text-primary">Origo:</span>{" "}
                  <span>{currentMuscle.muscle.origin}</span>
                </div>
              )}
              {showFields.includes("insertion") && currentMuscle.muscle.insertion && (
                <div>
                  <span className="font-semibold text-primary">Insertie:</span>{" "}
                  <span>{currentMuscle.muscle.insertion}</span>
                </div>
              )}
              {showFields.includes("innervation") && currentMuscle.muscle.innervation && (
                <div>
                  <span className="font-semibold text-primary">Innervatie:</span>{" "}
                  <span>{currentMuscle.muscle.innervation}</span>
                </div>
              )}
              {showFields.includes("function") && currentMuscle.muscle.function && (
                <div>
                  <span className="font-semibold text-primary">Functie:</span>{" "}
                  <span>{currentMuscle.muscle.function}</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Self-assessment buttons (only show when flipped) */}
      {isFlipped && (
        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            className="bg-red-50 hover:bg-red-100 text-red-700 border-red-200"
            onClick={handleIncorrect}
          >
            Ik wist het niet
          </Button>
          <Button
            variant="outline"
            className="bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
            onClick={handleCorrect}
          >
            Ik wist het!
          </Button>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button variant="outline" onClick={handlePrev}>
          <ChevronLeft className="h-4 w-4 mr-1" />
          Vorige
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleReset}>
            <RotateCcw className="h-4 w-4 mr-1" />
            Reset
          </Button>
          <Button variant="outline" onClick={handleShuffle}>
            <Shuffle className="h-4 w-4 mr-1" />
            Shuffle
          </Button>
        </div>
        <Button variant="outline" onClick={handleNext}>
          Volgende
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}
