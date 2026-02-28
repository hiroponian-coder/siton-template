import { Instagram, MessageCircle, Menu as MenuIcon, Coffee, Link as LinkIcon } from 'lucide-react'
import Link from 'next/link';
import { Profile } from '@/types/profile';

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#F9F7F2]/80 backdrop-blur-md border-b border-[#2C3E50]/10">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Coffee className="w-6 h-6 text-[#D4AF37]" />
          <span className="text-xl font-bold tracking-tighter text-[#2C3E50] uppercase">
            {profile.store_name || 'Cafe'}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2C3E50]">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors">HOME</Link>
          {profile.menu_items && <Link href="/menu" className="hover:text-[#D4AF37] transition-colors">MENU</Link>}
          <Link href="/reservation" className="hover:text-[#D4AF37] transition-colors">RESERVATION</Link>
        </nav>

        <div className="flex items-center gap-4">
          {profile.instagram_id && (
            <a href={`https://instagram.com/${profile.instagram_id}`} target="_blank" rel="noreferrer" className="p-2 hover:bg-[#D4AF37]/10 rounded-full transition-colors">
              <Instagram className="w-5 h-5 text-[#2C3E50]" />
            </a>
          )}
          {profile.line_id && (
            <a href={`https://line.me/ti/p/${profile.line_id}`} target="_blank" rel="noreferrer" className="p-2 hover:bg-[#D4AF37]/10 rounded-full transition-colors">
              <MessageCircle className="w-5 h-5 text-[#2C3E50]" />
            </a>
          )}
          <button className="md:hidden p-2">
            <MenuIcon className="w-6 h-6 text-[#2C3E50]" />
          </button>
        </div>
      </div>
    </header>
  );
}