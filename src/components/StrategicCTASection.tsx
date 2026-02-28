import { MessageSquare } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function StrategicCTASection({ profile }: { profile: Profile }) {
  if (!profile.line_id && !profile.coupon_info) return null;

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#D97706] rounded-[2rem] p-12 text-center text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">{profile.coupon_info || '今すぐ使えるクーポンをプレゼント'}</h2>
          <p className="text-amber-100 max-w-xl mx-auto text-lg">
            LINE公式アカウントにお友だち追加で、{profile.store_name}をよりお得に楽しめます。
          </p>
          {profile.line_id && (
            <a 
              href={`https://line.me/R/ti/p/${profile.line_id}`} 
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#D97706] rounded-full font-black text-xl hover:bg-slate-50 transition-colors"
            >
              <MessageSquare size={24} />
              LINEでお友だち登録
            </a>
          )}
        </div>
      </div>
    </section>
  );
}