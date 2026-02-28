import { Menu, Coffee, Clock, MapPin, Info, Link as LinkIcon } from 'lucide-react'
import React from 'react';
import Link from 'next/link';
import { Profile } from '@/types/profile';

export default function Navbar({ profile }: { profile: Profile }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-tight text-[#1F2937]">
              {profile.store_name || 'カフェサイトン２４'}
            </Link>
          </div>
          <div className="hidden md:flex space-x-10">
            <Link href="/" className="text-sm font-medium text-[#1F2937] hover:text-[#00CDB8] transition-colors">Home</Link>
            {profile.menu_items && <Link href="/menu" className="text-sm font-medium text-[#1F2937] hover:text-[#00CDB8] transition-colors">Menu</Link>}
            <Link href="/about" className="text-sm font-medium text-[#1F2937] hover:text-[#00CDB8] transition-colors">About</Link>
            {profile.address && <Link href="#access" className="text-sm font-medium text-[#1F2937] hover:text-[#00CDB8] transition-colors">Access</Link>}
          </div>
          <div className="md:hidden">
            <button className="p-2 text-gray-600">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}