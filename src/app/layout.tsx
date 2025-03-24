import '@/app/globals.css';
import { I18nProvider } from '@/i18n/i18n-provider';
import { ThemeProvider } from '@/providers/theme-provider';
import { Toaster } from 'sonner';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { Poppins, Amiri, Noto_Serif_Malayalam } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans'
});

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-arabic'
});

const malayalam = Noto_Serif_Malayalam({
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
          poppins.variable,
          amiri.variable,
          malayalam.variable
        )}
      >
        <ThemeProvider>
          <I18nProvider>
            <main className="relative min-h-screen">
              {children}
              <Toaster position="top-center" />
            </main>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
