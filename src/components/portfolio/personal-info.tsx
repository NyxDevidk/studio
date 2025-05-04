'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github } from "lucide-react";
import Link from "next/link";
import { useLanguage } from '@/contexts/language-context'; // Import useLanguage
import { buttonVariants } from "@/components/ui/button"; // Import buttonVariants
import { cn } from "@/lib/utils"; // Import cn

// Inline SVG for Discord icon
const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M19.54 5.23C18.27 4.5 16.88 4 15.38 4C13.11 4 11 4.76 9.25 6.16C6.58 5.86 5 6.88 5 6.88C5 8.44 5.47 9.84 6.38 11C5.3 11.64 4.64 12.64 4.64 12.64C4.64 12.64 4.73 14.17 6.44 15.27C7.94 16 9.69 16.5 11.56 16.75C11.56 16.75 11.94 17.38 11.94 17.38C10.5 17.75 9.25 18.25 9.25 18.25L9.81 19C11.19 19.44 12.69 19.75 14.31 19.94C14.31 19.94 14.81 19.19 14.81 19.19C16.5 18.88 18 18.19 18 18.19C18 18.19 17.38 17.63 16.06 17.19C16.06 17.19 16.13 17.06 16.19 17C18.19 16.13 19.31 14.44 19.31 14.44C19.31 14.44 18.69 13.31 17.56 12.69C18.5 11.56 19.06 10.19 19.06 10.19C19.06 10.19 18.06 7.94 15.38 7.5C15.5 7.25 15.63 7 15.75 6.69C17.5 5.88 19.54 5.23 19.54 5.23Z" />
    </svg>
);

// Text content for different languages
const content = {
  en: {
    name: "Pyetro (Nyx)",
    bio: "I'm a developer with 3 years of experience, passionate about building applications for personal use. Big fan of Roblox and Minecraft, and I'm 14 years old.", // Refined bio
    githubAriaLabel: "GitHub Profile",
    discordAriaLabel: "Discord Server/Profile",
  },
  pt: {
    name: "Pyetro (Nyx)",
    bio: "Sou um desenvolvedor com 3 anos de experiência, apaixonado por criar aplicativos para uso pessoal. Grande fã de Roblox e Minecraft, e tenho 14 anos.", // Refined bio PT
    githubAriaLabel: "Perfil do GitHub",
    discordAriaLabel: "Servidor/Perfil do Discord",
  }
};

export function PersonalInfoSection() {
  const { language } = useLanguage(); // Get the current language
  const texts = content[language] || content.en; // Fallback to English

  return (
    <section id="about" className="flex flex-col md:flex-row items-center text-center md:text-left gap-12 md:gap-16"> {/* Increased gap further */}
      <Avatar className="w-32 h-32 md:w-40 md:h-40 border-[6px] border-primary/80 shadow-xl flex-shrink-0 transition-transform duration-300 hover:scale-105"> {/* Even larger avatar, thicker border, hover effect */}
        <AvatarImage
          src="https://i.imgur.com/TecgRw1.gif"
          alt="Nyx (Pyetro) - User Avatar"
          data-ai-hint="user avatar profile picture animated gif"
         />
        <AvatarFallback>PN</AvatarFallback>
      </Avatar>
      <div className="space-y-5"> {/* Added space-y for better vertical rhythm */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 tracking-tight"> {/* Larger heading, tighter tracking */}
          {texts.name}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto md:mx-0 leading-relaxed"> {/* Larger text, increased margin, max-width, relaxed leading */}
          {texts.bio}
        </p>
        <div className="flex justify-center md:justify-start space-x-5"> {/* Increased spacing */}
          {/* Apply button styles directly to Link */}
          <Link
            href="https://github.com/NyxDevidk"
            target="_blank"
            aria-label={texts.githubAriaLabel}
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "icon" }),
              "hover-scale group rounded-full h-12 w-12" // Keep custom styles like rounded-full, h-12, w-12
            )}
          >
            <Github className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
          {/* Apply button styles directly to Link */}
          <Link
            href="https://discord.gg/kHVRF49cy3"
            target="_blank"
            aria-label={texts.discordAriaLabel}
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "icon" }),
              "hover-scale group rounded-full h-12 w-12" // Keep custom styles
            )}
          >
            <DiscordIcon className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors"/>
          </Link>
        </div>
      </div>
    </section>
  );
}
