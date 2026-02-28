import { MapPin, Phone, Car } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function AccessMap({ profile }: { profile: Profile }) {
  if (!profile.address && !profile.access_info) return null;

  return (
    <section id="access" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[2rem] overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-10 text-[#1F2937]">Access</h2>
            
            <div className="space-y-8">
              {profile.address && (
                <div className="flex gap-4">
                  <div className="mt-1 text-[#00CDB8]"><MapPin size={24} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">{profile.address}</p>
                  </div>
                </div>
              )}
              
              {profile.access_info && (
                <div className="flex gap-4">
                  <div className="mt-1 text-[#00CDB8]"><MapPin size={24} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Getting Here</h4>
                    <p className="text-gray-600">{profile.access_info}</p>
                  </div>
                </div>
              )}

              {profile.parking_info && (
                <div className="flex gap-4">
                  <div className="mt-1 text-[#00CDB8]"><Car size={24} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Parking</h4>
                    <p className="text-gray-600">{profile.parking_info}</p>
                  </div>
                </div>
              )}

              {profile.contact_method && (
                <div className="flex gap-4">
                  <div className="mt-1 text-[#00CDB8]"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Contact</h4>
                    <p className="text-gray-600">{profile.contact_method}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:w-1/2 min-h-[400px] bg-gray-200 relative">
            {/* Placeholder for real map */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
              Google Maps Integration
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}