import { Profile } from '@/types/profile';
import { Instagram, Twitter, MessageCircle } from 'lucide-react';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="bg-[#2D2424] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tighter mb-2">{profile.store_name?.toUpperCase()}</h2>
            <p className="text-white/40 text-sm italic">Modern Cafe Experience</p>
          </div>

          <div className="flex space-x-6">
            {profile.instagram_id && (
              <a href={`https://instagram.com/${profile.instagram_id}`} className="hover:text-[#C5A059] transition-colors">
                <Instagram size={20} />
              </a>
            )}
            {profile.x_id && (
              <a href={`https://twitter.com/${profile.x_id}`} className="hover:text-[#C5A059] transition-colors">
                <Twitter size={20} />
              </a>
            )}
            {profile.line_id && (
              <a href={`#`} className="hover:text-[#C5A059] transition-colors">
                <MessageCircle size={20} />
              </a>
            )}
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-xs tracking-widest">
          &copy; {new Date().getFullYear()} {profile.store_name}. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}