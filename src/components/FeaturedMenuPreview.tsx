import { Link as LinkIcon, Link as LinkIcon } from 'lucide-react'
import { Profile } from '@/types/profile';
import Link from 'next/link';

export default function FeaturedMenuPreview({ profile }: { profile: Profile }) {
  if (!profile.menu_items) return null;

  const items = profile.menu_items.split(/[\n,]+/).slice(0, 4);

  return (
    <section className="py-24 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Recommended Menu</h2>
          <div className="w-12 h-1 bg-[#B38B6D] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="aspect-square bg-gray-100 rounded-lg mb-6 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=600&sig=${idx}`}
                  alt={item}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-[#1A1A1A] mb-2">{item.trim()}</h3>
              <p className="text-sm text-gray-500">素材本来の味を活かした、当店の自信作です。</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/menu" 
            className="inline-flex items-center text-[#B38B6D] font-bold hover:underline decoration-2 underline-offset-8"
          >
            View All Menu <LinkIcon className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}