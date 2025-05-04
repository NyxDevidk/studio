import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

// Define a type for project data
type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

// Placeholder project data
const projects: Project[] = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A web application built with Next.js and Tailwind CSS, showcasing data visualization.",
    imageUrl: "https://picsum.photos/600/400?random=1",
    imageHint: "web application screenshot",
    tags: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Project Beta",
    description: "An innovative mobile app designed for productivity and task management.",
    imageUrl: "https://picsum.photos/600/400?random=2",
    imageHint: "mobile app interface",
    tags: ["React Native", "Firebase", "Mobile App"],
    repoUrl: "#",
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "An open-source library simplifying complex animations in web development.",
    imageUrl: "https://picsum.photos/600/400?random=3",
    imageHint: "abstract code illustration",
    tags: ["JavaScript", "Animation", "Open Source"],
    liveUrl: "#",
  },
];

export function ProjectsShowcase() {
  return (
    <section id="projects">
      <h2 className="text-3xl font-bold text-center text-foreground mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader className="p-0">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint={project.imageHint}
              />
            </CardHeader>
            <CardContent className="flex-grow p-4 md:p-6">
              <CardTitle className="text-xl md:text-2xl mb-2">{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground mb-4">
                {project.description}
              </CardDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-4 md:p-6 pt-0 flex justify-end space-x-2">
              {project.repoUrl && (
                <Button variant="ghost" size="sm" asChild>
                  <Link href={project.repoUrl} target="_blank" aria-label={`GitHub repository for ${project.title}`}>
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
              )}
              {project.liveUrl && (
                <Button variant="default" size="sm" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href={project.liveUrl} target="_blank" aria-label={`Live demo of ${project.title}`}>
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
