import { Instagram, Send, Twitter, Menu, Link as LinkIcon } from 'lucide-react'
import Link from 'next/link';
import { Profile } from '@/types/profile';

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#2C3E50]/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-[#2C3E50]">
          {profile.store_name || 'Cafe'}
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#2C3E50]">
          <Link href="/" className="hover:text-[#D4A373] transition-colors">HOME</Link>
          {profile.menu_items && <Link href="/menu" className="hover:text-[#D4A373] transition-colors">MENU</Link>}
          <Link href="/access" className="hover:text-[#D4A373] transition-colors">ACCESS</Link>
        </nav>

        <div className="flex items-center space-x-4">
          {profile.instagram_id && (
            <a href={`https://instagram.com/${profile.instagram_id}`} target="_blank" rel="noopener noreferrer" className="text-[#2C3E50] hover:text-[#D4A373]">
              <Instagram size={20} />
            </a>
          )}
          {profile.line_id && (
            <a href={`https://line.me/R/ti/p/${profile.line_id}`} target="_blank" rel="noopener noreferrer" className="text-[#2C3E50] hover:text-[#D4A373]">
              <Send size={20} />
            </a>
          )}
          <button className="md:hidden text-[#2C3E50]">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}