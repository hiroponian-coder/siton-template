import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'カフェサイトン１８ | 洗練された空間で味わう至福の一杯',
  description: '都会の喧騒を忘れ、モダンなインテリアに囲まれながら、厳選された豆を使用したコーヒーと季節のスイーツを楽しめるカフェサイトン１８の公式ウェブサイトです。',
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