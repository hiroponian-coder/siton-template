import { Profile } from '@/types/profile';
import { Utensils } from 'lucide-react';

export default function MenuSection({ profile }: { profile: Profile }) {
  if (!profile.menu_items) return null;

  const items = profile.menu_items.split(',').map(i => i.trim());

  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-[#1a1a1a]/10"></div>
          <h2 className="text-3xl font-bold text-[#1a1a1a] flex items-center gap-3">
            <Utensils className="text-[#d4a373]" /> Featured Menu
          </h2>
          <div className="h-px flex-1 bg-[#1a1a1a]/10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-8 border border-[#1a1a1a]/5 hover:border-[#d4a373]/50 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-[#1a1a1a]">{item}</h3>
                <span className="text-[#d4a373] font-mono">—</span>
              </div>
              <p className="text-[#2d2d2d]/60 text-sm">
                厳選された素材を使用した、当店自慢の一品。丁寧な仕込みで素材の味を最大限に引き出しています。
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}