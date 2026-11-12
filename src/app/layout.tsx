import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { AppLayout } from '@/components/layout/app-layout';
import { NotificationProvider } from '@/components/shared/notifications';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TakiPilot',
  description: 'Developer-focused SaaS platform.',
  icons: [{ rel: 'icon', type: 'image/svg+xml', url: '/favicon.svg' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <NotificationProvider>
            <AppLayout>{children}</AppLayout>
          </NotificationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
