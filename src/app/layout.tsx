import './globals.css';
import { Inter, Noto_Serif_JP } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoSerif = Noto_Serif_JP({ 
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-noto-serif'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSerif.variable}`}>
      <body className="bg-[#F9F9F9] text-[#1A1A1A] font-sans">{children}</body>
    </html>
  );
}