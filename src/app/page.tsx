import { getStoreProfile } from '@/lib/supabase';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Coffee, Clock, MapPin, Star, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

export default async function Home() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) return <div className="flex items-center justify-center min-h-screen">Site configuration not found.</div>;

  const heroImage = profile.image_urls?.[0] || 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80';

  return (
    <main className="bg-[#F9FAFB] text-[#1F2937]">
      <Navigation profile={profile} />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt={profile.store_name || ''} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#111827]/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            {profile.store_name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            都市の喧騒を離れ、洗練された一杯と出会う場所。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu" className="bg-[#8B5CF6] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center justify-center">
              Menu Explore <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/access" className="bg-white text-[#111827] px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center justify-center">
              Visit Us
            </Link>
          </div>
        </div>
      </section>

      {/* Strength / Introduction */}
      {profile.store_strengths && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-block p-3 bg-[#8B5CF6]/10 rounded-full mb-6">
              <Star className="w-6 h-6 text-[#8B5CF6]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Strength</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {profile.store_strengths}
            </p>
          </div>
        </section>
      )}

      {/* Features Grid */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <Coffee className="w-10 h-10 text-[#8B5CF6] mb-6" />
            <h3 className="text-xl font-bold mb-4">Premium Coffee</h3>
            <p className="text-gray-600">厳選された豆を使用し、バリスタが一杯ずつ丁寧に淹れ上げます。</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <Clock className="w-10 h-10 text-[#8B5CF6] mb-6" />
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <p className="text-gray-600">{profile.business_hours || '詳細はアクセスページへ'}</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <MapPin className="w-10 h-10 text-[#8B5CF6] mb-6" />
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p className="text-gray-600">{profile.address || '駅から徒歩5分'}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#8B5CF6]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">{profile.target_actions || 'Experience the Moment.'}</h2>
          {profile.line_id && (
            <Link href={`https://line.me/ti/p/${profile.line_id}`} className="inline-block bg-[#111827] text-white px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl transition-all">
              Connect on LINE
            </Link>
          )}
        </div>
      </section>

      <Footer profile={profile} />
    </main>
  );
}