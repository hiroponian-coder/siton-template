import { ShieldCheck, Wifi, Users, Music } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function FeaturesGrid({ profile }: { profile: Profile }) {
  const features = [
    { icon: <ShieldCheck size={28} />, title: 'Comfort Space', desc: '一人でも心地よいプライベート感。' },
    { icon: <Wifi size={28} />, title: 'High-speed Wi-Fi', desc: '快適なネットワーク環境を完備。' },
    { icon: <Users size={28} />, title: `${profile.seats_count || '22'} Seats`, desc: '開放感のあるレイアウト。' },
    { icon: <Music size={28} />, title: 'Modern Beats', desc: '会話を邪魔しない心地よいBGM。' },
  ];

  return (
    <section className="py-24 bg-[#334155]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-6 text-[#D97706]">{f.icon}</div>
              <h3 className="font-bold text-xl mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}