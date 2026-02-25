import { Profile } from '@/types/profile';
import { Instagram, Twitter, MessageCircle } from 'lucide-react';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="bg-[#FAFAFA] border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-20">
          <div className="mb-12 md:mb-0">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">{profile.store_name}</h2>
            <div className="flex space-x-6">
              {profile.instagram_id && (
                <a href={`https://instagram.com/${profile.instagram_id}`} className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  <Instagram size={24} />
                </a>
              )}
              {profile.x_id && (
                <a href={`https://twitter.com/${profile.x_id}`} className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  <Twitter size={24} />
                </a>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-16">
            <div>
              <p className="font-bold mb-6 tracking-widest text-xs uppercase">Explore</p>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="/" className="hover:text-[#D4AF37]">Home</a></li>
                <li><a href="/menu" className="hover:text-[#D4AF37]">Menu</a></li>
                <li><a href="/about" className="hover:text-[#D4AF37]">Our Story</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-6 tracking-widest text-xs uppercase">Official</p>
              <ul className="space-y-4 text-sm text-gray-500">
                {profile.line_id && <li><a href="#" className="hover:text-[#D4AF37]">LINE Official</a></li>}
                <li><a href="#" className="hover:text-[#D4AF37]">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#D4AF37]">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-10 text-center text-xs text-gray-400 tracking-widest">
          &copy; {new Date().getFullYear()} {profile.store_name}. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}