import { Profile } from '@/types/profile';
import { Users, Car, Wallet, Clock } from 'lucide-react';

export default function FeatureSection({ profile }: { profile: Profile }) {
  const features = [];
  
  if (profile.seats_count) features.push({ icon: Users, label: '座席数', value: profile.seats_count });
  if (profile.parking_info) features.push({ icon: Car, label: '駐車場', value: profile.parking_info });
  if (profile.price_range) features.push({ icon: Wallet, label: '価格帯', value: profile.price_range });
  if (profile.business_hours) features.push({ icon: Clock, label: '営業時間', value: profile.business_hours });

  if (features.length === 0) return null;

  return (
    <section className="py-24 px-4 bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#4A332D] text-center mb-16">Store Information</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-[#4A332D]/10 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <feature.icon className="w-8 h-8 text-[#D47A55] mb-4" />
              <div className="text-sm text-[#2C1E16]/60 mb-2">{feature.label}</div>
              <div className="text-lg font-medium text-[#4A332D]">{feature.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}