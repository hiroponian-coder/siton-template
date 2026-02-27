import { Profile } from '@/types/profile';
import { MapPin, Clock, Info } from 'lucide-react';

export default function Access({ profile }: { profile: Profile }) {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-light text-[#2D2424] mb-8 uppercase tracking-widest">Access</h2>
              <div className="space-y-6">
                {profile.address && (
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-[#C5A059] shrink-0" size={24} />
                    <div>
                      <p className="font-medium mb-1">ADDRESS</p>
                      <p className="text-[#333333]/80">{profile.address}</p>
                    </div>
                  </div>
                )}
                {profile.business_hours && (
                  <div className="flex items-start space-x-4">
                    <Clock className="text-[#C5A059] shrink-0" size={24} />
                    <div>
                      <p className="font-medium mb-1">HOURS</p>
                      <p className="text-[#333333]/80">{profile.business_hours}</p>
                    </div>
                  </div>
                )}
                {profile.access_info && (
                  <div className="flex items-start space-x-4">
                    <Info className="text-[#C5A059] shrink-0" size={24} />
                    <div>
                      <p className="font-medium mb-1">DETAILS</p>
                      <p className="text-[#333333]/80">{profile.access_info}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="h-[400px] bg-zinc-200">
            {/* Placeholder for Map UI */}
            <div className="w-full h-full flex items-center justify-center text-zinc-400">
              <MapPin size={48} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}