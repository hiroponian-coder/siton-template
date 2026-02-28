import { Profile } from '@/types/profile';
import { Coffee, Utensils, Star } from 'lucide-react';

export default function MenuFeatured({ profile }: { profile: Profile }) {
  if (!profile.menu_items) return null;

  const items = profile.menu_items.split('\n').slice(0, 4);

  return (
    <section className="py-24 bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">RECOMMENDED MENU</h2>
          <p className="text-gray-400">おすすめのメニュー</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="group bg-white/5 p-8 rounded-xl border border-white/10 hover:border-[#c5a059] transition-all cursor-default">
              <div className="w-12 h-12 bg-[#c5a059]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#c5a059] transition-all">
                {idx % 2 === 0 ? <Coffee className="text-[#c5a059] group-hover:text-white" /> : <Utensils className="text-[#c5a059] group-hover:text-white" />}
              </div>
              <h3 className="text-xl font-bold mb-3">{item}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                厳選した旬の素材を使用し、熟練のバリスタが一杯ずつ丁寧に仕上げます。
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/menu" className="inline-flex items-center gap-2 text-[#c5a059] font-semibold hover:underline">
            すべてのメニューを見る <Star size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}