import { Profile } from '@/types/profile';
import { Coffee, Wind, MapPin } from 'lucide-react';

export default function ConceptGrid({ profile }: { profile: Profile }) {
  const concepts = [
    { 
      icon: <Coffee size={32} />,
      title: "Authentic Roast",
      desc: "厳選された豆を使用し、それぞれの特性を引き出す焙煎にこだわっています。"
    },
    { 
      icon: <Wind size={32} />,
      title: "Modern Space",
      desc: "都会の喧騒を忘れさせる、ミニマリズムを基調とした静謐な空間デザイン。"
    },
    { 
      icon: <MapPin size={32} />,
      title: "Hideout Venue",
      desc: "路地裏に位置する、知る人ぞ知る大人のための隠れ家スポット。"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {concepts.map((item, idx) => (
            <div key={idx} className="text-center space-y-4">
              <div className="inline-flex p-4 bg-[#FAFAF9] text-[#B45309] rounded-full">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#262626]">{item.title}</h3>
              <p className="text-[#1C1917]/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}