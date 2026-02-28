import { MapPin, Clock, Info, Phone } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function InfoSection({ profile }: { profile: Profile }) {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-[#0F172A] mb-6">店舗情報</h3>
              <p className="text-slate-600 mb-8">
                {profile.store_strengths}
              </p>
            </div>

            <div className="space-y-6">
              {profile.address && (
                <div className="flex items-start">
                  <MapPin className="text-[#B45309] mr-4 mt-1" size={24} />
                  <div>
                    <p className="font-bold text-[#1E293B]">所在地</p>
                    <p className="text-slate-600">{profile.address}</p>
                  </div>
                </div>
              )}
              {profile.business_hours && (
                <div className="flex items-start">
                  <Clock className="text-[#B45309] mr-4 mt-1" size={24} />
                  <div>
                    <p className="font-bold text-[#1E293B]">営業時間</p>
                    <p className="text-slate-600">{profile.business_hours}</p>
                  </div>
                </div>
              )}
              {profile.seats_count && (
                <div className="flex items-start">
                  <Info className="text-[#B45309] mr-4 mt-1" size={24} />
                  <div>
                    <p className="font-bold text-[#1E293B]">お席</p>
                    <p className="text-slate-600">{profile.seats_count}</p>
                  </div>
                </div>
              )}
              {profile.contact_method && (
                <div className="flex items-start">
                  <Phone className="text-[#B45309] mr-4 mt-1" size={24} />
                  <div>
                    <p className="font-bold text-[#1E293B]">お問い合わせ</p>
                    <p className="text-slate-600">{profile.contact_method}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="h-96 bg-slate-200 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(profile.address || '')}`}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
}