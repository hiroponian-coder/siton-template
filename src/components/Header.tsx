import Link from 'next/link';
import { Profile } from '@/types/profile';
import { Menu, Coffee, Link as LinkIcon } from 'lucide-react';

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f8f9fa]/80 backdrop-blur-md border-b border-[#1a1a1a]/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-[#1a1a1a] p-1.5 rounded">
            <Coffee className="w-6 h-6 text-[#d4a373]" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#1a1a1a] group-hover:text-[#d4a373] transition-colors">
            {profile.store_name || 'Cafe'}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-sm font-medium text-[#2d2d2d] hover:text-[#d4a373] transition-colors">Home</Link>
          {profile.menu_items && (
            <Link href="/menu" className="text-sm font-medium text-[#2d2d2d] hover:text-[#d4a373] transition-colors">Menu</Link>
          )}
          <Link href="/about" className="text-sm font-medium text-[#2d2d2d] hover:text-[#d4a373] transition-colors">About</Link>
          <Link href="/contact" className="text-sm font-medium text-[#2d2d2d] hover:text-[#d4a373] transition-colors">Contact</Link>
        </nav>

        <button className="md:hidden p-2 text-[#1a1a1a]">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}