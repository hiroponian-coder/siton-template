import { Bug } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-[#33FF00] p-6 bg-[#000000] text-center flex flex-col items-center justify-center gap-2">
      <div className="flex items-center gap-2 text-[#FFFF00]">
        <Bug size={20} className="animate-bounce" />
        <span className="uppercase text-xs font-bold tracking-widest">System Failure Imminent</span>
        <Bug size={20} className="animate-bounce" />
      </div>
      <p className="text-xs opacity-70">© {new Date().getFullYear()} Agent 3 Error Injection Test. All bugs reserved.</p>
    </footer>
  );
}