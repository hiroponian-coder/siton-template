import { Utensils } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function MenuSection({ profile }: { profile: Profile }) {
  if (!profile.menu_items) return null;

  const items = profile.menu_items.split(',').map(item => {
    const [name, price] = item.split(':').map(s => s.trim());
    return { name, price };
  });

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#B45309] tracking-widest uppercase mb-2">Our Menu</h2>
          <h3 className="text-4xl font-bold text-[#0F172A]">こだわりの逸品</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {items.map((item, idx) => (
            <div key={idx} className="flex justify-between items-end border-b border-slate-100 pb-4 group">
              <div>
                <p className="text-lg font-medium text-[#1E293B] group-hover:text-[#B45309] transition-colors">{item.name}</p>
              </div>
              <div className="text-[#B45309] font-semibold">
                {item.price}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <a href="/menu" className="inline-flex items-center text-[#0F172A] font-bold border-b-2 border-[#B45309] pb-1 hover:text-[#B45309] transition-colors">
             <Utensils className="mr-2" size={18} />
             全てのメニューを見る
           </a>
        </div>
      </div>
    </section>
  );
}