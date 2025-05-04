// src/components/portfolio/skills-section.tsx
'use client'; // Add this directive

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from '@/contexts/language-context'; // Import useLanguage

// Inline SVG Icons - Kept as they are
const PythonIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19.1 6.2c-1.2-.5-2.6-.9-4-.9-2.2 0-4.1.6-5.8 1.7C6.5 6.8 5 7.6 5 7.6s0 1.3.4 2.6c.9 1.1.1 1.7-.8 2.3-.8.5-1.4 1.4-1.4 1.4s.1 1.3 1.6 2.3c1.4.9 3 1.4 4.7 1.6.4 1.2 1.1 2.2 2 2.9.9.7 2 1.1 3.2 1.1s2.3-.4 3.2-1.1c.9-.7 1.6-1.7 2-2.9 1.7-.2 3.3-.7 4.7-1.6 1.5-1 1.6-2.3 1.6-2.3s-.6-1-1.4-1.4c-.9-.6-1.7-1.1-.8-2.3.4-1.3.4-2.6.4-2.6s-1.5-.8-4.3-1.1zm-7.9 2.1h2.2v2.2h2.2v2.2h-2.2v2.2H11.2v-2.2H9v-2.2h2.2V8.3zm5.6 0h2.2v2.2h2.2v2.2h-2.2v2.2h-2.2V12.7h-2.2V10.5h2.2V8.3z"/></svg>
);
const JavaScriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M1 1v22h22V1H1zm20 20H3V3h18v18zM12 17.5H9.5v-7h5v1.8H12v1.4h2.5v1.8H12v2zM8.5 17.5H6v-7h2.5v7z"/></svg>
);
const CSharpIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M15.3 16.7l1.7-1.7-1.7-1.7-1.1 1.1 1.2 1.2-1.2 1.2 1.1 1zm-6.6 0l1.1-1.1-1.2-1.2 1.2-1.2-1.1-1.1-1.7 1.7 1.7 1.7zm4.8-10.2H12v1.4h1.5v1.5h1.4V7.9h1.5V6.5h-1.5V5h-1.4v1.5zm-5 0H7.1v1.4H8.5v1.5h1.4V7.9h1.5V6.5H9.9V5H8.5v1.5zM22 1v22H2V1h20m1-1H1v24h22V0z"/></svg>
);
const LuaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-12.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-9z"/></svg>
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
    title: "Minhas Habilidades",
  }
};

export function SkillsSection() {
  const { language } = useLanguage(); // Get the current language
  const texts = content[language] || content.en; // Fallback to English

  return (
    <section id="skills" className="max-w-3xl mx-auto"> {/* Slightly wider max-width */}
      <Card className="shadow-lg bg-card/80 backdrop-blur-sm"> {/* Added slight transparency and blur */}
        <CardHeader className="text-center pb-4"> {/* Reduced bottom padding */}
          <CardTitle className="text-3xl md:text-4xl font-bold text-foreground mb-2">{texts.title}</CardTitle> {/* Larger title */}
        </CardHeader>
        <CardContent className="flex justify-center flex-wrap gap-4 p-6"> {/* Increased gap and padding */}
          {skills.map((skill) => (
            <Badge
              key={skill.name}
              variant="secondary"
              className="flex items-center gap-2 px-5 py-2.5 text-base md:text-lg rounded-full shadow-sm hover-scale" /* Rounded-full, adjusted padding, added shadow and hover effect */
            >
              <skill.icon className="h-5 w-5 text-primary" aria-hidden="true" /> {/* Added text-primary to icon */}
              {skill.name}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
