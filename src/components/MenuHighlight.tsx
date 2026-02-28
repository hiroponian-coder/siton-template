import { Link as LinkIcon } from 'lucide-react'
import { Profile } from '@/types/profile';
import Link from 'next/link';

export default function MenuHighlight({ profile }: { profile: Profile }) {
  if (!profile.menu_items) return null;

  const items = profile.menu_items.split('\n').slice(0, 4);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[#D4A373] font-bold tracking-widest text-sm uppercase">Selections</span>
            <h2 className="text-4xl font-bold text-[#1A1A1A] mt-2">Featured Menu</h2>
          </div>
          <Link href="/menu" className="text-[#D4A373] font-medium border-b border-[#D4A373] pb-1 hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-all">
            View All Menu
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-[#FAFAFA] p-6 rounded-lg border border-[#1A1A1A]/5 hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 rounded-md mb-4 overflow-hidden">
                 <img src={profile.image_urls?.[i+1] || `https://images.unsplash.com/photo-1511920170033-f83969a4c348?auto=format&fit=crop&q=80&w=800`} alt={item} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A]">{item}</h3>
              <p className="text-sm text-[#2D2D2D] mt-2 opacity-70">旬の素材を活かしたこだわりの一品。</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}