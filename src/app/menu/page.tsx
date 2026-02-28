import { getStoreProfile } from '@/lib/supabase';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Coffee, Cake, Utensils, Star } from 'lucide-react';

export default async function MenuPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile || !profile.menu_items) return <div className="py-24 text-center">Menu not available.</div>;

  return (
    <main className="bg-[#F9FAFB] min-h-screen">
      <Navigation profile={profile} />
      <div className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4 text-center">Menu</h1>
          <div className="w-24 h-1 bg-[#8B5CF6] mx-auto mb-16 rounded-full"></div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-100">
              <Coffee className="w-8 h-8 text-[#8B5CF6]" />
              <h2 className="text-2xl font-bold">Our Selection</h2>
            </div>
            <div className="prose prose-lg max-w-none text-[#1F2937] whitespace-pre-wrap leading-relaxed">
              {profile.menu_items}
            </div>
            {profile.price_range && (
              <div className="mt-12 pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-2">Average Price Range</p>
                <p className="text-2xl font-semibold text-[#8B5CF6]">{profile.price_range}</p>
              </div>
            )}
          </div>

          {profile.seasonal_events && (
            <div className="mt-12 bg-[#111827] text-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-[#8B5CF6]" /> Seasonal Special
              </h3>
              <p className="text-gray-300">{profile.seasonal_events}</p>
            </div>
          )}
        </div>
      </div>
      <Footer profile={profile} />
    </main>
  );
}
import { Star } from 'lucide-react';