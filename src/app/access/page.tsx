import { MapPin, Clock, Phone, Send } from 'lucide-react'
import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function AccessPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) return <div>Site not found.</div>;

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Header profile={profile} />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-[#2C3E50] mb-16 tracking-tight text-center">ACCESS</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-[#D4A373]/10 rounded-full">
                  <MapPin className="text-[#D4A373]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Location</h3>
                  <p className="text-lg text-[#1A1A1A]/80">{profile.address || 'Coming soon'}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-[#D4A373]/10 rounded-full">
                  <Clock className="text-[#D4A373]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Business Hours</h3>
                  <p className="text-lg text-[#1A1A1A]/80">{profile.business_hours || 'Contact us for hours'}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-[#D4A373]/10 rounded-full">
                  <Phone className="text-[#D4A373]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Contact</h3>
                  <p className="text-lg text-[#1A1A1A]/80">{profile.contact_method || 'N/A'}</p>
                </div>
              </div>

              {profile.line_id && (
                <div className="pt-8">
                  <a href={`https://line.me/R/ti/p/${profile.line_id}`} className="inline-flex items-center gap-3 px-8 py-4 bg-[#06C755] text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-all">
                    <Send size={24} />
                    LINEで予約・お問い合わせ
                  </a>
                </div>
              )}
            </div>

            <div className="w-full aspect-square bg-[#2C3E50]/5 rounded-sm overflow-hidden border border-[#2C3E50]/10 flex items-center justify-center">
               {/* In a real scenario, integrate Google Maps iframe with profile.address */}
               <p className="text-[#2C3E50]/40 font-medium italic">Google Maps Integration Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      <Footer profile={profile} />
    </main>
  );
}