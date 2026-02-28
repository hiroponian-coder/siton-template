import { Coffee, Utensils, Dessert } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function MenuPreview({ profile }: { profile: Profile }) {
  if (!profile.menu_items) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-[#C5A059] mb-4">OUR SELECTIONS</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A]">メニュー</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4 mb-8">
              <Coffee className="w-6 h-6 text-[#C5A059]" />
              <h4 className="text-xl font-bold">Specialty Coffee</h4>
            </div>
            <div className="whitespace-pre-wrap leading-relaxed text-gray-600">
              {profile.menu_items}
            </div>
          </div>
          <div className="relative hidden md:block group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=1000" 
              alt="Menu Visual" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#1A1A1A]/20 transition-opacity group-hover:opacity-0" />
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="/menu" className="inline-block px-12 py-4 border border-[#1A1A1A] text-[#1A1A1A] font-bold hover:bg-[#1A1A1A] hover:text-white transition-all">
            全てのメニューを見る
          </a>
        </div>
      </div>
    </section>
  );
}