import { getStoreProfile } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Users, Clock } from 'lucide-react';

export default async function ReservationPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID || 'default_site_id';
  const profile = await getStoreProfile(siteId);

  if (!profile) return null;

  return (
    <main className="pt-20 bg-[#F9FAFB] min-h-screen font-sans">
      <Header profile={profile} />
      <div className="py-24 max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl shadow-black/5 overflow-hidden">
          <div className="bg-[#111827] p-12 text-white text-center">
            <h1 className="text-3xl font-bold mb-4 uppercase tracking-[0.2em]">Reservation</h1>
            <p className="text-gray-400">お席のご予約を承ります</p>
          </div>
          
          <div className="p-8 md:p-16">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                  <input type="text" placeholder="お名前" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-[#C2410C] bg-transparent" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone</label>
                  <input type="tel" placeholder="電話番号" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-[#C2410C] bg-transparent" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative">
                  <Calendar size={16} className="absolute right-0 top-10 text-gray-400" />
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Date</label>
                  <input type="date" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-[#C2410C] bg-transparent" />
                </div>
                <div className="relative">
                  <Clock size={16} className="absolute right-0 top-10 text-gray-400" />
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Time</label>
                  <input type="time" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-[#C2410C] bg-transparent" />
                </div>
                <div className="relative">
                  <Users size={16} className="absolute right-0 top-10 text-gray-400" />
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Guests</label>
                  <select className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-[#C2410C] bg-transparent">
                    <option>1名</option>
                    <option>2名</option>
                    <option>3名</option>
                    <option>4名</option>
                    <option>5名以上</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                <textarea rows={4} placeholder="ご要望などございましたらご記入ください" className="w-full border border-gray-100 p-4 focus:outline-none focus:border-[#C2410C] bg-gray-50 rounded-lg"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#111827] text-white py-5 rounded-full font-bold hover:bg-[#C2410C] transition-all duration-300 transform hover:translate-y-[-2px]">
                CONFIRM RESERVATION
              </button>
            </form>

            {profile.seats_count && (
              <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                <p>総座席数: {profile.seats_count}</p>
                <p>駐車場: {profile.parking_info || 'なし'}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer profile={profile} />
    </main>
  );
}