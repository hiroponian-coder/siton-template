import { Profile } from '@/types/profile';
import { Ticket, Phone } from 'lucide-react';

export default function CallToAction({ profile }: { profile: Profile }) {
  if (!profile.target_actions && !profile.coupon_info && !profile.contact_method) return null;

  return (
    <section className="py-20 px-4 bg-[#4A332D] text-[#FDFBF7]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">皆様のご来店をお待ちしております</h2>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          {profile.target_actions && (
            <p className="text-xl mb-8 font-medium">
              {profile.target_actions}
            </p>
          )}

          {profile.coupon_info && (
            <div className="inline-flex items-center gap-3 bg-[#D47A55] text-white px-6 py-4 rounded-xl mb-8 shadow-lg">
              <Ticket className="w-6 h-6" />
              <span className="font-bold">{profile.coupon_info}</span>
            </div>
          )}

          {profile.contact_method && (
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="text-sm opacity-80 mb-2">ご予約・お問い合わせ</div>
              <div className="flex items-center gap-3 text-2xl font-bold bg-[#FDFBF7] text-[#4A332D] px-8 py-4 rounded-full shadow-lg">
                <Phone className="w-6 h-6 text-[#D47A55]" />
                {profile.contact_method}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}