import { Calendar, Users, Clock } from 'lucide-react'
import { getStoreProfile } from '@/lib/supabase';
import { Profile } from '@/types/profile';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MOCK_PROFILE: Profile = {
  store_name: 'カフェサイトン',
  line_id: 'cafe_saiton_line_id'
};

export default async function ReservationPage() {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const profileFromDb = siteId ? await getStoreProfile(siteId) : null;
  const profile = profileFromDb || MOCK_PROFILE;

  return (
    <main className="bg-[#FAFAFA]">
      <Header profile={profile} />
      <section className="pt-32 pb-24 px-4">
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 shadow-2xl">
          <h1 className="text-3xl font-serif font-bold text-center mb-12">Reservation</h1>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
               <div className="flex-1">
                 <label className="block text-sm font-bold mb-2">Date</label>
                 <div className="relative">
                   <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                   <input type="date" className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:outline-none focus:border-[#C5A059]" />
                 </div>
               </div>
               <div className="flex-1">
                 <label className="block text-sm font-bold mb-2">Time</label>
                 <div className="relative">
                   <Clock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                   <input type="time" className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:outline-none focus:border-[#C5A059]" />
                 </div>
               </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Guests</label>
              <div className="relative">
                 <Users className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                 <select className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:outline-none focus:border-[#C5A059] appearance-none">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>Group (5+)</option>
                 </select>
              </div>
            </div>
            <button className="w-full py-4 bg-[#1A1A1A] text-white font-bold hover:bg-[#C5A059] transition-all">
              CHECK AVAILABILITY
            </button>
          </div>
          
          {profile.line_id && (
            <div className="mt-12 pt-8 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500 mb-4">LINEでのご予約も承っております</p>
              <a 
                href={`https://line.me/R/ti/p/@${profile.line_id}`} 
                className="inline-flex items-center space-x-2 px-8 py-3 bg-[#06C755] text-white rounded-full font-bold hover:opacity-90 transition-opacity"
              >
                <span>LINE公式アカウント</span>
              </a>
            </div>
          )}
        </div>
      </section>
      <Footer profile={profile} />
    </main>
  );
}