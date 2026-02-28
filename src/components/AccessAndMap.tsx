import { MapPin, Clock, Phone, Car } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function AccessAndMap({ profile }: { profile: Profile }) {
  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-50 rounded-3xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20">
            <h2 className="text-3xl font-bold text-[#1B2E35] mb-12">Access</h2>
            
            <div className="space-y-10">
              {profile.address && (
                <div className="flex gap-6">
                  <MapPin className="w-6 h-6 text-[#C9A050] flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#1B2E35] mb-1">Location</p>
                    <p className="text-gray-500">{profile.address}</p>
                    <p className="text-sm text-gray-400 mt-2">{profile.access_info}</p>
                  </div>
                </div>
              )}

              {profile.business_hours && (
                <div className="flex gap-6">
                  <Clock className="w-6 h-6 text-[#C9A050] flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#1B2E35] mb-1">Opening Hours</p>
                    <p className="text-gray-500 whitespace-pre-wrap">{profile.business_hours}</p>
                  </div>
                </div>
              )}

              {(profile.parking_info || profile.seats_count) && (
                <div className="flex gap-6">
                  <Car className="w-6 h-6 text-[#C9A050] flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#1B2E35] mb-1">Facilities</p>
                    <p className="text-gray-500">{profile.parking_info && `駐車場: ${profile.parking_info}`} {profile.seats_count && ` / 座席: ${profile.seats_count}`}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:w-1/2 h-80 lg:h-auto min-h-[400px] bg-gray-200 grayscale">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(profile.address || '')}`}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}