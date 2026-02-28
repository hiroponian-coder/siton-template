import React from 'react';
import Link from 'next/link';
import { Menu as MenuIcon, Coffee, MapPin, Info, Link as LinkIcon } from 'lucide-react';
import { Profile } from '@/types/profile';

export default function Navigation({ profile }: { profile: Profile }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F9FAFB]/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-[#111827]">
              {profile.store_name || 'Cafe'}
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-[#1F2937] hover:text-[#8B5CF6] transition-colors font-medium">Home</Link>
              {profile.menu_items && <Link href="/menu" className="text-[#1F2937] hover:text-[#8B5CF6] transition-colors font-medium">Menu</Link>}
              <Link href="/access" className="text-[#1F2937] hover:text-[#8B5CF6] transition-colors font-medium">Access</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button className="p-2 rounded-md text-[#1F2937]">
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}