import { Profile } from '@/types/profile';

export default function PhilosophySection({ profile }: { profile: Profile }) {
  return (
    <section className="py-24 bg-[#F9F7F2] px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <span className="text-[#D4AF37] font-semibold tracking-widest text-sm mb-4">PHILOSOPHY</span>
        <h2 className="text-3xl md:text-4xl text-[#2C3E50] mb-8 font-serif italic italic">
          洗練された空間で、特別な一杯を
        </h2>
        <div className="w-16 h-px bg-[#2C3E50]/20 mb-8" />
        <p className="text-[#1A1A1A]/70 leading-loose text-lg font-light">
          都会の喧騒を離れ、23時の静寂を昼下がりに。{profile.store_name}は、モダンなデザインと厳選されたコーヒーで、あなたに上質なひとときを提供します。日常の中に、そっと息を呑むような美しさを。
        </p>
      </div>
    </section>
  );
}