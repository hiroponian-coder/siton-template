import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agent 3 Error Injection Test',
  description: 'Buggy IT Test environment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#000000] text-[#33FF00] min-h-screen flex flex-col font-mono selection:bg-[#E50914] selection:text-[#FFFF00]">
        {children}
      </body>
    </html>
  );
}