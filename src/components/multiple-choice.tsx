"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Muscle } from "@/data/anatomy-data";
import { useStudyProgress } from "@/hooks/use-study-progress";
import { CheckCircle, XCircle, RotateCcw, ArrowRight, Keyboard, Clock, Zap } from "lucide-react";

type QuestionType = 
  | "origin" 
  | "insertion" 
  | "innervation" 
  | "function" 
  | "name" 
  | "origin_reverse" 
  | "insertion_reverse" 
  | "innervation_reverse" 
  | "function_reverse"
  | "true_false"
  | "match_property"
  | "origo_or_insertio"
  | "which_muscle_origo_insertio";

interface MultipleChoiceProps {
  muscles: { muscle: Muscle; sectionTitle: string; subsectionTitle?: string }[];
  questionTypes: QuestionType[];
}

interface Question {
  muscle: Muscle;
  questionType: QuestionType;
  questionText: string;
  correctAnswer: string;
  options: string[];
  extraInfo?: string;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Helper functie om anatomische termen te extraheren voor slimme foute antwoorden
function extractAnatomicalTerms(text: string): string[] {
  const terms: string[] = [];
  // Extract common anatomical prefixes/patterns
  const patterns = [
    /proc\.\s*\w+/gi,
    /linea\s*\w+/gi,
    /tuberculum\s*\w+/gi,
    /crista\s*\w+/gi,
    /fossa\s*\w+/gi,
    /os\s*\w+/gi,
    /lig\.\s*\w+/gi,
    /m\.\s*\w+/gi,
    /[A-Z]\d+-[A-Z]?\d+/g, // vertebrae patterns like C6-T2
    /rib\s*\d+(-\d+)?/gi,
    /costae?\s*\d+(-\d+)?/gi,
  ];
  
  for (const pattern of patterns) {
    const matches = text.match(pattern);
    if (matches) terms.push(...matches);
  }
  
  return terms;
}

// Genereer plausibele foute antwoorden gebaseerd op het juiste antwoord
function generateSmartWrongAnswers(
  correctAnswer: string,
  allMuscles: Muscle[],
  property: keyof Muscle,
  count: number = 3
): string[] {
  const wrongAnswers: string[] = [];
  const correctTerms = extractAnatomicalTerms(correctAnswer);
  
  // 1. Probeer eerst vergelijkbare antwoorden te vinden (met overlappende anatomische termen)
  const similarAnswers = allMuscles
    .filter(m => m[property] && m[property] !== correctAnswer && m[property].length > 0)
    .map(m => ({ answer: m[property], score: 0 }))
    .map(item => {
      const itemTerms = extractAnatomicalTerms(item.answer);
      // Score based on shared terms
      for (const term of correctTerms) {
        if (item.answer.toLowerCase().includes(term.toLowerCase())) {
          item.score += 2;
        }
      }
      // Also score based on similar length
      const lengthDiff = Math.abs(item.answer.length - correctAnswer.length);
      if (lengthDiff < 20) item.score += 1;
      return item;
    })
    .sort((a, b) => b.score - a.score);
  
  // Get a mix of similar and random wrong answers
  const highScoreAnswers = similarAnswers.filter(a => a.score > 0).slice(0, 2);
  const randomAnswers = shuffleArray(similarAnswers.filter(a => a.score === 0));
  
  for (const item of highScoreAnswers) {
    if (wrongAnswers.length < count && !wrongAnswers.includes(item.answer)) {
      wrongAnswers.push(item.answer);
    }
  }
  
  for (const item of randomAnswers) {
    if (wrongAnswers.length < count && !wrongAnswers.includes(item.answer)) {
      wrongAnswers.push(item.answer);
    }
  }
  
  return wrongAnswers.slice(0, count);
}

// Genereer een verwisselde versie (origo ↔ insertio) voor extra moeilijkheid
function generateConfusingOrigoInsertioOptions(
  targetMuscle: Muscle,
  allMuscles: Muscle[],
  isOrigo: boolean
): string[] {
  const wrongAnswers: string[] = [];
  
  // 1. Voeg de eigen insertio/origo toe (meest voorkomende fout!)
  if (isOrigo && targetMuscle.insertion && targetMuscle.insertion.length > 0) {
    wrongAnswers.push(targetMuscle.insertion);
  } else if (!isOrigo && targetMuscle.origin && targetMuscle.origin.length > 0) {
    wrongAnswers.push(targetMuscle.origin);
  }
  
  // 2. Voeg vergelijkbare origo's/insertio's van andere spieren toe
  const property = isOrigo ? "origin" : "insertion";
  const correctAnswer = isOrigo ? targetMuscle.origin : targetMuscle.insertion;
  const smartWrong = generateSmartWrongAnswers(correctAnswer, allMuscles, property, 3);
  
  for (const answer of smartWrong) {
    if (wrongAnswers.length < 3 && !wrongAnswers.includes(answer) && answer !== correctAnswer) {
      wrongAnswers.push(answer);
    }
  }
  
  return wrongAnswers.slice(0, 3);
}

function generateQuestion(
  targetMuscle: Muscle,
  allMuscles: Muscle[],
  questionType: QuestionType
): Question | null {
  const fieldMap: Record<string, { question: string; answerKey: keyof Muscle }> = {
    origin: { question: `Wat is de origo van ${targetMuscle.name}?`, answerKey: "origin" },
    insertion: { question: `Wat is de insertie van ${targetMuscle.name}?`, answerKey: "insertion" },
    innervation: { question: `Wat is de innervatie van ${targetMuscle.name}?`, answerKey: "innervation" },
    function: { question: `Wat is de functie van ${targetMuscle.name}?`, answerKey: "function" },
    name: { question: "", answerKey: "name" },
  };

  const propLabels: Record<string, string> = {
    origin: "origo",
    insertion: "insertie",
    innervation: "innervatie",
    function: "functie",
  };

  // Reverse questions: given a property value, find the muscle
  if (questionType === "origin_reverse") {
    if (!targetMuscle.origin || targetMuscle.origin.length === 0) return null;
    const correctAnswer = targetMuscle.name;
    const otherMuscles = allMuscles.filter(m => m.name !== correctAnswer);
    const wrongAnswers = shuffleArray(otherMuscles).slice(0, 3).map(m => m.name);
    return {
      muscle: targetMuscle,
      questionType,
      questionText: `Welke spier heeft als origo: "${targetMuscle.origin}"?`,
      correctAnswer,
      options: shuffleArray([correctAnswer, ...wrongAnswers]),
    };
  }

  if (questionType === "insertion_reverse") {
    if (!targetMuscle.insertion || targetMuscle.insertion.length === 0) return null;
    const correctAnswer = targetMuscle.name;
    const otherMuscles = allMuscles.filter(m => m.name !== correctAnswer);
    const wrongAnswers = shuffleArray(otherMuscles).slice(0, 3).map(m => m.name);
    return {
      muscle: targetMuscle,
      questionType,
      questionText: `Welke spier heeft als insertie: "${targetMuscle.insertion}"?`,
      correctAnswer,
      options: shuffleArray([correctAnswer, ...wrongAnswers]),
    };
  }

  if (questionType === "innervation_reverse") {
    if (!targetMuscle.innervation || targetMuscle.innervation.length === 0) return null;
    const correctAnswer = targetMuscle.name;
    const otherMuscles = allMuscles.filter(m => m.name !== correctAnswer);
    const wrongAnswers = shuffleArray(otherMuscles).slice(0, 3).map(m => m.name);
    return {
      muscle: targetMuscle,
      questionType,
      questionText: `Welke spier wordt geïnnerveerd door: "${targetMuscle.innervation}"?`,
      correctAnswer,
      options: shuffleArray([correctAnswer, ...wrongAnswers]),
    };
  }

  if (questionType === "function_reverse") {
    if (!targetMuscle.function || targetMuscle.function.length === 0) return null;
    const correctAnswer = targetMuscle.name;
    const otherMuscles = allMuscles.filter(m => m.name !== correctAnswer);
    const wrongAnswers = shuffleArray(otherMuscles).slice(0, 3).map(m => m.name);
    return {
      muscle: targetMuscle,
      questionType,
      questionText: `Welke spier heeft de volgende functie: "${targetMuscle.function}"?`,
      correctAnswer,
      options: shuffleArray([correctAnswer, ...wrongAnswers]),
    };
  }

  // True/False questions
  if (questionType === "true_false") {
    const properties: (keyof Muscle)[] = ["origin", "insertion", "innervation", "function"];
    const validProps = properties.filter(p => targetMuscle[p] && targetMuscle[p].length > 0);
    if (validProps.length === 0) return null;

    const randomProp = validProps[Math.floor(Math.random() * validProps.length)];
    const isTrue = Math.random() > 0.5;

    if (isTrue) {
      return {
        muscle: targetMuscle,
        questionType,
        questionText: `Is de ${propLabels[randomProp]} van ${targetMuscle.name}: "${targetMuscle[randomProp]}"?`,
        correctAnswer: "Waar",
        options: ["Waar", "Niet waar"],
      };
    } else {
      // Get a wrong value from another muscle
      const otherMuscles = allMuscles.filter(
        m => m[randomProp] && m[randomProp] !== targetMuscle[randomProp] && m[randomProp].length > 0
      );
      if (otherMuscles.length === 0) return null;
      const wrongValue = otherMuscles[Math.floor(Math.random() * otherMuscles.length)][randomProp];
      return {
        muscle: targetMuscle,
        questionType,
        questionText: `Is de ${propLabels[randomProp]} van ${targetMuscle.name}: "${wrongValue}"?`,
        correctAnswer: "Niet waar",
        options: ["Waar", "Niet waar"],
        extraInfo: `Het juiste antwoord is: ${targetMuscle[randomProp]}`,
      };
    }
  }

  // Match property questions: which property is correct for this muscle?
  if (questionType === "match_property") {
    const properties: (keyof Muscle)[] = ["origin", "insertion", "innervation", "function"];
    const validProps = properties.filter(p => targetMuscle[p] && targetMuscle[p].length > 0);
    if (validProps.length === 0) return null;

    const randomProp = validProps[Math.floor(Math.random() * validProps.length)];
    const correctAnswer = targetMuscle[randomProp];

    // Get wrong values from other muscles for the same property
    const otherMuscles = allMuscles.filter(
      m => m[randomProp] && m[randomProp] !== correctAnswer && m[randomProp].length > 0
    );
    if (otherMuscles.length < 3) return null;

    const wrongAnswers = shuffleArray(otherMuscles).slice(0, 3).map(m => m[randomProp]);

    const questionVariants = [
      `Welke ${propLabels[randomProp]} hoort bij ${targetMuscle.name}?`,
      `Kies de juiste ${propLabels[randomProp]} voor ${targetMuscle.name}:`,
      `${targetMuscle.name} heeft welke ${propLabels[randomProp]}?`,
    ];

    return {
      muscle: targetMuscle,
      questionType,
      questionText: questionVariants[Math.floor(Math.random() * questionVariants.length)],
      correctAnswer,
      options: shuffleArray([correctAnswer, ...wrongAnswers]),
    };
  }

  // NEW: Origo of Insertio vraag - "Is dit de origo of insertio van spier X?"
  if (questionType === "origo_or_insertio") {
    if (!targetMuscle.origin || !targetMuscle.insertion || 
        targetMuscle.origin.length === 0 || targetMuscle.insertion.length === 0) return null;
    
    const isOrigo = Math.random() > 0.5;
    const shownValue = isOrigo ? targetMuscle.origin : targetMuscle.insertion;
    const correctAnswer = isOrigo ? "Origo" : "Insertie";
    
    const questionVariants = [
      `"${shownValue}" is de ... van ${targetMuscle.name}?`,
      `Bij ${targetMuscle.name}: is "${shownValue}" de origo of de insertie?`,
      `Wat beschrijft "${shownValue}" voor ${targetMuscle.name}?`,
    ];
    
    return {
      muscle: targetMuscle,
      questionType,
      questionText: questionVariants[Math.floor(Math.random() * questionVariants.length)],
      correctAnswer,
      options: ["Origo", "Insertie"],
      extraInfo: isOrigo 
        ? `De insertie van ${targetMuscle.name} is: ${targetMuscle.insertion}`
        : `De origo van ${targetMuscle.name} is: ${targetMuscle.origin}`,
    };
  }

  // NEW: Welke spier heeft deze origo/insertio - met slimme foute antwoorden
  if (questionType === "which_muscle_origo_insertio") {
    const hasOrigo = targetMuscle.origin && targetMuscle.origin.length > 0;
    const hasInsertio = targetMuscle.insertion && targetMuscle.insertion.length > 0;
    if (!hasOrigo && !hasInsertio) return null;
    
    // Kies random origo of insertio
    let isOrigo = Math.random() > 0.5;
    if (!hasOrigo) isOrigo = false;
    if (!hasInsertio) isOrigo = true;
    
    const property = isOrigo ? "origin" : "insertion";
    const propertyLabel = isOrigo ? "origo" : "insertie";
    const shownValue = isOrigo ? targetMuscle.origin : targetMuscle.insertion;
    const correctAnswer = targetMuscle.name;
    
    // Gebruik slimme foute antwoorden - spieren met vergelijkbare origo/insertio
    const confusingMuscles = allMuscles
      .filter(m => m.name !== correctAnswer && m[property] && m[property].length > 0)
      .map(m => {
        const terms = extractAnatomicalTerms(shownValue);
        let score = 0;
        for (const term of terms) {
          if (m[property].toLowerCase().includes(term.toLowerCase())) {
            score += 2;
          }
          // Extra score als ze dezelfde structuur bevatten
          if (m.origin?.toLowerCase().includes(term.toLowerCase()) ||
              m.insertion?.toLowerCase().includes(term.toLowerCase())) {
            score += 1;
          }
        }
        return { muscle: m, score };
      })
      .sort((a, b) => b.score - a.score);
    
    // Mix van vergelijkbare en willekeurige spieren
    const wrongAnswers: string[] = [];
    for (const item of confusingMuscles.slice(0, 2)) {
      if (wrongAnswers.length < 3) wrongAnswers.push(item.muscle.name);
    }
    const randomOthers = shuffleArray(confusingMuscles.slice(2));
    for (const item of randomOthers) {
      if (wrongAnswers.length < 3) wrongAnswers.push(item.muscle.name);
    }
    
    if (wrongAnswers.length < 3) return null;
    
    const questionVariants = [
      `Welke spier heeft als ${propertyLabel}: "${shownValue}"?`,
      `De ${propertyLabel} "${shownValue}" hoort bij welke spier?`,
      `Identificeer de spier met deze ${propertyLabel}: "${shownValue}"`,
    ];
    
    return {
      muscle: targetMuscle,
      questionType,
      questionText: questionVariants[Math.floor(Math.random() * questionVariants.length)],
      correctAnswer,
      options: shuffleArray([correctAnswer, ...wrongAnswers]),
    };
  }

  if (questionType === "name") {
    // For name questions, we show a property and ask for the muscle name
    const properties: (keyof Muscle)[] = ["origin", "insertion", "innervation", "function"];
    const validProps = properties.filter(p => targetMuscle[p] && targetMuscle[p].length > 0);
    if (validProps.length === 0) return null;
    
    const randomProp = validProps[Math.floor(Math.random() * validProps.length)];
    
    const correctAnswer = targetMuscle.name;
    const otherMuscles = allMuscles.filter(m => m.name !== correctAnswer);
    const wrongAnswers = shuffleArray(otherMuscles)
      .slice(0, 3)
      .map(m => m.name);

    const questionVariants = [
      `Welke spier heeft de volgende ${propLabels[randomProp]}: "${targetMuscle[randomProp]}"?`,
      `Deze ${propLabels[randomProp]} hoort bij welke spier: "${targetMuscle[randomProp]}"?`,
      `Identificeer de spier met ${propLabels[randomProp]}: "${targetMuscle[randomProp]}"`,
    ];
    
    return {
      muscle: targetMuscle,
      questionType,
      questionText: questionVariants[Math.floor(Math.random() * questionVariants.length)],
      correctAnswer,
      options: shuffleArray([correctAnswer, ...wrongAnswers]),
    };
  }

  const config = fieldMap[questionType];
  if (!config) return null;
  
  const correctAnswer = targetMuscle[config.answerKey];
  
  if (!correctAnswer || correctAnswer.length === 0) return null;

  // Use smart wrong answers for origin and insertion questions
  let wrongAnswers: string[];
  if (questionType === "origin" || questionType === "insertion") {
    // Voor origo/insertio vragen: gebruik slimme foute antwoorden
    wrongAnswers = generateConfusingOrigoInsertioOptions(
      targetMuscle,
      allMuscles,
      questionType === "origin"
    );
    
    // Als we niet genoeg slimme antwoorden hebben, vul aan met willekeurige
    if (wrongAnswers.length < 3) {
      const otherMuscles = allMuscles.filter(
        m => m[config.answerKey] && 
             m[config.answerKey] !== correctAnswer && 
             !wrongAnswers.includes(m[config.answerKey]) &&
             m[config.answerKey].length > 0
      );
      const additional = shuffleArray(otherMuscles)
        .slice(0, 3 - wrongAnswers.length)
        .map(m => m[config.answerKey]);
      wrongAnswers.push(...additional);
    }
  } else {
    // Voor andere vragen: standaard methode
    const otherMuscles = allMuscles.filter(
      m => m[config.answerKey] && m[config.answerKey] !== correctAnswer && m[config.answerKey].length > 0
    );
    
    if (otherMuscles.length < 3) return null;

    wrongAnswers = shuffleArray(otherMuscles)
      .slice(0, 3)
      .map(m => m[config.answerKey]);
  }
  
  if (wrongAnswers.length < 3) return null;

  // Add question variants for standard questions
  const questionVariants: Record<string, string[]> = {
    origin: [
      `Wat is de origo van ${targetMuscle.name}?`,
      `Waar vindt ${targetMuscle.name} zijn oorsprong?`,
      `De origo van ${targetMuscle.name} is:`,
    ],
    insertion: [
      `Wat is de insertie van ${targetMuscle.name}?`,
      `Waar insereert ${targetMuscle.name}?`,
      `De insertie van ${targetMuscle.name} is:`,
    ],
    innervation: [
      `Wat is de innervatie van ${targetMuscle.name}?`,
      `Door welke zenuw wordt ${targetMuscle.name} geïnnerveerd?`,
      `De innervatie van ${targetMuscle.name} is:`,
    ],
    function: [
      `Wat is de functie van ${targetMuscle.name}?`,
      `Welke beweging voert ${targetMuscle.name} uit?`,
      `De functie van ${targetMuscle.name} is:`,
    ],
  };

  const variants = questionVariants[questionType] || [config.question];
  const selectedQuestion = variants[Math.floor(Math.random() * variants.length)];

  return {
    muscle: targetMuscle,
    questionType,
    questionText: selectedQuestion,
    correctAnswer,
    options: shuffleArray([correctAnswer, ...wrongAnswers]),
  };
}

export function MultipleChoice({ muscles, questionTypes }: MultipleChoiceProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);
  const [quizMode, setQuizMode] = useState<"quick" | "full" | "due">("full");

  const {
    recordCorrect,
    recordIncorrect,
    getMusclesDueForReview,
    startSession,
    endSession,
  } = useStudyProgress();

  const allMuscles = muscles.map(m => m.muscle);
  const muscleNames = muscles.map(m => m.muscle.name);
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
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Number keys 1-4 to select answers
      if (e.key >= "1" && e.key <= "4") {
        const index = parseInt(e.key) - 1;
        const currentQuestion = questions[currentIndex];
        if (currentQuestion && currentQuestion.options[index] && !showResult) {
          setSelectedAnswer(currentQuestion.options[index]);
        }
        return;
      }

      switch (e.key.toLowerCase()) {
        case "enter":
        case " ":
          e.preventDefault();
          if (!showResult && selectedAnswer) {
            handleSubmit();
          } else if (showResult) {
            handleNext();
          }
          break;
        case "?":
          e.preventDefault();
          setShowKeyboardHelp(!showKeyboardHelp);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [showResult, selectedAnswer, currentIndex, questions, showKeyboardHelp]);

  useEffect(() => {
    generateNewQuiz();
  }, [muscles, questionTypes, quizMode]);

  const generateNewQuiz = useCallback(() => {
    const newQuestions: Question[] = [];
    
    // Filter muscles based on quiz mode
    let targetMuscles = muscles;
    if (quizMode === "due" && dueForReview.length > 0) {
      targetMuscles = muscles.filter(m => dueForReview.includes(m.muscle.name));
    }
    
    const shuffledMuscles = shuffleArray(targetMuscles);

    // Generate multiple questions per muscle for more variety
    for (const { muscle } of shuffledMuscles) {
      const shuffledTypes = shuffleArray(questionTypes);
      let questionsAdded = 0;
      const maxQuestionsPerMuscle = Math.min(3, questionTypes.length);
      
      for (const type of shuffledTypes) {
        if (questionsAdded >= maxQuestionsPerMuscle) break;
        const question = generateQuestion(muscle, allMuscles, type);
        if (question) {
          newQuestions.push(question);
          questionsAdded++;
        }
      }
    }

    // Shuffle and limit based on quiz mode
    const maxQuestions = quizMode === "quick" ? 10 : Math.min(newQuestions.length, 30);
    setQuestions(shuffleArray(newQuestions).slice(0, maxQuestions));
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setCorrectCount(0);
    setAnsweredCount(0);
    setIsFinished(false);
  }, [muscles, questionTypes, quizMode, allMuscles, dueForReview]);

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    setShowResult(true);
    setAnsweredCount(prev => prev + 1);
    
    const currentQuestion = questions[currentIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    // Record progress
    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
      recordCorrect(currentQuestion.muscle.name);
    } else {
      recordIncorrect(currentQuestion.muscle.name);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      setIsFinished(true);
      return;
    }
    setCurrentIndex(prev => prev + 1);
    setSelectedAnswer(null);
    setShowResult(false);
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

  if (questions.length === 0) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <p className="text-muted-foreground">
            Geen vragen beschikbaar met de huidige selectie.
          </p>
        </CardContent>
      </Card>
    );
  }

  if (isFinished) {
    const percentage = Math.round((correctCount / answeredCount) * 100);
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Quiz Voltooid!</CardTitle>
        </CardHeader>
        <CardContent className="p-8 text-center space-y-6">
          <div className="text-6xl font-bold text-primary">{percentage}%</div>
          <p className="text-xl">
            Je hebt <span className="font-bold text-green-600">{correctCount}</span> van de{" "}
            <span className="font-bold">{answeredCount}</span> vragen goed beantwoord.
          </p>
          <Progress value={percentage} className="h-4" />
          <Button onClick={generateNewQuiz} size="lg">
            <RotateCcw className="h-4 w-4 mr-2" />
            Opnieuw proberen
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

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
              <div><kbd className="px-2 py-1 bg-muted rounded">1-4</kbd> Kies antwoord A-D</div>
              <div><kbd className="px-2 py-1 bg-muted rounded">Enter</kbd> Bevestig / Volgende</div>
              <div><kbd className="px-2 py-1 bg-muted rounded">?</kbd> Deze help</div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quiz mode selector */}
      <div className="flex flex-wrap justify-between items-center gap-2">
        <div className="flex gap-2">
          <Button
            variant={quizMode === "full" ? "default" : "outline"}
            size="sm"
            onClick={() => setQuizMode("full")}
          >
            Volledige Quiz
          </Button>
          <Button
            variant={quizMode === "quick" ? "default" : "outline"}
            size="sm"
            onClick={() => setQuizMode("quick")}
          >
            <Zap className="h-3 w-3 mr-1" />
            Snel (10)
          </Button>
          {dueForReview.length > 0 && (
            <Button
              variant={quizMode === "due" ? "default" : "outline"}
              size="sm"
              onClick={() => setQuizMode("due")}
            >
              <Clock className="h-3 w-3 mr-1" />
              Herhalen ({dueForReview.length})
            </Button>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowKeyboardHelp(!showKeyboardHelp)}
        >
          <Keyboard className="h-4 w-4" />
        </Button>
      </div>

      {/* Progress */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex gap-2">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Goed: {correctCount}
          </Badge>
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Fout: {answeredCount - correctCount}
          </Badge>
        </div>
        <Badge variant="secondary">
          {currentIndex + 1} / {questions.length}
        </Badge>
      </div>
      <Progress value={progress} className="h-2" />

      {/* Question */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{currentQuestion.questionText}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === currentQuestion.correctAnswer;
            
            let buttonClass = "w-full justify-start text-left h-auto py-3 px-4";
            if (showResult) {
              if (isCorrect) {
                buttonClass += " bg-green-100 border-green-500 text-green-800 hover:bg-green-100";
              } else if (isSelected && !isCorrect) {
                buttonClass += " bg-red-100 border-red-500 text-red-800 hover:bg-red-100";
              }
            } else if (isSelected) {
              buttonClass += " border-primary bg-primary/10";
            }

            return (
              <Button
                key={index}
                variant="outline"
                className={buttonClass}
                onClick={() => handleAnswerSelect(option)}
                disabled={showResult}
              >
                <span className="mr-3 font-bold">{String.fromCharCode(65 + index)}.</span>
                <span className="flex-1">{option}</span>
                {showResult && isCorrect && (
                  <CheckCircle className="h-5 w-5 text-green-600 ml-2" />
                )}
                {showResult && isSelected && !isCorrect && (
                  <XCircle className="h-5 w-5 text-red-600 ml-2" />
                )}
              </Button>
            );
          })}
          
          {/* Show extra info for true/false questions */}
          {showResult && currentQuestion.extraInfo && (
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">💡 </span>
                {currentQuestion.extraInfo}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={generateNewQuiz}>
          <RotateCcw className="h-4 w-4 mr-2" />
          Nieuwe quiz
        </Button>
        {!showResult ? (
          <Button onClick={handleSubmit} disabled={!selectedAnswer}>
            Controleer
          </Button>
        ) : (
          <Button onClick={handleNext}>
            {currentIndex + 1 >= questions.length ? "Resultaten" : "Volgende"}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}
