import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter for a clean look
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster
import { ThemeToggle } from '@/components/theme-toggle'; // Import ThemeToggle
import { LanguageProvider } from '@/contexts/language-context'; // Import LanguageProvider
import { LanguageSwitcher } from '@/components/language-switcher'; // Import LanguageSwitcher
import { TooltipProvider } from '@/components/ui/tooltip'; // Import TooltipProvider

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'BlueHaze Portfolio',
  description: 'A personal portfolio showcasing projects and skills.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Note: The 'dark' class will be applied dynamically by useTheme hook on the client
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          'bg-transition', // Add smooth background transition class
          inter.variable
        )}
      >
        <LanguageProvider> {/* Wrap content with LanguageProvider */}
          <TooltipProvider> {/* Wrap with TooltipProvider */}
            <div className="relative flex min-h-dvh flex-col"> {/* Use dvh for better mobile viewport height */}
              {/* Add a blurred background element - slightly more subtle */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-muted/10 to-background opacity-30 blur-3xl pointer-events-none dark:from-primary/10 dark:via-muted/5"></div>

              {/* Updated Header for Theme Toggle and Language Switcher */}
              <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
                <div className="container flex h-16 items-center justify-end space-x-4 px-4 sm:px-6 lg:px-8"> {/* Increased height and padding */}
                  <LanguageSwitcher /> {/* Add Language Switcher */}
                  <ThemeToggle />
                </div>
              </header>

              <main className="flex-1 container mx-auto px-4 py-12 md:py-20"> {/* Adjusted padding */}
                {children}
              </main>

              {/* Enhanced Footer */}
              <footer className="py-8 md:px-8 md:py-10 border-t border-border/40 bg-muted/30">
                <div className="container flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-between">
                  <p className="text-sm text-muted-foreground text-center">
                    © {new Date().getFullYear()} Pyetro (Nyx). Todos os direitos reservados.
                  </p>
                  {/* You can add social icons or other links here if desired in the future */}
                  {/* Example:
                  <div className="flex items-center gap-4">
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github size={18} /></Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={18} /></Link>
                  </div>
                   */}
                </div>
              </footer>
            </div>
          </TooltipProvider>
          <Toaster /> {/* Add Toaster for notifications */}
        </LanguageProvider>
      </body>
    </html>
  );
}
