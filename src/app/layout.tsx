import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'カフェサイトン | 心温まるシカ焙煎コーヒー',
  description: '自慢の「シカ焙煎コーヒー」と温もりあふれる空間を提供するカフェサイトンの公式サイトです。こだわりの一杯で、ほっとするひとときをお過ごしください。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-[#FDFBF7] text-[#2C1E16] antialiased`}>
        {children}
      </body>
    </html>
  );
}