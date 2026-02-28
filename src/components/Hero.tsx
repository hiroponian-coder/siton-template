import { Profile } from '@/types/profile';

export default function Hero({ profile }: { profile: Profile }) {
  const heroImage = profile.image_urls?.[0] || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000';

  return (
    <section className="relative h-[90vh] w-full">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt={profile.store_name || 'Cafe'}
          className="h-full w-full object-cover brightness-[0.7]"
        />
      </div>
      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.4em] text-white/80">
            Welcome to {profile.store_name}
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
            都市の静寂と<br />至福の一杯
          </h1>
          <div className="mt-12 h-16 w-[1px] bg-white mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
}