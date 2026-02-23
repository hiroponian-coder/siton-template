import { Terminal } from 'lucide-react';

interface LiveLogProps {
  logs: { id: number; message: string; type: 'error' | 'warning' | 'info' }[];
}

export default function LiveLog({ logs }: LiveLogProps) {
  return (
    <div className="bg-[#050505] border border-[#333333] rounded h-full min-h-[400px] flex flex-col font-mono">
      <div className="p-3 border-b border-[#333333] flex items-center justify-between bg-[#111111]">
        <div className="flex items-center gap-2 text-[#cccccc] text-sm">
          <Terminal className="w-4 h-4 text-[#00ff66]" />
          LIVE_TRACE
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-[#ff0033] animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-[#00ff66]"></div>
        </div>
      </div>
      <div className="p-4 flex-grow overflow-hidden flex flex-col justify-end gap-2 text-xs">
        {logs.length === 0 && (
          <div className="text-[#cccccc]/50 italic">Awaiting events...</div>
        )}
        {logs.map(log => (
          <div key={log.id} className={`break-words ${
            log.type === 'error' ? 'text-[#ff0033]' : 
            log.type === 'warning' ? 'text-[#00ff66]' : 'text-[#cccccc]'
          }`}>
            <span className="opacity-50 mr-2">[{new Date(log.id).toISOString().split('T')[1].slice(0, -1)}]</span>
            {log.message}
          </div>
        ))}
      </div>
    </div>
  );
}
