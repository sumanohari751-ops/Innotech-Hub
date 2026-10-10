import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import { AuthProvider } from '@/lib/auth-context';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-interface', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-editorial', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono-label', display: 'swap' });

export const metadata: Metadata = {
  title: 'InnoTech-Hub — Software for the Next Generation of Institutions',
  description:
    'InnoTech-Hub develops connected SaaS solutions that simplify institutional operations, strengthen team execution and enable verifiable participation across education and technology communities.',
  keywords: ['InnoTech-Hub', 'ITH', 'SaaS', 'EdTech', 'Institutional Software', 'Faculty Operations', 'Task Manager', 'Verified Participation'],
  openGraph: {
    title: 'InnoTech-Hub — Software for the Next Generation of Institutions',
    description: 'Connected SaaS solutions for institutions, faculty, and student communities.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} ${jetbrainsMono.variable}`}>
      <body className="font-interface antialiased bg-ith-ivory text-ith-charcoal">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
