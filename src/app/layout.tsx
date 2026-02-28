import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'カフェサイトン | Cafe Saiton',
  description: '洗練された空間で、至高の一杯を。',
};

export default function RootLayout({
  children,
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#FAFAFA] text-[#2C2C2C]`}>
        {children}
      </body>
    </html>
  );
}