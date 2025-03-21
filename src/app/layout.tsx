import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Inter } from 'next/font/google';

import Navigation from '@/components/navigation';
import SiteFooter from '@/components/site-footer';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Moraine Lake Louise Shuttle',
  description:
    'Premium shuttle service to Moraine Lake and Lake Louise in Banff National Park',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased bg-[#FEFCFB]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <SiteFooter />
        </ThemeProvider>

        <script
          src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes"
          async
        />
      </body>
    </html>
  );
}
