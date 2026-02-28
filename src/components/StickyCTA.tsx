import { MessageCircle, Mail, Link as LinkIcon } from 'lucide-react'
import { Profile } from '@/types/profile';
import Link from 'next/link';

export default function StickyCTA({ profile }: { profile: Profile }) {
  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
      {profile.line_id && (
        <a
          href={`https://line.me/R/ti/p/@${profile.line_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#06C755] text-white px-6 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform font-bold"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="hidden md:inline">LINEでお問い合わせ</span>
        </a>
      )}
      
      <Link
        href="/contact"
        className="flex items-center justify-center w-14 h-14 bg-[#1B2E35] text-white rounded-full shadow-2xl hover:bg-[#C9A050] transition-all transform hover:rotate-12"
      >
        <Mail className="w-6 h-6" />
      </Link>
    </div>
  );
}