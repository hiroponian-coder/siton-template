import { Profile } from '@/types/profile';
import { Instagram, Twitter, MessageCircle, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="bg-[#FAFAFA] border-t border-[#1A1A1A]/5 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">{profile.store_name}</h3>
            <p className="text-[#2D2D2D]/60 max-w-xs leading-relaxed">
              {profile.industry === 'カフェ' ? '特別な一杯、静かな空間。都会で最も洗練された体験を。' : '私たちのサービスで日常を豊かに。'}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[#1A1A1A] mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[#2D2D2D]/60 hover:text-[#D4A373]">Home</Link></li>
              {profile.menu_items && <li><Link href="/menu" className="text-[#2D2D2D]/60 hover:text-[#D4A373]">Menu</Link></li>}
              <li><Link href="/access" className="text-[#2D2D2D]/60 hover:text-[#D4A373]">Access</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#1A1A1A] mb-4">Connect</h4>
            <div className="flex space-x-4">
              {profile.instagram_id && (
                <a href={`https://instagram.com/${profile.instagram_id}`} className="w-10 h-10 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center text-[#1A1A1A] hover:bg-[#D4A373] hover:text-white hover:border-[#D4A373] transition-all">
                  <Instagram size={18} />
                </a>
              )}
              {profile.line_id && (
                <a href={`https://line.me/R/ti/p/${profile.line_id}`} className="w-10 h-10 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center text-[#1A1A1A] hover:bg-[#D4A373] hover:text-white hover:border-[#D4A373] transition-all">
                  <MessageCircle size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-[#1A1A1A]/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#2D2D2D]/40">© 2024 {profile.store_name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}