import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default async function AccessPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID || "seiton13-demo";
  const profile = await getStoreProfile(siteId);

  if (!profile) return null;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
      <Header profile={profile} />
      <main className="flex-grow">
        <div className="py-24 px-4 container mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h1 className="text-5xl font-bold text-[#262626] mb-8 tracking-tighter">Access</h1>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <MapPin className="text-[#B45309] shrink-0" size={24} />
                  <div>
                    <h3 className="text-sm font-bold text-[#262626]/40 uppercase tracking-widest mb-1">Location</h3>
                    <p className="text-xl font-medium">{profile.address}</p>
                    {profile.parking_info && <p className="text-[#1C1917]/60 mt-2">{profile.parking_info}</p>}
                  </div>
                </div>

                <div className="flex gap-6">
                  <Clock className="text-[#B45309] shrink-0" size={24} />
                  <div>
                    <h3 className="text-sm font-bold text-[#262626]/40 uppercase tracking-widest mb-1">Open Hours</h3>
                    <p className="text-xl font-medium">{profile.business_hours}</p>
                  </div>
                </div>

                {profile.contact_method && (
                  <div className="flex gap-6">
                    <Phone className="text-[#B45309] shrink-0" size={24} />
                    <div>
                      <h3 className="text-sm font-bold text-[#262626]/40 uppercase tracking-widest mb-1">Contact</h3>
                      <p className="text-xl font-medium">{profile.contact_method}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-16 p-8 bg-white border border-[#262626]/10">
                <h3 className="font-bold mb-4 italic">Reservation Guidance</h3>
                <p className="text-[#1C1917]/70 mb-6">
                  ご予約はInstagramのDM、またはお電話にて承っております。週末は混み合いますので事前のご連絡をお勧めいたします。
                </p>
                {profile.contact_method && (
                  <button className="w-full py-4 bg-[#262626] text-white font-bold hover:bg-[#1C1917] transition-colors">
                    Contact Us Now
                  </button>
                )}
              </div>
            </div>

            <div className="relative h-[400px] md:h-auto bg-[#262626]/5 rounded-lg overflow-hidden border border-[#262626]/10">
              <div className="absolute inset-0 flex items-center justify-center text-[#1C1917]/30">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto mb-4 opacity-20" />
                  <p className="text-sm uppercase tracking-tighter">Map Visualization</p>
                  <p className="text-xs">{profile.address}</p>
                </div>
              </div>
              {/* Map integration would happen here with an iframe or library */}
            </div>
          </div>
        </div>
      </main>
      <Footer profile={profile} />
    </div>
  );
}