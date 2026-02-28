import { MessageCircle, Mail } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function CtaBanner({ profile }: { profile: Profile }) {
  return (
    <section className="py-20 bg-[#1A1A1A] text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{profile.target_actions || 'ご来店、心よりお待ちしております。'}</h2>
        <p className="text-gray-400 mb-10 text-lg">
          最新情報はSNSでも配信中です。お問い合わせはLINEまたはお電話にてお気軽にどうぞ。
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {profile.line_id && (
            <a 
              href={`https://line.me/ti/p/${profile.line_id}`} 
              className="flex items-center px-8 py-3 bg-[#06C755] hover:bg-[#05b34c] rounded-full font-bold transition-colors"
            >
              <MessageCircle className="mr-2 w-5 h-5" /> LINEで予約・相談
            </a>
          )}
          {profile.contact_method && (
            <a 
              href={`mailto:${profile.contact_method}`} 
              className="flex items-center px-8 py-3 bg-white text-[#1A1A1A] hover:bg-gray-100 rounded-full font-bold transition-colors"
            >
              <Mail className="mr-2 w-5 h-5" /> お問い合わせ
            </a>
          )}
        </div>
      </div>
    </section>
  );
}