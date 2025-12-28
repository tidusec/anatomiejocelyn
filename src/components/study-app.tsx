"use client";

import { useState, useMemo, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Flashcard } from "@/components/flashcard";
import { MultipleChoice } from "@/components/multiple-choice";
import { MuscleOverview } from "@/components/muscle-overview";
import { StatisticsDashboard } from "@/components/statistics-dashboard";
import { anatomyData, getAllMuscles, getSections, Muscle } from "@/data/anatomy-data";
import { useStudyProgress } from "@/hooks/use-study-progress";
import {
  Settings,
  BookOpen,
  Brain,
  List,
  GraduationCap,
  BarChart3,
  Flame,
  Target,
  Moon,
  Sun,
  Heart,
} from "lucide-react";

type FlashcardField = "origin" | "insertion" | "innervation" | "function";
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

export function StudyApp() {
  // Filter state
  const [selectedSections, setSelectedSections] = useState<Set<string>>(new Set());
  const [selectedSubsections, setSelectedSubsections] = useState<Set<string>>(new Set());

  // Flashcard settings
  const [flashcardShowFields, setFlashcardShowFields] = useState<Set<FlashcardField>>(
    new Set(["origin", "insertion", "innervation", "function"])
  );

  // Multiple choice settings
  const [mcQuestionTypes, setMcQuestionTypes] = useState<Set<QuestionType>>(
    new Set([
      "origin",
      "insertion",
      "innervation",
      "function",
      "name",
      "origin_reverse",
      "insertion_reverse",
      "innervation_reverse",
      "function_reverse",
      "true_false",
      "match_property",
      "origo_or_insertio",
      "which_muscle_origo_insertio",
    ])
  );

  // Theme
  const [isDark, setIsDark] = useState(false);

  // Study progress
  const { getStatistics, isLoaded } = useStudyProgress();
  const stats = isLoaded ? getStatistics() : null;

  const sections = getSections();
  const allMuscles = getAllMuscles();

  // Theme effect
  useEffect(() => {
    const savedTheme = localStorage.getItem("anatomy-study-theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("anatomy-study-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("anatomy-study-theme", "dark");
    }
  };

  // Filter muscles based on selection
  const filteredMuscles = useMemo(() => {
    if (selectedSections.size === 0 && selectedSubsections.size === 0) {
      return allMuscles;
    }

    return allMuscles.filter(({ muscle, sectionTitle, subsectionTitle }) => {
      // Find the section by title
      const section = anatomyData.sections.find((s) => s.title === sectionTitle);
      if (!section) return false;

      // Check if the whole section is selected
      if (selectedSections.has(section.id)) return true;

      // Check if the subsection is selected
      if (subsectionTitle) {
        const subsection = section.subsections?.find((sub) => sub.title === subsectionTitle);
        if (subsection && selectedSubsections.has(subsection.id)) return true;
      }

      return false;
    });
  }, [allMuscles, selectedSections, selectedSubsections]);

  const handleSectionChange = (sectionId: string, checked: boolean) => {
    const newSet = new Set(selectedSections);
    if (checked) {
      newSet.add(sectionId);
    } else {
      newSet.delete(sectionId);
    }
    setSelectedSections(newSet);
  };

  const handleSubsectionChange = (subsectionId: string, checked: boolean) => {
    const newSet = new Set(selectedSubsections);
    if (checked) {
      newSet.add(subsectionId);
    } else {
      newSet.delete(subsectionId);
    }
    setSelectedSubsections(newSet);
  };

  const handleSelectAll = () => {
    const allSectionIds = new Set(sections.map((s) => s.id));
    const allSubsectionIds = new Set(sections.flatMap((s) => s.subsections.map((sub) => sub.id)));
    setSelectedSections(allSectionIds);
    setSelectedSubsections(allSubsectionIds);
  };

  const handleClearAll = () => {
    setSelectedSections(new Set());
    setSelectedSubsections(new Set());
  };

  const toggleFlashcardField = (field: FlashcardField) => {
    const newSet = new Set(flashcardShowFields);
    if (newSet.has(field)) {
      if (newSet.size > 1) {
        newSet.delete(field);
      }
    } else {
      newSet.add(field);
    }
    setFlashcardShowFields(newSet);
  };

  const toggleMcQuestionType = (type: QuestionType) => {
    const newSet = new Set(mcQuestionTypes);
    if (newSet.has(type)) {
      if (newSet.size > 1) {
        newSet.delete(type);
      }
    } else {
      newSet.add(type);
    }
    setMcQuestionTypes(newSet);
  };

  const totalSelected = selectedSections.size + selectedSubsections.size;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <GraduationCap className="h-8 w-8 text-pink-500" />
                <Heart className="h-3 w-3 text-red-500 absolute -bottom-1 -right-1 fill-red-500" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Anatomie Studie
                </h1>
                <p className="text-sm text-muted-foreground">
                  Spieren leren
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* Quick stats */}
              {stats && stats.streakDays > 0 && (
                <Badge
                  variant="outline"
                  className="hidden md:flex bg-orange-50 text-orange-600 border-orange-200"
                >
                  <Flame className="h-3 w-3 mr-1" />
                  {stats.streakDays} dagen streak!
                </Badge>
              )}
              {stats && stats.accuracy > 0 && (
                <Badge
                  variant="outline"
                  className="hidden md:flex bg-green-50 text-green-600 border-green-200"
                >
                  <Target className="h-3 w-3 mr-1" />
                  {stats.accuracy}%
                </Badge>
              )}
              <Badge variant="outline" className="hidden sm:flex">
                {filteredMuscles.length} spieren
              </Badge>
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Instellingen</SheetTitle>
                    <SheetDescription>Pas je oefensessie aan</SheetDescription>
                  </SheetHeader>
                  <div className="mt-6 space-y-6">
                    {/* Section Selection */}
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <List className="h-4 w-4" />
                        Selecteer secties om te oefenen
                      </h3>
                      <div className="flex gap-2 mb-3">
                        <Button variant="outline" size="sm" onClick={handleSelectAll}>
                          Alles
                        </Button>
                        <Button variant="outline" size="sm" onClick={handleClearAll}>
                          Niets
                        </Button>
                      </div>
                      <ScrollArea className="h-[200px] border rounded-md p-3">
                        <div className="space-y-3">
                          {sections.map((section) => (
                            <div key={section.id} className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id={`settings-${section.id}`}
                                  checked={selectedSections.has(section.id)}
                                  onCheckedChange={(checked) =>
                                    handleSectionChange(section.id, checked === true)
                                  }
                                />
                                <Label
                                  htmlFor={`settings-${section.id}`}
                                  className="text-sm font-medium cursor-pointer"
                                >
                                  {section.title}
                                </Label>
                              </div>
                              {section.subsections.length > 0 && (
                                <div className="ml-6 space-y-1">
                                  {section.subsections.map((sub) => (
                                    <div key={sub.id} className="flex items-center space-x-2">
                                      <Checkbox
                                        id={`settings-${sub.id}`}
                                        checked={selectedSubsections.has(sub.id)}
                                        onCheckedChange={(checked) =>
                                          handleSubsectionChange(sub.id, checked === true)
                                        }
                                      />
                                      <Label
                                        htmlFor={`settings-${sub.id}`}
                                        className="text-xs cursor-pointer text-muted-foreground"
                                      >
                                        {sub.title}
                                      </Label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                      <p className="text-xs text-muted-foreground mt-2">
                        {totalSelected === 0
                          ? "Alle spieren worden getoond"
                          : `${totalSelected} selectie(s) actief`}
                      </p>
                    </div>

                    <Separator />

                    {/* Flashcard Settings */}
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Flashcard velden
                      </h3>
                      <div className="space-y-2">
                        {[
                          { id: "origin" as FlashcardField, label: "Origo" },
                          { id: "insertion" as FlashcardField, label: "Insertie" },
                          { id: "innervation" as FlashcardField, label: "Innervatie" },
                          { id: "function" as FlashcardField, label: "Functie" },
                        ].map((field) => (
                          <div key={field.id} className="flex items-center justify-between">
                            <Label htmlFor={`fc-${field.id}`}>{field.label}</Label>
                            <Switch
                              id={`fc-${field.id}`}
                              checked={flashcardShowFields.has(field.id)}
                              onCheckedChange={() => toggleFlashcardField(field.id)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Multiple Choice Settings */}
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Brain className="h-4 w-4" />
                        Meerkeuzevraag types
                      </h3>
                      <ScrollArea className="h-[280px]">
                        <div className="space-y-2 pr-4">
                          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2">
                            Standaard vragen
                          </p>
                          {[
                            { id: "name" as QuestionType, label: "Spiernaam raden" },
                            { id: "origin" as QuestionType, label: "Origo vragen" },
                            { id: "insertion" as QuestionType, label: "Insertie vragen" },
                            { id: "innervation" as QuestionType, label: "Innervatie vragen" },
                            { id: "function" as QuestionType, label: "Functie vragen" },
                          ].map((type) => (
                            <div key={type.id} className="flex items-center justify-between">
                              <Label htmlFor={`mc-${type.id}`}>{type.label}</Label>
                              <Switch
                                id={`mc-${type.id}`}
                                checked={mcQuestionTypes.has(type.id)}
                                onCheckedChange={() => toggleMcQuestionType(type.id)}
                              />
                            </div>
                          ))}

                          <Separator className="my-3" />
                          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2">
                            Omgekeerde vragen
                          </p>
                          {[
                            { id: "origin_reverse" as QuestionType, label: "Spier bij origo" },
                            { id: "insertion_reverse" as QuestionType, label: "Spier bij insertie" },
                            {
                              id: "innervation_reverse" as QuestionType,
                              label: "Spier bij innervatie",
                            },
                            { id: "function_reverse" as QuestionType, label: "Spier bij functie" },
                          ].map((type) => (
                            <div key={type.id} className="flex items-center justify-between">
                              <Label htmlFor={`mc-${type.id}`}>{type.label}</Label>
                              <Switch
                                id={`mc-${type.id}`}
                                checked={mcQuestionTypes.has(type.id)}
                                onCheckedChange={() => toggleMcQuestionType(type.id)}
                              />
                            </div>
                          ))}

                          <Separator className="my-3" />
                          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2">
                            Extra vraagtypes
                          </p>
                          {[
                            { id: "true_false" as QuestionType, label: "Waar/Niet waar vragen" },
                            { id: "match_property" as QuestionType, label: "Eigenschap matchen" },
                          ].map((type) => (
                            <div key={type.id} className="flex items-center justify-between">
                              <Label htmlFor={`mc-${type.id}`}>{type.label}</Label>
                              <Switch
                                id={`mc-${type.id}`}
                                checked={mcQuestionTypes.has(type.id)}
                                onCheckedChange={() => toggleMcQuestionType(type.id)}
                              />
                            </div>
                          ))}

                          <Separator className="my-3" />
                          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2">
                            🎯 Examen-stijl vragen
                          </p>
                          {[
                            { id: "origo_or_insertio" as QuestionType, label: "Is dit origo of insertie?" },
                            { id: "which_muscle_origo_insertio" as QuestionType, label: "Welke spier (slimme fouten)" },
                          ].map((type) => (
                            <div key={type.id} className="flex items-center justify-between">
                              <Label htmlFor={`mc-${type.id}`}>{type.label}</Label>
                              <Switch
                                id={`mc-${type.id}`}
                                checked={mcQuestionTypes.has(type.id)}
                                onCheckedChange={() => toggleMcQuestionType(type.id)}
                              />
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="flashcards" className="w-full">
          <TabsList className="grid w-full max-w-lg mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="flashcards" className="flex items-center gap-1 md:gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Flashcards</span>
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center gap-1 md:gap-2">
              <Brain className="h-4 w-4" />
              <span className="hidden sm:inline">Quiz</span>
            </TabsTrigger>
            <TabsTrigger value="stats" className="flex items-center gap-1 md:gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Statistieken</span>
            </TabsTrigger>
            <TabsTrigger value="overview" className="flex items-center gap-1 md:gap-2">
              <List className="h-4 w-4" />
              <span className="hidden sm:inline">Overzicht</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="flashcards" className="mt-0">
            <div className="flex flex-col items-center">
              <div className="mb-6 text-center">
                <h2 className="text-xl font-semibold mb-2">📚 Flashcards</h2>
                <p className="text-muted-foreground">
                  Klik op een kaart om de details te zien. Gebruik sneltoetsen voor sneller leren!
                </p>
              </div>
              <Flashcard
                muscles={filteredMuscles}
                questionField="origin"
                showFields={Array.from(flashcardShowFields)}
              />
            </div>
          </TabsContent>

          <TabsContent value="quiz" className="mt-0">
            <div className="flex flex-col items-center">
              <div className="mb-6 text-center">
                <h2 className="text-xl font-semibold mb-2">🧠 Meerkeuzevragen</h2>
                <p className="text-muted-foreground">
                  Test je kennis met meerkeuzevragen. Gebruik toetsen 1-4 om snel te antwoorden!
                </p>
              </div>
              <MultipleChoice
                muscles={filteredMuscles}
                questionTypes={Array.from(mcQuestionTypes)}
              />
            </div>
          </TabsContent>

          <TabsContent value="stats" className="mt-0">
            <div className="flex flex-col items-center">
              <div className="mb-6 text-center">
                <h2 className="text-xl font-semibold mb-2">📊 Statistieken</h2>
                <p className="text-muted-foreground">
                  Bekijk je voortgang en ontdek welke spieren meer aandacht nodig hebben.
                </p>
              </div>
              <StatisticsDashboard allMuscles={allMuscles} />
            </div>
          </TabsContent>

          <TabsContent value="overview" className="mt-0">
            <div className="flex flex-col items-center">
              <div className="mb-6 text-center">
                <h2 className="text-xl font-semibold mb-2">📋 Overzicht</h2>
                <p className="text-muted-foreground">
                  Bekijk alle spieren en hun eigenschappen in een handig overzicht.
                </p>
              </div>
              <MuscleOverview muscles={filteredMuscles} />
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white/50 dark:bg-gray-900/50 border-t mt-auto">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-muted-foreground">
          <p>
            Gemaakt met{" "}
            <Heart className="h-4 w-4 inline text-red-500 fill-red-500 animate-pulse" />
          </p>
        </div>
      </footer>
    </div>
  );
}
