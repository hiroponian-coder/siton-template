import { ChevronRight, Link as LinkIcon } from 'lucide-react'
import { Profile } from '@/types/profile';
import Link from 'next/link';

export default function FeaturedMenu({ profile }: { profile: Profile }) {
  if (!profile.menu_items) return null;

  const menuArray = profile.menu_items.split('\n').slice(0, 4);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-bold text-[#D4A373] tracking-[0.2em] uppercase mb-2">Menu Preview</h2>
            <p className="text-4xl font-bold text-[#2C3E50]">おすすめメニュー</p>
          </div>
          <Link href="/menu" className="flex items-center text-[#D4A373] hover:translate-x-1 transition-transform font-bold">
            VIEW FULL MENU <ChevronRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuArray.map((item, idx) => (
            <div key={idx} className="group border border-gray-100 p-6 hover:shadow-xl transition-all">
              <div className="h-48 bg-gray-100 mb-6 overflow-hidden">
                <img 
                  src={profile.image_urls && profile.image_urls[idx + 2] ? profile.image_urls[idx + 2] : 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop'} 
                  alt="Menu item" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <p className="text-[#2C3E50] font-bold text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}