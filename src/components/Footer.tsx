import { Profile } from '@/types/profile';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="bg-[#FAFAF9] border-t border-[#262626]/10 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#262626]">{profile.store_name}</h2>
            <p className="text-[#1C1917]/60 max-w-xs">
              {profile.address}
            </p>
          </div>
          <div className="text-left md:text-right text-sm text-[#1C1917]/40">
            <p className="mb-2">&copy; {new Date().getFullYear()} {profile.store_name}. All rights reserved.</p>
            <p>Designed for the Modern Coffee Lover.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}