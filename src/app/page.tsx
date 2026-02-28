import { getStoreProfile } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BrandFeatures from '@/components/BrandFeatures';
import DynamicMenuPreview from '@/components/DynamicMenuPreview';
import AccessMap from '@/components/AccessMap';
import Footer from '@/components/Footer';

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Site not found or profile missing.</p>
      </div>
    );
  }

  return (
    <main className="bg-[#FFFFFF] text-[#111827]">
      <Navbar profile={profile} />
      <HeroSection profile={profile} />
      <BrandFeatures profile={profile} />
      {profile.menu_items && <DynamicMenuPreview profile={profile} />}
      <AccessMap profile={profile} />
      <Footer profile={profile} />
    </main>
  );
}