'use client'; // Add this directive

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from '@/contexts/language-context'; // Import useLanguage

const skills = ["Python", "JavaScript", "C#"];

// Text content for different languages
const content = {
  en: {
    title: "My Skills",
  },
  pt: {
    title: "Minhas Habilidades",
  }
};

export function SkillsSection() {
  const { language } = useLanguage(); // Get the current language
  const texts = content[language] || content.en; // Fallback to English

  return (
    <section id="skills" className="max-w-2xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-foreground mb-2">{texts.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="px-4 py-2 text-base md:text-lg transition-transform hover:scale-105">
              {skill}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
