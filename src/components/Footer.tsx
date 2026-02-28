import { Link as LinkIcon } from 'lucide-react'
import { Profile } from '@/types/profile';
import Link from 'next/link';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="bg-white py-16 text-[#1A1A1A]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              {profile.store_name?.toUpperCase() || 'CAFE'}
            </Link>
            <p className="mt-2 text-sm text-gray-500 italic">Built for comfort, crafted for taste.</p>
          </div>
          
          <div className="flex space-x-12 text-xs font-bold uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-[#A67C52]">Instagram</Link>
            <Link href="#" className="hover:text-[#A67C52]">Legal</Link>
            <Link href="#" className="hover:text-[#A67C52]">Privacy</Link>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-100 pt-8 text-center text-[10px] font-medium uppercase tracking-widest text-gray-400">
          © {new Date().getFullYear()} {profile.store_name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}