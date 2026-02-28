import { Instagram, MessageCircle, Twitter } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="bg-[#1A1A1A] text-[#F9F7F2]/60 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 border-t border-[#F9F7F2]/10 pt-16">
        <div>
          <h3 className="text-[#F9F7F2] text-xl font-bold mb-6 tracking-tighter">{profile.store_name}</h3>
          <p className="text-sm leading-relaxed max-w-xs">
            {profile.store_strengths || 'Sophisticated cafe for your modern lifestyle.'}
          </p>
        </div>
        
        <div>
          <h4 className="text-[#F9F7F2] text-xs font-bold uppercase tracking-[0.3em] mb-6">Connect</h4>
          <div className="flex gap-6">
            {profile.instagram_id && (
              <a href={`https://instagram.com/${profile.instagram_id}`} className="hover:text-[#D4AF37] transition-colors"><Instagram className="w-5 h-5" /></a>
            )}
            {profile.line_id && (
              <a href={`https://line.me/ti/p/${profile.line_id}`} className="hover:text-[#D4AF37] transition-colors"><MessageCircle className="w-5 h-5" /></a>
            )}
            {profile.x_id && (
              <a href={`https://x.com/${profile.x_id}`} className="hover:text-[#D4AF37] transition-colors"><Twitter className="w-5 h-5" /></a>
            )}
          </div>
        </div>

        <div className="text-right">
          <p className="text-xs tracking-widest font-light">
            &copy; {new Date().getFullYear()} {profile.store_name}. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}