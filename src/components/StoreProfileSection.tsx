import { Profile } from '@/types/profile';
import { Clock, Users, Car, Wallet } from 'lucide-react';

export default function StoreProfileSection({ profile }: { profile: Profile }) {
  const details = [
    { icon: <Clock size={20} />, label: "Hours", value: profile.business_hours },
    { icon: <Users size={20} />, label: "Seats", value: profile.seats_count },
    { icon: <Car size={20} />, label: "Parking", value: profile.parking_info },
    { icon: <Wallet size={20} />, label: "Budget", value: profile.price_range },
  ].filter(d => d.value);

  return (
    <section className="py-24 bg-[#262626] text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">About the Establishment</h2>
            <p className="text-white/70 leading-relaxed">
              「{profile.store_name}」は、現代的な感性と伝統的なクラフトマンシップが融合した場所です。{profile.design_atmosphere}な空間で、忙しい日常を忘れて心安らぐ時間をお過ごしください。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {details.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="text-[#B45309] mt-1">{item.icon}</div>
                  <div>
                    <p className="text-sm text-white/50">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {profile.image_urls?.slice(1, 3).map((url, i) => (
              <img key={i} src={url} alt="Store" className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}