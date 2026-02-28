import { Instagram, Send } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1">
            <h3 className="text-xl font-bold tracking-tighter mb-6">{profile.store_name}</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              洗練された空間と、選び抜かれたコーヒー豆。<br />
              あなたの日常を彩る、最高の一杯をご提案します。
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold text-[#C5A059] mb-6 tracking-widest">SOCIAL</h4>
            <div className="flex space-x-4">
              {profile.instagram_id && (
                <a href={`https://instagram.com/${profile.instagram_id}`} className="hover:text-[#C5A059] transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#C5A059] mb-6 tracking-widest">CONTACT</h4>
            <p className="text-sm text-white/60 mb-4">
              ご予約・お問い合わせは以下の方法で承っております。
            </p>
            {profile.contact_method ? (
               <p className="text-lg font-medium">{profile.contact_method}</p>
            ) : (
               <p className="text-sm text-white/60 italic">SNSのDMまたは店舗まで直接お越しください。</p>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center">
          <p className="text-xs text-white/40 font-light tracking-widest">
            &copy; {new Date().getFullYear()} {profile.store_name}. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}