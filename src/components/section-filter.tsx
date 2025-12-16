"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { getSections } from "@/data/anatomy-data";

interface SectionFilterProps {
  selectedSections: Set<string>;
  selectedSubsections: Set<string>;
  onSectionChange: (sectionId: string, checked: boolean) => void;
  onSubsectionChange: (subsectionId: string, checked: boolean) => void;
  onSelectAll: () => void;
  onClearAll: () => void;
}

export function SectionFilter({
  selectedSections,
  selectedSubsections,
  onSectionChange,
  onSubsectionChange,
  onSelectAll,
  onClearAll,
}: SectionFilterProps) {
  const sections = getSections();

  const totalSelected = selectedSections.size + selectedSubsections.size;

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Selecteer secties</CardTitle>
          <Badge variant="secondary">{totalSelected} geselecteerd</Badge>
        </div>
        <div className="flex gap-2 pt-2">
          <Button variant="outline" size="sm" onClick={onSelectAll}>
            Alles selecteren
          </Button>
          <Button variant="outline" size="sm" onClick={onClearAll}>
            Wis selectie
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {sections.map((section) => (
              <div key={section.id} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={section.id}
                    checked={selectedSections.has(section.id)}
                    onCheckedChange={(checked) =>
                      onSectionChange(section.id, checked === true)
                    }
                  />
                  <Label
                    htmlFor={section.id}
                    className="text-sm font-semibold cursor-pointer"
                  >
                    {section.title}
                  </Label>
                </div>
                {section.subsections.length > 0 && (
                  <div className="ml-6 space-y-2">
                    {section.subsections.map((subsection) => (
                      <div
                        key={subsection.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={subsection.id}
                          checked={selectedSubsections.has(subsection.id)}
                          onCheckedChange={(checked) =>
                            onSubsectionChange(subsection.id, checked === true)
                          }
                        />
                        <Label
                          htmlFor={subsection.id}
                          className="text-sm cursor-pointer text-muted-foreground"
                        >
                          {subsection.title}
                        </Label>
                      </div>
                    ))}
                  </div>
                )}
                <Separator className="my-2" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
