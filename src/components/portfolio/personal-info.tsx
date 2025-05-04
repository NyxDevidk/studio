'use client'; // Added 'use client' as this component uses hooks (implicitly via Avatar) and event handlers (Links)

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react"; // Mail and Linkedin removed
import Link from "next/link";

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


export function PersonalInfoSection() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
      <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-primary shadow-lg">
        {/* Developer Note: Using user-provided GIF link. */}
        <AvatarImage
          src="https://i.imgur.com/TecgRw1.gif" // Updated GIF URL
          alt="Nyx (Pyetro) - User Avatar"
          data-ai-hint="user avatar profile picture" // Hint for finding a replacement
         />
        <AvatarFallback>PN</AvatarFallback> {/* Updated Fallback */}
      </Avatar>
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Pyetro (Nyx) {/* Updated Name */}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-xl">
          Developer passionate about creating modern web applications. I enjoy sites where I can toggle between light and dark themes. {/* Updated Bio */}
        </p>
        <div className="flex justify-center md:justify-start space-x-3">
          {/* Email button removed */}
          {/* LinkedIn button removed */}
          <Button variant="outline" size="icon" asChild>
            {/* TODO: Update GitHub link */}
            <Link href="https://github.com/yourusername" target="_blank" aria-label="GitHub">
              <Github />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            {/* TODO: Update Discord link (e.g., invite link or profile ID) */}
            <Link href="https://discord.gg/yourinvite" target="_blank" aria-label="Discord">
              <DiscordIcon className="h-5 w-5"/>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
