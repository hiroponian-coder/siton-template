import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function AboutPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) return <div>Site not found.</div>;

  return (
    <main className="min-h-screen bg-white">
      <Header profile={profile} />
      
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <img 
                src={profile.image_urls?.[1] || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200'} 
                alt="Interior" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-4 text-sm font-bold tracking-[0.3em] text-[#e17055]">CONCEPT</h2>
              <h3 className="mb-8 text-4xl font-bold text-[#2d3436] leading-tight">落ち着きと洗練が共存する<br />都会のオアシス</h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                {profile.store_name}は、忙しい日常から少しだけ離れ、自分自身と向き合える場所を提供したいという想いから誕生しました。
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                {profile.store_strengths || '選び抜かれた豆、光が差し込む心地よいインテリア、そして真心を込めた接客。そのすべてが、最高の一杯を引き立てるエッセンスです。'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9f9f9] py-24">
        <div className="container mx-auto px-6 text-center">
          <h3 className="mb-12 text-3xl font-bold text-[#2d3436]">GALLERY</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {(profile.image_urls || [1,2,3,4]).map((url, idx) => (
              <div key={idx} className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src={typeof url === 'string' ? url : `https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&q=80&w=600&sig=${idx}`} 
                  className="h-full w-full object-cover transition-transform hover:scale-110" 
                  alt={`Gallery ${idx}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer profile={profile} />
    </main>
  );
}