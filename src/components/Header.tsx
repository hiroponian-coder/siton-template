import Link from 'next/link';
import { Profile } from '@/types/profile';
import { Instagram, Twitter, MessageCircle, Menu, Link as LinkIcon } from 'lucide-react';

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FDFDFD]/90 backdrop-blur-md border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-[#1A1A1A]">
          {profile.store_name || 'Cafe Saiton 16'}
        </Link>

        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium text-[#2D2D2D]">
          <Link href="/" className="hover:text-[#C5A059] transition-colors">HOME</Link>
          {profile.menu_items && <Link href="/menu" className="hover:text-[#C5A059] transition-colors">MENU</Link>}
          <Link href="/access" className="hover:text-[#C5A059] transition-colors">ACCESS</Link>
        </nav>

        <div className="flex items-center space-x-4">
          {profile.instagram_id && (
            <a href={`https://instagram.com/${profile.instagram_id}`} target="_blank" className="text-[#1A1A1A] hover:text-[#C5A059] transition-colors">
              <Instagram size={20} />
            </a>
          )}
          {profile.x_id && (
            <a href={`https://twitter.com/${profile.x_id}`} target="_blank" className="text-[#1A1A1A] hover:text-[#C5A059] transition-colors">
              <Twitter size={20} />
            </a>
          )}
          {profile.line_id && (
            <a href={`https://line.me/R/ti/p/${profile.line_id}`} target="_blank" className="text-[#1A1A1A] hover:text-[#C5A059] transition-colors">
              <MessageCircle size={20} />
            </a>
          )}
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}