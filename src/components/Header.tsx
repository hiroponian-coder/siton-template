import { Menu as MenuIcon, Coffee, Link as LinkIcon } from 'lucide-react'
import Link from 'next/link';
import { Profile } from '@/types/profile';

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Coffee className="w-8 h-8 text-[#B38B6D]" />
            <span className="text-2xl font-bold tracking-tighter text-[#1A1A1A]">
              {profile.store_name || 'Cafe Saiton 26'}
            </span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-sm font-medium text-[#2D2D2D] hover:text-[#B38B6D] transition-colors">HOME</Link>
            {profile.menu_items && (
              <Link href="/menu" className="text-sm font-medium text-[#2D2D2D] hover:text-[#B38B6D] transition-colors">MENU</Link>
            )}
            <Link href="/about" className="text-sm font-medium text-[#2D2D2D] hover:text-[#B38B6D] transition-colors">ABOUT & ACCESS</Link>
          </nav>

          <div className="md:hidden">
            <button className="p-2 rounded-md text-[#1A1A1A]">
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}