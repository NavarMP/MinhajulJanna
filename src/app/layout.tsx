import '@/app/globals.css';
import { I18nProvider } from '@/i18n/i18n-provider';
import { ThemeProvider } from '@/providers/theme-provider';
import { Toaster } from 'sonner';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { Poppins, Noto_Sans_Arabic, Noto_Serif_Malayalam } from 'next/font/google';
import {Footer} from '@/components/sections/footer';

const enFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans'
});

const arFont = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-arabic'
});

const mlFont = Noto_Serif_Malayalam({
  subsets: ['malayalam'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-malayalam'
});

export const metadata: Metadata = {
  title: 'Minhajul Janna Dars',
  description: 'Shaikhuna Parannoor Usthad Smarakha Minhajul Janna Dars',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          enFont.variable,
          arFont.variable,
          mlFont.variable
        )}
      >
        <ThemeProvider>
          <I18nProvider>
            <main className="relative min-h-screen">
              {children}
              <Toaster position="top-center" />
            </main>
            <Footer/>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
