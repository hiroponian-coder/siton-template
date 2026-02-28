import { MapPin, Clock, Phone, Car } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function AccessSection({ profile }: { profile: Profile }) {
  return (
    <section id="access" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] text-[#C5A059] mb-4">VISIT US</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A] mb-12">アクセス</h3>
            
            <div className="space-y-8">
              {profile.address && (
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[#C5A059] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg mb-1">住所</p>
                    <p className="text-gray-600">{profile.address}</p>
                  </div>
                </div>
              )}

              {profile.business_hours && (
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-[#C5A059] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg mb-1">営業時間</p>
                    <p className="text-gray-600 whitespace-pre-wrap">{profile.business_hours}</p>
                  </div>
                </div>
              )}

              {profile.contact_method && (
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-[#C5A059] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg mb-1">お問い合わせ</p>
                    <p className="text-gray-600">{profile.contact_method}</p>
                  </div>
                </div>
              )}

              {profile.parking_info && (
                <div className="flex items-start space-x-4">
                  <Car className="w-6 h-6 text-[#C5A059] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg mb-1">駐車場</p>
                    <p className="text-gray-600">{profile.parking_info}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="h-[400px] lg:h-[600px] bg-gray-200 grayscale contrast-125 rounded-sm overflow-hidden border border-gray-100 shadow-2xl">
            {/* Replace with actual iframe if coordinates are available, else fallback visual */}
            <div className="w-full h-full flex items-center justify-center bg-[#1A1A1A] text-[#C5A059] font-serif italic text-2xl">
              Cafe Map View
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}