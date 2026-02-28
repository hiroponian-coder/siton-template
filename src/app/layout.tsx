import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'カフェサイトン２１ | 都市の静寂と、洗練された一杯を。',
  description: 'モダンな空間で味わう本格コーヒー。カフェサイトン２１は、あなたの日常に上質な休息を提供します。',
};

export default function RootLayout({
  children,
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-[#FDFDFD] text-[#2D2D2D]`}>{children}</body>
    </html>
  );
}