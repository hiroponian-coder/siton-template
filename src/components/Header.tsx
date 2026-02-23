import Link from 'next/link';
import { Terminal, AlertTriangle } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b-2 border-[#E50914] bg-[#000000] p-4 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2 text-[#E50914] hover:text-[#FFFF00] transition-colors">
        <Terminal size={24} className="animate-pulse" />
        <span className="font-bold text-xl tracking-tighter uppercase">Agent_3_Test</span>
      </Link>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:text-[#FFFF00] hover:underline decoration-[#E50914] underline-offset-4 transition-all uppercase text-sm font-bold">
              [ Home ]
            </Link>
          </li>
          <li>
            <Link href="/test" className="hover:text-[#E50914] hover:underline decoration-[#FFFF00] underline-offset-4 transition-all uppercase text-sm font-bold flex items-center gap-1">
              <AlertTriangle size={16} />
              [ Error_Test ]
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}