import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = ["Python", "JavaScript", "C#"];

export function SkillsSection() {
  return (
    <section id="skills" className="max-w-2xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-foreground mb-2">My Skills</CardTitle>
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
