import { Profile } from '@/types/profile';
import Link from 'next/link';
import { Coffee, Instagram, Twitter, MessageCircle } from 'lucide-react';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="bg-[#2C1E16] text-[#FDFBF7]/80 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <Link href="/" className="flex items-center gap-2 text-white mb-6">
            <Coffee className="w-6 h-6 text-[#D47A55]" />
            <span className="font-bold text-xl">{profile.store_name || 'Cafe Sighton'}</span>
          </Link>
          {profile.design_atmosphere && (
            <p className="text-sm leading-relaxed max-w-xs">
              {profile.design_atmosphere.slice(0, 100)}{profile.design_atmosphere.length > 100 ? '...' : ''}
            </p>
          )}
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Explore</h3>
          <ul className="space-y-4">
            <li><Link href="/" className="hover:text-[#D47A55] transition-colors">Home</Link></li>
            <li><Link href="/menu" className="hover:text-[#D47A55] transition-colors">Menu</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Connect</h3>
          <div className="flex gap-4 mb-6">
            {profile.instagram_id && (
              <a href={`https://instagram.com/${profile.instagram_id}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#D47A55] hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            )}
            {profile.x_id && (
              <a href={`https://twitter.com/${profile.x_id}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#D47A55] hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {profile.line_id && (
              <a href={`https://line.me/R/ti/p/@${profile.line_id}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#D47A55] hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            )}
          </div>
          {profile.contact_method && (
            <div className="text-sm">
              <span className="block text-white/50 mb-1">Contact</span>
              {profile.contact_method}
            </div>
          )}
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-sm text-white/50">
        &copy; {new Date().getFullYear()} {profile.store_name || 'Cafe Sighton'}. All rights reserved.
      </div>
    </footer>
  );
}