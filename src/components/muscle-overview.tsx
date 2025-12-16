"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Muscle } from "@/data/anatomy-data";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

interface MuscleOverviewProps {
  muscles: { muscle: Muscle; sectionTitle: string; subsectionTitle?: string }[];
}

export function MuscleOverview({ muscles }: MuscleOverviewProps) {
  const [expandedMuscle, setExpandedMuscle] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "section">("section");

  const filteredMuscles = muscles.filter(({ muscle }) =>
    muscle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    muscle.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
    muscle.insertion.toLowerCase().includes(searchTerm.toLowerCase()) ||
    muscle.innervation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    muscle.function.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedMuscles = [...filteredMuscles].sort((a, b) => {
    if (sortBy === "name") {
      return a.muscle.name.localeCompare(b.muscle.name);
    }
    return a.sectionTitle.localeCompare(b.sectionTitle);
  });

  const toggleExpand = (muscleName: string) => {
    setExpandedMuscle(expandedMuscle === muscleName ? null : muscleName);
  };

  if (muscles.length === 0) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="p-8 text-center">
          <p className="text-muted-foreground">
            Selecteer ten minste één sectie om spieren te bekijken.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* Search and Sort */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Zoeken..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Select value={sortBy} onValueChange={(value: "name" | "section") => setSortBy(value)}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sorteren op" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="section">Op sectie</SelectItem>
                <SelectItem value="name">Op naam</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            {filteredMuscles.length} van {muscles.length} spieren
          </p>
        </CardContent>
      </Card>

      {/* Muscle List */}
      <Card>
        <CardHeader>
          <CardTitle>Alle spieren</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-2">
              {sortedMuscles.map(({ muscle, sectionTitle, subsectionTitle }, index) => (
                <div key={`${muscle.name}-${index}`}>
                  <div
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                      expandedMuscle === muscle.name
                        ? "bg-primary/5 border-primary"
                        : "hover:bg-muted/50"
                    }`}
                    onClick={() => toggleExpand(muscle.name)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{muscle.name}</h3>
                        <div className="flex flex-wrap gap-1 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {sectionTitle}
                          </Badge>
                          {subsectionTitle && (
                            <Badge variant="outline" className="text-xs">
                              {subsectionTitle}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="shrink-0">
                        {expandedMuscle === muscle.name ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </div>

                    {expandedMuscle === muscle.name && (
                      <div className="mt-4 space-y-3 pt-4 border-t">
                        {muscle.origin && (
                          <div>
                            <span className="font-semibold text-primary">Origo:</span>{" "}
                            <span className="text-muted-foreground">{muscle.origin}</span>
                          </div>
                        )}
                        {muscle.insertion && (
                          <div>
                            <span className="font-semibold text-primary">Insertie:</span>{" "}
                            <span className="text-muted-foreground">{muscle.insertion}</span>
                          </div>
                        )}
                        {muscle.innervation && (
                          <div>
                            <span className="font-semibold text-primary">Innervatie:</span>{" "}
                            <span className="text-muted-foreground">{muscle.innervation}</span>
                          </div>
                        )}
                        {muscle.function && (
                          <div>
                            <span className="font-semibold text-primary">Functie:</span>{" "}
                            <span className="text-muted-foreground">{muscle.function}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
