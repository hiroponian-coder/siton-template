import { Link as LinkIcon } from 'lucide-react'
import { Profile } from '@/types/profile';
import Link from 'next/link';

export default function DynamicMenuHighlight({ profile }: { profile: Profile }) {
  const menuItems = profile.menu_items ? profile.menu_items.split('\n').slice(0, 4) : [];
  
  if (menuItems.length === 0) return null;

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-[#334155]">Recommended Menu</h2>
            <p className="text-slate-500 mt-2">おすすめのラインナップ</p>
          </div>
          <Link href="/menu" className="text-[#D97706] font-bold border-b-2 border-[#D97706] pb-1 hover:text-[#B45309] hover:border-[#B45309] transition-all">
            VIEW ALL
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 group hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-[#334155]/5 rounded-full flex items-center justify-center text-[#334155] mb-6 group-hover:bg-[#D97706] group-hover:text-white transition-colors">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-xl mb-3 text-[#334155]">{item.split(',')[0]}</h3>
              <p className="text-slate-500 text-sm mb-4">{item.split(',')[1] || '素材にこだわった逸品です。'}</p>
              <span className="text-[#D97706] font-bold italic">{item.split(',')[2] || ''}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}