import { getStoreProfile } from '@/lib/supabase';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Clock, Phone, Users, Car } from 'lucide-react';

export default async function AccessPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) return null;

  return (
    <main className="bg-[#F9FAFB] min-h-screen">
      <Navigation profile={profile} />
      <div className="pt-32 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4 text-center">Access</h1>
          <div className="w-24 h-1 bg-[#8B5CF6] mx-auto mb-16 rounded-full"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="bg-[#8B5CF6]/10 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-[#8B5CF6]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Address</h3>
                    <p className="text-gray-600">{profile.address || 'Address information not provided.'}</p>
                    {profile.access_info && <p className="mt-2 text-sm text-[#8B5CF6]">{profile.access_info}</p>}
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="bg-[#8B5CF6]/10 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-[#8B5CF6]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600 whitespace-pre-wrap">{profile.business_hours || 'TBA'}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {profile.seats_count && (
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <Users className="w-5 h-5 text-[#8B5CF6] mb-3" />
                    <h4 className="font-bold">Seats</h4>
                    <p className="text-gray-600">{profile.seats_count} 席</p>
                  </div>
                )}
                {profile.parking_info && (
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <Car className="w-5 h-5 text-[#8B5CF6] mb-3" />
                    <h4 className="font-bold">Parking</h4>
                    <p className="text-gray-600">{profile.parking_info}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gray-200 rounded-3xl overflow-hidden min-h-[400px] flex items-center justify-center text-gray-400 relative">
              {/* Mock Map Placeholder */}
              <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale opacity-50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="bg-white p-6 rounded-2xl shadow-2xl text-center max-w-sm">
                  <MapPin className="w-10 h-10 text-[#8B5CF6] mx-auto mb-4" />
                  <h4 className="font-bold text-[#111827] mb-2">Google Maps</h4>
                  <p className="text-sm text-gray-500 mb-6">実際の地図はこちらからご確認ください</p>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.address || '')}`} target="_blank" rel="noreferrer" className="block w-full py-3 bg-[#111827] text-white rounded-lg font-bold transition-transform hover:scale-105">
                    Open Map
                  </a>
                </div>
              </div>
            </div>
          </div>

          {profile.contact_method && (
            <div className="mt-16 bg-[#8B5CF6] text-white p-10 rounded-3xl text-center">
              <h3 className="text-2xl font-bold mb-4">Reservations & Contact</h3>
              <p className="text-xl mb-8 opacity-90">{profile.contact_method}</p>
              {profile.line_id && (
                <a href={`https://line.me/ti/p/${profile.line_id}`} className="inline-flex items-center px-8 py-4 bg-white text-[#8B5CF6] rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
                  Contact via LINE
                </a>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer profile={profile} />
    </main>
  );
}