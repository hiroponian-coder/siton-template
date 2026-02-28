import { Instagram, Twitter, MessageCircle, Menu as MenuIcon, Link as LinkIcon } from 'lucide-react'
import Link from 'next/link';
import { Profile } from '@/types/profile';

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-serif font-bold tracking-tighter text-[#1A1A1A]">
              {profile.store_name || 'Cafe'}
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-sm font-medium hover:text-[#C5A059] transition-colors">HOME</Link>
            {profile.menu_items && (
              <Link href="/menu" className="text-sm font-medium hover:text-[#C5A059] transition-colors">MENU</Link>
            )}
            <Link href="/reservation" className="text-sm font-medium px-4 py-2 bg-[#1A1A1A] text-white rounded-full hover:bg-[#C5A059] transition-all">
              RESERVATION
            </Link>
            <div className="flex items-center space-x-4 border-l pl-8">
              {profile.instagram_id && (
                <a href={`https://instagram.com/${profile.instagram_id}`} target="_blank" rel="noreferrer">
                  <Instagram className="w-5 h-5 text-[#2C2C2C] hover:text-[#C5A059] transition-colors" />
                </a>
              )}
              {profile.x_id && (
                <a href={`https://twitter.com/${profile.x_id}`} target="_blank" rel="noreferrer">
                  <Twitter className="w-5 h-5 text-[#2C2C2C] hover:text-[#C5A059] transition-colors" />
                </a>
              )}
            </div>
          </nav>
          <div className="md:hidden">
            <MenuIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
    </header>
  );
}