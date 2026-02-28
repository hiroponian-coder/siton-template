import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AccessSection from '@/components/AccessSection';
import { Mail, Phone, ExternalLink } from 'lucide-react';

export default async function AccessPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;
  if (!profile) return null;

  return (
    <main className="bg-[#FAFAFA] min-h-screen pt-16">
      <Header profile={profile} />
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-12 text-center">Access & Contact</h1>
          <AccessSection profile={profile} />
          
          <div className="mt-24 grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-6">Store Details</h3>
              <dl className="space-y-4 text-sm">
                <div className="flex justify-between border-b pb-2">
                  <dt className="text-gray-500">Seats</dt>
                  <dd className="font-medium">{profile.seats_count || 'N/A'}</dd>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <dt className="text-gray-500">Parking</dt>
                  <dd className="font-medium">{profile.parking_info || 'なし'}</dd>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <dt className="text-gray-500">Price Range</dt>
                  <dd className="font-medium">{profile.price_range || '1,000円〜'}</dd>
                </div>
              </dl>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {profile.contact_method && (
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#FAFAFA] rounded-full flex items-center justify-center text-[#D4A373]">
                      <Phone size={18} />
                    </div>
                    <span>{profile.contact_method}</span>
                  </div>
                )}
                {profile.instagram_id && (
                  <a href={`https://instagram.com/${profile.instagram_id}`} className="flex items-center gap-4 hover:text-[#D4A373] transition-colors">
                    <div className="w-10 h-10 bg-[#FAFAFA] rounded-full flex items-center justify-center text-[#D4A373]">
                      <ExternalLink size={18} />
                    </div>
                    <span>Instagram DM</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer profile={profile} />
    </main>
  );
}