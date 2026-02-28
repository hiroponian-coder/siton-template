import { MapPin, Clock, Users, Car } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function AccessInfo({ profile }: { profile: Profile }) {
  return (
    <section className="py-24 bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">Information</h2>
              <dl className="space-y-6">
                {profile.address && (
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#C5A059] mr-4 mt-1" />
                    <div>
                      <dt className="text-xs text-[#C5A059] font-bold mb-1">ADDRESS</dt>
                      <dd className="text-[#2D2D2D]">{profile.address}</dd>
                    </div>
                  </div>
                )}
                {profile.business_hours && (
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-[#C5A059] mr-4 mt-1" />
                    <div>
                      <dt className="text-xs text-[#C5A059] font-bold mb-1">HOURS</dt>
                      <dd className="text-[#2D2D2D]">{profile.business_hours}</dd>
                    </div>
                  </div>
                )}
                {profile.seats_count && (
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-[#C5A059] mr-4 mt-1" />
                    <div>
                      <dt className="text-xs text-[#C5A059] font-bold mb-1">SEATS</dt>
                      <dd className="text-[#2D2D2D]">{profile.seats_count}</dd>
                    </div>
                  </div>
                )}
                {profile.parking_info && (
                  <div className="flex items-start">
                    <Car className="w-5 h-5 text-[#C5A059] mr-4 mt-1" />
                    <div>
                      <dt className="text-xs text-[#C5A059] font-bold mb-1">PARKING</dt>
                      <dd className="text-[#2D2D2D]">{profile.parking_info}</dd>
                    </div>
                  </div>
                )}
              </dl>
            </div>
          </div>
          <div className="w-full h-[400px] bg-gray-100 relative grayscale">
            {/* Placeholder for Google Maps - In production you'd use Google Maps API or an Embed */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 p-8 text-center">
              <div>
                <MapPin className="w-8 h-8 mx-auto mb-4 opacity-20" />
                <p className="text-sm">{profile.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}