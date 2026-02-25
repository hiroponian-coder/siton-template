import Link from 'next/link';
import { Profile } from '@/types/profile';
import { Coffee, Instagram, Twitter, MessageCircle } from 'lucide-react';

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#4A332D]/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-[#4A332D] hover:opacity-80 transition-opacity">
          <Coffee className="w-6 h-6" />
          <span className="font-bold text-lg tracking-wider">{profile.store_name || 'Cafe Sighton'}</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-[#D47A55] transition-colors">Home</Link>
          <Link href="/menu" className="hover:text-[#D47A55] transition-colors">Menu</Link>
        </nav>

        <div className="flex items-center gap-4">
          {profile.instagram_id && (
            <a href={`https://instagram.com/${profile.instagram_id}`} target="_blank" rel="noopener noreferrer" className="text-[#4A332D] hover:text-[#D47A55] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          )}
          {profile.x_id && (
            <a href={`https://twitter.com/${profile.x_id}`} target="_blank" rel="noopener noreferrer" className="text-[#4A332D] hover:text-[#D47A55] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          )}
          {profile.line_id && (
            <a href={`https://line.me/R/ti/p/@${profile.line_id}`} target="_blank" rel="noopener noreferrer" className="text-[#4A332D] hover:text-[#D47A55] transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </header>
  );
}