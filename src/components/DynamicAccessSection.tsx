import { MapPin, Clock, Car, Phone } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function DynamicAccessSection({ profile }: { profile: Profile }) {
  return (
    <section id="access" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-slate-100 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-[#334155] mb-4">Information</h2>
              <p className="text-slate-500">アクセス・店舗情報</p>
            </div>
            <div className="space-y-6">
              {profile.address && (
                <div className="flex gap-6">
                  <MapPin className="text-[#D97706] shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-slate-700">Address</p>
                    <p className="text-slate-500">{profile.address}</p>
                  </div>
                </div>
              )}
              {profile.business_hours && (
                <div className="flex gap-6">
                  <Clock className="text-[#D97706] shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-slate-700">Open Hours</p>
                    <p className="text-slate-500">{profile.business_hours}</p>
                  </div>
                </div>
              )}
              {profile.parking_info && (
                <div className="flex gap-6">
                  <Car className="text-[#D97706] shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-slate-700">Parking</p>
                    <p className="text-slate-500">{profile.parking_info}</p>
                  </div>
                </div>
              )}
              {profile.contact_method && (
                <div className="flex gap-6">
                  <Phone className="text-[#D97706] shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-slate-700">Contact</p>
                    <p className="text-slate-500">{profile.contact_method}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="lg:w-1/2 rounded-3xl overflow-hidden min-h-[400px] relative bg-slate-200 grayscale contrast-125">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=DUMMY_KEY&q=${encodeURIComponent(profile.address || profile.store_name || '')}`}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
              <p className="text-slate-400">Map Placeholder: {profile.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}