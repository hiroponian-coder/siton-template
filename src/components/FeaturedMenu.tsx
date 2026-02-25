import { Profile } from '@/types/profile';
import Link from 'next/link';
import { ArrowRight, Utensils } from 'lucide-react';

export default function FeaturedMenu({ profile }: { profile: Profile }) {
  if (!profile.menu_items) return null;

  const menuList = profile.menu_items
    .split(/[\n,]/)
    .map(m => m.trim())
    .filter(m => m.length > 0)
    .slice(0, 3);

  if (menuList.length === 0) return null;

  return (
    <section className="py-24 px-4 bg-[#4A332D]/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#4A332D] mb-4">Featured Menu</h2>
          <p className="text-[#2C1E16]/70">当店おすすめのメニュー</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuList.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-[#4A332D]/10 hover:shadow-md transition-shadow group flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#D47A55]/10 flex items-center justify-center mb-6 group-hover:bg-[#D47A55]/20 transition-colors">
                <Utensils className="w-8 h-8 text-[#D47A55]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2C1E16]">{item}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/menu" className="inline-flex items-center gap-2 px-8 py-4 bg-[#4A332D] text-white rounded-full hover:bg-[#D47A55] transition-colors font-medium">
            メニューをすべて見る
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}