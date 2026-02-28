import { Profile } from '@/types/profile';
import { Coffee } from 'lucide-react';

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="border-t border-gray-100 bg-white py-12 text-[#2d3436]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-2">
            <Coffee className="h-6 w-6 text-[#e17055]" />
            <span className="text-xl font-bold">{profile.store_name}</span>
          </div>
          
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {profile.store_name}. All rights reserved.
          </p>

          <div className="flex space-x-6 text-sm font-medium">
            <a href="#" className="hover:text-[#e17055]">PRIVACY POLICY</a>
            <a href="#" className="hover:text-[#e17055]">CONTACT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}