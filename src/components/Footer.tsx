import { Profile } from '@/types/profile';
import { Instagram, Twitter, MessageCircle } from 'lucide-react';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="bg-[#111827] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-tighter">{profile.store_name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {profile.industry} as lifestyle. We provide meaningful moments with exceptional coffee and space.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              {profile.menu_items && <li><a href="/menu" className="hover:text-white">Menu</a></li>}
              <li><a href="/reservation" className="hover:text-white">Reservation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-6">Connect</h4>
            <div className="flex space-x-6 text-gray-400">
              {profile.instagram_id && (
                <a href={`https://instagram.com/${profile.instagram_id}`} className="hover:text-white">
                  <Instagram size={20} />
                </a>
              )}
              {profile.x_id && (
                <a href={`https://twitter.com/${profile.x_id}`} className="hover:text-white">
                  <Twitter size={20} />
                </a>
              )}
              {profile.line_id && (
                <a href={`https://line.me/ti/p/${profile.line_id}`} className="hover:text-white">
                  <MessageCircle size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {profile.store_name}. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed for Modern Aesthetics</p>
        </div>
      </div>
    </footer>
  );
}