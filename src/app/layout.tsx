import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'カフェサイトン3 - モダンな空間で楽しむ究極の一杯',
  description: '洗練されたデザインと厳選された豆で提供するスペシャリティコーヒー。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-[#FAFAFA] text-[#2D3436]`}>
        {children}
      </body>
    </html>
  );
}