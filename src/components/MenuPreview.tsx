import { Link as LinkIcon } from 'lucide-react'
import { Profile } from '@/types/profile';
import Link from 'next/link';

export default function MenuPreview({ profile }: { profile: Profile }) {
  if (!profile.menu_items) return null;

  let items: string[] = [];
  try {
    items = JSON.parse(profile.menu_items);
  } catch (e) {
    items = profile.menu_items.split(',').map(s => s.trim());
  }

  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold tracking-[0.2em] text-[#C2410C] uppercase mb-4">Our Selection</h2>
            <p className="text-4xl font-bold text-[#111827] leading-tight">こだわり抜いた素材から生まれる、最高の一皿と一杯。</p>
          </div>
          <Link href="/menu" className="mt-8 md:mt-0 text-[#C2410C] font-semibold border-b-2 border-[#C2410C] pb-1 hover:text-[#C2410C]/70">
            View All Menu
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.slice(0, 4).map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-gray-100 mb-6 overflow-hidden rounded-sm">
                 <div className="w-full h-full flex items-center justify-center text-[#4B5563] group-hover:scale-110 transition-transform duration-500">
                    {/* Placeholder for item image */}
                    <span className="text-xs tracking-widest">IMAGE COMING SOON</span>
                 </div>
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-2">{item}</h3>
              <div className="w-12 h-px bg-[#C2410C]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}