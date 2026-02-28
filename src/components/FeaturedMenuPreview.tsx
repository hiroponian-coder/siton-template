import { ChevronRight, Link as LinkIcon } from 'lucide-react'
import { Profile } from '@/types/profile';
import Link from 'next/link';

export default function FeaturedMenuPreview({ profile }: { profile: Profile }) {
  if (!profile.menu_items) return null;

  const items = profile.menu_items.split(',').map(i => i.trim());

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-[#D4AF37] font-semibold tracking-widest text-sm">MENU PREVIEW</span>
            <h2 className="text-4xl text-[#2C3E50] mt-2 font-serif">Selected Items</h2>
          </div>
          <Link href="/menu" className="flex items-center gap-2 text-[#2C3E50] border-b border-[#2C3E50] pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all uppercase text-sm font-medium tracking-widest">
            View All Menu <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.slice(0, 6).map((item, idx) => (
            <div key={idx} className="group border-b border-[#2C3E50]/10 pb-6">
              <p className="text-[#D4AF37] text-xs font-mono mb-2">0{idx + 1}</p>
              <h3 className="text-xl text-[#2C3E50] font-medium group-hover:translate-x-2 transition-transform duration-300">{item}</h3>
              <p className="mt-2 text-[#1A1A1A]/50 text-sm italic">Crafted with passion and precision.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}