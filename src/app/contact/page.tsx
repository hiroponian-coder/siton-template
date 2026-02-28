import { Send, MessageSquare } from 'lucide-react'
import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function ContactPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profile = siteId ? await getStoreProfile(siteId) : null;

  if (!profile) return null;

  return (
    <main className="bg-[#FFFFFF]">
      <Header profile={profile} />
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-sm font-bold text-[#C9A050] tracking-[0.3em] uppercase mb-4">Contact Us</h1>
            <h2 className="text-4xl font-bold text-[#1B2E35]">お問い合わせ</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <MessageSquare className="w-8 h-8 text-[#C9A050] mb-6" />
              <h3 className="text-lg font-bold text-[#1B2E35] mb-2">LINEでお問い合わせ</h3>
              <p className="text-gray-500 text-sm mb-6">公式LINEでは24時間いつでもお問い合わせいただけます。</p>
              {profile.line_id ? (
                <a href={`https://line.me/R/ti/p/@${profile.line_id}`} className="inline-block bg-[#06C755] text-white px-6 py-2 rounded-full text-sm font-bold">
                  LINEを開く
                </a>
              ) : (
                <p className="text-xs text-gray-400 italic">Coming soon...</p>
              )}
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <Send className="w-8 h-8 text-[#1B2E35] mb-6" />
              <h3 className="text-lg font-bold text-[#1B2E35] mb-2">SNSでお問い合わせ</h3>
              <p className="text-gray-500 text-sm mb-6">InstagramのDMでもご予約・ご相談を承っております。</p>
              {profile.instagram_id ? (
                <a href={`https://instagram.com/${profile.instagram_id}`} className="inline-block bg-[#1B2E35] text-white px-6 py-2 rounded-full text-sm font-bold">
                  Instagramを開く
                </a>
              ) : (
                <p className="text-xs text-gray-400 italic">Coming soon...</p>
              )}
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Name</label>
                <input type="text" className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-[#C9A050]" placeholder="お名前" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Email</label>
                <input type="email" className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-[#C9A050]" placeholder="メールアドレス" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Message</label>
              <textarea rows={6} className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-[#C9A050]" placeholder="お問い合わせ内容をご記入ください"></textarea>
            </div>
            <button className="w-full bg-[#1B2E35] text-white py-5 rounded-xl font-bold hover:bg-[#C9A050] transition-colors">
              メッセージを送信する
            </button>
          </form>
        </div>
      </div>
      <Footer profile={profile} />
    </main>
  );
}