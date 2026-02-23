import Link from 'next/link';
import { Bug, Terminal, ShieldAlert } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b border-[#ff0033]/30 bg-[#000000]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Bug className="w-8 h-8 text-[#ff0033] animate-pulse" />
            <Link href="/" className="text-xl font-bold tracking-widest text-[#cccccc] hover:text-[#00ff66] transition-colors">
              ERROR_TEST
            </Link>
          </div>
          <nav className="flex space-x-8">
            <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-[#00ff66] transition-colors">
              <Terminal className="w-4 h-4" />
              INIT
            </Link>
            <Link href="/trigger" className="flex items-center gap-2 text-sm font-medium hover:text-[#ff0033] transition-colors">
              <ShieldAlert className="w-4 h-4" />
              TRIGGER
            </Link>
            <Link href="/fatal-crash" className="flex items-center gap-2 text-sm font-medium text-[#ff0033] hover:text-[#cccccc] transition-colors">
              FATAL
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
