import { MapPin, Clock, Users, Car } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function AccessInfo({ profile }: { profile: Profile }) {
  return (
    <section className="py-24 bg-[#F9F7F2] px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <span className="text-[#D4AF37] font-semibold tracking-widest text-sm">VISIT US</span>
              <h2 className="text-4xl text-[#2C3E50] mt-2 font-serif">Access & Info</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {profile.address && (
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-[#D4AF37] shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#2C3E50] text-sm uppercase mb-1">Address</h4>
                    <p className="text-[#1A1A1A]/70 text-sm">{profile.address}</p>
                  </div>
                </div>
              )}
              {profile.business_hours && (
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-[#D4AF37] shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#2C3E50] text-sm uppercase mb-1">Business Hours</h4>
                    <p className="text-[#1A1A1A]/70 text-sm">{profile.business_hours}</p>
                  </div>
                </div>
              )}
              {profile.seats_count && (
                <div className="flex gap-4">
                  <Users className="w-6 h-6 text-[#D4AF37] shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#2C3E50] text-sm uppercase mb-1">Seats</h4>
                    <p className="text-[#1A1A1A]/70 text-sm">{profile.seats_count}</p>
                  </div>
                </div>
              )}
              {profile.parking_info && (
                <div className="flex gap-4">
                  <Car className="w-6 h-6 text-[#D4AF37] shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#2C3E50] text-sm uppercase mb-1">Parking</h4>
                    <p className="text-[#1A1A1A]/70 text-sm">{profile.parking_info}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full h-[400px] bg-[#2C3E50]/5 rounded-sm overflow-hidden border border-[#2C3E50]/10">
            <iframe 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.05)' }} 
              loading="lazy" 
              allowFullScreen 
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(profile.address || profile.store_name || '')}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}