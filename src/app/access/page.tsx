import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InfoSection from '@/components/InfoSection';

export default async function AccessPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID || 'default-id';
  const profile = await getStoreProfile(siteId);
  if (!profile) return null;

  return (
    <div className="bg-[#F8FAFC]">
      <Header profile={profile} />
      <div className="py-20">
        <InfoSection profile={profile} />
      </div>
      <Footer profile={profile} />
    </div>
  );
}