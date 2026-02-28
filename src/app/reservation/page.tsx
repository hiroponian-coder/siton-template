import { MessageCircle, ExternalLink, Calendar } from 'lucide-react'
import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function ReservationPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID || 'cafe-saiton-23';
  const profile = await getStoreProfile(siteId);
  if (!profile) return null;

  return (
    <main className="bg-[#F9F7F2] min-h-screen">
      <Header profile={profile} />
      <section className="py-24 px-4">
        <div className="max-w-xl mx-auto text-center">
          <Calendar className="w-12 h-12 text-[#D4AF37] mx-auto mb-6" />
          <h1 className="text-4xl text-[#2C3E50] font-serif mb-6">Reservation</h1>
          <p className="text-[#1A1A1A]/70 mb-12">
            お席のご予約やイベントのご相談は、公式LINEまたはお電話にて承っております。
          </p>

          <div className="space-y-6">
            {profile.line_id && (
              <a 
                href={`https://line.me/ti/p/${profile.line_id}`} 
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full py-5 bg-[#06C755] text-white rounded-none font-bold hover:opacity-90 transition-opacity uppercase tracking-widest"
              >
                <MessageCircle className="w-5 h-5" />
                Lineで予約・注文
              </a>
            )}
            
            <div className="bg-white p-8 border border-[#2C3E50]/10 text-left">
              <h3 className="text-[#2C3E50] font-bold text-sm uppercase mb-4 tracking-widest">Policy</h3>
              <ul className="text-xs text-[#1A1A1A]/60 space-y-3 leading-relaxed">
                <li>• 当日のキャンセルは、必ずお電話にてご連絡ください。</li>
                <li>• ご予約時間を15分過ぎた場合は、キャンセル扱いとさせていただく場合がございます。</li>
                <li>• 混雑時はお席の時間を2時間までとさせていただきます。</li>
              </ul>
            </div>

            {profile.contact_method && (
              <p className="mt-8 text-sm text-[#2C3E50]/60">
                Other contact: <span className="font-bold">{profile.contact_method}</span>
              </p>
            )}
          </div>
        </div>
      </section>
      <Footer profile={profile} />
    </main>
  );
}