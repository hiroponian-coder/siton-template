import { Power } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#00ff66]/30 bg-[#000000] mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-xs text-[#cccccc]/60 font-mono">
          © {new Date().getFullYear()} ERROR_TEST_SYS. All bugs reserved.
        </p>
        <div className="flex items-center gap-2 mt-4 md:mt-0 text-[#00ff66] text-xs font-mono">
          <Power className="w-4 h-4" />
          SYSTEM ONLINE
        </div>
      </div>
    </footer>
  );
}
