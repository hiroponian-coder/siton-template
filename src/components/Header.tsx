import Link from 'next/link';
import { Instagram, Menu, MapPin, Link as LinkIcon } from 'lucide-react';
import { Profile } from '@/types/profile';

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="sticky top-0 z-50 bg-[#FDFDFD]/80 backdrop-blur-md border-b border-[#2D2424]/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-[#2D2424]">
          {profile.store_name?.toUpperCase()}
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className="hover:text-[#C5A059] transition-colors">HOME</Link>
          {profile.menu_items && <Link href="/menu" className="hover:text-[#C5A059] transition-colors">MENU</Link>}
          <Link href="/about" className="hover:text-[#C5A059] transition-colors">ABOUT</Link>
        </nav>

        <div className="flex items-center space-x-4">
          {profile.instagram_id && (
            <a 
              href={`https://instagram.com/${profile.instagram_id}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#2D2424] hover:text-[#C5A059] transition-colors"
            >
              <Instagram size={20} />
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