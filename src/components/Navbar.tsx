import Link from 'next/link';
import { Profile } from '@/types/profile';
import { Instagram, Twitter, MessageCircle } from 'lucide-react';

export default function Navbar({ profile }: { profile: Profile }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-[#1A1A1A]">
          {profile.store_name?.toUpperCase() || 'CAFE SITEON'}
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-widest">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors">HOME</Link>
          <Link href="/menu" className="hover:text-[#D4AF37] transition-colors">MENU</Link>
          <Link href="/about" className="hover:text-[#D4AF37] transition-colors">ABOUT</Link>
        </div>

        <div className="flex items-center space-x-4">
          {profile.instagram_id && (
            <a href={`https://instagram.com/${profile.instagram_id}`} target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A] hover:text-[#D4AF37]">
              <Instagram size={20} />
            </a>
          )}
          {profile.x_id && (
            <a href={`https://twitter.com/${profile.x_id}`} target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A] hover:text-[#D4AF37]">
              <Twitter size={20} />
            </a>
          )}
          {profile.line_id && (
            <Link href="/" className="bg-[#1A1A1A] text-white px-5 py-2 text-xs tracking-widest hover:bg-[#D4AF37] transition-all">
              RESERVE
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}