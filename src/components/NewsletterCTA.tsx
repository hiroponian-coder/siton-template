import { Profile } from '@/types/profile';

export default function NewsletterCTA({ profile }: { profile: Profile }) {
  return (
    <section className="py-24 bg-[#C4A484] text-white overflow-hidden relative">
       <div className="absolute right-[-10%] top-[-20%] opacity-10">
         <h2 className="text-[200px] font-bold rotate-12">SIGHTON</h2>
       </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            最新のニュースとイベント情報を、<br />あなたのメールボックスへ。
          </h2>
          <p className="text-white/80 mb-10">
            季節の新作メニューや、限定イベント、会員だけの特典をお届けします。
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Email address"
              className="flex-1 bg-white/10 border border-white/20 px-6 py-4 outline-none focus:bg-white/20 transition-all placeholder:text-white/50"
            />
            <button className="bg-white text-[#C4A484] px-10 py-4 text-sm tracking-widest uppercase font-bold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </form>
          {profile.target_actions && (
             <p className="mt-4 text-xs text-white/60 italic">Join our community: {profile.target_actions}</p>
          )}
        </div>
      </div>
    </section>
  );
}