import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MenuSection from '@/components/MenuSection';

export default async function MenuPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID || 'default-id';
  const profile = await getStoreProfile(siteId);
  if (!profile) return null;

  return (
    <div className="bg-[#F8FAFC]">
      <Header profile={profile} />
      <div className="py-20">
        <MenuSection profile={profile} />
      </div>
      <Footer profile={profile} />
    </div>
  );
}