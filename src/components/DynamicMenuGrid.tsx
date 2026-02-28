import { Coffee } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function DynamicMenuGrid({ profile }: { profile: Profile }) {
  const menus = profile.menu_items?.split(/[\n,、]/).filter(item => item.trim() !== '') || [];

  return (
    <section id="menu" className="bg-[#F9F9F9] py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl font-bold text-[#2D2D2D]">Menu Selection</h2>
          <p className="mt-4 text-[#A67C52] uppercase tracking-widest text-sm font-semibold">Our Craft</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {menus.map((item, index) => (
            <div key={index} className="group relative overflow-hidden bg-white p-8 transition-all hover:shadow-xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center bg-[#F9F9F9] text-[#A67C52] group-hover:bg-[#A67C52] group-hover:text-white transition-colors">
                <Coffee size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#2D2D2D]">{item.trim()}</h3>
              <p className="mt-2 text-sm text-gray-500">こだわり抜いた素材を使用し、丁寧に仕上げています。</p>
              <div className="mt-6 h-[1px] w-0 bg-[#A67C52] transition-all group-hover:w-full" />
            </div>
          ))}
        </div>
        {profile.price_range && (
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-400">Price Range: {profile.price_range}</p>
          </div>
        )}
      </div>
    </section>
  );
}