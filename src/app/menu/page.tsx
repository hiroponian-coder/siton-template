import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Profile } from '@/types/profile';

export default async function MenuPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) return <div>Site not found</div>;

  return (
    <main className="bg-white text-[#333333] min-h-screen">
      <Header profile={profile} />
      <div className="py-24">
        <div className="container mx-auto px-6">
          <span className="text-[#C4A484] uppercase tracking-[0.3em] text-sm mb-4 block text-center">Menu</span>
          <h1 className="text-5xl font-light text-[#1A1A1A] text-center mb-24 uppercase tracking-tighter italic font-serif">Full Selection</h1>
          
          {profile.menu_items ? (
            <div className="max-w-4xl mx-auto space-y-24">
              <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
                {profile.menu_items.split('\n').map((item, idx) => (
                   <div key={idx} className="flex justify-between items-baseline border-b border-gray-100 pb-4">
                     <div>
                       <h3 className="text-lg font-medium">{item.split(',')[0]}</h3>
                       <p className="text-xs text-gray-400">{item.split(',')[1] || 'Premium Selection'}</p>
                     </div>
                     <span className="font-serif text-[#C4A484]">{item.split(',')[2] || '¥ ---'}</span>
                   </div>
                ))}
              </div>
              
              {profile.seasonal_events && (
                <div className="bg-[#F9F9F9] p-12 text-center">
                  <h2 className="text-[#C4A484] text-sm uppercase tracking-widest mb-6">Seasonal Specials</h2>
                  <p className="text-2xl font-light">{profile.seasonal_events}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400 uppercase tracking-widest">
              Menu information is currently being updated.
            </div>
          )}
        </div>
      </div>
      <Footer profile={profile} />
    </main>
  );
}