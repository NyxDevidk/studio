import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter for a clean look
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster
import { ThemeToggle } from '@/components/theme-toggle'; // Import ThemeToggle
import { LanguageProvider } from '@/contexts/language-context'; // Import LanguageProvider
import { LanguageSwitcher } from '@/components/language-switcher'; // Import LanguageSwitcher

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
          inter.variable
        )}
      >
        <LanguageProvider> {/* Wrap content with LanguageProvider */}
          <div className="relative flex min-h-dvh flex-col"> {/* Use dvh for better mobile viewport height */}
            {/* Add a blurred background element - slightly more subtle */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-muted to-background opacity-40 blur-3xl pointer-events-none"></div>

            {/* Updated Header for Theme Toggle and Language Switcher */}
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
              <div className="container flex h-16 items-center justify-end space-x-4 px-4 sm:px-6 lg:px-8"> {/* Increased height and padding */}
                <LanguageSwitcher /> {/* Add Language Switcher */}
                <ThemeToggle />
              </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-10 md:py-16"> {/* Adjusted padding */}
              {children}
            </main>

            {/* Simple Footer */}
            <footer className="py-6 md:px-8 md:py-8 border-t border-border/40">
              <div className="container flex flex-col items-center justify-center gap-2 sm:flex-row sm:justify-between">
                <p className="text-sm text-muted-foreground text-center">
                  © {new Date().getFullYear()} Pyetro (Nyx). All rights reserved.
                </p>
                {/* Optional: Add social links or other footer content here */}
              </div>
            </footer>
          </div>
          <Toaster /> {/* Add Toaster for notifications */}
        </LanguageProvider>
      </body>
    </html>
  );
}
