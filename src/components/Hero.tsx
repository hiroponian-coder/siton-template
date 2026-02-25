import { Profile } from '@/types/profile';
import { Coffee } from 'lucide-react';

export default function Hero({ profile }: { profile: Profile }) {
  const imageUrl = profile.image_urls?.[0];

  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#4A332D]">
      {imageUrl ? (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      ) : (
        <div className="absolute inset-0 opacity-20 flex items-center justify-center">
          <Coffee className="w-96 h-96 text-[#FDFBF7]" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E16]/90 to-transparent" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-[#FDFBF7]">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wider drop-shadow-lg">
          {profile.store_name || 'Cafe Sighton'}
        </h1>
        {profile.design_atmosphere && (
          <p className="text-xl md:text-2xl font-light mb-8 italic text-[#FDFBF7]/90 drop-shadow-md">
            {profile.design_atmosphere}
          </p>
        )}
        {profile.store_strengths && (
          <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto bg-black/20 p-6 rounded-2xl backdrop-blur-sm">
            {profile.store_strengths}
          </p>
        )}
      </div>
    </section>
  );
}