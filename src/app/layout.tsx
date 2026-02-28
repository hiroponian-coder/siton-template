import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'カフェサイトン29 | 都市の喧騒を忘れるモダンな休息地',
  description: 'カフェサイトン29の公式ウェブサイトです。洗練された空間で、厳選されたコーヒーとともに贅沢な時間をお過ごしください。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}