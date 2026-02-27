import { Profile } from '@/types/profile';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="bg-[#1A1A1A] text-[#FDFDFD] py-16 border-t border-[#FDFDFD]/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold tracking-tighter mb-2">{profile.store_name}</h3>
            <p className="text-[#FDFDFD]/40 text-sm italic">Refining your daily brew since 2024.</p>
          </div>
          <div className="text-right">
            <p className="text-xs tracking-widest text-[#FDFDFD]/30 uppercase">
              &copy; {new Date().getFullYear()} {profile.store_name}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}