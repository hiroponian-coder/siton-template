import { Profile } from '@/types/profile';
import { MapPin, Clock, Phone, Car, Users } from 'lucide-react';

export default function AccessInfo({ profile }: { profile: Profile }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-8">Information</h2>
            <div className="space-y-8">
              {profile.address && (
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#f8f9fa] rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-[#d4a373]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a1a] mb-1">Location</h4>
                    <p className="text-[#2d2d2d]">{profile.address}</p>
                  </div>
                </div>
              )}
              {profile.business_hours && (
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#f8f9fa] rounded-full flex items-center justify-center shrink-0">
                    <Clock className="text-[#d4a373]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a1a] mb-1">Hours</h4>
                    <p className="text-[#2d2d2d]">{profile.business_hours}</p>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-2 gap-4">
                {profile.seats_count && (
                  <div className="flex items-center gap-3 p-4 bg-[#f8f9fa] rounded-xl">
                    <Users className="w-5 h-5 text-[#d4a373]" />
                    <span className="text-sm text-[#2d2d2d]">{profile.seats_count} Seats</span>
                  </div>
                )}
                {profile.parking_info && (
                  <div className="flex items-center gap-3 p-4 bg-[#f8f9fa] rounded-xl">
                    <Car className="w-5 h-5 text-[#d4a373]" />
                    <span className="text-sm text-[#2d2d2d]">{profile.parking_info}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="relative min-h-[400px] bg-[#1a1a1a] rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center">
               <p className="text-white/40">Map View Rendering...</p>
            </div>
            {/* In a real scenario, use Google Maps iframe here using profile.address */}
          </div>
        </div>
      </div>
    </section>
  );
}