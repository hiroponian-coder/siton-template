import { Profile } from '@/types/profile';
import { Wifi, Zap, Music, BookOpen } from 'lucide-react';

export default function ModernAmenityFeatures({ profile }: { profile: Profile }) {
  const amenities = [
    { icon: Wifi, label: 'High-speed WiFi', desc: 'ビジネスや学習に最適な安定した接続。' },
    { icon: Zap, label: 'Charge Points', desc: 'すべてのカウンター席に電源を完備。' },
    { icon: Music, label: 'Acoustic Design', desc: '会話を邪魔しない心地よい音響設計。' },
    { icon: BookOpen, label: 'Library', desc: '厳選されたアートとデザインの書籍。' },
  ];

  return (
    <section className="py-24 bg-[#FBFBFB]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {amenities.map((item, idx) => (
            <div key={idx} className="text-center md:text-left">
              <item.icon className="mx-auto md:mx-0 text-[#C4A484] mb-6" size={32} />
              <h3 className="text-lg font-medium mb-3">{item.label}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}