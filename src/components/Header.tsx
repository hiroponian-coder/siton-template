import { Menu as MenuIcon, Coffee, Link as LinkIcon } from 'lucide-react'
import Link from 'next/link';
import { Profile } from '@/types/profile';

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#FFFFFF]/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-[#1B2E35] p-2 rounded-lg group-hover:bg-[#C9A050] transition-colors">
            <Coffee className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#1B2E35]">
            {profile.store_name || 'Cafe Saitan 25'}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-sm font-medium hover:text-[#C9A050] transition-colors uppercase tracking-widest">Home</Link>
          {profile.menu_items && <Link href="/menu" className="text-sm font-medium hover:text-[#C9A050] transition-colors uppercase tracking-widest">Menu</Link>}
          <Link href="/contact" className="text-sm font-medium hover:text-[#C9A050] transition-colors uppercase tracking-widest">Contact</Link>
        </nav>

        <div className="md:hidden">
          <MenuIcon className="w-6 h-6 text-[#1B2E35]" />
        </div>
      </div>
    </header>
  );
}