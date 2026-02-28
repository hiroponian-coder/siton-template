import Link from 'next/link';
import { Profile } from '@/types/profile';
import { Menu as MenuIcon, Instagram, Send, X, Link as LinkIcon } from 'lucide-react';

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-[#1a1a1a]">
          {profile.store_name || 'Cafe Sitton 18'}
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className="hover:text-[#c5a059] transition-colors">HOME</Link>
          {profile.menu_items && <Link href="/menu" className="hover:text-[#c5a059] transition-colors">MENU</Link>}
          <Link href="/access" className="hover:text-[#c5a059] transition-colors">ACCESS</Link>
          <div className="flex items-center space-x-4 pl-4 border-l border-gray-200">
            {profile.instagram_id && (
              <a href={`https://instagram.com/${profile.instagram_id}`} target="_blank" rel="noopener noreferrer">
                <Instagram size={20} className="hover:text-[#c5a059] transition-colors" />
              </a>
            )}
            {profile.line_id && (
              <a href={`https://line.me/ti/p/${profile.line_id}`} target="_blank" rel="noopener noreferrer">
                <Send size={20} className="hover:text-[#c5a059] transition-colors" />
              </a>
            )}
          </div>
        </nav>

        <button className="md:hidden p-2">
          <MenuIcon size={24} />
        </button>
      </div>
    </header>
  );
}