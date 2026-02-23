import { AlertTriangle, Zap, ShieldAlert, Skull } from 'lucide-react';

interface TriggerButtonsProps {
  onTrigger: (message: string, type: 'error' | 'warning' | 'info') => void;
}

export default function TriggerButtons({ onTrigger }: TriggerButtonsProps) {
  return (
    <div className="bg-[#111111] border border-[#333333] p-6 rounded relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff0033] to-[#00ff66]"></div>
      <h2 className="text-xl font-mono text-[#cccccc] mb-6 flex items-center gap-2">
        <Zap className="w-5 h-5 text-[#00ff66]" />
        INJECTION_VECTORS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button 
          onClick={() => onTrigger("NullReferenceException thrown at Core.dll", "error")}
          className="flex items-center justify-between p-4 border border-[#ff0033] text-[#ff0033] hover:bg-[#ff0033] hover:text-[#000000] transition-all font-mono group"
        >
          <span>NULL_POINTER</span>
          <AlertTriangle className="w-5 h-5 group-hover:animate-ping" />
        </button>
        <button 
          onClick={() => onTrigger("Memory limit exceeded. 1024GB leaked.", "warning")}
          className="flex items-center justify-between p-4 border border-[#00ff66] text-[#00ff66] hover:bg-[#00ff66] hover:text-[#000000] transition-all font-mono group"
        >
          <span>MEM_OVERFLOW</span>
          <AlertTriangle className="w-5 h-5" />
        </button>
        <button 
          onClick={() => onTrigger("Deadlock detected in DB transaction.", "error")}
          className="flex items-center justify-between p-4 border border-[#ff0033] text-[#ff0033] hover:bg-[#ff0033] hover:text-[#000000] transition-all font-mono group"
        >
          <span>DB_DEADLOCK</span>
          <ShieldAlert className="w-5 h-5" />
        </button>
        <button 
          onClick={() => {
            onTrigger("Simulating fatal crash...", "error");
            setTimeout(() => {
              window.location.href = '/fatal-crash';
            }, 1000);
          }}
          className="flex items-center justify-between p-4 bg-[#ff0033]/10 border border-[#ff0033] text-[#ff0033] hover:bg-[#ff0033] hover:text-[#000000] transition-all font-mono group"
        >
          <span className="font-bold">INITIATE_FATAL</span>
          <Skull className="w-5 h-5 group-hover:animate-spin" />
        </button>
      </div>
    </div>
  );
}
