import { Profile } from '@/types/profile';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function AccessSection({ profile }: { profile: Profile }) {
  return (
    <section className="py-24 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">Visit Us</h2>
            <div className="space-y-8">
              {profile.address && (
                <div className="flex gap-4">
                  <MapPin className="text-[#D4A373] shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-white/70">{profile.address}</p>
                    {profile.access_info && <p className="text-sm text-white/50 mt-1">{profile.access_info}</p>}
                  </div>
                </div>
              )}
              {profile.business_hours && (
                <div className="flex gap-4">
                  <Clock className="text-[#D4A373] shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Opening Hours</h4>
                    <p className="text-white/70">{profile.business_hours}</p>
                  </div>
                </div>
              )}
              {profile.contact_method && (
                <div className="flex gap-4">
                  <Phone className="text-[#D4A373] shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Contact</h4>
                    <p className="text-white/70">{profile.contact_method}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="relative h-[400px] bg-white/5 rounded-2xl overflow-hidden border border-white/10">
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(1.2)' }}
              src={`https://www.google.com/maps?q=${encodeURIComponent(profile.address || profile.store_name || '')}&output=embed`} 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}