import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'カフェサイトン23 | 洗練された空間で、特別な一杯を',
  description: '都会の喧騒を離れ、23時の静寂を昼下がりに。カフェサイトン23は、モダンなデザインと厳選されたコーヒーを提供します。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${playfair.variable} font-sans text-[#1A1A1A]`}>
        {children}
      </body>
    </html>
  );
}