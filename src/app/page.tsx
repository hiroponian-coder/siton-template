import { MapPin, Clock, Phone } from 'lucide-react'
import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import FeaturedMenu from '@/components/FeaturedMenu';
import Footer from '@/components/Footer';

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) return <div className="flex items-center justify-center min-h-screen">Site not found or profile missing.</div>;

  return (
    <main className="min-h-screen bg-[#FAFAFA] font-sans text-[#1A1A1A]">
      <Header profile={profile} />
      <Hero profile={profile} />
      
      <Introduction profile={profile} />
      
      <FeaturedMenu profile={profile} />

      {/* Simple Access Summary Section */}
      <section className="py-24 bg-[#2C3E50] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {profile.address && (
              <div className="flex flex-col items-center gap-4">
                <MapPin className="text-[#D4A373]" size={32} />
                <p className="text-lg">{profile.address}</p>
              </div>
            )}
            {profile.business_hours && (
              <div className="flex flex-col items-center gap-4">
                <Clock className="text-[#D4A373]" size={32} />
                <p className="text-lg">{profile.business_hours}</p>
              </div>
            )}
            {profile.contact_method && (
              <div className="flex flex-col items-center gap-4">
                <Phone className="text-[#D4A373]" size={32} />
                <p className="text-lg">{profile.contact_method}</p>
              </div>
            )}
          </div>
          <div className="mt-12">
            <a href="/access" className="px-8 py-3 border border-white/30 hover:bg-white hover:text-[#2C3E50] transition-all">
              VIEW DETAILS
            </a>
          </div>
        </div>
      </section>

      <Footer profile={profile} />
    </main>
  );
}