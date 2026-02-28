import { Instagram, Twitter, MessageCircle, Menu as MenuIcon, Link as LinkIcon } from 'lucide-react'
import Link from 'next/link';
import { Profile } from '@/types/profile';

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="fixed w-full z-50 bg-[#F8FAFC]/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-[#334155]">
            {profile.store_name || 'Cafe Site'}
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-[#D97706] transition-colors">HOME</Link>
            {profile.menu_items && (
              <Link href="/menu" className="text-sm font-medium hover:text-[#D97706] transition-colors">MENU</Link>
            )}
            <div className="flex items-center space-x-4 ml-4">
              {profile.instagram_id && (
                <a href={`https://instagram.com/${profile.instagram_id}`} target="_blank" rel="noopener noreferrer" className="text-[#334155] hover:text-[#D97706]">
                  <Instagram size={20} />
                </a>
              )}
              {profile.x_id && (
                <a href={`https://twitter.com/${profile.x_id}`} target="_blank" rel="noopener noreferrer" className="text-[#334155] hover:text-[#D97706]">
                  <Twitter size={20} />
                </a>
              )}
              {profile.line_id && (
                <a href={`https://line.me/R/ti/p/${profile.line_id}`} target="_blank" rel="noopener noreferrer" className="text-[#334155] hover:text-[#D97706]">
                  <MessageCircle size={20} />
                </a>
              )}
            </div>
          </nav>
          
          <button className="md:hidden p-2">
            <MenuIcon className="text-[#334155]" />
          </button>
        </div>
      </div>
    </header>
  );
}