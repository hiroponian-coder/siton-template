import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import MenuPreview from '@/components/MenuPreview';
import AccessInfo from '@/components/AccessInfo';
import Footer from '@/components/Footer';
import { ArrowRight, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) return <div className="flex h-screen items-center justify-center">Site not found or profile missing.</div>;

  return (
    <main className="min-h-screen bg-white">
      <Header profile={profile} />
      <Hero profile={profile} />
      <Features profile={profile} />
      <MenuPreview profile={profile} />
      
      {/* Dynamic CTA Section */}
      <section className="bg-[#e17055] py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            {profile.target_actions || '最高の一杯で、あなたの日常を彩ります。'}
          </h2>
          <p className="mb-10 text-lg opacity-90">
            {profile.coupon_info || '今すぐ来店して、特別な時間をお過ごしください。'}
          </p>
          <Link href="/menu" className="inline-flex items-center justify-center bg-[#2d3436] px-10 py-4 text-sm font-bold tracking-widest text-white transition-all hover:scale-105">
            VIEW MENU <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <AccessInfo profile={profile} />
      <Footer profile={profile} />
    </main>
  );
}