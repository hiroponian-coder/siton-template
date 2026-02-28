import { Instagram, MessageCircle, Twitter, Link as LinkIcon } from 'lucide-react'
import { Profile } from '@/types/profile';
import Link from 'next/link';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="bg-[#1F2937] text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-white text-xl font-bold mb-6">{profile.store_name}</h3>
            <p className="text-sm leading-relaxed mb-6">
              {profile.industry === 'カフェ' ? '24時間営業のサードプレイス。高品質なコーヒーと共に、あなただけの時間をお過ごしください。' : ''}
            </p>
            <div className="flex space-x-5">
              {profile.instagram_id && (
                <Link href={`https://instagram.com/${profile.instagram_id}`} className="hover:text-[#00CDB8] transition-colors">
                  <Instagram size={20} />
                </Link>
              )}
              {profile.x_id && (
                <Link href={`https://twitter.com/${profile.x_id}`} className="hover:text-[#00CDB8] transition-colors">
                  <Twitter size={20} />
                </Link>
              )}
              {profile.line_id && (
                <Link href={`#`} className="hover:text-[#00CDB8] transition-colors">
                  <MessageCircle size={20} />
                </Link>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Opening Hours</h4>
            <p className="text-sm">{profile.business_hours || '24時間営業'}</p>
            {profile.seasonal_events && (
              <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-xs text-[#00CDB8] font-bold uppercase mb-1">Seasonal</p>
                <p className="text-sm text-gray-300">{profile.seasonal_events}</p>
              </div>
            )}
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              {profile.menu_items && <li><Link href="/menu" className="hover:text-white transition-colors">Menu</Link></li>}
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-xs">
          &copy; {new Date().getFullYear()} {profile.store_name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}