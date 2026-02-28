import { Profile } from '@/types/profile';
import { MapPin, Clock, Phone, Car } from 'lucide-react';

export default function LocationAccess({ profile }: { profile: Profile }) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[#C4A484] uppercase tracking-[0.3em] text-sm mb-4 block">Access</span>
            <h2 className="text-4xl font-light text-[#1A1A1A] mb-12">Visit Store</h2>
            
            <div className="space-y-10">
              {profile.address && (
                <div className="flex gap-6">
                  <MapPin className="text-[#C4A484] shrink-0" size={28} />
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-2">Location</h3>
                    <p className="text-[#333333] leading-relaxed">{profile.address}</p>
                    {profile.access_info && <p className="text-sm text-gray-500 mt-2">{profile.access_info}</p>}
                  </div>
                </div>
              )}

              {profile.business_hours && (
                <div className="flex gap-6">
                  <Clock className="text-[#C4A484] shrink-0" size={28} />
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-2">Opening Hours</h3>
                    <p className="text-[#333333]">{profile.business_hours}</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                {profile.seats_count && (
                  <div>
                    <h3 className="font-bold text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">Capacity</h3>
                    <p className="text-sm">{profile.seats_count} Seats</p>
                  </div>
                )}
                {profile.parking_info && (
                  <div>
                    <h3 className="font-bold text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">Parking</h3>
                    <p className="text-sm">{profile.parking_info}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="h-[400px] lg:h-auto bg-[#F0F0F0] relative overflow-hidden grayscale contrast-125">
             {/* Placeholder for map */}
             <div className="absolute inset-0 flex items-center justify-center text-gray-400">
               <MapPin size={48} className="opacity-20 animate-pulse" />
               <span className="absolute bottom-8 text-xs uppercase tracking-widest">Map View Locked</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}