import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: '#080a0f',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'NexPro Cloud — Unified Distributed Edge Platform',
    template: '%s | NexPro Cloud',
  },
  description:
    'High-velocity distributed cloud runtime for modern software teams. Sub-millisecond cold starts, active-active state sync, and native AI workflows.',
  keywords: [
    'cloud runtime',
    'edge compute',
    'serverless',
    'microservices',
    'zero cold starts',
    'distributed caching',
    'AI agent orchestration',
    'Next.js cloud',
  ],
  authors: [{ name: 'NexPro Engineering Team' }],
  creator: 'NexPro Cloud Technologies',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexpro.cloud',
    title: 'NexPro Cloud — Unified Distributed Edge Platform',
    description:
      'High-velocity distributed cloud runtime for modern software teams. Sub-millisecond cold starts, active-active state sync, and native AI workflows.',
    siteName: 'NexPro Cloud',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexPro Cloud — Unified Distributed Edge Platform',
    description:
      'High-velocity distributed cloud runtime for modern software teams. Sub-millisecond cold starts, active-active state sync, and native AI workflows.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#080a0f] text-slate-100 flex flex-col selection:bg-indigo-600 selection:text-white">
        <Navbar />
        <div className="flex-1 flex flex-col pt-4">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
