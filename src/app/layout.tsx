import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'カフェサイトン | 手作りケーキが自慢のポップなカフェ',
  description: '手作りケーキとポップな空間が自慢のカフェ「カフェサイトン」。あなたのお気に入りのケーキを見つけに来ませんか？',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-[#FFF9F5] text-[#3E2723]`}>{children}</body>
    </html>
  );
}