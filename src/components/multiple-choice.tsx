"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Muscle } from "@/data/anatomy-data";
import { CheckCircle, XCircle, RotateCcw, ArrowRight } from "lucide-react";

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
  | "match_property";

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

  // Get wrong answers from other muscles
  const otherMuscles = allMuscles.filter(
    m => m[config.answerKey] && m[config.answerKey] !== correctAnswer && m[config.answerKey].length > 0
  );
  
  if (otherMuscles.length < 3) return null;

  const wrongAnswers = shuffleArray(otherMuscles)
    .slice(0, 3)
    .map(m => m[config.answerKey]);

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

  const allMuscles = muscles.map(m => m.muscle);

  useEffect(() => {
    generateNewQuiz();
  }, [muscles, questionTypes]);

  const generateNewQuiz = () => {
    const newQuestions: Question[] = [];
    const shuffledMuscles = shuffleArray(muscles);

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

    // Shuffle and limit to a reasonable number of questions
    const maxQuestions = Math.min(newQuestions.length, 30);
    setQuestions(shuffleArray(newQuestions).slice(0, maxQuestions));
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setCorrectCount(0);
    setAnsweredCount(0);
    setIsFinished(false);
  };

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    setShowResult(true);
    setAnsweredCount(prev => prev + 1);
    if (selectedAnswer === questions[currentIndex].correctAnswer) {
      setCorrectCount(prev => prev + 1);
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
