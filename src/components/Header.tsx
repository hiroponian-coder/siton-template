import Link from 'next/link';
import { Profile } from '@/types/profile';
import { Instagram, Twitter, MessageCircle, Menu, Link as LinkIcon } from 'lucide-react';

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-[#111827]">
              {profile.store_name || 'Cafe'}
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-sm font-medium text-[#4B5563] hover:text-[#C2410C] transition-colors">HOME</Link>
            {profile.menu_items && <Link href="/menu" className="text-sm font-medium text-[#4B5563] hover:text-[#C2410C] transition-colors">MENU</Link>}
            <Link href="/reservation" className="text-sm font-medium text-[#4B5563] hover:text-[#C2410C] transition-colors">RESERVATION</Link>
            <div className="flex items-center space-x-4 ml-4 border-l pl-8">
              {profile.instagram_id && (
                <a href={`https://instagram.com/${profile.instagram_id}`} target="_blank" rel="noreferrer" className="text-[#4B5563] hover:text-[#C2410C]">
                  <Instagram size={18} />
                </a>
              )}
              {profile.x_id && (
                <a href={`https://twitter.com/${profile.x_id}`} target="_blank" rel="noreferrer" className="text-[#4B5563] hover:text-[#C2410C]">
                  <Twitter size={18} />
                </a>
              )}
            </div>
          </nav>
          <div className="md:hidden">
            <button className="text-[#111827]">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}