import { Profile } from '@/types/profile';
import { Coffee, Clock, Heart, ShieldCheck } from 'lucide-react';

export default function FeatureSection({ profile }: { profile: Profile }) {
  const features = [
    { icon: Coffee, title: 'Premium Beans', desc: '世界中から厳選されたスペシャリティコーヒーを使用。' },
    { icon: Clock, title: 'Modern Space', desc: 'ミニマルで静寂な空間が、創造性を刺激します。' },
    { icon: Heart, title: 'Craftmanship', desc: '一杯一杯、丁寧にハンドドリップで抽出します。' }
  ];

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Our Philosophy</h2>
          <div className="w-12 h-1 bg-[#D4A373] mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-white shadow-sm border border-[#1A1A1A]/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D4A373] group-hover:text-white transition-all duration-300">
                <f.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{f.title}</h3>
              <p className="text-[#2D2D2D] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}