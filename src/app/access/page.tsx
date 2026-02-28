import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Clock, Phone, Info } from 'lucide-react';

export default async function AccessPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) return null;

  return (
    <main className="min-h-screen pt-20">
      <Header profile={profile} />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 tracking-tighter uppercase">Access</h1>
            <p className="text-gray-400">店舗情報・アクセス</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-[#c5a059]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">ADDRESS</h3>
                  <p className="text-gray-600">{profile.address || '住所情報が未設定です。'}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="text-[#c5a059]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">HOURS</h3>
                  <p className="text-gray-600 whitespace-pre-line">{profile.business_hours || '営業時間はお問い合わせください。'}</p>
                </div>
              </div>

              {profile.contact_method && (
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-[#c5a059]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">CONTACT</h3>
                    <p className="text-gray-600">{profile.contact_method}</p>
                  </div>
                </div>
              )}

              {profile.parking_info && (
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <Info className="text-[#c5a059]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">PARKING</h3>
                    <p className="text-gray-600">{profile.parking_info}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
               {/* Google Map Placeholder */}
               <div className="text-center px-10">
                 <MapPin size={48} className="mx-auto text-gray-300 mb-4" />
                 <p className="text-gray-500 font-medium">Google Maps Integration</p>
                 <p className="text-sm text-gray-400 mt-2">{profile.address}</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer profile={profile} />
    </main>
  );
}