import { Link as LinkIcon } from 'lucide-react'
import { Profile } from '@/types/profile';
import Link from 'next/link';

export default function DynamicFeaturedMenu({ profile }: { profile: Profile }) {
  if (!profile.menu_items) return null;

  const items = profile.menu_items.split('\n').slice(0, 3);

  return (
    <section className="py-24 bg-[#FAFAF9]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-[#262626] mb-4 underline decoration-[#B45309] decoration-4 underline-offset-8">Featured Menu</h2>
            <p className="text-[#1C1917]/70 italic font-medium">素材本来の味を最大限に引き出した、店主お薦めの品々。</p>
          </div>
          <Link href="/menu" className="text-[#B45309] font-bold border-b-2 border-[#B45309] pb-1 hover:opacity-70">
            View All Menu
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((line, idx) => {
            const [name, price] = line.split(':');
            return (
              <div key={idx} className="bg-white p-8 border border-[#262626]/5 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xs text-[#B45309] font-bold uppercase tracking-widest mb-2">Recommendation</p>
                <h3 className="text-xl font-bold text-[#262626] mb-1">{name}</h3>
                <p className="text-[#B45309] font-medium text-lg">{price}</p>
                <div className="mt-6 h-px bg-[#262626]/10 w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}