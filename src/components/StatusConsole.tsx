"use client"
import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const BOOT_LOGS = [
  "Loading core modules...",
  "Initializing memory banks... OK",
  "Warning: Security protocols bypassed.",
  "Injecting fault injector payload...",
  "Connecting to bug tracking matrix...",
  "SYSTEM READY. AWAITING FATAL COMMAND."
];

export default function StatusConsole() {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < BOOT_LOGS.length) {
        setLogs(prev => [...prev, BOOT_LOGS[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-3xl border border-[#00ff66]/40 bg-[#000000] p-4 rounded-md shadow-[0_0_15px_rgba(0,255,102,0.2)] font-mono text-sm">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#00ff66]/20 text-[#00ff66]">
        <Terminal className="w-4 h-4" />
        <span>SYS_INIT_CONSOLE</span>
      </div>
      <div className="space-y-2">
        {logs.map((log, index) => (
          <div key={index} className={`${log.includes('Warning') ? 'text-[#ff0033]' : 'text-[#00ff66]'}`}>
            &gt; {log}
          </div>
        ))}
        {logs.length < BOOT_LOGS.length && (
          <div className="animate-pulse text-[#00ff66]">&gt; _</div>
        )}
      </div>
    </div>
  );
}
