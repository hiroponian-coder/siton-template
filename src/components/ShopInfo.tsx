import { Profile } from '@/types/profile';
import { MapPin } from 'lucide-react';

export default function ShopInfo({ profile }: { profile: Profile }) {
  if (!profile.address && !profile.access_info) return null;

  return (
    <section className="py-24 px-4 bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#4A332D] mb-12 flex items-center justify-center gap-3">
          <MapPin className="w-8 h-8 text-[#D47A55]" />
          Access
        </h2>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#4A332D]/10 flex flex-col md:flex-row gap-12">
          <div className="flex-1 space-y-6">
            {profile.store_name && (
              <div>
                <div className="text-sm text-[#2C1E16]/60 mb-1">店舗名</div>
                <div className="text-xl font-bold text-[#4A332D]">{profile.store_name}</div>
              </div>
            )}
            
            {profile.address && (
              <div>
                <div className="text-sm text-[#2C1E16]/60 mb-1">住所</div>
                <div className="text-lg text-[#2C1E16]">{profile.address}</div>
              </div>
            )}

            {profile.access_info && (
              <div>
                <div className="text-sm text-[#2C1E16]/60 mb-1">アクセス</div>
                <div className="text-lg text-[#2C1E16]">{profile.access_info}</div>
              </div>
            )}
          </div>

          <div className="flex-1 flex items-center justify-center bg-[#4A332D]/5 rounded-xl border border-[#4A332D]/10 min-h-[250px]">
            <div className="text-center text-[#2C1E16]/50 p-6">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-[#4A332D]/30" />
              <p>Map Location</p>
              {profile.address && <p className="text-sm mt-2 max-w-[200px] mx-auto">{profile.address}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}