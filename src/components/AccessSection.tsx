import { Profile } from '@/types/profile';
import { MapPin, Clock, Phone, Armchair, Car } from 'lucide-react';

export default function AccessSection({ profile }: { profile: Profile }) {
  return (
    <section className="py-24 bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
             <h2 className="text-4xl font-bold text-[#1A1A1A] mb-12 uppercase tracking-widest">Access</h2>
             <div className="space-y-8">
               {profile.address && (
                 <div className="flex items-start space-x-4">
                   <MapPin className="text-[#C5A059] mt-1" size={24} />
                   <div>
                     <h4 className="font-bold text-[#1A1A1A]">Address</h4>
                     <p className="text-[#2D2D2D] opacity-80">{profile.address}</p>
                   </div>
                 </div>
               )}
               {profile.business_hours && (
                 <div className="flex items-start space-x-4">
                   <Clock className="text-[#C5A059] mt-1" size={24} />
                   <div>
                     <h4 className="font-bold text-[#1A1A1A]">Business Hours</h4>
                     <p className="text-[#2D2D2D] opacity-80">{profile.business_hours}</p>
                   </div>
                 </div>
               )}
               <div className="grid grid-cols-2 gap-6 pt-6">
                 {profile.seats_count && (
                   <div className="flex items-center space-x-2 text-sm text-[#2D2D2D]/70">
                     <Armchair size={18} />
                     <span>Seats: {profile.seats_count}</span>
                   </div>
                 )}
                 {profile.parking_info && (
                   <div className="flex items-center space-x-2 text-sm text-[#2D2D2D]/70">
                     <Car size={18} />
                     <span>Parking: {profile.parking_info}</span>
                   </div>
                 )}
               </div>
               {profile.contact_method && (
                 <div className="mt-10">
                   <button className="bg-[#1A1A1A] text-[#FDFDFD] px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-[#C5A059] transition-colors">
                     {profile.contact_method}
                   </button>
                 </div>
               )}
             </div>
          </div>
          <div className="h-[450px] bg-gray-100 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
            {/* Placeholder for Map - In a real app we'd use Google Maps with the address */}
            <img 
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover"
              alt="Map View"
            />
          </div>
        </div>
      </div>
    </section>
  );
}