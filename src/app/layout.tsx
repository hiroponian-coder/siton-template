import './globals.css';
import { Inter, Noto_Sans_JP } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const noto = Noto_Sans_JP({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-noto' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${noto.variable} font-noto bg-white text-[#333333]`}>
        {children}
      </body>
    </html>
  );
}