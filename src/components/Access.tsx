import { Profile } from '@/types/profile';
import { MapPin, Clock, Phone, Share2 } from 'lucide-react';

export default function Access({ profile }: { profile: Profile }) {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-[#111827] mb-8">Visit Us</h2>
              <p className="text-[#4B5563] leading-relaxed mb-8">
                都会の喧騒から離れた隠れ家的な空間。{profile.store_name}で、心ゆくまでリラックスした時間をお過ごしください。
              </p>
            </div>

            <div className="space-y-6">
              {profile.address && (
                <div className="flex items-start">
                  <MapPin className="text-[#C2410C] mr-4 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-[#111827]">ADDRESS</p>
                    <p className="text-[#4B5563]">{profile.address}</p>
                  </div>
                </div>
              )}
              
              {profile.business_hours && (
                <div className="flex items-start">
                  <Clock className="text-[#C2410C] mr-4 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-[#111827]">OPENING HOURS</p>
                    <p className="text-[#4B5563]">{profile.business_hours}</p>
                  </div>
                </div>
              )}

              {profile.contact_method && (
                <div className="flex items-start">
                  <Phone className="text-[#C2410C] mr-4 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-[#111827]">CONTACT</p>
                    <p className="text-[#4B5563]">{profile.contact_method}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-200 min-h-[400px] rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            {/* Google Map Mockup */}
            <div className="w-full h-full flex items-center justify-center flex-col text-[#4B5563]">
              <MapPin size={48} className="mb-4 opacity-30" />
              <p className="text-sm uppercase tracking-widest">Interactive Map View</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}