import Link from 'next/link';
import { Profile } from '@/types/profile';
import { Coffee, Menu, MapPin, Instagram, Twitter, Link as LinkIcon } from 'lucide-react';

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#FAFAFA]/90 backdrop-blur-sm border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tighter text-[#1A1A1A]">
              {profile.store_name || 'Cafe Site'}
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-[#2D2D2D] hover:text-[#D4A373] transition-colors text-sm font-medium">Home</Link>
            {profile.menu_items && (
              <Link href="/menu" className="text-[#2D2D2D] hover:text-[#D4A373] transition-colors text-sm font-medium">Menu</Link>
            )}
            <Link href="/access" className="text-[#2D2D2D] hover:text-[#D4A373] transition-colors text-sm font-medium">Access</Link>
          </nav>
          <div className="flex items-center space-x-4">
            {profile.instagram_id && (
              <a href={`https://instagram.com/${profile.instagram_id}`} target="_blank" rel="noopener noreferrer" className="text-[#2D2D2D] hover:text-[#D4A373]">
                <Instagram size={18} />
              </a>
            )}
            {profile.x_id && (
              <a href={`https://twitter.com/${profile.x_id}`} target="_blank" rel="noopener noreferrer" className="text-[#2D2D2D] hover:text-[#D4A373]">
                <Twitter size={18} />
              </a>
            )}
            <button className="md:hidden text-[#1A1A1A]">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}