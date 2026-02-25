import { Profile } from '@/types/profile';
import { Coffee } from 'lucide-react';

export default function MenuList({ profile }: { profile: Profile }) {
  if (!profile.menu_items) {
    return (
      <div className="py-24 text-center text-[#2C1E16]/60">
        現在メニュー情報を準備中です。
      </div>
    );
  }

  const menuItems = profile.menu_items
    .split('\n')
    .map(m => m.trim())
    .filter(m => m.length > 0);

  return (
    <section className="py-24 px-4 bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-[#4A332D]/10 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-10 pb-6 border-b border-[#4A332D]/10">
              <Coffee className="w-6 h-6 text-[#D47A55]" />
              <h2 className="text-2xl font-bold text-[#4A332D]">Cafe Menu</h2>
            </div>
            
            <ul className="space-y-6">
              {menuItems.map((item, idx) => (
                <li key={idx} className="flex items-center justify-between text-lg text-[#2C1E16] hover:bg-[#4A332D]/5 p-4 rounded-lg transition-colors">
                  <span className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-[#D47A55] rounded-full" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {profile.seasonal_events && (
          <div className="mt-12 bg-[#4A332D]/5 rounded-2xl p-8 md:p-12 border border-[#4A332D]/10">
            <h3 className="text-xl font-bold text-[#4A332D] mb-4">季節の限定メニュー・イベント</h3>
            <p className="text-[#2C1E16]/80 leading-relaxed whitespace-pre-wrap">
              {profile.seasonal_events}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}