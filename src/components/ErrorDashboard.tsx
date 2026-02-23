import { Activity, ServerCrash, Cpu } from 'lucide-react';

export default function ErrorDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-[#111111] border border-[#ff0033]/50 p-4 rounded flex flex-col">
        <div className="flex items-center gap-2 text-[#cccccc] mb-2">
          <Activity className="w-5 h-5 text-[#ff0033]" />
          <span className="font-mono text-sm">SYS_LOAD</span>
        </div>
        <div className="text-3xl font-bold text-[#ff0033] mt-auto">98.9%</div>
        <div className="w-full bg-[#333333] h-1 mt-2">
          <div className="bg-[#ff0033] h-1 w-[98.9%] animate-pulse"></div>
        </div>
      </div>
      
      <div className="bg-[#111111] border border-[#00ff66]/50 p-4 rounded flex flex-col">
        <div className="flex items-center gap-2 text-[#cccccc] mb-2">
          <ServerCrash className="w-5 h-5 text-[#00ff66]" />
          <span className="font-mono text-sm">ERR_COUNT</span>
        </div>
        <div className="text-3xl font-bold text-[#00ff66] mt-auto">1,337</div>
        <div className="text-xs text-[#00ff66]/70 mt-1 font-mono">+42 in last hour</div>
      </div>

      <div className="bg-[#111111] border border-[#ff0033]/50 p-4 rounded flex flex-col">
        <div className="flex items-center gap-2 text-[#cccccc] mb-2">
          <Cpu className="w-5 h-5 text-[#ff0033]" />
          <span className="font-mono text-sm">MEM_LEAK</span>
        </div>
        <div className="text-3xl font-bold text-[#ff0033] mt-auto">CRITICAL</div>
        <div className="text-xs text-[#ff0033]/70 mt-1 font-mono animate-bounce">Out of bounds</div>
      </div>
    </div>
  );
}
