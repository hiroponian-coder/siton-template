import { Instagram, MessageCircle, Twitter, Menu, Link as LinkIcon } from 'lucide-react'
import { Profile } from '@/types/profile';
import Link from 'next/link';

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tighter text-[#2D2D2D] md:text-2xl">
          {profile.store_name?.toUpperCase() || 'CAFE'}
        </Link>

        <nav className="hidden space-x-8 text-sm font-medium uppercase tracking-widest md:flex">
          {profile.menu_items && <Link href="#menu" className="hover:text-[#A67C52] transition-colors">Menu</Link>}
          <Link href="#access" className="hover:text-[#A67C52] transition-colors">Access</Link>
          <Link href="#contact" className="hover:text-[#A67C52] transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center space-x-4">
          {profile.instagram_id && (
            <a href={`https://instagram.com/${profile.instagram_id}`} target="_blank" rel="noopener noreferrer" className="text-[#2D2D2D] hover:text-[#A67C52]">
              <Instagram size={20} />
            </a>
          )}
          {profile.x_id && (
            <a href={`https://twitter.com/${profile.x_id}`} target="_blank" rel="noopener noreferrer" className="text-[#2D2D2D] hover:text-[#A67C52]">
              <Twitter size={20} />
            </a>
          )}
          {profile.line_id && (
            <a href={`https://line.me/R/ti/p/@${profile.line_id}`} target="_blank" rel="noopener noreferrer" className="text-[#2D2D2D] hover:text-[#A67C52]">
              <MessageCircle size={20} />
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