import { Coffee, Wifi, Moon, Users } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function BrandFeatures({ profile }: { profile: Profile }) {
  const features = [
    { icon: Coffee, title: 'Premium Beans', desc: '厳選された高品質な豆を使用した自家焙煎コーヒー。' },
    { icon: Moon, title: '24 Hours Open', desc: '時間を気にせず、いつでもあなたの居場所として。' },
    { icon: Wifi, title: 'Stable Network', desc: '全席Wi-Fi完備。仕事や作業にも最適な環境です。' },
    { icon: Users, title: 'Comfort Seats', desc: `${profile.seats_count || '多数'}の快適な座席をご用意しています。` },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#1F2937] text-3xl md:text-4xl font-bold mb-4">Our Features</h2>
          <div className="h-1.5 w-20 bg-[#00CDB8] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-shadow border border-transparent hover:border-[#00CDB8]/20">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#00CDB8] mb-6 shadow-sm">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1F2937]">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}