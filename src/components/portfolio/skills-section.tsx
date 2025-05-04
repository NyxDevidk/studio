// src/components/portfolio/skills-section.tsx
'use client'; // Add this directive

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from '@/contexts/language-context'; // Import useLanguage

// Inline SVG Icons
const PythonIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 1.183c-3.427 0-6.28 2.707-6.49 6.077-.21 3.37.65 6.08 1.85 7.63.66.86 1.43 1.59 2.3 2.18.87.59 1.8 1 2.84 1.24.52.12 1.05.18 1.5.18.45 0 .98-.06 1.5-.18 1.04-.24 1.97-.65 2.84-1.24.87-.59 1.64-1.32 2.3-2.18 1.2-1.55 2.06-4.26 1.85-7.63C18.28 3.89 15.427 1.183 12 1.183zm-3.9 5.417h2.22v2.21h2.22v2.21h-2.22v2.21h-2.22v-2.21H5.88v-2.21h2.22v-2.21zm7.8 0h2.22v2.21h2.22v2.21h-2.22v2.21h-2.22v-2.21h-2.22v-2.21h2.22v-2.21z"/>
    </svg>
);

const JavaScriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M1 1h22v22H1V1zm20.5 20.5V3.5H3.5v17h18zM11.5 17.5h2V15h-2v2.5zm-4-4h2v4h-2v-4zm8 0h2v4h-2v-4zm-8-8h10v2h-10V5.5z"/>
    </svg>
);

const CSharpIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8.5 4.5H10v15H8.5v-15zm7 0H17v15h-1.5v-15zM4.5 8.5H6v7H4.5v-7zm15 0h1.5v7H19.5v-7zM11 11h2v2h-2v-2z"/>
    </svg>
);

const LuaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
);

// Skills data with icons
const skills = [
    { name: "Python", icon: PythonIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "C#", icon: CSharpIcon },
    { name: "Lua", icon: LuaIcon }, // Added Lua
];

// Text content for different languages
const content = {
  en: {
    title: "My Skills",
  },
  pt: {
    title: "Minhas Habilidades", // Corrected spelling
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
            <Badge key={skill.name} variant="secondary" className="flex items-center gap-2 px-4 py-2 text-base md:text-lg transition-transform hover:scale-105">
              <skill.icon className="h-5 w-5" aria-hidden="true" />
              {skill.name}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
