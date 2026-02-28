import { Instagram, Twitter, MessageCircle, Coffee, Link as LinkIcon } from 'lucide-react'
import { Profile } from '@/types/profile';
import Link from 'next/link';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="bg-[#1B2E35] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-white/10 pb-12 mb-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <Coffee className="w-8 h-8 text-[#C9A050]" />
              <span className="text-2xl font-bold tracking-tight">{profile.store_name}</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              都市の喧騒を離れた隠れ家。一杯のコーヒーが、あなたの日常を少しだけ豊かにします。
            </p>
            <div className="flex gap-4">
              {profile.instagram_id && (
                <a href={`https://instagram.com/${profile.instagram_id}`} className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#C9A050] hover:border-[#C9A050] transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {profile.x_id && (
                <a href={`https://twitter.com/${profile.x_id}`} className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#C9A050] hover:border-[#C9A050] transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {profile.line_id && (
                <a href={`https://line.me/R/ti/p/@${profile.line_id}`} className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#C9A050] hover:border-[#C9A050] transition-all">
                  <MessageCircle className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-16">
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-[#C9A050] mb-6">Quick Links</h4>
              <ul className="space-y-4 text-white/60">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                {profile.menu_items && <li><Link href="/menu" className="hover:text-white transition-colors">Menu</Link></li>}
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-[#C9A050] mb-6">Info</h4>
              <ul className="space-y-4 text-white/60">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
        </div>
        
        <p className="text-center text-white/30 text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} {profile.store_name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}