import { Profile } from '@/types';
import { UtensilsCrossed } from 'lucide-react';

export default function MenuSection({ profile }: { profile: Profile }) {
  if (!profile.menu_items) return null;

  const menuList = profile.menu_items.split(',').map(item => item.trim()).filter(Boolean);

  return (
    <section className="py-20 px-4 bg-[#FDCB6E] relative overflow-hidden">
      <div className="absolute top-10 left-10 text-white/30 rotate-12">
        <UtensilsCrossed size={120} />
      </div>
      <div className="absolute bottom-10 right-10 text-white/30 -rotate-12">
        <UtensilsCrossed size={120} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#3E2723] mb-4">
            Cafe Menu
          </h2>
          <div className="w-24 h-2 bg-[#FF6B81] mx-auto rounded-full" />
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-[3rem] p-8 md:p-12 shadow-2xl border-4 border-white">
          <div className="grid md:grid-cols-2 gap-6">
            {menuList.map((menu, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-[#FFF9F5] p-4 rounded-2xl border-2 border-[#FF6B81] hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-full bg-[#FF6B81] text-white flex items-center justify-center font-black text-xl shrink-0 shadow-inner">
                  {idx + 1}
                </div>
                <span className="text-[#3E2723] font-bold text-lg">{menu}</span>
              </div>
            ))}
          </div>

          {profile.price_range && (
            <div className="mt-12 text-center">
              <div className="inline-block bg-[#3E2723] text-white px-8 py-3 rounded-full font-bold shadow-lg">
                <span className="text-[#FDCB6E] mr-2">Price Range:</span> {profile.price_range}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}