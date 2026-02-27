import Link from 'next/link';
import { Profile } from '@/types/profile';
import { Menu as MenuIcon, Instagram, Twitter, Link as LinkIcon } from 'lucide-react';

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAFAF9]/80 backdrop-blur-md border-b border-[#262626]/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter text-[#262626]">
          {profile.store_name || 'Cafe'}
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#1C1917]">
          <Link href="/" className="hover:text-[#B45309] transition-colors">Home</Link>
          {profile.menu_items && <Link href="/menu" className="hover:text-[#B45309] transition-colors">Menu</Link>}
          <Link href="/access" className="hover:text-[#B45309] transition-colors">Access</Link>
        </nav>

        <div className="flex items-center space-x-4">
          {profile.instagram_id && (
            <Link href={`https://instagram.com/${profile.instagram_id}`} target="_blank" className="text-[#262626] hover:text-[#B45309]">
              <Instagram size={20} />
            </Link>
          )}
          {profile.x_id && (
            <Link href={`https://twitter.com/${profile.x_id}`} target="_blank" className="text-[#262626] hover:text-[#B45309]">
              <Twitter size={20} />
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