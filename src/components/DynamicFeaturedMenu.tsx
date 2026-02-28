import { Profile } from '@/types/profile';

export default function DynamicFeaturedMenu({ profile }: { profile: Profile }) {
  if (!profile.menu_items) return null;

  return (
    <section className="py-24 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-[#C4A484] uppercase tracking-[0.3em] text-sm mb-4 block">Selections</span>
            <h2 className="text-4xl font-light">Signature Menu</h2>
          </div>
          <button className="text-[#C4A484] border-b border-[#C4A484] pb-1 uppercase tracking-widest text-xs hover:text-white hover:border-white transition-all">
            Explore Full Menu
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {profile.menu_items.split('\n').slice(0, 6).map((item, idx) => (
            <div key={idx} className="group border-b border-white/10 pb-6 flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium group-hover:text-[#C4A484] transition-colors">{item.split(',')[0]}</h3>
                <p className="text-sm text-gray-400 mt-1 italic">{item.split(',')[1] || 'Specialty brewed'}</p>
              </div>
              <span className="text-[#C4A484] font-serif">{item.split(',')[2] || '¥ ---'}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}