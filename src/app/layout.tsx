import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter for a clean look
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster
import { ThemeToggle } from '@/components/theme-toggle'; // Import ThemeToggle

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
        <div className="relative flex min-h-screen flex-col">
          {/* Add a blurred background element */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-muted to-background opacity-50 blur-3xl pointer-events-none"></div>

          {/* Simple Header for Theme Toggle */}
          <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-end">
              <ThemeToggle />
            </div>
          </header>

          <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
            {children}
          </main>
        </div>
        <Toaster /> {/* Add Toaster for notifications */}
      </body>
    </html>
  );
}
