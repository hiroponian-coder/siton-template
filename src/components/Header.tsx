import { Instagram, Menu as MenuIcon, Coffee, Link as LinkIcon } from 'lucide-react'
import Link from 'next/link';
import { Profile } from '@/types/profile';

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#FDFDFD]/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Coffee className="w-6 h-6 text-[#C5A059]" />
          <span className="text-xl font-bold tracking-tighter text-[#1A1A1A]">
            {profile.store_name || 'Cafe Saiton'}
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className="hover:text-[#C5A059] transition-colors">HOME</Link>
          <Link href="/menu" className="hover:text-[#C5A059] transition-colors">MENU</Link>
          {profile.instagram_id && (
            <a 
              href={`https://instagram.com/${profile.instagram_id}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#2D2D2D] hover:text-[#C5A059] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          )}
        </nav>

        <button className="md:hidden p-2">
          <MenuIcon className="w-6 h-6 text-[#1A1A1A]" />
        </button>
      </div>
    </header>
  );
}