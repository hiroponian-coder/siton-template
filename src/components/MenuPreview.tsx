import { Link as LinkIcon } from 'lucide-react'
import { Profile } from '@/types/profile';
import Link from 'next/link';

export default function MenuPreview({ profile }: { profile: Profile }) {
  const items = profile.menu_items?.split(',') || [];

  return (
    <section className="py-24 bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-light text-[#2D2424] mb-2 uppercase tracking-widest">Menu</h2>
            <p className="text-[#C5A059] font-medium">OUR RECOMMENDATIONS</p>
          </div>
          <Link href="/menu" className="text-sm border-b border-[#2D2424] pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-all">
            VIEW ALL
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.slice(0, 4).map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-zinc-100 mb-4 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=600&sig=${index}`} 
                  alt={item}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-lg font-medium text-[#2D2424]">{item.trim()}</h3>
              <p className="text-sm text-[#333333]/60">Modern Selection</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}