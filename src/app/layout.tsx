import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'カフェサイトン２５',
  description: '都市の喧騒を忘れるモダンな隠れ家',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-[#FFFFFF] text-[#333333]`}>
        {children}
      </body>
    </html>
  );
}