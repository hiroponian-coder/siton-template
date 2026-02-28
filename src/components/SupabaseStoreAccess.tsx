import { MapPin, Clock, Armchair, Car } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function SupabaseStoreAccess({ profile }: { profile: Profile }) {
  const details = [
    { icon: MapPin, label: 'Address', value: profile.address },
    { icon: Clock, label: 'Hours', value: profile.business_hours },
    { icon: Armchair, label: 'Seats', value: profile.seats_count },
    { icon: Car, label: 'Parking', value: profile.parking_info },
  ].filter(d => d.value);

  return (
    <section id="access" className="bg-[#2D2D2D] py-24 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl font-bold">Access & Info</h2>
            <p className="mt-6 text-white/60 leading-relaxed">
              {profile.access_info || "アクセスの詳細や近隣情報はこちらをご確認ください。皆様のお越しを心よりお待ちしております。"}
            </p>
            <div className="mt-12 space-y-6">
              {details.map((item, i) => (
                <div key={i} className="flex items-start space-x-4 border-b border-white/10 pb-4">
                  <item.icon className="mt-1 text-[#A67C52]" size={20} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#A67C52]">{item.label}</p>
                    <p className="mt-1 text-lg">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-full min-h-[400px] w-full bg-white/5 grayscale hover:grayscale-0 transition-all">
            {/* In a real scenario, embed a Google Map here if address is available */}
            <div className="flex h-full items-center justify-center border border-white/10 text-white/20 uppercase tracking-[0.5em]">
              Map View Area
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}