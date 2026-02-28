import { Instagram, Send, Twitter, Coffee } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="bg-[#2C3E50] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="text-[#D4A373]" size={28} />
              <span className="text-2xl font-bold tracking-tight">{profile.store_name}</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              洗練された空間と厳選された豆で提供するこだわりのコーヒーを。あなたの日常に特別な彩りを添えます。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#D4A373]">Information</h3>
            <ul className="space-y-4 text-white/80">
              {profile.address && <li>Address: {profile.address}</li>}
              {profile.business_hours && <li>Hours: {profile.business_hours}</li>}
              {profile.contact_method && <li>Contact: {profile.contact_method}</li>}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#D4A373]">Social</h3>
            <div className="flex space-x-6">
              {profile.instagram_id && (
                <a href={`https://instagram.com/${profile.instagram_id}`} className="hover:text-[#D4A373] transition-colors">
                  <Instagram size={24} />
                </a>
              )}
              {profile.x_id && (
                <a href={`https://x.com/${profile.x_id}`} className="hover:text-[#D4A373] transition-colors">
                  <Twitter size={24} />
                </a>
              )}
              {profile.line_id && (
                <a href={`https://line.me/R/ti/p/${profile.line_id}`} className="hover:text-[#D4A373] transition-colors">
                  <Send size={24} />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} {profile.store_name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}