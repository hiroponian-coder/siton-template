import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'カフェサイトン13 | モダンな隠れ家カフェ',
  description: '洗練された空間で楽しむ極上のコーヒータイム',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-[#FAFAF9] text-[#1C1917] antialiased`}>
        {children}
      </body>
    </html>
  );
}