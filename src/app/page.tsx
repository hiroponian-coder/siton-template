import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ModernBrandConcept from '@/components/ModernBrandConcept';
import DynamicMenuGrid from '@/components/DynamicMenuGrid';
import VisualGallery from '@/components/VisualGallery';
import SupabaseStoreAccess from '@/components/SupabaseStoreAccess';
import ActionReservationCta from '@/components/ActionReservationCta';
import Footer from '@/components/Footer';

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F9F9F9]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#2D2D2D]">Site Not Found</h1>
          <p className="text-gray-500">Please check your NEXT_PUBLIC_SITE_ID.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="overflow-hidden">
      <Header profile={profile} />
      <Hero profile={profile} />
      <ModernBrandConcept profile={profile} />
      {profile.menu_items && <DynamicMenuGrid profile={profile} />}
      <VisualGallery profile={profile} />
      <SupabaseStoreAccess profile={profile} />
      <ActionReservationCta profile={profile} />
      <Footer profile={profile} />
    </main>
  );
}