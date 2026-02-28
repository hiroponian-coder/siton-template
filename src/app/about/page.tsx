import { MapPin, Clock, Users, Car, Phone } from 'lucide-react'
import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function AboutPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header profile={profile} />
      <main className="flex-grow">
        <div className="bg-[#F9F9F9] py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold text-[#1A1A1A] mb-8">About Us</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {profile.store_strengths || '私たちは、最高のコーヒー体験を提供するために生まれました。厳選された豆、熟練した技術、そして心から安らげる空間づくりに一切の妥協はありません。'}
              </p>
            </div>
          </div>
        </div>

        <div className="py-24 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-[#1A1A1A]">Store Information</h2>
              <div className="space-y-8">
                {profile.address && (
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-[#B38B6D] mr-4 shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Address</h4>
                      <p className="text-gray-600">{profile.address}</p>
                    </div>
                  </div>
                )}
                {profile.business_hours && (
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-[#B38B6D] mr-4 shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Business Hours</h4>
                      <p className="text-gray-600">{profile.business_hours}</p>
                    </div>
                  </div>
                )}
                {profile.seats_count && (
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-[#B38B6D] mr-4 shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Seats</h4>
                      <p className="text-gray-600">{profile.seats_count} 席</p>
                    </div>
                  </div>
                )}
                {profile.parking_info && (
                  <div className="flex items-start">
                    <Car className="w-6 h-6 text-[#B38B6D] mr-4 shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Parking</h4>
                      <p className="text-gray-600">{profile.parking_info}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="bg-gray-100 rounded-3xl min-h-[400px] flex items-center justify-center overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2047"
                alt="Map Placeholder"
                className="w-full h-full object-cover"
               />
            </div>
          </div>
        </div>
      </main>
      <Footer profile={profile} />
    </div>
  );
}