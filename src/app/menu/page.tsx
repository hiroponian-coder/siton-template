import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import PageHeader from '@/components/PageHeader';
import MenuList from '@/components/MenuList';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default async function Menu() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;
  
  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#2C1E16] bg-[#FDFBF7]">
        <p className="text-xl">Site not found or profile missing.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header profile={profile} />
      <main className="flex-grow">
        <PageHeader title="Menu" subtitle="こだわりの自家製メニュー" />
        <MenuList profile={profile} />
        <CallToAction profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}