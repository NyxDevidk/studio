import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export function PersonalInfoSection() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
      <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-primary shadow-lg">
        <AvatarImage src="https://picsum.photos/128/128" alt="Pyetro (Nyx)" data-ai-hint="profile picture headshot" />
        <AvatarFallback>PN</AvatarFallback> {/* Updated Fallback */}
      </Avatar>
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Pyetro (Nyx) {/* Updated Name */}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-xl">
          A short and engaging bio about yourself. Highlight your key skills and passion. For example: Passionate Full-Stack Developer specializing in creating modern web applications with React and Node.js. I enjoy sites where I can toggle between light and dark themes. {/* Updated Bio */}
        </p>
        <div className="flex justify-center md:justify-start space-x-3">
          <Button variant="outline" size="icon" asChild>
            {/* TODO: Update email link */}
            <Link href="mailto:your.email@example.com" target="_blank" aria-label="Email">
              <Mail />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
             {/* TODO: Update LinkedIn link */}
            <Link href="https://linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn">
              <Linkedin />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            {/* TODO: Update GitHub link */}
            <Link href="https://github.com/yourusername" target="_blank" aria-label="GitHub">
              <Github />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
