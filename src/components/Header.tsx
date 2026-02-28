import { Instagram, Twitter, MessageCircle, Menu, Link as LinkIcon } from 'lucide-react'
import Link from 'next/link';
import { Profile } from '@/types/profile';

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#F8FAFC]/80 backdrop-blur-md border-b border-[#1E293B]/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#0F172A] hover:opacity-80 transition-opacity">
          {profile.store_name || 'Cafe'}
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#1E293B]">
          <Link href="/" className="hover:text-[#B45309] transition-colors">HOME</Link>
          {profile.menu_items && <Link href="/menu" className="hover:text-[#B45309] transition-colors">MENU</Link>}
          <Link href="/access" className="hover:text-[#B45309] transition-colors">ACCESS</Link>
        </nav>

        <div className="flex items-center space-x-4">
          {profile.instagram_id && (
            <a href={`https://instagram.com/${profile.instagram_id}`} target="_blank" rel="noopener noreferrer" className="text-[#1E293B] hover:text-[#B45309]">
              <Instagram size={20} />
            </a>
          )}
          {profile.x_id && (
            <a href={`https://twitter.com/${profile.x_id}`} target="_blank" rel="noopener noreferrer" className="text-[#1E293B] hover:text-[#B45309]">
              <Twitter size={20} />
            </a>
          )}
          {profile.line_id && (
            <a href={`https://line.me/ti/p/${profile.line_id}`} target="_blank" rel="noopener noreferrer" className="text-[#1E293B] hover:text-[#B45309]">
              <MessageCircle size={20} />
            </a>
          )}
          <button className="md:hidden p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}