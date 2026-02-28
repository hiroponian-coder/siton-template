import { Profile } from '@/types/profile';

export default function MenuSection({ profile }: { profile: Profile }) {
  if (!profile.menu_items) return null;

  let items = [];
  try {
    items = JSON.parse(profile.menu_items);
  } catch (e) {
    return null;
  }

  return (
    <section id="menu" className="py-24 bg-[#1A1A1A] text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif italic text-[#C5A059] mb-4">Signature Menu</h2>
          <div className="h-px w-20 bg-[#C5A059] mx-auto" />
        </div>

        <div className="grid gap-8">
          {items.map((item: any, idx: number) => (
            <div key={idx} className="flex items-end group">
              <div className="flex-shrink-0">
                <span className="text-sm text-[#C5A059] font-mono mb-1 block uppercase">{item.category}</span>
                <h3 className="text-xl font-medium tracking-wide group-hover:text-[#C5A059] transition-colors">{item.name}</h3>
              </div>
              <div className="flex-grow border-b border-white/10 mx-4 mb-1 border-dotted" />
              <div className="text-xl font-light">
                {item.price}
              </div>
            </div>
          ))}
        </div>

        {profile.price_range && (
          <div className="mt-16 text-center text-sm text-white/40">
            Estimated Price Range: {profile.price_range}
          </div>
        )}
      </div>
    </section>
  );
}