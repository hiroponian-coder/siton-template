import { ArrowRight, Link as LinkIcon } from 'lucide-react'
import { Profile } from '@/types/profile';
import Link from 'next/link';

export default function DynamicMenuPreview({ profile }: { profile: Profile }) {
  if (!profile.menu_items) return null;

  // Basic parsing: split by lines or commas
  const items = profile.menu_items.split(/[\n,、]/).filter(i => i.trim()).slice(0, 6);

  return (
    <section className="py-24 bg-[#1B2E35]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-[#C9A050] tracking-[0.2em] uppercase mb-4">Signature Menu</h2>
            <h3 className="text-4xl font-bold text-white">厳選されたメニュー</h3>
          </div>
          <Link 
            href="/menu" 
            className="flex items-center gap-2 text-white/70 hover:text-[#C9A050] transition-colors group"
          >
            View All Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="group relative bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors border border-white/10">
              <div className="flex justify-between items-start">
                <h4 className="text-xl font-bold text-white mb-2">{item.trim()}</h4>
                <span className="text-[#C9A050] font-mono">ASK</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                シェフのこだわりが詰まった最高の一品。季節に合わせて厳選された食材を使用しております。
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}