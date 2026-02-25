import { getStoreProfile } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function MenuPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID || 'default-site';
  const profile = await getStoreProfile(siteId);

  if (!profile) return null;

  const items = profile.menu_items?.split(',').map(item => {
    const [name, price] = item.split(':');
    return { name, price };
  }) || [];

  return (
    <main className="min-h-screen">
      <Navbar profile={profile} />
      
      <section className="pt-40 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h1 className="text-6xl font-serif mb-4">Menu</h1>
            <p className="text-gray-500 tracking-widest uppercase text-sm">Quality Selections & Delights</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
            {/* Coffee Category */}
            <div>
              <h3 className="text-2xl font-serif border-b border-gray-200 pb-4 mb-8">Beverages</h3>
              <ul className="space-y-6">
                {items.filter(i => i.name.includes('コーヒー')).map((item, idx) => (
                  <li key={idx} className="flex justify-between items-end group">
                    <span className="text-lg group-hover:text-[#D4AF37] transition-colors">{item.name}</span>
                    <span className="border-b border-dotted border-gray-300 flex-grow mx-4 mb-2"></span>
                    <span className="font-medium">¥{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Food/Dessert Category */}
            <div>
              <h3 className="text-2xl font-serif border-b border-gray-200 pb-4 mb-8">Food & Sweets</h3>
              <ul className="space-y-6">
                {items.filter(i => !i.name.includes('コーヒー')).map((item, idx) => (
                  <li key={idx} className="flex justify-between items-end group">
                    <span className="text-lg group-hover:text-[#D4AF37] transition-colors">{item.name}</span>
                    <span className="border-b border-dotted border-gray-300 flex-grow mx-4 mb-2"></span>
                    <span className="font-medium">¥{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {profile.coupon_info && (
            <div className="mt-24 p-12 bg-[#FAFAFA] border border-gray-100 text-center">
              <p className="text-[#D4AF37] tracking-[0.2em] text-xs font-bold mb-4 uppercase">Special Offer</p>
              <h4 className="text-2xl font-serif mb-2">{profile.coupon_info}</h4>
              <p className="text-gray-500">ご注文時にこちらの画面をご提示ください。</p>
            </div>
          )}
        </div>
      </section>

      <Footer profile={profile} />
    </main>
  );
}