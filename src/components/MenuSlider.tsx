import { Profile } from '@/types/profile';

export default function MenuSlider({ profile }: { profile: Profile }) {
  if (!profile.menu_items) return null;

  const items = profile.menu_items.split(',').map(item => {
    const [name, price] = item.split(':');
    return { name, price };
  });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-[#D4AF37] tracking-[0.3em] text-sm uppercase">Selections</span>
            <h2 className="text-4xl font-serif mt-2">Featured Menu</h2>
          </div>
          <p className="text-gray-500 max-w-sm mt-4 md:mt-0">
            厳選された素材を使用した、当店自慢のラインナップ。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-100 mb-6 overflow-hidden relative">
                 <img 
                   src={profile.image_urls?.[idx + 1] || profile.image_urls?.[0]}
                   alt={item.name}
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
              </div>
              <h3 className="text-lg font-medium mb-1">{item.name}</h3>
              <p className="text-[#D4AF37] font-semibold">¥{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}