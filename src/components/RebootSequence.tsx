import { useEffect, useState } from 'react';

export default function RebootSequence() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            window.location.href = '/';
          }, 1000);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 1;
      });
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full bg-[#000000] text-[#cccccc] p-8 font-mono flex flex-col justify-center items-center">
      <div className="w-full max-w-2xl">
        <div className="mb-4 flex justify-between text-sm">
          <span>REBOOT_SEQUENCE_INITIATED</span>
          <span className="text-[#00ff66]">{Math.min(progress, 100)}%</span>
        </div>
        <div className="w-full h-4 border border-[#333333] p-0.5">
          <div 
            className="h-full bg-[#00ff66] transition-all duration-200"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="mt-4 text-xs text-[#cccccc]/50 h-20">
          {progress > 10 && <div>&gt; Restoring core files...</div>}
          {progress > 40 && <div>&gt; Bypassing corrupted memory sectors...</div>}
          {progress > 70 && <div>&gt; Re-establishing bug matrix...</div>}
          {progress >= 100 && <div className="text-[#ff0033]">&gt; SYSTEM RECOVERY FAILED. RESTARTING...</div>}
        </div>
      </div>
    </div>
  );
}
