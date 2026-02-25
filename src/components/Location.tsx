import { Profile } from '@/types/profile';
import { MapPin, Clock, Armchair, Car } from 'lucide-react';

export default function Location({ profile }: { profile: Profile }) {
  return (
    <section className="py-24 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[#D4AF37] tracking-[0.3em] text-sm uppercase">Information</span>
            <h2 className="text-4xl font-serif mt-2 mb-12">Visit Us</h2>
            
            <div className="space-y-8">
              {profile.address && (
                <div className="flex items-start">
                  <MapPin className="mr-4 text-[#D4AF37]" size={24} />
                  <div>
                    <p className="text-sm text-gray-400 mb-1 tracking-widest uppercase">Address</p>
                    <p className="text-lg font-light">{profile.address}</p>
                  </div>
                </div>
              )}
              
              {profile.business_hours && (
                <div className="flex items-start">
                  <Clock className="mr-4 text-[#D4AF37]" size={24} />
                  <div>
                    <p className="text-sm text-gray-400 mb-1 tracking-widest uppercase">Hours</p>
                    <p className="text-lg font-light">{profile.business_hours}</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-8">
                {profile.seats_count && (
                  <div className="flex items-start">
                    <Armchair className="mr-4 text-[#D4AF37]" size={24} />
                    <div>
                      <p className="text-sm text-gray-400 mb-1 tracking-widest uppercase">Seats</p>
                      <p className="text-lg font-light">{profile.seats_count}</p>
                    </div>
                  </div>
                )}
                {profile.parking_info && (
                  <div className="flex items-start">
                    <Car className="mr-4 text-[#D4AF37]" size={24} />
                    <div>
                      <p className="text-sm text-gray-400 mb-1 tracking-widest uppercase">Parking</p>
                      <p className="text-lg font-light">{profile.parking_info}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="h-[400px] bg-gray-800 relative grayscale opacity-60 hover:grayscale-0 transition-all duration-700">
             {/* Map Placeholder */}
             <div className="absolute inset-0 flex items-center justify-center border border-gray-700">
                <p className="text-sm tracking-widest">GOOGLE MAPS INTEGRATION</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}