import Link from 'next/link';
import { Profile } from '@/types/profile';
import { Menu, Coffee, Instagram, Send, Twitter, Link as LinkIcon } from 'lucide-react';

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold tracking-tighter text-[#2d3436]">
          <Coffee className="h-8 w-8 text-[#e17055]" />
          <span>{profile.store_name}</span>
        </Link>
        
        <nav className="hidden space-x-8 md:flex">
          <Link href="/" className="text-sm font-medium text-[#2d3436] transition-colors hover:text-[#e17055]">HOME</Link>
          <Link href="/about" className="text-sm font-medium text-[#2d3436] transition-colors hover:text-[#e17055]">CONCEPT</Link>
          <Link href="/menu" className="text-sm font-medium text-[#2d3436] transition-colors hover:text-[#e17055]">MENU</Link>
        </nav>

        <div className="flex items-center space-x-4">
          {profile.instagram_id && (
            <a href={`https://instagram.com/${profile.instagram_id}`} target="_blank" rel="noopener noreferrer" className="text-[#2d3436] hover:text-[#e17055]">
              <Instagram className="h-5 w-5" />
            </a>
          )}
          {profile.x_id && (
            <a href={`https://twitter.com/${profile.x_id}`} target="_blank" rel="noopener noreferrer" className="text-[#2d3436] hover:text-[#e17055]">
              <Twitter className="h-5 w-5" />
            </a>
          )}
          {profile.line_id && (
            <a href={`https://line.me/R/ti/p/${profile.line_id}`} target="_blank" rel="noopener noreferrer" className="text-[#2d3436] hover:text-[#e17055]">
              <Send className="h-5 w-5" />
            </a>
          )}
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-[#2d3436]" />
          </button>
        </div>
      </div>
    </header>
  );
}