import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function MenuPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID || "seiton13-demo";
  const profile = await getStoreProfile(siteId);

  if (!profile) return null;

  const menuItems = profile.menu_items?.split('\n') || [];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
      <Header profile={profile} />
      <main className="flex-grow py-24 px-4">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-5xl font-bold text-[#262626] mb-4 text-center tracking-tighter">Menu</h1>
          <p className="text-center text-[#1C1917]/60 mb-16 italic font-medium">一杯一杯、丁寧に淹れるこだわりをお楽しみください。</p>
          
          <div className="space-y-12">
            <div className="border-t border-[#262626]/10 pt-12">
              <h2 className="text-sm font-bold text-[#B45309] uppercase tracking-[0.3em] mb-8">Selection</h2>
              <div className="space-y-6">
                {menuItems.map((item, i) => {
                  const [name, price] = item.split(':');
                  return (
                    <div key={i} className="flex justify-between items-end border-b border-[#262626]/5 pb-4 group">
                      <div className="group-hover:translate-x-1 transition-transform">
                        <p className="text-lg font-bold text-[#262626]">{name}</p>
                        <p className="text-xs text-[#1C1917]/50">Signature Choice</p>
                      </div>
                      <p className="font-medium text-[#B45309]">{price}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {profile.seasonal_events && (
              <div className="bg-[#262626] text-white p-8 rounded">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#B45309] mb-4">Seasonal Events</h3>
                <p className="leading-relaxed text-white/80">{profile.seasonal_events}</p>
              </div>
            )}

            <div className="text-center">
              <p className="text-sm text-[#1C1917]/40 mb-2">All prices include tax.</p>
              <p className="text-sm text-[#1C1917]/40">We accept cash and major credit cards.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer profile={profile} />
    </div>
  );
}