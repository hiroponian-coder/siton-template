import { Profile } from '@/types';
import { MapPin, Clock, Info, Car, Users } from 'lucide-react';

export default function Access({ profile }: { profile: Profile }) {
  if (!profile.address && !profile.access_info && !profile.business_hours) return null;

  return (
    <section className="py-20 px-4 bg-[#FFF9F5]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#FF6B81] mb-4">
            Store Info
          </h2>
          <div className="w-24 h-2 bg-[#FDCB6E] mx-auto rounded-full" />
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border-4 border-[#FDCB6E]">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {profile.address && (
                <div className="flex gap-4">
                  <div className="mt-1 bg-[#FF6B81] text-white p-3 rounded-xl h-fit">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-[#3E2723] text-lg mb-1">住所</h3>
                    <p className="text-[#3E2723] font-medium">{profile.address}</p>
                    {profile.access_info && (
                      <p className="text-sm text-[#3E2723]/70 mt-1">{profile.access_info}</p>
                    )}
                  </div>
                </div>
              )}

              {profile.business_hours && (
                <div className="flex gap-4">
                  <div className="mt-1 bg-[#FF6B81] text-white p-3 rounded-xl h-fit">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-[#3E2723] text-lg mb-1">営業時間</h3>
                    <p className="text-[#3E2723] font-medium whitespace-pre-wrap">{profile.business_hours}</p>
                  </div>
                </div>
              )}

              {(profile.seats_count || profile.parking_info) && (
                <div className="flex gap-4">
                  <div className="mt-1 bg-[#FF6B81] text-white p-3 rounded-xl h-fit">
                    <Info size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-[#3E2723] text-lg mb-1">設備</h3>
                    {profile.seats_count && (
                      <p className="text-[#3E2723] font-medium flex items-center gap-2 mb-1">
                        <Users size={16} className="text-[#FDCB6E]"/> {profile.seats_count}
                      </p>
                    )}
                    {profile.parking_info && (
                      <p className="text-[#3E2723] font-medium flex items-center gap-2">
                        <Car size={16} className="text-[#FDCB6E]"/> {profile.parking_info}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="w-full h-[300px] md:h-full bg-[#FFF9F5] rounded-3xl border-4 border-[#FF6B81] overflow-hidden flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#FF6B81 2px, transparent 2px)', backgroundSize: '20px 20px' }} />
              <div className="text-center z-10 bg-white/90 p-6 rounded-2xl shadow-lg border-2 border-[#FDCB6E]">
                <MapPin size={48} className="text-[#FF6B81] mx-auto mb-2 animate-bounce" />
                <p className="font-bold text-[#3E2723]">Map Info Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}