import Link from 'next/link';
import { Profile } from '@/types/profile';
import { Instagram, Twitter, MessageCircle, Menu as MenuIcon, Link as LinkIcon } from 'lucide-react';

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#FFFFFF]/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-[#1A1A1A]">
          {profile.store_name || 'Cafe Sighton 19'}
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
          <Link href="/" className="hover:text-[#C4A484] transition-colors">Home</Link>
          {profile.menu_items && <Link href="/menu" className="hover:text-[#C4A484] transition-colors">Menu</Link>}
          <Link href="/about" className="hover:text-[#C4A484] transition-colors">About</Link>
        </nav>

        <div className="flex items-center space-x-4">
          {profile.instagram_id && (
            <Link href={`https://instagram.com/${profile.instagram_id}`} target="_blank" className="text-[#333333] hover:text-[#C4A484] transition-colors">
              <Instagram size={20} />
            </Link>
          )}
          {profile.x_id && (
            <Link href={`https://twitter.com/${profile.x_id}`} target="_blank" className="text-[#333333] hover:text-[#C4A484] transition-colors">
              <Twitter size={20} />
            </Link>
          )}
          {profile.line_id && (
            <Link href={`https://line.me/ti/p/${profile.line_id}`} target="_blank" className="text-[#333333] hover:text-[#C4A484] transition-colors">
              <MessageCircle size={20} />
            </Link>
          )}
          <button className="md:hidden">
            <MenuIcon size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}