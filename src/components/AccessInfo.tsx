import { Profile } from '@/types/profile';
import { MapPin, Clock, Phone, Car, Square } from 'lucide-react';

export default function AccessInfo({ profile }: { profile: Profile }) {
  return (
    <section className="bg-[#2d3436] py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-sm font-bold tracking-[0.3em] text-[#e17055]">ACCESS</h2>
            <h3 className="mb-10 text-3xl font-bold md:text-4xl">店舗情報</h3>
            
            <div className="space-y-8">
              {profile.address && (
                <div className="flex items-start">
                  <MapPin className="mr-4 mt-1 h-6 w-6 text-[#e17055]" />
                  <div>
                    <p className="font-bold">ADDRESS</p>
                    <p className="mt-1 text-gray-300">{profile.address}</p>
                  </div>
                </div>
              )}
              {profile.business_hours && (
                <div className="flex items-start">
                  <Clock className="mr-4 mt-1 h-6 w-6 text-[#e17055]" />
                  <div>
                    <p className="font-bold">OPEN HOURS</p>
                    <p className="mt-1 text-gray-300">{profile.business_hours}</p>
                  </div>
                </div>
              )}
              {profile.seats_count && (
                <div className="flex items-start">
                  <Square className="mr-4 mt-1 h-6 w-6 text-[#e17055]" />
                  <div>
                    <p className="font-bold">SEATS</p>
                    <p className="mt-1 text-gray-300">{profile.seats_count} 席</p>
                  </div>
                </div>
              )}
              {profile.parking_info && (
                <div className="flex items-start">
                  <Car className="mr-4 mt-1 h-6 w-6 text-[#e17055]" />
                  <div>
                    <p className="font-bold">PARKING</p>
                    <p className="mt-1 text-gray-300">{profile.parking_info}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-800">
            {/* Placeholder for real map */}
            <div className="flex h-full w-full flex-col items-center justify-center text-gray-500">
              <MapPin className="mb-4 h-12 w-12" />
              <p>Google Map Integration Placeholder</p>
              <p className="mt-2 text-xs">{profile.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}