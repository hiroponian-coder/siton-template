import { Calendar } from 'lucide-react'
import { Profile } from '@/types/profile';

export default function ActionReservationCta({ profile }: { profile: Profile }) {
  if (!profile.target_actions) return null;

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden bg-[#A67C52] p-12 text-center text-white lg:p-24">
          <div className="relative z-10">
            <h2 className="font-serif text-3xl font-bold md:text-5xl">Reservation & Inquiry</h2>
            <p className="mt-6 text-white/80">
              {profile.target_actions}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="bg-[#2D2D2D] px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-black">
                Book a Table
              </button>
              {profile.contact_method && (
                <p className="flex items-center w-full justify-center mt-4 text-sm italic text-white/70">
                  <Calendar className="mr-2" size={16} /> Contact: {profile.contact_method}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}