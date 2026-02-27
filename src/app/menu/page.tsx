import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Coffee, Cake, Utensils } from 'lucide-react';

export default async function MenuPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID || 'default_site_id';
  const profile = await getStoreProfile(siteId);

  if (!profile) return null;

  let items: string[] = [];
  if (profile.menu_items) {
    try {
      items = JSON.parse(profile.menu_items);
    } catch (e) {
      items = profile.menu_items.split(',').map(s => s.trim());
    }
  }

  return (
    <main className="pt-20 bg-white min-h-screen font-sans">
      <Header profile={profile} />
      <div className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-[#111827] mb-6">Menu</h1>
          <div className="w-24 h-1 bg-[#C2410C] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item, idx) => (
            <div key={idx} className="border-b border-gray-100 pb-8 flex justify-between items-center group cursor-default">
              <div>
                <h3 className="text-xl font-bold text-[#111827] mb-1 group-hover:text-[#C2410C] transition-colors">{item}</h3>
                <p className="text-gray-400 text-sm">Signature selection of {profile.store_name}</p>
              </div>
              <div className="text-[#C2410C] font-semibold">
                 {profile.price_range || '---'}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-[#F9FAFB] p-8 md:p-16 rounded-2xl">
              <div>
                 <Coffee className="text-[#C2410C] mb-8" size={40} />
                 <h2 className="text-3xl font-bold mb-6">Specialty Beans</h2>
                 <p className="text-[#4B5563] leading-relaxed mb-6">
                   当店では世界各地から選び抜かれたスペシャリティコーヒーのみを使用しています。バリスタが一杯ずつ丁寧にハンドドリップで淹れるコーヒーは、豆本来の香りと味わいを最大限に引き出します。
                 </p>
              </div>
              <div className="h-80 bg-gray-200 rounded-xl overflow-hidden">
                 <img 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" 
                  alt="Coffee detail" 
                  className="w-full h-full object-cover grayscale"
                 />
              </div>
           </div>
        </div>
      </div>
      <Footer profile={profile} />
    </main>
  );
}