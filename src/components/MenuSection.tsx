import { Profile } from '@/types/profile';
import { Coffee } from 'lucide-react';

export default function MenuSection({ profile }: { profile: Profile }) {
  if (!profile.menu_items) return null;

  return (
    <section className="py-24 bg-[#1A1A1A] text-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Coffee className="mx-auto mb-4 text-[#C5A059]" size={40} />
          <h2 className="text-4xl font-bold tracking-tight mb-4 uppercase">Our Selection</h2>
          <p className="text-[#FDFDFD]/60">厳選された素材と確かな技術。</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profile.menu_items.split(/[、,\n]/).map((item, index) => (
            <div key={index} className="group p-8 border border-[#FDFDFD]/10 hover:border-[#C5A059] transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#C5A059]">{item.trim()}</h3>
              <div className="w-12 h-px bg-[#C5A059] mb-4" />
              <p className="text-sm text-[#FDFDFD]/40">Seasonally selected ingredients curated for the perfect balance.</p>
            </div>
          ))}
        </div>

        {profile.price_range && (
          <div className="mt-12 text-center text-[#C5A059] font-medium">
            Price Range: {profile.price_range}
          </div>
        )}
      </div>
    </section>
  );
}