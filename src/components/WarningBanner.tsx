import { ShieldAlert } from 'lucide-react';

export default function WarningBanner() {
  return (
    <div className="bg-[#FFFF00] text-[#000000] p-4 flex items-center justify-center gap-4 my-8 mx-4 border-4 border-[#E50914] shadow-[8px_8px_0_0_#E50914] transform -rotate-1 hover:rotate-0 transition-transform">
      <ShieldAlert size={32} className="animate-ping" />
      <div className="font-bold uppercase tracking-widest">
        <h2 className="text-xl">Breach Detected</h2>
        <p className="text-sm opacity-80">Do not proceed further without proper authorization protocols.</p>
      </div>
    </div>
  );
}