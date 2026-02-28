import { Link as LinkIcon } from 'lucide-react'
import { Profile } from '@/types/profile';
import Link from 'next/link';

export default function DynamicCTASection({ profile }: { profile: Profile }) {
  return (
    <section className="py-24 bg-[#2C3E50] text-[#F9F7F2] text-center px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight italic">
          特別な時間を、ご予約ください。
        </h2>
        <p className="mb-12 text-[#F9F7F2]/70 font-light tracking-wide">
          貸切のご相談や、テイクアウトの事前注文も承っております。
        </p>
        <Link 
          href="/reservation" 
          className="inline-block bg-[#D4AF37] text-[#2C3E50] px-12 py-5 font-bold uppercase tracking-[0.2em] hover:bg-[#F9F7F2] transition-colors"
        >
          Reservation
        </Link>
      </div>
    </section>
  );
}