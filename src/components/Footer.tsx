import { Profile } from '@/types/profile';
import { Instagram, Twitter, MessageCircle, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-[#d4a373]">{profile.store_name}</h3>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              {profile.store_strengths || 'We provide the best coffee and space for your modern life.'}
            </p>
            <div className="flex gap-4">
              {profile.instagram_id && (
                <Link href={`https://instagram.com/${profile.instagram_id}`} className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a373] hover:border-[#d4a373] transition-all">
                  <Instagram className="w-5 h-5" />
                </Link>
              )}
              {profile.x_id && (
                <Link href={`https://twitter.com/${profile.x_id}`} className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a373] hover:border-[#d4a373] transition-all">
                  <Twitter className="w-5 h-5" />
                </Link>
              )}
              {profile.line_id && (
                <Link href={`#`} className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a373] hover:border-[#d4a373] transition-all">
                  <MessageCircle className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/menu" className="hover:text-white transition-colors">Menu</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {profile.address && <li>{profile.address}</li>}
              {profile.contact_method && <li>{profile.contact_method}</li>}
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {profile.store_name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}