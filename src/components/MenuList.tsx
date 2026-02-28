import { Profile } from '@/types/profile';

export default function MenuList({ profile }: { profile: Profile }) {
  const items = profile.menu_items ? profile.menu_items.split('\n') : [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
      <div className="space-y-12">
        <h2 className="text-3xl font-bold flex items-center gap-4">
          <span className="w-10 h-1 bg-[#D97706]"></span>
          Beverages
        </h2>
        <div className="space-y-8">
          {items.filter(i => !i.includes('デザート') && !i.includes('ケーキ')).map((item, idx) => (
            <div key={idx} className="flex justify-between items-end border-b border-slate-200 pb-4 group">
              <div>
                <h3 className="font-bold text-xl group-hover:text-[#D97706] transition-colors">{item.split(',')[0]}</h3>
                <p className="text-slate-400 text-sm mt-1">{item.split(',')[1] || '厳選素材を使用'}</p>
              </div>
              <span className="font-bold text-[#334155] text-lg">{item.split(',')[2] || '¥---'}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-12">
        <h2 className="text-3xl font-bold flex items-center gap-4">
          <span className="w-10 h-1 bg-[#D97706]"></span>
          Sweets & Food
        </h2>
        <div className="space-y-8">
          {items.filter(i => i.includes('デザート') || i.includes('ケーキ') || i.includes('トースト')).map((item, idx) => (
            <div key={idx} className="flex justify-between items-end border-b border-slate-200 pb-4 group">
              <div>
                <h3 className="font-bold text-xl group-hover:text-[#D97706] transition-colors">{item.split(',')[0]}</h3>
                <p className="text-slate-400 text-sm mt-1">{item.split(',')[1] || '季節の味わい'}</p>
              </div>
              <span className="font-bold text-[#334155] text-lg">{item.split(',')[2] || '¥---'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}