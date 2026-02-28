import { ChevronRight, Link as LinkIcon } from 'lucide-react'
import { Profile } from '@/types/profile';
import Link from 'next/link';

export default function DynamicMenuPreview({ profile }: { profile: Profile }) {
  // Assume menu_items is a semi-colon or comma separated string
  const menuList = profile.menu_items?.split(/[、;；\n]/).filter(item => item.trim() !== '').slice(0, 6) || [];

  return (
    <section className="py-24 bg-[#1F2937] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Signature Menu</h2>
            <p className="text-gray-400">厳選された素材を使用したこだわりのメニュー</p>
          </div>
          <Link href="/menu" className="group flex items-center gap-2 text-[#00CDB8] font-bold">
            View All Menu <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuList.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium">{item.trim()}</h3>
                <span className="text-[#00CDB8] font-mono">PRICE_RANGE</span>
              </div>
              <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-[#00CDB8] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
          ))}
        </div>

        {profile.price_range && (
          <p className="mt-12 text-center text-gray-500 text-sm italic">
            Budget: {profile.price_range}
          </p>
        )}
      </div>
    </section>
  );
}