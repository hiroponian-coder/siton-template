import { Profile } from '@/types';
import { Ticket, ArrowRight, Phone } from 'lucide-react';

export default function CTA({ profile }: { profile: Profile }) {
  if (!profile.target_actions && !profile.coupon_info && !profile.contact_method) return null;

  return (
    <section className="py-20 px-4 bg-[#FF6B81]">
      <div className="max-w-4xl mx-auto text-center">
        {profile.coupon_info && (
          <div className="bg-[#FDCB6E] text-[#3E2723] inline-flex items-center gap-2 px-6 py-2 rounded-full font-black text-sm md:text-base mb-8 shadow-md transform -rotate-2">
            <Ticket size={20} />
            {profile.coupon_info}
          </div>
        )}

        {profile.target_actions && (
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
            {profile.target_actions}
          </h2>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          {profile.contact_method && (
            <div className="bg-white text-[#FF6B81] px-8 py-4 rounded-full font-black text-lg flex items-center gap-3 shadow-xl w-full sm:w-auto justify-center">
              <Phone size={24} />
              {profile.contact_method}
            </div>
          )}
          
          {(profile.instagram_id || profile.line_id) && (
            <a 
              href={profile.line_id ? `https://line.me/R/ti/p/${profile.line_id}` : `https://instagram.com/${profile.instagram_id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3E2723] text-[#FDCB6E] px-8 py-4 rounded-full font-black text-lg flex items-center gap-3 hover:bg-black transition-colors shadow-xl w-full sm:w-auto justify-center"
            >
              予約・お問い合わせ <ArrowRight size={24} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}